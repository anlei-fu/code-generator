const { FILE } = require("../libs/file");
class EjsRender {
        constructor (root) {
                this._ejs = require("ejs");
                this._root = root;
        }

        render(templateFile, outputFile, model) {
                FILE.write(outputFile,
                        this.renderContent(FILE.read(templateFile), model));
        }

        renderContentFromFile(templateFile, model) {
                return this.renderContent(FILE.read(`${this._root}/${templateFile}`), model);
        }

        renderContent(template, model) {
                return this._ejs.render(template, model, { root: this._root,strict:false,escape:false });
        }
}

exports.EjsRender = EjsRender;