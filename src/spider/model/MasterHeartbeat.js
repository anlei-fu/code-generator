class MasterHeartbeat {
        constructor () {
                /**
                 * The masters that available
                 */
                this.masters = [];

                /**
                 * The file server host that available
                 */
                this.fileHost = "";

                /**
                 * The master that send the heartbeat
                 */
                this.master = "";

        }
}

exports.MasterHeartbeat = MasterHeartbeat;

/**
 * Builder for MasterHeartbeat
 */
class MasterHeartbeatBuilder {
        constructor () {
                this._config = new MasterHeartbeat();
        }

        /**
         * Set property masters
         * 
         * @param {[String]} masters
         * @returns {MasterHeartbeatBuilder}
         */
        masters(masters) {
                this._config.masters = masters;
                return this;
        }

        /**
         * Set property fileHost
         * 
         * @param {String} fileHost
         * @returns {MasterHeartbeatBuilder}
         */
        fileHost(fileHost) {
                this._config.fileHost = fileHost;
                return this;
        }

        /**
         * Set property master
         * 
         * @param {String} master
         * @returns {MasterHeartbeatBuilder}
         */
        master(master) {
                this._config.master = master;
                return this;
        }

        /**
         * Build 
         * 
         * @returns {MasterHeartbeat}
         */
        build() {
                return this._config;
        }
}

exports.MasterHeartbeatBuilder = MasterHeartbeatBuilder;
