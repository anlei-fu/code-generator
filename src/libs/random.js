/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-15 10:54:00
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 10:55:30
 */

/**
 * Geneate a random number
 * 
 * @param {number} min 
 * @param {number} max
 * @returns {number} 
 */
function nextVal(min, max) {
        let result= Math.floor(Math.random() * max + min);
        return result;
}

exports.RANDOM={
        nextVal
}