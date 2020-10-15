
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
        data.title = $("body > div.layout.mg.articleName > h1").text();
        data.author = $("body > div.layout.mg.articleName > div > div.tip.fl > a").text();
        data.date = $("body > div.layout.mg.articleName > div > div.tip.fl > span").text();
        data.content = $("body").find("div.w600 > div.art_context").text();
        $("body").find("div.w600 > div.art_context").find("img").each((i, e) => {
                let src = $(e).attr("src");
                if (src) {
                        let resolved = pageContext.urlResolver.resolve(src);
                        if (resolved)
                                src = resolved.url;
                }

                if (src) {
                        data.imgs.push({
                                src,
                                alt: $(e).attr("alt")
                        });
                }
        });

        // data.comment = getCommet(pageContext.url, pageContext.httpClient);

        FILE.write("./output/hexunwang.html", pageContext.html);
        FILE.writeJson("./output/hexunwang.json", data, true);
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
                { url: "http://house.hexun.com/2020-10-15/202229140.html" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
