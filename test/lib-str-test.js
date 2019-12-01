/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-11 10:57:11
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-29 14:23:35
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

//testReverse();
//testSelect1();
testSplitToWord();
// testRemoveWithMatch();
