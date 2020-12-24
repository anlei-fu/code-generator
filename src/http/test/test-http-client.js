const { HttpClient } = require("./../HttpClient");
const { LoggerFactory } = require("./../../logging");

LoggerFactory.allowInfos(".*");
const LOG = LoggerFactory.getLogger("Api");

async function main() {
        let client = new HttpClient("ApiTester", { baseURL: "http://localhost:56001/" });

        LOG.info("test");
        let resp = await client.get("/Static/GetTopVal", {

        });
        console.log(JSON.stringify(resp));

        LOG.info("test");
        resp = await client.get("/Static/GetMiddleList", {

        });
        console.log(JSON.stringify(resp));

        LOG.info("test");
        resp = await client.get("/Static/GetDrawList", {

        });
        console.log(JSON.stringify(resp));

        LOG.info("test");
        resp = await client.get("/Static/GetDrawListNow", {

        });
        console.log(JSON.stringify(resp));
}

/*************************************main*********************************/
main();