const { HttpClient } = require("./../../src/http");
const { LoggerFactory } = require("./../../src/logging");
const { FILE } = require("./../../src/libs");

LoggerFactory.allowInfos(".*");
const LOG = LoggerFactory.getLogger("Api test")

async function main() {
        let baseUrl = "http://localhost:56001/ToInterFace";
        let client = new HttpClient("ApiTester", { baseURL: baseUrl });

        // 行为类目查询
        LOG.info("GET /getActionCategory")
        FILE.writeJson("getActionCategory.json", await client.get("/getActionCategory", {
                actionDays: 30,
                actionScene: "[\"E-COMMERCE\"]"
        }), true)

        // 行为关键词查询
        LOG.info("GET /getActionKeyword")
        FILE.writeJson("getActionKeyword.json", await client.get("/getActionKeyword", {
                actionDays: 30,
                actionScene: JSON.stringify(["E-COMMERCE","NEWS"]),
                queryWords: "号卡，移动花卡，流量包"
        }), true)

        // 兴趣类目查询
        LOG.info("GET /getInterestCategory")
        FILE.writeJson("getInterestCategory.json", await client.get("/getInterestCategory", {
        }), true)

        // 兴趣关键词查询
        LOG.info("GET /getInterestKeyword")
        FILE.writeJson("getInterestKeyword.json", await client.get("/getInterestKeyword", {
                queryWords: "号卡，移动花卡，流量包",
                actionDays: 30,
                actionScene: "[\"E-COMMERCE\",\"NEWS\"]",
        }), true)

        // 查询计划可用转化id
        LOG.info("GET /getAdConvertQuery")
        FILE.writeJson("getAdConvertQuery.json", await client.get("/getAdConvertQuery", {
                accountId: "315",
                promotionContent: "EXTERNAL_URL",
                urlOrSchema: "https://offline.qianxingniwo.com/newcard/ydflowerthree/TM10024/B05EBCEEE43E31C4E053D205A8C01C61"
        }), true)

        // 获取行业列表
        LOG.info("GET /getToolsIndustry")
        FILE.writeJson("getToolsIndustry.json", await client.get("/getToolsIndustry", {
                accountId: "315",
                level: 1,
                type: "ADVERTISER"
        }), true)

        // 获取定向包类型
        LOG.info("GET /getAudiencePackage")
        FILE.writeJson("getAudiencePackage.json", await client.get("/getAudiencePackage", {
                accountId: "315",
                landingType: "GOODS",
                deliveryRange: "DEFAULT"
        }), true)

        // 获取人群包列表
        LOG.info("GET /getCustomAudience")
        FILE.writeJson("getCustomAudience.json", await client.get("/getCustomAudience", {
                accountId: "315",
                selectType: 0, //查询类型, 0: 属于该广告主的人群包, 1: 该广告主可用的人群包.
                offset: 0,
                limit: 100
        }), true)

        // 通过关键词查询抖音帐号 ，返回达人及类目 信息
        LOG.info("GET /awemeInfoSearch")
        FILE.writeJson("awemeInfoSearch.json", await client.get("/awemeInfoSearch", {
                queryWord: "号卡",
                behaviors: "[\"FOLLOWED_USER\"]", //["FOLLOWED_USER","COMMENTED_USER","LIKED_USER","SHARED_USER"]
        }), true)

        // 查询抖音类目下的推荐达人
        LOG.info("GET /awemeCategoryTopAuthor")
        FILE.writeJson("awemeCategoryTopAuthor.json", await client.get("/awemeCategoryTopAuthor", {
                behaviors:"[\"FOLLOWED_USER\"]",
                categoryId:1
        }), true)

        // 查询抖音类目列表
        LOG.info("GET /awemeMultiLevelCategory")
        FILE.writeJson("awemeMultiLevelCategory.json", await client.get("/awemeMultiLevelCategory", {
                behaviors:"[\"FOLLOWED_USER\"]",
        }), true)
}

/***********************************************************main**************************************************** */
main();