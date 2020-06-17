const { RestService } = require("../common/RestService");
const { ControllerBuilder } = require("./ControllerBuilder");

exports.RestServiceBuilder = class RestServiceBuilder {

        static build(context) {
                return new RestService(
                        context.config.restServicePort,
                        ControllerBuilder.build(context.dbAccess)
                );
        }
}