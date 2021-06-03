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
    constructor (scriptDir, useFileSystem = true) {
        super("JsManager", scriptDir);
        this._mainMap = new TimeoutCache();
        this._fetcher = new FileDownloader(scriptDir);
        this._useFileSystem = useFileSystem;
    }

    /**
     * Find and load main function
     * 
     * @param {String} script 
     * @returns {MainFunction?}
     */
    async getMain(fileHost, script) {
        if (!this.exists(script)) {
            // download from file server
            if (this._useFileSystem)
                await this._fetcher.download(`${fileHost}/${script}`, script, {});

            if (!this.exists(script))
                throw new Error(`fetch script(${script}) failed`);
        }

        if (this._mainMap.has(script))
            return this._mainMap.get(script);

        try {
            let main = require(this.getFullPath(script)).main;
            if (main)
                this._mainMap.cache(script, main, 1000 * 60 * 30);

            return main;
        } catch (ex) {
            this.error(`failed to load script(${script})`, ex);
            throw ex;
        }
    }

    reload(script) {

    }

    isLoaded(script) {

    }

    has(script) {

    }

}

exports.JsManager = JsManager;