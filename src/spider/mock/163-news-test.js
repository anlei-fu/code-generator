
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../model/CrawlTaskConfig");
const { PageContext } = require("../PageContext");
const {FILE} =require("../utils/file");


let lemmaId="";
let newLemmaIdEnc="";
/**
 * 
 * @param {PageContext} pageContext 
 */
async function run(pageContext) {
        let $ = pageContext.$;
        let builder = pageContext.pageResultBuilder;

        var data={
            
        };

        data.imgs=[];

        data.date=$("#contain > div > div.article_title > div.share_box > p > span:nth-child(1)").text();
        data.title=$("#contain > div > div.article_title > h2:nth-child(1)").text();
        data.author=$("#contain > div > div.article_title > div.share_box > p > span:nth-child(3)").text();
        $("#contain > div > div.article_box > div.statement").remove();
        data.content=$("#content").text();
        data.comment=$("#contain > div > div.article_box > div.tie-areas.post_comment > div.tie-title-bar > span > a:nth-child(2)").text();
        data.follower=$("#contain > div > div.article_box > div.tie-areas.post_comment > div.tie-title-bar > span > a:nth-child(4)").text();
        $("#content").find("img").each((i,e)=>{
             data.imgs.push($(e).attr("src"));
        });

       builder.data(data);
       builder.success();
       FILE.writeJson("./output/wangyihao.json",data);
}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                .urlMatchPatterns(`["^(http://|https://)dy.163.com/article/.*"]`)
                .urlEncodes(`{"http://dy.163.com/article":"#1"}`)
                .encoding("gbk")
                .crawlType(1)
                .build();

        let context = await createPageContext(
                taskConfig,
                { url: "https://dy.163.com/article/FOGKRASC05504DLJ.html?clickfrom=w_yw" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
