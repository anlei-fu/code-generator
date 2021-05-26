/**
 * Name: 经济参考报
 * Domain: http://www.jjckb.cn/
 * Date: 10/17/2020
 */
exports.main = async (pageContext) => {
    let $ = pageContext.$;
    let builder = pageContext.pageResultBuilder;
    var data = {

    };
    data.imgs = [];
    data.title = $("body > div.b_box > div.xl_left > div.top_tit").text();
    data.author = $("body > div.b_box > div.xl_left > div.sj_scro > span:nth-child(3)").text();
    data.date = $("body > div.b_box > div.xl_left > div.sj_scro > span:nth-child(1)").text();
    data.content = $("").text();
    $("#content").find("img").each((i, e) => {
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