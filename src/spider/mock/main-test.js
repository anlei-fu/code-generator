
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("./../model/CrawlTaskConfig");
const { PageContext } = require("./../PageContext");

/**
 * 
 * @param {PageContext} pageContext 
 */
async function run(pageContext) {
      let $ =pageContext.$;
      let matcher =pageContext.taskContext.urlMatcher;
      let builder =pageContext.pageResultBuilder;

      $("a").each((i,e)=>{
         let url = pageContext.urlResolver.resolve("");
         if(matcher.match(url)){
                 builder.newUrl(url)
         }
      });

      builder.data({});
      builder.pageResult();
}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                .crawlType(1)
                .build();

        let context = await createPageContext(taskConfig, {});
        await run(context)
}

/*********************************************main***********************************************************/
main();
