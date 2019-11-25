/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-20 15:27:16
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-25 19:50:16
 */
exports.config = {
        defaultConfig: {
                group: "user template",
                baseURL: "http://localhost:1024",
                headers: {

                },
                method: "get",
                timeout: 10 * 1000,
                responseEncoding: 'utf8',
                assert: (data) => data.code == "100",
        },
        groups: [
                {
                        baseUrl: "/compony",
                        group:"2. 企业",
                        items: [{
                                name: "2.1.添加企业 ",
                                url: "/company",
                                method: "post",
                                data: {

                                },
                        },
                        {
                                name: "2.2 修改企业",
                                url: "/company/{companyId}",
                                method: "put",
                        },
                        {
                                name: "2.3 删除企业",
                                url: "/5",
                                method: "put",
                                data: {
                                        contractName: "测试模板1",// 合同名称
                                        contractFile: "456.pdf", // 合同pdf文件地址
                                        contractType: 7 // 合同类型
                                },

                        },
                        {
                                name: "2.4 获取用户企业信息列表",
                                url: "",
                                method: "get",
                                params: {
                                        pageSize: 1,
                                        pageIndex: 25
                                },

                        },
                        {
                                name: "2.5.获取用户企业详情",
                                url: "/2",
                                method: "delete",
                        },
                        {
                                name: "2.6.修改用户企业信息",
                                url: "/2",
                                method: "delete",
                        },
                        {
                                name: "2.7.实名认证: 调用君子签接口",
                                url: "/2",
                                method: "delete",
                        },

                        ]
                }
                ,
                {
                        baseUrl: "/contract",
                        group:"3. 合同",
                        items: [{
                                name: "3.1 上传合同 ",
                                url: "/company",
                                method: "post",
                                data: {

                                },
                        },
                        {
                                name: "3.2.发起签约",
                                url: "/contract/sign/{contractId}",
                                method: "put",
                        },
                        {
                                name: "3.3.签约: 校验签约方和账户是否相同,检查是否需要付费,调用支付宝接口活体认证,提交君子签接口",
                                url: "/contract/sign/junzq/{contractId}",
                                method: "post",
                                data: {

                                },
                        },
                        {
                                name: "3.4.设置合同印章位置",
                                url: "/contract/sign/seal/{contractId}",
                                method: "put",
                        },
                        {
                                name: "3.5.获取合同列表 ",
                                url: "/contract/{contractId}",
                                method: "post",
                                data: {

                                },
                        },
                        {
                                name: "3.6.获取合同详情",
                                url: "/contract/sign/junzq/{contractId}",
                                method: "put",
                        },
                        {
                                name: "3.7.查看合同内容 ",
                                url: "/company",
                                method: "post",
                                data: {

                                },
                        },
                        {
                                name: "3.8.根据url参数获取签约路径",
                                url: "/contract/raw/{contractId}",
                                method: "put",
                        },
                        ]
                }
                ,
                {
                        baseUrl: "/compony",
                        group:"4 钱包",
                        items: [{
                                name: "4.1 查询钱包余额 ",
                                url: "/company",
                                method: "post",
                                data: {

                                },
                        },
                        {
                                name: "4.2 查询购买记录",
                                url: "/company/{companyId}",
                                method: "put",
                        },
                        {
                                name: "4.3 查询消费记录",
                                url: "/5",
                                method: "put",
                                data: {
                                        contractName: "测试模板1",// 合同名称
                                        contractFile: "456.pdf", // 合同pdf文件地址
                                        contractType: 7 // 合同类型
                                },

                        },

                        ]
                }
                ,
                {
                        baseUrl: "/meal",
                        group:"5 套餐",
                        items: [{
                                name: "5.1 获取套餐列表 ",
                                method: "get",
                                data: {

                                },
                        },
                        ]
                }
                ,
                {
                        baseUrl: "/sysTemplate",

                        items: [{
                                name: "6.3 新增模板 ",
                                url: "",
                                method: "post",
                                data: {
                                        contractName: "测试模板",
                                        contractFile: "123.pdf",
                                        contractType: 1

                                },
                        },
                        {
                                name: "6.6 查询模板详情/{模板id}",
                                url: "/5",
                                method: "get",
                        },
                        {
                                name: "6.4 更新模板/{模板id}",
                                url: "/5",
                                method: "put",
                                data: {
                                        contractName: "测试模板1",// 合同名称
                                        contractFile: "456.pdf", // 合同pdf文件地址
                                        contractType: 7 // 合同类型
                                },

                        },
                        {
                                name: "6.1 查询系统模板分页数据",
                                url: "",
                                method: "get",
                                params: {
                                        pageSize: 1,
                                        pageIndex: 25
                                },

                        },
                        {
                                name: "6.5 删除模板/{模板id}",
                                url: "/2",
                                method: "delete",
                        },

                        ]
                }
                ,
                {
                        baseUrl: "/contact",
                        group:"7 联系人",
                        items: [{
                                name: "7.1.获取用户联系人列表 ",
                                method: "get",
                                data: {

                                },
                        },
                        {
                                name: "7.2.添加用户联系人 ",
                                method: "post",
                                data: {

                                },
                        },
                        {
                                name: "7.3.修改联系人 ",
                                url:"contact/{contactId}",
                                method: "put",
                                data: {

                                },
                        },

                        {
                                name: "7.4.删除用户联系人 ",
                                url:"contact/{contactId}",
                                method: "get",
                                data: {

                                },
                        },
                        ]
                }
                ,
                {
                        baseUrl: "/seal",
                        group:"8 签章",
                        items: [{
                                name: "8.1.获取印章列表 ",
                                method: "get",
                                data: {

                                },
                        },
                        {
                                name: "8.2.上传印章 ",
                                method: "post",
                                data: {

                                },
                        },
                        {
                                name: "8.3.创建手写签名 ",
                                url:"contact/{contactId}",
                                method: "put",
                                data: {

                                },
                        },
                        ]
                }
                ,
                {
                        baseUrl: "/seal",
                        group:"9 签章",
                        items: [{
                                name: "8.1.获取印章列表 ",
                                method: "get",
                                data: {

                                },
                        },
                        {
                                name: "8.2.上传印章 ",
                                method: "post",
                                data: {

                                },
                        },
                        {
                                name: "8.3.创建手写签名 ",
                                url:"contact/{contactId}",
                                method: "put",
                                data: {

                                },
                        },
                        ]
                }
                ,

        ]

};