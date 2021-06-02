
const { sqlUtils } = require("./../libs");
const { validateUtils } = require("./../libs");
const { Initiable } = require("./../common");



/**
 * Simple wrap of @see SqliteExecutor ,provide basic sql operations
 */
class AccessBase extends Initiable {
        /**
         * 
         * @param {String} table  not null
         * @param {EntityConfig} param1 
         */
        constructor (name, table, { idField, idIsStringOrDate } = {}) {
                super(name);
                validateUtils.requireNotNull(table);
                this._table = table;
                this._idField = idField || "id";
                this._idIsStringOrDate = idIsStringOrDate || false;

                this._excutor = null;
        }

        /**
         * Init
         *  
         * @require SqlExecutor exists
         * @param {NodeContext} context 
         */
        init(context) {
                validateUtils.requireNotNull(context.excutors, "SqlExecutor");
                this._excutor = context.excutors.SqlExecutor;
        }

        /**
         * Get page result
         * 
         * @param {Object|String} model 
         * @param {PageConfig} param1 
         * @returns {Promise<PageResult>}
         */
        page(model, { index, size }) {
                let whereClause = typeof model == "string"
                        ? model : sqlUtils.getEqualConditions(model);

                let ls = this._query(whereClause, { index, size });
                let total = this._getCount(whereClause);

                return new PageResult(ls, total);
        }

        /**
         * Query list result
         * 
         * @param {Object|String} conditions
         * @param {PageConfig} pageConfig
         * @returns {Promise<Entity[]>}
         */
        list(model) {
                let whereClause = typeof model == "string"
                        ? model : sqlUtils.getEqualConditions(model);

                return this._query(whereClause, { index: 0, size: 1000000000 });

        }

        /**
         * Get count by given conditions
         * 
         * @param {Object|String} model
         * @returns {Promise<Number>}
         */
        getCount(model) {
                let whereClause = typeof model == "string"
                        ? model : sqlUtils.getEqualConditions(model);
                return this._getCount(whereClause);
        }

        /**
         * Insert a record 
         * 
         * @param {Object} model 
         * @returns {Promise<Boolean>}
         */
        add(model) {
                return this.execute(sqlUtils.getInsertString(this._table, model));
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

                return this.execute(`${sql} ${this._getIdWhereClause(id)}`);
        }

        /**
         * Delete a record by id 
         * 
         * @param {Object} model 
         * @returns {Promise<Boolean>}
         */
        deleteById(id) {
                return this.execute(`delete from ${this._table} ${this._getIdWhereClause(id)}`);
        }

        /**
         * Get a record by id 
         * 
         * @param {Object} model 
         * @returns {Promise<Entity>}
         */
        getById(id) {
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
        updateBatch(ids, model) {
                if (ids.length == 0)
                        return false;

                return this.execute(
                        `${sqlUtils.getUpdateString(this._table, model)}` +
                        `where ${sqlUtils.getInLike(ids, this._idField)}`
                );
        }

        /**
         * Delet batch records by ids
         * 
         * @param {[string|number]} ids 
         * @returns {Promise<Boolean>}
         */
        deleteBtach(ids) {
                if (ids.length == 0)
                        return false;

                return this.execute(
                        `delete from ${this._table} ` +
                        6  `where ${sqlUtils.getInLike(ids, this._idField)}`
                );
        }

        /**
         * Insert a record 
         * 
         * @returns {Promise<Entity[]>}
         */
        getAll() {
                return this._excutor.query(`select * from ${this._table}`);
        }

        /**
         * Query data
         * 
         * @param {string} sql 
         * @returns {Promise<Entity>}
         */
        query(sql) {
                return this._excutor.query(sql);
        }

        /**
         * Execute 
         * 
         *
         * @param {Object} model 
         * @returns {Promise<Boolean>}
         */
        execute(sql) {
                return this._excutor.excute(sql);
        }

        /**
         * Insert a record 
         * 
         * @private
         * @param {String} whereClause
         * @param {PageConfig} pageConfig
         * @returns {Promise<Entity[]>}
         */
        _query(whereClause, { index = 0, size = 10 }) {
                let sql = `select * from ${this._table} where ${whereClause} limit ${index * size}, ${index * size + size}`;
                return this._excutor.query(sql);
        }

        /**
         * Query by sql
         * 
         * @private
         * @param {String} sql 
         * @returns {Promise<Entity[]>}
         */
        _queryOraginal(sql) {
                return this._excutor.query(sql);
        }

        /**
         * Count the record by given conditions
         * 
         * @private
         * @param {String} whereClause 
         * @returns {Number}
         */
        _getCount(whereClause) {
                let sql = `count where ${whereClause}`;
                return this._excutor.query(sql);
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



}

exports.AccessBase = AccessBase;