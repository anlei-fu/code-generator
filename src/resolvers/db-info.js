/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 16:28:55
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-27 17:02:35
 */
class DbObject {
  constructor (name,description){
          this.name=name;
  }
}

class Db extends DbObject {
        constructor(name,description){
         this.packages=[];
         this.procedures=[];
         this.sequences=[];
         this.tables=[];
         this.functions=[];
         this.jobs=[];
         this.name=name;
        }
}

class Package extends DbObject {

}

class Table extends DbObject{
   constructor(name,description){
           this.columns=[];
           this.description=[];
   }
}
class Column extends DbObject {
        constructor(name,description,type,nullable,{isPk,autoIncrement,sequence,chek,defaltValue,unique,chineseName,comment}){
          this.type="";
          this.nullable=true;
          this.autoIncrement=false;
          this.isPk=false;
          this.sequence="";
          this.chek="";
          this.defaltValue="";
          this.unique=false;
          this.chineseName="";
          this.comment="";
        }
}

class Sequence extends DbObject {
        constructor(name,description){

        }
}
class DbParameter extends DbObject {
     constructor(name,description,type,direction){

     }
}
class Procedure extends DbObject {
     constructor(name,parameters){
             super(name);
             this.parameter=parameters;
     }
}
class Function extends Procedure {

}
class Job {

}