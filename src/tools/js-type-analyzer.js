const { STR } = require("../libs");

const MATCHERS = [
        {
                name: "number",
                match: name => STR.endsWithAny(name.toLowerCase(), ["value", "order", "width","count","length","size"]),
                type: "Number"
        },
        {
                name: "object",
                match: name => STR.endsWithAny(name.toLowerCase(), ["config"]),
                generator: name => STR.upperFirstLetter(name)
        },
        {
                name: "array",
                match: name => STR.endsWithAny(name.toLowerCase(), ["s"]),
                generator: name => `[${STR.upperFirstLetter(name).substr(0, name.length - 1)}]`
        },
        {
                name: "function",
                match: name => STR.endsWithAny(name.toLowerCase(), ["callBack", "interceptor"]),
                type: "() => void"
        },
        {
                name: "string",
                match: name => true,
                type: "String"
        }
]

class JsTypeAnalyzer {
        constructor (matchers) {
                this._matchers = matchers ? matchers.concat(MATCHERS) : MATCHERS;
        }

        /**
         * Analyzer js object type
         * 
         * @param {String} name
         * @returns {String} 
         */
        analyze(name) {
                for (let matcher of this._matchers) {
                        if (matcher.match(name)) {
                                if (matcher.generator) {
                                        return matcher.generator(name);
                                }

                                return matcher.type;
                        }
                }
        }
}

exports.JsTypeAnalyzer = JsTypeAnalyzer