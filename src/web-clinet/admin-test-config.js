/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-20 15:27:16
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 11:25:52
 */
exports.config = {
        defaultConfig: {
                group: "user template",
                baseURL: "http://localhost:6024",
                method: "get",
                timeout: 10 * 1000,
                responseEncoding: 'utf8',
                assert: (data) => data.code == "100",
        },
        groups: [
                {
                        name: "合同",
                        baseUrl: "/contract",
                        items: [{
                                name: "1.1.1  合同管理 查询 <br> /contract",
                                params: {
                                        userRealName: "",
                                        userPhoneNo: "",
                                        userEmail: "",
                                        userIdCard: "",
                                        contractTitle: "",
                                        jzqContractNo: "",
                                        contractType: 1,
                                        contractState: 0,
                                        pageSize: 1,
                                        pageIndex: 1,
                                        startTime: null,
                                        endTime: null,
                                }
                        },
                        {
                                name: "1.1.2  查看指定合同的签署信息 <br> /contract/{id}",
                                url: "/1255",
                        },
                        {
                                name: "1.2.1 签约合同（contract_sign）做高级查询分页操作（列表查询）<br> /contract/sign",
                                url: "/sign",
                                params: {
                                        company: "",
                                        realName: "",
                                        mobile: "",
                                        email: "",
                                        signStatus: 0,
                                        needPay: 0,
                                        payStatus: 4,
                                        subjectType: 1,
                                        pageSize: 1,
                                        pageIndex: 1,
                                        startTime: null,
                                        endTimeTime: null
                                }
                        }]
                },
                {
                        name: "用户",
                        baseUrl: "/user",
                        items: [{
                                name: "2.1.1 用户账号 <by> /user/account",
                                url: "/account",
                                params: {
                                        phoneNo: "",
                                        email: "",
                                        lastLoginIp: "",
                                        verifyState: 0,
                                        pageIndex: 1,
                                        pageSize: 1,
                                        startTime: null,
                                        endTime: null
                                }
                        },
                        {
                                name: "2.2.1.2 xxxx <br> /user/contact",
                                url: "/real/79",
                        },
                        {
                                name: "2.2.2 用户联系人 <br> /user/contact",
                                url: "/contact",
                                params: {
                                        //  contactName:"",
                                        //  contactPhone: "",
                                        //  contactEmail:"",
                                        userId: 77,
                                        pageSize: 1,
                                        pageIndex: 1,
                                }

                        }, {
                                name: "2.1.2 用户实名 <br> /user/real",
                                url: "/real",
                                params: {
                                        // realName: "",
                                        // idCardNo: "",
                                        // phone: "",
                                        // email: "",
                                        // pageSize: 1,
                                        // pageIndex: 1,
                                        // startTime: null,
                                        // endTime: null
                                }
                        }, {
                                name: "2.2.1 用户企业 <br> /user/company",
                                url: "/company",
                                params: {
                                        userRealName: "",
                                        userPhoneNo: "",
                                        userEmail: "",
                                        userIdCardNo: "",
                                        companyName: "",
                                        legalPerson: "",
                                        licenceNo: "",
                                        organizationType: 0,
                                        identificationType: 0,
                                        verifyState: 0,
                                        pageIndex: 1,
                                        pageSize: 1,
                                        startTime: null,
                                        endTime: null,
                                }
                        }]

                }
        ]

};