
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
    let builder =pageContext.pageResultBuilder;
        builder.findUrl();
        builder.success();
}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                .urlMatchPatterns(`["^(https|http)://.*\.163\.com/[0-9]+/[0-9]+/[0-9]+/.*\.html.*","^(http|https)://dy\.163\.com/article/.*\.html.*"]`)
                .urlEncodes(`{
                    "http://dy.163.com/article": "#dy1",
                    "https://dy.163.com/article": "#dy2",
                    "https://money.163.com":"#money",
                    "https://auto.163.com":"#auto",
                    "https://gongyi.163.com":"#gongyi",
                    "https://lady.163.com":"#lady",
                    "https://jiankang.163.com":"#jiankang",
                    "https://mkt.163.com":"#mkt",
                    "https://ent.163.com":"#ent",
                    "https://sports.163.com":"#sports",
                    "https://war.163.com":"#war",
                    "https://tech.163.com":"#tech",
                    "https://news.163.com":"#news",
                    "https://gov.163.com":"#gov",
                    "https://edu.163.com":"#edu",
                    "https://travel.163.com":"#travel",
                    "https://home.163.com":"#home",
                    "https://vhouse.163.com":"#vhouse"
                }`)
                .encoding("gbk")
                .crawlType(1)
                .build();

        let context = await createPageContext(
                taskConfig,
                { url: "https://163.com/" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
