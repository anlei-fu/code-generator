exports.ServiceProvider = class ServiceProvider {
        constructor () {
                this.services = {};
        }

        add(name, service) {
                this.services[name] = service;
        }

        get(name) {
                return this.services[name];
        }

        has(name) {
                return typeof this.services[name] != undefined;
        }
}