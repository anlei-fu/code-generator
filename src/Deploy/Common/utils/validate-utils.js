function anyNull(target, ...params) {
        if (!target) {

        }

        for (const param of params) {
                if (!target[param])
                        break;
        }

        return false;
}

function requireNotNull(...args) {
        args.forEach(arg => {
                if (typeof arg == undefined)
                        throw new Error("argument can not be null");
        });
}

exports.validateUtils = {
        anyNull,
        requireNotNull
}