const { Controller, RequestData } = require("./../http");
const { ScriptServiceContext, ScriptServiceContext } = require("./ScriptServiceContext");

exports.ScriptExctorController = class ScriptExctorController extends Controller {

        constructor () {
                super("");
        }

        /**
         * 
         * @param {ScriptServiceContext} context 
         */
        init(context) {
                this._context = context;
        }

        /**
         * 
         * @param {RequestData} req 
         */
        async handle(req) {
                let info = await this._context.scriptInfoManager.getScriptInfo(path);
                if (!info)
                        return this.responseBoolean(false, "");

                let main = this._context.jsManager.getMain(info.scriptPath);
                if (!main)
                        return this.responseBoolean(false, "");

                let data = await main(req);
                return this.resposneObject(data);
        }

        /**
         * To mount requests handler
         * 
         * @param {import("express").Express} express
         * @override
         */
        mount(express) {
                express.get("*", (req, resp) => this._process(req, resp, this.handle))
                        .post("*", (req, resp) => this._process(req, resp, this.handle));
        }

}