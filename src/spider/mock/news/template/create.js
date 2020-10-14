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
    // 央视
    "cctv",
    // 光明日报
    "guangming",
    // 观察者
    "guanchazhe",
    // 环球网
    "global",
    // 人民日报
    "people-daily",
    // 新华网
    "xinhua",
    // 中新网 --中国新闻社
    "zhongguoxingwen",
    // 中华网 --
    "zhonghua",
    // 澎湃新闻 --上海报业集团
    "thepaper",
    // 大公报
    "takungpao",
    // 国际在线 --中央广播电视总台
    "guojizaixian",
    // 参考消息  --新华通讯社
    "cankaoxiaoxi",
    // 新京报 --中共北京市委
    "xinjingbao",
    // 文汇报  --上海文汇报社、香港文汇报社
    "wenhuibao",
    // 中国日报
    "zhongguoribao",
    // 海外网  --人民日报海外版
    "haiwaiwang",
    // 经济日报 --经济日报社
    "jingjiribao",
    // 法制日报 -- 法制日报社
    "fazhiribao",
    // 东方网 --上海市国有资产监督委员会
    "dongfangwang",
    // 千龙网 --千龙网是北京市委宣传部主管主办
    "qianlongwang",
    // 华龙网 --重庆市委宣传部
    "hualongwang",
    // 联合早报(singapore) --新加坡报业控股公司
    "lianhezaobao",
    // 青年报 --
    "qingnianbao",
    // 齐鲁网 --山东网络广播电视台
    "qiluwang",
    // 一点资讯
    "yidianzixun",
    // 大众网 --山东省委宣传部
    "dazhongwang",
    // 闽南网 --福建日报社
    "mingnanwang",
    // 界面新闻 --财经新媒体，由上海报业集团出品
    "jiemianxinwen",
    // 上海
    "xinminwang",
    // 潇湘晨报社
    "xiaoxiangchengbao",
    // 荆楚网
    "jinchuwang",
    // 金羊网
    "dongbeiwang",
    "beifangwang",
    "dahewang",
    "sichuanxinwenwang",
    "caixinwang",
    "hexunwang",
    "zhongjinzaixian",
    "dongfangcaifuwang"
])