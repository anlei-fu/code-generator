exports.main = async (pageContext)=>{
        let $ = pageContext.$;
        let matcher = pageContext.taskContext.urlMatcher;
        let builder = pageContext.pageResultBuilder;

        $("a").each((i, e) => {
                let href = $(e).attr("href");
                let full = pageContext.urlResolver.resolve(href);
                if(full&&matcher.match(full.url))
                 builder.newUrl(full);
        });


       let title1="body > div.body-wrapper.feature.large-feature.starLarge > div.feature-poster > div > div.layout.lemmaWgt-posterBg > div.poster-top > dl > dd > h1";
       let title2 ="body > div.body-wrapper > div.content-wrapper > div > div.main-content > dl.lemmaWgt-lemmaTitle.lemmaWgt-lemmaTitle- > dd > h1";
       let title =$(title2).text();

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
       let properties =[];
       $(property1).find("dl").each((i,e)=>{
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
       let summary= $(summary1).text();

        builder.success();
        builder.data({
                title,
                summary,
                synonyms,
                properties
        });

        let useBy=0;
        let disscuss=0;
        let revert=0;

       
        FILE.writeJson("1.json",{
                title,
                summary,
                synonyms,
                properties
        });
};