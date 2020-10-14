/**
 * 中新网 http://www.chinanews.com/
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
        data.title = $("#cont_1_1_2 > h1").text();
        data.author = $("#cont_1_1_2 > div.left-time > div").text();
        data.date = $("#cont_1_1_2 > div.left-time > div").text();
        data.content = $("#cont_1_1_2 > div.left_zw").text();
        $("#cont_1_1_2 > div.left_zw").find("img").each((i, e) => {
                data.imgs.push($(e).attr("src"));
        });

        // data.comment = getCommet(pageContext.url, pageContext.httpClient);

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
                { url: "https://www.chinanews.com/cj/2020/10-14/9312194.shtml" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
