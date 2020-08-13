const { HttpClient } = require("./HttpClient");
const API = {
        SEND_RESULT: "/task/result"
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
        async sendResult(master, taskResult) {
                let client = new HttpClient("ResultReporter", { baseUrl: master });
                return client.post(API.SEND_RESULTT, taskResult);
        }

}

exports.ResultReporter = ResultReporter;