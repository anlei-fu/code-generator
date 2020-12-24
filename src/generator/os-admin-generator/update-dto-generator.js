const { SimpleRender } = require("../common/renders/SimplePatterRender");
const { STR } = require("../../libs");

const DTO_RENDER = new SimpleRender({}, `${__dirname}/template/update-dto.java`);
class DtoGenerator {

        generate(table) {
                let name = STR.upperFirstLetter(table.name);
                name =name.substr(2,name.length-2);
                return DTO_RENDER.renderTemplate({ name });
        }
}

exports.DtoGenerator = DtoGenerator