/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-11 10:57:11
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-19 11:09:54
 */
const {STR} =require("./../src/libs/str");
const assert = require('assert');

let sentence=`alipay constant number(2)  =  1`;
function testSplitToWord(){
        
        let words= STR.splitToWords(sentence);
       words.forEach(w=>{
         console.log(w);
       })
}

function testRemoveWithMatch(){
        let text=`v_once_count number, --每次最大记录条数
        v_batch_id   out number, --批次号\n`;
        text=STR.removeWithMatch(text,"--","\n");
        console.log(text);
        //assert.equal("123",text);
}

function testSelect1(){
  let text=`v_once_count number, --每次最大记录条数
  v_batch_id   out number, --批次号\n`;

  console.log(STR.select1(text,"v","r"));
}

function testReverse(){
  let text="125678";
  console.log(STR.reverse(text));
}


function testSelect(){
  let text=`@packages
  import com.github.pagehelper.PageInfo;
  import com.test.pojo.entity.DamageRepositoryDevice;
  import com.test.pojo.req.AddDamageRepositoryDeviceReq;
  import com.test.pojo.req.GetDamageRepositoryDeviceListReq;
  import com.test.pojo.req.UpdateDamageRepositoryDeviceByOrderDetailIdReq;
  import com.test.pojo.resp.R;
  import com.test.service.DamageRepositoryDeviceService;
  import io.swagger.annotations.Api;
  import io.swagger.annotations.ApiOperation;
  import org.springframework.beans.factory.annotation.Autowired;
  import org.springframework.validation.annotation.Validated;
  import org.springframework.web.bind.annotation.*;
  @packages @packages 111 @packages`;

  let ls= STR.select(text,"@package","@package");
  console.log(ls.length);
  console.log(ls);
}

//testReverse();
//testSelect1();
//testSplitToWord();
// testRemoveWithMatch();

testSelect();
