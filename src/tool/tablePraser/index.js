/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-25 09:09:06
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-25 15:26:39
 */
//imports
var { file } = require("./../libs/file");
/**
 * class of db table meta data
 */
class Table {
        constructor(name) {
                this.name = name;
                this.columns = [];
        }
        /**
         * 
         * @param {String} name 
         * @param {String} type 
         * @param {boolean} nullable 
         * @param {String} defaultValue 
         * @param {String} comment 
         */
        addColumn(name, type, nullable, defaultValue, comment) {
                this.columns.push(new Column(name, type, nullable, defaultValue, comment));
        }
        /**
         * @description get mapper file string
         */
        toXml() {
                var ret = `<?xml version="1.0" encoding="utf-8" ?>
<config>
  <table name="${this.name}">
    <fields>\r\n`;
                for (let c of this.columns)
                        ret += c.toXml();

                return ret +
                        `    </fields>
  </table>
</config>`;

        }
        /**
         * @description get entity table tb name
         * @returns {String}
         */
        getCName() {
                var items = this.name.split("_");
                let ret = "";
                for (let item of items) {
                        ret += item.substr(0, 1).toUpperCase() + item.substr(1, item.length - 1).toLowerCase();
                }
                return ret;
        }
        /**
         * @description generate  entity file @template "./templates/entity.cs"
         * @returns {String}
         */
        generateEntity() {
                var temp = file.read("./templates/entity.cs");
                temp = temp.replace(/@TableName/g, this.getCName());
                var fields = "";
                var props = "";
                for (let c of this.columns) {
                        fields += c.toEntityF();
                        props += c.toEntityP();
                }

                return temp.replace("@Slot", `${fields}\r\n\r\n${props}`);
        }
        /**
         * @description generate Ihandler cs file
         * @returns {String}
         */
        generateIHandler() {
                return file.read("./templates/ihandler.cs")
                           .replace(/@TableName/g, this.getCName());
        }
        /**
         * @description generate handler.cs file
         * @returns {String}
         */
        generateHandler() {
                return file.read("./templates/handler.cs")
                           .replace(/@TableName/g, this.getCName());
        }
        /**
         * @description generate service.cs file
         * @returns {String}
         */
        generateService() {
                return file.read("./templates/service.cs")
                           .replace(/@TableName/g, this.getCName());
        }
        /**
         * @returns {String}
         */
        generateController() {
                return file.read("./templates/controller.cs")
                           .replace(/@TableName/g, this.getCName());
        }
        /**
         * @description generate dbaccess.cs file
         * @returns {String}
         */
        generateDbAcess() {
                return file.read("./templates/access.cs")
                           .replace(/@TableName/g, this.getCName());
        }
        /**
         * @param table objec: {ignore:[String], renders:[{ColumnRenderParams}],addtion:[{ColumnRenderParams
         * }] }
         * @description generate index.cshtml
         * @returns {String}
         */
        generateIndex(script, filter, table) {
                return "";
        }
        /**
         * @description generate idbaccess.cs file
         * @returns {String}
         */
        generateIDBAcess() {
                return file.read("./templates/iaccess.cs")
                           .replace(/@TableName/g, this.getCName());
        }
        /**
         * @description generate itemmodal.cs file
         * @returns {String}
         */
        generateItemModal() {
                return file.read("./templates/itemModal.cs")
                           .replace(/@TableName/g, this.getCName());
        }
        /**
         * @description generate listmodal.cs file
         * @returns {String}
         */
        generateListModal() {
                return file.read("./templates/listModal.cs")
                           .replace(/@TableName/g, this.getCName());
        }

}
/**
 *  class of db column meta data
 */
