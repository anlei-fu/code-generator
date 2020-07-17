const { HttpClient } = require("./../common/HttpClient");

async function test() {
        let client = new HttpClient("test", { baseURL: "http://localhost:10051" });

        //---------------------task-----------------------------------
        //add
        // for (let i = 2; i < 10; i++) {
        //         await client.post("/task/add", { id: i, taskType: 1,scriptFile:"1.js", args: `"test"` });
        // }

        // get status
        // await (client.get("/task/status/{id}", { id: 2 }));

        // await client.get("/task/list/executing");

        // await client.post("/test/", { id: 10, value: "16" });
        // await client.put("/test/{id}", { id: 10 });
        // await client.delete("test/{id}", { id: 10 })

        await client.post(
                "/run",
                {
                        taskId: 2,
                        urls: [
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                },
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                },
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                },
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                },
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                },
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                },
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                },
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                },
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                },
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                },
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                },
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                },
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                },
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                },
                                {
                                        target:"https://www.baidu.com/",
                                        referer:"https://www.baidu.com/"
                                }
                        ],
                        script: "baidu.js",
                        isStatic:true,
                        autoDownloadPage:true,
                        rules:[],
                }
        );
}

/*********************************************test*************************************************************************/
test();