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
  let text=`create or replace procedure sp_manual_renew(v_task_id   number,
    v_status    number, --0:成功 90:失败
    v_trans_seq varchar2,
    v_remark    varchar2,
    v_operator  varchar2,
    v_ret_code  out number,
    v_ret_msg   out varchar2) as
/*
功能:手动续费
作者:jiyi
时间:2018-04-27
*/
l_task_id     number;
l_flow_id     number;
l_order_no    varchar2(32);
l_bind_id     varchar2(32);
l_action      varchar2(32);
l_ret_task_id number;
l_script      varchar2(128);
l_svc         varchar2(32);
l_ret         boolean;
begin
select t.tid, t.order_no, t.bind_id, t.action, t.flow_id
into l_task_id, l_order_no, l_bind_id, l_action, l_flow_id
from fc_flow_task t
where t.tid = v_task_id
and t.manual_status = process_status.wait
for update;

update fc_flow_task t
set t.task_status   = v_status,
t.manual_status = process_status.success,
t.uptranseq     = v_trans_seq,
t.task_msg      = v_remark,
t.task_end_time = sysdate
where t.tid = v_task_id;

l_ret := f_execute_next_step(l_flow_id,
l_action,
l_order_no,
l_bind_id,
v_status,
v_remark,
l_ret_task_id,
v_ret_msg,
l_script,
l_svc);

if (l_ret) then
commit;
v_ret_code := error_code.suc;
else
rollback;
v_ret_code := error_code.failure;
end if;

sp_add_operate_log(l_order_no,
l_bind_id,
operate_type.manual,
'订单:' || l_order_no || ',' || l_action || '手动续费',
v_task_id,
'',
v_operator);
exception
when others then
rollback;
sp_write_log('sp_manual_renew', v_task_id || ',' || sqlerrm);
v_ret_code := error_code.failure;
v_ret_msg  := '';
end;`;
  tokenize(text).forEach(x=>{
        console.log(x.value);
  })
}

testTokenize();