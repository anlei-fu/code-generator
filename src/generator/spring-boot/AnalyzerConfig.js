class IncludeItem{
        constructor(){
             this.matcher=null;
             this.name="";
             this.type="";
        }
}

class IncludeItemBuilder{
        constructor(){
             this.includeItem=new IncludeItem();
        }

        name(){

        }

        type(){

        }

        matcher(){

        }

        build(){

        }
}

class AnalyzeConfig{
        constructor(){
                this.selectConfig={};
                this.updateConfig={};
                this.insertConfig={};
        }

        useSelectConfig(){

        }

        useUpdateConfig(){

        }

        useInsertConfig(){

        }

        build(){
                
        }

}