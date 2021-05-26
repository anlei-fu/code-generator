/**
 * Name: 北京青年网
 * Domain: http://www.ynet.com/
 * Date: 10/25/2020
 */
exports.main = async (pageContext) => {
    let $ = pageContext.$;
    let builder = pageContext.pageResultBuilder;
    var data = {

    };
    data.imgs = [];
    data.title = $("#articleContent > div.articleTitle > h1").text();
    data.author = $("#msgBox > p > span.sourceMsg").text();
    data.date = $("#msgBox > p > span.yearMsg").text();
    data.content = $("#articleAll").text();
    $("#articleAll").find("img").each((i, e) => {
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