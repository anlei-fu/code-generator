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
                config.reqs = this.getDefaultReqs(config);

        config.reqs.forEach(x => {
                if (x.doCreate)
                        this.initEntityBasicInfo(config, x, "Req");
        });

        if (config.resp.doCreate)
                this.initEntityBasicInfo(config, config.resp, "Resp");

        if (config.params.doCreate)
                this.initEntityBasicInfo(config, config.params, "Params");

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

/**
 * 
 * @param {Config} config 
 * @param {Entity} entity 
 * @param {String} suffix 
 */
function initEntityBasicInfo(config, entity, suffix) {
        entity.type = entity.type || STR.upperFirstLetter(config.id) + suffix;
        entity.description = entity.description || "";
        entity.name = entity.name || suffix.toLowerCase();
}

exports.initConfig=initConfig