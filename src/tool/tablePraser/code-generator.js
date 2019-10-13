

function generateSummary(content){
let temp=
`/// <summary>
/// ${content}
/// </summary>\r\n`;
}

const { Table } = require("./../../resolvers/db-info")

class Generator {
  constructor(table) {
    this.table = table;
    this.entity;
    this.service;
    this.handler;
    this.ihandler;
    this.access;
    this.iaccess;
    this.controller;
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
    const ident="";
    [this.table.columns].forEach(x => {
    fileds += `${ident}<filed name=${x.name} pname=${x.pname} `;
      if (x.isPk)
        fileds += `isPk="ture"`;
      fileds += `label=${x.description}/>\r\n`;
    });

    return fileds;
  }
  /**
   * 
   */
  generateSqlTemplate() {
   
  }
  /**
   *  entities
   */
  generateEntity() {
    let f,p="";
    let ident="";

    [this.table.columns].forEach(x=>{
       f+=`${ident}private ${x.sqlType.toCsharpType()} _${x.name};\r\n`;
       p+=`${generateSummary(x.description)}public ${x.sqlType.toCsharpType()} _${x.name} {get {return _${x.name};} set {_${x.name}=value;}}\r\n`
    })
  }
  /**
   *  iaccess
   */
  generateIAccess() {

  }
  /**
   *  ihandler
   */
  generateIHandler() {

  }
  /**
   * handler
   */
  generateHandler() {

  }
  /**
   * service
   */
  generateSerivece() {

  }
  /**
   * acccess
   */
  generateAccess() {

  }
  /**
   *  controller
   */
  generateController() {

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

  }
  /**
   * view list
   */
  generateViewList() {

  }
}
