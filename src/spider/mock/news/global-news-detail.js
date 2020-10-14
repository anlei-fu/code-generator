
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
        data.title = $("body > div.all-con > div > div.t-container > div.t-container-title > h3").text();
        data.author = $("body > div.all-con > div > div.t-container > div.t-container-metadata > div.metadata-info > p:nth-child(1) > span.source > span").text();
        data.date = $("body > div.all-con > div > div.t-container > div.t-container-metadata > div.metadata-info > p.time").text();
        data.content = $("body > div.all-con > div > div.b-container > div.l-container > div.l-con.clear > article > section").text();
        $("body > div.all-con > div > div.b-container > div.l-container > div.l-con.clear > article > section").find("img").each((i, e) => {
                data.imgs.push($(e).attr("src"));
        });

       // data.comment = getCommet(pageContext.url, pageContext.httpClient);

        FILE.write("./output/global.html", pageContext.html);
        FILE.writeJson("./output/global.json", data, true);
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
                { url: "https://china.huanqiu.com/article/9CaKrnKlAnb" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
