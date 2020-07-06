const {ListPageAnalyzer} =require("./ListPageAnalyzer");
const {} =require()
class VueAdminGenerator{
        constructor(){
           this._listPageAnalyzer= new ListPageAnalyzer();
        }

        generate(configGroup){
           let listPageItem =this.findListPageItem(configGroup);
        }

        findListPageItem(configGroup){

        }

        generateQueryPage(configItem){
               let controls= analyzeControl(configItem.req);
               let columns =analyzColumn(configItem.resp);
        }

        generateEditPage(){

        }

        generateRoute(){

        }

        generateModule(){

        }
}