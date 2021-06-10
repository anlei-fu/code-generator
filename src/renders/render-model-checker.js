const { TYPE } = require("./../libs")

function checkModel(source, target) {
        Object.keys(source).forEach(x => {
                if (target[x] === undefined)
                        throw new Error(`property(${x}) is not defined of target（${target})`);

                if (TYPE.isObject(source[x])) {
                        if (!TYPE.isObject(target[x]))
                                throw new Error(`property(${x}) is not an object of target (${target})`);

                        checkModel(source[x], target[x]);
                } else if (TYPE.isArray(source[x])) {
                        if (!TYPE.isArray(target[x]))
                                throw new Error(`property(${x}) is not an array of target (${target})`);

                        if (source[x].length == 0)
                                return;

                        if (TYPE.isObject(source[x][0])) {
                                target[x].forEach(element => {
                                        checkModel(source[element][0], element);
                                });
                        }

                }
        })
}

module.exports.checkModel = checkModel;