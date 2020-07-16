/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-23 16:06:05
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-20 17:54:25
 */
/**
 * Check target is defined, if target not defiend will throw an error
 * @param {Any} target 
 */
const { STR } = require("./str");
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
 * Parse value of basic type
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
 * Convert @see {Array} to @see {Set} 
 * 
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
 * Convert @see {Array} to @see {Map}
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

/**
 * Group array
 * 
 * @param {[Any]} array 
 * @param {Any=>String} keySelector 
 * @returns {Map<String,[Any]>}
 */
function groupBy(array, keySelector) {
        let map = new Map();

        array.forEach(x => {
                let key = keySelector(x);
                if (!map.has(key))
                        map.set(key, []);

                map.get(key).push(x);
        })

        return map;
}

/**
 * Remove repeated element
 * 
 * @param {[Any]} array 
 * @param {Any=>String} keySelector 
 */
function distinct(array, keySelector = x => x) {
        let set = new Set();
        let output = [];
        array.forEach(x => {
                let key = keySelector(x);
                if (!set.has(key)) {
                        set.add(key);
                        output.push(x);
                }
        });

        return output;
}

exports.ARRAY = {
        toSet,
        toMap,
        groupBy,
        distinct
}
/*-------------------------------------------------------------------object---------------------------------------------------------------------------*/

/**
 * Extend object
 * 
 * @param {Object} self 
 * @param {Object} other 
 * @param {boolean} override , if true overlay self property with other's property
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
 * Deep extend object property
 * 
 * @param {Object} self 
 * @param {Object} other 
 */
function deepExtend(self, other) {
        let keys = toSet(Object.keys(self));

        for (const p in other) {
                if (keys.has(p)) {
                        if (typeof other[p] == "object" && typeof self[p] == "object")
                                deepExtend(self[p], other[p]);
                } else {
                        self[p] = other[p];
                }
        }
}

/**
 * Colone object
 * 
 * @param {Object} target 
 * @returns {Object}
 */
function clone(target) {
        let copy = JSON.parse(JSON.stringify(target));
        extend(copy, target, false);
        return copy;
}

/**
 * Convert obj to array
 * 
 * @param {Any} obj 
 * @returns {Array}
 */
function toArray(obj) {
        let ls = []

        if (obj instanceof Map) {
                obj.forEach(value => {
                        ls.push(value);
                });

                return ls;
        }

        if (obj instanceof Array)
                return obj;

        if (obj instanceof Set) {
                obj.forEach(key => {
                        ls.push(key);
                });

                return ls;
        }


        for (let k in obj)
                ls.push(obj[k]);

        return ls;
}

/**
 * 
 * 
 * @param {Object} target 
 * @param {String} key 
 * @param {any} value 
 */
function setIfAbsent(target,key,value){
        if(!target[key])
          target[key]=value;
}

/**
 * Does object has property "key"
 * 
 * @param {Any} obj 
 * @param {String} key 
 * @returns {boolean}
 */
function hasKey(obj, key) {
        return new Set(Object.keys(obj)).has(key);
}

/**
 * Iterate object
 * 
 * @param {Any} obj 
 * @param {(key:String,value:Any)=>void} consumer 
 */
function forEach(obj, consumer) {

        if (!consumer)
                throw new ReferenceError("consumer can not be null!");

        for (const c in obj)
                consumer(c, obj[c]);
}

/**
 * Delete property "key" of object
 * 
 * @param {Any} obj 
 * @param {String} key 
 */
function deleteKey(obj, key) {
        if (!hasKey(obj, key))
                return;

        delete obj[key];
}

/**
 * Get property "key" value of object
 * 
 * @param {any} obj 
 * @param {String} key 
 * @returns {any|undefined}
 */
function getValue(obj, key) {
        let keys = key.split(",");
        for (const k of keys) {
                if (obj[k]) {
                        obj = obj[k]
                } else {
                        return undefined;
                }
        }

        return obj;
}

/**
 * Textise object with giveing name
 * 
 * @param {any} obj 
 * @param {String} name  let name
 * @returns {String}
 */
function text(obj, name) {
        let json = JSON.stringify(obj, null, "\t");
        json = doReplace(json);

        return `let ${name} = ${json};\r\n\r\n`;
}

/**
 * Make obj exports string
 * 
 * @param {Any} obj 
 * @param {String} name 
 * @returns {String}
 */
function export_(obj, name, relpace = true) {
        let json = JSON.stringify(obj, null, "\t");
        if (relpace)
               json=doReplace(json);

        return `exports.${name} = ${json};\r\n\r\n`;
}


/**
 * 
 * @param {String} json 
 * @returns {String}
 */
function doReplace(json) {
        let str = require("../libs/str").STR;
        json = str.reverse(json);
        let output = "";
        let isInQuote = false;
        for (let i = 0; i < json.length; i++) {
                if (json[i] == ":") {
                        if (i < json.length - 1 && json[i + 1] == "\"")
                                isInQuote = true;

                        output += json[i];
                        i += 1;
                }
                else if (json[i] == "\"") {
                        if (isInQuote) {
                                isInQuote = false;
                        } else {
                                output += json[i];
                        }

                } else {
                        output += json[i];
                }
        }

        return str.reverse(output);
}

/**
 * To resolve @see Map can not be stringified by JSON method
 * 
 * @param {Map} map 
 */
function mapToObject(map) {
        let obj = {};
        map.forEach((v, k) => {
                obj[k] = v;
        });

        return obj;
}

exports.OBJECT = {
        extend,
        deepExtend,
        clone,
        toArray,
        hasKey,
        forEach,
        getValue,
        mapToObject,
        text,
        export_,
        setIfAbsent
}

/*--------------------------------------------------------------------type----------------------------------------------------------------------------*/

/**
 * Is type array
 * 
 * @param {Any} obj 
 */
function isArray(obj) {
        return obj instanceof Array
}

/**
 * Is type object
 * 
 * @param {Any} obj 
 */
function isObject(obj) {
        return obj instanceof Object;
}

/**
 * Is type string
 * 
 * @param {Any} obj 
 */
function isString(obj) {
        return obj.constructor == String;
}

/**
 * Is type function
 * 
 * @param {Any} obj 
 */
function isFunction(obj) {
        return obj.constructor == Function;
}

/**
 * Is type number
 * 
 * @param {Any} obj 
 */
function isNumber(obj) {
        let result =typeof obj;
        return typeof obj == "number";
}

/**
 * Is type boolean
 * 
 * @param {any} obj 
 */
function isBoolean(obj) {
        return typeof obj == "boolean";
}

exports.TYPE = {
        isArray,
        isObject,
        isString,
        isFunction,
        isNumber,
        isBoolean
}