const { HttpClient } = require("./../common/HttpClient");

async function test() {
        let client = new HttpClient("test", { baseURL: "http://localhost:8084" });

        await client.get("/say?word=126789", { id: 12 });
        // await client.post("/test/", { id: 10, value: "16" });
        // await client.put("/test/{id}", { id: 10 });
        //    await client.delete("test/{id}", { id: 10 })
}

/*********************************************test*************************************************************************/
test();