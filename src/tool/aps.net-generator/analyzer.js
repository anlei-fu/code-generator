

const addExcludes = {
        int: ["id"],
        string: ["createUser", "updateUser","lastEditUser"],
        DateTime: ["createTime", "updateTime","lastEditTime"]
}




class AddAnalyzer {
        constructor() {
                this.addExcludes = addExcludes;
        }
        shouldBeCandidate(column) {
                if (!this.addExcludes[column.type])
                        return true;

                for (const c of this.addExcludes[column.type]) {
                        if (column.name == c)
                                return false;
                }
                return true;
        }
}
const selects = {
        int:{
                Status:{
                       text:"Name",
                       value:"Value",
                       defaultText:"--请选择--",
                       service:"SystemDictionary",
                },
                Type:{
                        text:"Name",
                        defaultText:"--请选择--",
                        defaultText:"",
                        service:"SystemDictionary",
                },
                State:{
                        text:"Name",
                        value:"Value",
                        defaultText:"--请选择--",
                        service:"SystemDictionary",
                }
        },
        string:{
                CityNo:{
                        text:"CityName",
                        value:"CityNo",
                        defaultText:"--请选择--",
                        service:"SystemDictionary",
                },
                ProvinceNo:{
                        text:"ProvinceName",
                        value:"ProvinceNo",
                        defaultText:"--请选择--",
                        service:"SystemDictionary",
                },
                ChnnelNo:{
                        text:"ProvinceName",
                        value:"ProvinceNo",
                        defaultText:"--请选择--",
                        service:"SystemDictionary",
                },
                ProductId:{
                        text:"ProvinceName",
                        value:"ProvinceNo",
                        defaultText:"--请选择--",
                        service:"SystemDictionary",
                }
                 ,
                ProductNo:{
                        text:"ProvinceName",
                        value:"ProvinceNo",
                        defaultText:"--请选择--",
                        service:"SystemDictionary",
                }
        }
}

const excludes = {
        string: ["no", "id", "order", "phone", "email", "idcard"],
}

class SelectAnalyzer {
        constructor() {
                this.candidates = selects;
                this.excludes = excludes;
        }

        shouldBeCandidate(column) {
               if(column.type=="DateTime")
                  return false;
                
               if(column.type=="int"){
                       
               }

                if(column.type=="string"){
                        for(const c of this.excludes["string"]){
                           if(column.name.toLowerCase().indexOf(c)!=-1)
                                return true
                        }

                        return false;
                }

                return true;
        }
}

const {SystemDictionary}=require("./resource/select")
class ControlAnlyzer {
        constructor() {
                this.selects = selects;
        }

        shouldBeSelect(column) {
                if (!selects[column.type])
                        return false;

                if(SystemDictionary[column.name])
                   return true;

                for (const c of selects[column.type]) {
                        if (column.name.indexOf(c) != -1)
                                return true;
                }

                return false;
        }

}


module.exports = {
        AddAnalyzer,
        SelectAnalyzer,
        ControlAnlyzer,
}