const templateRoot = "./../../template";
const { FILE } = require("./../../../../../libs");
const { init } = require(`${templateRoot}/Initializer`);
async function main() {
    init(FILE.readJson("./config.json"));
}

/********************************main************************************************************** */
main();