const { Service } = require("./service");
const { validateUtils } = require("./utils/validate-utils");
const { ServiceEventListener } = require("./ServiceEventListener");
const { ServiceStatus } = require("./po/constant/ServiceStatus");

class ServiceManager extends ServiceEventListener {
        constructor () {
                this._services = new Map();
        }

        onServicePaused(service) {
                this._services.set(service, ServiceStatus.PAUSED);
        }

        onServiceStarted(service) {
                this._services.set(service, ServiceStatus.RUNNING);
        }

        onServiceStopped(service) {
                this._services.set(service, ServiceStatus.STOPPED);
        }

        onServiceResumed(service) {
                this._services.set(service, ServiceStatus.RUNNING);
        }
}

exports.ServiceContainer = class {

        constructor (services = []) {
                this._services = services;
                this._services.forEach(s => {
                        validateUtils.requireInstanceOf(s, Service);
                });
        }

        start() {
                this._services.forEach(async s => {
                        await s.start();
                })
        }

        stop() {
                this._services.forEach(async s => {
                        await s.stop();
                })
        }
}