const { ApiBuilder } = require("./builders/ApiBuilder");
class ApiAnalyzer {
        analyze(configGroup) {
                apis = {};
                configGroup.items.forEach(item => {
                        this.apis[item.id] = new ApiBuilder()
                                .method(item.controller.method)
                                .url(item.controller.path)
                                .build();
                });

                return apis;
        }
}

exports.ApiAnalyzer = ApiAnalyzer;