const { MysqlExcutor } = require("./../sql/excutor/");
const { FILE, NamingStrategy } = require("./../libs");

async function main(table) {
    let executor = new MysqlExcutor({
        user: "root",
        password: "2011801243",
        database: "crawler"
    });

    let data = await executor.query(`select * from ${table} limit 0,1`);
    let keys = Object.keys(data[0]);
    let str = "";
    keys.forEach(key => {
        str += `        t.${NamingStrategy.toHungary(key)},\r\n`;
    });

    FILE.write("./output/1.sql", str);
}

/*****************************************************main************************************************ */
main("down_system_site");
