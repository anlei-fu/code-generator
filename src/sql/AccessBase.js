
const { SqlMaker } = require("./SqlMaker");
const { validateUtils, OBJECT } = require("../libs");
const { Initiable } = require("../common");
const { PageResult } = require("./PageResult");
const { TableConfig } = require("./TableConfig");



/**
 * Simple wrap of @see SqlExcutor ,provide basic sql operations
 */
class AccessBase extends Initiable {
        /**
         * Constructor of AccessBase
         * 
         * @param {String} table  not null
         * @param {TableConfig} tableConfig 
         */
        constructor(name, tableConfig) {
                super(name);
                validateUtils.requireNotNull(tableConfig, ["table", "pk"]);
                this._tableConfig = tableConfig;
                this._mysqlExecutor = null;
        }

        /**
         * Init
         * 
         * @param {import("./MySqlServiceContext").MySqlServiceContext} context 
         */
        init(context) {
                validateUtils.requireNotNull(context, ["mySqlExecutor"]);
                this._mysqlExecutor = context.mySqlExecutor;
        }

        /**
         * Get page result
         * 
         * @param {Object} entity 
         * @returns {Promise<PageResult>}
         */
        async page(entity) {
                let pageConfig = this._resolvePageConfig(entity);
                let whereClause = SqlMaker.makeWhereClauseSql(entity, this._tableConfig);
                let ls = await this._query(whereClause, pageConfig);
                let total = await this._getCount(whereClause, pageConfig);
                return new PageResult(ls, total);
        }

        /**
         * Query list result
         * 
         * @param {Object|String} conditions
         * @param {PageConfig} pageConfig
         * @param {String} orderByClause
         * @returns {Promise<Entity[]>}
         */
        list(entity) {
                let whereClause = SqlMaker.makeWhereClauseSql(entity, this._tableConfig);
                return this._query(whereClause);

        }

        /**
         * Get count 
         * 
         * @param {Any} entity
         * @param {import("./SqlGenerateConfig").SqlGenerateConfig} sqlGenerateConfig 
         * @returns {Promise<Number>}
         */
        getCount(entity) {
                let whereClause = SqlMaker.makeWhereClauseSql(entity, this._tableConfig);
                return this._getCount(whereClause);
        }

        /**
         * Insert a record 
         * 
         * @param {Object} entity 
         * @returns {Promise<Boolean>}
         */
        add(entity) {
                return this.execute(SqlMaker.makeInsertSql(entity, this._tableConfig));
        }

        /**
         * Update a record by id 
         * 
         * @param {Object} entity 
         * @returns {Promise<Boolean>}
         */
        updateById(entity) {
                let sql = SqlMaker.makeUpdateSql(entity, this._tableConfig);
                if (!sql) {
                        return false;
                }

                return this.execute(`${sql}`);
        }

        /**
         * Delete a record by id 
         * 
         * @param {Object} model 
         * @returns {Promise<Boolean>}
         */
        deleteById(id) {
                return this.execute(`delete from ${this._tableConfig.table} ${this._getIdWhereClause(id)}`);
        }

        /**
         * Get a record by id 
         * 
         * @param {Object} model 
         * @returns {Promise<Entity>}
         */
        getById(id) {
                return this._mysqlExecutor.querySingle(`select * from ${this._tableConfig.table} ${this._getIdWhereClause(id)}`);
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
         * @param {Object} entity 
         * @returns {Promise<Boolean>}
         */
        updateBatch(ids, entity) {
                if (ids.length == 0)
                        return 0;

                let sql = SqlMaker.makeInOrNotInSql(this._tableConfig.pk, ids).trim();
                sql = SqlMaker.trimAnd(sql);
                return this.execute(
                        `${SqlMaker.makeUpdateSql(entity, this._tableConfig)}` +
                        `where ${sql}`
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

                let sql = SqlMaker.makeInOrNotInSql(this._tableConfig.pk, ids).trim();
                sql = SqlMaker.trimAnd(sql);
                return this.execute(
                        `delete from ${this._tableConfig.table} ` +
                        `where ${sql}`
                );
        }

        /**
         * Insert a record 
         * 
         * @returns {Promise<Entity[]>}
         */
        getAll() {
                return this._mysqlExecutor.query(`select * from ${this._tableConfig.table} ${this._tableConfig.orderByClause}`);
        }

        /**
         * Query data
         * 
         * @param {string} sql 
         * @returns {Promise<Entity>}
         */
        query(sql) {
                return this._mysqlExecutor.query(sql);
        }

        /**
         * Execute 
         * 
         *
         * @param {Object} model 
         * @returns {Promise<Boolean>}
         */
        execute(sql) {
                return this._mysqlExecutor.execute(sql);
        }

        /**
         * Insert a record 
         * 
         * @private
         * @param {String} whereClause
         * @param {PageConfig} pageConfig
         * @param {String} orderByClause
         * @returns {Promise<Entity[]>}
         */
        _query(whereClause, pageConfig) {
                let sql = `select * from ${this._tableConfig.table} ${whereClause} \n ${this._tableConfig.orderByClause} \n`
                if (pageConfig) {
                        sql += `limit ${(pageConfig.pageIndex - 1) * pageConfig.pageSize}, ${pageConfig.pageIndex * pageConfig.pageSize + pageConfig.pageSize}`;
                }

                return this._mysqlExecutor.query(sql);
        }

        /**
         * Query by sql
         * 
         * @private
         * @param {String} sql 
         * @returns {Promise<Entity[]>}
         */
        _queryOraginal(sql) {
                return this._mysqlExecutor.query(sql);
        }

        /**
         * Count the record by given conditions
         * 
         * @private
         * @param {String} whereClause 
         * @param {import("./PageConfig").PageConfig}
         * @returns {Number}
         */
        async _getCount(whereClause, pageConfig) {
                let sql = `select count(1) from ${this._tableConfig.table} ${whereClause}  \n`
                if (pageConfig) {
                        sql += `limit ${(pageConfig.pageIndex - 1) * pageConfig.pageSize}, ${pageConfig.pageIndex * pageConfig.pageSize + pageConfig.pageSize}`;
                }

                return this._mysqlExecutor.queryScalar(sql);
        }

        /**
         * Get where clause by id
         * 
         * @private
         * @param {Object} model 
         * @returns {string}
         */
        _getIdWhereClause(id) {
                return ` where ${this._tableConfig.pk} = ${SqlMaker.formatSqlString(id)}`;
        }

        /**
         * Resolve page config 
         * 
         * @param {Object} entity 
         */
        _resolvePageConfig(entity) {
                let pageConfig = {};
                pageConfig.pageIndex = entity.pageIndex || 1;
                pageConfig.pageSize = entity.pageSize || 10;
                OBJECT.setFieldToNull(entity, ["pageIndex", "pageSize"]);
                return pageConfig;
        }



}

exports.AccessBase = AccessBase;