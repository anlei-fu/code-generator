/*
 * @Descripttion: some function to operate {String}
 * @version: 1.0
 * @Author: fuanlei
 * @Date: 2019-09-20 14:13:28
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 13:03:05
 */

//imports
const { requireNotNull, EMPTY } = require("./utils")

/**
 * @description Select  matched sections of input string and remove left,right pattern both;
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
        start = start || 0;
        count = count || 1;

        let i = 0,
                ls = [];

        while (true) {
                i = input.indexOf(left, start);

                if (i == -1)
                        break;

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
        start = start || 0;
        count = count || -1;

        let i = 0,
                ls = [];

        while (true) {
                i = input.indexOf(left, start);

                if (i == -1)
                        break;

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
 * @description Replace many  times with replace pairs , don't think about pairs's order
 * @param {String} input 
 * @param {Map<String,String>?} pairs 
 * @returns {String}
 */
function replace(input, pairs) {
        requireNotNull(input);
        pairs = pairs || {};

        for (const e in pairs)
                input = input.replace(new RegExp(makeOraginalRegexPattern(e), 'g'), pairs[e]);

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
        array = array || [];

        for (const item of array)
                input = input.replace(new RegExp(makeOraginalRegexPattern(item), 'g'), EMPTY);

        return input;
}

/**
 * 
 * @param {String} input 
 * @param {String} left 
 * @param {String} right
 * @returns {String} 
 */
function removeWithMatch(input, left, right) {

        select1(input, left, right).forEach(x => {
                input = input.replace(new RegExp(makeOraginalRegexPattern(x), "g"), EMPTY);
        });

        return input;
}

/**
 * 
 * @param {String} input 
 * @param {Option} option
 * @returns {String}
 */
function removeWithMatchMany(input, option) {

        for (const item in option) {
                input = removeWithMatch(ite, option[item]);
        }

        return input;
}

/**
 * 
 * @param {String} patter 
 */
function makeOraginalRegexPattern(patter) {
        let out = "";

        for (const c of patter) {
                switch (c) {
                        case "*":
                        case "$":
                        case "^":
                        case "|":
                        case "(":
                        case ")":
                        case "{":
                        case "}":
                        case "[":
                        case "]":
                        case "\\":
                        case "+":
                        case "?":
                        case ".":
                        case "":
                                out += "\\" + c;
                                break;
                        default:
                                out += c;
                                break;
                }
        }

        return out;
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
        array = array || [];
        prefix = prefix || EMPTY;
        suffix = suffix || EMPTY;

        for (const item of array)
                result += `${prefix}${item}${suffix}`;

        return result;
}

/**
 *@description Splite input string into sections by splitor
 * @param {String} input 
 * @param {String} splitor 
 * @param {Number?} start  start position
 * @param {Number?} count  max split count
 * return an array of string
 */
function split1(input, splitor, start, count) {
        requireNotNull(input);
        requireNotNull(splitor);

        start = start || 0;
        count = count || -1;

        let i = 0,
                ls = [];

        while (true) {
                i = input.indexOf(splitor, start);

                if (i == -1) {
                        ls.push(start, input.length - start);
                        return ls;
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

        for (let i = 0; i < times; i++)
                pattern += pattern;

        return pattern;
}

/**
 * @description Split text into words by blank chars splitors (" ","\r","\n","\t","\f","\b")
 * @param {String} input 
 * @returns {[String]}
 */
function splitToWords(input) {
        requireNotNull(input);
        let isSkipping = false,
                ls = [],
                w = EMPTY;
        // iterate input
        for (const c of input) {

                switch (c) {
                        case "\b":
                        case "\f":
                        case "\r":
                        case "\n":
                        case "\t":
                        case " ":
                                if (!isSkipping) {
                                        if (w != EMPTY) {
                                                ls.push(w);
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

/**
 * 
 * @param {String} input 
 * @returns {String}
 */
function upperFirstLetter(input) {
        return `${input.substr(0, 1).toUpperCase()}${input.substr(1, input.length - 1)}`;
}

/**
 * 
 * @param {String} input 
 * @returns {String}
 */
function lowerFirstLetter(input) {
        return `${input.substr(0, 1).toLowerCase()}${input.substr(1, input.length - 1)}`;
}

/**
 * 
 * @param {String} input 
 * @returns {[String]}
 */
function splitToLines(input) {
        return input.split("\n");
}

/**
 * 
 * @param {String} input 
 * @returns {String}
 */
function removeEmptyLine(input) {
        let temp = "";
        splitToLines(input).forEach(l => {
                if (l.trim() != "")
                        temp += l + "\n";
        })
        return temp;
}

/**
 * 
 */
function formatWords(input, option) {

}

/**
 * 
 * @param {String} input 
 * @returns {String}
 */
function reverse(input) {
        let output = "";
        for (const c of input)
                output = c + output;

        return output;
}


exports.STR = {
        select,
        select1,
        replace,
        split1,
        arrayToString,
        splitToWords,
        remove,
        upperFirstLetter,
        repeat,
        removeWithMatch,
        removeWithMatchMany,
        removeEmptyLine,
        splitToLines,
        lowerFirstLetter,
        reverse
}