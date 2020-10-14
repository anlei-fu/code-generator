const { PageResultBuilder } = require("./model/PageResult");
const { CrawlTaskContext } = require("./CrawlTaskContext");
const { BrowserPage } = require("./model/BrowserPage");
const { CrawlType } = require("./constant/CrawlType");
const { STR } = require("./../libs");
const { LoggerSurpport } = require("./../logging");
const { PageResult } = require("./constant/PageResult");
const { HttpClient ,UrlResolver} = require("./../http");

const cheerio = require('cheerio');

class PageContext extends LoggerSurpport {
        /**
         * 
         * @param {CrawlTaskContext} taskContext 
         * @param {URL} url 
         */
        constructor (taskContext, url) {
                super("pageContext");

                /**
                 * @type {import { URL} from "./model/URL";}
                 */
                this.url = url;

                this.taskContext = taskContext;

                this.urlResolver = new UrlResolver(url.url);

                this.pageResultBuilder = new PageResultBuilder(this, url);

                this.httpClient = new HttpClient("api");

                this.strUtils = STR;

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
        async _prepareStaticPage(encoding) {
                this.info(`downloading page ${this.url.url}`);
                let downloadResult = await this.taskContext.downloader.download(this.url, {}, encoding);
                let checkResult = this.taskContext.blockRuleChecker.check(downloadResult);
                this.pageResultBuilder.pageResult(checkResult);

                if (checkResult != PageResult.SUCCESS) {
                        this.info(`download page ${this.url.url} failed`);
                        return false;
                }

                this.info(`download page ${this.url.url} succeed`);
                this.html = downloadResult.html;
                this.$ = cheerio.load(this.html);

                if (!encoding)
                        await this._checkEncoding();


                return true;
        }

        async _checkEncoding() {
                let encoding;
                let end = false;
                this.$("meta").each((i, e) => {
                        if (end)
                                return;

                        let charsetStr = this.$(e).attr("charset");
                        if (!charsetStr) {
                                let content = this.$(e).attr("content");
                                if (content && content.toLowerCase().includes("charset"))
                                        charsetStr = content;
                        }

                        if (charsetStr) {
                                charsetStr = charsetStr.toLowerCase();
                                if (charsetStr.includes("utf")) {
                                        encoding = "utf8";
                                } else if (charsetStr.includes("gbk")) {
                                        encoding = "gbk";
                                } else if (charsetStr.includes("gb2312")) {
                                        encoding = "gb2312";
                                }
                                end = true;
                        }
                });

                if (encoding && encoding != this.taskContext.taskConfig.encoding)
                        await this._prepareStaticPage(encoding);
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