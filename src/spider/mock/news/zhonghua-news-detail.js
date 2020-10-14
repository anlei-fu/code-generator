/**
 * 中华网 https://www.china.com/
 */
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
async function getCommet(url, request) {
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
        data.title = $("#chan_newsTitle").text();
        data.author = $("#js-article-title > div.chan_newsInfo_source > span.source").text();
        data.date = $("#js-article-title > div.chan_newsInfo_source > span.time").text();
        data.content = $("#chan_newsDetail").text();
        $("#chan_newsDetail").find("img").each((i, e) => {
                data.imgs.push($(e).attr("src"));
        });

      //  data.comment = getCommet(pageContext.url, pageContext.httpClient);

        FILE.write("./output/zhonghua.html", pageContext.html);
        FILE.writeJson("./output/zhonghua.json", data, true);
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
                { url: "https://news.china.com/international/1000/20201014/38847443.html" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
