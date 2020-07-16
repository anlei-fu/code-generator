const { STR } = require("./../../libs/str")
const FormatAnalyzerConfig = {
        Interger: {
                flag: {
                        matcher: name => STR.endsWithAny(
                                name.toLowerCase(),
                                [
                                        "type",
                                        "status",
                                        "state",
                                        "class",
                                        "level",
                                        "style"
                                ]
                        ),
                        generaor: name => { return { type: "enum", pattern: name } }
                },
                boolean: {
                        matcher: name => STR.startsWithAny(
                                name.toLowerCase(),
                                [
                                        "is",
                                        "has",
                                        "need",
                                        "support",
                                        "permit",
                                        "allow",
                                        "enable",
                                        "disable"
                                ]
                        ),
                        generaor: name => {
                                return { type: "enum", pattern: "booleanFlag" };
                        }
                },

                currency: {
                        matcher: name => STR.endsWithAny(
                                name.toLowerCase(),
                                [
                                        "face",
                                        "price",
                                        "money",
                                        "fee"
                                ]
                        ),
                        generaor: name => {
                                return { type: "money" }
                        }
                }

        },
        String: {

        },

        Float: {
                currency: {
                        matcher: name => STR.endsWithAny(
                                name.toLowerCase(),
                                [
                                        "face",
                                        "price",
                                        "money",
                                        "fee"
                                ]
                        ),
                        generaor: name => {
                                return { type: "money" }
                        }
                }
        },
        Date: {
                all: {
                        matcher: name => true,
                        generator: name => {
                                return { type: "date", pattern: "yyyy-MM-dd HH:mm:ss" }
                        }

                }
        }
}

class FormatAnalyzer {
        constructor(){
                this._config=FormatAnalyzerConfig;
        }
        analyze(type, name) {

        }
}

exports.FormatAnalyzer = FormatAnalyzer;