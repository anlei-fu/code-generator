/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-01 09:02:40
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 13:03:35
 */

const { STR } = require("./../../libs/str");

/**
 * Jave base types
 */
const JAVA_BASE_TYPES = new Set(["Integer", "Float", "Date", "Boolean", "String", "Long", "Double", "BigDecimal"]);

/**
 * JAVA type constant
 */
const JAVA_TYPE = {
        STRING: "String",
        INTEGER: "Integer",
        DATE: "Date",
        FLOAT: "Float",
        BOOLEN: "Boolean",
        DOUBLE: "Double",
        LONG: "Long",
        BigDecimal: "BigDecimal"
}

/**
 * Default radio matcher
 * 
 * @param {String} fieldName 
 * @returns {Boolean}
 */
const DEFAULT_RADIO_MATCHER = fieldName => STR.endsWithAny(fieldName.toLowerCase(), ["no", "email", "id", "phone", "name", "code", "id"]);

/**
 * Default money matcher
 * 
 * @param {String} fieldName 
 * @returns {Boolean}
 */
const DEFAULT_MONEY_MATCHER = fieldName => STR.endsWithAny(fieldName.toLowerCase(), ["price", "face", "cost", "balance"]);

/**
 * Default text-area matcher
 * 
 * @param {String} fieldName 
 * @returns {Boolean}
 */
const DEFAULT_TEXTAREA_MATCHER = fieldName => STR.endsWithAny(fieldName.toLowerCase(), [
        "remark",
        "descrp",
        "message",
        "msg",
        "info",
        "detail",
        "log",
        "description"
])

/**
 * DEFAULT_CREATE_USER_MATCHER
 * 
 * @param {String} fieldName
 * @returns {Boolean} 
 */
const DEFAULT_CREATE_USER_MATCHER = fieldName => STR.endsWithAny(fieldName.toLowerCase(), [
        "createuser",
        "owner",
        "creator"
])

/**
 * DEFAULT_UPDATE_USER_MATCHER
 * 
 * @param {String} fieldName
 * @returns {Boolean} 
 */
const DEFAULT_UPDATE_USER_MATCHER = fieldName => STR.endsWithAny(fieldName.toLowerCase(), [
        "updateuser",
        "updator",
        "lastupdateuser",
        "modifyuser",
        "lastmodifyuser"
])

/**
 * DEFAULT_CREATE_TIME_MATCHER
 * 
 * @param {String} fieldName 
 * @returns {Boolean}
 */
const DEFAULT_CREATE_TIME_MATCHER = fieldName => STR.endsWithAny(fieldName.toLowerCase(), [
        "createtime",
])

/**
 * DEFAULT_UPDATE_TIME_MATCHER
 * 
 * @param {String} fieldName 
 * @returns {Boolean}
 */
const DEFAULT_UPDATE_TIME_MATCHER = fieldName => STR.endsWithAny(fieldName.toLowerCase(), [
        "updatetime",
        "lastupdatetime",
        "modifytime",
        "lastmodifytime"
])

/**
 * Default edit ignore fields matcher
 * 
 * @param {String} fieldName
 * @returns {Boolean} 
 */
const DEFAULT_EDIT_IGNORE_FIELDS_MATCHER = fieldName =>
        DEFAULT_CREATE_USER_MATCHER(fieldName)
        || DEFAULT_CREATE_TIME_MATCHER(fieldName)
        || DEFAULT_UPDATE_TIME_MATCHER(fieldName)
        || DEFAULT_UPDATE_USER_MATCHER(fieldName);

/**
 * Default float type matcher
 * 
 * @param {String} fieldName 
 * @returns {Boolean}
 */
const DEFAULT_FLOAT_MATCHER = fieldName => STR.endsWithAny(fieldName.toLowerCase(), [
        "money",
        "rate",
        "fee",
        "price",
        "cost",
        'reward',
        'income',
        'profit',
        'face',
        'balance',
        'sum',
        "frozen",
        "transferin",
        "transferout"
])

