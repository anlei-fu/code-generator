/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-07 16:20:07
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-07 16:38:30
 */
const { SqlSegment, SqlTemplate } = require("./sql-template");
const { } = require("./../../tool/tokenization/char-sequence-reader");

function parse(text) {
        let reader = new CharSequenceReader(text),
                template = new SqlTemplate(),
                buffer = "",
                isParsingVarible = false,
                replaceDirect = false;
        /**
         * 
         * @param {boolean} repd 
         */
        function checkVaribleStart(repd) {
                if (isParsingVarible) {
                        buffer += c;
                } else {
                        if (!reader.previous() == "\\" && reader.hasNext() && reader.next() == "{") {
                                if (buffer.length != 0)
                                        template.segments.push(new Segment(buffer, false));
                                buffer = "";
                                isParsingVarible = true;
                                replaceDirect = repd;
                        } else {
                                buffer += c;
                                reader.back();
                        }
                }
        }

        /**
         * 
         * @param {String} text 
         * @returns {String}
         */
        function formatVarible(text) {
                return text.trim().split(",")[0].trim();
        }

        while (reader.hasNext()) {
                let c = reader.next();
                switch (c) {
                        case "#":
                                checkVaribleStart(false);
                                break;
                        case "$":
                                checkVaribleStart(true);
                                break;
                        case "}":
                                if (isParsingVarible) {
                                        template.segments.push(new SqlSegment(formatVarible(buffer), true, replaceDirect));
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
                template.push(new Segment(buffer, template));
        } else {
                throw new Error(`unexcepted end`);
        }
        return template;
}

exports = {
        parse
}