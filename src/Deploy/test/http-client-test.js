const { HttpClient } = require("./../common/HttpClient");

async function test() {
        let client = new HttpClient("test", { baseURL: "http://localhost:8085" });

        //---------------------task-----------------------------------
        // add
        // for (let i = 2; i < 1000; i++) {
        //         await client.post("/task/add", { id: i, taskType: 1, args: `{name:"123"}` });
        // }

        // get status
        // await (client.get("/task/status/{id}", { id: 2 }));

        await client.get("/task/list/executing");

        // await client.post("/test/", { id: 10, value: "16" });
        // await client.put("/test/{id}", { id: 10 });
        // await client.delete("test/{id}", { id: 10 })
}

/*********************************************test*************************************************************************/
test();