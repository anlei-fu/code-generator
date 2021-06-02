const { Controller, RequestData } = require("./../http");
const { ScriptServiceContext } = require("./ScriptServiceContext");

exports.ScriptExctorController = class ScriptExctorController extends Controller {
        constructor () {
                super("js executor");
                this._jsManager;
        }

        /**
         * 
         * @param {ScriptServiceContext} context 
         */
        init(context) {
                this._context = context;
                this._jsManager = new JsManager(config.scriptDir, false);
        }

        /**
         * 
         * @param {RequestData} req 
         */
        async execute({ body }) {
                let main = await this._jsManager.getMain(null, body.script + ".js");
                if (!main)
                        return this.responseBoolean(false, "script file not exists");
                try {
                        let data = await main(body.params);
                        return this.resposneObject(data);
                } catch (ex) {
                        return this.fail("execute js failed", ex);
                }
        }

        /**
         * To mount requests handler
         * 
         * @param {import("express").Express} express
         * @override
         */
        mount(express) {
                express.post("/run", (req, resp) => this._process(req, resp, this.execute));
        }
}