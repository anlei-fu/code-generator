const { FILE } = require("../../libs/file");
const { DIR } = require("../../libs/dir");
const { STR } = require("../../libs/str");

const COMPYRIGHT = FILE.read(`${__dirname}/templates/copyright.java`).replace("@date", new Date().toLocaleString());
class ProjectStructreGenerator {
        generate(targetFolder, libPath, project, company, dataSourceConfig) {
                // create project required folders
                this._makeFoldersAndCoopyFiles(targetFolder, libPath, project, company, dataSourceConfig);
        }

        /**
        * Create all folders and files of project structure
        * 
        * @private
        * @param {String} project 
        * @param {String} company
        * @param {DbConfig} dbConfig
        */
        _makeFoldersAndCoopyFiles(targetFolder, libPath, project, company, dbConfig) {

                // base structure
                DIR.create(`${targetFolder}/`);
                DIR.create(`${targetFolder}/${project}`);
                DIR.create(`${targetFolder}/${project}/db`);
                DIR.create(`${targetFolder}/${project}/config`);
                DIR.create(`${targetFolder}/${project}/${project}`);

                // project folders
                DIR.create(`${targetFolder}/${project}/${project}/src`);
                DIR.create(`${targetFolder}/${project}/${project}/src`);
                DIR.create(`${targetFolder}/${project}/${project}/src/main`);
                DIR.create(`${targetFolder}/${project}/${project}/src/main/java`);
                DIR.create(`${targetFolder}/${project}/${project}/src/main/java/com`);
                DIR.create(`${targetFolder}/${project}/${project}/src/main/java/com/${company}`);

                let root = `${targetFolder}/${project}/${project}/src/main/java/com/${company}/${project}`;
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
                DIR.create(`${root}/utils`);
                DIR.create(`${root}/validate`);
                DIR.create(`${root}/validate/annotation`);
                DIR.create(`${root}/validate/validator`);
                DIR.create(`${root}/exception`);

                DIR.create(
                        `${targetFolder}/${project}/${project}/src/test/java/com/${company}/${project}/service/impl`
                );

                // resource folder
                DIR.create(`${targetFolder}/${project}/${project}/src/main/resources`);
                DIR.create(`${targetFolder}/${project}/${project}/src/main/resources/mapper`);

                // test folder
                DIR.create(`${targetFolder}/${project}/${project}/src/test`);
                DIR.create(`${targetFolder}/${project}/${project}/src/test/java`);
                DIR.create(`${targetFolder}/${project}/${project}/src/test/java/com`);

                // this._copy('./templates/dictionary.js', `${targetFolde}/${project}/db/dictionary.js`);

                // all default files
                this._copy(
                        `${__dirname}/templates/R.java`,
                        `${root}/pojo/resp/R.java`,
                        project,
                        company
                );

                this._copy(
                        `${__dirname}/templates/ControllerBase.java`,
                        `${root}/controller/ControllerBase.java`,
                        project,
                        company
                );

                // MapperBase
                this._copy(
                        `${__dirname}/templates/BaseCrudMapper.java`,
                        `${root}/mapper/BaseCrudMapper.java`,
                        project,
                        company
                );

                 // AbstractCrudService
                 this._copy(
                        `${__dirname}/templates/AbstractCrudService.java`,
                        `${root}/service/impl/AbstractCrudService.java`,
                        project,
                        company
                );

                this._copy(
                        `${__dirname}/templates/PageResult.java`,
                        `${root}/pojo/resp/PageResult.java`,
                        project,
                        company
                );
                

                this._copy(
                        `${__dirname}/templates/WebConfig.java`,
                        `${root}/config/WebConfig.java`,
                        project,
                        company
                );

                this._copy(
                        `${__dirname}/templates/SwaggerConfig.java`,
                        `${root}/config/SwaggerConfig.java`,
                        project,
                        company
                );

                this._copy(
                        `${__dirname}/templates/ValidatorConfig.java`,
                        `${root}/config/ValidatorConfig.java`,
                        project,
                        company
                );

                this._copy(
                        `${__dirname}/templates/logback.xml`,
                        `${targetFolder}/${project}/${project}/src/main/resources/logback.xml`,
                        project,
                        company
                );

                // page req
                this._copy(
                        `${__dirname}/templates/PageReq.java`,
                        `${root}/pojo/req/PageReq.java`,
                        project,
                        company
                );

                this._copy(
                        `${__dirname}/templates/PageTimeReq.java`,
                        `${root}/pojo/req/PageTimeReq.java`,
                        project,
                        company
                );

                // page helper util
                this._copy(
                        `${__dirname}/templates/PageHelperUtils.java`,
                        `${root}/utils/PageHelperUtils.java`,
                        project,
                        company
                );

                this._copy(
                        `${__dirname}/templates/DaoUtil.java`,
                        `${root}/utils/DaoUtil.java`,
                        project,
                        company
                );

                // build.gradle
                this._copy(
                        `${__dirname}/templates/build.gradle`,
                        `${targetFolder}/${project}/${project}/build.gradle`,
                        project,
                        company
                );

                this._copy(
                        `${__dirname}/templates/Application.java`,
                        `${targetFolder}/${project}/${project}/src/main/java/com/${company}/${project}/Application.java`,
                        project,
                        company
                );

                // create build.js
                FILE.write(
                        `${targetFolder}/${project}/build.js`,
                        STR.replace(
                                FILE.read(`${__dirname}/templates/build.js`),
                                {
                                        project,
                                        company,
                                        libPath
                                }
                        )
                );

                // create config.js
                FILE.write(
                        `${targetFolder}/${project}/config.js`,
                        STR.replace(
                                FILE.read(`${__dirname}/templates/config.js`),
                                {
                                        targetFolder,
                                        project,
                                        company,
                                        libPath
                                }
                        )
                );

                // create analyzeConfig.js
                FILE.write(
                        `${targetFolder}/${project}/analyzeConfig.js`,
                        STR.replace(
                                FILE.read(`${__dirname}/templates/analyzeConfig.js`),
                                {
                                        project,
                                        company,
                                        libPath
                                }
                        )
                );

                // create mockConfig.js
                FILE.write(
                        `${targetFolder}/${project}/mockConfig.js`,
                        STR.replace(
                                FILE.read(`${__dirname}/templates/mockConfig.js`),
                                {
                                        project,
                                        company,
                                        libPath
                                }
                        )
                );

                this._copy(
                        `${__dirname}/templates/packages.js`,
                        `${targetFolder}/${project}/packages.js`,
                        project,
                        company
                );

                // annotation
                this._copyFolder(
                        `${__dirname}/templates/annotation`,
                        `${root}/validate/annotation`,
                        project,
                        company
                );

                // validator
                this._copyFolder(
                        `${__dirname}/templates/validator`,
                        `${root}/validate/validator`,
                        project,
                        company
                );

                this._copy(
                        `${__dirname}/templates/TestUtils.java`,
                        `${targetFolder}/${project}/${project}/src/test/java/com/${company}/${project}/TestUtils.java`,
                        project,
                        company
                );

                // application.properties
                let replacePatternPairs = {
                        "@dbHost": dbConfig.host,
                        "@dbPort": dbConfig.port,
                        "@dbName": dbConfig.db,
                        "@dbUser": dbConfig.user,
                        "@dbPassword": dbConfig.password,
                        "@project": `${company}.${project}`,
                        "@date": new Date().toLocaleString()
                };
                let configTemplate = FILE.read(`${__dirname}/templates/application.properties`);
                FILE.write(
                        `${targetFolder}/${project}/${project}/src/main/resources/application.properties`,
                        STR.replace(configTemplate, replacePatternPairs)
                );
        }

