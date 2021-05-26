const cheerio = require("cheerio");
const { FILE } = require("../../../libs");

function main() {
        let icons = [];
        let $ = cheerio.load(FILE.read("icon.html"));
        $("p").each((i, e) => {
                icons.push($(e).text().trim());
        });

        FILE.writeJson("./output/icon.json", icons);
}

main();