const { SimpleRender } = require("../common/renders/SimplePatterRender");
const { getJavaType } = require("../spring-boot/utils");
const { STR, NamingStrategy } = require("./../../libs/");

const SERVICE_RENDER = new SimpleRender({}, `${__dirname}/template/controller.java`);

class ControllerGenerator {
        generate(table) {
                let pk = this._findPkColumn(table);
                console.log(table.name);
                let pkName = NamingStrategy.toCamel(pk.rawName);
                let pkUpperName = STR.upperFirstLetter(pkName);
                let pkType = getJavaType(pk.type);
                let name = STR.upperFirstLetter(table.name);
                let fullName =name;
                name =name.substr(2,name.length-2);
                let sname = NamingStrategy.toCamel(table.rawName);
                let description = table.description;

                return SERVICE_RENDER.renderTemplate({
                        sname,
                        name,
                        pkName,
                        pkType,
                        pkUpperName,
                        description,
                        fullName
                })
        }

        _findPkColumn(table) {
                for (let key in table.columns) {
                        if (table.columns[key].isPk)
                                return table.columns[key];
                }
        }
}

exports.ControllerGenerator = ControllerGenerator;