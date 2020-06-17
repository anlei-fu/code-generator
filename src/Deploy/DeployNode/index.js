const { ServiceContainer } = require("../common/Node");
const { DeployContext } = require("./DeployContext");
const { FILE } = require("../common/utils/file");
const { RestServiceBuilder } = require("./RestServiceBuilder");
const { TaskServiceBuilder } = require("./TaskServiceBuilder");

const CONFIG_FILE = "./config.json";
function main() {

        if (!FILE.exists(CONFIG_FILE))
                throw new Error(`config file ('${CONFIG_FILE}') can not be found`);

        let config = FILE.readJson("config.json");
        let context = new DeployContext(config);

        let restService = RestServiceBuilder.build(context);
        let taskService = TaskServiceBuilder.build(context);

        let container = new ServiceContainer(
                context,
                "DeployNode",
                [restService, taskService]
        );

        container.start();
}

/*************************************************************main******************************************************************************/
main();