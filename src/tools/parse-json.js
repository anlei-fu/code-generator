const {OBJECT,FILE} =require("./../libs");

function main(jsonStr){
   FILE.write("./output/data.js",OBJECT.export_(JSON.parse(jsonStr),"data"));
}

/************************************************************************main************************************************************ */
main(`
{"scriptPath":"202009090315166561.js","name":"新浪主页","downSystemSiteType":2,"description":"article url detect","siteId":46,"downSystemId":33,"crawlerCrawlType":1,"crawlerAutoDownloadPage":1,"enableStatus":0,"crawlerPageEncoding":"utf8","urlMaxCacheCount":"1000","urlEncodes":"","urlMatchPatterns":"[]","urlMaxDepth":10,"urlMaxCrawlCount":3,"taskUrlBatchCount":300,"taskMaxCount":5,"taskMaxRunningCount":1,"taskTimeout":2,"taskBindTimeout":60,"taskUrlMaxFailCount":100,"taskUrlMaxContinuouslyFailCount":20,"taskUrlMaxConcurrency":20,"runLimitMaxDays":7,"runLimitMaxHours":24,"runLimitAllowAutoBalance":0}
`);