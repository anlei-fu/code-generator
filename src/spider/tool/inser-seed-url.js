const { MysqlExcutor } = require("./../../sql/excutor");
const { FILE } = require("./../../libs");

async function main(name, id) {
    let excutor = new MysqlExcutor({
        host: "127.0.0.1",
        port: "3306",
        user: "root",
        password: "2011801243",
        database: "crawler"
    });

    Object.keys(FILE.readJson(`./output/${name}/seeds.json`)).forEach(async key => {
        await excutor.execute(`
             insert into url (
             down_system_site_id,
             url,
             url_type)values(
             ${id},
            '${key}',
            2
             );
           `)
    });
}

/************************************************main********************************************************** */
main(
    "zhonghuawang",
    81
)