/**
 * Diffirent sql operation type user fields matchers
 */
const DEFAULT_SQL_OPERATION_USER_FIELD_MATCHERS = {
        insert: {
                matcher: columnName => STR.includesAny(
                        columnName.toLowerCase(),
                        [
                                "createuser",
                                "operator",
                                "admin"
                        ]
                )
        },
        delete: {
                matcher: columnName => false
        },
        update: {
                matcher: columnName => STR.includesAny(
                        columnName.toLowerCase(),
                        [
                                "updateuser",
                                "edituser",
                                "modifyuser",
                                "admin",
                                "operator"
                        ]
                )
        },
        select: {
                matcher: columnName => false
        }
};

/**
 * Match sql user column
 * 
 * @param {String} sqlType 
 * @param {String} name 
 * @returns {Boolean}
 */
const DEFAULT_SQL_OPERATION_USER_FIELD_MATCHER = (sqlType, name) => {
        if (!DEFAULT_SQL_OPERATION_USER_FIELD_MATCHERS[sqlType])
                throw new Error(`unknown sql type "${sqlType}"`);

        return DEFAULT_SQL_OPERATION_USER_FIELD_MATCHERS[sqlType].matcher(name);
}

/**
 * Diffirent sql operation type time fields matchers
 */
const DEFAULT_SQL_OPERATION_DATE_FIELD_MATCHERS = {
        insert: {
                matcher: columnName => STR.includesAny(
                        columnName.toLowerCase(),
                        [
                                "createtime",
                                "operator",
                                "admin"
                        ]
                )
        },
        delete: {
                matcher: columnName => false
        },
        update: {
                matcher: columnName => STR.includesAny(
                        columnName.toLowerCase(),
                        [
                                "updatetime",
                                "lastupdatetime",
                                "modifytime",
                                "lasmodifytime",
                        ]
                )
        },
        select: {
                matcher: columnName => false
        }
};

/**
 * Match sql time field
 * 
 * @param {String} sqlType 
 * @param {String} name 
 * @returns {Boolean}
 */
const DEFAULT_SQL_OPERATION_DATE_FIELD_MATCHER = (sqlType, name) => {
        if (!DEFAULT_SQL_OPERATION_USER_FIELD_MATCHERS[sqlType])
                throw new Error(`unknown sql type "${sqlType}"`);

        return DEFAULT_SQL_OPERATION_DATE_FIELD_MATCHERS[sqlType].matcher(name);
}

/**
 * Default enum matchers
 */
const DEFAULT_ALL_ENUM_MATCHERS = {
        String: {
                ends: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "type",
                                "status",
                                "state",
                                "flag",
                                "mode",
                                "class",
                                "level",
                                "style"
                        ])
                },
                starts: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "can",
                                "should",
                                "is",
                                "has"
                        ])
                },
                join: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "id",
                                "uid",
                                "no"
                        ])
                }
        },
        Integer: {
                ends: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "type",
                                "status",
                                "state",
                                "flag",
                                "mode",
                                "class",
                                "level",
                                "style"
                        ])
                },
                starts: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "can",
                                "should",
                                "is",
                                "has"
                        ])
                },
                join: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "id",
                                "uid",
                                "no"
                        ])
                }
        }

}

/**
 * Default join key matcher
 */
const DEFAULT_JOIN_KEY_MATCHERS = {
        String: {
                all: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "id",
                                "uid",
                                "no"
                        ])
                },
        },
        Integer: {
                all: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "id",
                                "uid",
                                "no"
                        ])
                },
        }
}

/**
 * Default dictionary matchers
 */
