class PageResult {
    /**
     * Constructor of PageResult
     * 
     * @param {[Any]} data 
     * @param {Number} total 
     */
    constructor(data, total) {
        this.list = data;
        this.total = total;
    }
}

exports.PageResult = PageResult