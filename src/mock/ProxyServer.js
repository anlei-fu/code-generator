const express = require('express');
const bodyParser = require('body-parser');
const { LoggerFactory } = require("./../common/logging/logger-factory");
const {Checker} =require("./Checker");
const app = express();
const axios = require("axios");

// allow cross domain
app.all("*", (req, resp, next) => {
        resp.header("Access-Control-Allow-Origin", "*");
        next();
});

// body parser (json & urlencoded) need install 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const LOG = LoggerFactory.getLogger("proxy server");

class ProxyServer {
        constructor(file,targetSite){
             this._checker =new Checker(file);
             this._targetSite=targetSite;
        }
        /**
         * 
         * @param {Number} port 
         * @param {[Handler]} handlers 
         */
        run(port) {
                this.mount("get");
                this.mount("post");
                this.mount("delete");
                this.mount("put");
                LOG.info("server started!");
                LOG.info("listen on " + port);
                app.listen(port);
        }

        mount(method){
                app[method]("*", async (req, resp) => {
                        try {
                                let res = await axios.default[method](this._targetSite+req.path, {
                                        headers: req.headers,
                                        params: req.query,
                                        data:req.body
                                })
                                this._checker.handle(req, res.data);

                                resp.send(res.data||{});

                        } catch(ex){
                            LOG.error(`${req.method} ${req.path} ${ex}`);
                        }
                });

        }
}

exports.ProxyServer=ProxyServer