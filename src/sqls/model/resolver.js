const {MysqlExcutor}=require("./../mysql-excutor/mysql-excutor")
const { Table, Column, SqlType, Package, Constraint, Function, Procedure, Db, SqlConstant, SqlValue, Parameter, Index }
        = require("./../../resolvers/db-info");
async function resolve(config){
      let excutor=new MysqlExcutor(config);
      let datas= await excutor.query("");
      let tables=new Map();;

      datas.forEach(x=>{
          let table=x.table;

          if(!tables.has(table))
                  tables.set(table,new Table(table));

          let column=new Column();
          column.isPk=x.isPk;
          column.name=x.name;
          column.nullable=x.nullable;
          column.description=x.description;
          column.autoIncrement=x.autoIncrement;
          column.type=SqlType.parse(x.type);

          tables.get(table).columns[x.name]=column;
      });
    
    return tables.values();
}