/**
 * Name: 澎湃新闻
 * Domain: https://www.thepaper.cn/
 * Date: 11/3/2020
 */
exports.main = async (pageContext) => {
        let $ = pageContext.$;
        let builder = pageContext.pageResultBuilder;
        let selectors = [
                {
                        title: "body > div.bdwd.main.clearfix > div.main_lt > div.newscontent > h1",
                        author: "body > div.bdwd.main.clearfix > div.main_lt > div.newscontent > div.news_about > p:nth-child(2) > span",
                        date: "body > div.bdwd.main.clearfix > div.main_lt > div.newscontent > div.news_about > p:nth-child(2)",
                        content: "body > div.bdwd.main.clearfix > div.main_lt > div.newscontent > div.news_txt"
                }
        ]
        var data = {

        };

        let selector = selectors[0];
        let dateExtractor = /[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}/

        data.imgs = [];
        data.title = $(selector.title).text();
        data.author = $(selector.author).text();
        data.date = $(selector.date).text();
        if (data.date)
                data.date = dateExtractor.exec(data.date)[0];

        data.content = $(selector.content).text();
        $(selector.content).find("img").each((i, e) => {
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