/**
 * Name: 第一财经
 * Domain: https://www.yicai.com/
 * Date: 10/17/2020
 */
exports.main = async (pageContext) => {
    let $ = pageContext.$;
    let builder = pageContext.pageResultBuilder;
    var data = {

    };
    data.imgs = [];
    data.title = $("body > div.g-bd.f-cb > div.g-mn.g-mn-w.g-mn-mt1.f-fl > div.m-text > div.title.f-pr > h1").text();
    data.author = $("body > div.g-bd.f-cb > div.g-mn.g-mn-w.g-mn-mt1.f-fl > div.m-text > div.title.f-pr > p.f-cb > span").text();
    data.date = $("body > div.g-bd.f-cb > div.g-mn.g-mn-w.g-mn-mt1.f-fl > div.m-text > div.title.f-pr > p.f-cb > em").text();
    data.content = $("").text();
    $("body > div.g-bd.f-cb > div.g-mn.g-mn-w.g-mn-mt1.f-fl > div.m-text > div.m-txt").find("img").each((i, e) => {
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