
exports.main = async (pageContext)=>{
      let $ = pageContext.$;
      let builder = pageContext.pageResultBuilder;
      var data = {

      };

      data.imgs = [];
      data.title = $("body > div.all-con > div > div.t-container > div.t-container-title > h3").text();
      data.author = $("body > div.all-con > div > div.t-container > div.t-container-metadata > div.metadata-info > p:nth-child(1) > span.source > span").text();
      data.date = $("body > div.all-con > div > div.t-container > div.t-container-metadata > div.metadata-info > p.time").text();
      data.content = $("body > div.all-con > div > div.b-container > div.l-container > div.l-con.clear > article > section").text();
      $("body > div.all-con > div > div.b-container > div.l-container > div.l-con.clear > article > section").find("img").each((i, e) => {
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