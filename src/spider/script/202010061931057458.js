/**
 * Name: 解放军报
 * Domain: http://www.81.cn/
 * Date: 10/17/2020
 */
exports.main = async (pageContext) => {
    let $ = pageContext.$;
    let builder = pageContext.pageResultBuilder;
    var data = {

    };
    data.imgs = [];
    data.title = $("body > div.container.m-t > div > div.content > div.article-header > h1").text();
    data.author = $("body > div.container.m-t > div > div.content > div.article-header > div.info > span:nth-child(1)").text();
    data.date = $("body > div.container.m-t > div > div.content > div.article-header > div.info > div > small > i.time").text();
    data.content = $("").text();
    $("#article-content").find("img").each((i, e) => {
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
    builder.data(data);
    builder.success();
    
}