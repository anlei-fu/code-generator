const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")

const _joinItemRender = new SimpleRender({}, `${__dirname}/templates/join-item.xml`);
const _joinRender = new SimpleRender({}, `${__dirname}/templates/join.xml`);

/**
 * 
 * @param {join} join 
 * @returns {String}
 */
function renderJoin(join) {
        let content = "";
        join.items.forEach(x => {
                content += _joinItemRender.renderTemplate(x);
        });

        return _joinRender.renderTemplate({ content });
}

exports.renderJoin = renderJoin;