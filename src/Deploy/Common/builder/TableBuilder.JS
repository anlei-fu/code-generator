class Column{
        constructor(){
                this.name="";
                this.type="";
                this.autoIncrease=false;
                this.pk=false;
                this.uniqual=false;
                this.nullable=true;
        }
}

class Table{
        constructor(){
                this.name="";
        }
}

class TableBuilder{
        constructor(){
                this._table=new Table();
        }
       tableName(name,description){
          this._table.name=name;
          this._table.description=description||name;
       } 

       intNullableField(name,{description="",pk=false,autoIncrease=false,uniqual=false}){
               
       }

       intField({description="",pk=false,autoIncrease=false,uniqual=false}){

       }

       shorField(){

       }

       shortNullableField(){

       }

       floatField(){

       }

       floatNullableField(){

       }

       doubleField(){

       }

       doubleNullableField(){

       }

       longField(){

       }

       longNullableField(){

       }

       dateField(){

       }

       dateNullableField(){

       }

       textField(){

       }

       textNullableField(){

       }

       varCharField(){

       }

       varCharNullableField(){

       }

       charField(){

       }

       charNullableField(){

       }

       booleanField(){

       }

       booleanNullableField(){

       }
}