/**
 * Name: 大江网
 * Domain: https://www.jxcn.cn/
 * Date: 10/25/2020
 */
const { createPageContext } = require("./../../PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../../../../model/CrawlTaskConfig");
const { PageContext } = require("../../../../PageContext");

/**
 * 
 * @param {PageContext} pageContext 
 */
async function run(pageContext, dowrite) {
        let builder = pageContext.pageResultBuilder;
        let result = builder.findUrl().build();
        if (dowrite) {
                result.newUrls.forEach(x => {
                        console.log(x.url);
                });
        }

        return result.newUrls;
}

async function homepage(testurl,dowrite) {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                // TODO: url match patterns ,Json array
                .urlMatchPatterns(`["^(https|http)://.*@pattern.*[0-9]{4}/.*html.*"]`)
                // TODO: url encodes json object
                .urlEncodes("")
                // TODO: encoding
                .encoding("@encoding")
                .crawlType(1)
                .build();

        let context = await createPageContext(
                taskConfig,
                // TODO: homepage url
                { url: testurl }
        );

        return await run(context, dowrite)
}

/*********************************************main***********************************************************/
exports.homepage = homepage;