const { HttpClient } = require("./HttpClient");
const API = {
        SEND_RESULTT: "/task/result"
}
class ResultReporter {
        constructor () {

        }

        async sendResult(master, taskResult) {
                let client = new HttpClient("ResultReporter", { baseUrl: master });
                return client.post(SEND_RESULTT, taskResult);
        }
}

exports.ResultReporter = ResultReporter;