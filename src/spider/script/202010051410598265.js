
exports.main = async (pageContext)=>{
      let $ = pageContext.$;
      let builder = pageContext.pageResultBuilder;
      var data = {

      };

      data.imgs = [];
      data.title = $("#cont_1_1_2 > h1").text();
      data.author = $("#cont_1_1_2 > div.left-time > div").text();
      data.date = $("#cont_1_1_2 > div.left-time > div").text();
      data.content = $("#cont_1_1_2 > div.left_zw").text();
      $("#cont_1_1_2 > div.left_zw").find("img").each((i, e) => {
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