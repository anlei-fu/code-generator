/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-15 14:20:32
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-15 15:11:52
 */
const { DATE } = require("./../src/libs/date")

function test() {
        console.log("now" + DATE.now().toLocaleString());
        console.log("yesterday" + DATE.yesterday().toLocaleString());
        console.log("nextMonth" + DATE.nextMonth().toLocaleString());
        console.log(DATE.toyyyy_MM_dd_hh_mm_ss(DATE.now()));
        let d=new Date(DATE.toyyyy_MM_dd_hh_mm_ss(DATE.now()));
}
test();