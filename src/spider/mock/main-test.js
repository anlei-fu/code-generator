
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("./../model/CrawlTaskConfig");
const { PageContext } = require("./../PageContext");

/**
 * 
 * @param {PageContext} pageContext 
 */
async function run(pageContext) {
        let $ = pageContext.$;
        let matcher = pageContext.taskContext.urlMatcher;
        let builder = pageContext.pageResultBuilder;

        $("a").each((i, e) => {
                let href = $(e).attr("href");
                let full = pageContext.urlResolver.resolve(href);

                if (full && matcher.match(full.url)) {
                        builder.newUrl(full);
                        console.log(full.url);
                }
        });

        builder.data({});
        builder.success();
}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                .urlMatchPatterns(`["^(http://|https://)yp\.jd\.com"]`)
                .urlEncodes(`{"^(http://|http://|)jipiao\.jd\.com/":"#1/"}`)
                .crawlType(1)
                .encoding("gb2312")
                .build();

        let context = await createPageContext(
                taskConfig,
                { url: "https://www.jd.com/" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
