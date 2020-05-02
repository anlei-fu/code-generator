class DbConfig{
        constructor(){

        }
}

class TableConfig{
        constructor(){
                this.name="";
                this.batchUpdate=true;
                this.batchDelete=true;
                this.batchAdd=true;
                this.exportsExcel=true;
                this.importsExcel=true;
                this.detail=true;
                this.cache=true;
        }
}

class InitConfig{
      constructor(){
              this.useSwagger=true;
              this.mode="";
              this.copyRight=true;

      }
}