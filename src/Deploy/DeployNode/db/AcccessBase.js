
const { sqlUtils } = require("../utils/sqlUtils");
const { SqliteExcutor } = require("../../Common/excutor/SqliteExcutor");
const { validateUtils } = require("./../utils/validateUtils");

/**
 * Simple wrap of @see SqliteExcutor ,provide basic sql operations
 */
class AccessBase {
        /**
         * 
         * @param {String} table  not null
         * @param {EntityConfig} param1 
         */
        constructor (table, { db = "db.db", idField = "id", idIsStringOrDate = false }) {
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
        list(conditions, pageConfig) {

        }

        /**
         * Insert a record 
         * 
         * @param {Object} model 
         * @returns {Promise<Boolean>}
         */
        add(model) {
                return this.executeCore(sqlUtils.getInsertString(this._table, model));
        }

        /**
         * Update a record by id 
         * 
         * @param {Object} model 
         * @returns {Promise<Boolean>}
         */
        updateById(id, model) {
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
        deleteById(id) {
                return this._executeCore(`delete from ${this._table} ${this._getIdWhereClause(id)}`);
        }

        /**
         * Get a record by id 
         * 
         * @param {Object} model 
         * @returns {Promise<Boolean>}
         */
        getById(id) {
                return this._excutor.querySingle(`select * from ${this._getIdWhereClause(id)}`);
        }

        /**
         * Add batch records 
         * 
         * @param {[Object]} model 
         * @returns {Promise<Boolean>}
         */
        async addBatch(models) {
                let t = models.forEach(model => {
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
                        `${this._getUpdateString(model)}` +
                        `where ${this._getInLike(ids, this._idField)}`
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
                        `where ${this._getInLike(ids, this._idField)}`
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
         * Generate update string
         * 
         * @private
         * @param {Object} model 
         * @returns {string?}
         */
        _getUpdateString(model) {
                return sqlUtils.getUpdateString(this._table, model);
        }

        /**
         * Get equal conditions join by 'and'
         * 
         * @private
         * @param {Object} model 
         * @returns {string}
         */
        _getEqualConditions(model) {
            return sqlUtils.getEqualConditions(model);
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
         * 
         * @param {[string|number]} items 
         * @param {string} prefix 
         */
        _getInLike(items, field, prefix = "in") {
               return sqlUtils.getInLike(items,field,prefix);
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