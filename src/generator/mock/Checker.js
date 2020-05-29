const { TYPE } = require("../../libs/utils");
const { FILE } = require("../../libs/file");
const {LoggerFactory} =require("./../common/logging/logger-factory");

const LOG =LoggerFactory.getLogger("param checker");

class Checker {
        constructor (file, exceptedParams = { pageIndex: true, pageSize: true, startTime: true, endTime: true }) {
                this._file = file;
                this._exceptedParams = exceptedParams;
        }

        handle(req, resp) {
                let params = Object.keys(req.body).length == 0 ? req.query : req.body;
                params = this.trimParams(params);
                if (!resp || (resp.code != 100)) {
                        this.error(req, resp, "failed");
                        LOG.error(`${req.method} ${req.path} failed\r\n `+
                        `query:${JSON.stringify(req.query)}\r\n` +
                        `params:${JSON.stringify(req.body)} `+
                        `resp:${JSON.stringify(resp)}`);
                        
                        return;
                }

                LOG.info(`${req.method} ${req.path} ok`);

                let uselessParams = {};

                let data = resp.data.list || resp.data || [];
                Object.keys(params).forEach(param => {
                        data.forEach(item => {
                                if (item[param]) {
                                        if (TYPE.isString(item[param])) {
                                                if (!(params[param] + "").includes(item[param])) {
                                                        this.error(req, resp, "not match");
                                                }
                                        }

                                        if (TYPE.isNumber(item[param])) {
                                                if (parseFloat(params[param]) != item[param]) {
                                                        this.error(req, resp, "not match");
                                                }
                                        }

                                } else {
                                        if (!this._exceptedParams[param] || uselessParams[param]) {
                                                uselessParams[param] = true;
                                        }
                                }
                        });
                });

                if(Object.keys(uselessParams).length!=0){
                        this.warn(req,resp,`useless params ${Object.keys(uselessParams)}`);
                        LOG.warn(`useless params:\r\n ${Object.keys(uselessParams)}`);
                }
        }

        trimParams(params) {
                let result = {};
                Object.keys(params).forEach(param => {
                        if (!params[param])
                                return;

                        if (TYPE.isString(params[param])) {
                                if (!(params[param] = params[param].trim()))
                                        return;
                        }

                        result[param] = params[param];

                });

                return result;
        }

        warn(req, resp, msg) {
                this.append(req, resp, msg, "Warn");
        }

        error(req, resp, msg) {
                this.append(req, resp, msg, "Error");
        }

        append(req, resp, msg, prefix) {
                let params = Object.keys(req.body).length == 0 ? req.query : req.body;
                let content = `[${prefix}][${new Date().toLocaleString()}][${msg}]\r\n` +
                        `${req.method} ${req.path} \r\n` +
                        JSON.stringify(params, null, "\t") + "\r\n";


                FILE.append(this._file, content);
        }

}

exports.Checker = Checker;