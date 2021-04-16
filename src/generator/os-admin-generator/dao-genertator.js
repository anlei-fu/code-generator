const { SimpleRender } = require("../common/renders/SimplePatterRender");
const { STR } = require("./../../libs/");

const DAO_RENDER = new SimpleRender({}, `${__dirname}/template/dao.java`);

class DaoGenerator {
      generate(table) {
            let name = STR.upperFirstLetter(table.name);
            name = name.substr(2, name.length - 2);
            return DAO_RENDER.renderTemplate({ name });
      }
}

exports.DaoGenerator = DaoGenerator;