const { ControlAnalyzer } = require("./ControlAnalyzer");
const { ListPageBuilder } = require("./builders/ListPage");
const { ColumnAnalyzer } = require("./ColumnAnalyzer");

class ListPageAnalyzer {
        constructor () {
                this._columnAnalyzer = new ColumnAnalyzer();
                this._controlAnalyzer = new ControlAnalyzer();
        }

        analyze(confiItem, configGroup) {
                return new ListPageBuilder()
                        .columns(
                                this._columnAnalyzer.analyze(confiItem.resp)
                        )
                        .controls(
                                this._controlAnalyzer.analyze(confiItem.reqs)
                        )
                        ._delete(
                                this.analyeSuporMethod(
                                        configGroup,
                                        "delete",
                                        "delete"
                                )
                        )
                        .deleteBatch(
                                this.analyeSuporMethod(
                                        configGroup,
                                        "delete",
                                        "Batch"
                                )
                        )
                        .update(
                                this.analyeSuporMethod(
                                        configGroup,
                                        "update",
                                        "update"
                                )
                        )
                        .updateBatch(
                                this.analyeSuporMethod(
                                        configGroup,
                                        "update",
                                        "Batch"
                                )
                        )
                        .add(
                                this.analyeSuporMethod(
                                        configGroup,
                                        "insert",
                                        "add"
                                )
                        )
                        .addBatch(
                                this.analyeSuporMethod(
                                        configGroup,
                                        "insert",
                                        "batch"
                                )
                        )
                        .name(configGroup.name)
                        .build();
        }

        /**
         * 
         * @param {ConfigGroup} configGroup 
         * @param {String} type 
         * @param {(String)=>boolean} key 
         */
        analyeSuporMethod(configGroup, type, key) {
                for (const item of configGroup.items) {
                        if (item.type == type) {
                                if (typeof key == "string" && item.id.includes(key)) {
                                        return true;
                                } else {
                                        if (key(item.id))
                                                return true;
                                }
                        }
                }

                return false;
        }
}

exports.ListPageAnalyzer = ListPageAnalyzer;