
exports.main = async (pageContext)=>{
      let $ = pageContext.$;
      let builder = pageContext.pageResultBuilder;
      var data = {

      };

      data.imgs = [];
      data.title = $("#articleTitle").text();
      data.author = $("#articleSource").text();
      data.date = $("#articleTime").text();
      data.content = $("#articleText").text();
      $("#articleText").find("img").each((i, e) => {
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