/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-23 16:06:05
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-24 14:15:18
 */
/**
 * Check target is defined, if target not defiend will throw an error
 * @param {Any} target 
 */
const UNDEFINED = "undefined";
const EMPTY="";
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
exports.requireNotNull = requireNotNull;
exports.UNDEFINED = UNDEFINED;
exports.defaultValue = defaultValue;
exports.EMPTY=EMPTY;