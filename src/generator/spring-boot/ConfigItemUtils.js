class ConfirItemUtils {

        /**
         * Get method return type
         * 1. select
         *   a) docreate
         *     1> single -> resp
         *     2> list -> list<resp>
         *     3> page -> page<resp> 
         *   b) not doCreate   
         *     1> single -> entity
         *     2> list -> list<entity>
         *     3> page -> page<entity> 
         * 2. other
         *     batch -> int or boolean
         * 
         * @param {ConfigItem} configItem 
         * @param {String} tableName 
         * @returns {String}
         */
        static getServiceReturnType(configItem, tableName) {
                if (configItem.type != "select")
                        return ReqUtils.hasBatchReq(configItem) ? "int" : "boolean";

                if (configItem.resp.doCreate) {
                        return configItem.resp.single
                                ? STR.upperFirstLetter(configItem.resp.type)
                                : configItem.resp.list ? `List<${STR.upperFirstLetter(configItem.resp.type)}>`
                                        : `PageResult<${STR.upperFirstLetter(configItem.resp.type)}>`
                }

                return configItem.resp.single
                        ? STR.upperFirstLetter(tableName)
                        : configItem.resp.list ? `List<${STR.upperFirstLetter(tableName)}>`
                                : `PageResult<${STR.upperFirstLetter(tableName)}>`

        }
}

exports.ConfirItemUtils = ConfirItemUtils;