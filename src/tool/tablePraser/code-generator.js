/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-14 09:05:18
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-15 15:38:41
 */
//imports
const { FILE } = require("./../../libs/file");
const { DIR } = require("./../../libs/dir");
const { STR } = require("./../../libs/str");
const { NamingStrategy } = require("./../../libs/naming-stratey");

const CLASS_IDENT = "    ";
const PROPERTY_IDENT = "        ";
const CONFIG_FILED_IDENT = "      ";
const IMPORT = "";

function generateSummary(description) {
  let temp = `
        ///<summary>
        ///${description}
        ///</summary>\r\n`;
  return temp;
}

/**
 * Convert sql type to c# type
 * @param {String} name 
 * @param {Int?} length 
 */
function toCSharpType(name, length) {
  name = name,
    length = length;

  if (name.indexOf("char") != -1)
    return "string";

  if (name == "date")
    return "DateTime?";

  if (!length)
    return "int?";

  return this.length > 20 ?
    "decimal?" : "int?";
}
class Generator {
  /**
   * 
   * @param {Object} table 
   * @param {String} tableName 
   * @param {String} projectName 
   * @param {Object} option 
   
   */
  constructor(table, tableName, projectName, option) {
    this.table = table;
    this.tableName = tableName;
    this.projectName = projectName;
    this.option = option;
  }
  /**
   * Url mapping config
   */
  generateUrlConfig() {

  }
  /**
   *  dao config
   */
  generateEntityConfig() {
    let fileds = "";
    for (let c in this.table.columns) {

      let x = this.table.columns[c],
        pname = STR.upperFirstLetter(x.name),
        cname = NamingStrategy.toHungary(x.name)
          .toUpperCase();

      fileds += `${CONFIG_FILED_IDENT}<filed pname="${pname}" name="${cname}" `;

      if (x.isPk)
        fileds += `isPk="ture"`;

      fileds += `label="${x.description}"/>\r\n`;
    }

    return FILE.read("templates/config.xml")
      .replace(new RegExp("@table.name", "g"), NamingStrategy.toHungary(this.table.name).toUpperCase())
      .replace("@fields", fileds.trim());
  }
  /**
   *  entities
   */
  generateEntity() {

    let f, p = "";
    for (const c in this.table.columns) {

      let x = this.table.columns[c],
        pname = STR.upperFirstLetter(x.name),
        type = toCSharpType(x.type.name, x.type.length);

      f += `${PROPERTY_IDENT}private ${type} _${x.name};\r\n`;
      p += `${generateSummary(x.description || "")}${PROPERTY_IDENT}public ${type} ${pname} { get { return _${x.name}; } set { _${x.name} = value; } }\r\n`

    }

    let text = FILE.read("./templates/entity.cs")
      .replace("@field", f)
      .replace("@property", p)
      .replace("undefined", "");

    return this.filts(text);
  }
  /**
   *  iaccess
   */
  generateIAccess() {
    return this.filts(FILE.read("./templates/iaccess.cs"));
  }
  /**
   *  ihandler
   */
  generateIHandler() {
    this.filts(FILE.read("./templates/ihandler.cs"));
  }

  /**
   * handler
   */
  generateHandler() {
    return this.filts(FILE.read("./templates/handler.cs"));
  }

  /**
   * service
   */
  generateSerivece() {
    return this.filts(FILE.read("./templates/service.cs"))
  }
  /**
   * acccess
   */
  generateAccess() {
    return this.filts(FILE.read("./templates/access.cs"));
  }
  /**
   *  controller
   */
  generateController() {
    return this.filts(FILE.read("./templates/controller.cs"));
  }

  /**
   *  index page
   */
  generateIndex() {

  }
  /**
   * editpage
   */
  generateEidt() {

  }
  /**
   * import page
   */
  generateImport() {

  }
  /**
   *  modal list
   */
  generateListModel() {
    return this.filts(FILE.read("./templates/listModal.cs"));

  }
  generateItemModel() {
    return this.filts(FILE.read("./templates/itemModal.cs"));
  }
  /**
   * view list
   */
  generateViewList() {

  }
  /**
   * Replace @table.name & @project.name
   * @param {String} text 
   */
  filts(text) {
    return text.replace(new RegExp("@project.name", "g"), this.projectName)
      .replace(new RegExp("@table.name", "g"), this.tableName);
  }

}
/**
 * 
 * @param {String} name table name
 * @param {String} project  project name
 * @param {Object} option  @see below
 */
function main(name, project, option) {
  let tab = JSON.parse(FILE.read("tab.txt"));

  let g = new Generator(tab, name, project, option);
  DIR.create(`outputs/${name}`);
  FILE.write(`outputs/${name}/${name}.cs`, g.generateEntity());
  FILE.write(`outputs/${name}/${name}Access.cs`, g.generateAccess());
  FILE.write(`outputs/${name}/I${name}Access.cs`, g.generateIAccess());
  FILE.write(`outputs/${name}/I${name}Handler.cs`, g.generateIHandler());
  FILE.write(`outputs/${name}/${name}Handler.cs`, g.generateHandler());
  FILE.write(`outputs/${name}/${name}ItemModel.cs`, g.generateItemModel());
  FILE.write(`outputs/${name}/${name}ListModel.cs`, g.generateListModel());
  FILE.write(`outputs/${name}/${name}Controller.cs`, g.generateController());
  FILE.write(`outputs/${name}/${name}Service.cs`, g.generateSerivece());
  FILE.write(`outputs/${name}/${name}.xml`, g.generateEntityConfig());


}
/**
 * option:
 * {
 *    config {
 *     columns:[String],   ---  filter columns
 *     additionals:[()=>String] 
 *    }
 *    viewList:[],
 *    import:{
 *             columns:[String],
 *             additional:[()=>String]
 *    },
 *    index:{
 *              check,
 *              delete,
 *              filters:[()=>{js,html}],
 *              cells:{name:()=>String}
 *    },
 *    add: {
 *             items:[()=>{js,html}]
 *    },
 *    detail:{
 *    },
 *    export:boolean,  ----- with export fearture
 *    delete:boolean   ----- with delete fearture
 * }
 */
const QXFC = "QXFC";
const DM = "DM";
let optionExample = {
  config: {
    filters: ["ChargeStatus", "Phone", "HkOrder"],
    additional: [() => "{&@ss}"],
    oderby: "",
    other: {}
  },
  index: {

  },
  import: {
    column: ["Phone", "PreChargeFace"]
  },
  add: {

  }
};
let option;
// ----------------------------------------------- main---------------------------------------------
main("FCPreCharge", QXFC, option);