class InsertConfig{
        constructor(){
                this.exlude=[];
                this.notRequire=[];
                this.defaultValue={};
        }
}

class DeleteConfig{
        constructor(){
                this.conditions=[];
        }
}

class UpdateConfig{
        constructor(){
                this.exclude=[];
                this.notRequire=[];
                this.params;
                this.conditions={};
        }
}

class QueryConfig{
     constructor(){
             this.outputExclude=[];
             this.conditions={};
             this.single=false;
     }
}

let config={
        name:"",
     
        _delete:[{
                condition:[{
                        id:{require:true}
                }],
        }],
        update:[{
                condition:[{
                        name:"deleteById",
                        id:{require:true}
                }],
                include:[],
        }],
        query:[{
                condition:[{
                         id:{pathVarible:true},
                         type:{reuired:true}
                     }
                ],
                include:[],
                single:false,
                sort:[]
        }]

}