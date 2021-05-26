/**
 * Name: 经济观察网
 * Domain: http://www.eeo.com.cn/
 * Date: 10/17/2020
 */
exports.main = async (pageContext) => {
    let $ = pageContext.$;
    let builder = pageContext.pageResultBuilder;
    var data = {

    };
    data.imgs = [];
    data.title = $("body > div.xd-bottom > div > div.xd-b-left > div.xd-b-b > h1").text();
    data.author = "经济观察网";
    data.date = $("body > div.xd-bottom > div > div.xd-b-left > div.xd-b-b > p > span").text();
    $("body > div.xd-bottom > div > div.xd-b-left > div.xd-nr > div.xd-xd-xd-rwm").remove();
    data.content = $("body > div.xd-bottom > div > div.xd-b-left > div.xd-nr").text();
    $("body > div.xd-bottom > div > div.xd-b-left > div.xd-nr").find("img").each((i, e) => {
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