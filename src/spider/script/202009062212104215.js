exports.main = async (pageContext)=>{
        let $ = pageContext.$;
        let builder = pageContext.pageResultBuilder;
        let strUtils =pageContext.strUtils;

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

        builder.findUrl();
        builder.success();
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

        builder.findUrl();
};