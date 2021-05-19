/**
 * Name: 大江网
 * Domain: https://www.jxcn.cn/
 * Date: 10/25/2020
 */
exports.main = async (pageContext) => {
    let $ = pageContext.$;
    let builder = pageContext.pageResultBuilder;
    var data = {

    };
    data.imgs = [];
    data.title = $("#jxnews_iframe > div.contect > div.contleft > div.newslb > div.title").text();
    data.author = $("#source_baidu").text();
    data.date = $("#pubtime_baidu").text();
    data.content = $("#jxnews_iframe > div.contect > div.contleft > div:nth-child(6) > table > tbody > tr:nth-child(2)").text();
    $("#jxnews_iframe > div.contect > div.contleft > div:nth-child(6) > table > tbody > tr:nth-child(2)").find("img").each((i, e) => {
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
    
}