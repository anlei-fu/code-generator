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
                        control: ""

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

        },
        Date: {

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
                        .defaultValue(
                                this.analyzeDefaultValue(field.type, field.name)
                        )
                        .type(
                                this.analyzeType(field.type, field.name)
                        )
                        .config(
                                this.analyzeConfig(field.type, field.name)
                        )
                        .build();
        }

        analyzeDefaultValue() {

        }

        analyzeType(type, name) {

        }

        analyzeConfig(type, name) {

        }

        getSelectConfig(type, name) {

        }

        getRadioGroupConfig() {

        }

        getCheckBoxConfig() {

        }

        getCheckBoxGroupConfig() {

        }

        getTimeRangeConfig() {

        }

        getTextBoxConfig() {

        }
}

exports.ControlAnalyzer = ControlAnalyzer;