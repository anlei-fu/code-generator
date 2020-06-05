class ApiResponse{

}

exports.ApiResponseFactory= class ApiResponseFactory{
        success({msg="",data}){

        }

        fail({msg=""}){

        }
        
        dataNotExist({table,id}){

        }

        systemError(){

        }

        dbError(){

        }
}