/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-12 15:09:07
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-12 15:56:37
 */
const { RANDOM } = require("./../libs/random")

class MockGeneratorFieldConfig {
        constructor(name, candidates) {
                this.name = name;
                this.candidates = candidates;
        }
}


const dedaultCandidates={
        "userName":[],
        "componyName":[],
        "status":[],
        "type":[],
        "remark":[],
        "description":[],
        "state":[],
        "email":[],
        "phone":[],
        "addr":[],
        "createTime":[],
        "editTime":[],
        "user":[],
        "operator":[],
        "file":[],
        "url":[],
        "idNo":[],
        "idCardNo":[],
        "type":[],
        "amount":[],
        "price":[],
        "time":[],
        "hash":[],
        "key":[],
        "value":[],
        "path":[],
        "summay":[],
        "content":[],
        "ip":[],
        "size":[],
        "length":[],
        "memo":[]
}

/**
 * 
 * @param {[MockGeneratorFieldConfig]} configs 
 * @param {number} count 
 * @returns {[data]}
 */
function generate(configs, count = 1) {
        let ls = [];

        let t = 0;
        while (t++ < count) {
                let data = {};
                configs.forEach(x => {
                        data[x.name] = x.candidates[RANDOM.nextVal(0, x.candidates.length - 1)];
                });
                ls.push(data);
        }

        return ls;
}

function insertToTable(){

}

function createJavaCode(){
        
}