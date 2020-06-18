const sqlite3 = require('sqlite3').verbose();
const { NamingStrategy } = require("../utils/naming-strategy");
const { ExecutorBase } = require("./ExecutorBase");
const { TaskType } = require("../po/constant/TaskType");
const { FILE } = require("./../utils/file");
const { DIR } = require("./../utils/dir");
const { DebugUtils } = require("./../utils/debug-utils");

/**
 * Sqlite accessor
 */
class SqliteExecutor extends ExecutorBase {
        constructor (dbFolder, dbFile) {
                super("SqlExecutor", TaskType.SQL)
                this._dbForlder = dbFolder;
                this._dbFile = dbFile;
        }

        init(context) {

                DIR.create(this._dbForlder);

                if (!FILE.exists(`${this._dbForlder}/${this._dbFile}`))
                        FILE.write(`${this._dbForlder}/${this._dbFile}`, "");

                this._excutor = new sqlite3.Database(`${this._dbForlder}/${this._dbFile}`);
        }

        query(sql) {
                return new Promise((resolve, reject) => {
                        this._excutor.all(sql, (err, data) => {
                                if (err) {
                                        if (DebugUtils.isDebugMode())
                                                console.log(sql);

                                        reject(err)
                                        return;
                                }

                                resolve(this._normalizeResult(data));
                        });
                });
        }

        async querySingle(sql) {
                let result = await this.query(sql);
                if (result.length > 1)
                        throw new Error(`sql(${sql}) excepted 1 row,but get ${result.length}`);

                return result.length == 0 ? null : result[0];
        }

        excute(sql) {
                return new Promise((resolve, reject) => {
                        this._excutor.run(sql, (result, err) => {
                                if (err || result) {
                                        if (DebugUtils.isDebugMode())
                                                console.log(sql);


                                        reject(err || result)
                                        return;
                                }

                                resolve(true);
                        });
                });
        }

        _normalizeResult(result) {
                let out = [];
                let keys;
                result.forEach(item => {
                        if (!keys)
                                keys = Object.keys(item);
                        let obj = {};

                        keys.forEach(key => {
                                obj[NamingStrategy.toCamel(key)] = item[key];
                        });

                        out.push(obj);
                });

                return out;
        }

}

exports.SqliteExecutor = SqliteExecutor