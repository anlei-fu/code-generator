const { FileManagerBase } = require("./FileManager");
const { FileDownloader } = require("./../http");

/**
 * @CrawlerContext component ,to manage crawl script
 */
class JsManager extends FileManagerBase {
    /**
     * Constructor of JsManager
     * 
     * @constructor
     * @param {String} scriptDir 
     */
    constructor (scriptDir) {
        super("JsManager", scriptDir);
        this._js = {};
        this._fetcher = new FileDownloader(scriptDir);
    }

    /**
     * Find and load main function
     * 
     * @param {String} jsFile 
     * @returns {MainFunction?}
     */
    async getMain(fileHost,jsFile) {
        if (!this.exists(jsFile)) {
            // download from file server
            await this._fetcher.download(`${fileHost}/${jsFile}`, jsFile,{});

            if (!this.exists(jsFile))
                throw new Error(`fetch script(${jsFile}) failed`);
        }

        if (this._js[jsFile])
            return this._js[jsFile];

        try {
            let main = require(this.getFullPath(jsFile)).main;
            if (main)
                this._js[jsFile] = main;

            return main;
        } catch (ex) {
            this.error(`failed to load script(${jsFile})`, ex);
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