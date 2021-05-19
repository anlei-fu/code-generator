
exports.main = async (pageContext)=>{
      let $ = pageContext.$;
      let builder = pageContext.pageResultBuilder;
      var data = {

      };

      data.imgs = [];
      data.title = $("body > div.g-main > div.m-title-box > h1").text();
      data.author = $("body > div.g-main > div.m-title-box > div > div.m_tips > span.m-con-source > a").text();
      data.date = $("body > div.g-main > div.m-title-box > div > div.m_tips > span.m-con-time").text();
      data.content = $("#article_inbox > div.u-mainText").text();
      $("#article_inbox > div.u-mainText").find("img").each((i, e) => {
              let src =$(e).attr("src");
              if(src){
                      let resolved =pageContext.urlResolver.resolve(src);
                      if(resolved)
                        src=resolved.url;
              }
              
              data.imgs.push({
                      src,
                      alt:$(e).attr("alt")
              });
      });
      builder.data(data).success();
}