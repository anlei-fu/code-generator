exports.columnsBuilder = function (array) {
        this.array = array;

        function include() {
                return this;
        }
        function exclude() {
                return this;
        }
        function alias(alias, items) {
                return this;
        }

        function requireAll() {
                return this;
        }

        function unrequire(items) {

                return this;
        }

        function require(items) {
                return this;
        }

        function build() {
                return this.array;
        }
}