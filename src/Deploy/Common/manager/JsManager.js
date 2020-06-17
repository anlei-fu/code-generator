const { FileManagerBase } = require("./FileManager");

class JsManager extends FileManagerBase {
    constructor (workDir) {
        super("JsManager", workDir);
        this._js = {};
    }

    init(context){

    }

    /**
     * Find and load main function
     * 
     * @param {String} jsFile 
     * @returns {MainFunction?}
     */
    getMain(jsFile) {
        if (!this.exists(jsFile))
            return null;

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
        }

        return null;
    }

    /**
     * Clear cached main functions
     */
    clearCache() {
        this._js = {};
    }
}

exports.JsManager = JsManager;