/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-12 15:09:07
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-12 15:56:37
 */
const { RANDOM } = require("./../../libs/random");
const { OBJECT } = require("./../../libs/utils");
const { STR } = require("./../../libs/str");


const DEFAULT_CANDIDATES = {
        String: {
                company: {
                        match: name => STR.equalAny(name.toLowerCase(), ["company", "companyname"]),
                        candidates: [
                                `"microsoft"`,
                                `"oracle"`,
                                `"google"`,
                                `"tencent"`,
                                `"github"`,
                                `"ebay"`
                        ]
                },
                image: {
                        match: name => STR.includesAny(name.toLowerCase(), ["image", "img"]),
                        candidates: [
                                `"123.png"`,
                                `"456.jpg"`,
                                `"google.bmp"`,
                                `"tencent.gif"`,
                                `"github.png"`,
                                `"ebay.jpg"`
                        ]
                },
                file: {
                        match: name => STR.includesAny(name.toLowerCase(), ["path", "file"]),
                        candidates: [
                                `"c://123.png"`,
                                `"f://456.jpg"`,
                                `"g://google.bmp"`,
                                `"p://tencent.gif"`,
                                `"k://github.png"`,
                                `"ftp://ebay.jpg"`
                        ]
                },
                userName: {
                        match: name => STR.includesAny(name.toLowerCase(), ["user", "admin", "operator", "employee", "username"]),
                        candidates: [
                                `"li shi yu"`,
                                `"wang wei"`,
                                `"liu ming"`,
                                `"li hua"`,
                                `"johne"`,
                                `"deep"`,
                                `"newman"`
                        ]
                },
                anyName: {
                        match: name => STR.endsWithAny(name.toLowerCase(), ["name"]),
                        candidates: [
                                `"jasmine"`,
                                `"balsam"`,
                                `"narcissus"`,
                                `"lily"`,
                                `"calla"`,
                                `"carnation"`,
                                `"rose"`
                        ]
                },
                phone: {
                        match: name => STR.includesAny(name.toLowerCase(), ["phone", "mobile"]),
                        candidates: [
                                `"13882475922"`,
                                `"18009049263"`,
                                `"15878956321"`,
                                `"18102345622"`,
                                `"15922236556"`,
                                `"18455624611"`
                        ]
                },
                email: {
                        match: name => STR.includesAny(name.toLowerCase(), ["email"]),
                        candidates: [
                                `"13882475922@163.com"`,
                                `"18009049263@gmial.com"`,
                                `"15878956321@qq.com"`,
                                `"18102345622@ms.com"`,
                                `"15922236556@182.com"`,
                                `"18455624611@10001.com"`
                        ]
                },
                telephone: {
                        match: name => STR.includesAny(name.toLowerCase(), ["tele"]),
                        candidates: [
                                `"0831-3447882"`,
                                `"0851-3437852"`,
                                `"021-3447842"`,
                                `"027-84457882"`,
                                `"0531-5657882"`,
                                `"023-18102666"`
                        ]
                },

                url: {
                        match: name => STR.includesAny(name.toLowerCase(), ["url", "web", "domain"]),
                        candidates: [
                                `"http://www.google.com"`,
                                `"http://www.bbc.co.uk"`,
                                `"http://www.qq.com"`,
                                `"https://www.baidu.com"`,
                                `"http://www.163.com"`,
                                `"http://www.msdn.com"`
                        ]
                },
                ip: {
                        match: name => STR.endsWithAny(name.toLowerCase(), ["ip", "gateway"]),
                        candidates: [
                                `"192.168.0.2"`,
                                `"192.168.0.1"`,
                                `"192.168.0.3"`,
                                `"192.168.0.4"`,
                                `"192.168.0.9"`,
                                `"192.168.0.56"`
                        ]
                },
                account: {
                        match: name => STR.endsWithAny(name.toLowerCase(), ["account"]),
                        candidates: [
                                `"admin"`,
                                `""`,
                                `"test"`,
                                `"superAdmin"`,
                                `"guest"`,
                                `"guest2"`
                        ]
                },
                password: {
                        match: name => STR.endsWithAny(name.toLowerCase(), ["password"]),
                        candidates: [
                                `"123456"`,
                                `"1qaz2wsx"`,
                                `"admin"`,
                                `"122189"`,
                                `"administrator"`,
                                `"password"`
                        ]
                },

                address: {
                        match: name => STR.includesAny(name.toLowerCase(), ["addr", "address"]),
                        candidates: [
                                `"newyork,us"`,
                                `""`,
                                `"west london,uk"`,
                                `"tokyo"`,
                                `"shanghai"`,
                                `"chengdu"`
                        ]
                },
                time: {
                        match: name => STR.includesAny(name.toLowerCase(), ["time", "date"]),
                        candidates: [
                                `"2008-12-06"`,
                                `"2019-02-16"`
                        ]
                },
                description: {
                        match: name => STR.includesAny(name.toLowerCase(), ["description", "msg", "remark"]),
                        candidates: [
                                `"this is description mock data segment"`,
                                `"mock generator, generate lots of data for testing"`,
                                `"jasmine code generator, generate every thing you need"`,
                                `"avoid annoy thing to do"`
                        ]
                },
                title: {
                        match: name => STR.endsWithAny(name.toLowerCase(), ["title"]),
                        candidates: [
                                `" twelve angry men"`,
                                `"ranger bull"`,
                                `"a silent lamb"`,
                                `" casino"`
                        ]
                },

                content: {
                        match: name => STR.endsWithAny(name.toLowerCase(), ["content", "text", "log", "detail"]),
                        candidates: [
                                `"this is content mock..."`,
                                `"there're three paris in the world,the most  famous one in france ,one in canada ,and last one in texas,us"`,
                                `"there are three waterloon bridges in the wrold too..."`,
                                `"you think when you leave chinatown you can get justice ,but every where is chinatown.... from a black movie"`,
                                `"every adult once ever been a child ,but few she or he can remember what it looks like at that time "`
                        ]
                },
                label: {
                        match: name => STR.endsWithAny(name.toLowerCase(), ["label", "text", "title"]),
                        candidates: [
                                `"title"`,
                                `"label"`,
                                `"name"`,
                                `"sex"`,
                                `"country"`,
                                `"city"`
                        ]
                },
                _default: {
                        match: name => true,
                        candidates: [
                                `"mock string"`,
                                `"mock string"`,
                                `"mock string"`
                        ]
                },
        },
        Integer: {
                count: {
                        match: name => STR.includesAny(name.toLowerCase(), ["count", "amount", "sum"]),
                        candidates: [12, 0, 1984, 899, 56589, 6142]
                },

                id: {
                        match: name => STR.endsWithAny(name.toLowerCase(), ["id"]),
                        candidates: [1, 6, 7, 2, 8, 15, 35, 29]
                },
                booleanFlag: {
                        match: name => STR.startsWithAny(
                                name.toLowerCase(),
                                ["need", "should", "can", "allow", "is", "has", "support", "permit", "forbit"]
                        ) || name.toLowerCase() == "status",
                        candidates: [0, 1]
                },
                enableStatus: {
                        match: name => STR.endsWithAny(name.toLowerCase(), ["enablestatus"]) || name.toLowerCase() == "status",
                        candidates: [0, 1]
                },

                _default: {
                        match: name => true,
                        candidates: [0, 90, 20, 30],
                }
        },
        Date: {
                time: {
                        match: x => STR.includesAny(x.toLowerCase(), ["time", "date"]),
                        candidates: ["new Date()"]
                },
                _default: {
                        match: x => true,
                        candidates: ["new Date()"]
                }
        },
        Float: {
                count: {
                        match: x => STR.includesAny(x.toLowerCase(), ["count", "amount", "sum"]),
                        candidates: ["12.56f", "0.5f", "1984.36f", "899.569f", "6589f", "6142f"]
                },
                rate: {
                        match: x => STR.includesAny(x.toLowerCase(), ["rate", "weight"]),
                        candidates: ["0.98f", "0.5f", "0.69f", "0.78f", "0.56f", "0.85f"]
                },
                profit: {
                        match: x => STR.includesAny(x.toLowerCase(), ["profit", "price"]),
                        candidates: ["34.98f", "555.5f", "989.69f", "78.78f", "89.56f", "56.85f"]
                },
                _default: {
                        match: x => true,
                        candidates: ["0f", "90f", "20f", "30f"],
                }

        },


}


