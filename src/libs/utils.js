/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-23 16:06:05
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-11 17:48:42
 */
/**
 * Check target is defined, if target not defiend will throw an error
 * @param {Any} target 
 */
exports.UNDEFINED = "undefined";
exports.EMPTY = "";
/**
 * @description Check target is null or not, if null throw an argument error;
 * @param {Any} target 
 */
exports.requireNotNull = target => {
        // if (typeof target == "undefined")
        //         throw new Error " target can not be null!";
}
/**
 * @description Convert @see {Array} to @see {Set} 
 * @param {[Any]} array 
 * @returns {Set<Any>}
 */
exports.arrayToSet = (array) => {
        let s = new Set();

        if (typeof array == UNDEFINED)
                return s;

        array.forEach(element => {
                if (!s.has(element))
                        s.add(element);
        });

        return s;
}
/**
 * 
 * @param {String} value
 */
exports.parseValue = (value) => {
        value = value.trim();
        
        if (value.length == 0) {
                return value;
        } else if ((value.startsWith("\"") && value.endsWith("\""))
                || (value.startsWith("'") && value.endsWith("'"))) {
                return value.substr(1, value.length - 2);
        } else if (value == "true") {
                return true;
        } else if (value == "false") {
                return false;
        } else {
                let reg = /^(-?\d+)(\.\d+)?$/;
                return reg.test(value) ? parseFloat(value) : value;
        }
}