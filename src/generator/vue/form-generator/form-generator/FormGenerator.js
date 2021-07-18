const { SimpleRender } = require("../../../common/renders");
const { STR, OBJECT, FILE, TYPE } = require("../../../../libs");
const { COMMON_UTILS } = require("../../../common");
const { NamingStrategy } = require("../../../../libs/naming-strategy");

let formItemRender = new SimpleRender({}, `${__dirname}/template/formItem.vue`);
let selectRender = new SimpleRender({}, `${__dirname}/template/select.vue`);
let checkboxRender = new SimpleRender({}, `${__dirname}/template/checkbox.vue`);
let inputRender = new SimpleRender({}, `${__dirname}/template/input.vue`);
let textAreaRender = new SimpleRender({}, `${__dirname}/template/textarea.vue`);
let rowRender = new SimpleRender({}, `${__dirname}/template/row.vue`);
let colRender = new SimpleRender({}, `${__dirname}/template/col.vue`);


let formRender = new SimpleRender({}, `${__dirname}/template/form.vue`);
SimpleRender
class FormGenerator {
    /**
     * Generate form vue
     * 
     * @param {String} name
     * @param {Object} model 
     * @param {Number} columns
     * @param {String} folder
     */
    generate(name, model, columns = 1, size = "default", labelWidth = 50, folder) {
        let validates = {};
        let m = {};
        let columns1 = [];
        model.forEach(x => {
            m[x.name] = null;
            validates[x.name] = [];
            validates[x.name].push({ required: true, message: `${x.label}不能为空` });
            x.size = size;
            columns1.push({ title: x.label, field: x.name });
        });

        let items = "";
        if (columns == 1) {
            items = STR.arrayToString1(model, x => this.renderFormItem(x));
        } else {
            let span = Math.round(24 / columns);
            let row = "";
            model.forEach((x, index) => {
                row += colRender.renderTemplate({ content: this.renderFormItem(x), span });
                // if ((index + 1) % columns == 0) {
                //     items += rowRender.renderTemplate({ content: row });
                //     row = "";
                // }
            });

            if (row) {
                items += rowRender.renderTemplate({ content: row });
            }
        }

        let data = {
            model: OBJECT.jsCode(m, "model"),
            rules: OBJECT.jsCode(validates, "validates"),
            items,
            labelWidth
        }

        FILE.write(folder ? `${folder}/${name}Form.vue` : `${__dirname}/output/${name}Form.vue`, formRender.renderTemplate(data));
        FILE.write(folder ? `${folder}/${name}.js` : `${__dirname}/output/${name}.js`, OBJECT.jsCode(columns1));
    }

    renderFormItem(value) {
        let content;
        if (this.isCheckBox(value.value)) {
            content = checkboxRender.renderTemplate(value);
        } else if (this.isSelect(value.name)) {
            value.enumType =NamingStrategy.toPascal(value.name);
            content = selectRender.renderTemplate(value);
        } else if (TYPE.isString(value.value) && this.isTextArea(value.name)) {
            content = textAreaRender.renderTemplate(value);
        } else {
            content = inputRender.renderTemplate(value);
        }

        let clone = OBJECT.clone(value);
        clone.content = content;
        return formItemRender.renderTemplate(clone);
    }

    isCheckBox(value) {
        return TYPE.isBoolean(value);
    }

    isSelect(name) {
        return STR.endsWithAny(name.toLowerCase(), [
            "version",
            "tool",
            "type",
            "status",
            "state",
            "flag",
            "mode",
            "class",
            "level",
            "style",
            "field",
            "table"
        ]);
    }

    isTextArea(name) {
        return COMMON_UTILS.DEFAULT_TEXTAREA_MATCHER(name);
    }
}


exports.FormGenerator = FormGenerator;