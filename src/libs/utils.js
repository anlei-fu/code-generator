/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-23 16:06:05
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-15 10:29:43
 */
/**
 * Check target is defined, if target not defiend will throw an error
 * @param {Any} target 
 */
exports.UNDEFINED = "undefined";
exports.EMPTY = "";
/**
 * @description Check target is null or not, if null throw an argument error;
 * @param {Any} target 
 */
exports.requireNotNull = target => {
        // if (typeof target == "undefined")
        //         throw new Error " target can not be null!";
}

/**
 * 
 * @param {String} value
 */
exports.parseValue = (value) => {
        value = value.trim();
        if (value.length == 0) {
                return value;
        } else if ((value.startsWith("\"") && value.endsWith("\""))
                || (value.startsWith("'") && value.endsWith("'"))) {
                return value.substr(1, value.length - 2);
        } else if (value == "true") {
                return true;
        } else if (value == "false") {
                return false;
        } else {
                let reg = /^(-?\d+)(\.\d+)?$/;
                return reg.test(value) ? parseFloat(value) : value;
        }
}

/*------------------------------------------------array---------------------------------------------------*/
/**
 * @description Convert @see {Array} to @see {Set} 
 * @param {[Any]} array 
 * @returns {Set<Any>}
 */
function toSet(array) {
        let s = new Set();

        array.forEach(x => {
                if (!s.has(x))
                        s.add(x);
        });

        return s;
}
/**
 * 
 * @param {[Any]} array 
 * @param {(Any)=>String} keySelector 
 * @returns {Map<String,Any>}
 */
function toMap(array, keySelector) {
        let map = new Map();

        array.forEach(x => {
                map.set(keySelector(x), x);
        })

        return map;
}
exports.ARRAY = {
        toSet,
        toMap
}
/*-----------------------------------------------object--------------------------------------------------------------*/
/**
 * 
 * @param {Object} self 
 * @param {Object} other 
 * @param {boolean} override 
 */
function extend(self, other, override) {
        let keys;
        if (!override)
                keys = toSet(Object.keys(self));

        for (const p in other) {
                if (override) {
                        self[p] = other[p];
                } else {
                        if (!keys.has(p))
                                self[p] = other[p];
                }
        }
}
/**
 * 
 * @param {Object} self 
 * @param {Object} other 
 */
function deepExtend(self,other){
        let keys= toSet(Object.keys(self));

        for(const p of other){
            if(keys.has(p)){
                 deepExtend(self[p],other[p]);
            } else {
                    self[p]=other[p];
            }
        }
}
/**
 * 
 * @param {Object} target 
 * @returns {Object}
 */
function clone(target){
   return JSON.parse(JSON.stringify(target));
}

exports.OBJECT={
        extend,
        deepExtend,
        clone
}
/*-------------------------------------------------------------------function---------------------------------------------------------------*/

function extend(self,other){
        Function
}
/*-------------------------------------------------------------------class----------------------------------------------------------------------*/
function extend(self,other){

}