const {SqliteExcutor} =require("../common/excutor/SqliteExcutor");

function main(){
        let excutor =new SqliteExcutor("12.db");
        // excutor.excute("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");
        excutor.select("select * from lorem");
        excutor.excute("delete from lorem where id='1'")
}

/*--------------------------------------------main------------------------------------------------------------------*/
main();