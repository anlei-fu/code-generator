const { FileManagerBase } = require("./FileManager");
const { FileDownloader } = require("./../http");
const { TimeoutCache } = require("./../cache");

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
    constructor (scriptDir, withFileSystem = true) {
        super("JsManager", scriptDir);
        this._js = new TimeoutCache();
        this._fetcher = new FileDownloader(scriptDir);
        this._withFileSystem = withFileSystem;
    }

    /**
     * Find and load main function
     * 
     * @param {String} jsFile 
     * @returns {MainFunction?}
     */
    async getMain(fileHost, jsFile) {
        if (!this.exists(jsFile)) {
            // download from file server
            if (this._withFileSystem)
                await this._fetcher.download(`${fileHost}/${jsFile}`, jsFile, {});

            if (!this.exists(jsFile))
                throw new Error(`fetch script(${jsFile}) failed`);
        }

        if (this._js.has(jsFile))
            return this._js.get(jsFile);

        try {
            let main = require(this.getFullPath(jsFile)).main;
            if (main)
                this._js.cache(jsFile, main, 1000 * 60 * 30);

            return main;
        } catch (ex) {
            this.error(`failed to load script(${jsFile})`, ex);
            throw ex;
        }
    }

}

exports.JsManager = JsManager;