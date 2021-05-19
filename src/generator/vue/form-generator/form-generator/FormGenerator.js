const { SimpleRender } = require("../../../common/renders/SimplePatterRender");
const { STR, OBJECT, FILE, TYPE } = require("../../../../libs");
const { COMMON_UTILS } = require("../../../common");

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
    generate(name, model, columns = 1, size = "default", folder) {
        let validates = {};
        let m = {};
        model.forEach(x => {
            m[x.name] = null;
            validates[x.name] = [];
            validates[x.name].push({ required: true, message: `${x.label}不能为空`, trigger: "change" });
            x.size = size;
        });

        let items = "";
        if (columns == 1) {
            items = STR.arrayToString1(model, x => this.renderFormItem(x));
        } else {
            let span = 24 / columns;
            let row = "";
            model.forEach((x, index) => {
                row += colRender.renderTemplate({ content: this.renderFormItem(x), span });
                if ((index + 1) % columns == 0) {
                    items += rowRender.renderTemplate({ content: row });
                    row = "";
                }
            });

            if (row) {
                items += rowRender.renderTemplate({ content: row });
            }
        }

        let data = {
            model: OBJECT.jsCode(m, "model"),
            rules: OBJECT.jsCode(validates, "validates"),
            items,
        }

        FILE.write(folder ? `${folder}/${name}.vue` : `${__dirname}/output/${name}.vue`, formRender.renderTemplate(data));
    }

    renderFormItem(value) {
        let content;
        if (this.isCheckBox(value.value)) {
            content = checkboxRender.renderTemplate(value);
        } else if (this.isSelect(value.name)) {
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
            "style"
        ]);
    }

    isTextArea(name) {
        return COMMON_UTILS.DEFAULT_TEXTAREA_MATCHER(name);
    }
}


exports.FormGenerator = FormGenerator;