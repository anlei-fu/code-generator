/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-11 09:26:39
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-12 11:47:16
 */
const axios = require('axios');
const { config } = require("./admin-test-config");
const { TestRecord } = require("./test-record");
const { OBJECT } = require("./../libs/utils");
const { FILE } = require("./../libs/file");

// create request instance
const doRequest = axios.default.create(config.defaultConfig);

/**
 *  main 
 */
function main() {

        // sum of all test item
        let total = 0;
        config.groups.forEach(group => {
                group.items.forEach(ite => {
                        total++;
                });
        });
        
        console.log(total);

        let finished = 0;

        //  records groups [{name:string,records:[]}]
        let recordsGroup = [];
        config.groups.forEach(group => {

                // records group item
                let recordsItem = {
                        name: group.name,
                        baseUrl: group.baseUrl,
                        records: []
                };
                recordsGroup.push(recordsItem);

                group.items.forEach(item => {
                        let req = buildRequest(item, group),
                                itemRecord = buildRecord(req),
                                startTime = new Date();

                        // do request
                        doRequest(req)
                                .then(resp => {
                                        itemRecord.status = resp.status;
                                        itemRecord.response = resp.data;
                                        itemRecord.elapse = new Date().getTime() - startTime.getTime();
                                        finished++;
                                        itemRecord.sucess = typeof req.assert == undefined
                                                ? true : req.assert(resp.data);
                                })
                                .catch(err => {
                                        if (err.response)
                                                itemRecord.status = err.response.status;

                                        itemRecord.sucess = false;
                                        itemRecord.response = err.message;
                                        itemRecord.elapse = new Date().getTime() - startTime.getTime();
                                        finished++;
                                });

                        recordsItem.records.push(itemRecord);
                })
        });

        // wait all task finish and write file
        let timer = setInterval(() => {
                if (finished == total) {
                        write(recordsGroup);
                        clearInterval(timer);
                }
        }, 150);
}

/**
 * 
 * @param {{url,params,data,method,headers}} item 
 * @param {url,params,data,method,headers} group 
 */
function buildRequest(item, group) {
        let req = OBJECT.clone(config.defaultConfig);
        req.assert = config.defaultConfig.assert;
        OBJECT.extend(req, item, true);
        req.url = `${config.defaultConfig.baseURL}${group.baseUrl}`;

        if (item.url)
                req.url += item.url;

        console.log(req.url);
        return req;
}

/**
 * 
 * @param {url,params,data,method,headers} req 
 */
function buildRecord(req) {
        let record = new TestRecord();
        OBJECT.extend(record, req);
        return record;
}

/**
 * 
 * @param {[{name:string,records:[]}}]} groups 
 */
function write(groups) {
        let output = "";
        groups.sort((x, y) => x.name > y.name);

        groups.forEach(group => {

                // build header
                output += FILE.read("./templates/header.md")
                        .replace("@testName", group.name);

                // build items
                group.records.sort((x, y) => x.name > y.name);
                group.records.forEach(x => {
                        item = FILE.read("./templates/item.md")
                                .replace("@group", x.group)
                                .replace("@name", x.name)
                                .replace(/@url/g, x.url)
                                .replace("@status", x.status)
                                .replace("@method", x.method)
                                .replace("@elapse", x.elapse);

                        item = doReplace(item, "@data", x.data);
                        item = doReplace(item, "@params", x.params);
                        item = doReplace(item, "@response", x.response);

                        item = x.sucess ? item.replace("@success-class", "success").replace("@success-text", "成功")
                                : item.replace("@success-class", "fail").replace("@success-text", "失败");

                        output += item;
                });
        });

        FILE.write(`./output/123.md`, FILE.read("./templates/style.html") + output);
}

/**
 * 
 * @param {String} item 
 * @param {String} pattern 
 * @param {any} data 
 */
function doReplace(item, pattern, data) {
        return data == undefined || Object.keys(data).length == 0 ?
                item.replace(pattern, "--")
                : item.replace(pattern, makeJson(data).replace(/\n/g, "</br>"));
}

/**
 * 
 * @param {any} data 
 */
function makeJson(data) {
        return `<div class="code">${JSON.stringify(data, null, "  ")}</div>`;
}

/*---------------------------------------------------------------------main-----------------------------------------------------------------------------*/
main();

