/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-27 11:03:58
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-01 17:35:42
 */
const axios = require('axios');
const { FILE } = require('./../libs/file');
const cheerio = require('cheerio');
const cheerioTableparser = require('cheerio-tableparser');
var iconv = require('iconv-lite');
const doRequest = axios.default.create({
        responseType: 'arraybuffer',
        headers: { 'user-agent': "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36" }
});

/**
 * 
 * @param {String} file  File to save
 * @param {String} url   Page url
 * @param {String} select Table select pattern
 * @param {String} encoding  Default utf-8
 * @param {Map<String,(String) => String>} renders  Index: string => string
 */
function writeFromUrl(file, url, select, encoding = "utf-8", renders) {
        doRequest({ url: url, method: "get" })
                .then(resp => {
                        if (resp.data) {
                                let html = iconv.decode(resp.data, encoding)
                                        .replace("\r\n", "");

                                let converted = resolve(html,select);
                                writeFromJson(file, converted.headers, converted.items, renders);
                        }
                        console.log("completed!");
                })
                .catch(err => {
                        console.log(err);
                        console.log("failed!");
                });
}

/**
 * 
 * @param {String} file 
 * @param {String} select 
 * @param {*} renders 
 */
function writeFromFile(file,output,select,renders){
        let converted = resolve(FILE.read(file),select);
        writeFromJson(output, converted.headers, converted.items, renders);
}

/**
 * 
 * @param {String} html 
 * @returns {[[String]]}
 */
function resolve(html,select) {
        let $ = cheerio.load(html);
        cheerioTableparser($);
        let datas= $(select).parsetable(true, true, true);
        return convert(datas);
}

/**
 * 
 * @param {[[String]]} raw 
 * @returns {{headers:[],items:[]}}
 */
function convert(raw) {
        let headers = [];
        let items = [];
        for (let i = 0; i < raw[0].length - 1; i++)
                items.push([]);

        raw.forEach(group => {
                group.forEach((x, index) => {
                        if (index == 0) {
                                headers.push(x);
                        } else {
                                items[index - 1].push(x);
                        }
                })
        })

        return { headers, items };
}

/**
 * 
 * @param {String} file 
 * @param {String} headers 
 * @param {String} items 
 * @param {Map<String,(String) => String>} renders  Index: string => string
 */
function writeFromJson(file, headers, items, renders = {}) {
        console.log(headers.length);
        let output = "";
        let header = "|";
        let headerSuffix = "|";

        headers.forEach(x => {
                header += `${x}|`;
                headerSuffix += "---|";
        })

        output += header + "\r\n" + headerSuffix + "\r\n";

        items.forEach((x, index) => {
                let item = "|";
                x.forEach(y => {
                        item += typeof renders[index + ""] == "undefined"
                                ? y + "|" : renders[index + ""](y) + "|";
                });
                output += item + "\r\n";
        });

        FILE.write(file, output);
}

// ------------------------------------------------------------------------main-------------------------------------------------------------
writeFromFile("1.html","1.md","table");