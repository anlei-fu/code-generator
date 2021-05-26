
/**
 * Name: @name
 * Domain: @domain
 * Date: @now
 */
const { createPageContext } = require("./../../PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../../../../model/CrawlTaskConfig");
const { PageContext } = require("../../../../PageContext");
const { FILE } = require("./../../../../../libs");

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
async function run(write, pageContext) {
        if (write)
                FILE.write("./@name.html", pageContext.html);
        //BEGIN
        let $ = pageContext.$;
        let builder = pageContext.pageResultBuilder;
        let selectors = [
                {
                       title:"@title",
                       author:"@author",
                       date:"@date",
                       content:"@content"
                }
        ]
        var data = {

        };

        let selector = selectors[0];

        data.imgs = [];
        data.title = $(selector.title).text();
        data.author = $(selector.author).text();
        data.date = $(selector.date).text();
        data.content = $(selector.content).text();
        $(selector.content).find("img").each((i, e) => {
                let src = $(e).attr("src");
                if (src) {
                        let resolved = pageContext.urlResolver.resolve(src);
                        if (resolved)
                                src = resolved.url;
                }

                if (src) {
                        data.imgs.push({
                                src,
                                alt: $(e).attr("alt")
                        });
                }
        });
        builder.data(data).success();
        //END
        if (write)
                FILE.writeJson("./@name.json", data, true);

        return builder.build();
}

async function detail(write = true, testUrl) {
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
                { url: testUrl }
        );

        return await run(write, context)
}

/*********************************************main***********************************************************/

exports.detail = detail;
