/**
 * Name: 北方网
 * Domain: http://www.enorth.com.cn/
 * Date: 10/17/2020
 */
exports.main = async (pageContext) => {
    let $ = pageContext.$;
    let builder = pageContext.pageResultBuilder;
    var data = {

    };
    data.imgs = [];
    data.title = $("#title > div.row > h2 > i").text();
    data.author = $("#title > div:nth-child(2) > p > span:nth-child(1)").text();
    data.date = $("#title > div:nth-child(2) > p > span:nth-child(4)").text();
    data.content = $("").text();
    $("#article").find("img").each((i, e) => {
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