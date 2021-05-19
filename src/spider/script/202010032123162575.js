
exports.main = async (pageContext)=>{
      let $ = pageContext.$;
      let builder = pageContext.pageResultBuilder;
      var data = {

      };

      data.imgs = [];
      data.title = $("body > div.header > div.h-p3.clearfix > div > div.h-title").text();
      data.author = $("body > div.header > div.h-p3.clearfix > div > div.h-info > span:nth-child(2)").text();
      data.date = $("body > div.header > div.h-p3.clearfix > div > div.h-info > span.h-time").text();
      $("#p-detail").find("a").remove();
      data.content = $("#p-detail").text();
      $("#p-detail").find("img").each((i, e) => {
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