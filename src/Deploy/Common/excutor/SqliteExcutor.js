var sqlite3 = require('sqlite3').verbose();

/**
 * Sqlite accessor
 */
class SqliteExcutor{
     constructor(db){
         this._dbFile=db;
         this._excutor=new sqlite3.Database(this._dbFile);
     }

     query(sql){
        new Promise((resolve,reject)=>{
                this._excutor.all(sql,(err,data)=>{
                        if(err){
                           reject(err)
                           return;
                        }  
                        
                        resolve(data);

                });
        });
    }

    excute(sql){
        new Promise((resolve,reject)=>{
                this._excutor.run(sql,(result,err)=>{
                        if(err){
                           reject(err)
                           return;
                        }  
                        
                        resolve(result);

                });
        });
    }

}

exports.SqliteExcutor =SqliteExcutor