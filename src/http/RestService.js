const express = require('express');
const bodyParser = require('body-parser');
const { Service, ServiceStatus } = require("./../common");
const { Controller } = require("./Controller");
const { validateUtils } = require("./../libs");

const app = express();

// allow cross domain
app.all("*", (req, resp, next) => {
    resp.header("Access-Control-Allow-Origin", "*");
    next();
});

// body parser (json & urlencoded) need to install independently
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/**
 * To host a http rest service, base on 'express' http framework
 */
class RestService extends Service {
    /**
     * 
     * @param {[Controller]} controllers 
     */
    constructor (port, controllers = [], staticFolder) {
        validateUtils.requireNumber(port);
        super("RestService");
        this._controllers = controllers;
        this._controllers.forEach(c => {
            validateUtils.requireInstanceOf(c, Controller);
        });

        this._port = port;

        if (staticFolder) {
            app.use(express.static(staticFolder));
        }
    }

    /**
     * Config express middleware
     * 
     * @param {import("express").RequestHandler}
     */
    useMiddleware(middleware) {
        app.use(middleware);
    }

    /**
     * Init
     * 
     * @override
     * @param {Any} context
     */
    init(context) {
        this._controllers.forEach(controller => {
            controller.mount(app);
            controller.init(context);
        });
    }

    /**
     * Start service
     * 
     * @override
     */
    start() {
        if (this._status != ServiceStatus.STOPPED) {
            this.warn(`to start service refused,cause current status is ${this._status}`);
            return;
        }

        this._server = app.listen(this._port);

        this._status = ServiceStatus.RUNNING;
        this.info("service started");
        this.info("listen on " + this._port);
        this._raiseServiceStarted();

    }

    /**
     * Stop server
     * 
     * @override
     */
    stop() {
        if (this._status != ServiceStatus.RUNNING) {
            this.warn(`to start service refused,cause current status is ${this._status}`);
            return;
        }

        this._server.close();

        this._status = ServiceStatus.STOPPED;
        this.info("service stopped");
        this._raiseServiceStarted();
    }
}

exports.RestService = RestService;