const { TYPE } = require("./utils");

/**
 * Assert not null
 * 
 * @param {Any} target 
 * @throws {ReferenceError}
 */
function notNull(target) {
        if (!target)
                throw new ReferenceError("null value");
}

/**
 * Assert String not empty
 * 
 * @param {String} target 
 * @throws {Error}
 */
function notEmpty(target) {
        notNull(target);
        string(target);
        if (target.trim() == "")
                throw new Error("empty");
}

/**
 * Assert target is number type
 * 
 * @param {Any} target 
 * @throws {TypeError}
 */
function number(target) {
        notNull(target);
        if (!TYPE.isNumber(target))
                _throwTypeError(typeof target);
}

/**
 * Assert target is boolen type
 * 
 * @param {Any} target 
 */
function boolean(target) {
        notNull(target);
        if (!TYPE.isBoolean(target))
                _throwTypeError(typeof target);
}

/**
 * Assert target is func type
 * 
 * @param {Any} target 
 * @throws {TypeError}
 */
function func(target) {
        notNull(target);
        if (!TYPE.isFunction(target))
                _throwTypeError(typeof target);
}

/**
 * Assert target is array type
 * 
 * @param {Any} target 
 * @throws {TypeError}
 */
function array(target) {
        notNull(target);
        if (!TYPE.isArray(target))
                _throwTypeError(typeof target);
}


/**
 * Assert target is string type
 * 
 * @param {Any} target 
 * @throws {TypeError}
 */
function string(target) {
        notNull(target);
        if (!TYPE.isString(target))
                _throwTypeError(typeof target);
}

/**
 * Assert target is in range [min,max]
 * 
 * @param {Number} target 
 * @param {Number} min 
 * @param {Number} max 
 * @throws {RangeError}
 */
function range(target, min, max) {
        number(target);
        number(min);
        number(max);

        if (target < min || target > max)
                throw new RangeError();
}

/**
 * Assert equals
 * 
 * @param {Any} self 
 * @param {Any} other 
 * @throws {Error}
 */
function equals(self, other) {
        if (self != other)
                throw new Error(`${self} not equals to ${other}`);
}

/**
 * Assert bigger than
 * 
 * @param {Number} self 
 * @param {Number} other 
 * @throws {Error}
 */
function biggerThan(self, other) {
        number(self);
        number(other);
        if (self <= other)
                throw new Error(`${self} not bigger than ${other}`);

}

/**
 * Assert bigger equals
 * 
 * @param {Number} self 
 * @param {Number} other
 * @throws {Error} 
 */
function biggerEqualsThan(self, other) {
        number(self);
        number(other);
        if (self < other)
                throw new Error(`${self} not bigger equal than ${other}`);
}

/**
 * Assert smaller than
 * 
 * @param {Number} self 
 * @param {Number} other 
 * @throws {Error}
 */
function smallThan(self, other) {
        number(self);
        number(other);
        if (self >= other)
                throw new Error(`${self} not smaller than ${other}`);
}

/**
 * Assert smaller and equals
 * 
 * @param {Number} self 
 * @param {Number} other 
 * @throws {Error}
 */
function smallEqaulsThan(self, other) {
        number(self);
        number(other);
        if (self > other)
                throw new Error(`${self} not smaller equal than ${other}`);
}

/**
 * Assert not equal
 * 
 * @param {Number} self 
 * @param {Number} other
 * @throws {Error} 
 */
function notEquals(self, other) {
        if (self == other)
                throw new Error(`${self} not smaller equals to ${other}`)
}

/**
 * Assert has property
 * 
 * @param {Object} self 
 * @param {String} property 
 * @throws {Error}
 */
function hasProperty(self, property) {
        if (!self[property])
                throw new Error(`${self} don't have property ${property}`);
}

/**
 * Assert has properties
 * 
 * @param {Object} self 
 * @param {[String]} properties 
 * @throws {Error}
 */
function hasProperties(self, properties) {
        for (const property of properties) {
                hasProperty(self, property);
        }
}

/**
 * 
 * @param {Type} type 
 */
function _throwTypeError(type) {
        throw new TypeError(`unexcepted type ${type}`);
}

exports.ASSERT = {
        notNull,
        notEmpty,
        notEquals,
        number,
        string,
        boolean,
        func,
        array,
        range,
        biggerThan,
        biggerEqualsThan,
        smallThan,
        smallEqaulsThan,
        equals,
        hasProperty,
        hasProperties
}