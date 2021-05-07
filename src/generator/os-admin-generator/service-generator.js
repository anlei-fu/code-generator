const { SimpleRender } = require("../common/renders/SimplePatterRender");
const { COMMON_UTILS } = require("../common");
const { STR, NamingStrategy } = require("./../../libs/");

const SERVICE_RENDER = new SimpleRender({}, `${__dirname}/template/service.java`);

class ServiceGenerator {
        generate(table) {
                let pk = this._findPkColumn(table);
                let pkName = NamingStrategy.toCamel(pk.rawName);
                let pkUpperName = STR.upperFirstLetter(pkName);
                let pkType = COMMON_UTILS.getJavaType(pk.type);
                let name = STR.upperFirstLetter(table.name);
                let fullName = name;
                name = name.substr(2, name.length - 2);
                let sname = NamingStrategy.toCamel(name);
                let description = table.description;

                return SERVICE_RENDER.renderTemplate({
                        sname,
                        name,
                        pkName,
                        pkType,
                        pkUpperName,
                        description,
                        fullName,
                        pkRawName: pk.rawName.toLowerCase()
                })
        }

        _findPkColumn(table) {
                for (let key in table.columns) {
                        if (table.columns[key].isPk)
                                return table.columns[key];
                }
        }
}

exports.ServiceGenerator = ServiceGenerator;