/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-23 16:06:05
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-27 11:35:45
 */
/**
 * Check target is defined, if target not defiend will throw an error
 * @param {Any} target 
 */
const UNDEFINED = "undefined";
const EMPTY = "";
/**
 * @description check target is null or not, if null throw an argument error
 * @param {Any} target 
 */
const requireNotNull = target => { if (typeof target == UNDEFINED) throw " target can not be null!"; }
/**
 * @desciption check target is null not, if null return default value
 * @param {Any} target 
 * @param {Any} def ,default value
 * @returns {Any}
 */
const defaultValue = (target, def) => { return typeof target == UNDEFINED ? def : target; }
/**
 * @description convert @see {Array} to @see {Set} 
 * @param {[Any]} array 
 * @returns {Set<Any>}
 */
const arrayToSet = (array) => {
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
 */
exports.requireNotNull = requireNotNull;
exports.UNDEFINED = UNDEFINED;
exports.defaultValue = defaultValue;
exports.EMPTY = EMPTY;
exports.arrayToSet = arrayToSet;