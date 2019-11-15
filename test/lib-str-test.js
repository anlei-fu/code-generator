/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-11 10:57:11
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 13:06:04
 */
const {STR} =require("./../src/libs/str");
const assert = require('assert');

let sentence=`begin
select t.province_no,
       l_down_channel_no,
       l_down_group_no
  from fc_order_main t
 inner join fc_down_product p
    on t.down_product_id = p.pid
 where t.order_no = v_order_no;
`;
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

testReverse();
//testSelect1();
// testSplitToWord();
// testRemoveWithMatch();
