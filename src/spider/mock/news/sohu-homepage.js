
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../model/CrawlTaskConfig");
const { PageContext } = require("../PageContext");
const {FILE} =require("./../../libs");


let api ="https://comment.sina.com.cn/page/info?version=1&format=json&channel=gn&newsid=comos-ivhvpwy4738681&group=0&compress=0&ie=utf-8&oe=utf-8&page=1&page_size=3&t_size=3&h_size=3&thread=1&uid=unlogin_user&callback=jsonp_1602508888601&_=1602508888601";
let api ="https://comment.sina.com.cn/page/info?version=1&format=json&channel=gn&newsid=comos-ivhvpwy4738681&group=0&compress=0&ie=utf-8&oe=utf-8&page=1&page_size=3&t_size=3&h_size=3&thread=1&uid=unlogin_user&callback=jsonp_1602509290330&_=1602509290330";

/**
 * 
 * @param {PageContext} pageContext 
 */
async function run(pageContext) {
        let builder = pageContext.pageResultBuilder;
        builder.findUrl();
        console.log(builder.build());
        builder.success();
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
