
const { createPageContext } = require("./news/PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../model/CrawlTaskConfig");
const { PageContext } = require("../PageContext");
const {FILE} =require("../utils/file");


let api="http://service.library.mtime.com/Movie.api?Ajax_CallBack=true&Ajax_CallBackType=Mtime.Library.Services&Ajax_CallBackMethod=GetMovieOverviewRating&Ajax_CrossDomain=1&Ajax_RequestUrl=http%3A%2F%2Fmovie.mtime.com%2F264006%2F&Ajax_CallBackArgument0=264006";
let newLemmaIdEnc="";
/**
 * 
 * @param {PageContext} pageContext 
 */
async function run(pageContext) {
        let $ = pageContext.$;
        let matcher = pageContext.taskContext.urlMatcher;
        let builder = pageContext.pageResultBuilder;
        let strUtils =pageContext.strUtils;

        var data={
            
        };

        data.mainImag=$("#db_head > div.db_coverout > div > div > div > a > img").attr("src");
        data.title =$("#db_head > div.db_ihead > div > div.clearfix > h1").text();
        data.year=$("#db_head > div.db_ihead > div > div.clearfix > p.db_year > a").text();

        data.info=$("#movie_warp > div.db_bodyout > div.db_shadow > div > div.db_contout > div.db_cont > div.clearfix.zoom > div.base_r > div.clearfix.pt15 > dl").text();
        data.grade =$("#ratingRegion > div > b").text();
        data.grader=$("#ratingCountRegion").text();
        data.actors=$("#movie_warp > div.db_bodyout > div.db_shadow > div > div.db_contout > div.db_cont > div.clearfix.zoom > div.base_r > div.clearfix.pt15 > div").text();

        data.review=$("#movieNavigationRegion > dd:nth-child(5) > a").text();
        data.wantToWatch=$("#attitudeCountRegion").text();

        $("a").each((i, e) => {
                let href = $(e).attr("href");
                let full = pageContext.urlResolver.resolve(href);
                if(full&&matcher.match(full.url)){
                 builder.newUrl(full);
                 console.log(full.url);
                }
        });

        FILE.writeJson("time.json",data,true);

      
}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                .urlMatchPatterns(`["^(http://|https://)//movie.mtime.com/.*"]`)
                .urlEncodes(`{"http://movie.mtime.com/":"#1"}`)
                .crawlType(1)
                .build();

        let context = await createPageContext(
                taskConfig,
                { url: "http://movie.mtime.com/264006/" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