class Column {
        constructor(name, type, nullable, defaultValue, comment) {
                this.comment = comment || "";
                this.name = name || "";
                this.type = type;
                this.nullable = nullable || "";
                this.defaultValue = defaultValue || "";
        }
        /**
         * Change first letter to upper case
         * @param {String} input 
         */
        lowerFirstLetter(input) {
                return input.substr(0, 1).toLowerCase() + input.substr(1, input.length - 1);
        }
        /**
         * Format to <filed/> xml element 
         */
        toXml() {
                return `      <filed pname="${this.getCName()}" name="${this.name}" lable="${this.comment}"/>\r\n`;
        }
        /**
         * Format this.name to entity private filed name
         */
        getfieldName() {
                return "_" + this.lowerFirstLetter(this.getCName());
        }
        /**
         * Generate entity private filed
         */
        toEntityField() {
                return `                private ${this.getFieldType()} ${this.getfieldName()};\r\n `;
        }
        /**
         * Convert db column name to entity property name
         */
        getCName() {
                var items = this.name.split("_");
                let ret = "";
                for (let item of items) {
                        ret += item.substr(0, 1).toUpperCase() + item.substr(1, item.length - 1).toLowerCase();
                }
                return ret;
        }
        /**
         * Generate entity public property
         */
        toEntityProperty() {
                return `                public ${this.getFieldType()} ${this.getCName()} { get {return ${this.getfieldName()} ;} set {${this.getfieldName()}=value;}}\r\n`;
        }
        /**
         * Get mapped csharp type from sql type
         */
        getFieldType() {
                if (this.type.indexOf("VAR") != -1)
                        return "string";
                if (this.type.indexOf("NUM") != -1) {
                        return this.nullable == "Y" ? "decimal?" : "decimal";
                }
                if (this.type.indexOf("DA") != -1) {
                        return "DateTime";
                }
        }
}
/**
 *  class of column render config
 */
class ColumnRenderConfig {
        /**
         * @constructor
         * @param {String} name  propertyName
         * @param {String} hName  headerName
         * @param {boolean} show    render this column ?
         * @param {String} pattern   render pattern
         */
        constructor(name, hName, show, pattern) {
                this.hName = hName;
                this.name = name;
                this.show = show;
                this.render = pattern || `<td>@item.${name}<td>\r\n`;
        }
        /**
         * @returns {String}
         */
        renderColumn() {
                return this.show ? render : "";
        }
        /**
         * @returns {String}
         */
        renderHeader() {
                return `<td>${this.hName}</td>\r\n`;
        }
}

/**
 * @description generate all files
 * @param {String} name  db table name 
 */
function generate(name) {
        let tab = resolve(name);
        var tabName = getCSharpName(name);
        // db config
        file.write(`./outputs/${tabName}.xml`, tab.toXml());
        // entity 
        file.write(`./outputs/${tabName}.cs`, tab.generateEntity());
        // db access
        file.write(`./outputs/${tabName}Access.cs`, tab.generateDbAcess())
        // idb access
        file.write(`./outputs/I${tabName}Access.cs`, tab.generateIDBAcess())
        // handler
        file.write(`./outputs/${tabName}Handler.cs`, tab.generateHandler());
        // ihandler
        file.write(`./outputs/I${tabName}Handler.cs`, tab.generateIHandler());
        // index view
        file.write(`./outputs/${tabName}.cshtml`, tab.generateIndex());
        /**
         * Aditional customer generate
         */
        // service
        file.write(`./outputs/${tabName}Service.cs`, tab.generateService());
        // controller
        file.write(`./outputs/${tabName}Controller.cs`, tab.generateController());

}
/**
 * @description resolve table info from file table.txt
 *  5 rows as a group of column, 1 name,2 type ,3 nullable  ,4 ..5 comment
 * @param {String} name db table name not null
 * 
 * @returns a @see Table
 */
function resolve(name) {
        //read all lines from file
        var lines = file.readLines("tab.txt", "utf8", true, false);
        let tab = new Table(name);
        let i = -1;
        while (i + 5 < lines.length) {
                tab.addColumn(lines[i + 1],
                              lines[i + 2],
                              lines[i + 3],
                              lines[i + 4],
                              lines[i + 5]);
                i += 5;
        }
        return tab;
}
/**
 * @description convert db column name or table name to c# name
 * @param {String} name of db column or  table
 */
function getCSharpName(name) {
        var items = name.split("_");
        let ret = "";
        for (let item of items) {
                ret += item.substr(0, 1).toUpperCase();
                ret += item.substr(1, item.length - 1).toLowerCase();
        }
        return ret;
}

// call generate
generate("FC_PHONE_CHARGE");

var { merge } = require("./merge");
// call merge 
merge("FcPhoneCharge", "QXFC", "E:/Test/Web");
