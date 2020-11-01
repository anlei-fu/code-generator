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
}