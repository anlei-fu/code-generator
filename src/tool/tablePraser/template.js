const {FILE}=require("./../../libs/file")

class Section{
        constructor(name,max){
                this.name=name;
                this.current=0;
                this.max=max;
        }
        next(){
          this.current++;
        }
}
const MARK="@";
class Template{
        constructor(file,config,sections){
         this.sourece=FILE.read(file);
         this.sections=sections;
         this.config=config;
        }
        render({view,js}){
           let t= this.sections[view.sec].next();
               this.sourece=this.sourece.replace(`@${view.sec}.${t}`,view.content);
          return this;
        }
        final(){

        }
}