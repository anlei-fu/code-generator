const { FILE } = require("./../../libs/file");
const { DIR } = require("./../../libs/dir");
const { STR } = require("./../../libs/str");
const { OBJECT } = require("./../../libs/utils");
const { getJavaType } = require("./utils");
class ModelGenerator {
        constructor(project, db) {
                this.project = project;
                this.tables = OBJECT.toArray(db);
                this.tables.forEach(x=>{
                        x.columns=OBJECT.toArray(x.columns);
                })
        }
        generateFolder() {
                DIR.create(`./output/${this.project}`);
                DIR.create(`./output/${this.project}/main`);
                DIR.create(`./output/${this.project}/main/java`);
                DIR.create(`./output/${this.project}/main/java/com`);
                let root = `./output/${this.project}/main/java/com/${this.project}`;
                DIR.create(root);
                DIR.create(`${root}/service`);
                DIR.create(`${root}/pojo`);
                DIR.create(`${root}/mapper`);
                DIR.create(`${root}/controller`);
                DIR.create(`${root}/service/impl`);
                DIR.create(`${root}/pojo/req`);
                DIR.create(`${root}/pojo/resp`);
                DIR.create(`${root}/pojo/dao`);
                DIR.create(`${root}/pojo/param`);
                DIR.create(`${root}/config`);
                DIR.create(`${root}/util`);
                DIR.create(`${root}/exception`);
                DIR.create(`./output/${this.project}/main/resource`)
                DIR.create(`./output/${this.project}/main/resource/mapper`)
                FILE.write(`./output/${this.project}/main/resource/application.properties`);
                DIR.create(`./output/${this.project}/test`);
                DIR.create(`./output/${this.project}/test/java`)
                DIR.create(`./output/${this.project}/test/java/com`);
                FILE.copy("./templates/R.java",`${root}/pojo/resp/R.java`);
        }

        generateDao() {
                let root = `./output/${this.project}/main/java/com/${this.project}/pojo/dao`;

                this.tables.forEach(table => {
                        let output = FILE.read("./templates/dao.java");
                        let items = "";
                        table.columns.forEach(column => {
                                let item ="    "+FILE.read("./templates/daoItem.java");
                                let annotation = "";
                                annotation = `    @ApiModelProperty("${column.description}")\r\n`;
                                if (!column.nullable) {
                                        annotation += "    @NotNull\r\n"
                                }
                                item = annotation + item;
                                items += item.replace("@type", getJavaType(column.type))
                                        .replace("@name", column.name);
                        });

                        output = output.replace("@items", items.trimRight());

                        FILE.write(`${root}/${STR.upperFirstLetter(table.name)}Dao.java`,
                                this.finalReplace(output, STR.upperFirstLetter(table.name),table.description));
                });

        }

        generateMapper() {
                this.doWrite(`./output/${this.project}/main/java/com/${this.project}/mapper`, "mapper.java", "Mapper")
        }

        generateService() {
                this.doWrite(`./output/${this.project}/main/java/com/${this.project}/service`, "service.java", "Service")
        }

        generateServiceImpl() {
                this.doWrite(`./output/${this.project}/main/java/com/${this.project}/service/impl`, "serviceImpl.java", "ServiceImpl")
        }

        generateController() {
                this.doWrite(`./output/${this.project}/main/java/com/${this.project}/controller`, "controller.java", "Controller")
        }

        generateMapperXml() {
                this.doWrite(`./output/${this.project}/main/resource/mapper`, "mapper.xml", "Mapper", "xml");
        }

        doWrite(root, template, suffix, extension = "java",description) {
                this.tables.forEach(table => {
                        console.log(table.description);
                        FILE.write(`${root}/${STR.upperFirstLetter(table.name)}${suffix}.${extension}`,
                                this.doReplace(`./templates/${template}`, STR.upperFirstLetter(table.name),table.description));
                });
        }
        doReplace(file, name,description) {
                return this.finalReplace(FILE.read(file), name,description);
        }
        finalReplace(input, name,description="") {
                return input.replace(/@name/g, name)
                        .replace(/@project/g, this.project)
                        .replace(/@description/g,description);
        }
}

function main(project, db) {
        let generator = new ModelGenerator(project, db);
        generator.generateFolder();
        generator.generateDao();
        generator.generateMapper();
        generator.generateService();
        generator.generateServiceImpl();
        generator.generateController();
        generator.generateMapperXml();
}

/*-----------------------------------------------------main------------------------------------------------*/
let db = require("./../../sqls/test/output/spider/main");
main("spider", db)
