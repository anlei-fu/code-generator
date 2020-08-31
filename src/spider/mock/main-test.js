
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
                if(full&&matcher.match(full.url))
                 builder.newUrl(full);
        });

       let summary= $("body > div.body-wrapper > div.content-wrapper > div > div.main-content > div.lemma-summary").text();

        builder.data({
                summary,
        });
        builder.success();
        console.log(builder.build())
}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                .urlMatchPatterns(`["^(http://|https://)baike.baidu.com/item/.*"]`)
                .urlEncodes(`{"https://baike.baidu.com/item":"#1"}`)
                .crawlType(1)
                .build();

        let context = await createPageContext(
                taskConfig,
                { url: "https://baike.baidu.com/item/%E7%BE%8E%E5%9B%BD/125486" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
