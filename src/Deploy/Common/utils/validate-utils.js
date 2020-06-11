const { TYPE } = require("./utils");

/**
 * To check there any null property of a object
 * if have return true or return false ,and if given
 * target is null also return true
 * 
 * @param {Any} target 
 * @param  {...String} params when target is a object ,represent fields of target to check
 * @returns {boolean}
 */
function anyNull(target, ...params = []) {
        if (!target) {
                return true;
        }

        if (TYPE.isArray(target)) {
                for (const item of target) {
                        if (!item)
                                return true;
                }
        }

        if (TYPE.isObject(target)) {
                for (const param of params) {
                        if (!target[param])
                                return true;
                }
        }

        return false;
}

/**
 * To check is object null
 * 
 * @param {Any} target 
 * @param {[String]?} fields  when target is @type {Object} valid, represent fields of target to check
 */
function requireNotNull(target, ...fields) {
        if (TYPE.isArray(target)) {
                target.forEach(arg => {
                        if (typeof arg == undefined)
                                throw new ReferenceError("element of array is null");
                });
        }

        if (TYPE.isObject(target)) {
                fields.forEach(field => {
                        if (!target[field])
                                throw new ReferenceError(`property.${field} of target is null`);
                });
        }

        if (!target)
                throw new ReferenceError(`given target is null`);
}

function requireNumber(value) {
        if (TYPE.isNumber(value))
                throw new TypeError(`require a number a value ,but got ${typeof value}`);
}

function requireInstanceOf(instance, type) {
        if (!instance instanceof type)
                throw new TypeError(`given instance ${typeof instance} is not from type ${type}`);
}

exports.validateUtils = {
        anyNull,
        requireNotNull,
        requireNumber,
        requireInstanceOf
}