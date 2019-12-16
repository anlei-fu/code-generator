const { sysSystemDictionary } = require("./../db/main")
const { builder } = require("./../../../builder")

exports.sysSystemDictionaryConfig = {
        table: sysSystemDictionary,
        name: "SysSystemDictionary",
        items: [

                // add
                builder("insert", "addSysSystemDictionary").controller(controller => {
                        controller.path("/sysSystemDictionary/{id}");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // deleteById
                builder("delete", "deleteSysSystemDictionaryById").controller(controller => {
                        controller.path("/sysSystemDictionary/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }),

                // updateById
                builder("update", "updateSysSystemDictionaryById").controller(controller => {
                        controller.path("/sysSystemDictionary/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).req(req => {
                        req.doCreate()
                                .excludes("id");
                }),

                // getById
                builder("select", "getSysSystemDictionaryById").controller(controller => {
                        controller.path("/sysSystemDictionary/{id}");
                }).req(req => {
                        req.name("id")
                                .type("Integer")
                                .from("@PathVarible");
                }).resp(resp => {
                        resp.doCreate();
                }),
        ]
}