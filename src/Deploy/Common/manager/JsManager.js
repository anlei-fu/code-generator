const { FileManagerBase } = require("./FileManager");

class JsManager extends FileManagerBase {
    constructor (workDir) {
        super("JsManager", workDir);
        this._js = {};
    }

    /**
     * Find and load main function
     * 
     * @param {String} jsFile 
     * @returns {MainFunction?}
     */
    getMain(jsFile) {
        if (_js[jsFile])
            return this._js[jsFile];

        if (!this.exists(jsFile))
            return null;

        try {
            let main = require(`${this._workDir}/${jsFile}`).main;
            if (main)
                this._js[jsFile] = main;

            return main;
        } catch (ex) {
            this.error(`failed to loading js file ${jsFile}`, ex);
        }

        return null;
    }

    /**
     * Clear cached main functions
     */
    clearCache() {
        this._js = {};
    }

    deploy() {

    }

    rollback() {

    }
}

exports.JsManager = JsManager;