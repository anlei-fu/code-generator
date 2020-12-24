const { SimpleRender } = require("../common/renders/SimplePatterRender");
const {STR,NamingStrategy} =require("./../../libs/");
const { getJavaType } = require("../spring-boot/utils");

const TABLE_RENDER = new SimpleRender({}, `${__dirname}/template/table.java`);
const FIELD_GENERATOR = new SimpleRender({}, `${__dirname}/template/field.java`);
const PK_FIELD_GENERATOR = new SimpleRender({}, `${__dirname}/template/pk-field.java`);
class GenerateEnity {
        generate(table) {
                let description = table.description;
                let name = STR.upperFirstLetter(table.name);
                let raw_name = table.rawName;
                let fields = "";
                let date="import java.util.Date;"

                Object.keys(table.columns).forEach(x => {
                        fields += this._generateColumn(table.columns[x],raw_name);
                });

                return TABLE_RENDER.renderTemplate({
                        name,
                        description,
                        raw_name,
                        fields,
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
                let type = getJavaType(column.type);
                let name = NamingStrategy.toCamel(column.rawName);
                let description = column.description;
                if (column.isPk) {
                        let seq = `SEQ_${tableRawName}_ID`;
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