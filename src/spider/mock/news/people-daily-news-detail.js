
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
        data.title = $("body > div.clearfix.w1000_320.text_title > h1").text();
        data.author = $("body > div.clearfix.w1000_320.text_title > div > div.fl").text();
        data.date = $("body > div.clearfix.w1000_320.text_title > div > div.fl").text();
        data.content = $("#rwb_zw").text();
        $("#rwb_zw").find("img").each((i, e) => {
                data.imgs.push($(e).attr("src"));
        });

       // data.comment = getCommet(pageContext.url, pageContext.httpClient);

        FILE.write("./output/people-daily.html", pageContext.html);
        FILE.writeJson("./output/people-daily.json", data, true);
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
                { url: "http://military.people.com.cn/n1/2020/1014/c1011-31891475.html" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
