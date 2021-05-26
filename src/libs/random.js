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
        let result = Math.floor(Math.random() * max + min);
        return result;
}


function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};
// Generate a pseudo-GUID by concatenating random hexadecimal.  
function guid() {
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
};

exports.RANDOM = {
        nextVal,
        guid
}