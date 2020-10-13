
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../model/CrawlTaskConfig");
const { PageContext } = require("../PageContext");
const {FILE} =require("./../../libs");

let api ="https://comment.sina.com.cn/page/info?version=1&format=json&channel=gn&newsid=@newsId&group=0&compress=0&ie=utf-8&oe=utf-8&page=1&page_size=3&t_size=3&h_size=3&thread=1&uid=unlogin_user&callback=jsonp_1602508888601&_=1602508888601";
/**
 * 
 * @param {PageContext} pageContext 
 */
async function run(pageContext) {
        let $ = pageContext.$;
        let builder = pageContext.pageResultBuilder;
        let request=pageContext.httpClient;
        var data={
            
        };

        data.imgs=[];

        data.date=$("#top_bar > div > div.date-source > span").text();
        data.title=$("body > div.main-content.w1240 > h1").text();
        data.author=$("#top_bar > div > div.date-source > a").text();
        $("#contain > div > div.article_box > div.statement").remove();
        data.content=$("#article").text();
        let url = pageContext.url;

        // doc-ii -> comos-i
        try {
                let segs = url.url.split("?")[0].split("/");
                let newsId =segs[segs.length - 1].replace(".shtml", "").replace("doc-ii","comos-i");
                let path =api.replace("@newsId",newsId);
                let resp = await request.get(path);
                resp=resp.trim();
                resp=resp.substr(0,resp.length-1).replace("jsonp_1602508888601(","");
                resp=JSON.parse(resp);
                data.comment=resp.result.count.total;
               
        } catch (ex) {
          console.error(ex);
        }
        builder.data(data);
        builder.success();


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
                { url: "https://news.sina.com.cn/w/2020-10-12/doc-iivhuipp9117000.shtml" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
