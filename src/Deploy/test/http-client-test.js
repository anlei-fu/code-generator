const { HttpClient } = require("./../common/HttpClient");
const {FILE} =require("./../common/utils/file");

async function test() {
        let client = new HttpClient("test", { baseURL: "http://localhost:10032" });

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

        // await client.post(
        //         "/run",
        //         {
        //                 taskId: 2,
        //                 urls: [
        //                         {
        //                                 url:"https://www.baidu.com/",
        //                                 referUrl:"https://www.baidu.com/"
        //                         },
                               
        //                 ],
        //                 scriptPath: "202008181643383753.js",
        //                 crawlType:1,
        //                 urlMaxConcurrency:10,
        //                 autoDownloadPage:true,
        //                 blockRules:[],
        //         }
        // );

        // let req = FILE.readJson("1.json")
        // await client.post("/task/result",
        //    req
        // )

        //await client.get("/url/getByDownSystemSiteId/42");
     let resp=   await client.get("http://service.library.mtime.com/Movie.api?Ajax_CallBack=true&Ajax_CallBackType=Mtime.Library.Services&Ajax_CallBackMethod=GetMovieOverviewRating&Ajax_CrossDomain=1&Ajax_RequestUrl=http%3A%2F%2Fmovie.mtime.com%2F264006%2F&Ajax_CallBackArgument0=264006");
}

/*********************************************test*************************************************************************/
test();