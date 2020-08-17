/*
 * @Descripttion: some function to operate {String}
 * @version: 1.0
 * @Author: fuanlei
 * @Date: 2019-09-20 14:13:28
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 10:53:59
 */

/**
 * Get matched sections of input string and remove left,right pattern both
 * 
 * @param {String} input 
 * @param {String} left  left pattern
 * @param {Number?} start  start position
 * @param {String} right  right pattern
 * @param {Number?} count  desired count
 * @returns {[String]}
 */
function select(input, left, right, start = 0, count = 1) {
        let i = 0,
                ls = [];

        while (true) {
                i = input.indexOf(left, start);
                if (i == -1)
                        break;

                start = input.indexOf(right, i + left.length);
                if (start == -1) {
                        break;
                } else {
                        ls.push(input.substr(i + left.length, start - i - left.length));
                        if (count != -1 && ls.length >= count)
                                break;
                }

                start += right.length;
        }

        return ls;
}

/**
 * Get matched section of string ,keep left and right pattern both in result
 * 
 * @param {String} input 
 * @param {String} left  left pattern
 * @param {String} right  right pattern
 * @param {Number?} start  start position
 * @param {Number?} count  desired count
 * @returns {[String]}
 */
function select1(input, left, right, start, count) {
        let i = 0,
                ls = [];

        while (true) {
                i = input.indexOf(left, start);
                if (i == -1)
                        break;

                start = input.indexOf(right, i + left.length);
                if (start == -1) {
                        break;
                } else {
                        ls.push(input.substr(i, start - i + right.length));
                        if (count != -1 && ls.length >= count)
                                break;
                        start += right.length;
                }

                start += right.length;
        }

        return ls;
}

/**
 * Replace input str many times with replace pairs ,warn: not think about pairs's order
 * 
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
 * Remove patterns from string
 * 
 * @param {String} input 
 * @param {String[]} array  patterns to remove
 * @returns {String}
 */
function remove(input, array) {
        array = typeof array == "string" ? [array] : array;
        for (const item of array)
                input = input.replace(new RegExp(makeOraginalRegexPattern(item), 'g'), "");

        return input;
}

/**
 * Remove matched pattern of string
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
 * Remove matched pattern of string
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
 * Normalize regex pattern string
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
 * 
 * @param {Any[]} array 
 * @param {String?} prefix  
 * @param {String?} suffix 
 * @returns {String}
 */
function arrayToString(array = [], prefix = "", suffix = "") {
        let result = "";
        for (const item of array)
                result += `${prefix}${item}${suffix}`;

        return result;
}

/**
 * Customirized array to string format
 * 
 * @param {[Any]} array 
 * @param {String} prefix 
 * @param {String} suffix 
 * @param {(Any,Number,[Any])=>String} converter  accept (item,index,array) and return a string
 * @returns {String}
 */
function arrayToString1(array, converter, prefix = "", suffix = "") {
        if (!converter)
                throw new Error("converter is required!");

        let output = prefix;
        array.forEach((item, index, arr) => {
                output += converter(item, index, arr);
        });

        return output + suffix;
}

/**
 * Split input string into sections by splitor and keep splior in results
 * 
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
 * Repeat a pattern  with times
 * 
 * @param {String} pattern 
 * @param {Number} times
 * return repeated  string 
 */
function repeat(pattern, times) {
        let output = "";
        for (let i = 0; i < times; i++)
                output += pattern;

        return output;
}

/**
 * Split text into words by blank chars splitors (" ","\r","\n","\t","\f","\b")
 * 
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
 * Upper first letter of string
 * 
 * @param {String} input 
 * @returns {String}
 */
function upperFirstLetter(input) {
        return `${input.substr(0, 1).toUpperCase()}${input.substr(1, input.length - 1)}`;
}

/**
 * Lower fisrt letter of string
 * 
 * @param {String} input 
 * @returns {String}
 */
function lowerFirstLetter(input) {
        return `${input.substr(0, 1).toLowerCase()}${input.substr(1, input.length - 1)}`;
}

/**
 * Split string into lines by splitor "\r\n" on windows
 * 
 * @param {String} input 
 * @returns {[String]}
 */
function splitToLines(input) {
        return input.split("\n");
}

/**
 * Remove empty line of string
 * 
 * @param {String} input 
 * @returns {String}
 */
function removeEmptyLine(input) {
        let temp = "";
        splitToLines(input).forEach(l => {
                if (l.trim() != "")
                        temp += l + "\r\n";
        })

        return temp;
}

/**
 * Reverse string
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
 * @param {String} target 
 * @returns {String}
 */
function removeLastComa(target) {
        target = target.trimRight();
        if (target[target.length - 1] == ",")
                target = target.substr(0, target.length - 1);

        return target;
}

/**
 * Dose content includes any pattern
 * 
 * @param {String} target 
 * @param {[String]} matches 
 * @returns {boolean}
 */
function includesAny(target, matches = []) {
        for (const c of matches) {
                if (target.includes(c))
                        return true;
        }

        return false;
}

/**
 * Dose content includes all petterns
 * 
 * @param {String} target' 
 * @param {[String]} matches 
 * @returns {boolean}
 */
function includesAll(target, matches = []) {
        for (const c of matches) {
                if (!target.includes(c))
                        return false;
        }

        return true;
}

/**
 * Target is any of matches
 * 
 * @param {String} target 
 * @param {[String]} matches 
 * @returns {boolean}
 */
function equalAny(target, matches = []) {
        for (const c of matches) {
                if (target == c)
                        return true;
        }

        return false;
}

/**
 * Target is ends with any of matches
 * 
 * @param {String} target 
 * @param {[String]} matches 
 * @return {boolean}
 */
function endsWithAny(target, matches = []) {
        for (const c of matches) {
                if (target.endsWith(c))
                        return true;
        }

        return false;
}

/**
 * Target is starts with any of matches
 * 
 * @param {String} target 
 * @param {[String]} matches 
 * @return {boolean}
 */
function startsWithAny(target, matches = []) {
        for (const c of matches) {
                if (target.startsWith(c))
                        return true;
        }

        return false;
}

/**
 * Target starts and ends with any pair of matches
 * 
 * @param {String} target 
 * @param {Pairs} matches 
 * @returns {boolean}
 */
function startsAndendsWithAny(target, matches = []) {
        for (const c in matches) {
                if (target.startsWith(c) && endsWith(c))
                        return true;
        }

        return false;
}

/**
 * 
 * @param {String} target 
 * @param {String} matches 
 * @returns {Number}
 */
function firstIndexOfAny(target, matches = []) {
        let index = -1;
        for (const item of matches) {
                let pos = target.indexOf(item);
                index = pos < 0 ? index : index > pos ? pos : index;
        }

        return index;
}

/**
 * 
 * @param {String} text 
 * @returns {String}
 */
function lastWord(text) {
        let words = splitToWords(text);
        return words[words.length - 1];
}

/**
 * 
 * @param {String} text 
 * @returns {String}
 */
function firstWord(text) {
        return splitToWords(text)[0];
}

/**
 * 
 * @param {Number} pos 
 * @param {String} source 
 * @param {String} merge 
 * @returns {String}
 */
function insert(pos, source, merge) {
        return source.substr(0, pos) + merge + source.substr(pos, source.length - pos);
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
        removeLastComa,
        includesAny,
        includesAll,
        equalAny,
        startsWithAny,
        endsWithAny,
        startsAndendsWithAny,
        arrayToString1,
        firstIndexOfAny,
        firstWord,
        lastWord,
        insert
}