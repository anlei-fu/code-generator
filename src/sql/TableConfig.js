class TableConfig {
    /**
     * Constructor of TableConfig
     * 
     * @param {String} table 
     * @param {String} pk 
     * @param {String} orderByClause 
     * @param {[String]} likes
     * @param {[String]} equals 
     */
    constructor (table, pk, orderByClause, equals, likes,) {
        this.table = table;
        this.pk = pk || "id";
        this.orderByClause = orderByClause;
        this.likes = likes;
        this.equals = equals;
    }
}

exports.TableConfig = TableConfig;