const DEFAULT_DICTIONARY_MATCHERS = {
        String: {
                /**
                 * ends with matcher
                 */
                endsWith: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "type",
                                "status",
                                "state",
                                "flag",
                                "mode",
                                "class",
                                "level",
                                "style"
                        ])
                },
                /**
                 * starts with matcher
                 */
                startsWith: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "can",
                                "should",
                                "is",
                                "has",
                                "permit",
                                "allow",
                                "need",
                                "enable",
                                "disable"
                        ])
                },
        },
        Integer: {
                /**
                 * ends with matcher
                 */
                endsWith: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "type",
                                "status",
                                "state",
                                "flag",
                                "mode",
                                "class",
                                "level",
                                "style"
                        ])
                },
                /**
                 * starts with matcher
                 */
                startsWith: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "can",
                                "should",
                                "is",
                                "has",
                                "permit",
                                "allow",
                                "need",
                                "enable",
                                "disable"
                        ])
                },
        }
}

/**
 * Default relation column matchers
 */
const DEFAULT_RELATION_CANDIDATE_COLUMN_MATCHERS = {
        Id: {
                matcher: (columnName) => columnName.endsWith("Id")
                        && columnName != "Id"
        },
        Uid: {
                matcher: (columnName) => columnName.endsWith("Uid")
                        && columnName != "Uid"
        },
        No: {
                matcher: (columnName) => columnName.endsWith("No")
                        && columnName != "No"
                        && !STR.includesAny(
                                columnName.toLowerCase(),
                                [
                                        "phone",
                                        "post",
                                        "card",
                                        "id",
                                        "tel",
                                        "serial",
                                        "batch",
                                        "code"
                                ]
                        )

        }
}

/**
 * To determine is the column a relation key candidate
 * 
 * @param {String} name 
 */
const DEFAULT_RELATION_CANDIDATE_COLUMN_MATCHER = name => {
        for (let key in DEFAULT_RELATION_CANDIDATE_COLUMN_MATCHERS) {
                if (DEFAULT_RELATION_CANDIDATE_COLUMN_MATCHERS[key].matcher(name))
                        return true;
        }

        return false;
}

/**
 * Default dictionary matcher
 * 
 * @param {{type:String,name:String}} x 
 */
const DEFAULT_DICTIONARY_MATCHER = x => {
        for (let key in DEFAULT_DICTIONARY_MATCHERS) {
                if (x.type == key) {
                        for (key1 in DEFAULT_DICTIONARY_MATCHERS[key]) {
                                if (DEFAULT_DICTIONARY_MATCHERS[key][key1].match(x.name)) {
                                        return true;
                                }
                        }
                }
        }

        return false;
}

/**
 * To match join field
 * 
 * @param {{type:String,name:String}} x 
 */
const DEFAULT_JOIN_KEY_MATCHER = x => {
        for (let key in DEFAULT_JOIN_KEY_MATCHERS) {
                if (x.type == key) {
                        for (key1 in DEFAULT_JOIN_KEY_MATCHERS[key]) {
                                if (DEFAULT_JOIN_KEY_MATCHERS[key][key1].match(x.name)) {
                                        return true;
                                }
                        }
                }
        }

        return false;
}

/**
 * To match all enum field
 * 
 * @param {{type:String,name:String}} column 
 */
const DEFAULT_ALL_ENUM_MATCHER = column => {
        for (let key in DEFAULT_ALL_ENUM_MATCHERS) {
                if (column.type == key) {
                        for (key1 in DEFAULT_ALL_ENUM_MATCHERS[key]) {
                                if (DEFAULT_ALL_ENUM_MATCHERS[key][key1].match(column.name)) {
                                        return true;
                                }
                        }
                }
        }

        return false;
}


function getPossibleFormatType(javaType){

}

function getBestFormatType(javaType,name){

}

function getPossibleControlType(javaType){

}

function getBestControlType(javaType){

}

/**
 *  Convert sql type to java type
 * 
 *  @param {SqlType|String} sqlType constains name(string) and length(number) properties
 *  @param {String} name
 */
