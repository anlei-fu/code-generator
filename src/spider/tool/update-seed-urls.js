const { MysqlExcutor } = require("./../../sql/excutor");
async function main(id){
    let excutor = new MysqlExcutor({
        host: "127.0.0.1",
        port: "3306",
        user: "root",
        password: "2011801243",
        database: "crawler"
    });

  await   excutor.execute(`
      update url 
      set url_status = 1
      where down_system_site_id = ${id}
  `);
}
/******************************************main****************************** */
main(83);