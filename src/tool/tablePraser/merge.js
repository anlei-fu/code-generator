/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-25 11:44:06
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-25 15:28:09
 */
var {  FILE } = require("./../libs/file")
const COMPILE = `<Compile Include="Properties/AssemblyInfo.cs" />`;
const GLOBAL = ` <Compile Include="Global.asax.cs">`;
const OUTPUT = "./outputs";
// macros need config
const BASE_PATH = "";
const SOLUTION_PREFIX = "";
const TABLE = "";
const ENTITY_PREFIX = "";

const COMMON_LAYER = "Common Layer";
const DATA_LAYER = "";
//entity
const ENTITY = "Entity";
const ENTITY_NAME = `${ENTITY_PREFIX}${TABLE}`;
const ENTITY_FOLDER = `${BASE_PATH}/${COMMON_LAYER}/${SOLUTION_PREFIX}.${ENTITY}/${ENTITY}`;
const ENTITY_PROJECT = `${BASE_PATH}/${COMMON_LAYER}/${SOLUTION_PREFIX}.${ENTITY}/${SOLUTION_PREFIX}.${ENTITY}.csproj`;
const ENTITY_INCLUDE = "";
const ENTITY_PATTER = "";

//dbaccess
const ACCESS = "Access";
const DBACCESS = "DbAccess";
const DBACCES_NAME = `${TABLE}`;
const DBACCESS_FOLEDER = `${BASE_PATH}/${DATA_LAYER}/${SOLUTION_PREFIX}.${DBACCESS}`;
const DBACCESS_PROJECT = "";
const DBACCESS_INCLUDE = "";
const DBACCESS_PATTER = "";

//idbacess
const IDBACCESS = "";
const IDBACCESS_NAME = "";
const IDBACCESS_FOLEDER = "";
const IDBACCESS_PROJECT = "";
const IDBACCESS_INCLUDE = "";
const IDBACCESS_PATTER = "";

//handler
const HANDLER = "";
const HANDLER_NAME = "";
const HANDLER_FOLEDER = "";
const HANDLER_PROJECT = "";
const HANDLER_INCLUDE = "";
const HANDLER_PATTER = "";

//service
const SERVICE = "";
const SERVICE_NAME = "";
const SERVICE_FOLEDER = "";
const SERVICE_PROJECT = "";
const SERVICE_INCLUDE = "";
const SERVICE_PATTER = "";

//controller
const CONTROLLER = "";
const CONTROLLER_NAME = "";
const CONTROLLER_FOLEDER = "";
const CONTROLLER_PROJECT = "";
const CONTROLLER_INCLUDE = "";
const CONTROLLER_PATTER = "";

//dbconfig
const DB_CONFIG = "";
const DB_CONFIG_NAME = "";
const DB_CONFIG_FOLEDER = "";
const DB_CONFIG_PROJECT = "";
const DB_CONFIG_INCLUDE = "";
const DB_CONFIG_PATTER = "";

//list model
const LIST_MOMDEL = "";
const LIST_MOMDEL_NAME = "";
const LIST_MOMDEL_FOLEDER = "";
const LIST_MOMDEL_PROJECT = "";
const LIST_MOMDEL_INCLUDE = "";
const LIST_MOMDEL_PATTER = "";

//item model
const ITEM_MODEL = "";
const ITEM_MODEL_NAME = "";
const ITEM_MODEL_FOLEDER = "";
const ITEM_MODEL_PROJECT = "";
const ITEM_MODEL_INCLUDE = "";
const ITEM_MODEL_PATTER = "";

//view model
const VIEW_MODEL = "";
const VIEW_MODEL_NAME = "";
const VIEW_MODEL_FOLEDER = "";
const VIEW_MODEL_PROJECT = "";
const VIEW_MODEL_INCLUDE = "";
const VIEW_MODEL_PATTER = "";




/**
 * Merge all files
 */
function merge() {
        // entity
        mergeCore(`${ENTITY_NAME}.cs`, ENTITY_FOLDER, ENTITY_PROJECT, ENTITY_INCLUDE, ENTITY_PATTER);
        // idbaccess
        mergeCore(`${IDBACCESS_NAME}.cs`, IDBACCESS_FOLEDER, IDBACCESS_PROJECT, IDBACCESS_INCLUDE, IDBACCESS_PATTER);
        // dbaccess 
        mergeCore(`${DBACCESS_NAME}.cs`, DBACCESS_FOLEDER, DBACCESS_PROJECT, DBACCESS_INCLUDE, DBACCESS_PATTER);
        // ihandler
        mergeCore(`${IHANDLER_NAME}.cs`, IHANDLER_FOLEDER, IHANDLER_PROJECT, IHANDLER_INCLUDE, IHANDLER_PATTER);
        // handler 
        mergeCore(`${HANDLER_NAME}.cs`, HANDLER_FOLEDER, HANDLER_PROJECT, HANDLER_INCLUDE, HANDLER_PATTER);
        // service
        mergeCore(`${SERVICE_NAME}.cs`, SERVICE_FOLEDER, SERVICE_PROJECT, SERVICE_INCLUDE, SERVICE_PATTER);
        // controller
        mergeCore(`${CONTROLLER_NAME}.cs`, CONTROLLER_FOLEDER, CONTROLLER_PROJECT, CONTROLLER_INCLUDE, CONTROLLER_PATTER);

       
}
/**
 * @description merge file into solution,
 *  1. copy file to project folder
 *  2. add meta info into project file (extention with ".csproj")
 * @param {String} file  to merge
 * @param {String} folder  to move
 * @param {String} project   merge to
 * @param {String} Include  , content add to project
 * @param {String} pattern  ,projet file replace pattern
 */
function mergeCore(file, folder, project, Include, pattern) {
        if (file.exists(`${OUTPUT}/${file}`)) {
                file.copy(`${OUTPUT}/${file}.cs`, `${folder}/${file}`);
                let p = file.read(project);
                p = p.replace(pattern, `<Compile Include="${Include}/${file}" />\r\n${pattern}\r\n`);
                file.write(p);
                Console.log(`${OUTPUT}/${ENTITY_NAME}.cs merged!`)
        } else {
                Console.log(`${OUTPUT}/${ENTITY_NAME}.cs miss!`);
        }
}
exports.merge = merge;