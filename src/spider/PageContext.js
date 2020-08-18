const { UrlResolver } = require("./UrlResolver");
const { PageResultBuilder } = require("./model/PageResult");
const { CrawlTaskContext } = require("./CrawlTaskContext");
const {BrowserPage } =require("./model/BrowserPage");
const {URL} =require("./model/URL");

class PageContext {
        /**
         * 
         * @param {CrawlTaskContext} taskContext 
         * @param {URL} url 
         */
        constructor (taskContext, url) {
                this.url = url;

                this.taskContext = taskContext;

                this.urlResolver = new UrlResolver(url);

                this.pageResultBuilder = new PageResultBuilder(this, url);

                this.strUtils;

                /**
                 * @type {String}
                 */
                this.html;

                /**
                 * @type {cheerio}
                 */
                this.cheerio;

                /**
                 * @type {BrowserPage}
                 */
                this.page;
        }
}

exports.PageContext = PageContext;