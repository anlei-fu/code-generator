const { MySqlServiceContext } = require("./MySqlServiceContext");

class CrudServiceContext extends MySqlServiceContext {
    /**
     * 
     * @param {import("mysql").PoolConfig} config 
     * @param {[{name:String,pk:String}]} tables
     */
    constructor(config, tables) {
        super(config);
        this.accesses = {};
        tables.forEach(x => {
            let name = NamingStrategy.toCamel(x);
            this.accesses[name] = new AccessBase(x.name, x.pk || 'id');
        });
    }
}

exports.CrudServiceContext = CrudServiceContext
