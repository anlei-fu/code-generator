/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-25 11:44:06
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-23 09:26:59
 */
var { FILE } = require("./../../libs/file");
var { DIR } = require("./../../libs/dir");
const { XML } = require("./../../libs/xml");

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
        
        // entity
        mergeCsFile(ENTITY_FILE, ENTITY_FOLDER, ENTITY_PROJECT);
        // idbaccess
        mergeCsFile(IACCESS_FILE, IDBACCESS_FOLEDER, IDBACCESS_PROJECT);
        // dbaccess 
        mergeCsFile(ACCESS_FILE, DBACCESS_FOLEDER, DBACCESS_PROJECT);
        // ihandler
        mergeCsFile(IHANDLER_FILE, IHANDLER_FOLEDER, IHANDLER_PROJECT);
        // handler 
        mergeCsFile(HANDLER_FILE, HANDLER_FOLEDER, HANDLER_PROJECT);
        // service
        mergeCsFile(SERVICE_FILE, SERVICE_FOLEDER, SERVICE_PROJECT);
        // controller
        mergeCsFile(CONTROLLER_FILE, CONTROLLER_FOLEDER, CONTROLLER_PROJECT);
        // item model
        mergeCsFile(ITEM_MODEL_FILE, SERVICE_MOMDEL_FOLEDER, SERVICE_MOMDEL_PROJECT);
        // list model
        mergeCsFile(LIST_MODEL_FILE, SERVICE_MOMDEL_FOLEDER, SERVICE_MOMDEL_PROJECT);
        // view model
        mergeCsFile(VIEW_MODEL_FILE, SERVICE_MOMDEL_FOLEDER, SERVICE_MOMDEL_PROJECT);

        mergeEconfig();
        mergeUrlMapping();
        mergeView();
}


async function mergeEconfig() {
        FILE.copy(CONFIG_FILE, DB_CONFIG_FOLEDER);
        let prj = await XML.toJson(FILE.read(CONTROLLER_PROJECT))
        prj.ItemGroup[3].Content.push({$:{Include:`Config\\EConfig\\${CONFIG_FILE}`},SubType:["Designer"]});
        FILE.write(CONTROLLER_PROJECT,XML.toXml(prj));
}


async function mergeUrlMapping() {
        let mapping = await XML.toJson(FILE.read(URL_MAPPING_FILE))
        let data = { $: { name=`${ENTITY}/index` }, url: [] };

        mapping.UrlMappings.UrlGroup.push(data)

        DIR.getFiles(OUT_VIEW_FOLDER).forEach(x => {
                data.url.push({ $: { name=`^/${ENTITY}/${x}([\\w/]*)$`, title=`${x}` } });
        });

        FILE.write(URL_MAPPING_FILE, mapping);
}

async function mergeView() {
        DIR.copy(OUT_VIEW_FOLDER, VIEW_FOLEDER);
        let prj = await XML.toJson(FILE.read(CONTROLLER_PROJECT))
        DIR.getFiles(OUT_VIEW_FOLDER).forEach(x => {
                prj.ItemGroup[3].Content.push({ $: { Include: `views\\${ENTITY}\\${x}` } });
        });
        FILE.write(project, XML.toXml(CONTROLLER_PROJECT));
}


/**
 * 
 * @param {String} file 
 * @param {String} folder 
 * @param {String} project 
 * @param {String?} prefix 
 */
async function mergeCsFile(file, folder, project, prefix) {
        prefix = prefix || "";

        if (file.exists(`${OUTPUT}/${file}`)) {
                //copy
                file.copy(`${OUTPUT}/${file}.cs`, `${folder}/${file}`);
                // tojson
                let prj = await XML.toJson(FILE.read(project))
                prj.ItemGroup[2].Compile.push({ $: { Include: `${prefix}${file}` } });
                FILE.write(project, XML.toXml(prj));
                console.log(`${OUTPUT}/${ENTITY_NAME}.cs merged!`)
        } else {
                console.log(`${OUTPUT}/${ENTITY_NAME}.cs miss!`);
        }
}
// exports
exports.merge = merge;