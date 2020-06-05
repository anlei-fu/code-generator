
const { sqlUtils } = require("./utils/sql-utils");
const { SqliteExcutor } = require("./excutor/SqliteExcutor");
const { validateUtils } = require("./utils/validate-utils");
const { LoggerSurpport } = require("./LoggerSurpport");
const { StopWatch } = require("./StopWatch");

/**
 * Simple wrap of @see SqliteExcutor ,provide basic sql operations
 */
class AccessBase extends LoggerSurpport {
        /**
         * 
         * @param {String} table  not null
         * @param {EntityConfig} param1 
         */
        constructor (name, { table, db = "db.db", idField = "id", idIsStringOrDate = false }) {
                super(name);
                validateUtils.requireNotNull(table);
                this._table = table;
                this._excutor = new SqliteExcutor(db);
                this._idField = idField;
                this._idIsStringOrDate = idIsStringOrDate;
        }

        /**
         * Query
         * 
         * @param {Object} conditions
         * @param {PageConfig} pageConfig
         * @returns {Promise<Entity>}
         */
        async  list(conditions, pageConfig) {

        }

        /**
         * Insert a record 
         * 
         * @param {Object} model 
         * @returns {Promise<Boolean>}
         */
        async add(model) {
                return this._executeCore(sqlUtils.getInsertString(this._table, model));
        }

        /**
         * Update a record by id 
         * 
         * @param {Object} model 
         * @returns {Promise<Boolean>}
         */
        async  updateById(id, model) {
                let sql = `${sqlUtils.getUpdateString(this._table, model)}`;
                if (!sql)
                        return false;

                return this._executeCore(`${sql} ${this._getIdWhereClause(id)}`);
        }

        /**
         * Delete a record by id 
         * 
         * @param {Object} model 
         * @returns {Promise<Boolean>}
         */
        async  deleteById(id) {
                return this._executeCore(`delete from ${this._table} ${this._getIdWhereClause(id)}`);
        }

        /**
         * Get a record by id 
         * 
         * @param {Object} model 
         * @returns {Promise<Boolean>}
         */
        async getById(id) {
                return this._excutor.querySingle(`select * from ${this._table} ${this._getIdWhereClause(id)}`);
        }

        /**
         * Add batch records 
         * 
         * @param {[Object]} model 
         * @returns {Promise<Boolean>}
         */
        addBatch(models) {
                let t = models.forEach(async model => {
                        try {
                                let result = await this.add(model);
                                if (result)
                                        ++t;
                        } catch (ex) {
                                throw ex;
                        }
                });

                return t;
        }

        /**
         * Update batch records by ids
         * 
         * @param {[String|Number]}
         * @param {Object} model 
         * @returns {Promise<Boolean>}
         */
        async  updateBatch(ids, model) {
                if (ids.length == 0)
                        return false;

                return this._executeCore(
                        `${sqlUtils.getUpdateString(model)}` +
                        `where ${sqlUtils.getInLike(ids, this._idField)}`
                );
        }

        /**
         * Delet batch records by ids
         * 
         * @param {[string|number]} ids 
         * @returns {Promise<Boolean>}
         */
        async deleteBtach(ids) {
                if (ids.length == 0)
                        return false;

                return this._executeCore(
                        `delete from ${this._table} ` +
                        `where ${sqlUtils.getInLike(ids, this._idField)}`
                );
        }

        /**
         * Insert a record 
         * 
         * @returns {Promise<Entity>}
         */
        getAll() {
                return this._excutor.query(`select * from ${this._table}`);
        }

        /**
         * Insert a record 
         * 
         * @private
         * @param {String} whereClause
         * @param {PageConfig} pageConfig
         * @returns {Promise<Entity>}
         */
        _query(whereClause, { index = 1, size = 10 }) {

        }

        /**
         * Get where clause by id
         * 
         * @private
         * @param {Object} model 
         * @returns {string}
         */
        _getIdWhereClause(id) {
                return ` where ${this._idField} = ${sqlUtils.formatSqlString(id)}`;
        }


        /**
         * Excute core
         * 
         * @private
         * @param {Object} model 
         * @returns {Promise<Boolean>}
         */
        _executeCore(sql) {
                return this._excutor.excute(sql);
        }
}

exports.AccessBase = AccessBase;