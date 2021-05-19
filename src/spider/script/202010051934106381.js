
exports.main = async (pageContext)=>{
      let $ = pageContext.$;
      let builder = pageContext.pageResultBuilder;
      var data = {

      };

      data.imgs = [];
      data.title = $("#chan_newsTitle").text();
      data.author = $("#js-article-title > div.chan_newsInfo_source > span.source").text();
      data.date = $("#js-article-title > div.chan_newsInfo_source > span.time").text();
      data.content = $("#chan_newsDetail").text();
      $("#chan_newsDetail").find("img").each((i, e) => {
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