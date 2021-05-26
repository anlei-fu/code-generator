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
 * First element or null
 * 
 * @param {[]} array 
 * @returns {Any}
 */
function firstOrDefault(array) {
        if (array.length > 0)
                return array[0]

        return null;
}

/**
 * Last element or null
 * 
 * @param {[]} array 
 * @returns {Any}
 */
function lastOrDefault(array) {
        if (array.length > 0)
                return array[array.length - 1]

        return null;
}

/**
 * Find first or default null
 * 
 * @param {[]} array 
 * @param {(any) => boolean} matcher 
 * @returns {Any}
 */
function findFirst(array, matcher) {
        let data = array.filter(x => matcher(x));
        if (data.length == 0)
                return null;

        return data[0];
}

/**
 * Find last element that matched
 * 
 * @param {[]} array 
 * @param {(Any)=>Boolean} matcher 
 */
function findLast(array, matcher) {
        let temp = array.reverse();
        return findFirst(array, matcher);
}

/**
 * Find first element's index that matched
 * 
 * @param {[]} array 
 * @param {(Any)=>Boolean} matcher 
 * @returns {Number}
 */
function indexOf(array, matcher, startPos = 0) {
        for (let i = startPos; i < array.length; i++) {
                if (matcher(array[i]))
                        return i;
        }

        return -1;
}

/**
 * 
 * @param {[]} array 
 * @param {Number} start 
 * @param {Number} end 
 * @returns {[]}
 */
function subArray(array, start, end) {
        let newArray = []
        for (let i = start; i <= end; i++) {
                newArray.push(array[i]);
        }
        return newArray;
}
/**
 * Split array to arrays
 * 
 * @param {[]} array 
 * @param {(Any)=>true} matcher 
 * @param {boolean} keepSplitor 
 * @returns {[[]]}
 */

function split(array, matcher, keepSplitor = false) {
        let results = [];
        let temp = [];
        array.forEach(x => {
                if (matcher(x)) {
                        if (keepSplitor)
                                temp.push(x);

                        results.push(temp);
                        temp = [];
                        return;
                }

                temp.push(x);
        })

        if (temp.length != 0)
                results.push(temp);

        return results;
}

/**
 * Find last element's index that matched
 * 
 * @param {[]} array 
 * @param {(Any)=>Boolean} matcher 
 * @returns {Number}
 */
function lastIndexOf(array, matcher) {
        for (let i = array.length - 1; i > -1; i--) {
                if (matcher(array[i]))
                        return i;
        }

        return -1;
}

/**
 * Remove element
 * 
 * @param {[]} array 
 * @param {Number} startIndex 
 * @param {Number} count 
 * @returns {[]} source array
 */
function remove(array, startIndex, count = 1) {
        array.splice(startIndex, count);
        return array;
}

/**
 * Insert element at index
* 
 * @param {[]} array 
 * @param {Number} index 
 * @param  {...any} elements 
 * @returns {[]}
 */
function insert(array, index, ...elemets) {
        array.splice(index, 0, elemets);
        return array;
}
/**
 * Has any element satisfy
 * 
 * @param {[]} array 
 * @param {(any)=>boolean} matcher 
 * @returns {boolean}
 */
function hasAny(array, matcher) {
        return array.filter(x => matcher(x)).length > 0;
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

/**
 * Pick field from array
 * 
 * @param {[]} array 
 * @param {[String]} fields 
 * @returns {[]}
 */
function pickField(array, fields) {
        let results = [];
        array.forEach(x => {
                let o = {};
                fields.forEach(f => {
                        o[f] = x[f];
                });
                results.push(o);
        })

        return results;
}

exports.ARRAY = {
        toSet,
        toMap,
        groupBy,
        distinct,
        findFirst,
        findLast,
        indexOf,
        lastIndexOf,
        insert,
        remove,
        hasAny,
        firstOrDefault,
        lastOrDefault,
        subArray,
        split,
        pickField
}