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
const { STR} = require("./str");
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

/**
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

exports.ARRAY = {
        toSet,
        toMap,
        groupBy
}
/*-------------------------------------------------------------------object---------------------------------------------------------------------------*/

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
function deepExtend(self, other) {
        let keys = toSet(Object.keys(self));

        for (const p of other) {
                if (keys.has(p)) {
                        deepExtend(self[p], other[p]);
                } else {
                        self[p] = other[p];
                }
        }
}

/**
 * 
 * @param {Object} target 
 * @returns {Object}
 */
function clone(target) {
        return JSON.parse(JSON.stringify(target));
}

/**
 * 
 * @param {Any} obj 
 */
function toArray(obj) {
        let ls = []

        for (let k in obj) 
                ls.push(obj[k]);

        return ls;
}

/**
 * 
 * @param {Any} obj 
 * @param {String} key 
 * @returns {boolean}
 */
function hasKey(obj, key) {
        return new Set(Object.keys(obj)).has(key);
}

/**
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
 * 
 * @param {any} obj 
 * @param {String} name  let name
 * @returns {String}
 */
function text(obj, name) {
        let json = JSON.stringify(obj, null, "  ");
        json=doReplace(json);
        return `let ${name} = ${json};\r\n\r\n`;
}

/**
 * 
 * @param {String} json 
 * @returns {String}
 */
function doReplace(json) {
        let str=require("./../libs/str").STR;
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
 * @description To resolve @see Map can not be stringified by JSON method
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
        text
}



/*--------------------------------------------------------------------type----------------------------------------------------------------------------*/

function isArray(obj) {
        return obj instanceof Array
}

function isObject(obj) {
        return obj instanceof Object;
}

function isString(obj) {
        return obj.constructor == String;
}

function isFunction(obj) {
        return obj.constructor == Function;
}

function isNumber(obj) {
        return obj.constructor == Number;
}

function isBoolean(obj) {
        return obj.constructor == Boolean;
}



exports.TYPE = {
        isArray,
        isObject,
        isString,
        isFunction,
        isNumber,
        isBoolean
}