const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render");

const USER_REQ_RENDER = new SimpleRender({}, `${__dirname}/templates/user-req.js`);

function renderUserReq() {
        return USER_REQ_RENDER.renderTemplate();
}

exports.renderUserReq = renderUserReq;