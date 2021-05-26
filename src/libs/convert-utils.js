function toNumber(value) {
        return parseFloat(value);
}

function toJsonString(value = {}, beautiful) {
        return beautiful
                ? JSON.stringify(value, null, "  ") : JSON.stringify(value);
}

function toString(value) {
        return value + "";
}

function toArray(value) {
        let ret = [];
        Object.keys(value).forEach(key => {
                ret.push[value[key]];
        });

        return ret;
}

exports.ConvertUtils = {
        toNumber,
        toJsonString,
        toString,
        toArray
}