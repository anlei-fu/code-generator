class ApiInfo{
        constructor(){
                this.method="";
                this.path="";
                this.query={};
                this.response={};
                this.group="";
        }
}

class Entity{
        constructor(){
                this.name="";
                this.description="";
                this.type="";
                this.required=false;
                this.validates=[];
        }
}



class SwaggeApiResolver{
       
        resolve(doc){
          let groups={};
          let paths=doc.paths;
          
          Object.keys(paths).forEach(path=>{
               let pathItem=paths[path];
               
               Object.keys(pathItem).forEach(method=>{
                      
                      let method1=pathItem[method];
                      if(!groups[method1.tags[0]])
                        groups[method1.tags[0]]={};
                      
                      let group=groups[method1.tags[0]];
                      let methodName=this._getMethodName(method1.operationId);
                      group[methodName]={
                              method,
                              path,
                              description:method1.summary,
                              contentType:method1.consumes[0],
                              query:this._parserQuery(method1.parameters),
                              response:{}
                      };
                 
               });
          });

          return groups;

        }

        _getMethodName(raw){
             return raw.split("Using")[0];
        }

        _parserQuery(params){
               let query={};
               params.forEach(param=>{
                   query[param.name]={
                        description:param.description,
                        required:param.required,
                        type:param.type,
                        format:param.format,
                        from:param.in
                   }
               });

               return query;
        }

        _resolveResponse(){
                
        }


}

exports.SwaggeApiResolver=SwaggeApiResolver;