function getJavaType(sqlType, name) {

        // aready been converted
        if (typeof sqlType == "string")
                return sqlType;

        // type is correct
        if (!sqlType.name && sqlType.length)
                return new Error(`input(${sqlType}) is not a correct type!`);

        sqlType.name = sqlType.name.toLowerCase();
        if (sqlType.name.includes("char")) {
                return "String";
        } else if (sqlType.name.includes("integer")) {
                return "Long";
        } else if (sqlType.name.includes("text")) {
                return "String";
        } else if (sqlType.name.includes("float")) {
                return "Float";
        } else if (sqlType.name.includes("double")) {
                return "Double";
        } else if (sqlType.name.includes("small")) {
                return "Integer";
        } else if (sqlType.name.includes("time") || sqlType.name.includes("date")) {
                return "Date";
        } else {
                if (name && DEFAULT_FLOAT_MATCHER(name)) {
                        return "BigDecimal";
                }

                return "Integer";
        }
}

/**
 * Check is java base type
 */
function isJavaBaseType(type) {
        return JAVA_BASE_TYPES.has(type);
}

/**
 * Format java file ,each segment just one line  between
 */
function formatJavaFile(content) {
        let empty = false;
        let output = "";
        STR.splitToLines(content).forEach(x => {
                if (x.trim() == "") {
                        if (empty) {
                                return;
                        } else {
                                output += "\r\n";
                                empty = true;
                        }
                } else {
                        output += x + "\r\n";
                        empty = false;
                }
        });

        return output;
}

function getEnumKey(name) {
        return name;
}

function normalizeLabel(label) {
        if (label.includes(":"))
                label = label.split(":")[0];

        if (label.includes("："))
                label = label.split("：")[0];

        if (label.indexOf(" ") != -1)
                label = label.split(" ")[0];

        if (label.indexOf("，") != -1)
                label = label.split("，")[0];

        if (label.indexOf(",") != -1)
                label = label.split(",")[0];

        if (label.indexOf("(") != -1)
                label = label.split("(")[0];

        return STR.replace(label, {

        });
}

/****************************************************************c#*********************************************************************************** */
function getCSharpType(sqlType) {
        if (sqlType.name.toLowerCase().includes("char"))
                return "string";

        if (sqlType.name.toLowerCase().includes("date"))
                return "DateTime";

        return sqlType.length > 20 ? "decimal" : "int";
}

module.exports.COMMON_UTILS = {
        getCSharpType,
        getEnumKey,
        getJavaType,
        formatJavaFile,
        isJavaBaseType,
        normalizeLabel,
        DEFAULT_ENUM_MATCHERS: DEFAULT_ALL_ENUM_MATCHERS,
        DEFAULT_ENUM_MATCHER: DEFAULT_ALL_ENUM_MATCHER,
        DEFAULT_CREATE_TIME_MATCHER,
        DEFAULT_CREATE_USER_MATCHER,
        DEFAULT_UPDATE_TIME_MATCHER,
        DEFAULT_UPDATE_USER_MATCHER,
        DEFAULT_MONEY_MATCHER,
        DEFAULT_RADIO_MATCHER,
        DEFAULT_EDIT_IGNORE_FIELDS_MATCHER,
        DEFAULT_TEXTAREA_MATCHER,
        DEFAULT_FLOAT_MATCHER,
        DEFAULT_DICTIONARY_MATCHERS,
        DEFAULT_DICTIONARY_MATCHER,
        DEFAULT_JOIN_KEY_MATCHERS,
        DEFAULT_JOIN_KEY_MATCHER,
        DEFAULT_SQL_OPERATION_USER_FIELD_MATCHERS,
        DEFAULT_SQL_OPERATION_USER_FIELD_MATCHER,
        DEFAULT_SQL_OPERATION_DATE_FIELD_MATCHERS,
        DEFAULT_SQL_OPERATION_DATE_FIELD_MATCHER,
        DEFAULT_RELATION_CANDIDATE_COLUMN_MATCHERS,
        DEFAULT_RELATION_CANDIDATE_COLUMN_MATCHER,
        JAVA_TYPE
}
