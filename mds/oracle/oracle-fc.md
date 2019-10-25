<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-01 17:28:50
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-01 17:56:14
 -->

## ***f_execute_next_step***
- v_flow_id  in number
-
-
1. ***pick parmeters from order_bind and lock row no wait by bind_id***
2. ***pick parmeters from order_bind and lock row no wait by bind_id***
3. ***call func***
4. ***update table ,update table***
``` sql
create or replace function f_execute_next_step(v_flow_id     number,
                                               v_cur_action  varchar2,
                                               v_order_no    varchar2,
                                               v_bind_id     varchar2,
                                               v_status      number,
                                               v_msg         varchar2,
                                               v_ret_task_id out number,
                                               v_ret_msg     out varchar2,
                                               v_ret_script  out varchar2,
                                               v_ret_svc     out varchar2)
  return boolean as
  /*
  功能:执行下一步
  作者:jiyi
  时间:2018-04-09
  */
  l_next_action  varchar2(32);
  l_bind_id      varchar2(32) := v_bind_id;
  l_order_no     varchar2(32);
  l_bind_status  number;
  l_order_status number;
  l_end_time     date;
  l_ret          boolean;
begin

 -- lock order_bind by bind_id and process_status (process)
  if (v_bind_id is not null and length(v_bind_id) > 5) then
    select t.bind_id
      into l_bind_id
      from fc_order_bind t
     where t.bind_id = v_bind_id
       and t.bind_status = process_status.process
       for update;
  end if;

  -- lock order_main by order_id  and order_status(process)
  select t.order_no
    into l_order_no
    from fc_order_main t
   where t.order_no = v_order_no
     and t.order_status = order_status.process
     for update;

  -- call [next_step](/)
  l_next_action := f_get_next_step(v_flow_id, v_cur_action);
  if (l_next_action is null or v_status = process_status.failure) then
    l_bind_status  := v_status;
    l_order_status := v_status;
    l_end_time     := sysdate;
  else
    l_bind_status  := process_status.process;
    l_order_status := order_status.process;
    if (v_status = process_status.success) then
      l_ret := f_create_task(v_flow_id,
                             l_next_action,
                             v_order_no,
                             l_bind_id,
                             v_ret_msg,
                             v_ret_task_id,
                             v_ret_script,
                             v_ret_svc);
      if (not l_ret) then
        return false;
      end if;
    end if;
  end if;

 -- update order_bind 
  update fc_order_bind t
     set t.bind_status       = l_bind_status,
         t.end_time          = l_end_time,
         t.delivery_end_time = l_end_time,
         t.delivery_msg      = '处理中',
         t.action            = l_next_action
   where t.bind_id = l_bind_id;
   
-- update  order_main
  update fc_order_main t
     set t.order_status = l_order_status,
         t.finish_time  = l_end_time,
         t.error_msg    = '处理中',
         t.action       = l_next_action
   where t.order_no = v_order_no;
  
  return true;
end;

```

## ***f_execute_next_step***
- v_flow_id  in number
-
-
```sql 
  create or replace function f_get_next_step(v_flow_id number, v_cur_step varchar2) return varchar2 as
  /*
  功能:获取流程下个步骤
  作者:jiyi
  时间:2018-04-08
  */
  l_step varchar2(32);
begin

 --- what's the advantage to use 'inner join' in this case 
  select min(t.action)
    into l_step
    from fc_flow_step t
   inner join fc_flow_step f
      on f.fid = t.fid
   where t.fid = v_flow_id
     and f.action = v_cur_step
     and t.sno = f.sno + 1;

  return l_step;
end;
```
### ***sp_add_operate_log***
```sql
create or replace procedure sp_add_operate_log(v_order_no     varchar2,
                                               v_bind_id      varchar2,
                                               v_operate_type number,
                                               v_remark       varchar2,
                                               v_taskid       number default 0,
                                               v_ip           varchar2 default '',
                                               v_operator     varchar2 default 'system') as
  pragma autonomous_transaction; --自治事务
  /*
  功能:添加订单操作记录
  作者:jiyi
  时间:2018-04-02
  */
begin
  insert into FC_order_operate
    (id,
     order_no,
     bind_id,
     operate_user,
     operate_type,
     remark,
     created_time,
     ip,
     task_id)
  values
    (seq_fcorderoperate_auto_id.nextval,
     v_order_no,
     v_bind_id,
     v_operator,
     v_operate_type,
     v_remark,
     sysdate,
     v_ip,
     v_taskid);
  commit;
exception
  when others then
    rollback;
    sp_write_log('sp_add_operate_log', sqlerrm);
end;

```