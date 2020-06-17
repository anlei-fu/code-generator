const { NodeInfo } = require("./../po/config/NodeInfo")

class NodeInfoBuilder {
        constructor () {
                this._info = new NodeInfo();
        }

        /**
         * Set ip
         * 
         * @param {String} ip 
         * @returns {NodeInfoBuilder}
         */
        ip(ip) {
                this._info.ip = ip;
                return this;
        }

        /**
         * Set name
         * 
         * @param {String} name 
         * @returns {NodeInfoBuilder}
         */
        name(name) {
                this._info.name = name;
                return this;
        }

        /**
         * Set description
         * 
         * @param {String} description 
         * @returns {NodeInfoBuilder}
         */
        description(description) {
                this._info.description = description;
                return this;
        }

        /**
         * Set uniqueId
         * 
         * @param {String} uniqueId 
         * @returns {NodeInfoBuilder}
         */
        uniqueId(uniqueId) {
                this._info.uniqueId = uniqueId;
                return this;
        }

        /**
         * Set token
         * 
         * @param {String} token 
         * @returns {NodeInfoBuilder}
         */
        token(token) {
                this._info.token = token;
                return this;
        }

        /**
         * Set node type
         * 
         * @param {Number} nodeType 
         * @returns {NodeInfoBuilder}
         */
        nodeType(nodeType) {
                this._info.nodeType = nodeType;
                return this;
        }

        /**
         * Build a node info
         * 
         * @returns {NodeInfo}
         */
        build() {
                return this._info;
        }

}

exports.NodeInfoBuilder = NodeInfoBuilder;