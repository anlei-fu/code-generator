const { ServiceContext } = require("../common/ServiceContext");
const { MysqlExcutor } = require("./excutor/mysql-excutor/mysql-excutor");
class MySqlServiceContext extends ServiceContext {

    /**
     * Constructor of MySqlServiceContext
     * 
     * @param {import("mysql").PoolConfig} config 
     */
    constructor (config) {
        super();
        this.mySqlExecutor = new MysqlExcutor(config)
    }
}

exports.MySqlServiceContext = MySqlServiceContext