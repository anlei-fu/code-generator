/*
 * @Descripttion: some function to operate {String}
 * @version: 1.0
 * @Author: fuanlei
 * @Date: 2019-09-20 14:13:28
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 10:53:59
 */

//imports
const { requireNotNull} = require("./utils")
/**
 * @description Select  matched sections of input string and remove left,right pattern both;
 * @param {String} input 
 * @param {String} left  left pattern
 * @param {String} right  right pattern
 * @param {Number?} start  start position
 * @param {Number?} count  desired count
 * @returns {[String]}
 */
function select(input, left, right, start=0, count=1) {

        let i = 0,
                ls = [];

        while (true) {
                i = input.indexOf(left, start);

                if (i == -1)
                        break;

                start = input.indexOf(right, i+left.length);

                if (start == -1) {
                        break;
                } else {
                        ls.push(input.substr(i, start - i +right.length+1));
                        if (count != -1 && ls.length > count)
                                break;
                }

                start +=right.length;
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
 * @description Replace input str many times with replace pairs , not think about pairs's order
 * @param {String} input 
 * @param {Map<String,String>?} pairs 
 * @returns {String}
 */
function replace(input, pairs) {
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
        array=   typeof array=="string"?[array]:array;

        for (const item of array)
                input = input.replace(new RegExp(makeOraginalRegexPattern(item), 'g'),"");

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
                input = input.replace(new RegExp(makeOraginalRegexPattern(x), "g"), "");
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

        for (const item in option)
                input = removeWithMatch(ite, option[item]);

        return input;
}

/**
 * 
 * @param {String} pattern 
 */
function makeOraginalRegexPattern(pattern) {
        let out = "";
        for (const c of pattern) {
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
function arrayToString(array=[], prefix="", suffix="") {
        let result="";
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
        let isSkipping = false,
                ls = [],
                w = "";

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
                                        if (w != "") {
                                                ls.push(w);
                                                w = "";
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

        if (w != "")
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
        return input.split("\r\n");
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

/**
 * Trim right and remove last coma of pattern
 * 
 * @param {String} pattern 
 * @returns {String}
 */
function removeLastComa(pattern){
        pattern = pattern.trimRight();
        if (pattern[pattern.length - 1] == ",")
                pattern = pattern.substr(0, pattern.length - 1);

        return pattern;
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
        reverse,
        removeLastComa
}