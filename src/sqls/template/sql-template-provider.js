/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-07 16:11:13
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-08 15:59:58
 */
const { FILE } = require("./../../libs/file");
const { PATH } = require("./../../libs/path");
const { XML_DOM } = require("./../../libs/xml-dom");
const { parse } = require("./sqltemplate-parser");
const { WhereNode, IfNode, SqlNode, TemplateNode, ForEachNode } = require("./sql-template");

exports.SqlTemplateProvider = class SqlTemplateProvider {
        constructor() {
                this.map = new Map();
                this._loadedFiles = new Set();
        }
        get(name) {
                return this.map.get(name);
        }
        /**
         * 
         * @param {String} file  main mapper file path
         */
        load(file) {
                load(file, this._loadedFiles, this.map);
        }
}

/**
 * 
 * @param {String} file 
 * @param {Set<String>} loadedFiles 
 * @param {Map<String,SqlNode>} templates 
 */
function load(file, loadedFiles, templates) {
        let doc = XML_DOM.load(FILE.read(file));
        let mapper = XML_DOM.selectDirect(doc, x => x.tagName == "mapper");

        loadedFiles.add(file);

        if (mapper.length != 1)
                throw new Error(`should only one mapper in file:${file}`);

        let namespace = XML_DOM.getAttribute(mapper[0], "namespace");
        if (!namespace)
                throw new Error(`namespace attribute is required in tag(mapper) in file: ${file}`)


        XML_DOM.selectDirect(mapper[0], x => x.tagName == "import").forEach(x => {
                let path = XML_DOM.getAttribute(x, "path");
                if (!path)
                        throw new Error(`path attribute is required in tag(import) in file: ${file}`);

                let absolutePath = PATH.resolve(file, path);
                if (loadedFiles.has(absolutePath))
                        return;

                load(absolutePath, loadedFiles, templates);
        });

        XML_DOM.selectDirect(mapper[0],
                x => x.tagName == "sql" || x.tagName == "update" || x.tagName == "insert"
                        || x.tagName == "delete" ||x.tagName == "select").forEach(y => {
                                resolveSqlNode(y, templates, namespace, file);
                        });

}
/**
 * 
 * @param {Node} node 
 * @param {Map<String,SqlNode>} templates 
 * @param {String} namespace 
 * @param {String} file 
 */
function resolveSqlNode(node, templates, namespace, file) {

        let id = XML_DOM.getAttribute(node, "id");

        if (!id)
                throw new Error(`id attribute is required of tag(${node.tagName}) in file: ${file}`);

        if (templates.has(`${namespace}.${id}`))
                throw new Error(`sql ${namespace}.${id} already exists in templates in file :${file}`)

        let sqlNode = new SqlNode(`${namespace}.${id}`,node.tagName);

        resolveCore(node, templates, file, sqlNode);

        templates.set(`${namespace}.${id}`, sqlNode);

}

/**
 * 
 * @param {Node} node 
 * @param {Map<String,SqlNode>} templates 
 * @param {String} file 
 */
function resoleForEach(node, templates, file) {
        let forEachNode = new ForEachNode();

        forEachNode.separator = XML_DOM.getAttribute(node, "separator");
        forEachNode.collection = XML_DOM.getAttribute(node, "collection");
        forEachNode.open = XML_DOM.getAttribute(node, "open");
        forEachNode.close = XML_DOM.getAttribute(node, "close");
        forEachNode.index = XML_DOM.getAttribute(node, "index");
        resolveCore(node, templates, file, forEachNode);

        return forEachNode;
}
/**
 * 
 * @param {Node} node 
 * @param {Map<String,SqlNode>} templates 
 * @param {String} file 
 */
function resolveIf(node, templates, file) {
        let ifNode = new IfNode();
        ifNode.test = XML_DOM.getAttribute(node, "test");
        resolveCore(node, templates, file, ifNode);
        return ifNode;
}
/**
 * 
 * @param {Node} node 
 * @param {Map<String,SqlNode>} templates 
 * @param {String} file 
 */
function resolveWhere(node, templates, file) {
        let whereNode = new WhereNode();
        resolveCore(node, templates, file, whereNode);
        return whereNode;
}
/**
 * 
 * @param {Node} node 
 * @param {Map<String,SqlNode>} templates 
 * @param {String} file 
 */
function resolveInclude(node, templates, file) {
        let refId = XML_DOM.getAttribute(node, "refid");

        if (!refId)
                throw new Error("attribute refid is required of tag(include) in file :" + file);

        if (!templates.has(refId))
                throw new Error(`can not found reference(${refId}) in file:${file}`);

        return templates.get(refId);
}
/**
 * 
 * @param {Node} node 
 * @param {Map<String,SqlNode>} templates 
 * @param {String} file 
 */
function resolveCore(node, templates, file, sqlNode) {
        XML_DOM.selectDirect(node).forEach(x => {
                let tagName = x.tagName;
                if (tagName == "foreach") {
                        sqlNode.children.push(resoleForEach(x, templates, file));
                } else if (tagName == "if") {
                        sqlNode.children.push(resolveIf(x, templates, file));
                } else if (tagName == "where") {
                        sqlNode.children.push(resolveWhere(x, templates, file));
                } else if (tagName == "include") {
                        sqlNode.children.push(resolveInclude(x, templates, file));
                } else {
                        sqlNode.children.push(resolveTemplate(x, templates, file));
                }
        });
}
/**
 * 
 * @param {Node} node 
 * @param {Map<String,SqlNode>} templates 
 * @param {String} file 
 */
function resolveTemplate(node, templates, file) {
        let templateNode = new TemplateNode();

        if (node.nodeValue) {
                templateNode.template = parse(node.nodeValue);
        }

        return templateNode;
}