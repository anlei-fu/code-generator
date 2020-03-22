const axios = require('axios');
const crypto = require('crypto');
const { LoggerFactory } = require("../logging/logger-factory");

const LOG = LoggerFactory.getLogger("ApiTester");

const HTTP = axios.default.create({timeout:20000});
const MD5 = crypto.createHash('md5');

const SMS_CODE = "275284";
const COOP_ORDER = "20200319170000132";
const PHONE = "13882356167";
const SIGN_KEY = "D5AC7AF0CF8ACF80";
const COOP_ID="test";
const PRODUCT_ID="100000001283";


async function getVCode() {
        let param = `coopId=${COOP_ID}&coopOrder=${COOP_ORDER}&phone=${PHONE}&pno=100000001283`;
        param = makeSign(param);
        let url = `http://fc.18pingtai.cn:6070/api/sms/get?${param}`;
        LOG.info("request:")
        LOG.info(url);
        let resp = await HTTP.get(`http://fc.18pingtai.cn:6070/api/sms/get?${param}`);
        LOG.info("result");
        console.log(resp.data);
}

async function queryProduct() {
        let param = `coopId=${COOP_ID}&coopOrder=${COOP_ORDER}&phone=${PHONE}&smsCode=${SMS_CODE}`;
        param = makeSign(param);
        let url = `http://fc.18pingtai.cn:6070/yd5g/product/query?${param}`;
        LOG.info("request:")
        LOG.info(url);
        let resp = await HTTP.get(url);
        LOG.info("result");
        console.log(resp.data);
}

async function buy(){
        var param = `coopId=test&coopOrder=${COOP_ORDER}&phone=${PHONE}&pno=${PRODUCT_ID}&smsCode=${SMS_CODE}`;
        param=makeSign(param);
        let url = `http://fc.18pingtai.cn:6070/api/sms/submit?${param}`;
        LOG.info("request:")
        LOG.info(url);
        let resp = await HTTP.get(url);
        LOG.info("result");
        console.log(resp.data);
}

function makeSign(content, key = SIGN_KEY) {
        let signStr = MD5.update(`${content}${key}`).digest("hex");
        return `${content}&sign=${signStr}`;
}

/*********************************************************************************/

//getVCode();

  queryProduct();
 // buy();