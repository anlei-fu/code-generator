/**
 * 东方网
 */
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../../model/CrawlTaskConfig");
const { PageContext } = require("../../PageContext");

/**
 * 
 * @param {PageContext} pageContext 
 */
async function run(pageContext) {
    let builder =pageContext.pageResultBuilder;
        builder.findUrl();
        builder.build().newUrls.forEach(x=>{
            console.log(x.url);
        });
        builder.success();
}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                // TODO: url match patterns ,Json array
                .urlMatchPatterns(`["^(https|http)://www.xinhuanet.com/.*\.htm"]`)
                 // TODO: url encodes json object
                .urlEncodes(``)
                // TODO: encoding
                .encoding("gbk")
                .crawlType(1)
                .build();

        let context = await createPageContext(
                taskConfig,
                // TODO: homepage url
                { url: "http://www.xinhuanet.com/" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
