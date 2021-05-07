const { SimpleRender } = require("../common/renders/SimplePatterRender");
const {STR,NamingStrategy} =require("../../libs");
const { COMMON_UTILS } = require("./../common/utils");

const TABLE_RENDER = new SimpleRender({}, `${__dirname}/template/table.java`);
const FIELD_GENERATOR = new SimpleRender({}, `${__dirname}/template/field.java`);
const PK_FIELD_GENERATOR = new SimpleRender({}, `${__dirname}/template/pk-field.java`);
class GenerateEnity {
        generate(table) {
                let description = table.description;
                let name = STR.upperFirstLetter(STR.removeRange(table.name,0,2));
                let raw_name = table.rawName;
                let fields = "";
                let date="import java.util.Date;"
                let time =new Date().toLocaleString();

                Object.keys(table.columns).forEach(x => {
                        fields += this._generateColumn(table.columns[x],raw_name);
                });

                return TABLE_RENDER.renderTemplate({
                        name,
                        description,
                        raw_name,
                        fields,
                        time,
                        date:this._hasDate(table)?date:""
                });
        }

        _hasDate(table){
                for(let key in table.columns){
                        if(table.columns[key].type.name.includes("date"))
                           return true;
                }
                
                return false;
        }

        _generateColumn(column, tableRawName) {
                let type =COMMON_UTILS.getJavaType(column.type,column.name);
                let name = NamingStrategy.toCamel(column.rawName);
                let description = column.description;
                if (column.isPk) {
                        let seq = `SEQ_${STR.removeRange(tableRawName,0,3)}_ID`;
                        return PK_FIELD_GENERATOR.renderTemplate({
                                name,
                                type,
                                description,
                                seq
                        });
                } else {
                        return FIELD_GENERATOR.renderTemplate({
                                name,
                                type,
                                description,
                        })
                }
        }
}

exports.GenerateEnity = GenerateEnity