const {DIR}=require("./../../libs/dir");
const {FILE}=require("./../../libs/file");
const { generate } = require("./../../sqls/model/model-generator")
/**
 * 
 * @param {String} project 
 * @param {String} host 
 * @param {String} port 
 * @param {String} db 
 * @param {String} user 
 * @param {String} password 
 */
async function init(project, dbConfig) {

        // create project required folders
        makeAllFolders(project);

        // generate db info
      await  generate(dbConfig, project,`./output/${project}/db`);
}

/**
 * 
 * @param {String} project 
 */
function makeAllFolders(project) {
        DIR.create(`./output/${project}`);
        DIR.create(`./output/${project}/db`);
        DIR.create(`./output/${project}/src`);
        DIR.create(`./output/${project}/src/main`);
        DIR.create(`./output/${project}/src/main/java`);
        DIR.create(`./output/${project}/src/main/java/com`);

        let root = `./output/${project}/src/main/java/com/${project}`;
        DIR.create(root);
        DIR.create(`${root}/service`);
        DIR.create(`${root}/pojo`);
        DIR.create(`${root}/mapper`);
        DIR.create(`${root}/controller`);
        DIR.create(`${root}/service/impl`);
        DIR.create(`${root}/pojo/req`);
        DIR.create(`${root}/pojo/resp`);
        DIR.create(`${root}/pojo/entity`);
        DIR.create(`${root}/pojo/param`);
        DIR.create(`${root}/config`);
        DIR.create(`${root}/util`);
        DIR.create(`${root}/exception`);
        DIR.create(`./output/${project}/src/main/resource`)
        DIR.create(`./output/${project}/src/main/resource/mapper`)
        FILE.write(`./output/${project}/src/main/resource/application.properties`,"");
        DIR.create(`./output/${project}/src/test`);
        DIR.create(`./output/${project}/src/test/java`)
        DIR.create(`./output/${project}/src/test/java/com`);
        DIR.create(`./output/${project}/src/test/java/com/${project}`);
        FILE.copy("./templates/R.java", `${root}/pojo/resp/R.java`);
}

exports.init = init;