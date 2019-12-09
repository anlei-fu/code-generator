exports.builder= function() {

        function build() {
            return this;
        }

        function join(join) {
                this.joins.push(join);
                return this;
        }

        function includes(includes) {
                this.includes=includes;
                return this;
        }

        function conditions(conditions) {
                this.conditions=conditions;
                return this;
        }

        function req(req) {
                this.req=req;
                return this;
        }

        function noController() {
                this.noController=true;
                return this;
        }

        function noService() {
                this.noService=true;
            return this;
        }

        function controller(){
                this.controller=controller;
                return this;
        }
}