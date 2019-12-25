

const addExcludes = {
        int: {
                id: {
                        matcher: x => x == "Id",
                }
        },
        string: {
                user: {
                        matcher: x => {
                                let low = x.toLowerCase();
                                if (!low.includes("user"))
                                        return false;

                                return low.indexOf("create") || low.indexOf("update") || low.indexOf("edit");
                        }
                },
        },
        DateTime: {
                time: {
                        matcher: x => {
                                let low = x.toLowerCase();
                                if (!low.includes("time"))
                                        return false;

                                return low.indexOf("create") || low.indexOf("update") || low.indexOf("edit");
                        }
                }
        }
}




class AddAnalyzer {
        constructor() {
                this.addExcludes = addExcludes;
        }
        shouldBeCandidate(column) {
                if (!this.addExcludes[column.type])
                        return true;

                for (const c in this.addExcludes[column.type]) {
                        let match = this.addExcludes[column.type][c].matcher
                                ? this.addExcludes[column.type][c].matcher(column.name)
                                : DEFAULT_MATCHER(column.name, c);

                        if (match)
                                return false;
                }

                return true;
        }
}
const selects = {
        int: {
                Status: {
                        matcher: x => x.endsWith("Status"),
                        text: "Name",
                        value: "Value",
                        defaultText: "--请选择--",
                        service: "SystemDictionary",
                },
                Type: {
                        matcher: x => x.endsWith("Type"),
                        text: "Name",
                        defaultText: "--请选择--",
                        service: "SystemDictionary",
                },
                State: {
                        matcher: x => x.endsWith("State"),
                        text: "Name",
                        value: "Value",
                        defaultText: "--请选择--",
                        service: "SystemDictionary",
                },
                Id: {
                        matcher: x => x.endsWith("Id"),
                        generator: x => {
                                return {
                                        service: x.replace("Id", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("Id", "Name"),
                                        value: x,
                                }
                        }
                }
        },
        string: {
                CityNo: {
                        generator: x => {
                                return {
                                        service: x.replace("No", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("No", "Name"),
                                        value: "No",
                                }
                        }
                },
                ProvinceNo: {
                        generator: x => {
                                return {
                                        service: x.replace("No", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("No", "Name"),
                                        value: "No",
                                }
                        }
                },
                ChannelId: {
                        generator: x => {
                                return {
                                        service: x.replace("Id", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("Id", "Name"),
                                        value: "Id",
                                }
                        }
                },
                ChannelNo: {
                        generator: x => {
                                return {
                                        service: x.replace("No", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("No", "Name"),
                                        value: "No",
                                }
                        }
                },
                ProductId: {
                        generator: x => {
                                return {
                                        service: x.replace("Id", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("Id", "Name"),
                                        value: "Id",
                                }
                        }
                }
                ,
                ProductNo: {
                        generator: x => {
                                return {
                                        service: x.replace("No", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("No", "Name"),
                                        value: "No",
                                }
                        }
                },
                Id: {
                        matcher: x => x.endsWith("Id"),
                        generator: x => {
                                return {
                                        service: x.replace("Id", ""),
                                        defaultText: "--请选择--",
                                        text: x.replace("Id", "Name"),
                                        value: "Id",
                                }
                        }
                }
        }
}

const stringIncludes = {
        string: {
                no: {
                        matcher: x => x.toLowerCase().endsWith("no"),
                },
                email: {
                        matcher: x => x.toLowerCase().includes("email"),
                },
                phone: {
                        matcher: x => x.toLowerCase().includes("phone"),
                },
                mobile: {
                        matcher: x => x.toLowerCase().includes("mobile"),
                },
                order: {
                        matcher: x => x.toLowerCase().includes("order"),
                },
                idcardno: {
                        matcher: x => x.toLowerCase().includes("idcardno"),
                }
        },
}

const intExcludes = {
        balance: {

        },
        count: {

        },
        amount: {

        },
        price: {

        },
        total: {

        }
}

class SelectAnalyzer {
        constructor() {
                this.candidates = selects;
                this.stringIncludes = stringIncludes;
                this.intExcludes = intExcludes;
        }

        shouldBeCandidate(column) {
                if (column.type == "DateTime")
                        return false;

                if (column.type == "int") {
                        for (const c in this.intExcludes) {
                                let match = this.intExcludes[c].matcher
                                        ? this.intExcludes[c].matcher(column.name)
                                        : DEFAULT_MATCHER(column.name, c);
                                if (match)
                                        return false;
                        }
                }

                if (column.type == "string") {
                        for (const c in this.stringIncludes["string"]) {
                                let match = this.stringIncludes["string"][c].matcher
                                        ? this.stringIncludes["string"][c].matcher(column.name)
                                        : DEFAULT_MATCHER(column.name, c);
                                if (match)
                                        return true;
                        }

                        return false;
                }

                return true;
        }
}
const textArea = {
        remark: {
                matcher: x => x.toLowerCase().includes("remark"),
        },
        description: {
                matcher: x => x.toLowerCase().includes("descrp"),
        },
        message: {
                matcher: x => x.toLowerCase().includes("message"),
        },
        msg: {
                matcher: x => x.toLowerCase().includes("msg"),
        },
        info: {
                matcher: x => x.toLowerCase().includes("info"),
        }
}

const { NamingStrategy } = require("./../../libs/naming-strategy");

class ColumnAnalyzer {

        constructor() {
                this._controlAnalyzer = new ControlAnlyzer();
                this._index = 1;
                this._textArea = textArea;
        }

        analyzeColumn(column) {
                let output = {

                }
                if (this._controlAnalyzer.shouldBeSelect(column)) {
                        output.select = this._controlAnalyzer.getSelectConfig(column);
                        if (!output.select.service) {
                                console.log("found" + column.name);
                                console.log(output.select);
                        }
                        output.lable = column.description;
                        output.join = this.makeJoin(column, output.select.service);
                        output.gettter = `.GetDataValue("${column.name}Name")`;
                        output.column = `t${this._index}.NAME ${column.name}Name`;
                } else {
                        output.gettter = `.${column.name}`;
                        output.column = `t.${NamingStrategy.toHungary(column.name).toUpperCase()}`;
                        output.text = {
                                lable: column.description,
                                name: column.name,
                                textArea: this.isTextArea(column.name)
                        }
                }

                return output;
        }

        isTextArea(name) {
                for (const c in this._textArea) {
                        let match = this._textArea[c].matcher ?
                                this._textArea[c].matcher(name) :
                                DEFAULT_MATCHER(name, c);
                        if (match)
                                return true;
                }

                return false;
        }

        makeJoin(column, service) {
                if (service == "SystemDictionary") {
                        return `LEFT JOIN ${NamingStrategy.toHungary(service).toUpperCase()} t${++this._index}`
                                + ` ON t.${NamingStrategy.toHungary(column.name).toUpperCase()} = t${this._index}.VALUE`
                                + ` AND t${this._index}.TYPE = '${column.name.toUpperCase()}'`;
                } else {
                        let suffix = column.name.includes("Id") ? "Id" : "No";
                        return `LEFT JOIN ${NamingStrategy.toHungary(service).toUpperCase()} t${++this._index}`
                                + ` ON t.${NamingStrategy.toHungary(column.name).toUpperCase()} = t${this._index}.${suffix}`;
                }
        }
}


const { SystemDictionary } = require("./resource/select")
const DEFAULT_MATCHER = (name, pattern) => name.toLowerCase().includes(pattern.toLowerCase());
class ControlAnlyzer {
        constructor() {
                this.selects = selects;
        }

        shouldBeSelect(column) {
                if (!selects[column.type])
                        return false;

                for (const c in SystemDictionary) {
                        if (c.indexOf(column.name) != -1)
                                return true;
                }


                for (const item in this.selects[column.type]) {

                        let match = this.selects[column.type][item].matcher
                                ? this.selects[column.type][item].matcher(column.name) :
                                DEFAULT_MATCHER(column.name, item);
                        if (match)
                                return true;
                }

                return false;
        }

        getSelectConfig(column) {

                for (const c in SystemDictionary) {
                        if (c.indexOf(column.name) != -1)
                                return SystemDictionary[c];
                }

                for (const item in this.selects[column.type]) {

                        let match = this.selects[column.type][item].matcher
                                ? this.selects[column.type][item].matcher(column.name) :
                                DEFAULT_MATCHER(column.name, item);
                        if (match)
                                return this.selects[column.type][item].generator ?
                                        this.selects[column.type][item].generator(column.name) :
                                        this.selects[column.type][item];
                }
        }
}


const create_default_values = {
        string: {
                user: {
                        matcher: x => x.toLowerCase().includes("user") && x.toLowerCase().includes("create"),
                        generator: x => {
                                return `entity.${x} = LoginStatus.UserName`;

                        }
                }
        },
        DateTime: {
                time: {
                        matcher: x => x.toLowerCase().includes("time") && x.toLowerCase().includes("create"),
                        generator: x => {
                                return `entity.${x} = DateTime.Now()`;
                        }
                }
        }
}


const update_default_values = {
        string: {
                user: {
                        matcher: x => {
                                if (!x.toLowerCase().includes("user"))
                                        return false;

                                return x.toLowerCase().includes("update") || x.toLowerCase().includes("edit");
                        },
                        generator: x => {
                                return `entity.${x} = LoginStatus.UserName`;
                        }
                }
        },
        DateTime: {
                time: {
                        matcher: x => {
                                if (!x.toLowerCase().includes("time"))
                                        return false;

                                return x.toLowerCase().includes("update") || x.toLowerCase().includes("edit");
                        },
                        generator: x => {
                                return `entity.${x} = DateTime.Now()`;
                        }
                }
        }
}

const { OBJECT } = require("./../../libs/utils")
class AutoSetValueColumnAnalyzer {

        constructor() {
                this.updateDefaultValues = update_default_values;
                this.createDefaultValues = create_default_values;
        }

        analyzeTable(table) {
                let ret = {
                        updates: [],
                        creates: [],
                };

                OBJECT.forEach(table.columns, (key, value) => {
                        for (const c in this.createDefaultValues) {
                                let match = this.createDefaultValues[c].matcher
                                        ? this.createDefaultValues[c].matcher(value.name)
                                        : DEFAULT_MATCHER(value.name, c);
                                if (match) {
                                        let item = {
                                                name: value.name,
                                                expression: this.createDefaultValues[c].generator(value.name),
                                        }

                                        ret.creates.push(item);
                                        break;
                                }
                        }

                        for (const c in this.updateDefaultValues) {
                                let match = this.updateDefaultValues[c].matcher
                                        ? this.updateDefaultValues[c].matcher(value.name)
                                        : DEFAULT_MATCHER(value.name, c);
                                if (match) {
                                        let item = {
                                                name: value.name,
                                                expression: this.updateDefaultValues[c].generator(value.name),
                                        }

                                        ret.updates.push(item);
                                        break;
                                }
                        }
                });

                return ret;
        }
}

module.exports = {
        AddAnalyzer,
        SelectAnalyzer,
        ControlAnlyzer,
        ColumnAnalyzer,
        AutoSetValueColumnAnalyzer
}