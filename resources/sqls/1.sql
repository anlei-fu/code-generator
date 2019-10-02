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
  if (v_bind_id is not null and length(v_bind_id) > 5) then
    select t.bind_id
      into l_bind_id
      from fc_order_bind t
     where t.bind_id = v_bind_id
       and t.bind_status = process_status.process
       for update;
  end if;

  select t.order_no
    into l_order_no
    from fc_order_main t
   where t.order_no = v_order_no
     and t.order_status = order_status.process
     for update;

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

  update fc_order_bind t
     set t.bind_status       = l_bind_status,
         t.end_time          = l_end_time,
         t.delivery_end_time = l_end_time,
         t.delivery_msg      = '处理中',
         t.action            = l_next_action
   where t.bind_id = l_bind_id;

  update fc_order_main t
     set t.order_status = l_order_status,
         t.finish_time  = l_end_time,
         t.error_msg    = '处理中',
         t.action       = l_next_action
   where t.order_no = v_order_no;
  
  return true;
end;
