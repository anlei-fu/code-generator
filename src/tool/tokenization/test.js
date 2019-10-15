/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-15 15:15:16
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-15 15:18:57
 */
const{tokenize}=require("./tokenizer");

function testTokenize(){
  let text=`
  -- select 
  select a from table t;
  "sss"
  -- "sss"
  /*\r\n
  dsfdsf
  */  4565.6 dsfs
  dsfs
  _a
  &&
  :=
  !=
  `;
  tokenize(text).forEach(x=>{
          console.log(x);
  })
}