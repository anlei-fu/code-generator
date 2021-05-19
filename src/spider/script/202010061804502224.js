/**
 * Name: 新民网
 * Domain: http://www.xinmin.cn/
 * Date: 10/17/2020
 */
const dateRegex = new RegExp("[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}");
exports.main = async (pageContext) => {
    let $ = pageContext.$;
    let builder = pageContext.pageResultBuilder;
    var data = {

    };
    data.imgs = [];
    data.title = $("body > div.PageCoreBg > div > div.Cleft > div.ArticleBox > h1").text();
    data.author = $("body > div.PageCoreBg > div > div.Cleft > div.ArticleBox > div.info > span:nth-child(1)").text();
    data.date = $("body > div.PageCoreBg > div > div.Cleft > div.ArticleBox > div.info").text();
    data.date =dateRegex.exec(data.date)[0];
    data.content = $("body > div.PageCoreBg > div > div.Cleft > div.ArticleBox > div.a_content").text();
    $("body > div.PageCoreBg > div > div.Cleft > div.ArticleBox > div.a_content").find("img").each((i, e) => {
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