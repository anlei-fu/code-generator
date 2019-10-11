/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-11 10:57:11
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-11 14:37:09
 */
const {STR} =require("./../src/libs/str");
const assert = require('assert');

function testSplitToWord(){
        let text="1 2 (',')";
        let words= STR.splitToWords(text);
        console.log(words);
        assert.equal(3,words.length);
}

function testRemoveWithMatch(){
        let text=`v_once_count number, --每次最大记录条数
        v_batch_id   out number, --批次号\n`;
        text=STR.removeWithMatch(text,"--","\n");
        console.log(text);
        //assert.equal("123",text);
}


testSplitToWord();
testRemoveWithMatch();
