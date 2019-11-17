const { OBJECT } = require("../libs/utils")

/**
 * @description Build time sequnce graph
 * @member {String} _output 
 */
exports.TimeSequenceBuilder = class TimeSequenceBuilder {

        constructor() {
                this._output = "```mermaid\r\nsequenceDiagram\r\n";
        }

        /**
         * 
         * @param {String} title 
         * @returns {TimeSequenceBuilder}
         */
        titile(title) {
                return this._appendLine(`Title:${title}`);
        }

        /**
         * 
         * @param {[String]} participarts 
         * @returns {TimeSequenceBuilder}
         */
        participants(participarts) {
                participarts.forEach(x => {
                        this._output += `participant ${x}\r\n`;
                });
                return this;
        }

        /**
         * 
         * @param {String} participant 
         * @param {String} msg 
         * @returns {TimeSequenceBuilder}
         */
        noteOver(participant, msg) {
                return this._note(participant, msg, "over");
        }

        /**
         * 
         * @param {String} participant 
         * @param {String} msg 
         * @returns {TimeSequenceBuilder}
         */
        noteLeft(participant, msg) {
                return this._note(participant, msg, "left");
        }

        /**
         * 
         * @param {String} participant 
         * @param {String} msg 
         * @returns {TimeSequenceBuilder}
         */
        noteRight(participant, msg) {
                return this._note(participant, msg, "right");
        }

        /**
         * 
         * @param {String} sender 
         * @param {String} recipient 
         * @param {String} msg 
         * @returns {TimeSequenceBuilder}
         */
        sendSync(sender, recipient, msg) {
                return this._send(sender, recipient, msg, false);
        }

        /**
         * 
         * @param {String} sender 
         * @param {String} recipient 
         * @param {String} msg 
         * @returns {TimeSequenceBuilder}
         */
        sendAsync(sender, recipient, msg) {
                return this._send(sender, recipient, msg, true);
        }

        /**
         * 
         * @param {String} sender 
         * @param {String} recipient 
         * @param {String} msg 
         * @returns {TimeSequenceBuilder}
         */
        sendSelfSync(participant, msg) {
                return this._send(participant, participant, msg, false);
        }

        /**
         * 
         * @param {String} sender 
         * @param {String} recipient 
         * @param {String} msg 
         * @returns {TimeSequenceBuilder}
         */
        sendSelfAsync(participant, msg) {
                return this._send(participant, participant, msg, true);
        }

        /**
         * 
         * @param {String} name 
         * @param {String} sender 
         * @param {String} recipient 
         * @param {String} msg 
         * @param {String} dash 
         * @returns {TimeSequenceBuilder}
         */
        loop(name, sender, recipient, msg, dash) {
                let symbol = dash ? "--" : "-";
                return this._appendLine(`loop ${name}\r\n\t${sender}${symbol}>>${recipient}:${msg}\r\nend`);
        }

        /**
         * @returns {String}
         */
        build() {
                return this._output + "```\r\n";
        }

        /**
         * @private
         * @param {String} participant 
         * @param {String} msg 
         * @param {String} position 
         * @returns {TimeSequenceBuilder}
         */
        _note(participant, msg, position) {
                return position == "over"
                        ? this._appendLine(`Note ${position} ${participant}:${msg}`)
                        : this._appendLine(`Note ${position} of ${participant}:${msg}`);
        }

        /**
         * @private
         * @param {String} sender 
         * @param {String} recipient 
         * @param {String} msg 
         * @param {boolean} dash
         * @returns {TimeSequenceBuilder}
         */
        _send(sender, recipient, msg, dash) {
                let symbol = dash ? "--" : "-";
                return this._appendLine(`${sender}${symbol}>>${recipient}:${msg}`);
        }

        /**
         * @private
         * @param {String} text 
         * @returns {TimeSequenceBuilder}
         */
        _appendLine(text) {
                this._output += `${text}\r\n`;
                return this;
        }

}