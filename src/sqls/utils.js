/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-08 10:24:48
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 15:25:53
 */

const { RANDOM } = require("./../libs/random");
const { DATE } = require("./../libs/date");

const dates = [DATE.now(), DATE.lastMonth(), DATE.yesterday(), DATE.lastWeek(), DATE.nextMonth(), DATE.nextYear()]

/**
 * 
 * @param {any} obj 
 * @returns {String}
 */
function getSqlString(obj) {
        if (obj instanceof String) {
                let ret = "";
                for (const c of obj)
                        ret += c == "'" ? "''" : c;
                return ret;
        }

        return `${obj}`;
}


/**
 * 
 * @param {String} name 
 * @param {SqlType} type 
 */
function getTestValues(name, type, count = 20) {
        let ls = [];
        for (let i = 0; i < count; i++)
                ls.push(getTestValue(name, type));
        return ls;
}

/**
 * 
 * @param {String} name 
 * @param {SqlType} type 
 * @returns {Any}
 */
function getTestValue(name, type) {

        if (type.name.indexOf("char") != -1) {
                return name + RANDOM.nextVal(0, 1000);
        } else if (type.name.indexOf("date") != -1) {
                let date = dates[RANDOM.nextVal(0, dates.length - 1)];
                return DATE.toyyyy_MM_dd_hh_mm_ss(date);
        } else {
                return RANDOM.nextVal(0, 1000);
        }
}


/**
 * @param {SqlType} type 
 * @returns {String}
 */
function sqlTypeToJavaType(type) {
        if (type.name.indexOf("char") != -1) {
                return "String";
        } else if (type.name.indexOf("date") != -1) {
                return "Date";
        } else if (type.name.indexOf("float") != -1) {
                return "Float";
        } else if (type.name.indexOf("decimal") != -1) {
                return "Double";
        } else if (type.name.indexOf("bigint")) {
                return "Long";
        } else if (type.name.indexOf("boolean")) {
                return "Boolean";
        }
        else {
                return "Integer";
        }
}

/**
 * 
 */
function sqlTypeToCsharpType() {

}

exports.SQL_UTILS = {
        getSqlString,
        getTestValue,
        getTestValues,
        sqlTypeToJavaType
}