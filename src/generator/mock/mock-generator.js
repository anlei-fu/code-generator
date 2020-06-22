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
                        match: x => STR.equalAny(x.toLowerCase(), ["company", "companyname"]),
                        candidates: ["microsoft", "oracle", "google", "tencent", "github", "ebay"]
                },
                image: {
                        match: x => STR.includesAny(x.toLowerCase(), ["image", "img"]),
                        candidates: ["123.png", "456.jpg", "google.bmp", "tencent.gif", "github.png", "ebay.jpg"]
                },
                file: {
                        match: x => STR.includesAny(x.toLowerCase(), ["path", "file"]),
                        candidates: ["c://123.png", "f://456.jpg", "g://google.bmp", "p://tencent.gif", "k://github.png", "ftp://ebay.jpg"]
                },
                userName: {
                        match: x => STR.includesAny(x.toLowerCase(), ["user", "admin", "operator", "employee", "username"]),
                        candidates: ["li shi yu", "wang wei", "liu ming", "li hua", "johne", "deep", "newman"]
                },
                anyName: {
                        match: x => STR.endsWithAny(x.toLowerCase(), ["name"]),
                        candidates: ["jasmine", "balsam", "narcissus", "lily", "calla", "carnation", "rose"]
                },
                phone: {
                        match: x => STR.includesAny(x.toLowerCase(), ["phone", "mobile"]),
                        candidates: ["13882475922", "18009049263", "15878956321", "18102345622", "15922236556", "18455624611"]
                },
                email: {
                        match: x => STR.includesAny(x.toLowerCase(), ["email"]),
                        candidates: ["13882475922@163.com", "18009049263@gmial.com", "15878956321@qq.com", "18102345622@ms.com", "15922236556@182.com", "18455624611@10001.com"]
                },
                telephone: {
                        match: x => STR.includesAny(x.toLowerCase(), ["tele"]),
                        candidates: ["0831-3447882", "0851-3437852", "021-3447842", "027-84457882", "0531-5657882", "023-18102666"]
                },

                url: {
                        match: x => STR.includesAny(x.toLowerCase(), ["url", "web", "domain"]),
                        candidates: ["http://www.google.com", "http://www.bbc.co.uk", "http://www.qq.com", "https://www.baidu.com", "http://www.163.com", "http://www.msdn.com"]
                },
                ip: {
                        match: x => STR.endsWithAny(x.toLowerCase(), ["ip", "gateway"]),
                        candidates: ["192.168.0.2", "192.168.0.1", "192.168.0.3", "192.168.0.4", "192.168.0.9", "192.168.0.56"]
                },
                account: {
                        match: x => STR.endsWithAny(x.toLowerCase(), ["account"]),
                        candidates: ["admin", "", "test", "superAdmin", "guest", "guest2"]
                },
                password: {
                        match: x => STR.endsWithAny(x.toLowerCase(), ["password"]),
                        candidates: ["123456", "1qaz2wsx", "admin", "122189", "administrator", "password"]
                },

                address: {
                        match: x => STR.includesAny(x.toLowerCase(), ["addr", "address"]),
                        candidates: ["newyork,us", "", "west london,uk", "tokyo", "shanghai", "chengdu"]
                },
                time: {
                        match: x => STR.includesAny(x.toLowerCase(), ["time", "date"]),
                        candidates: [new Date().toLocaleString(), "2008-12-06", "2019-02-16"]
                },
                description: {
                        match: x => STR.includesAny(x.toLowerCase(), ["description", "msg", "remark"]),
                        candidates: ["this is description mock data segment",
                                "mock generator, generate lots of data for testing",
                                "jasmine code generator, generate every thing you need",
                                "avoid annoy thing to do"]
                },
                title: {
                        match: x => STR.endsWithAny(x.toLowerCase(), ["title"]),
                        candidates: [
                                " twelve angry men",
                                "ranger bull",
                                "a silent lamb",
                                " casino"
                        ]
                },

                content: {
                        match: x => STR.endsWithAny(x.toLowerCase(), ["content", "text", "log", "detail"]),
                        candidates: [
                                "this is content mock...",
                                `there're three paris in the world,the most  famous one in france ,one in canada ,and last one in texas,us`,
                                "there are three waterloon bridges in the wrold too...",
                                "you think when you leave chinatown you can get justice ,but every where is chinatown.... from a black movie",
                                "every adult once ever been a child ,but few she or he can remember what it looks like at that time "
                        ]
                },
                label: {
                        match: x => STR.endsWithAny(x.toLowerCase(), ["label", "text", "title"]),
                        candidates: ["title", "label", "name", "sex", "country", "city"]
                },
                _default: {
                        match: x => true,
                        candidates: ["mock string", "mock string", "mock string"]
                },
        },
        Integer: {
                count: {
                        match: x => STR.includesAny(x.toLowerCase(), ["count", "amount", "sum"]),
                        candidates: [12, 0, 1984, 899, 56589, 6142]
                },

                id: {
                        match: x => STR.endsWithAny(x.toLowerCase(), ["id"]),
                        candidates: [1, 6, 7, 2, 8, 15, 35, 29]
                },
                booleanFlag: {
                        match: x => STR.startsWithAny(
                                x.toLowerCase(),
                                ["need", "should", "can", "allow", "is", "has", "support", "permit", "forbit"]
                        ) || x.toLowerCase() == "status",
                        candidates: [0, 1]
                },
                enableStatus: {
                        match: x => STR.endsWithAny(x.toLowerCase(), ["enablestatus"]) || x.toLowerCase() == "status",
                        candidates: [0, 1]
                },

                _default: {
                        match: x => true,
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
                        candidates: [12.56, 0.5, 1984.36, 899.569, 56589, 6142]
                },
                rate: {
                        match: x => STR.includesAny(x.toLowerCase(), ["rate", "weight"]),
                        candidates: [0.98, 0.5, 0.69, 0.78, 0.56, 0.85]
                },
                profit: {
                        match: x => STR.includesAny(x.toLowerCase(), ["profit", "price"]),
                        candidates: [34.98, 555.5, 989.69, 78.78, 89.56, 56.85]
                },
                _default: {
                        match: x => true,
                        candidates: [0, 90, 20, 30],
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

        useCandidates(config) {
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
