const { HttpClient } = require("./HttpClient");
const API = {
       REPORT_RESULT: "/task/result",
}

/**
 * @CrawlerContext component ,to notify master task result
 */
class ResultReporter {

        /**
         * To notify master task finished ,what erver the task-result is ,
         * the master should return a success response
         * 
         * @param {String} master 
         * @param {CrawlTaskResult} taskResult 
         */
        async reportResult(master, taskResult) {
                let client = new HttpClient("ResultReporter", { baseUrl: master });
                return client.post(API.REPORT_RESULT, taskResult);
        }
}

exports.ResultReporter = ResultReporter;