/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-30 14:13:47
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-07 17:30:49
 */
const { STR } = require("./str");
/**
 * 
 * @param {String} input 
 * @returns {String}
 */
function toPascal(input) {
        let ret = "";

        split(input).forEach(word => {
                if (word != "_") {
                        ret += STR.upperFirstLetter(word.toLowerCase());
                }
        });

        return ret;
}
/**
 * 
 * @param {String} input 
 * @returns {String}
 */
function toCamel(input) {
        let ret = "";
        split(input).forEach((word, i) => {
                if (word != "_") {
                        console.log(word);
                        if (ret != "") {
                                ret += STR.upperFirstLetter(word.toLowerCase());
                        } else {
                                ret += word.toLowerCase();
                        }
                }
        });

        return ret;
}
/**
 * 
 * @param {String} input
 * @returns {String} 
 */
function toHungary(input) {
        let ret = "";

        split(input).forEach(word => {
                if (word == "_") {
                        if (ret != "" && !ret.endsWith("_")) {
                                ret += "_";
                        }
                } else {
                        if (ret == "") {
                                ret += word.toLowerCase();
                        } else {
                                if (ret.endsWith("_")) {
                                        ret += word.toLowerCase();
                                } else {
                                        ret += "_" + ret.toLowerCase();
                                }
                        }
                }
        });

        return ret;
}
/**
 * 
 * @param {String} input 
 * @returns {[String]}
 */
function split(input) {
        input = input.trim();
        var ls = [];
        var word = "";

        let isUpper = false;

        /**
         * 
         * @param {boolean} upper
         * @returns {boolean} 
         */
        function finishWord(upper, char) {
                if (word == "") {
                        isUpper = upper;
                        word += char;
                } else {
                        if ((isUpper && upper) || (!isUpper && !upper)) {
                                word += char;
                        } else {
                                ls.push(word);
                                word = "";
                                return true;
                        }

                        return false;
                }
        }

        for (let i = 0; i < input.length; i++) {

                let c = input.charAt(i);
                if (c == "_") {
                        if (word != "") {
                                ls.push(word);
                                word = "";
                        }

                        ls.push(c);
                }
                else if (c >= "A" && c <= "Z") {
                        if (finishWord(true, c))
                                --i;

                } else if (c >= "a" && c <= "z") {
                        if (finishWord(false, c))
                                --i;
                } else {
                        word += c;
                }
        }

        if (word != "")
                ls.push(word);

        return ls;
}

exports.NamingStrategy = {
        toHungary,
        toCamel,
        toPascal
}