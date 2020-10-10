const { STR } = require("./../../libs/str");

module.exports = {
        LOWER_INCLUDES_MATCHER: (x, y) => x.toLowerCase().includes(y.toLowerCase()),
        LOWER_INCLUDES_ANY_MATCHER: (x, y) => STR.includesAny(x.toLowerCase(), y),
        LOWER_INCLUDES_ALL_MATCHER: (x, y) => STR.includesAll(x.toLowerCase(), y),
        LOWER_ENDS_WITH_MATCHER: x => x.toLowerCase().endsWith(y),
        LOWER_STARTS_WITH: x => x.toLowerCase().startsWith(x),
        LOWER_STARTS_AND_ENDS_WITH_MATCHER: (x, y, z) => x.toLowerCase().startsWith(y) && x.toLowerCase().endsWith(z.toLowerCase()),

     
}