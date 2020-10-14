/**
 * 澎湃新闻  https://www.thepaper.cn/
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
        data.title = $("body > div.bdwd.main.clearfix > div.main_lt > div.newscontent > h1").text();
        data.author = $("body > div.bdwd.main.clearfix > div.main_lt > div.newscontent > div.news_about > p:nth-child(2)").text();
        data.date = $("body > div.bdwd.main.clearfix > div.main_lt > div.newscontent > div.news_about > p:nth-child(2)").text();
        data.content = $("body > div.bdwd.main.clearfix > div.main_lt > div.newscontent > div.news_txt").text();
        $("body > div.bdwd.main.clearfix > div.main_lt > div.newscontent > div.news_txt").find("img").each((i, e) => {
                data.imgs.push($(e).attr("src"));
        });

        // data.comment = getCommet(pageContext.url, pageContext.httpClient);

        FILE.write("./output/thepaper.html", pageContext.html);
        FILE.writeJson("./output/thepaper.json", data, true);
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
                { url: "https://www.thepaper.cn/newsDetail_forward_9555202" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
