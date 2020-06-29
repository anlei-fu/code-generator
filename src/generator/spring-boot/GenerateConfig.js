const METHODS={
        ADD:"",
        ADD_BATCH:"",
        DELETE_BY_ID:"",
        DELETE_BATCH:"",
        UPDATE:"",
        UPDATE_BATCH:"",
        GET_BY_ID:"",
        GET_PAGE:"",
        GET_DETAIL_BY_ID:"",
        GET_DETAIL_PAGE:"",
        GET_ALL:"",
        COUNT:"",
}


class GenerateConfig{
        constructor(){
                this.add="";
                this.addBatch="";
                this.deleteById="";
                this.deleteBatch="";

        }
}

class GenerateConfigGroupBuilder{
        all(){

        }

        item(configer){

        }
}

class GenerateConfigItemBuilder{
        all(){

        }

        except(){

        }

        onlyQuery(){

        }

        noBatch(){

        }

        noGetAll(){
                
        }

}