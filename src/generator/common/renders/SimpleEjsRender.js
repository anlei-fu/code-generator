
const ejs = require("ejs");
const { FILE } = require("../../../libs/file");

class SimpleEjsRender {

        constructor (templateFile) {
                this._template = FILE.read(templateFile);
        }

        render(data) {
                return ejs.render(this._template, data);
        }
}

exports.SimpleEjsRender = SimpleEjsRender