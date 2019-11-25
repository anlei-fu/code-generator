/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-11 09:26:39
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-25 19:02:12
 */
const axios = require('axios');
const { config } = require("./test-config");
const { TestRecord } = require("./test-record");
const { OBJECT } = require("./../libs/utils");
const { FILE } = require("./../libs/file");
const { DATE } = require("./../libs/date");
const showdown = require('showdown');

let converter = new showdown.Converter();
let instance = axios.default.create(config.defaultConfig);


/**
 * 
 * @param {String} testName 
 * @param {String} tester 
 */
function runTest(testName, tester) {

        let ls = [];
        let t = 0;
        config.items.forEach(x => {

                let req = buildRequest(x);
                let record = buildRecord(req);
                let start = new Date();

                instance(req)
                        .then(resp => {
                                record.status = resp.status;
                                record.response = resp.data;
                                if (req.assert) {
                                        if (req.assert(resp.data)) {
                                                record.sucess = true;
                                        } else {
                                                record.sucess = false;
                                        }
                                } else {
                                        record.sucess = true;
                                }
                                record.elapse = new Date().getTime() - start.getTime();
                                ls.push(record);
                                t++;

                        })
                        .catch(err => {
                                console.log(err);
                                record.sucess = false;
                                if(err.response)
                                record.status = err.response.status;
                                record.response = err.message;
                                record.elapse = new Date().getTime() - start.getTime();
                                ls.push(record);
                        });

        })

        setTimeout(() => {
                if (t == config.items.length)
                        write(testName, tester, ls,config.defaultConfig.baseURL);
        }, 200);

}

function buildRequest(item) {
        let c = OBJECT.clone(config.defaultConfig);
        c.path = c.baseUrl + item.path;
        c.assert=config.defaultConfig.assert;
        OBJECT.extend(c, item, true);
        return c;
}

function buildRecord(item) {
        let record = new TestRecord();
        OBJECT.extend(record, item);
        return record;
}

/**
 * 
 * @param {*} testName 
 * @param {*} tester 
 * @param {[]} records 
 * @param {*} baseUrl 
 */
function write(testName, tester, records,baseUrl) {
          
        records.sort((x,y)=>x.name>y.name);

        console.log(records.length);

        let output = FILE.read("./templates/header.md")
                .replace("@testName", testName)
                .replace("@date", DATE.toyyyy_MM_dd_hh_mm_ss(DATE.now()))
                .replace("@baseURL",baseUrl);

        records.forEach(x => {
              
                let item = FILE.read("./templates/item.md");
                item = item.replace("@group", x.group)
                        .replace("@name", x.name)
                        .replace(/@url/g, x.url)
                        .replace("@status", x.status)
                        .replace("@method", x.method)
                        .replace("@elapse", x.elapse);

                if (x.data) {
                        let html = makeJson(x.data);
                        html = html.replace(/\n/g, "</br>");
                        item = item.replace("@data", html);
                } else {
                        item = item.replace("@data", "--");
                }

                if (x.params) {
                        let html = makeJson(x.params);
                        html = html.replace(/\n/g, "</br>");
                        item = item.replace("@params", html);
                } else {
                        item = item.replace("@params", "--");
                }

                if (x.response) {
                        let html = makeJson(x.response);
                        html = html.replace(/\n/g, "</br>");
                        item = item.replace("@response", html);
                } else {
                        item = item.replace("@response", "--");
                }

                if(x.sucess){
                   item=item.replace("@success-class","success")
                            .replace("@success-text","成功");
                }else{
                        item=item.replace("@success-class","fail")
                        .replace("@success-text","失败");
                }

                output += item;
        });

        FILE.write(`./output/${testName}.md`, output);

}

function makeJson(data) {
        return converter.makeHtml(`<div class="code">${JSON.stringify(data, null, "  ")}</div>`)
}


/*---------------------------------------------------------------------main-----------------------------------------------------------------------------*/
runTest("6.合同模板接口及示例", "fuanlei");

