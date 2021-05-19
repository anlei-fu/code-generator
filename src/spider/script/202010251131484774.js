/**
 * Name: 人民日报
 * Domain: http://www.people.com.cn/
 * Date: 11/3/2020
 */
exports.main = async (pageContext) => {
    let $ = pageContext.$;
    let builder = pageContext.pageResultBuilder;
    var data = {

    };
    data.imgs = [];
    data.title = $("body > div.clearfix.w1000_320.text_title > h1").text();
    data.author = $("body > div.clearfix.w1000_320.text_title > div > div.fl > a").text();
    data.date = $("body > div.clearfix.w1000_320.text_title > div > div.fl").text();
    data.content = $("#rwb_zw").text();
    $("#rwb_zw").find("img").each((i, e) => {
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