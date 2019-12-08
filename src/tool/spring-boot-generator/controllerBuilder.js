exports.controllerBuilder=function(){
        function path(path){
                this.path=path;
                return this;
        }

        function method(method){
              this.method=method;
              return this;
        }

        function req(req){
                this.reqs.push(req);
               return this;
        }

        function description(description){
                this.description=description;
                return this;
        }
}