const { SimpleRender } = require("./../../common/renders/SimplePatterRender");
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