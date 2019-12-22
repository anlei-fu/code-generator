const {getDefaultId}=require("./id-generateor")
/**
 * Check and set default config if absent
 * 
 * @param {Config} config 
 */
function initConfig(config) {

        if (config.alias)
                this.config.table.alias = config.alias;

        config.type = config.type || "select";
        config.id = config.id || getDefaultId(config);

        if (config.reqs.length == 0)
                config.reqs = getDefaultReqs(config);

        config.reqs.forEach(x => {
                if (x.doCreate)
                       initEntityBasicInfo(config, x, "Req");
        });

        if (config.resp.doCreate)
                initEntityBasicInfo(config, config.resp, "Resp");

        if (config.params.doCreate)
                initEntityBasicInfo(config, config.params, "Params");

        if (!config.noController) {
                config.controller.path = config.controller.path || `/${STR.lowerFirstLetter(config.name)}/${config.id}`;
                config.controller.description = config.controller.description || "";
        }

        // set default join type
        if (config.joins) {
                config.joins.forEach(x => {
                        x.type = x.type || "left";
                });
        }
}



exports.initConfig=initConfig