/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-25 09:09:48
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-25 14:46:51
 */
const { DownLoadError } = require("./errors")
const { DownloadResult } = require("./downloadResult")
const axios = require('axios');
const { OBJECT } = require("./../libs/utils");
class Downloader {
        constructor(config) {
                this.config = config;
        }
        async  download(url) {
                let start = new Date();
                let config = OBJECT.clone(this.config);
                config.url = url;
                try {
                        let resp = await axios.default.get(this.config)
                        let now = new Date();
                        return new DownloadResult(resp.data,
                                now.getTime() - start.getTime(),
                                resp.status);
                } catch (error) {
                        throw new DownLoadError(config, 5);
                }
        }
}