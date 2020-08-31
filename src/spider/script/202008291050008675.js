exports.main = async (pageContext)=>{
  pageContext.pageResultBuilder.success();
  let $ = pageContext.$;
  let matcher = pageContext.taskContext.urlMatcher;
  let builder = pageContext.pageResultBuilder;

  $("a").each((i, e) => {
          let href = $(e).attr("href");
          let full = pageContext.urlResolver.resolve(href);
  });

  builder.data({});
  builder.success();
};