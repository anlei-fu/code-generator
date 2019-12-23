const { FILE } = require("./../../libs/file")
const { STR } = require("./../../libs/str")
class Writer {

        constructor(project) {
                this.project = project||"";
                let root = `./${project}/src/main/java/com/${project}`;
                this.mapperFolder = `${root}/mapper`;
                this.mapperConfigFolder = `./${project}/src/main/resource/mapper`;
                this._controllerFolder = `${root}/controller`;
                this.serviceFolder = `${root}/service`;
                this.serviceImplFolder = `${root}/service/impl`;
                this.entityFolder = `${root}/pojo/entity`;
                this.reqFolder = `${root}/pojo/req`;
                this.respFolder = `${root}/pojo/resp`;
                this.paramsFolder = `${root}/pojo/param`;
        }

        writeController(name, content) {
                this.writeCore(`${this._controllerFolder}/${name}Controller.java`, content,name);
        }

        writeMapper(name, content) {
                this.writeCore(`${this.mapperFolder}/${name}Mapper.java`, content,name);
        }
        writeMapperConfig(name, content) {
                this.writeCore(`${this.mapperConfigFolder}/${name}Mapper.xml`, content,name);
        }

        writeService(name, content) {
                this.writeCore(`${this.serviceFolder}/${name}Service.java`, content,name);
        }

        writeServiceImpl(name, content) {
                this.writeCore(`${this.serviceImplFolder}/${name}ServiceImpl.java`, content,name);
        }

        writeEntity(name, content) {
                this.writeCore(`${this.entityFolder}/${name}.java`, content,name);
        }

        writeReq(name, content) {
                this.writeCore(`${this.reqFolder}/${name}.java`, content,name);
        }
        writeResp(name, content) {
                this.writeCore(`${this.respFolder}/${name}.java`, content,name);
        }
        writeParams(name, content) {
                this.writeCore(`${this.paramsFolder}/${name}.java`, content,name);
        }

        writeCore(path, content,name) {
                FILE.write(path, this.finalReplace(content,name));
        }

        finalReplace(content,name){
              return  STR.replace(content, { "@project": this.project,"@name":name })
        }
}

exports.Writer = Writer