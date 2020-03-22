const { FILE } = require("./../../libs/file");
const { STR } = require("./../../libs/str");
const { formatJavaFile } = require("./utils");
const COMPYRIGHT = FILE.read(`${__dirname}/templates/copyright.java`).replace("@date", new Date().toLocaleString());
const COMPYRIGHT_XML = FILE.read(`${__dirname}/templates/copyright.xml`).replace("@date", new Date().toLocaleString());

/**
 * Use to write all files
 */
class Writer {
        constructor (project, company) {
                this._project = `${company}.${project}`;
                let _root = `./${project}/src/main/java/com/${company}/${project}`;
                this._mapperFolder = `${_root}/mapper`;
                this._mapperConfigFolder = `./${project}/src/main/resources/mapper`;
                this._controllerFolder = `${_root}/controller`;
                this._serviceFolder = `${_root}/service`;
                this._serviceImplFolder = `${_root}/service/impl`;
                this._entityFolder = `${_root}/pojo/entity`;
                this._reqFolder = `${_root}/pojo/req`;
                this._respFolder = `${_root}/pojo/resp`;
                this._paramsFolder = `${_root}/pojo/param`;
        }

        /**
         * Write entity file
         * 
         * @param {String} name 
         * @param {String} content 
         */
        writeEntity(name, content) {
                this._writeCore(`${this._entityFolder}/${name}.java`, content, name);
        }

        /**
         * Write req file
         * 
         * @param {String} name 
         * @param {String} content 
         */
        writeReq(name, content) {
                this._writeCore(`${this._reqFolder}/${name}.java`, content, name);
        }

        /**
         * Write params file
         * 
         * @param {String} name 
         * @param {String} content 
         */
        writeParams(name, content) {
                this._writeCore(`${this._paramsFolder}/${name}.java`, content, name);
        }

        /**
         * Write resp file
         * 
         * @param {String} name 
         * @param {String} content 
         */
        writeResp(name, content) {
                this._writeCore(`${this._respFolder}/${name}.java`, content, name);
        }

        /**
         * Write mapper file
         * 
         * @param {String} name 
         * @param {String} content 
         */
        writeMapper(name, content) {
                this._writeCore(`${this._mapperFolder}/${name}Mapper.java`, content, name);
        }

        /**
         * Write mapper config file
         * 
         * @param {String} name 
         * @param {String} content 
         */
        writeMapperConfig(name, content) {
                content = STR.removeEmptyLine(content);
                this._writeCore(`${this._mapperConfigFolder}/${name}Mapper.xml`, content, name);
        }

        /**
         * Write service file
         * 
         * @param {String} name 
         * @param {String} content 
         */
        writeService(name, content) {
                this._writeCore(`${this._serviceFolder}/${name}Service.java`, content, name);
        }

        /**
         * Write service impl file
         * 
         * @param {String} name 
         * @param {String} content 
         */
        writeServiceImpl(name, content) {
                this._writeCore(`${this._serviceImplFolder}/${name}ServiceImpl.java`, content, name);
        }

        /**
         * Write controller file
         * 
         * @param {String} name 
         * @param {String} content 
         */
        writeController(name, content) {
                this._writeCore(`${this._controllerFolder}/${name}Controller.java`, content, name);
        }

        /**
         * Do replace and write file
         * 
         * @private
         * @param {String} name 
         * @param {String} content 
         */
        _writeCore(path, content, name) {
                content = STR.replace(content, { "@project": this._project, "@name": name });

                // insert java file copyright 
                if (path.endsWith(".java"))
                        content = COMPYRIGHT + formatJavaFile(content);

                // insert xml file copyright
                if (path.endsWith(".xml"))
                        content = COMPYRIGHT_XML + content;

                FILE.write(path, content);
        }
}

exports.Writer = Writer