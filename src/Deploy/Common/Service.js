const { LoggerSurpport } = require("./LoggerSurpport");
/**
 * Abstract class for service component
 * 
 * @abstract
 */
class Service extends LoggerSurpport {
        constructor () {
                this._status = 1;
        }

        /**
         * Get service status
         * 
         * @returns {ServiceStatus}
         */
        get status() {
                return this._status;
        }

        /**
         * To init service
         * 
         * @abstract
         */
        init() {
                throw new Error("method has not been implemented");
        }

        /**
         * To puase service
         * 
         * 
         * @abstract
         * @param {()=>void} callback 
         * @param {boolean} force
         */
        pause(callback, force = false) {
                throw new Error("method has not been implemented");
        }

        /**
         * To start service
         * 
         * @abstract
         */
        start() {
                throw new Error("method has not been implemented");
        }

        /**
         * To puase service
         * 
         * 
         * @abstract
         * @param {()=>void} callback 
         * @param {boolean} force
         */
        stop(callback, force = false) {
                throw new Error("method has not been implemented");
        }


}

exports.Service = Service;