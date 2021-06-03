const { FILE ,validateUtils} = require("./../libs");
const { Service } = require("../common/Service");
const { MysqlExcutor } = require("../sql");
const { TemplateController } = require("./TemplatController");
const { RestService } = require("../http/RestService");
const { ServiceContext } = require("../common/ServiceContext");

class TemplateService extends Service{

    start(){
        let config =  FILE.readJson("./config.json");
        let excutor = new MysqlExcutor();
        let templateController =  new TemplateController();
        let context = new ServiceContext();
        context.serviceProvider.add("sqlExcutor")
        let rest = new RestService(config.prot,[templateController]);

        
    }
}