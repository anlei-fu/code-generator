const{all} =require("./../generator/common/table-analyze/table-info-resolvers/oracle-table-info-resolver/outputs/erp/all.js");
const {FILE,OBJECT} =require("./../libs")

function main(){
     let columnConfig=[];
     let query={
        pageIndex: 1,
        pageSize: 20,
     };
     let columns =all.goodsSpu.columns;
     let rules={};
     let editColumns="";

     Object.keys( columns).forEach(key=>{
           columnConfig.push({title:columns[key].description,field:key});
           query[key]=null;
           rules[key]=[{ required: true, message: "该参数不能为空", trigger: "blur" }];
           editColumns+=` <el-form-item label="${columns[key].description}" prop="${key}">
           <Input v-model="editModel.${key}" width="100%" placeholder="请输入" />
         </el-form-item>\r\n`;
     });

    FILE.write("./output/columns.js", OBJECT.text(columnConfig,"columns"));
    FILE.write("./output/query.js", OBJECT.text(query,"query"));
    FILE.write("./output/rules.js", OBJECT.text(rules,"rules"));
    FILE.write("./output/editColumns.vue", editColumns);
    
}

/*********************************************************************main**************************************************************** */
main();