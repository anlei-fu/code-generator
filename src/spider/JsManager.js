const { FileManagerBase } = require("./FileManager");
const { ScriptFeatcher } = require("./ScripFetcher");

class JsManager extends FileManagerBase {
    constructor (workDir) {
        super("JsManager", workDir);
        this._js = {};
        this._fetcher = new ScriptFeatcher(workDir);
    }

    /**
     * Find and load main function
     * 
     * @param {String} jsFile 
     * @returns {MainFunction?}
     */
    getMain(jsFile) {
        if (!this.exists(jsFile)) {
            this._fetcher.fetch(jsFile);
            if (!this.exists(jsFile))
                throw new Error(`script ${jsFile} can not be found`);
        }

        jsFile = this.getFullPath(jsFile);
        if (this._js[jsFile])
            return this._js[jsFile];

        try {
            let main = require(jsFile).main;
            if (main)
                this._js[jsFile] = main;

            return main;
        } catch (ex) {
            this.error(`failed to loading js file ${jsFile}`, ex);
            throw ex;
        }
    }

    /**
     * Clear cached main functions
     */
    clearCache() {
        this._js = {};
    }
}

exports.JsManager = JsManager;