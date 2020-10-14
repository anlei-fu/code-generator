/**
 * 国际在线 http://www.cri.cn/
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
        data.title = $("#atitle").text();
        data.author = $("#asource").text();
        data.date = $("#apublishtime").text();
        data.content = $("#abody").text();
        $("#abody").find("img").each((i, e) => {
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

        FILE.write("./output/guojizaixian.html", pageContext.html);
        FILE.writeJson("./output/guojizaixian.json", data, true);
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
                { url: "http://news.cri.cn/20200928/cd17b569-f9ad-fb2a-43fd-b5dc900bebd6.html" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
