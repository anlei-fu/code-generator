
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../../model/CrawlTaskConfig");
const { PageContext } = require("../../PageContext");
const { FILE } = require("./../../../libs");

// TODO: find comment api
let api = "https://a.jiemian.com/index.php?m=article&a=getArticleP&aid=@aid&callback=jQuery1102014270306390687537_1602572107810&_=1602572107811";

/**
 * Get comment count
 * 
 * @param {Url} url 
 * @param {HttpClient} request 
 */
async function getCommet(url, request) {
        try {
                let segs = url.url.split("?")[0].split("/");
                let aid = segs[segs.length - 1].replace(".html", "");
                let resp = await request.getJSONP(api.replace("@aid", aid), "jQuery1102014270306390687537_1602572107810");
                return resp;
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
        data.title = $("body > div.content > div > div.content-container > div.main-container > div.article-view > div.article-header > h1").text();
        data.author = $("body > div.content > div > div.content-container > div.main-container > div.article-view > div.article-info > p > span:nth-child(4)").text();
        data.date = $("body > div.content > div > div.content-container > div.main-container > div.article-view > div.article-info > p > span:nth-child(2)").text();
        data.content = $("body > div.content > div > div.content-container > div.main-container > div.article-view > div.article-main > div.article-content").text();
        $("body > div.content > div > div.content-container > div.main-container > div.article-view > div.article-main > div.article-content").find("img").each((i, e) => {
                data.imgs.push($(e).attr("src"));
        });

        let resp = await getCommet(pageContext.url, pageContext.httpClient);
        if (resp && resp.tongjiarr) {
                data.comment = resp.tongjiarr.count;
                data.follower = resp.tongjiarr.ding;
                data.collect = resp.tongjiarr.collect;
                data.pv = resp.tongjiarr.hit;
        }

        //   data.comment = getCommet(pageContext.url, pageContext.httpClient);

        FILE.write("./output/jiemianxinwen.html", pageContext.html);
        FILE.writeJson("./output/jiemianxinwen.json", data, true);
}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                .urlEncodes("[]")
                // TODO: encoding
                .encoding("utf8")
                .crawlType(1)
                .build();


        let context = await createPageContext(
                taskConfig,
                // TODO: test url
                { url: "https://www.jiemian.com/article/5107227.html" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
