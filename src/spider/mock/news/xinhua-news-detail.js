
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../../model/CrawlTaskConfig");
const { PageContext } = require("../../PageContext");
const { FILE } = require("./../../../libs");


/**
 * Extract dom
 * 
 * @param {PageContext} pageContext 
 */
async function run(pageContext) {
        let $ = pageContext.$;
        var data = {

        };

        data.imgs = [];
        data.title = $("body > div.header > div.h-p3.clearfix > div > div.h-title").text();
        data.author = $("body > div.header > div.h-p3.clearfix > div > div.h-info > span:nth-child(2)").text();
        data.date = $("body > div.header > div.h-p3.clearfix > div > div.h-info > span.h-time").text();
        $("#p-detail").find("a").remove();
        data.content = $("#p-detail").text();
        $("#p-detail").find("img").each((i, e) => {
                data.imgs.push($(e).attr("src"));
        });

        FILE.write("./output/xinhua.html", pageContext.html);
        FILE.writeJson("./output/xinhua.json", data, true);
}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                .urlEncodes(``)
                // TODO: encoding
                .encoding("utf8")
                .crawlType(1)
                .build();

        
        let context = await createPageContext(
                taskConfig,
                // TODO: test url
                { url: "http://www.xinhuanet.com/politics/2020-10/13/c_1126602011.htm" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
