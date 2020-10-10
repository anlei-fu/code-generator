const { STR } = require("./../../libs/str");

exports.Matcher = {
        includes: (x, y) => x.toLowerCase().includes(y.toLowerCase()),
        includesAny: (x, y) => STR.includesAny(x.toLowerCase(), y),
        includesAll: (x, y) => STR.includesAll(x.toLowerCase(), y),
        endsWith: x => x.toLowerCase().endsWith(y),
        startsWith: x => x.toLowerCase().startsWith(x),
        startsAndEndsWith: (x, y, z) => x.toLowerCase().startsWith(y) && x.toLowerCase().endsWith(z.toLowerCase()),
        lowerIncludes: (x, y) => x.toLowerCase().includes(y.toLowerCase()),
        lowerIncludesAny: (x, y) => STR.includesAny(x.toLowerCase(), y),
        lowerIncludesAll: (x, y) => STR.includesAll(x.toLowerCase(), y),
        lowerEndsWith: (x, y) => x.toLowerCase().endsWith(y),
        lowerStartsWith: x => x.toLowerCase().startsWith(x),
        lowerStartsAndEndsWith: (x, y, z) => x.toLowerCase().startsWith(y) && x.toLowerCase().endsWith(z.toLowerCase()),

        // match enum name
        isEnumName: x => (STR.endsWithAny(
                x,
                [
                        "type",
                        "status",
                        "state",
                        "class",
                        "level",
                        "style",
                        "flag"
                ]
        ) || STR.startsWithAny(
                x,
                [
                        "is",
                        "need",
                        "permit",
                        "allow",
                        "support",
                        "can",
                        "should"
                ])
        ),

        // match id field
        isIdFields: x => STR.endsWithAny(x, ["id", "no"]),

        isUpdateUser: x => STR.includesAny(x.toLowerCase(), ["update", "edit", "modify"])
                && STR.includesAny(x.toLowerCase(), ["user"])
}