/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-20 15:27:16
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-29 10:23:40
 */
exports.config = {
        defaultConfig: {
                group: "user template",
                baseURL: "http://localhost:8081/crm/api",
                headers: {
 "Authorization":"eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NzQ5OTMyNTQsImlzcyI6ImlzcyIsInN1YiI6IjM2IiwiZXhwIjoxNTc1NzM0NTE5fQ.4aM9RBH9qHZcjfxcbXDAfNzPWRB6bFKs48Wm6kaDv6ZoPgaImI3bKNNOfBCjbml1QIzOArsSV-EO0vvq3Xx_Mw"
                },
                method: "get",
                timeout: 10 * 1000,
                responseEncoding: 'utf8',
                assert: (data) => data.code == "100",
        },
        groups: [
                //--------------------------2 汇报---------------------
                {
                        baseUrl: "/report",
                        name: "2 企业",
                        items: [{
                                name: "2.1 添加企业 <br> /list",
                                method: "get",
                                params:{
                                        
                                }
                        },
                        {
                                name: "2.2 修改企业 <br>/company/{componyId}",
                                url: "/107",
                                method: "put",
                                data: {
                                        userId: 1,
                                        componyName: "microsoft",
                                        email: "123@ms.com",
                                        organizationType: 1,
                                        identificationType: 1,
                                        licenseNo: "5665",
                                        legalPerson: "someone",
                                        contactPhone: "13888888888",
                                        idCard: "5656565656",
                                        idCardPicFront: "front.png",
                                        idCardPicBack: "back.png",
                                        licensePicFront: "licence.png",
                                        authorizedPerson: " big guy",
                                        authorizedPhoneNo: "911",
                                        authorizedIdNo: "666",
                                        authorizeFile: "123.pdf"
                                },
                        },
                        {
                                name: "2.3 删除企业 <br>/company/{componyId}",
                                url: "/108",
                                method: "delete",
                        },
                        {
                                name: "2.4 获取用户企业信息列表 <br>/company",
                                method: "get",
                                params: {
                                        userId: 567,
                                        pageSize: 1,
                                        pageIndex: 25
                                },

                        },
                        {
                                name: "2.5 获取用户企业详情 <br>/company/{componyId}",
                                url: "/107",
                                method: "get",
                        },
                        {
                                name: "2.6 企业实名认证(君子签) <br>/company/junzq/certifi/{companyId}",
                                url: "/junzq/certifi/107",
                                method: "post",
                        },
                        {
                                name: "2.7 修改企业实名认证(君子签) <br>/company/junzq/certifi/{companyId}",
                                url: "/junzq/certifi/107",
                                method: "put",
                        },

                        ]
                }
                ,
                //------------------------------------------3 合同----------------------------
                {
                        baseUrl: "/contract",
                        name: "3 合同",
                        items: [{
                                name: "3.1 添加合同  <br>/contract",
                                method: "post",
                                data: {
                                        id: 1,
                                        userId: 1,
                                        contractType: 1,
                                        contractTitle: 1,
                                        rawContractFile: 1,
                                        rawContractHash: "789",
                                        signExpireTime: "2019-11-19T08:00:15.000+0000",
                                        contractState: 1,
                                        signContractFile: "12.pdf",
                                        signContractHash: "12323",
                                        effectTime: "2019-12-19T08:00:15.000+0000",
                                        expireTime: "2019-12-19T08:00:15.000+0000",
                                        validPeriod: 6,
                                        contractPrice: 6.6,
                                        configUrl: "123.net",
                                        configShortUrl: "789.net",
                                        jzqContractNo: "4565",
                                        jzqContractFile: "8989.pdf",

                                },
                        },
                        {
                                name: "3.2 获取合同  <br>/contract约",
                                url: "/contract/sign/{contractId}",
                                method: "get",
                                params: {
                                        pageIndex: 1,
                                        pageSize: 1
                                }
                        },
                        {
                                name: "3.3 获取合同详情 <br>/contract/{contractId}",
                                url: "/1",
                                method: "get",
                        },
                        {
                                name: "3.4 获取原始合同文件 <br>/contract/raw/{contractId}",
                                url: "/raw/1",
                                method: "get",
                        },
                        {
                                name: "3.5 获取用户合同总数 <br>/contract/sum",
                                url: "/sum",
                                method: "get",
                                params: {
                                        userId: 1
                                },
                        },
                        {
                                name: "3.6 获取用户签约列表 <br>/contract/sign",
                                url: "/sign",
                                method: "get",
                                params: {
                                        userId: 1
                                },
                        },
                        {
                                name: "3.7.查看合同内容 ",
                                url: "/company",
                                method: "get",
                                params: {
                                        userId: 1
                                },
                        },
                        {
                                name: "3.8 发起签约 <br>/contract/sign/{contractId}",
                                url: "/sign/1",
                                method: "post",
                                data: {
                                        id: 1,
                                        userId: 1,
                                        contractType: 1,
                                        contractTitle: 1,
                                        rawContractFile: 1,
                                        rawContractHash: "789",
                                        signExpireTime: "2019-11-17T08:00:15.000+0000",
                                        contractState: 1,
                                        signContractFile: "12.pdf",
                                        signContractHash: "12323",
                                        effectTime: "2019-12-19T08:00:15.000+0000",
                                        expireTime: "2019-12-19T08:00:15.000+0000",
                                        validPeriod: 6,
                                        contractPrice: 6.6,
                                        configUrl: "123.net",
                                        configShortUrl: "789.net",
                                        jzqContractNo: "4565",
                                        jzqContractFile: "8989.pdf",
                                }
                        },
                        {
                                name: "3.8 设置签约印章位置 <br>/contract/sign/seal/{contractId}",
                                url: "/sign/seal/1",
                                method: "post",
                                data: {
                                        signPosition: "121"
                                }
                        },
                        {
                                name: "3.9 提交签约(君子签) <br>/contract/sign/junzq/{contractId}",
                                url: "/sign/junzq/1",
                                method: "post",
                        },
                        {
                                name: "3.10 合同查看(君子签) <br>/contract/sign/junzq/url",
                                url: "/sign/junzq/url",
                                method: "post",
                                data: {
                                        contractId:1,
                                        fullName:"contract1",
                                        identityCard:"123456789",
                                        identityType:1
                                }
                        },
                        {
                                name: "3.11 生成签约链接(君子签) <br>/contract/sign/junzq/{contractId}",
                                url: "/sign/junzq/1",
                                method: "get",
                        },
                        {
                                name: "3.12 PC端 我收到的 合同列表 <br>/contract/merchant/received",
                                url: "/merchant/received",
                                method: "get",
                                params: {
                                        userId:1,
                                        startTime:"2019-11-12T08:00:15.000+0000",
                                        endTime:"2019-11-19T08:00:15.000+0000",
                                        contractTitle:"test",
                                        formatName:"unknow",
                                        signStatus:1,
                                        pageIndex:1,
                                        pageSize:1
                                }
                        },
                        {
                                name: "3.12 PC端 我发起的 端合同列表 <br>/contract/contract/merchant/initiate",
                                url: "/merchant/initiate",
                                method: "get",
                                params: {
                                        userId:1,
                                        startTime:"2019-11-29T08:00:15.000+0000",
                                        endTime:"2019-11-30T08:00:15.000+0000",
                                        contractTitle:"test",
                                        formatName:"unknow",
                                        signStatus:1,
                                        pageIndex:1,
                                        pageSize:1
                                }
                        },
                        ]
                }
                ,
                //-------------------------------------------4 钱包--------------------------
                {
                        baseUrl: "/wallet",
                        name: "4 钱包",
                        items: [{
                                name: "4.1 查询钱包余额 <br>/wallet ",
                                method: "get",
                                params: {
                                        userId: 1
                                },
                        },
                        {
                                name: "4.2 查询购买记录 <br>/wallet/purchase",
                                url: "/purchase",
                                method: "get",
                                params: {
                                        userId: 1,
                                        pageIndex: 1,
                                        pageSize: 1,
                                }
                        },
                        {
                                name: "4.3 查询消费记录 <br>/wallet/consume",
                                url: "/consume",
                                method: "get",
                                params: {
                                        userId: 1,
                                        pageIndex: 1,
                                        pageSize: 1,
                                },
                        },
                        {
                                name: "4.4 扣取合同份数 <br>/wallet/consume",
                                url: "/consume",
                                method: "post",
                                data: {
                                        userId: 1,
                                        contractId: 1
                                },
                        },
                        {
                                name: "4.5 获取购买状态 <br>/wallet/purchase/status",
                                url: "/purchase/status",
                                method: "get",
                                params: {
                                        purchaseId: "1",
                                },
                        },

                        ]
                }
                ,
                //-------------------------------------------5 套餐--------------------------
                {
                        baseUrl: "/meal",
                        name: "5 套餐",
                        items: [{
                                name: "5.1 获取套餐列表 <br>/meal",
                                method: "get",
                                params: {
                                        pageIndex: 1,
                                        pageSize: 1,
                                        mealType:2

                                }
                        },
                        {
                                name: "5.2 获取套餐详情 <br>/meal/{套餐id}",
                                method: "get",
                                url: "/2",
                        },
                        ]
                }
                ,
                //------------------------------------------6 模板--------------------------
                {
                        baseUrl: "/sysTemplate",
                        name: "6 模板",
                        items: [{
                                name: "6.3 新增模板 <br>/sysTemplate",
                                url: "",
                                method: "post",
                                data: {
                                        contractName: "测试模板",
                                        contractFile: "123.pdf",
                                        contractType: 1

                                },
                        },
                        {
                                name: "6.6 查询模板详情 <br>/sysTemplate/{模板id}",
                                url: "/5",
                                method: "get",
                        },
                        {
                                name: "6.4 更新模板 <br>/sysTemplate/{模板id}",
                                url: "/5",
                                method: "put",
                                data: {
                                        contractName: "测试模板1",// 合同名称
                                        contractFile: "456.pdf", // 合同pdf文件地址
                                        contractType: 7 // 合同类型
                                },

                        },
                        {
                                name: "6.1 查询系统模板分页数据 <br>/sysTemplate",
                                url: "",
                                method: "get",
                                params: {
                                        pageSize: 1,
                                        pageIndex: 1
                                },
                        },
                        {
                                name: "6.5 删除模板/{模板id} <br>/sysTemplate/{模板id}",
                                url: "/2",
                                method: "delete",
                        },

                        ]
                }
                ,
                //-----------------------------------------7 联系人--------------------------
                {
                        baseUrl: "/contact",
                        name: "7 联系人",
                        items: [{
                                name: "7.1 获取联系人列表 <br>/contact ",
                                method: "get",
                                params: {
                                        pageSize: 1,
                                        pageIndex: 1,
                                        userId:3
                                },
                        },
                        {
                                name: "7.2 添加用户联系人 <br>/contact",
                                method: "post",
                                data: {
                                         userId:"9",
                                         contactName:"xxxx",
                                         contactPhone:"1555555555",
                                         contactEmail:"45656565@sss.com"
                                },
                        },
                        {
                                name: "7.3 修改联系人 <br>contact/{contactId} ",
                                url: "/3",
                                method: "put",
                                data: {
                                        contactName:"yyyyy",
                                        contactPhone:"1777777777",
                                        contactEmail:"45656565@sss.com"
                                },
                        },

                        {
                                name: "7.4 删除用户联系人 contact/{contactId}",
                                url: "/1",
                                method: "delete",
                        },
                        ]
                }
                ,
                //--------------------------------------------8 签章--------------------------
                {
                        baseUrl: "/seal",
                        name: "8 签章",
                        items: [{
                                name: "8.1 获取印章列表 <br>/seal ",
                                method: "get",
                                params: {
                                        pageSize: 1,
                                        pageIndex: 1
                                },
                        },
                        {
                                name: "8.2 新增印章 <br>/seal",
                                method: "post",
                                data: {
                                        belongType: 1,
                                        belongId: 1,
                                        signPic: "123.png",
                                        signName: "xxx compony"
                                },
                        },
                        {
                                name: "8.3 删除印章 <br>/seal/{sealId}",
                                url: "/2",
                                method: "delete",
                        },
                        {
                                name: "8.4 更新印章 <br>/seal/{sealId}",
                                url: "/3",
                                method: "put",
                                data: {
                                        belongId: 7,
                                        signPic: "789.png",
                                        signName: "ms"
                                }
                        },
                        ]
                }
                ,
                //------------------------------------------9 用户模板----------------------
                {
                        baseUrl: "/userTemplate",
                        name: "9 用户模板",
                        items: [{
                                name: "9.1 新增模板 <br>/userTemplate",
                                method: "post",
                                data: {
                                        contractName: "测试模板1",// 合同名称
                                        contractFile: "abc.pdf", // 合同pdf文件地址
                                        belongType: 1, // 合同类型
                                        belongId: 13
                                },
                        },
                        {
                                name: "9.2 删除用户模板 <br>/userTemplate",
                                url: "/3",
                                method: "delete",
                        },
                        {
                                name: "9.3 更新模板 <br>/userTemplate",
                                url: "/4",
                                method: "put",
                                data: {
                                        contractName: "测试模板2",// 合同名称
                                        contractFile: "456.pdf", // 合同pdf文件地址
                                        belongType: 1, // 合同类型
                                        belongId: 13
                                },
                        },
                        {
                                name: "9.4 查询系统模板分页数据 <br>/userTemplate",
                                method: "get",
                                params: {
                                        pageSize: 1,
                                        pageIndex: 25
                                },

                        },
                        ]
                }
                ,
        ]

};