/**
 * 经济日报 http://www.ce.cn/
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
        data.title = $("#articleTitle").text();
        data.author = $("#articleSource").text();
        data.date = $("#articleTime").text();
        data.content = $("#articleText").text();
        $("#articleText").find("img").each((i, e) => {
                data.imgs.push($(e).attr("src"));
        });

      //  data.comment = getCommet(pageContext.url, pageContext.httpClient);

        FILE.write("./output/jingjiribao.html", pageContext.html);
        FILE.writeJson("./output/jingjiribao.json", data, true);
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
                { url: "http://www.ce.cn/macro/more/202010/15/t20201015_35890575.shtml" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
