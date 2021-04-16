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
 * Fommat to pascal naming style
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
 * Format to camel naming style
 * 
 * @param {String} input 
 * @returns {String}
 */
function toCamel(input) {
        let ret = "";
        split(input).forEach(word => {
                ret += ret != "" ? STR.upperFirstLetter(word.toLowerCase()) : word.toLowerCase();
        });

        return ret;
}

/**
 * Format to splash naming style
 * 
 * @param {String} input 
 */
function toSplash(input){
        return toHungary(input).replace(/_/g,"-",);
}

/**
 * Format to hungary naming style
 * 
 * @param {String} input
 * @returns {String} 
 */
function toHungary(input) {
        let ret = "";
        split(input).forEach((word, i, array) => {
                ret += i != array.length - 1
                        ? word.toLowerCase() + "_" : word.toLowerCase();
        });

        return ret;
}

/**
 * Split to word segmenets
 * 
 * @description Split to words, 1. split by '_' if contains any '_' 2. tokenlize 
 * @param {String} input 
 * @returns {[String]}
 */
function split(input) {
        if (input.indexOf("_") != -1)
                return input.split("_");

        if (input == "")
                throw new Error("input can not be empty!");

        let ls = [];
        let allUpper = true;
        for (let i = 0; i < input.length; i++) {
                let c = input.charAt(i);
                if (c >= "a" && c <= "z")
                        allUpper = false;
        }

        if (allUpper) {
                ls.push(input);
                return ls;
        }

        let word = input[0];
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
        toPascal,
        toSplash
}