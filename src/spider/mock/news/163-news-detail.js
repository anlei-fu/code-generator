
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../model/CrawlTaskConfig");
const { PageContext } = require("../PageContext");
const { FILE } = require("./../../libs");


let api = "https://comment.api.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856/threads/";
/**
 * 
 * @param {PageContext} pageContext 
 */
async function run(pageContext) {
        let $ = pageContext.$;
        let builder = pageContext.pageResultBuilder;
        let request = pageContext.httpClient;

        var data = {

        };

        data.imgs = [];


        let url = pageContext.url;
        try {
                let segs = url.url.split("?")[0].split("/");

                let resp = await request.get(`${api}${segs[segs.length - 1].replace(".html", "")}`);
                data.comment=resp.cmtCount;
               
        } catch (ex) {
          console.error(ex);
        }

        data.title = $("#epContentLeft > h1").text();
        data.author = $("#ne_article_source").text();
        $("#ne_article_source").remove();
        data.date = $("#epContentLeft > div.post_time_source").text();
        $("#contain > div > div.article_box > div.statement").remove();
        data.content = $("#endText").text();
       
        $("#endText").find("img").each((i, e) => {
                data.imgs.push($(e).attr("src"));
        });

        builder.success();


        FILE.write("1.html",pageContext.html);
        FILE.writeJson("163.json", data, true);

}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                .urlMatchPatterns(`["^(http://|https://)news.163.com/.*"]`)
                .urlEncodes(`{"https://news.163.com":"#1"}`)
                .encoding("utf8")
                .crawlType(1)
                .build();

        let context = await createPageContext(
                taskConfig,
                { url: "https://ent.163.com/20/0724/16/FIAKEN6G00039C3O.html" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();