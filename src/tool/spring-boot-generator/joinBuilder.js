exports.joinBuilder = function (table, type, joinCondition) {
        this.table1 = table;
        this.type = type;
        this.joinCondition = joinCondition;

        function build() {
                return this;
        }

        function includes(includes) {
                this.includes = includes;
                return this;
        }

        function conditions(conditions) {
                this.conditions = conditionsl;
                return this;
        }

        function alias(alias) {
                this.alias = alias;
                return this;
        }
}