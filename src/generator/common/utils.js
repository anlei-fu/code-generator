/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-01 09:02:40
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-17 13:03:35
 */

const { STR } = require("./../../libs/str");

const JAVA_BASE_TYPES = new Set(["Integer", "Float", "Date", "Boolean", "String", "Long", "Double"]);

/**
 * JAVA type constant
 */
const JAVA_TYPE = {
        STRING: "String",
        INTEGER: "Integer",
        DATE: "Date"
}

/**
 * Default radio matcher
 * 
 * @param {string} x 
 */
const DEFAULT_RADIO_MATCHER = x => STR.endsWithAny(x.toLowerCase(), ["no", "email", "id", "phone", "name","code","id"]);

/**
 * Default money matcher
 * 
 * @param {String} x 
 */
const DEFAULT_MONEY_MATCHER = x => STR.endsWithAny(x.toLowerCase(), ["price", "face", "cost", "balance"]);

/**
 * 
 * @param {string} x 
 */
const DEFAULT_TEXTAREA_MATCHER = x => STR.endsWithAny(x.toLowerCase(), [
        "remark",
        "descrp",
        "message",
        "msg",
        "info",
        "detail",
        "log",
])

/**
 * DEFAULT_CREATE_USER_MATCHER
 * 
 * @param {string} x 
 */
const DEFAULT_CREATE_USER_MATCHER = x => STR.endsWithAny(x.toLowerCase(), [
        "createuser",
        "owner",
])

/**
 * DEFAULT_UPDATE_USER_MATCHER
 * 
 * @param {string} x 
 */
const DEFAULT_UPDATE_USER_MATCHER = x => STR.endsWithAny(x.toLowerCase(), [
        "updateuser",
        "lastupdateuser",
        "modifyuser",
        "lastmodifyuser"
])

/**
 * DEFAULT_CREATE_TIME_MATCHER
 * 
 * @param {string} x 
 */
const DEFAULT_CREATE_TIME_MATCHER = x => STR.endsWithAny(x.toLowerCase(), [
        "createtime",
])

/**
 * DEFAULT_UPDATE_TIME_MATCHER
 * 
 * @param {string} x 
 */
const DEFAULT_UPDATE_TIME_MATCHER = x => STR.endsWithAny(x.toLowerCase(), [
        "updatetime",
        "lastupdatetime",
        "modifytime",
        "lastmodifytime"
])

const DEFAULT_EDIT_IGNORE_FIELDS_MATCHER = x => STR.endsWithAny(x.toLowerCase(), [
        "updatetime",
        "modifytime",
        "updateuser",
        "createuser",
        "createtime"
])

const DEFAULT_FLOAT_MATCHER = x => STR.endsWithAny(x.toLowerCase(), [
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
 * Default enum matchers
 */
const DEFAULT_ENUM_MATCHERS = {
        String: {
                type: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "type",
                                "status",
                                "state"
                        ])
                },
                all: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "no",
                        ]) && STR.includesAny(x.toLowerCase(), ["channel","product","term","plat","agent"])
                },
        },
        Integer: {
                status: {
                        match: x => STR.endsWithAny(x.toLowerCase(), [
                                "type",
                                "status",
                                "state",
                                "id",
                                "flag",
                                "mode"
                        ]) && !STR.includesAny(x.toLowerCase(), ["record","account","advertiser","app"])
                }
        }

}

/**
 *  Convert sql type to java type
 * 
 *  @param {SqlType} sqlType constains name(string) and length(number) properties
 */
function getJavaType(sqlType,name) {

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
                if(DEFAULT_FLOAT_MATCHER(name)){
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
        DEFAULT_ENUM_MATCHERS,
        DEFAULT_CREATE_TIME_MATCHER,
        DEFAULT_CREATE_USER_MATCHER,
        DEFAULT_UPDATE_TIME_MATCHER,
        DEFAULT_UPDATE_USER_MATCHER,
        DEFAULT_MONEY_MATCHER,
        DEFAULT_RADIO_MATCHER,
        DEFAULT_EDIT_IGNORE_FIELDS_MATCHER,
        DEFAULT_TEXTAREA_MATCHER,
        DEFAULT_FLOAT_MATCHER,
        JAVA_TYPE
}
