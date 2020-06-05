const { LoggerSurpport } = require("../../Common/LoggerSurpport");
class Controller extends LoggerSurpport {

        constructor (name, controllerConfig = {}) {
                super(name);
                this._controllerConfig = controllerConfig;
        }

        /**
         * @abstract
         */
        mount(app) {
                throw new Error("this method has not been implemented");
        }

        /**
         * 
         * @private
         * @param {*} req 
         * @param {*} resp 
         * @param {*} handler 
         */
        async _process(req, resp, handler) {
                try {
                        if (this._controllerConfig.beforeProcess) {
                                let pass = await this._controllerConfig.beforeProcess(req, resp);
                                if (!pass)
                                        return;
                        }

                        let result = await handler(req.query, req.body);
                        resp.send(result);

                        if (this._controllerConfig.afterProcess) {
                                await this._controllerConfig.afterProcess(req, resp);
                        }

                } catch (ex) {

                }


        }
}

exports.Controller = Controller