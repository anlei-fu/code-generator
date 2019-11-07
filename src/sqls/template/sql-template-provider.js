/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-07 16:11:13
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-07 16:24:43
 */
const { FILE } = require("./../../libs/file");
const { PATH } = require("./../../libs/path");
const { XML_DOM } = require("./../../libs/xml-dom");
const { WhereNode, IfNode, IncludeNode, SqlNode, ContentNode } = require("./sql-template");

class SqlTemplateProvider {
        constructor() {
                this._map = new Map();
        }
        get(name) {

        }

        static load(file) {

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
        let mapper = XML_DOM.selectDirect(doc, x => x.tagName = "mapper");

        loadedFiles.add(file);

        if (mapper.length != 1)
                throw new Error(`should only one mapper in file:${file}`);

        let namespace = XML_DOM.getAttr(mapper[0], "namesapce");
        if (!namespace)
                throw new Error("namespace attribute is required in tag(mapper) in file ${file}")


        XML_DOM.selectDirect(mapper[0], x => x.tagName == "import").forEach(x => {
                let path = XML_DOM.getAttr(x, "path");
                if (!path)
                        throw new Error(`path attribute is required in tag(import) in file ${file}`);

                let absolutePath = PATH.resolve(file, path);
                if (loadedFiles.has(absolutePath))
                        return;

                load(absolutePath, loadedFiles, templates);
        });

        XML_DOM.selectDirect(mapper[0],
                x => x.tagName == "sql" || x.tagName == "update" || x.tagName == "insert" || x, tagName == "select").forEach(x => {
                        resolveSqlNode(x, templates, namespace,file);
                });

}

function resolveSqlNode(node, templates, namespace,file) {
        XML_DOM.selectDirect(node).forEach(x=>{
                let tagName=x.tagName;
                if(tagName=="foreach"){

                } else if(tagName=="if"){

                } else if(tagName=="where"){

                }else if(tagName=="include"){

                }else{

                }
        })

}


function resoleForEach(node,templates,file){

}

function resolveIf(node,templates,file){

}

function resolveWhere(node,templates,file){

}

function resolveInclude(node,templates,file){

}

function resolveTemplate(node,templates,file){

}