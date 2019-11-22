/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-20 15:27:16
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-22 09:55:16
 */
exports.config = {
        defaultConfig: {
                group: "user template",
                baseURL: "http://localhost:1024/template",
                headers: {

                },
                method: "get",
                timeout: 10 * 1000,
                responseEncoding: 'utf8',
                assert: (data) => data.code=="100",
        },
        items: [{
                name: "updateContractName",
                url: "/1/8/contractName",
                method: "put",
                data: {

                },
                params: {
                        contractName: "new contract"
                },
        },
        {
                name: "getById",
                url: "/1/3/",
                method: "get",
                data: {

                },
                params: {
                },
        },
        {
                name: "getByUser",
                url: "/1",
                method: "get",
                data: {

                },
                params: {
                        pageSize: 1,
                        pageIndex: 1
                },
        }]
};