const ejs = require("ejs");
class EjsRender {
        constructor (root) {
                this._ejs = ejs;
                this._root = root;
        }

        renderByCustomerContent(template, model) {
                return this._ejs.render(template, model, { strict: false });
        }

        render(template, model) {
                return this._ejs.render(template, model, { root: this._root, strict: false });
        }
}

exports.EjsRender = EjsRender;