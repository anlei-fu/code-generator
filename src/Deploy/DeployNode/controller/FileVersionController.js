const { Controller } = require("./Controller");
const { FileVersionAccess } = require("../db/FileVersionAccess")

const RequestPath = {
        GET_BY_ID: "/fileVersion/:id",
        LIST: "/fileVersion/list",
}

exports.FileVersionController = class FileVersionController extends Controller {
        /**
         * 
         * @param {FileVersionAccess} access 
         */
        constructor (access) {
                this._access = access;
        }

        getById({ params }) {
                return this._access.getById({ id: params.id });
        }

        list(query) {
               
        }

        /**
         * To mount requets handler
         * 
         * @override
         */
        mount(app) {
                app.get(RequestPath.GET_BY_ID, (req, resp) => this._process(req, resp, this.getById))
                        .get(RequestPath.LIST, (req, resp) => this._process(req, resp, this.list));
        }
}