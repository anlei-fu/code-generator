const { SimpleRender } = require("./../../simple-pattern-render/simple-pattern-render")
const { renderIf } = require("./if-render");
const IF_IDENT="";
const _asignRender = new SimpleRender();
_asignRender.setTempalte(`${IF_IDENT} @column = #{@property}\r\n`);

/**
 * Render assign expression
 * 
 * @private
 * @param {{column:String,property:String}} config
 * @returns {String} 
 */
function renderAsign(config) {
        let content = _asignRender.renderTemplate(config);
        config.content = content;
        return renderIf(config);
}

exports.renderAsign = renderAsign;