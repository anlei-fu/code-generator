const { init } = require("./initializer")
const { all } = require("./../common/table-analyze/table-info-resolvers/oracle-table-info-resolver/outputs/dm/all");

class GenerateConfig {
   constructor () {
      this.project = "";
      this.root = "";
      this.abbrOfProject = "";
      this.dictionaryServiceName = "";
      this.dictionaryMethod = "";
      this.upperTowLetter = true;
      this.edit = true;
      this.delete = true;
      this.batchOperation = false;
      this.add = true;
      this.exportExcel = false;
      this.batchDelete = false;
      this.batchChangeStatus = false;
   }
}

/**
* Builder for GenerateConfig
*/
class GenerateConfigBuilder {
   constructor () {
      this._config = new GenerateConfig();
   }

   /**
    * Set property project
    * 
    * @param {String} project
    * @returns {GenerateConfigBuilder}
    */
   project(project) {
      this._config.project = project;
      return this;
   }

   /**
    * Set property root
    * 
    * @param {String} root
    * @returns {GenerateConfigBuilder}
    */
   root(root) {
      this._config.root = root;
      return this;
   }

   /**
    * Set property abbrOfProject
    * 
    * @param {String} abbrOfProject
    * @returns {GenerateConfigBuilder}
    */
   abbrOfProject(abbrOfProject) {
      this._config.abbrOfProject = abbrOfProject;
      return this;
   }

   /**
    * Set property dictionaryServiceName
    * 
    * @param {String} dictionaryServiceName
    * @returns {GenerateConfigBuilder}
    */
   dictionaryServiceName(dictionaryServiceName) {
      this._config.dictionaryServiceName = dictionaryServiceName;
      return this;
   }

   /**
    * Set property dictionaryMethod
    * 
    * @param {String} dictionaryMethod
    * @returns {GenerateConfigBuilder}
    */
   dictionaryMethod(dictionaryMethod) {
      this._config.dictionaryMethod = dictionaryMethod;
      return this;
   }

   /**
    * Set property upperTowLetter
    * 
    * @returns {GenerateConfigBuilder}
    */
   upperTowLetter() {
      this._config.upperTowLetter = true;
      return this;
   }

   /**
    * Set property edit
    * 
    * @returns {GenerateConfigBuilder}
    */
   edit(value) {
      this._config.edit = value;
      return this;
   }

   /**
    * Set property delete
    * 
    * @returns {GenerateConfigBuilder}
    */
   delete(value=true) {
      this._config.delete = value;
      return this;
   }

   /**
    * Set property batch
    * 
    * @returns {GenerateConfigBuilder}
    */
   batchOperation() {
      this._config.batchOperation = true;
      return this;
   }

   /**
    * Set property add
    * 
    * @returns {GenerateConfigBuilder}
    */
   add(value=true) {
      this._config.add = value;
      return this;
   }

   /**
    * Set property exportExcel
    * 
    * @returns {GenerateConfigBuilder}
    */
   exportExcel() {
      this._config.exportExcel = true;
      return this;
   }

   /**
    * Set property batchDelete
    * 
    * @returns {GenerateConfigBuilder}
    */
   batchDelete() {
      this._config.batchDelete = true;
      return this;
   }

   /**
    * Set property batchChangeStatus
    * 
    * @returns {GenerateConfigBuilder}
    */
   batchChangeStatus() {
      this._config.batchChangeStatus = true;
      return this;
   }

   /**
    * Build 
    * 
    * @returns {GenerateConfig}
    */
   build() {
      return this._config;
   }
}

// const SETTLE = {
//    project: "",
//    root: "",
// }

// const ORDER_COMPARE = {
//    project: "CompareManage",
//    root: "F:/业务开发项目_研发一/web/CompareManage",
//    abbrOfProject: "order_compare"
// }

// const DC = {
//    project: "DaiChong",
//    root: "F:/业务开发项目_研发一/代充系统/Management",
//    abbrOfProject: "dc",
//    dictionaryServiceName: "",
//    dictionaryMethod: "",
//    upperTowLetter: true,
// }

// const USER_SYSTEM = {
//    project: "MatchingRecharge",
//    root: "F:/业务开发项目_研发一/18充值系统/web",
//    abbrOfProject: "18",
//    dictionaryServiceName: "",
//    dictionaryMethod: "",
//    upperTowLetter: true,
// }

const FC = new GenerateConfigBuilder();
FC.project("QXFC")
   .root("F:/业务开发项目_研发一/非充系统/qxfc/Web")
   .abbrOfProject("fc")
   .dictionaryServiceName("")
   .dictionaryMethod("")
   .upperTowLetter()
   .add()
   .edit()
   .delete();
const ZD = new GenerateConfigBuilder();
ZD.project("ZDSystem")
   .root("C:/Users/Administrator/Desktop/Projects/业务开发项目_研发一/千行收银台/syt_system_web")
   .abbrOfProject("zd")
   .dictionaryServiceName("")
   .dictionaryMethod("")
   .upperTowLetter()
   .add()
   .edit()
   .delete();

const _18 = new GenerateConfigBuilder();
_18.project("MatchingRecharge")
   .root("F:/业务开发项目_研发一/18充值系统/web")
   .abbrOfProject("18")
   .dictionaryServiceName("")
   .dictionaryMethod("")
   .upperTowLetter()
   .add()
   .edit()
   .delete();



const DM = new GenerateConfigBuilder();
DM.project("DMSystem")
   .root("F:/业务开发项目_研发一/短信营销平台/dm_system_web")
   .abbrOfProject("dm")
   .dictionaryServiceName("DMSystemDictionaryService")
   .dictionaryMethod("GetDataStatusList")
   .upperTowLetter()
   .add()
   .edit()
   .delete();

function test() {
   let config = DM
      .add(true)
      .edit(true)
      .delete(true)
      .batchChangeStatus()
      .batchDelete()
      .build();

   init(all.dmDownScript, config);
}

test();