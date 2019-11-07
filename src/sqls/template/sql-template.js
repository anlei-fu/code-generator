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
class Node {
        constructor() {
                this.children = [];
        }
        render() {

        }
}
/**
 * @member {String} id
 */

class MapperNode {
        constructor() {
                this.id;
        }
}

/**
 * @member {String} path
 */
class ImportNode {
        constructor() {
                this.path = path;
        }
}

/**
 * 
 */

class SqlNode {
        constructor() {
                this.id;
        }
}

class WhereNode extends Node {
        render() {
                super.render();

        }
}

class ForEachNode extends Node {
        constructor() {
                this.collection;
                this.index;
                this.seperator;
                this.close;
                this.open;
        }
}

class IfNode extends Node {
        constructor() {
                this.test = "";
        }
}

class ContentNode extends Node {
        constructor() {
                this.template = "";
        }
}

class IncludeNode extends Node {
        constructor(refId) {
                this.refId = refId;
        }

}

