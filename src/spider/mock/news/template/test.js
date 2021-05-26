const { FILE, RANDOM } = require("./../../../../libs");

async function test(homepage, detail) {
    let seeds = FILE.readJson("./seeds.json");
    let seedsUrl = RANDOM.pickFromArray(Array.from(Object.keys(seeds)), 3);
    let urls = [];

    let badSeeds=[];
    for (const url of seedsUrl) {
        try {
            let urlFound = await homepage(url, true)
           urls=urls.concat(urlFound);
        } catch (ex) {
            badSeeds.push(url);
            console.log(ex);
        }
    }

    let exceptions=[];
    let targetUrls = RANDOM.pickFromArray(urls, 10);
    let data = [];
    for (const testUrl of targetUrls) {
        try {
            let result=await detail(false, testUrl.url);
            result.url=testUrl.url;
            data.push(result);
        } catch (ex) {
            console.log(ex);
            exceptions.push(ex.msg+ex.stackTrace);
        }
    }

    FILE.writeJson("./error.json", exceptions, true);
    FILE.writeJson("./badSeeds.json", badSeeds, true);
    FILE.writeJson("./data.json", data, true);
    FILE.writeJson("./url.json", urls, true);
}
/**************************************************************************************************/

exports.test = test;