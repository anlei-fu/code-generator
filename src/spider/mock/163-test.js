
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../model/CrawlTaskConfig");
const { PageContext } = require("../PageContext");
const {FILE} =require("../utils/file");


let api ="https://comment.api.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856/threads/FLMD7FDH00259DLP";
/**
 * 
 * @param {PageContext} pageContext 
 */
async function run(pageContext) {
        let $ = pageContext.$;
        let matcher = pageContext.taskContext.urlMatcher;
        let builder = pageContext.pageResultBuilder;
        let strUtils =pageContext.strUtils;

        var data={
            
        };

        data.imgs=[];


        data.title=$("#epContentLeft > h1").text();
        data.author=$("#ne_article_source").text();
        $("#ne_article_source").remove();
        data.date=$("#epContentLeft > div.post_time_source").text();
        $("#contain > div > div.article_box > div.statement").remove();
        data.content=$("#endText").text();
        data.comment=$("#epContentLeft > div.post_body > div.post_topshare_wrap.post_topshare_wrap_fixed > div.post_tie_top > a.post_cnum_tie.js-tielink.js-tiejoincount").text();
        $("#endText").find("img").each((i,e)=>{
             data.imgs.push($(e).attr("src"));
        });


        FILE.writeJson("163.json",data,true);
      
}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                .urlMatchPatterns(`["^(http://|https://)news.163.com/.*"]`)
                .urlEncodes(`{"https://news.163.com":"#1"}`)
                .encoding("gbk")
                .crawlType(1)
                .build();

        let context = await createPageContext(
                taskConfig,
                { url: "https://news.163.com/20/0904/10/FLM2OART00018AOR.html?clickfrom=www_first_yaowen" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
