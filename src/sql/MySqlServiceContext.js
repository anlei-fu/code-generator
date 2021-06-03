const { ServiceContext } = require("../common/ServiceContext");
const { MysqlExcutor } = require("./excutor/mysql-excutor/mysql-excutor");
const { NamingStrategy } = require("../libs");
const { AccessBase } = require("./AcccessBase");

class MySqlServiceContext extends ServiceContext {

    /**
     * 
     * @param {import("mysql").PoolConfig} config 
     */
    constructor(config) {
        super();
        this.mySqlExecutor = new MysqlExcutor(config)
    }
}

exports.MySqlServiceContext = MySqlServiceContext