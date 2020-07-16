const { Control, ControlBuilder } = require("./builders/Control")
const { Utils } = require("./Utils");
const { STR } = require("./../../libs/str")


const CONTROL_ANALYZE_CONFIG = {
        Integer: {
                enum: {
                        matcher: column => STR.endsWithAny(
                                column.toLowerCase(),
                                [
                                        "type",
                                        "status",
                                        "state",
                                        "class",
                                        "level",
                                        "style"
                                ]
                        ),
                        control: "select"

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
                        control: "select"
                },
                defaultValue:{
                        matcher:true,
                        control:"radioGroup,"
                }
        },
        String: {
               default:{
                       matcher:name=>true,
                       control:"radioGroup"
               }
        },
        Date: {
                default:{
                        matcher:name=>true,
                        control:"timeRange"
                }
        }
}

class ControlAnalyzer {
        constructor () {

        }

        analyze(req) {
                let items = [];
                req.fields.forEach(field => {
                        items.push(this.analyzeField(field));
                });

                return items;
        }

        analyzeField(field) {
                return new ControlBuilder()
                        .name(field.name)
                        .label(Utils.analyzeLabel(field.description, field.name))
                        .type(
                                this.analyzeType(field.type, field.name)
                        )
                        .config(
                                this.analyzeConfig(field.type, field.name)
                        )
                        .build();
        }

        analyzeType(type, name) {
               let type =this.analyzeType(type,name);
               switch(type){
                       case "select":
                               return getSelection(name);
                       case "radioGroup":
                               return this.getRadioGroupConfig(name);
                        case "timeRange":
                                return this.getTimeRangeConfig(name);
                        case "plainText":
                           return this.getTextBoxConfig(name);
               }
        }

        analyzeConfig(name) {
              return {
                      model:name,
                      cache:name
              }
        }

        getSelectConfig(name) {
                return {
                        model:name,
                        cache:name
                }
        }

        getRadioGroupConfig() {
                return {
                        model:name,
                        key:name
                }
        }

        getCheckBoxConfig() {

        }

        getCheckBoxGroupConfig() {

        }

        getTimeRangeConfig() {
                return {
                        model:timeRange,
                        key:name
                }
        }

        getTextBoxConfig() {
                return {
                        model:name,
                }
        }
}

exports.ControlAnalyzer = ControlAnalyzer;