/**
 * 新京报 http://www.bjnews.com.cn/
 */
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../../model/CrawlTaskConfig");
const { PageContext } = require("../../PageContext");
const { FILE } = require("./../../../libs");

// TODO: find comment api
let api = "http://www.bjnews.com.cn/webapi/getupnum?id=@id&t=0.08300153604061511&callback_getupnum=jQuery17104925893491780924_1602656119331&_=1602656119459";

/**
 * Get comment count
 * 
 * @param {Url} url 
 * @param {HttpClient} request 
 */
async function getCommet(url, request) {
        try {
                let segs = url.url.split("?")[0].split("/");
                let id=segs[segs.length - 1].replace(".html", "");
                let path =api.replace("@id",id);
                let resp = await request.getJSONP(path,"jQuery17104925893491780924_1602656119331");
                return resp;
        } catch (ex) {
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
        data.title = $("#main > div.fl.nleft > div.title > h1").text();
        data.author = $("#main > div.fl.nleft > div.ntit > div.fl.ntit_l > span.author").text();
        data.date = $("#main > div.fl.nleft > div.ntit > div.fl.ntit_l > span.date").text();
        data.content = $("#main > div.fl.nleft > div.content").text();
        data.summary=$("#daoy").text();
        $("#main > div.fl.nleft > div.content").find("img").each((i, e) => {
                data.imgs.push($(e).attr("src"));
        });

        let resp = await getCommet(pageContext.url, pageContext.httpClient);
        if(resp&&resp.upnum)
           data.upVote=resp.upnum;

        FILE.write("./output/xinjingbao.html", pageContext.html);
        FILE.writeJson("./output/xinjingbao.json", data, true);
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
                { url: "http://www.bjnews.com.cn/inside/2020/10/13/776852.html" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
