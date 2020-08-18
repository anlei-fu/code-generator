const { Crawler } = require("./Crawler");

function main() {
        new Crawler().start(`./config.json`);
}

/****************************************main****************************** */
main();