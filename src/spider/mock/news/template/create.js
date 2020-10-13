const { FILE } = require("./../../../../libs");
const { STR } = require("../../../../libs/str");

function create(name) {
    let detailTemplate = FILE.read("./detail-template.js");
    let homePageTemplate = FILE.read("./homePage-template.js");
    if (!FILE.exists(`./../${name}-news-detail.js`)) {
        FILE.write(`./../${name}-news-detail.js`, STR.replace(detailTemplate, { "@name": name }));
        FILE.write(`./../${name}-news-homepage.js`, homePageTemplate);
    }
}

function main(sites) {
    sites.forEach(x => {
        create(x);
    })
}
/*******************************************************************main*************************************************************************** */
main([
    //
    "cctv",
    //
    "guangming",
    //
    "guanchazhe",
    //
    "global",
    //
    "people-daily",
    //
    "xinhua",
    //
    "zhongguoxingwen",
    //
    "zhonghua",
    //
    "thepaper",
    //
    "takungpao",
    //
    "guojizaixian",
    //
    "cankaoxiaoxi",
    //
    "xinjingbao",
    //
    "wenhuibao",
    //
    "zhongguoribao",
    //
    "haiwaiwang",
    //
    "jinjiribao",
    //
    "fazhiribao",
    //
    "dongfangwang",
    //
    "qianlongwang",
    //
    "hualongwang",
    // 联合早报
    "lianhezaobao",
    //
    "qingnianbao",
    // 齐鲁网
    "qiluwang",
    //
    "yidianzixun",
    // 大众网
    "dazhongwang",
    // 闽南网
    "mingnanwang",
    // 界面新闻
    "jiemianxinwen",
])