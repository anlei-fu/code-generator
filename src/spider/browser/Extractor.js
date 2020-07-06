class Extractor{
        constructor(){
                this.excutors=[];
        }

        single(selector, extractor,resultHandler){
          this.excutors.push(extractor);

          let result=  await page.$eval(selector,extractor);
               resultHandler(context,result);
        }

        group()

        excute1(){
                let target=page;
                this.excutors.forEach(async e=>{
                   let result=  await target.$eval(e.selector,e.extractor);
                   e.resultHandler(context,result);
                   target=result;
                });
        }
}


function main(){
        //*[@id="mainpic"]/a/img
        ////*[@id="interest_sect_level"]
        ////*[@id="info"]/span[1]/span[2]/a
}

