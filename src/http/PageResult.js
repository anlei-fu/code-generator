exports.PageResult = class {
        constructor (list, total) {

                /**
                 * 
                 */
                this.total = total;

                /**
                 * 
                 */
                this.list = list || [];
        }
}