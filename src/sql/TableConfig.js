class TableConfig {
    /**
     * Constructor of TableConfig
     * 
     * @param {String} table 
     * @param {String} pk 
     * @param {String} orderByClause 
     * @param {[String]} ins
     * @param {[String]} notIns
     * @param {[String]} likes
     */
    constructor(table, pk, orderByClause, likes, ins, notIns) {
        this.table = table;
        this.pk = pk;
        this.ins = ins;
        this.notIns = notIns;
        this.likes = likes;
        this.orderByClause = orderByClause;
    }
}

exports.TableConfig = TableConfig;