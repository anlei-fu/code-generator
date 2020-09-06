
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../model/CrawlTaskConfig");
const { PageContext } = require("../PageContext");
const {FILE} =require("../utils/file");


let lemmaId="";
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

        data.mainImag=$("#mainpic > a > img").attr("src");
        data.title =$("#content > h1 > span:nth-child(1)").text();
        data.year=$("#content > h1 > span.year").text();

        data.info=$("#info").text();
        data.grade =$("#interest_sectl > div.rating_wrap.clearbox > div.rating_self.clearfix > strong").text();
        data.grader=$("#interest_sectl > div.rating_wrap.clearbox > div.rating_self.clearfix > div > div.rating_sum > a > span").text();

        data.fiveStar =$("#interest_sectl > div.rating_wrap.clearbox > div.ratings-on-weight > div:nth-child(1) > span.rating_per").text();
        data.fourStar =$("#interest_sectl > div.rating_wrap.clearbox > div.ratings-on-weight > div:nth-child(2) > span.rating_per").text();
        data.threeStar =$("#interest_sectl > div.rating_wrap.clearbox > div.ratings-on-weight > div:nth-child(3) > span.rating_per").text();
        data.twoStar =$("#interest_sectl > div.rating_wrap.clearbox > div.ratings-on-weight > div:nth-child(4) > span.rating_per").text();
        data.oneStar =$("#interest_sectl > div.rating_wrap.clearbox > div.ratings-on-weight > div:nth-child(5) > span.rating_per").text();
        data.officialGrade=$("#interest_sectl > div.rating_betterthan > a").text();

        data.summary=$("#link-report > span").text();
        data.shortComment=$("#comments-section > div.mod-hd > h2 > span > a").text();
        data.review=$("#comments-section > div.mod-hd > h2 > span > a").text();
        data.watched=$("#subject-others-interests > div > a:nth-child(1)").text();
        data.wantToWatch=$("#subject-others-interests > div > a:nth-child(2)").text();

        builder.data(data);
        builder.success();
        $("#recommendations > div").find("a").each((i, e) => {
                let href = $(e).attr("href");
                let full = pageContext.urlResolver.resolve(href);
                if(full){
                 builder.newUrl(full);
                }
        });

        FILE.writeJson("douban.json",data,true);

      
}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                .urlMatchPatterns(`["^(http://|https://)movie.douban.com/subject/[0-9]+/\\\\\\\\?from.*"]`)
                .urlEncodes(`{"https://movie.douban.com/subject":"#1"}`)
                .crawlType(1)
                .build();

        let context = await createPageContext(
                taskConfig,
                { url: "https://movie.douban.com/subject/1294915/" }
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
