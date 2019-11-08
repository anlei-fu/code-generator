/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-08 10:24:48
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-08 10:30:26
 */
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

exports.SQL_UTILS={
        getSqlString
}