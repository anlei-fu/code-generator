const { ConfigGroup } = require("./builders/ConfigGroup");
const { ConfigItem } = require("./builders/ConfigItem");
const { Entity } = require("./builders/Entity");
const { OBJECT, STR } = require("../../libs");
const { getJavaType, isJavaBaseType } = require("./utils");
const { ColumnMerger } = require("./ColumnMerger");

let merger = new ColumnMerger();


/**
 * To init config group and config items
 */
class ConfigInitializer {

        init(configGroup) {
                this._checkConfig(configGroup);

                // initialization
                this._initTable(configGroup.table);

                configGroup.items.forEach(configItem => {
                        configItem.table = configGroup.table;
                        this._initConfig(configItem, configGroup);
                });
        }

        /**
         * Check config is ok, must conatain 'name' and 'table' properties
         * 
         * @private
         * @param {ConfigGroup} configGroup 
         */
        _checkConfig(configGroup) {
                if (!configGroup.name)
                        throw new Error("config name property is required!")

                if (!configGroup.table)
                        throw new Error("config table property is required!")

                configGroup.items.forEach(item => {
                        item.joins.forEach(join => {
                                if (!join.joinCondition || !join.table)
                                        throw new Error("join config incorrect!");
                        });
                });
        }

        /**
         * Initialize geneartor config
         * 
         * @private
         * @param {ConfigItem} configItem 
         */
        _initConfig(configItem, configGroup) {

                // set sql table alias if configed or use default alias table-name
                if (configItem.alias)
                        configGroup.table.alias = configItem.alias;

                // set default type 'select' if type absent
                configItem.type = configItem.type || "select";

                // generate default-id if id absent
                configItem.id = configItem.id || this._getDefaultId(configItem);

                // flag
                let hasDocreateReq = false;

                // if has req to create
                configItem.reqs.forEach(req => {
                        if (req.doCreate) {
                                this._initEntityBasicInfo(configItem, req, "Req", configGroup);
                                hasDocreateReq = true;
                        } else {
                                if (!isJavaBaseType(req.type)) {
                                        req.name = "Req";
                                        req.type = STR.upperFirstLetter(configItem.table.name);
                                }
                        }
                });

                // determine if generate  sql-params on has doCreate req and reqs' length > 1
                if ((hasDocreateReq && configItem.reqs.length > 1) || configItem.reqs.length > 3) {
                        configItem.params.doCreate = true;
                        this._initEntityBasicInfo(configItem, configItem.params, "Params", configGroup);
                }

                // set controller default path and description if not configed
                if (!configItem.noController) {
                        configItem.controller.path = configItem.controller.path;
                        configItem.controller.description = configItem.controller.description || "";
                }

                // set default join type if absent and init join table
                if (configItem.joins) {
                        configItem.joins.forEach(join => {
                                join.type = join.type || "left";
                                this._initTable(join.table);
                        });
                }

                // determine if generate resp on joins' length > 0 and type is select
                if (configItem.joins.length > 0 && configItem.type == "select") {
                        configItem.resp.doCreate = true;
                        this._initEntityBasicInfo(configItem, configItem.resp, "Resp", configGroup);
                }

        }

        /**
         * Analyze and generate default id
         *  {get|delete|update|add}{entity}ByxxyyAndzz
         * 
         * 
         * @private
         * @param {ConfigItem} configItem 
         */
        _getDefaultId(configItem) {
                let id = "";
                switch (configItem.type) {
                        case "select":
                                id = "get";
                                break;
                        case "delete":
                                id = "get";
                                break;
                        case "insert":
                                id = "add";
                                break;
                        default:
                                id = "update";
                                break;
                }

                if (configItem.batch) {
                        return id + configItem.name + "batch"
                }
                else {
                        let conditions = this._context.columnMerger.mergeConditions(configItem);
                        if (conditions.length == 1) {
                                id += configItem.name + "By"
                                id += STR.upperFirstLetter(conditions[0].name);
                        } else if (conditions.length < 4) {
                                conditions.forEach((condition, i, array) => {
                                        id += i == array.length - 1
                                                ? "And" + STR.upperFirstLetter(condition.name)
                                                : STR.upperFirstLetter(condition.name);
                                });
                                id += configItem.name;
                        } else {
                                id += configItem.name;
                        }
                }

                return id;
        }

        /**
         * Init table columns ,convert 'sql type' to 'java type'
         * 
         * @private
         * @param {Table} table 
         */
        _initTable(table) {
                OBJECT.forEach(table.columns, (_, column) => {
                        column.type = getJavaType(column.type);
                });
        }

        /**
         * Set basic infos if absent
         * 
         * @private
         * @param {ConfigItem} configItem 
         * @param {Entity} entity 
         * @param {String} entityType "entity|req|resp|param"
         */
        _initEntityBasicInfo(configItem, entity, entityType, configGroup) {
                entity.description = entity.description || "";
                if (!entity.type) {

                        // set entity type if absent
                        entity.type = entity.name
                                ? STR.upperFirstLetter(entity.name)
                                : STR.upperFirstLetter(configItem.id) + entityType;

                        // add table suffix if absent e.g AddReq => AddPersonReq
                        // to avoid name conflict
                        if (!entity.type.includes(configGroup.name)) {
                                let tableName = STR.upperFirstLetter(configGroup.name);
                                entity.type = STR.replace(entity.type, {
                                        "Get": "Get" + tableName,
                                        "Update": "Update" + tableName,
                                        "Add": "Add" + tableName
                                });
                        }

                        // Detail page use the same req create by pageb config item
                        if (entityType == "Req" || entityType == "Params") {
                                entity.type = entity.type.replace("Detail", "");
                                if (entity.type.includes("By"))
                                        entity.type = entity.type.substr(0, pos) + entityType;
                        }
                }

                entity.name = entityType == "Req"
                        ? entityType.toLowerCase() : entity.name;
        }

}

exports.ConfigInitializer = ConfigInitializer