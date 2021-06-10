const ejs = require("ejs");
const {FILE} = require("./../../../libs")
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

        renderContentFromFile(file,model){
                return this._ejs.render(FILE.read(`${this._root}/${file}`), model, { root: this._root, strict: false });
        }
}

exports.EjsRender = EjsRender;