        /**
         * Copy all annotation files
         * 
         * @private
         * @param {String} sourceFolder 
         * @param {String} targetFolder 
         * @param {String} project 
         * @param {String} company
         */
        _copyFolder(sourceFolder, targetFolder, project, company) {
                DIR.getFiles(sourceFolder).forEach(file => {
                        this._copy(
                                `${sourceFolder}/${file}`,
                                `${targetFolder}/${file}`,
                                project,
                                company
                        );
                });
        }

        /**
         * Copy file and replace '@project' pattern
         * 
         * @private
         * @param {String} source 
         * @param {String} target 
         * @param {String} project 
         * @param {String} company
         */
        _copy(source, target, project, company) {
                let content = FILE.read(source).replace(/@project/g, `${company}.${project}`);
                if (source.endsWith(".js") || source.endsWith(".java"))
                        content = COMPYRIGHT + content;

                FILE.write(target, content);
        }

        /**
        * 
        * @private
        * @param {String} source  file
        * @param {String} target  file
        * @param {String} project  name
        * @param {String} company name
        */
        _copy1(source, target, project, company) {
                let content = FILE.read(source)
                        .replace(/@project/g, project)
                        .replace(/@company/g, company);

                if (source.endsWith(".js") || source.endsWith(".java"))
                        content = COMPYRIGHT + content;

                FILE.write(target, content);
        }
}

exports.ProjectStructreGenerator = ProjectStructreGenerator;