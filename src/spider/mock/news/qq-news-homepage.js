
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../model/CrawlTaskConfig");
const { PageContext } = require("../PageContext");
const {FILE} =require("../utils/file");


let lemmaId="";
let newLemmaIdEnc="";

let api ="https://coral.qq.com/article/5839605716/commentnum?callback=_article5839605716commentnum&_=1599235535699";

let api ="'http://comment5.news.sina.com.cn/page/info?version=1&format=json&channel=gn&newsid=comos-ivhvpwy4738681&group=undefined&compress=0&ie=utf-8&oe=utf-8&page=1&page_size=3&t_size=3&h_size=3&thread=1'"
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
        data.date=$("#LeftTool > div > div.year.through > span").text()+"/"+$("#LeftTool > div > div.md").text()+"/"+$("#LeftTool > div > div.time").text();
        data.title=$("body > div.qq_conent.clearfix > div.LEFT > h1").text();
        data.author=$("#LeftTool > div > div:nth-child(4) > a > div").text();
        data.content=$("body > div.qq_conent.clearfix > div.LEFT > div.content.clearfix > div.content-article").text();
        data.comment=$("#cmtNum").text();
        data.follower=$("#bottom_sina_comment > div.sina-comment-form.sina-comment-top > div.hd.clearfix > span.count > em:nth-child(3) > a").text();
      


        FILE.writeJson("qq-news.json",data,true);
      
}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                .urlMatchPatterns(`["^(http://|https://)//new.qq.com/omn/.*"]`)
                .urlEncodes(`{"https://new.qq.com/omn":"#1"}`)
                .encoding("gbk")
                .crawlType(1)
                .build();

        let context = await createPageContext(
                taskConfig,
                { url: "https://new.qq.com/omn/20200903/20200903A0NPQ100.html" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
