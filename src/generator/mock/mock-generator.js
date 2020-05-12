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
                name: {
                        match: x => STR.includesAny(x.toLowerCase(), ["user", "admin", "operator", "employee", "username"]),
                        candidates: ["li shi yu", "wang wei", "liu ming", "li hua", "deep", "newman"]
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
                        match: x => STR.includesAny(x.toLowerCase(), ["ip", "gateway"]),
                        candidates: ["http://www.google.com", "http://www.bbc.co.uk", "http://www.qq.com", "https://www.baidu.com", "http://www.163.com", "http://www.msdn.com"]
                },
                address: {
                        match: x => STR.includesAny(x.toLowerCase(), ["addr", "address"]),
                        candidates: ["", "", "http://www.qq.com", "https://www.baidu.com", "http://www.163.com", "http://www.msdn.com"]
                },
                time: {
                        match: x => STR.includesAny(x.toLowerCase(), ["time", "date"]),
                        candidates: [new Date().toLocaleString(), "2008-12-06", "2019-02-16"]
                },
                description:{
                        match: x => STR.includesAny(x.toLowerCase(), ["descrp", "remark","detail"]),
                        candidates: ["this is descripion mock data segment",
                                     "mock generator, generate lots of data for testing",
                                      "jasmine code generator, generate every thing you need",
                                       "avoid anoy thing to do"]
                },
                _default: {
                        match: x => true,
                        candidates: ["mock data1", "mock data2", "mock data3"]
                },
        },
        Integer: {
                count: {
                        match: x => STR.includesAny(x.toLowerCase(), ["count", "amount", "sum"]),
                        candidates: [12, 0, 1984, 899, 56589, 6142]
                },

                _default: {
                        match: x => true,
                        candidates: [0, 90, 20, 30],
                }
        },
        Date: {
                time: {
                        match: x => STR.includesAny(x.toLowerCase(), ["time", "date"]),
                        candidates: [new Date().toLocaleString(), "2008-12-06", "2019-02-16"]
                },
                _default: {
                        match: x => true,
                        candidates: [new Date().toLocaleString(), "2008-12-06", "2019-02-16"]
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


class MockConfig{
        constructor(){
                this.range={
                        min:0,
                        max:9999,
                },

                this.collections=[];
        }
}

class MockConfigBuilder{
        range(key,min,max){

        }

        startsWith(key,start){

        }

        endsWidth(key, end){

        }

        startsAndEndsWith(key,start,end){

        }
        
        collection(key,collection){

        }

        setProperty(key,value){

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

        getMockData(name, type) {
                if (!type||!this._candidates[type])
                        throw new Error(`candidate(${name}) type '${type}' is null or no candidate to generate`);

                return CANDIDATE_PICKER(name, this._candidates[type]);
        }
}

exports.MockGenerator = MockGenerator;
