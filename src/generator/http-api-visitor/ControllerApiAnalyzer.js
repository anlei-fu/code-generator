const { STR, ARRAY, FILE, DIR } = require("../../libs");
const { tokenize } = require("../../tokenization")

class ControllerApiAnalyzer {

        constructor () {
        }

        analyze(folder) {
                let configs = [];
                DIR.getFiles(folder).forEach(x => {
                        configs.push(this.generateCore(FILE.read(`${folder}/${x}`)))
                });

                return configs;
        }

        generateCore(content) {
                content = STR.removeWithMatchMany(content, [{ left: "/*", right: "*/" }, { left: "//", right: "/n" }]);
                let apiPrefix = this.getApiPrefix(content);
                let methodContents = this.splitMethod(content);
                let methods = [];

                methodContents.forEach(x => {
                        let method = this.findItem(x);
                        if (method)
                                methods.push(method);
                });
                return {
                        name: this.getClassName(content),
                        method: apiPrefix.method,
                        apiPrefix: apiPrefix.path,
                        items: methods
                }
        }

        getApiPrefix(content) {
                let requestMapping = ARRAY.firstOrDefault(STR.select(content, "@RequestMapping", "class"));
                if (!requestMapping)
                        return null;

                let tokens = tokenize(requestMapping).filter(x => x.type != "blank");
                if (tokens.length == 0)
                        return null;

                if (tokens[0].value != "(")
                        return null;

                let index = ARRAY.indexOf(tokens, x => x.value == ")");
                if (index == -1)
                        return null;

                let prefixConfig = this.parseAnnotation(ARRAY.subArray(tokens, 1, index - 1));

                let config = {};
                config.method = prefixConfig.method;

                if (prefixConfig.value)
                        config.path = prefixConfig.value;

                if (prefixConfig.path)
                        config.path = prefixConfig.path;

                return config;
        }

        /**
         * 
         * @param {String} content 
         */
        findItem(content) {

                let tokens = tokenize(content).filter(x => x.type != "blank");
                if (ARRAY.hasAny(tokens, x => x.value == "class"))
                        return null;

                let item = {};


                let result = {};
                if (content.includes("GetMapping")) {
                        item.method = "get";
                        result = this.resolveAnnotation(tokens, "GetMapping");

                } else if (content.includes("PostMapping")) {
                        item.method = "post";
                        result = this.resolveAnnotation(tokens, "PostMapping");
                } else if (content.includes("PutMapping")) {
                        item.method = "put";
                        result = this.resolveAnnotation(tokens, "PutMapping");
                } else if (content.includes("DeleteMapping")) {
                        item.method = "delete";
                        result = this.resolveAnnotation(tokens, "DeleteMapping");
                } else if (content.includes("RequestMapping")) {
                        result = this.resolveAnnotation(tokens, "RequestMapping");
                } else {
                        return null;
                }

                if (result.method)
                        item.method = result.method;
                if (result.value)
                        item.path = result.value;

                if (result.path)
                        item.path = result.path


                let index = ARRAY.indexOf(tokens, x => x.value == "public");
                if (index == -1)
                        return null;

                let k = ARRAY.indexOf(tokens, x => x.value == "(", index);
                if (k == -1)
                        return null;

                item.name = tokens[k - 1].value;
                return item;
        }

        resolveAnnotation(tokens, pattern) {
                let t = ARRAY.indexOf(tokens, x => x.value == pattern);
                if (tokens[t + 1].value != "(") {
                        return null;
                }

                let k = ARRAY.indexOf(tokens, x => x.value == ")");
                if (k == -1)
                        return null;

                return this.parseAnnotation(ARRAY.subArray(tokens, t + 2, k - 1));
        }

        /**
         * 
         * @param {[]} tokens 
         */
        parseAnnotation(tokens) {
                if (tokens.length == 1) {
                        return {
                                value: tokens[0].value
                        }
                }

                let result = {};
                let pairs = ARRAY.split(tokens, x => x.value == ",");

                pairs.forEach(item => {
                        let obj = ARRAY.split(item, x => x.value == "=");
                        result[obj[0][0].value] = obj[1][0].value;
                })

                return result;
        }

        splitMethod(content) {
                let result = [];
                let index = content.indexOf("{");
                while (true) {
                        let k = STR.firstIndexOfAny(
                                content,
                                [
                                        "@GetMapping",
                                        "@PostMapping",
                                        "@PutMapping",
                                        "@DeleteMapping",
                                        "@RequestMapping",
                                ],
                                index
                        );

                        if (k == -1) {
                                result.push(content.substr(index, content.length - index));
                                break;
                        }

                        result.push(content.substr(index, k - index));
                        index = k + 1;
                }

                return result;
        }

        getClassName(content) {
                let tokens = tokenize(content).filter(x => x.type != "blank");
                let index = ARRAY.indexOf(tokens, x => x.value == "class");
                return tokens[index + 1].value.replace("Controller","");
        }
}

exports.ControllerApiAnalyzer = ControllerApiAnalyzer