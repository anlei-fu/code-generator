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

        setPath(path){
              this.path=path;
              return this;
        }

        setMethod(method){
             this.method=method;
             return this;
        }

        setHeader(name,value){
              this.headers[name]=value;
              return this;
        }

        setTimeout(timeout){
                this.timeout=timeout;
                return this;
        }

        setResultChecker(checker){
               this.resultChecker=checker;
               return this;
        }

        setRequestIntercepter(intercepter){
             this.requestInterceptor=intercepter;
             return this;
        }

        setResponseIntercepter(intercepter){
                this.responseInterceptor=intercepter;
                return this;
        }

        setDescription(description){
                this.description=description;
                return this;
        }

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