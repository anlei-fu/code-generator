const { JsConfig } = require("./JsConfig");
const { ShellConfig } = require("./ShellConfig");

exports.ResourceConfig = class {
        constructor () {
                this.js = new JsConfig();
                this.shell = new ShellConfig();
        }
}