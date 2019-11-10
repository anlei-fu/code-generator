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
                        ret += STR.upperFirstLetter(word.toLowerCase());
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
        split(input).forEach(word => {
                if (word != "_") {
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

        split(input).forEach((word, i, array) => {
                if (i != array.length - 1)
                        ret += word.toLowerCase() + "_";
                else
                        ret += word.toLowerCase();
        });

        return ret;
}
/**
 * 
 * @param {String} input 
 * @returns {[String]}
 */
function split(input) {
        if (input.indexOf("_") != -1)
                return input.split("_");

        if (input == "")
                throw new Error("input can not be empty!");

        let word = input[0];
        let ls = [];

        for (let i = 1; i < input.length; i++) {
                let c = input.charAt(i);

                if (c >= "A" && c <= "Z") {
                        ls.push(word);
                        word = c;
                } else {
                        word += c;
                }
        }

        ls.push(word);

        return ls;

}

exports.NamingStrategy = {
        toHungary,
        toCamel,
        toPascal
}