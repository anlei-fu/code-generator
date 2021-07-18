const { FILE, OBJECT } = require("./../../../../libs")

function main() {
    let result = [];
    let json = FILE.readJson("./MySqlDataType.json");
    json.forEach(x => {

        x.forEach(y => {
            if (!y["类型"])
                return;

            result.push({
                label: y["类型"].toLowerCase(),
                value: y["类型"].toLowerCase(),
            })
        })

    })

    FILE.write("1.js", OBJECT.text(result, "SqlType"));
}

main();