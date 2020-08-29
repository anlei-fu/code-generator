const { UrlResolver } = require("./UrlResolver");
const { PageResultBuilder } = require("./model/PageResult");
const { CrawlTaskContext } = require("./CrawlTaskContext");
const { BrowserPage } = require("./model/BrowserPage");
const { URL } = require("./model/URL");
const { CrawlType } = require("./constant/CrawlType");
const { STR } = require("./utils/str");
const {LoggerSurpport} =require("./LoggerSurpport");
const {PageResult} =require("./constant/PageResult");

const cheerio = require('cheerio');

class PageContext extends LoggerSurpport {
        /**
         * 
         * @param {CrawlTaskContext} taskContext 
         * @param {URL} url 
         */
        constructor (taskContext, url) {
                super("pageContext");
                this.url = url;

                this.taskContext = taskContext;

                this.urlResolver = new UrlResolver(url.url);

                this.pageResultBuilder = new PageResultBuilder(this, url);

                this.strUtils=STR;

                /**
                 * @type {String}
                 */
                this.html;

                /**
                 * @type {CheerioStatic}
                 */
                this.$;

                /**
                 * @type {BrowserPage}
                 */
                this.page;
        }

        /**
         * Prepare page if autoDownloadPage
         */
        async prepare() {
                // get browser page
                if (this.taskContext.taskConfig.crawlType == CrawlType.BROWSER)
                        this.page = await this.taskContext.browser.getPage();

                let prepareResult = true;
                if (this.taskContext.taskConfig.autoDownloadPage) {
                        if (this.taskContext.taskConfig.crawlType == CrawlType.STATIC) {
                                prepareResult = await this._prepareStaticPage();
                        } else if (this.taskContext.taskConfig.crawlType == CrawlType.BROWSER) {
                                prepareResult = await this._prepareBrowserPage();
                        }
                }

                return prepareResult;
        }

        /**
        * Download page and check page result
        * 
        * @param {PageContext} pageContext 
        * @returns {Promise<Boolean>}
        */
        async _prepareStaticPage() {
               this.info(`downloading page ${this.url.url}`);
                let downloadResult = await this.taskContext.downloader.download(this.url);
                let checkResult = this.taskContext.blockRuleChecker.check(downloadResult);
                this.pageResultBuilder.pageResult(checkResult);
               
                if (checkResult != PageResult.SUCCESS) {
                        this.info(`download page ${this.url.url} failed`);
                        return false;
                } 

                this.info(`download page ${this.url.url} succeed`);
                this.html = downloadResult.html;
                this.$ = cheerio.load(this.html);

                return true;
        }

        /**
         * Open page and check result
         * 
         * @param {PageContext} pageContext 
         * @returns {Promise<Boolean>}
         */
        async _prepareBrowserPage() {

        }

        /**
         * Release browser page if used
         */
        release() {
                if (this.page)
                        this.page.available = true;
        }
}

exports.PageContext = PageContext;