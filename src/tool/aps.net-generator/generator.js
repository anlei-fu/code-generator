import { config } from "rxjs";

class SelectConfig{
        constructor(){
                this.defaultText="";
                this.valueField="";
                this.textField="";
                this.name="";
        }
}

class ImportConfig{
        constructor(){
                this.fieldsMapping=new Map();
        }
}

class ExportConfig{
        constructor(){

        }
}


class GeneratorConfig{
        constructor(){
               this.add=true;
               this.batch=false;
               this.delete=false;
               this.selects=[];
               this.excludes=[];
               this.exports=new ExportConfig();
               this.imports=new ImportConfig();
               this.enumMapping=new Map();
        }
}


class Generator{
        /**
         * 
         * @param {GeneratoraConfig} config 
         */
        constructor(config){
                this._config=config;
        }
        generate(config){
               
               generateIndex(config);

              if(config.add||config.edit)
                  this.generateItem();

              if(config.importExcel)
                 this.generateImportExcel(config);

              if(config.exportExcel)
                this.generateExportExcel(config)
        }

        generateItem(config){

        }

        generateExportExcel(config){

        }

        generateImportExcel(config){

        }
}