const {FILE} =require("./../utils/file")
exports.main = async (pageContext)=>{
  let $ = pageContext.$;
  let matcher = pageContext.taskContext.urlMatcher;
  let builder = pageContext.pageResultBuilder;
  FILE.write("1.html",pageContext.html);
  $("a").each((i, e) => {
          let href = $(e).attr("href");
          let full = pageContext.urlResolver.resolve(href);
          if(full&&matcher.match(full.url))
           builder.newUrl(full);
  });

 let summary= $("body > div.body-wrapper > div.content-wrapper > div > div.main-content > div.lemma-summary").text();

  builder.data({
          summary,
  });
  builder.success();
};