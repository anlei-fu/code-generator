/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-14 09:05:18
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-14 18:06:27
 */


function generateSummary(content) {
  let temp =
`        ///<summary>
///${content}
///</summary>\r\n`;
  return temp;
}

function toCSharpType(name, length) {
  this.name = name;
  this.length = length;
  if (this.name.indexOf("char") != -1)
    return "string";

  if (this.name == "date")
    return "DateTime?";
  if (!length)
    return "int?";
  return this.length > 20 ? "decimal?" : "int?";
}


const { FILE } = require("./../../libs/file");
const { DIR } = require("./../../libs/dir");
const { STR } = require("./../../libs/str");
const { NamingStrategy } = require("./../../libs/naming-stratey");
const CLASS_IDENT = "    ";
const PROPERTY_IDENT = "        ";
const CONFIG_FILED_IDENT = "      ";

class Generator {
  /**
   * 
   * @param {Object} table 
   * @param {String} tableName 
   * @param {String} projectName 
   * @param {Object} option 
   * {
   *    config {
   *     filters:[],
   *     additionals:[()=>]
   * },
   *    import:{
   *             columns:[String],
   *             additional:[()=>]
   *    },
   *    index:{
   *              export,
   *              check,
   *              delete,
   *              filters:[()=>{js,html}],
   *              cells:{name:()=>String}
   *   },
   *    add: {
   *             items:[()=>html]
   *   },
   *   detail:{
   * }
   *    
   * }
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
        cname = NamingStrategy.toHungary(x.name).toUpperCase();

      fileds += `${CONFIG_FILED_IDENT}<filed pname="${pname}" name="${cname}" `;

      if (x.isPk)
        fileds += `isPk="ture"`;
      fileds += `label="${x.description}"/>\r\n`;
    }


    return FILE.read("templates/config.xml")
      .replace(new RegExp("@table.name", "g"), NamingStrategy.toHungary(this.table.name).toUpperCase())
      .replace("@fields", fileds);
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
      p += `${generateSummary(x.description || "")}${PROPERTY_IDENT}public ${type} ${pname} {get {return _${x.name};} set {_${x.name}=value;}}\r\n`
    }

    let text = FILE.read("./templates/entity.cs")
      .replace("@field", f)
      .replace("@property", p);

    return this.filt(text);
  }
  /**
   *  iaccess
   */
  generateIAccess() {
    return this.filt(FILE.read("./templates/iaccess.cs"));
  }
  /**
   *  ihandler
   */
  generateIHandler() {
    return this.filt(FILE.read("./templates/ihandler.cs"));
  }
  /**
   * handler
   */
  generateHandler() {
    return this.filt(FILE.read("./templates/handler.cs"));
  }
  /**
   * service
   */
  generateSerivece() {
    return this.filt(FILE.read("./templates/service.cs"))
  }
  /**
   * acccess
   */
  generateAccess() {
    return this.filt(FILE.read("./templates/access.cs"));

  }
  /**
   *  controller
   */
  generateController() {
    return this.filt(FILE.read("./templates/controller.cs"));
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
  generateModeList() {
    return this.filt(FILE.read("./templates/listModal.cs"));

  }
  generateItemModel() {
    return this.filt(FILE.read("./templates/itemModal.cs"));
  }
  /**
   * view list
   */
  generateViewList() {

  }

  filt(text) {
    return text.replace(new RegExp("@project.name", "g"), this.projectName)
      .replace(new RegExp("@table.name", "g"), this.tableName);

  }
}
function main() {


  let tab = JSON.parse(FILE.read("tab.txt"));
  let g = new Generator(tab, "FCPreCharge", "QXFC");
  let name = STR.upperFirstLetter(tab.name);
  FILE.write(`outputs/${name}.cs`, g.generateEntity());
  FILE.write(`outputs/${name}Access.cs`, g.generateAccess());
  FILE.write(`outputs/I${name}Access.cs`, g.generateIAccess());
  FILE.write(`outputs/I${name}Handler.cs`, g.generateIHandler());
  FILE.write(`outputs/${name}Handler.cs`, g.generateHandler());
  FILE.write(`outputs/${name}ItemModel.cs`, g.generateItemModel());
  FILE.write(`outputs/${name}ListModel.cs`, g.generateModeList());
  FILE.write(`outputs/${name}Controller.cs`, g.generateController());
  FILE.write(`outputs/${name}Service.cs`, g.generateSerivece());
  FILE.write(`outputs/${name}.xml`, g.generateEntityConfig());

}
main();