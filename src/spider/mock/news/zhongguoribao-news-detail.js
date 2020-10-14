/****
 *  中国日报  http://cn.chinadaily.com.cn/
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
        data.title = $("body > div.container > div.container-left2 > h1").text();
        data.author = $("body > div.container > div.container-left2 > div.fenx > div:nth-child(1) > a:nth-child(2)").text();
        data.date = $("body > div.container > div.container-left2 > div.fenx > div:nth-child(2)").text();
        data.content = $("#Content").text();
        $("#Content").find("img").each((i, e) => {
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

        //data.comment = getCommet(pageContext.url, pageContext.httpClient);

        FILE.write("./output/zhongguoribao.html", pageContext.html);
        FILE.writeJson("./output/zhongguoribao.json", data, true);
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
                { url: "http://caijing.chinadaily.com.cn/a/202010/14/WS5f86485aa3101e7ce972913e.html" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
