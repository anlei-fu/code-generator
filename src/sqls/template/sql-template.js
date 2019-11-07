/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-07 09:19:15
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-07 14:00:41
 */
exports.SqlTemplate = class SqlTemplate {
        constructor() {
                this.segments = [];
        }
        render(option) {

        }
}

/**
 * @member {String} name
 * @member {boolean} isVaribel
 * @member {boolean} replaceDirect
 */
exports.SqlSegment = class SqlSegment {
        constructor(name, isVarible,replaceDirect) {
                this.name = name;
                this.isVaribel = isVarible;
                this.replaceDirect=replaceDirect;
        }
        render(option) {

        }
}
/**
 * @member {[Node]} children 
 */
exports.Node=class Node {
        constructor() {
                this.children = [];
        }
        render() {

        }
}

exports.SqlNode=class SqlNode {
        constructor() {
                this.id;
        }
}

exports.WhereNode=class WhereNode extends Node {
        render() {
                super.render();

        }
}

exports.ForEachNode=class ForEachNode extends Node {
        constructor() {
                this.collection;
                this.index;
                this.seperator;
                this.close;
                this.open;
        }
}

exports.IfNode=class IfNode extends Node {
        constructor() {
                this.test = "";
        }
}

exports.ContentNode=class ContentNode extends Node {
        constructor() {
                this.template = "";
        }
}

exports.IncludeNode=class IncludeNode extends Node {
        constructor(refId) {
                this.refId = refId;
        }

}

