const sqlite3 = require('sqlite3').verbose();
const { NamingStrategy } = require("./../utils/naming-strategy");
const {StopWatch} =require("./../StopWatch");

const DebugMode = true;

/**
 * Sqlite accessor
 */
class SqliteExcutor {
        constructor (db) {
                this._dbFile = db;
                this._excutor = new sqlite3.Database(this._dbFile);
        }

        query(sql) {
                return new Promise((resolve, reject) => {
                        this._excutor.all(sql, (err, data) => {
                                if (err) {
                                        if (DebugMode)
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
                let watch =new  StopWatch();
                watch.start();
                return new Promise((resolve, reject) => {
                        console.log(`elapsed:${watch.elased}`);
                        this._excutor.run(sql, (result, err) => {
                                if (err || result) {
                                        if (DebugMode)
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

exports.SqliteExcutor = SqliteExcutor