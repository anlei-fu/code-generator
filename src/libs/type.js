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
 * Is a array
 * 
 * @param {Any} obj 
 * @returns {Boolean}
 */
function isArray(obj) {
        return Array.isArray(obj);
}

/**
 * Is a object
 * 
 * @param {Any} obj 
 * @returns {Boolean}
 */
function isObject(obj) {
        return obj instanceof Object;
}

/**
 * Is a string
 * 
 * @param {Any} obj 
 * @returns {Boolean}
 */
function isString(obj) {
        return obj.constructor == String;
}

/**
 * Is a function
 * 
 * @param {Any} obj 
 * @returns {Boolean}
 */
function isFunction(obj) {
        return obj.constructor == Function;
}

/**
 * Is a number
 * 
 * @param {Any} obj 
 * @returns {Boolean}
 */
function isNumber(obj) {
        return !isNaN(obj);
}

/**
 * Is type boolean
 * 
 * @param {Any} obj 
 * @returns {Boolean}
 */
function isBoolean(obj) {
        return obj.constructor == Boolean;
}

/**
 * Is a boolean
 * 
 * @param {Any} obj 
 * @returns {Boolean}
 */
function isUndefined(obj) {
        return obj === null || obj === undefined;
}

function isEmpty(obj) {
        return obj === null || obj === undefined || obj === '';
}

exports.TYPE = {
        isArray,
        isObject,
        isString,
        isFunction,
        isNumber,
        isBoolean,
        isUndefined,
        isEmpty
}