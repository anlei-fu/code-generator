
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../model/CrawlTaskConfig");
const { PageContext } = require("../PageContext");
const {FILE} =require("../utils/file");


let lemmaId="";
let newLemmaIdEnc="";

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
        data.date=$("#news-time").text();
        data.title=$("#article-container > div.left.main > div:nth-child(1) > div > div.text-title > h1").text();
        data.author=$("#article-container > div.left.main > div:nth-child(1) > div > div.text-title > div > span:nth-child(2)").text();
        data.content=$("#mp-editor").text();
        data.comment=$("#bottom_sina_comment > div.sina-comment-form.sina-comment-top > div.hd.clearfix > span.count > em:nth-child(1) > a").text();
        data.follower=$("#bottom_sina_comment > div.sina-comment-form.sina-comment-top > div.hd.clearfix > span.count > em:nth-child(3) > a").text();
      


        FILE.writeJson("sina-news.json",data,true);
      
}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                .urlMatchPatterns(`["^(http://|https://)//news.sina.com.cn/o/.*"]`)
                .urlEncodes(`{"https://news.sina.com.cn/o":"#1"}`)
                .encoding("utf8")
                .crawlType(1)
                .build();

        let context = await createPageContext(
                taskConfig,
                { url: "https://news.sina.com.cn/o/2020-09-03/doc-iivhvpwy4738681.shtml" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
