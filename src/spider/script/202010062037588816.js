/**
 * Name: 每日经济新闻网
 * Domain: http://www.nbd.com.cn/
 * Date: 10/17/2020
 */
exports.main = async (pageContext) => {
    let $ = pageContext.$;
    let builder = pageContext.pageResultBuilder;
    var data = {

    };
    data.imgs = [];
    data.title = $("body > div.g-main > div.g-article-left > div.g-article > div.g-article-top > h1").text();
    if (data.title) {
            data.author = $("body > div.g-main > div.g-article-left > div.g-article > div.g-article-top > p > span.source").text();
            data.date = $("body > div.g-main > div.g-article-left > div.g-article > div.g-article-top > p > span.time").text();
            data.content = $("body > div.g-main > div.g-article-left > div.g-article > div.g-articl-text").text();
            $("body > div.g-main > div.g-article-left > div.g-article > div.g-articl-text").find("img").each((i, e) => {
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
    } else {
            data.title=$("body > div.g-main > div.g-left > div > h1").text();
            data.author = $("body > div.g-main > div.g-left > div > div.m-creatTime > span.u-clomun").text();
            data.date = $("body > div.g-main > div.g-left > div > div.m-creatTime > span:nth-child(2)").text();
            data.content = $("body > div.g-main > div.g-left > div > div.m-articleContent").text();
            $("body > div.g-main > div.g-left > div > div.m-articleContent").find("img").each((i, e) => {
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
    }
    
}