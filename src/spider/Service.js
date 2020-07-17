const { Initiable } = require("./Initiable");
const { ServiceEventListener } = require("./ServiceEventListener");
const { ServiceStatus } = require("./constant/ServiceStatus");

/**
 * Abstract class for service component
 * 
 * @abstract
 */
class Service extends Initiable {

        /**
         * Constructor of Service
         * 
         * @constructor
         * @param {String} name 
         * @param {ServiceEventListener} serviceEventListner ,not required
         */
        constructor (name, serviceEventListner) {
                super(name);
                this._listener = serviceEventListner;
                this._name = name;
                this._status = ServiceStatus.STOPPED;
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
         * To start service
         * 
         * @virtual
         */
        start() {
                this.info(`${this.name} started`);
        }

        /**
         * To puase service
         * 
         * @virtual
         * @param {()=>void} callback 
         * @param {boolean} force
         */
        stop(callback, force = false) {
                this.info(`${this.name} stopped`);
        }

        /**
         * To puase service
         * 
         * @virtual
         * @param {()=>void} callback 
         * @param {boolean} force
         */
        pause(callback, force = false) {
                this.info(`${this.name} paused`);
        }

        /**
         * To resume service
         */
        resume() {
                this.info(`${this.name} started`);
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