/**
 * Name: 21世纪经济报道
 * Domain: http://www.21jingji.com/
 * Date: 10/17/2020
 */
exports.main = async (pageContext) => {
    let $ = pageContext.$;
    let builder = pageContext.pageResultBuilder;
    var data = {

    };
    data.imgs = [];
    data.title = $("body > div.wrap > div.content > div.layout1.cf > div.contList.left > div > div:nth-child(2) > h2").text();
    data.author = $("body > div.wrap > div.content > div.layout1.cf > div.contList.left > div > div:nth-child(2) > p.Wh > span.baodao").text();
    data.date = $("body > div.wrap > div.content > div.layout1.cf > div.contList.left > div > div:nth-child(2) > p.Wh > span:nth-child(1)").text();
    data.summary=$("body > div.wrap > div.content > div.layout1.cf > div.contList.left > div > div:nth-child(2) > p.abstract.backg").text();
    data.content = $("").text();
    $("body > div.wrap > div.content > div.layout1.cf > div.contList.left > div > div:nth-child(2) > div.detailCont").find("img").each((i, e) => {
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