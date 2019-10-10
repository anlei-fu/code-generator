/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-23 16:06:05
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-30 14:55:43
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
        if (typeof target == "undefined")
                throw " target can not be null!";
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