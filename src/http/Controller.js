const { Initiable } = require("./../common");
const { ApiResponseFactory } = require("./ApiResponseFactory");
const { ApiResponse } = require("./ApiResponse");
const { ApiResponseCode } = require("./ApiResponseCode");
const { ArgTypeError } = require("./../error");
/**
 * Controller base
 */
class Controller extends Initiable {

        constructor (name, controllerConfig = {}) {
                super(name);
                this._controllerConfig = controllerConfig;
        }

        /**
         * To mount url-handler mapping
         * 
         * @abstract
         * @param {Express.Application} app
         */
        mount(app) {
                throw new Error("this method has not been implemented");
        }

        /**
         * Response boolean result
         * 
         * @param {boolean} result 
         * @param {string} msg 
         * @param {number} code 
         * @returns {ApiResponse}
         */
        responseBoolean(result, msg, code) {
                return result ? this.success(msg, code) : this.fail(msg, code)
        }

        /**
         * Response object result
         * 
         * @param {Object} result 
         * @param {String} msg 
         * @param {String} code 
         * @returns {ApiResponse<Object>}
         */
        resposneObject(result, msg, code) {
                return result
                        ? new ApiResponse(ApiResponseCode.SUCCESS, "success", result)
                        : new ApiResponse(code || ApiResponseCode.NO_DATA_FOUND, msg || "no data found");
        }

        /**
         * Return success result
         * 
         * @param {String} msg 
         * @param {Any} data 
         * @returns {ApiResponse}
         */
        success(msg, data) {
                return ApiResponseFactory.success(msg, data);
        }

        /**
         * Return failed result
         * 
         * @param {String} msg
         * @param {Number} code
         * @returns {ApiResponse} 
         */
        fail(msg, code) {
                return ApiResponseFactory.fail(code, msg);
        }

        /**
         * Response no data found
         * 
         * @returns {ApiResponse}
         */
        noDataFound() {
                return new ApiResponse(ApiResponseCode.NO_DATA_FOUND, "no data found");
        }

        /**
         * Return system error result
         * 
         * @param {Number} code 
         * @param {String} msg 
         * @returns {ApiResponse}
         */
        systemError(code, msg) {
                return ApiResponseFactory.systemError(
                        code || ApiResponseCode.SYSTEM_ERROR,
                        msg || "system error"
                );
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

                        this.info(`${req.method}  ${req.path}`);
                        let result;
                        try {
                                if (this._controllerConfig.beforeProcess) {
                                        let pass = await this._controllerConfig.beforeProcess(req, resp);
                                        if (!pass)
                                                return;
                                }

                                this.info("args:");
                                this.info({ query: req.query, body: req.body, params: req.params });

                                result = await handler.call(this,
                                        {
                                                path: req.path,
                                                query: req.query,
                                                body: req.body,
                                                params: req.params,
                                                req,
                                                resp
                                        }
                                );
                        } catch (e) {
                                this.error(`handle ${req.method} ${req.path} failed`, e);

                                if (e instanceof TypeError) {
                                        result = new ApiResponse(ApiResponseCode.PARAMETER_INCORRECT, "parameter incorrect");
                                } else if (e instanceof ArgTypeError) {
                                        result = new ApiResponse(ApiResponseCode.PARAMETER_INCORRECT, "parameter type incorrect");
                                } else if (e instanceof ReferenceError) {
                                        result = new ApiResponse(ApiResponseCode.REQUIRED_PARAMETER_ABSENT, "vital parameter absent");
                                } else {
                                        result = this.systemError();
                                }
                        }

                        this.info("resp:");
                        this.info(result);

                        resp.send(result);

                        if (this._controllerConfig.afterProcess)
                                await this._controllerConfig.afterProcess(req, result);

                } catch (ex) {
                        this.error(`handle ${req.method} ${req.path} failed`, ex);
                }
        }
}

exports.Controller = Controller;