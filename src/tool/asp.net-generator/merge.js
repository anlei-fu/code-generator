/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-25 11:44:06
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-23 09:26:59
 */
var { FILE } = require("../../libs/file");
var { DIR } = require("../../libs/dir");
const { XML } = require("../../libs/xml");
const {LoggerFactory} =require("./../logging/logger-factory");

const LOG=LoggerFactory.getLogger("file merger");     

const OUTPUT = "./outputs";
// macros need config
const BASE_PATH = "";
const PROJECT = "";
const TABLE = "";
const COMMON_LAYER = "Common Layer";
const DATA_LAYER = "Data Layer";
const DATA_LAYER = "User Layer";
const DATA_LAYER = "Service Layer";

//ouput files
const ENTITY_FILE = `${OUTPUT}/${TABLE}/${TABLE}.cs`;
const CONTROLLER_FILE = `${OUTPUT}/${TABLE}/${TABLE}Controller.cs`;
const IACCESS_FILE = `${OUTPUT}/${TABLE}/I${TABLE}Access.cs`;
const ACCESS_FILE = `${OUTPUT}/${TABLE}/${TABLE}Access.cs`;
const IHANDLER_FILE = `${OUTPUT}/${TABLE}/I${TABLE}Handler.cs`;
const HANDLER_FILE = `${OUTPUT}/${TABLE}/${TABLEY}Handler.cs`;
const SERVICE_FILE = `${OUTPUT}/${TABLE}/${TABLE}Service.cs`;
const CONFIG_FILE = `${OUTPUT}/${TABLE}/${TABLE}Service.xml`;
const OUT_VIEW_FOLDER = `${OUTPUT}/${TABLE}/${TABLE}`;
const ITEM_MODEL_FILE = `${OUTPUT}/${TABLE}/${TABLE}ItemModel.cs`;
const LIST_MODEL_FILE = `${OUTPUT}/${TABLE}/${TABLE}ListModel.cs`;
const VIEW_MODEL_FILE = `${OUTPUT}/${TABLE}/${TABLE}ViewModel.cs`;



//entity
const ENTITY = "Entity";
const ENTITY_FOLDER = `${BASE_PATH}/${COMMON_LAYER}/${PROJECT}.${ENTITY}/${ENTITY}`;
const ENTITY_PROJECT = `${BASE_PATH}/${COMMON_LAYER}/${PROJECT}.${ENTITY}/${PROJECT}.${ENTITY}.csproj`;

//dbaccess
const DBACCESS = "DbAccess";
const DBACCESS_FOLEDER = `${BASE_PATH}/${DATA_LAYER}/${PROJECT}.${DBACCESS}`;
const DBACCESS_PROJECT = `${BASE_PATH}/${DBACCESS_FOLEDER}/${PROJECT}.${DBACCESS}.csproj`;

//idbacess
const IDBACCESS_FOLEDER = `${BASE_PATH}/${COMMON_LAYER}/${PROJECT}.Interfaces/DataAccess`;
const IDBACCESS_PROJECT = `${BASE_PATH}/${COMMON_LAYER}/${PROJECT}.Interfaces/${PROJECT}.Interfaces.csproj`;

//handler
const HANDLER_FOLEDER = `${BASE_PATH}/${COMMON_LAYER}/${PROJECT}.Interfaces/Logic`;
const HANDLER_PROJECT = `${BASE_PATH}/${COMMON_LAYER}/${PROJECT}.Interfaces/${PROJECT}.Interfaces.csproj`;;

//service
const SERVICE_FOLEDER = `${BASE_PATH}/${SERVICE_LAYER}/${PROJECT}.UserService`;
const SERVICE_PROJECT = `${BASE_PATH}/${SERVICE_FOLEDER}/${PROJECT}.UserService.csproj`;

//controller
const CONTROLLER_FOLEDER = `${BASE_PATH}/${USER_LAYER}/${PROJECT}.UserWeb/Controllers`;
const CONTROLLER_PROJECT = `${BASE_PATH}/${USER_LAYER}/${PROJECT}.UserWeb/${PROJECT}.UserWeb.csproj;`

//view
const VIEW_FOLEDER = `${BASE_PATH}/${USER_LAYER}/${PROJECT}.UserWeb/Views`;

const CONFIG_FOLDER = `${BASE_PATH}/${USER_LAYER}/${PROJECT}.UserWeb/Config`;
//dbconfig
const DB_CONFIG_FOLEDER = `${BASE_PATH}/${USER_LAYER}/${PROJECT}.UserWeb\Config\EConfig`;

// url mapping
const URL_MAPPING_FILE = `${BASE_PATH}/${CONFIG_FOLDER}/UrlMappingConfig.xml`;

//list model
const SERVICE_MOMDEL_FOLEDER = `${BASE_PATH}/${SERVICE_LAYER}/${PROJECT}.Model`;
const SERVICE_MOMDEL_PROJECT = `${BASE_PATH}/${SERVICE_MOMDEL_FOLEDER}/${PROJECT}.Model.csproj`;

/**
 * Merge all files
 */
function merge() {
        LOG.info(`begin merge ${TABLE} files!`);

        LOG.info("merge finished!");
        
}


/*---------------------------------------------------------------------------------merge---------------------------------------------------------------------------------------*/

merge();


