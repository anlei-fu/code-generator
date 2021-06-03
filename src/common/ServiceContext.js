const { ServiceProvider } = require("./ServiceProvider");

class ServiceContext {
    constructor () {
        this.serviceProvider = new ServiceProvider();
    }
}

exports.ServiceContext = ServiceContext;