const NAME_TYPE_MATCHERS={
    String:{
        description:{
            match:columnName=>true,
            type:"varchar",
            maxLength:"",
            minLength:""
        },
        name:{
            match:columnName=>true,
            type:"varchar",
            maxLength:"",
            minLength:""
        }
    },
    Integer:{

    },

}

class TableCheckResult{
    constructor(){
        
    }
}

class ColumnCheckResult{
    constructor(){
        this.nameMessge;
        this.typeMessage;
        this.desriptionMessage;
        this.primaryKeyMessaage;
        this.defaultValueMessage;
    }
}



class TableCheck{

    checkColumn(){

    }

    checkName(){

    }

    checkPrimaryKey(){

    }

    checkType(){

    }

    checkDefaultValue(){

    }

    checkDescription(){

    }
}