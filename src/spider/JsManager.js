const { FileManagerBase } = require("./FileManager");
const { ScriptFetcher } = require("./ScripFetcher");
const { CrawlerContext } = require("./CrawlerContext");

/**
 * @CrawlerContext component ,to manage crawl script
 */
class JsManager extends FileManagerBase {
    /**
     * Constructor of JsManager
     * 
     * @constructor
     * @param {String} scriptDir 
     * @param {CrawlerContext} context 
     */
    constructor (scriptDir, context) {
        super("JsManager", scriptDir);
        this._js = {};
        this._context = context;
        this._fetcher = new ScriptFetcher(scriptDir);
    }

    /**
     * Find and load main function
     * 
     * @param {String} jsFile 
     * @returns {MainFunction?}
     */
    async getMain(jsFile) {
        if (!this.exists(jsFile)) {
            // download from file server
            await this._fetcher.fetch(this._context.fileHost, jsFile);

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