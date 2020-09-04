
const { createPageContext } = require("./PageContextBuilder");
const { CrawlTaskConfigBuilder } = require("../model/CrawlTaskConfig");
const { PageContext } = require("../PageContext");
const {FILE} =require("../utils/file");

let api ={
        counter:"https://baike.baidu.com/api/wikiui/sharecounter?lemmaId=426146&method=get",
        pv:"https://baike.baidu.com/api/lemmapv?id=75b053874e6b551c07ce6172&r=0.28400972783201994"
}

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

        $("a").each((i, e) => {
                let href = $(e).attr("href");
                let full = pageContext.urlResolver.resolve(href);
                if(full&&matcher.match(full.url)){
                 builder.newUrl(full);
                 console.log(full.url);
                }
        });


       let title1="body > div.body-wrapper.feature.large-feature.starLarge > div.feature-poster > div > div.layout.lemmaWgt-posterBg > div.poster-top > dl > dd > h1";
       let title2 ="body > div.body-wrapper > div.content-wrapper > div > div.main-content > dl.lemmaWgt-lemmaTitle.lemmaWgt-lemmaTitle- > dd > h1";
       let title3 ="body > div.body-wrapper > div.content-wrapper > div > div.main-content.main-content-margin > dl > dd > h1";
       let title;
       if($(title1).length!=0){
          title = $(title1).text();
       }else if($(title2).length!=0){
          title = $(title2).text();
       }else{
          title=$(title3).text();
       }
      

       let synonyms =[];
       $("body > div.body-wrapper > div.before-content > div.polysemant-list.polysemant-list-normal > ul >li").each((i,e)=>{
           if($(e).find("a").length==0){
                synonyms.push({
                        title:$(e).text(),
                })
           }else{
                   let href =$(e).find("a").attr("href");
                   if(href)
                       href=pageContext.urlResolver.resolve(href);

                   synonyms.push({
                           title:$(e).find("a").text(),
                           link:href?href.url||"":""
                   })
           }
       });

       let property2 ="body > div.body-wrapper.feature.large-feature.starLarge > div.content-wrapper > div > div.main-content > div > div.basic-info.cmn-clearfix";
       let property1 ="body > div.body-wrapper > div.content-wrapper > div > div.main-content > div.basic-info.cmn-clearfix";
       let targetProperty =$(property1).length==0?property2:property1;
       let properties =[];
       $(targetProperty).find("dl").each((i,e)=>{
              let keys =[];
              let values =[];
              $(e).children("dt").each((i1,e1)=>{
                  keys.push($(e1).text());
              });
              $(e).children("dd").each((i2,e2)=>{
                 values.push($(e2).text());
              });

              keys.forEach((k,index)=>{
                      if(index<values.length)
                           properties.push({
                                   key:k,
                                   value:values[index]
                           })
              });
       });

       let summary1="body > div.body-wrapper > div.content-wrapper > div > div.main-content > div.lemma-summary"
       let summary2="body > div.body-wrapper.feature.large-feature.starLarge > div.content-wrapper > div > div.main-content > div > div.lemma-summary";
       let targetSummary = $(summary1).length==0?summary2:summary1;
       let summary= $(targetSummary).text();

        builder.success();
        let lemmaId;
        let lemmaIdArr =strUtils.select(pageContext.html,`newLemmaId:"`,`",`,1);
        if(lemmaIdArr.length>0)
         lemmaId = parseInt(lemmaIdArr[0]);

        let newLemmaIdEnc;
        let newLemmaIdEncArr= strUtils.select(pageContext.html,`newLemmaIdEnc:"`,`"`,1);
        if(newLemmaIdEncArr.length>0)
         newLemmaIdEnc= newLemmaIdEncArr[0];

        let edit =$("body > div.body-wrapper > div.content-wrapper > div > div.side-content > dl > dd.description.split-line > ul > li:nth-child(2)").text();
        if(edit)
          edit=strUtils.remove(edit,["编辑次数：","次历史版本"]);
        let cite =$("body > div.body-wrapper > div.content-wrapper > div > div.main-content > dl.lemma-reference.collapse.nslog-area.log-set-param > dd.reference-list-wrap").find("a").length;


        builder.data({
                title,
                summary,
                synonyms,
                properties,
                lemmaId,
                newLemmaIdEnc,
                edit,
                cite
        });

       
        FILE.writeJson("1.json",{
                title,
                summary,
                synonyms,
                properties,
                lemmaId,
                newLemmaIdEnc,
                edit,
                cite
        },true);
}

async function main() {
        let taskConfig = new CrawlTaskConfigBuilder()
                .autoDownloadPage(true)
                .downloadTimeout(10000)
                .urlMatchPatterns(`["^(http://|https://)baike.baidu.com/item/.*"]`)
                .urlEncodes(`{"https://baike.baidu.com/item":"#1"}`)
                .crawlType(1)
                .build();

        let context = await createPageContext(
                taskConfig,
<<<<<<< HEAD:src/spider/mock/main-test.js
                { url: "https://baike.baidu.com/item/霍邱县第二中学/9527660" }
=======
                { url: "https://baike.baidu.com/item/清朝/175141" }
>>>>>>> 55f923f4348814dc65cdd08a50799983d0d34a7b:src/spider/mock/wikipedia-test.js
        );

        await run(context)
}

/*********************************************main***********************************************************/
main();
