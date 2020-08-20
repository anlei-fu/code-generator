const { CrawlTaskContext } = require("./../CrawlTaskContext");
const { PageContext } = require("./../PageContext");
const {CrawlTaskConfig} =require("./../model/CrawlTaskConfig");
const {URL} =require("./../model/URL");

/**
 * Create page context
 * 
 * @param {CrawlTaskConfig} taskConfig 
 * @param {URL} url 
 * @returns {Promise<PageContext>}
 */
async function createPageContext(taskConfig, url) {
        let taskContext = new CrawlTaskContext(taskConfig);
        await taskContext.init();
        let pageContext = new PageContext(taskContext, url);
        if (!await pageContext.prepare()) {
                throw new Error("prepare page context failed!")
        }

        return pageContext();
}

module.exports = {
        createPageContext
}