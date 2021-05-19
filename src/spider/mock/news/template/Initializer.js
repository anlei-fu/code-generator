const { HttpClient } = require("../../../../http/HttpClient");
const { insertSeedsUrl } = require("./insert-seed-url");
const { FILE } = require("./../../../../libs");
const { NewSiteGenerateConfig } = require("./NewSiteGenerateConfig");
const newData = () => {
    return {
        name: "主页",
        downSystemSiteType: 1,
        description: "article url detect",
        siteId: 46,
        downSystemId: 33,
        crawlerCrawlType: 1,
        crawlerAutoDownloadPage: 1,
        enableStatus: 0,
        crawlerPageEncoding: "utf8",
        urlMaxCacheCount: "1000",
        urlMatchPatterns: "",
        urlMaxDepth: 10,
        urlMaxCrawlCount: 3,
        taskUrlBatchCount: 50,
        taskMaxCount: 1,
        taskMaxRunningCount: 1,
        taskTimeout: 20,
        taskBindTimeout: 30,
        taskUrlMaxFailCount: 30,
        taskUrlMaxContinuouslyFailCount: 15,
        taskUrlMaxConcurrency: 10,
        runLimitMaxDays: 7,
        runLimitMaxHours: 24,
        runLimitAllowAutoBalance: 1,
        bloomExpectedUrlSize: 1000000,
        bloomFpp: 0.35
    }
};

const apiBase = "http://localhost:10031";


/**
 * 
 * @param {NewSiteGenerateConfig} config 
 */
async function init(config) {

    const httpClient = new HttpClient();
    let updateSiteData = {
        id: config.siteId,
        homepageUrl: config.domain
    }

    await httpClient.put(`${apiBase}/site/{id}`, updateSiteData);

    let data = newData();
    data.siteId = config.siteId;
    data.name = `${config.name}主页`;
    data.downSystemSiteType = 2;
    data.crawlerPageEncoding = config.encoding;
    data.urlMatchPatterns = config.urlMatchPattern;

    await httpClient.post(`${apiBase}/downSystemSite`, data);

    data.urlMatchPatterns = null;

    data.name = `${config.name}详情`;
    data.downSystemSiteType = 1;
    await httpClient.post(`${apiBase}/downSystemSite`, data);

    let sites = await httpClient.get(`${apiBase}/downSystemSite/page`, { name: config.name });

    let ids = [];
    ids.push(sites.data.list.filter(x => x.name.includes("详情"))[0].id);
    ids.push(sites.data.list.filter(x => x.name.includes("主页"))[0].id);

    let runLimitdata = {
        runLimitMaxDays: 7,
        runLimitMaxHours: 24
    }

    ids.forEach(async x => {
        runLimitdata.downSystemSiteId = x;
        await httpClient.post(`${apiBase}/downSystemSite/balance`, runLimitdata);
    })

    let dispatchData = {
        sourceDownSystemSiteId: ids[1],
        targetDownSystemSiteId: ids[0],
        matchPattern: ".*"
    }

    await httpClient.post(`${apiBase}/downSystemSiteDispatch`, dispatchData);

    let code =FILE.read("./default-homepage.js");
    await httpClient.post(`${apiBase}/file/upload`, {
        downSystemSiteId: ids[1],
        code
    });

    code =FILE.read("./extract.js");
    await httpClient.post(`${apiBase}/file/upload`, {
        downSystemSiteId: ids[0],
        code
    });

    insertSeedsUrl(ids[1]);
}

exports.init = init;