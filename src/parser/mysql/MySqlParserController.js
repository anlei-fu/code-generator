const { Controller } = require("./../../http")
const { MySqlDDLParser } = require("./mysql-ddl-parser")
const {TableInfoResolver} =require("./TableInfoResolver")

class MySqlParserController extends Controller {
    constructor() {
        super("mysql-parse")
        this._parser = new MySqlDDLParser();
        this._resolver = new TableInfoResolver();

    }

    init(context) {
        // this._templateAccess = context.accesses["templateInfo"];
    }


    async parse({ body }) {
        let tables = this._parser.parse(body.sql);
        let result =[];
        tables.forEach(x=>{
                result.push(this._resolver.resolve(x));
        });
        return this.resposneObject(result);
    }

    async analyzeColumn({body}){
             let result = this._resolver.resolveColumn(body.column);
             return this.resposneObject(result);
    }

    mount(app) {
        app.post("/parser/mysql-parse", (req, resp) => this._process(req, resp, this.parse))
           .post("/parser/analyze-column", (req, resp) => this._process(req, resp, this.analyzeColumn))
    }        
}

exports.MySqlParserController = MySqlParserController