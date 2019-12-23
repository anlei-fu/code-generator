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
                this.writeCore(`${this._controllerFolder}/${name}Controller.java`, content);
        }

        writeMapper(name, content) {
                this.writeCore(`${this.mapperFolder}/${name}Mapper.java`, content);
        }
        writeMapperConfig(name, content) {
                this.writeCore(`${this.mapperConfigFolder}/${name}Mapper.xml`, content);
        }

        writeService(name, content) {
                this.writeCore(`${this.serviceFolder}/${name}Service.java`, content);
        }

        writeServiceImpl(name, content) {
                this.writeCore(`${this.serviceImplFolder}/${name}ServiceImpl.java`, content);
        }

        writeEntity(name, content) {
                this.writeCore(`${this.entityFolder}/${name}.java`, content);
        }

        writeReq(name, content) {
                this.writeCore(`${this.reqFolder}/${name}Req.java`, content);
        }
        writeResp(name, content) {
                this.writeCore(`${this.respFolder}/${name}Resp.java`, content);
        }
        writeParams(name, content) {
                this.writeCore(`${this.paramsFolder}/${name}Params.java`, content);
        }

        writeCore(path, content) {
                console.log(this.project);
                console.log(content);
                FILE.write(path, STR.replace(content, { "@project": this.project }));
        }
}

exports.Writer = Writer