const {RenderBase} =require("./RenderBase");


class FilterConfig{
     constructor(){
             /**
              * text|textarea|select|checkbox|checkBoxGroup|mutiple-select|radioGroup
              */
             this.type="";
            
             /**
              * 
              */
             this.field="";

             /**
              * 
              */
             this.title="";

             /**
              * get from vuex
              */
             this.enum="";

             /**
              * mutiple control option candidate
              */
             this.options=[Object];

             /**
              * option's label field
              */
             this.labelField="";

             /**
              * option's value field
              */
             this.valueField="";

             /**
              * time range only
              */
             this.startTime="";

             /**
              * time range only
              */
             this.endTime="";
     }
}


class ListPageModel{
        constructor(){
                this.filters=[FilterConfig];
                this.canEdit=false;
                this.canDelete=false;
                this.canBatchEdit=false;
                this.canBatchDelete=false;
                this.canExportExcel=false;
                this.canImportExcel=false;

                this.editConfig={};
                this.columns={};
        }
}




class ListPageRender extends RenderBase{
   constructor(){

   }

   render(){

   }
}