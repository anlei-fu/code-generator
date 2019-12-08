const { CharSequenceReader } = require("../tool/tokenization/char-sequence-reader")


class Template {
        constructor(name) {
                this.name = name;
                this.segments = [];
        }

        static parse(name, text) {
                return parse(name, text);
        }

        render(option) {
                let ret = "";
                this.segments.forEach(x => {
                        ret += x.reader(option);
                });

                return ret;
        }
}

class Segment {
        constructor(source, template) {
                this.source = source;
                this.template = template;


                if (typeof this.source != "string") {
                        this.isString = false;
                        if (!this.source.suffix) {
                                this.source.suffix = "";
                        }

                        if (!this.suffix) {
                                this.prefix = "";
                        }

                } else {
                        this.isString = false;
                }
        }

        render(option) {
                if (typeof this.source == "string") {
                        return this.source;
                } else {
                        if (option[this.name]) {
                                return `${this.source.prefix}${option[this.name]}${this.source.suffix}`
                        } else {
                                if (this.source.defaultValue) {
                                        return `${this.source.prefix}${this.source.defaultValue}${this.source.suffix}`
                                }

                                throw new Error(`segment can not be null,(${this.template.name}).${name}`)
                        }
                }
        }
}

class Variable {
        constructor(name, defaultValue, prefix, suffix) {
                this.name = name;
                this.defaultValue = defaultValue;
                this.prefix = prefix;
                this.suffix = suffix;
        }
}

function parse(name, text) {
        let reader = new CharSequenceReader(text),
                template = new Template(name),
                buffer = "",
                isParsingVarible = false;

        while (reader.hasNext()) {
                let c = reader.next();
                switch (c) {
                        case "$":
                                if (isParsingVarible) {
                                        buffer += c;
                                } else {
                                        if (!reader.previous() == "\\" && reader.hasNext() && reader.next() == "{") {
                                                if (buffer.length != 0)
                                                        template.segments.push(new Segment(buffer,template));
                                                buffer = "{";
                                                isParsingVarible = true;
                                        } else {
                                                buffer += c;
                                                reader.back();
                                        }
                                }
                                break;
                        case "}":
                                if (isParsingVarible) {
                                        buffer += c;
                                        try {
                                                template.segments.push(new Segment(JSON.parse(buffer),template));
                                        } catch (ex) {
                                                throw new Error(`incorrect json at [${name}][${buffer}]`);
                                        }

                                        isParsingVarible = false;
                                        buffer = "";
                                } else {
                                        buffer += c;
                                }
                                break;
                        default:
                                buffer += c;
                }

        }

        if (buffer != "" && !isParsingVarible) {
                template.push(new Segment(buffer,template));
        } else {
                throw new Error(`unexcepted end`);
        }
        return template;
}

exports.Template=Template;