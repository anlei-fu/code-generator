const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")
const VALIDATE_RENDER=new SimpleRender({});
VALIDATE_RENDER.setTempalte("    @validate\r\n");

function renderValidate(validate){
        return VALIDATE_RENDER.renderTemplate({validate});
}

exports.renderValidate=renderValidate;