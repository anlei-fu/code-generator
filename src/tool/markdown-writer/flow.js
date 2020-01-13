
/**
 * @description Build flow graph
 * @member {String} _output
 */
exports.FlowBuilder = class FlowBuilder {
        constructor() {
                this._output = "```flow\r\n";
        }

        /**
         * 
         * @param {String} id 
         * @param {String} info 
         * @returns {FlowBuilder}
         */
        confition(id, info) {
                return this._define(id, info, "condition");
        }

        /**
         * 
         * @param {String} id 
         * @param {String} info 
         * @returns {FlowBuilder}
         */
        start(id, info) {
                return this._define(id, info, "start");
        }

        /**
         * 
         * @param {String} id 
         * @param {String} info 
         * @returns {FlowBuilder}
         */
        end(id, info) {
                return this._define(id, info, "end");
        }

        /**
         * 
         * @param {String} id 
         * @param {String} info 
         * @returns {FlowBuilder}
         */
        input(id, info) {
                return this._define(id, info, "inputoutput");
        }

        /**
         * 
         * @param {String} id 
         * @param {String} info
         * @returns {FlowBuilder}
         */
        operation(id, info) {
                return this._define(id, info, "operation");
        }

        /**
         * 
         * @param {String} condition 
         * @param {String} next 
         * @param {String} position
         * @returns {FlowBuilder} 
         */
        yes(condition, next, position) {

                return this._choose("yes", condition, next, position);
        }

        /**
         * 
         * @param {String} condition 
         * @param {String} next 
         * @param {String} position 
         * @returns {FlowBuilder}
         */
        no(condition, next, position) {
                return this._choose("no", condition, next, position);

        }

        /**
         * 
         * @param {String} self 
         * @param {String} next 
         * @param {String} position 
         * @returns {FlowBuilder}
         */
        next(self, next, position) {
                if (position)
                        next = `${next}(${position})`;
                return this._appendLine(`${self}->${next}`);
        }

        /**
         * @returns {String}
         */
        build() {
                return this._output + "```\r\n";
        }

        /**
         * @private
         * @param {String} id 
         * @param {String} info 
         * @param {String} type
         * @returns {FlowBuilder}
         */
        _define(id, info, type) {
                return this._appendLine(`${id}=>${type}:${info}`);
        }

        /**
         * @private
         * @param {String} flag
         * @param {String} condition 
         * @param {String} next 
         * @param {String} position 
         * @returns {FlowBuilder}
         */
        _choose(flag, condition, next, position) {
                if (position)
                        next = `${next}(${position})`;
                return this._appendLine(`${condition}(${flag})->${next}`);
        }

        /**
         * @private
         * @param {String} text 
         * @returns {FlowBuilder}
         */
        _appendLine(text) {
                this._output += `${text}\r\n`;
                return this;
        }
}