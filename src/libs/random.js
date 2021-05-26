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

<<<<<<< HEAD

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
=======
/**
 * 
 * @param {[]} array 
 * @param {Number} count 
 */
function pickFromArray(array,count){
       if(array.length<count)
        throw new Error("array length can not less than count");

        let result =[];

     for(let i=0;i<count;i++){
             let rd =nextVal(0,array.length);
             result.push(array[rd]);
             array.splice(rd,1)

     }

     return result;
}

exports.RANDOM={
        nextVal,
        pickFromArray
>>>>>>> c25257861b0c992fa27bfd1b99d636b434d5c5be
}