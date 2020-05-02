class TestConfig{
        constructor(){
                this.timeout=1000;
                this.headers={};
                this.method="";
                this.path="";
                this.requestInterceptor={};
                this.responseInterceptor={};
                this.resultChecker={};
                this.description="";
                this.testCount=1;
        }

        /**
         * Set path of api
         * 
         * @param {String} path 
         */
        setPath(path){
              this.path=path;
              return this;
        }

        /**
         * Set method of api
         * 
         * @param {String} method 
         */
        setMethod(method){
             this.method=method;
             return this;
        }

        /**
         * Set extra header 
         * 
         * @param {String} name 
         * @param {String} value 
         */
        setHeader(name,value){
              this.headers[name]=value;
              return this;
        }

        /**
         * Set api timeout
         * 
         * @param {Number} timeout 
         */
        setTimeout(timeout){
                this.timeout=timeout;
                return this;
        }

        /**
         * Set checker of result ,checker a method return a boolean to
         * determine if test success
         * 
         * @param {(resp)=>boolean} checker 
         */
        setResultChecker(checker){
               this.resultChecker=checker;
               return this;
        }

        /**
         * To do something before req send
         * 
         * @param {(req)=>} intercepter 
         */
        setRequestIntercepter(intercepter){
             this.requestInterceptor=intercepter;
             return this;
        }

        /**
         * To do something after resp received
         * 
         * @param {(resp)=>void} intercepter 
         */
        setResponseIntercepter(intercepter){
                this.responseInterceptor=intercepter;
                return this;
        }

        /**
         * Set description of test
         * 
         * @param {String} description 
         */
        setDescription(description){
                this.description=description;
                return this;
        }

        /**
         * Set count of test
         * 
         * @param {Number} count 
         */
        setTestCount(count){
                 this.testCount=count;
                 return this;
        }

}
class Api extends TestConfig{
        constructor(){
                this.paramsCandidates=[];
                this.dataCandidates=[];
                this.data={};
                this.params={};
        }

        generateConfig(){

        }
}

class ApiGroup extends TestConfig{
        constructor(){
                super();
                this.apis=[];
        }

        api(apiBuilder){
                let  api=apiBuilder();
               this.apis.push(api)
        }
}

class TestConllection extends TestConfig{
       constructor(){
               super();
               this.groups=[];
       }

       group(groupBuilder){
           let group=groupBuilder();
           this.groups.push(group);
           return this;
       }

       build(){
               return this;
       }
       
}