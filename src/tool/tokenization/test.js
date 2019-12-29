/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-15 15:15:16
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-21 10:22:51
 */
const{tokenize}=require("./tokenizer");
const {LoggerFactory} =require("./../logging/logger-factory")
let LOG= LoggerFactory.getLogger("test");

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
          LOG.info(x);
  })
}

testTokenize();