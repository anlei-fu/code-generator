/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-30 14:13:47
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-30 14:59:20
 */
const { STR } = require("./str");
/**
 * 
 * @param {String} input 
 * @returns {String}
 */
function toUpperCamelCase(input) {
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
function toLowerCamelCase(input) {
        let ret = "";

        split(input).forEach((word, i) => {
                if (word != "_") {
                        if (i != 1) {
                                ret += STR.upperFirstLetter(word.toLowerCase());
                        } else {
                                ret += word.tolowerCase();
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
                if (word != "_") {
                        ret += "_" + word.toLowerCase();
                } else {
                        ret += "_";
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
                        if (word != "")
                                ls.push(word);

                        word = c;
                } else {
                        word += c;
                }
        }
}

exports.NamingStrategy = {
        toHungary,
        toLowerCamelCase,
        toUpperCamelCase
}