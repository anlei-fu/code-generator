const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// allow cross domain
app.all("*", (req, resp, next) => {
    resp.header("Access-Control-Allow-Origin", "*");
    next();
});

// body parser (json & urlencoded) need install 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const { Service } = require("./Service");

/**
 * To host a http rest service, base on 'express' http server
 */
class RestService extends Service {
    /**
     * 
     * @param {[Controller]} controllers 
     */
    constructor (controllers = []) {
        super("RestService");
        this._controllers = controllers;
    }

    init() {
        this._controllers.forEach(controller => {
            controller.mount(app);
        });
    }

    pause() {

    }

    start() {
        app.listen(80);
    }

    stop() {

    }
}

exports.RestService = RestService;