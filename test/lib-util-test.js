/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-23 09:48:18
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 10:21:41
 */

const { OBJECT ,ARRAY} = require("./../src/libs/utils");
const { FILE } = require("./../src/libs/file");
function testObject() {
        let a = {
                name: "aaa",
                age: 14,
                parent: {
                        name: "aaa",
                        age: 14,
                }
        }

        FILE.write("1.js", OBJECT.text(a, "a"));
}

function testArrayDistinct(){
        let pattern=`import com.contract.mapper.UserRealInfoMapper;
        import com.contract.pojo.entity.UserRealInfo;
        import com.contract.pojo.entity.UserRealInfo;
        import com.contract.pojo.param.UpdateUserRealInfoByUserIdParams;
        import com.contract.pojo.req.AddUserRealInfoReq;
        import com.contract.pojo.req.GetUserRealInfoListReq;
        import com.contract.pojo.req.UpdateUserRealInfoByUserIdReq;
        import com.contract.service.UserRealInfoService;
        import com.contract.utils.PageHelperUtils;
        import com.github.pagehelper.PageInfo;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Service;`;

        let array= pattern.split("\n");

        console.log(ARRAY.distinct(array,x=>x.trim()));
}

// testObject();

testArrayDistinct()