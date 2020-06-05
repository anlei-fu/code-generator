const { Controller } = require("./Controller");
const {JavaProjectAccess} =require("./../db/JavaProjectDbAccess")

const RequestPath={
        GET_BY_ID:"",
        LIST:"",
        STATUS:""
}

class JavaProjectController extends Controller {
        /**
         * 
         * @param {JavaProjectAccess} access 
         */
        constructor(access){
              this._access=access;
        }

        getById({query}) {
            return this._access.getById({id:query.id});
        }

        list(query) {

        }

        status(query){

        }

        /**
         * To mount requets handler
         * 
         * @override
         */
        mount(app) {
                app.get(RequestPath.GET_BY_ID, (req, resp) => this._process(req, resp, this.getById))
                   .get(RequestPath.LIST,  (req, resp) => this._process(req, resp, this.list))
                   .get(RequestPath.STATUS,(req,resp)=>this._process(req, resp, this.status))
        }
}