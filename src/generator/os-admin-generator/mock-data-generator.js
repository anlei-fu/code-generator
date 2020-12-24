const { SimpleRender } = require("../common/renders/SimplePatterRender");
const { STR ,NamingStrategy} = require("../../libs");
const { getJavaType } = require("../spring-boot/utils");

const MOCK_RENDER = new SimpleRender({}, `${__dirname}/template/mock.java`);
class MockGenerator {

        generate(table) {
                let name = STR.upperFirstLetter(table.name);
                name =name.substr(2,name.length-2);
                let columns = table.columns;
                let fields ="";
                Object.keys(columns).forEach(x=>{
                     if(columns[x].isPk||!this._isValidField(columns[x]))
                        return;
                     fields+=this._getField(columns[x]);
                });
               
                fields=fields.trim();
                return MOCK_RENDER.renderTemplate({
                        name,
                        fields
                });
        }
       
        _getField(column){
              let javaType =getJavaType(column.type);
              let name = NamingStrategy.toCamel(column.rawName);
              if(javaType=="Integer"){
                 return `.${name}(1)\r\n`;
              }else{
                return `.${name}("1")\r\n`;
              }
        }

        _isValidField(column){
             return !STR.includesAny(
                     column.name,
                     [
                     "createUser",
                     "createTime",
                     "updateUser",
                     "updateTime"
                ]
                );
        }
}

exports.MockGenerator = MockGenerator