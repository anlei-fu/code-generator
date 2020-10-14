
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
        data.title = $("#div1000 > div.div640 > dl > dd.dd640wz > dl > dd.f18.b.black02.yh.center").text();
        data.author = $("#div1000 > div.div640 > dl > dd.dd640wz > dl > dd.f12.black02").text();
        data.date = $("#div1000 > div.div640 > dl > dd.dd640wz > dl > dd:nth-child(4)").text();
        data.content = $("#CONTENT").text();
        $("#CONTENT").find("img").each((i, e) => {
                data.imgs.push($(e).attr("src"));
        });

      //  data.comment = getCommet(pageContext.url, pageContext.httpClient);

        FILE.write("./output/fazhiribao.html", pageContext.html);
        FILE.writeJson("./output/fazhiribao.json", data, true);
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
                { url: "http://www.legaldaily.com.cn/index/content/2020-10/14/content_8326920.htm" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
