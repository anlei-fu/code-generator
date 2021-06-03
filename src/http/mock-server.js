const express = require('express');
const bodyParser = require('body-parser');
const { LoggerFactory } = require("./../logging");
const { TableFormmatter } = require("./../common/formatter/table-formatter")
const app = express();
const formatter = new TableFormmatter();

// allow cross domain
app.all("*", (req, resp, next) => {
        resp.header("Access-Control-Allow-Origin", "*");
        next();
});

// body parser (json & urlencoded) need install 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const LOG = LoggerFactory.getLogger("mock server");
const SUPPORTED_METHODS = new Set(["get", "post", "put", "delete"]);

/**
 * Check is method name surppoted and lower it
 * 
 * @param {String} method 
 * @returns {String}
 */
function checkAndNomalizeMethod(method) {
        method = method.toLowerCase();
        if (!SUPPORTED_METHODS.has(method))
                throw new Error("not supported method " + method);

        return method;
}

/**
 * Handler class
 */
class Handler {
        /**
         * 
         * @param {String} path 
         * @param {String} method 
         * @param {String} result 
         * @param {(req,resp)=>void} handler 
         */
        constructor (path, method, result = "") {
                this.path = path;
                this.method = checkAndNomalizeMethod(method);
                this.result = JSON.stringify(result);
        }

        /**
         * Log req basic infos
         * 
         * @param {Request} req 
         */
        logReq(req) {
                console.log(`${req.method} url:${req.url}`);
                console.log("query");
                console.log(formatter.format([req.query]));
                console.log("body:");
                console.log(formatter.format([req.body]));
        }

        /**
         * Core method, just return configired results randomly
         * 
         * @param {Request} req 
         * @param {Response} resp 
         */
        process(req, resp) {
                this.logReq(req);
                resp.send(this.result);
                LOG.info("response default result");
                LOG.info(this.result);
        }
}

class AssertHandler extends Handler {
        constructor (path, method, result = "", assert) {
                super(path, method, result);
                this._assert = assert;
        }

        /**
         * 
         * @override
         * @param {Req} req 
         * @param {Resp} resp 
         */
        process(req, resp) {
                if (this._assert && !this._assert(req))
                        LOG.error("assert failed!");

                super.process(req, resp);
        }
}

class ComplexHandler extends Handler {
        constructor (path, method, process) {
                super(path, method);
                this._process = process;
        }

        /**
         * @override
         */
        process(req, resp) {
                if (this._process) {
                        this._process(req, resp);
                } else {
                        super.process(req, resp);
                }
        }
}

/**
 * To build handlers
 */
class HandlerCollectionBuilder {
        constructor () {
                this._handlers = [];
        }

        /**
         * 
         * @param {String} path 
         * @param {String} method 
         * @param {String} result 
         * @param {(req,resp)=>void} handler 
         * @returns {HandlerCollectionBuilder}
         */
        handler(path, method, result) {
                this._handlers.push(new Handler(path, method, result));
                return this;
        }

        /**
         * 
         * @param {Handler} handler 
         * @returns {HandlerCollectionBuilder}
         */
        assertHandler(path, method, result, assert) {
                this._handlers.push(new AssertHandler(path, method, result, assert));
                return this;
        }

        /**
         * 
         * @param {String} path 
         * @param {String} method 
         * @param {(req,resp)=>void} process 
         */
        complexHandler(path, method, process) {
                this._handlers.push(new AssertHandler(path, method, result, assert));
                return this;
        }

        /**
         * @returns {[Handler]}
         */
        build() {
                return this._handlers;
        }
}

/**
 * @param {Handler} handler
 */
function mountHandler(handler) {
        app[handler.method](handler.path, (req, resp) => {
                handler.process(req, resp);
        });
}

class MockServer {
        /**
         * 
         * @param {Number} port 
         * @param {[Handler]} handlers 
         */
        run(port, handlers) {
                handlers.forEach(handler => {
                        mountHandler(handler);
                });

                LOG.info("server started!");
                LOG.info("listen on " + port);
                app.listen(port);
        }
}

module.exports = {
        MockServer,
        HandlerCollectionBuilder
}