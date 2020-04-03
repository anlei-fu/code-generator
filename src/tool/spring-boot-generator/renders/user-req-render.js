const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");
const { getJavaType } = require("./../utils")

const USER_REQ_RENDER = new SimpleRender({}, `${__dirname}/templates/user-req.js`);

function renderUserReq(userColumn) {
        let model = {
                name: userColumn.name,
                type: getJavaType(userColumn.type)
        }
        return USER_REQ_RENDER.renderTemplate(model);
}

exports.renderUserReq = renderUserReq;