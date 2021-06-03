const { MySqlServiceContext } = require("./MySqlServiceContext");
const { AccessBase } = require("./AccessBase");
const { TableConfig } = require("./TableConfig");


class CrudServiceContext extends MySqlServiceContext {
    /**
     * 
     * @param {import("mysql").PoolConfig} config 
     * @param {[TableConfig]} tables
     */
    constructor (config, tables) {
        super(config);
        this.accesses = {};
        tables.forEach(x => {
            let name = NamingStrategy.toCamel(x);
            this.accesses[name] = new AccessBase(x.name, x);
        });
    }
}

exports.CrudServiceContext = CrudServiceContext
