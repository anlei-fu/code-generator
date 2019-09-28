class SqlTemplate {
        constructor(name) {
                this.name = name;
                this.segments = [];
        }
        addSegment(seg){
                this.segments.push(seg);
        }
        render(option) {
                
        }
        source() {

        }

}

class SqlSegment {
        constructor() {
                this.value = "";
                this.subtemplate;
        }

        isTemplate() {
                return value !== "";
        }
        render(option) {
                
        }
        source() {

        }
}

class TemplateParameter {
        constructor(name, { replace, mapping }) {
                this.name = name;
                this.replce = replace;
                this.mapping = mapping;
        }

        render(option) {

        }
}
class SubTemplate {
        constructor() {
                this.nullable = nullable;
                this.source = source;
                paramers = [];
        }

        render(option) {

        }

}

exports = {
        SqlTemplate,
        SqlSegment,
        TemplateParameter,
        SubTemplate
}