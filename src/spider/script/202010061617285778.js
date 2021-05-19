/**
 * Name: 中国日报
 * Domain: 
 * Date: 10/16/2020
 */
exports.main = async (pageContext) => {
    let $ = pageContext.$;
    let builder = pageContext.pageResultBuilder;
    var data = {

    };
    data.imgs = [];
    data.title = $("body > div:nth-child(3) > div:nth-child(2) > div.center > div.left > div.wz_contents").text();
    let info=$("body > div:nth-child(3) > div:nth-child(2) > div.center > div.left > div.fenxiang > div.fenxiang_zz").text();
    data.author = pageContext.strUtils.select(info,"\t来源：","\n")[0];
    data.date = pageContext.strUtils.select1(info,"\t2020","\n  \t")[0].trim();
    data.content = $("body > div:nth-child(3) > div:nth-child(2) > div.center > div.left > div.wz_contents1").text();
    $("body > div:nth-child(3) > div:nth-child(2) > div.center > div.left > div.wz_contents1").find("img").each((i, e) => {
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