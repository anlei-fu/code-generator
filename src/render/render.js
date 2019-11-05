class Render {
        constructor() {
                this.templates = {};
        }

        static load(folder, express) {

        }

        render(name, option) {
                if (this.templates[name]) {
                        if (typeof option == "array") {
                                let ret = "";
                                option.forEach(x => {
                                        ret += this.templates[name].render(x);
                                });
                        } else {
                                return this.templates[name].render(option);
                        }
                }

                throw new Error(`template (${name}) can not be found`);
        }
}

exports.Render=Render;