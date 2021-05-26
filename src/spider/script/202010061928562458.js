/**
 * Name: 澎湃新闻
 * Domain: https://www.thepaper.cn/
 * Date: 10/17/2020
 */
exports.main = async (pageContext) => {
    let $ = pageContext.$;
    let builder = pageContext.pageResultBuilder;
    var data = {

    };
    data.imgs = [];
    data.title = $("body > div.bdwd.main.clearfix > div.main_lt > div.newscontent > h1").text();
    data.author = $("body > div.bdwd.main.clearfix > div.main_lt > div.newscontent > div.news_about > p:nth-child(1)").text();
    data.date = $("body > div.bdwd.main.clearfix > div.main_lt > div.newscontent > div.news_about > p:nth-child(2)").text();
    data.content = $("").text();
    $("body > div.bdwd.main.clearfix > div.main_lt > div.newscontent > div.news_txt").find("img").each((i, e) => {
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