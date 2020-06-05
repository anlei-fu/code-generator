const { LoggerSurpport } = require("./LoggerSurpport");

/**
 * Controller base
 */
class Controller extends LoggerSurpport {

        constructor (name, controllerConfig = {}) {
                super(name);
                this._controllerConfig = controllerConfig;
        }

        /**
         * To mount url-handler mapping
         * 
         * @abstract
         * @param {Express.Application}
         */
        mount(app) {
                throw new Error("this method has not been implemented");
        }

        /**
         * Extract http contetx.req to controller args and invoke controller method
         * @type  {({query,params,body})=>ApiResponse|Promise<ApiResponse>}
         * then send response, and error catching process
         * 
         * @protect
         * @param {Express.Request} req 
         * @param {Express.Response} resp 
         * @param {({query,params,body})=>ApiResponse|Promise<ApiResponse>} handler 
         */
        async _process(req, resp, handler) {
                try {
                        if (this._controllerConfig.beforeProcess) {
                                let pass = await this._controllerConfig.beforeProcess(req, resp);
                                if (!pass)
                                        return;
                        }

                        let result = await handler({ query: req.query, body: req.body, params: req.params });
                        resp.send(result);

                        if (this._controllerConfig.afterProcess) {
                                await this._controllerConfig.afterProcess(req, result);
                        }

                } catch (ex) {

                }
        }
}

exports.Controller = Controller