/*
 * @Descripttion: some function to operate {String}
 * @version: 1.0
 * @Author: fuanlei
 * @Date: 2019-09-20 14:13:28
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-25 14:44:41
 */
//imports
const { requireNotNull, defaultValue, EMPTY } = require("./utils")
/**
 * @description Select  matched sections of input string and remove left,right pattern both
 * @param {String} input 
 * @param {String} left  left pattern
 * @param {String} right  right pattern
 * @param {Number?} start  start position
 * @param {Number?} count  desired count
 * @returns {[String]}
 */
function select(input, left, right, start, count) {
        requireNotNull(input);
        requireNotNull(left);
        requireNotNull(right);
        start = defaultValue(start, 0);
        count = defaultValue(count, -1);
        let i = 0;
        var ls = [];
        while (true) {
                i = input.indexOf(left, start);

                if (i == -1) {
                        break;
                }

                start = input.indexOf(right, i);

                if (start == -1) {
                        break;
                } else {
                        ls.push(input.substr(i + 1, start - i - 1));

                        if (count != -1 && ls.length > count)
                                break;
                }
        }

        return ls;
}
/**
 * @description  Select  matched section of string ,keep left and right  pattern both in result
 * @param {String} input 
 * @param {String} left  left pattern
 * @param {String} right  right pattern
 * @param {Number?} start  start position
 * @param {Number?} count  desired count
 * @returns {[String]}
 */
function select1(input, left, right, start, count) {
        requireNotNull(input);
        requireNotNull(left);
        requireNotNull(right);
        start = defaultValue(start, 0);
        count = defaultValue(count, -1);
        let i = 0;
        var ls = [];
        while (true) {
                i = input.indexOf(left, start);

                if (i == -1) {
                        break;
                }

                start = input.indexOf(right, i);

                if (start == -1) {
                        break;
                } else {
                        ls.push(input.substr(i, start - i + 1));

                        if (count != -1 && ls.length > count)
                                break;
                }
        }

        return ls;
}
/**
 * @description replace many  times with replace pairs , don't think about pairs's order
 * @param {String} input 
 * @param {Map<String,String>?} pairs 
 * @returns {String}
 */

function replace(input, pairs) {
        requireNotNull(input);
        pairs = defaultValue(pairs, {});
        for (let e in pairs) {
                input = input.replace(new RegExp(e, 'g'), pairs[e]);
        }
        return input;
}
/**
 * @description Remove patterns from string
 * @param {String} input 
 * @param {String[]} array  patterns to remove
 * @returns {String}
 */
function remove(input, array) {
        requireNotNull(input);
        array = defaultValue(array, []);
        for (var item of array) {
                input = input.replace(item, EMPTY);
        }

        return input;
}
/**
 * Format array to string
 * @param {Any[]} array 
 * @param {String?} prefix  
 * @param {String?} suffix 
 * @returns {[String]}
 */
function arrayToString(array, prefix, suffix) {
        var result = EMPTY;
        array = defaultValue(array, []);
        prefix = defaultValue(prefix, EMPTY);
        suffix = defaultValue(suffix, EMPTY);
        for (var item of array) {
                result += `${prefix}${item}${suffix}`;
        }
        return result;
}
/**
 * Splite input string into sections by splitor
 * @param {String} input 
 * @param {String} splitor 
 * @param {Number?} start  start position
 * @param {Number?} count  max split count
 * return an array of string
 */
function split1(input, splitor, start, count) {
        requireNotNull(input);
        requireNotNull(splitor);
        start = defaultValue(start, 0);
        count = defaultValue(count, -1);
        var i = 0;
        var ls = [];
        while (true) {
                i = input.indexOf(splitor, start);
                if (i == -1) {
                        ls.push(start, input.length - start);
                        break;
                } else {
                        ls.push(start, i - start + splitor.length)
                }
                start = i + splitor.length;
        }
}
/**
 * Repeat a pattern  by times
 * @param {String} pattern 
 * @param {Number} times
 * return repeated  string 
 */
function repeat(pattern, times) {
        requireNotNull(pattern);
        for (let i = 0; i < times; i++) {
                pattern += pattern;
        }
        return pattern;
}
/**
 * @description Split text into words by blank chars splitors (" ","\r","\n","\t","\f","\b")
 * @param {String} input 
 * @returns {[String]}
 */
function splitToWords(input) {
        requireNotNull(input);
        let isSkipping = false;
        let ls = [];
        var w = EMPTY;
        for (let c of input) {
                switch (c) {
                        case "\b":
                        case "\f":
                        case "\r":
                        case "\n":
                        case "\t":
                        case " ":
                                if (!isSkipping) {
                                        if (w != EMPTY) {
                                                let d = w;
                                                ls.push(d);
                                                w = EMPTY;
                                        }
                                        isSkipping = true;
                                }
                                break;
                        default:
                                if (isSkipping) {
                                        isSkipping = false;
                                }
                                w += c;
                                break;
                }
        }

        if (w != EMPTY)
                ls.push(w);
        return ls;
}

exports.str = {
        select,
        select1,
        replace,
        split1,
        arrayToString,
        splitToWords
}