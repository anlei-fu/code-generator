const { MySqlServiceContext } = require("./MySqlServiceContext");
const { AccessBase } = require("./AccessBase");
const { TableConfig } = require("./TableConfig");
const { NamingStrategy } = require("../libs");


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
            let name =NamingStrategy.toCamel(x.table);
            this.accesses[name] = new AccessBase(name, x);
            this.accesses[name].init(this);
        });
    }
}

exports.CrudServiceContext = CrudServiceContext
