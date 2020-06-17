const { Initiable } = require("./Init");
const { ServiceEventListener } = require("./ServiceEventListener");
const { ServiceStatus } = require("./po/constant/ServiceStatus");

/**
 * Abstract class for service component
 * 
 * @abstract
 */
class Service extends Initiable {
        /**
         * 
         * @param {String} name 
         * @param {ServiceEventListener} serviceEventListner 
         */
        constructor (name, serviceEventListner) {
                super(name);
                this._status = ServiceStatus.STOPPED;
                this._listener = serviceEventListner;
                this._name = name;
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

        /**
         * Raise service started event
         */
        _raiseServiceStarted() {
                if (this._listener)
                        this._listener.onServiceStarted(this._name);
        }

        /**
         * Raise service paused event
         */
        _raiseServicePaused() {
                if (this._listener)
                        this._listener.onServicePaused(this._name);
        }

        /**
         * Raise service resumed event
         */
        _raiseServiceResumed() {
                if (this._listener)
                        this._listener.onServiceResumed(this._name);
        }

        /**
         * Raise service stopped event
         */
        _raiseServiceStopped() {
                if (this._listener)
                        this._listener.onServiceStopped(this._name)
        }
}

exports.Service = Service;