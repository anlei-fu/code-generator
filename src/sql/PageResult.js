class PageResult {
    /**
     * Constructor of PageResult
     * 
     * @param {[Any]} data 
     * @param {Number} total 
     */
    constructor(data, total) {
        this.data = data;
        this.total = total;
    }
}

exports.PageResult = PageResult