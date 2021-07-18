const { JavaUtils } = require("./JavaUtils");
const { STR } = require("../../libs");
const FormatMatchers = [
    {
        name: "money",
        matcher: (javaType, name) => {
            if (!JavaUtils.isJavaNumber(javaType))
                return false;

            return STR.endsWithAny(name.toLowerCase(), [
                "money",
                "price",
                "balance",
                "amount",
                "bill",
                "capital",
                "budget",
                "wage",
                "salary",
                "expense",
                "bond",
                "fee",
                "finance"
            ]
            )
        },
        handler: data => {
            data.format = "money";
            data.pattern = 2;
        }
    },
    {
        name: "date",
        matcher: (javaType, name) => {
            if (!JavaUtils.isJavaDate(javaType))
                return false;

                return true;
        },
        handler: data => {
            data.format = "date";
            data.pattern = "yyyy-MM-dd hh:mm:ss";
        }
    }
]
const matchers = [
    {
        name: "isPassword",
        matcher: (javaType, name) => {
            if (JavaUtils.JAVA_TYPE.STRING != javaType)
                return false;
            return STR.endsWithAny(name.toLowerCase(), ["password", "pwd"])
        }
    },
    {
        name: "isCreateTime",
        matcher: (javaType, name) => {
            if (!JavaUtils.isJavaDate(javaType))
                return false;

            return STR.endsWithAny(name.toLowerCase(), ["create_time", "create_date"])
        }
    },
    {
        name: "isCreateUser",
        matcher: (javaType, name) => {
            if (JavaUtils.JAVA_TYPE.STRING != javaType)
                return false;
            return STR.endsWithAny(name.toLowerCase(), ["create_user", "creator"])
        }
    },
    {
        name: "isUpdateTime",
        matcher: (javaType, name) => {
            if (!JavaUtils.isJavaDate(javaType))
                return false;
            return STR.endsWithAny(name.toLowerCase(), ["update_time", "molidy_time", "update_date", "modify_date"])
        }
    },
    {
        name: "isUpdateUser",
        matcher: (javaType, name) => {
            if (JavaUtils.JAVA_TYPE.STRING != javaType)
                return false;

            return STR.endsWithAny(name.toLowerCase(), ["update_user", "modify_user"])
        }
    },
    {
        name: "isEmail",
        matcher: (javaType, name) => {
            if (JavaUtils.JAVA_TYPE.STRING != javaType)
                return false;
            return STR.endsWithAny(name.toLowerCase(), ["email"])
        }
    }, {
        name: "isPhoneNo",
        matcher: (javaType, name) => {
            if (JavaUtils.JAVA_TYPE.STRING != javaType)
                return false;
            return STR.includesAny(name.toLowerCase(), ["phone"])
        }
    }, {
        name: "isTelephone",
        matcher: (javaType, name) => {
            if (JavaUtils.JAVA_TYPE.STRING != javaType)
                return false;
            return STR.endsWithAny(name.toLowerCase(), ["tel_no", "telephone"])
        }
    },
    {
        name: "isUrl",
        matcher: (javaType, name) => {
            if (JavaUtils.JAVA_TYPE.STRING != javaType)
                return false;
            return STR.endsWithAny(name.toLowerCase(), ["url"])
        }
    },
    {
        name: "isImageUrl",
        matcher: (javaType, name) => {
            if (JavaUtils.JAVA_TYPE.STRING != javaType)
                return false;

            return STR.endsWithAny(name.toLowerCase(), ["image", "picture", "photo"])
        }
    },
    {
        name: "isFileUrl",
        matcher: (javaType, name) => {
            if (JavaUtils.JAVA_TYPE.STRING != javaType)
                return false;
            return STR.endsWithAny(name.toLowerCase(), ["file_url"])
        }
    },
    {
        name: "isPostCode",
        matcher: (javaType, name) => {
            if (JavaUtils.JAVA_TYPE.STRING != javaType)
                return false;
            return STR.endsWithAny(name.toLowerCase(), ["post_code"])
        }
    },
    {
        name: "isIdNo",
        matcher: (javaType, name) => {
            if (JavaUtils.JAVA_TYPE.STRING != javaType)
                return false;
            return STR.endsWithAny(name.toLowerCase(), ["id_no","id_card_no"])
        }
    },
    {
        name: "sortable",
        matcher: (javaType, name) => {

            if (JavaUtils.isJavaNumber(javaType) || JavaUtils.isJavaDate(javaType))
                return true;

            if (JavaUtils.JAVA_TYPE.STRING == javaType) {
                return STR.endsWithAny(name.toLowerCase(), ["no", "id", "name"])
            }

            return false;

        }
    },
]



function analyzeColumn(javaType, name) {
    if (!javaType || !name)
        return;

    matchers.forEach(x => {
        if (x.matcher(javaType, name)) {
            this[x.name] = true;
        }
    })

    FormatMatchers.forEach(x => {
        if (x.matcher(javaType, name)) {
            x.handler(this);
        }
    })
}

exports.columnAnalyzer = analyzeColumn