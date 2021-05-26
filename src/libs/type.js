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
        return obj.constructor == Number;
}

/**
 * Is type boolean
 * 
 * @param {any} obj 
 */
function isBoolean(obj) {
        return obj.constructor == Boolean;
}

function isUndefined(obj) {
        return obj === null || obj === undefined;
}

exports.TYPE = {
        isArray,
        isObject,
        isString,
        isFunction,
        isNumber,
        isBoolean,
        isUndefined
}