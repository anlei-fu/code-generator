const { SimpleRender } = require("./../../common/renders");
const { COMMON_UTILS } = require("./../../common")

const USER_REQ_RENDER = new SimpleRender({}, `${__dirname}/templates/user-req.js`);

function renderUserReq(userColumn) {
        let model = {
                name: userColumn.name,
                type: COMMON_UTILS.getJavaType(userColumn.type,userColumn.name)
        }
        return USER_REQ_RENDER.renderTemplate(model);
}

exports.renderUserReq = renderUserReq;