/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-01 09:02:39
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-01 14:51:59
 */
const { FILE } = require("./../../libs/file")
const { NamingStrategy } = require("./../../libs/naming-strategy")
const { TYPE} = require("./../../libs/utils")

class ReqConfig{
        constructor(){
                this.exclude;
                this.include;
        }
}

class ConfigBase {
        constructor() {
                this.table;
                this.id;
                this.resp;
                this.parameter;
                this.req;
        }

        getColumns() {
                let columns = [];
                if (this.includes) {
                    this.includes.forEach(x=>{

                            if(TYPE.isString(x)){
                                    if(this.type=="insert"){
                                      x.required=!x.nullable;
                                    }

                                    x.required=false;
                            }else{
                                    if(x.required){

                                    }

                                    if(x.alias){

                                    }

                                   x.rawColumnName="";
                                       
                            }
                    });
                }

                if (this.joins) {

                        this.joins.forEach(join=>{
                                join.include.forEach(x=>{

                                });
                        })
                }
        }

        getColumnName(column) {
                return this.getHungary(column);
        }

        getTableName(table) {
                return this.getHungary(table);
        }

        getHungary(name) {
                return NamingStrategy.toHungary(name);
        }

        getConditions() {
                let conditions = []

                if (this.conditions) {

                }

                if (this.joins) {

                }
        }

        getOutputs() {
                if (this.type != "query")
                        return "int";

                return this.getColumns();
        }

        getParameter() {
                let output = output.getConditions();

                if (this.type == "query") {
                        if (this.joins) {
                                this.joins.forEach(x => {
                                        output.push(x.conditions);
                                });
                        }
                        return output;

                } else if (this.type == "update") {
                        output.push(this.getColumns());

                } else if (this.type == "delete") {
                        return output;
                } else if (this.type == "insert") {
                        output = this.getColumnName();
                        return output;
                }

                throw new Error("unexcepted result");

        }


        renderIfColumn(column, property) {
                return FILE.read("./templates/if.xml")
                        .replace("@property", property)
                        .replace("@content", this.renderColumn(column, ","));
        }
        renderIfProperty(property, suffix) {
                return FILE.read("./templates/if.xml")
                        .replace("@property", property)
                        .replace("@content", this.renderProperty(property, suffix));
        }

        renderIfAsign(column, property, preffix = "", suffix = "") {
                return FILE.read("./templates/if.xml")
                        .replace("@property", property)
                        .replace("@content", this.renderAsign(column, property, preffix, suffix));
        }

        renderAsign(column, property, preffix = "", suffix = "") {
                return FILE.read("./templates/asign.xml")
                        .replace("@column", column)
                        .replace("@property", property)
                        .replace("@prefix", preffix)
                        .replace("@suffix", suffix);
        }

        renderColumn(column, suffix) {
                return FILE.read("./templates/column.xml")
                        .replace("@column", column)
                        .replace("@suffix", suffix);
        }
        renderProperty(column, suffix) {
                return FILE.read("./templates/column.xml")
                        .replace("@column", column)
                        .replace("@suffix", suffix);
        }

        renderWhere(content) {

        }
}

class InsertConfig extends ConfigBase {
        constructor(table) {
                super(table);
                this.exlude = [];
        }

        build() {
                let columns = "";
                let properties = "";
                this.getColumns().forEach(x => {
                        columns += x.nullable
                                ? this.renderIfColumn(this.getColumnName(x), x.name, "", ",") :
                                this.renderColumn(this.getTableName(x), x.name, "", ",");

                        properties = x.nullable
                                ? this.re(this.getColumnName(x), x.name, "", ",") :
                                this.renderColumn(this.getTableName(x), x.name, "", ",");
                })

                return FILE.read("./templates/insert.xml")
                        .replace("@id", this.id)
                        .replace("@tableName", this.tableName)
                        .replace("@columns", columns)
                        .replace("@properties", properties);
        }
}


class Item {
        constructor() {
                this.column;
                this.alias;
                this.required;
                this.defaltValue;
                this.expression;
        }
}


class BuilderBase {
        include(items) {

        }
        exclude(items) {

        }
        conditions(items) {

        }
}

class InserConfigBuilder {

}

class DeleteConfig extends ConfigBase {
        constructor(table) {
                super(table);
                this.conditions = [];
        }

        build() {
                let conditions = "";

                this.getConditions().forEach(x => {
                        conditions += x.nullable
                                ? this.renderIfAsign(this.getColumnName(x), x.name, "and ", ",") :
                                this.renderAsign(this.getTableName(x), x.name, "and ", ",");
                });

                return FILE.read("./templates/delete.xml")
                        .replace("@id", this.id)
                        .replace("@tableName", this.tableName)
                        .replace("@conditions", conditions);
        }
}

class UpdateConfig extends ConfigBase {
        constructor() {
                this.exclude = [];
                this.notRequire = [];
                this.params;
                this.conditions = {
                        include: [],
                        notRequire: [],
                };
        }

        build() {
                let items = "";
                this.getColumns().forEach(x => {
                        items += x.nullable
                                ? this.renderIfAsign(this.getColumnName(x), x.name, "", ",") :
                                this.renderAsign(this.getTableName(x), x.name, "", ",");

                });

                let confitions = "";

                this.getConditions().forEach(x => {
                        items += x.nullable
                                ? this.renderIfAsign(this.getColumnName(x), x.name, "and ", ",") :
                                this.renderAsign(this.getTableName(x), x.name, "and ", ",");
                });

                return FILE.read("./templates/update.xml")
                        .replace("@id", this.id)
                        .replace("@tableName", this.tableName)
                        .replace("@columns", columns)
                        .replace("@properties", properties);
        }
}

class QueryConfig extends ConfigBase {
        constructor() {
                this.include = [];
                this.conditions = {
                        include: [],
                };
                this.single = false;
        }

        build() {
                let items = "";
                this.getColumns().forEach(x => {
                        items += this.renderColumn(x, ",");

                });

                let confitions = "";

                this.getConditions().forEach(x => {
                        items += x.nullable
                                ? this.renderIfAsign(this.getColumnName(x), x.name, "and ", ",") :
                                this.renderAsign(this.getTableName(x), x.name, "and ", ",");
                });

                return FILE.read("./templates/update.xml")
                        .replace("@id", this.id)
                        .replace("@tableName", this.tableName)
                        .replace("@columns", columns)
                        .replace("@properties", properties);
        }
}

class JoinQueryConfig {
        constructor() {
                this.table1;
                this.table2;
                this.include;
                this.conditions;
                this.joinType;
        }

}

class ParameterGenerator {
        generate() {

        }

        generateName() {

        }
}

class ReqGenerator {
        constructor() {
                this.parameter;
        }

        genarate() {

        }
}

let config = {
        name: "",

        _delete: [{
                condition: [{
                        id: { require: true }
                }],
        }],
        update: [{
                condition: [{
                        name: "deleteById",
                        id: { require: true }
                }],
                include: [],
        }],
        query: [{
                condition: [{
                        id: { pathVarible: true },
                        type: { reuired: true }
                }
                ],
                include: [],
                single: false,
                sort: []
        }]

}