class MockConfig {
        constructor () {
                this.range = {
                        min: 0,
                        max: 9999,
                },

                        this.collections = [];
        }
}

class MockConfigBuilder {
        range(key, min, max) {

        }

        startsWith(key, start) {

        }

        endsWidth(key, end) {

        }

        startsAndEndsWith(key, start, end) {

        }

        collection(key, collection) {

        }

        setProperty(key, value) {

        }
}


const CANDIDATE_PICKER = (name, collection) => {
        for (const key in collection) {
                if (collection[key].match(name)) {
                        let index = RANDOM.nextVal(0, collection[key].candidates.length);
                        let result = collection[key].candidates[index];
                        return result;
                }
        }
}

class MockGenerator {
        constructor () {
                this._candidates = DEFAULT_CANDIDATES;
        }

        useMockConfig(config) {
                Object.keys(config).forEach(x => {
                        if (!this._candidates[x]) {
                                this._candidates[x] = config[x];
                        } else {
                                OBJECT.extend(this._candidates[x], config[x]);
                        }
                });
        }

        disableCandidates(config) {
                Object.keys(config).forEach(x => {
                        if (!this._candidates[x]) {
                                return;
                        } else {
                                for (const key in config[x]) {
                                        if (this._candidates[x][key]) {
                                                delete this._candidates[x][key]
                                        }
                                }
                        }

                });
        }

        /**
         * Get random data of type 
         * 
         * @param {String} name 
         * @param {String} type  |String|Date|Integer|Float
         */
        getMockData(name, type) {
                if (!type || !this._candidates[type])
                        throw new Error(`candidate(${name}) type '${type}' is null or no candidate to generate`);

                return CANDIDATE_PICKER(name, this._candidates[type]);
        }
}

exports.MockGenerator = MockGenerator;
