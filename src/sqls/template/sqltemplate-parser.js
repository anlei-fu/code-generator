/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-07 16:20:07
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-08 15:50:51
 */
const { SqlSegment, SqlTemplate } = require("./sql-template");
const { CharSequenceReader } = require("./../../tool/tokenization/char-sequence-reader");

/**
 * 
 * @param {String} text 
 * @returns {SqlTemplate}
 */
function parse(text) {

        let reader = new CharSequenceReader(text),
                template = new SqlTemplate(),
                buffer = "",
                isParsingVarible = false,
                replaceDirect = false;

        /**
         * @description Check is varible start and which kind of varible 
         * @param {boolean} repd 
         */
        function checkVaribleStart(repd, char) {
                if (isParsingVarible) {
                        buffer += char;
                } else {

                        // Check  escape pattern "\$"||"\#"
                        if (reader.previous() != "\\" && reader.hasNext() && reader.next() == "{") {
                                if (buffer.length != 0)
                                        template.segments.push(new SqlSegment(buffer, false));
                                buffer = "";
                                isParsingVarible = true;
                                replaceDirect = repd;
                        } else {
                                if (reader.previous() == "\\")
                                        buffer = buffer.substr(0, buffer.length - 1);

                                buffer += char;
                        }
                }
        }

        /**
         * @description Trim 
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
                                checkVaribleStart(false, c);
                                break;
                        case "$":
                                checkVaribleStart(true, c);
                                break;
                        case "}":
                                if (isParsingVarible) {

                                        // Check  escape pattern "\{"
                                        if (reader.previous() == "\\") {
                                                buffer = buffer.substr(0, buffer.length - 1);
                                                buffer += c;
                                        } else {
                                                template.segments.push(new SqlSegment(formatVarible(buffer), true, replaceDirect));
                                                isParsingVarible = false;
                                                buffer = "";
                                        }
                                } else {
                                        buffer += c;
                                }
                                break;
                        default:
                                buffer += c;
                                break;
                }

        }

        if (buffer != "") {
                if (!isParsingVarible) {
                        template.segments.push(new SqlSegment(buffer, false));
                } else {
                        throw new Error(`unexcepted end`);
                }
        }

        return template;
}

exports.parse = parse;

