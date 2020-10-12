
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../../model/CrawlTaskConfig");
const { PageContext } = require("../../PageContext");
const { FILE } = require("./../../../libs");

// TODO: find comment api
let api = "";

/**
 * Get comment count
 * 
 * @param {Url} url 
 * @param {HttpClient} request 
 */
function getCommet(url, request) {
        try {
                let segs = url.url.split("?")[0].split("/");
                let resp = await request.get(`${api}${segs[segs.length - 1].replace(".html", "")}`);
                return resp.cmtCount;
        } catch (ex) {
                console.error(ex);
        }
}

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
        data.title = $("#epContentLeft > h1").text();
        data.author = $("#ne_article_source").text();
        $("#ne_article_source").remove();
        data.date = $("#epContentLeft > div.post_time_source").text();
        $("#contain > div > div.article_box > div.statement").remove();
        data.content = $("#endText").text();
        $("#endText").find("img").each((i, e) => {
                data.imgs.push($(e).attr("src"));
        });

        data.comment = getCommet(pageContext.url, pageContext.httpClient);

        FILE.write("./output/zhongguoxingwen.html", pageContext.html);
        FILE.writeJson("./output/zhongguoxingwen.json", data, true);
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
                { url: "" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
