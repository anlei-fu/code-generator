exports.Utils = {
        analyzeLabel: (description, name) =>
                description.includes(":") ?
                        description.split(":")[0] : name
}