Creating procedure SP_WRITE_LOG
prompt ===============================
prompt
create or replace procedure qxfc.sp_write_log(v_object_name  in varchar2,
                                         v_error_detail in varchar2,
                                         v_error_code   in varchar2 default '200') as
  pragma autonomous_transaction;
begin
  insert into fc_system_log
    (id, object_name, error_level, error_desc, created_time, trace_info)
  values
    (seq_systemlog_auto_id.nextval,
     substr(v_object_name, 1, 255),
     v_error_code,
     substr(v_error_detail, 1, 255),
     sysdate,
     dbms_utility.format_error_backtrace);
  commit;
exception
  when others then
    rollback;
end;
/

prompt
prompt Creating function F_WARN_INSERT
prompt ===============================
prompt
create or replace function qxfc.f_warn_insert(v_title     varchar2,
                                         v_content   varchar2,
                                         v_key_words varchar2,
                                         v_level     number) return boolean is
  /*
     功能：添加报警记录
     作者：jiyi
     时间：2016-07-11 11:33:24
  */

begin
  insert into FC_WARN_MSG
    (id, title, content, keywords, warn_level, created_time, is_sync)
  values
    (seq_warn_msgid.nextval,
     substr(v_title, 0, 100),
     substr(v_content, 0, 1000),
     v_key_words,
     v_level,
     sysdate,
     enable_status.enabled);
  return(true);
end;
/

prompt
prompt Creating procedure SP_WARN_INSERT
prompt =================================
prompt
create or replace procedure qxfc.sp_warn_insert(v_key_words varchar2,
                                           v_content   varchar2,
                                           v_level     number default 3) as
  pragma autonomous_transaction; --自治事务
  l_status boolean;
begin
  l_status := f_warn_insert(v_key_words, v_content, v_key_words, v_level);
  commit;

exception
  when others then
    rollback;
    sp_write_log('sp_warn_insert', sqlerrm);
end;
/

prompt
prompt Creating function F_CREATE_UP_TASK
prompt ==================================
prompt
create or replace function qxfc.f_create_up_task(v_flow_id    number,
                                            v_action     varchar2,
                                            v_order_no   varchar2,
                                            v_bind_id    in out varchar2,
                                            v_ret_taskid out number,
                                            v_ret_msg    out varchar2,
                                            v_ret_script out varchar2,
                                            v_ret_svc    out varchar2)
  return boolean as
  /*
  功能:创建和上游相关的任务
  作者:jiyi
  时间:2018-04-09
  */
  l_task_id         number;
  l_bind_id         varchar2(32);
  l_order_no        varchar2(64);
  l_down_order_no   varchar2(64);
  l_down_channel_no varchar2(32);
  l_down_price      number(20, 5);
  l_trade_fee       number(20, 5);
  l_phone           varchar2(32);
  l_package_id      number;
  l_product_type    number;
  l_face            number;
  l_product_id      number;
  l_up_channel_no   varchar2(32);
  l_up_account_id   number;
  l_up_pid          number;
  l_up_cost         number;
  l_up_reward       number;
  l_script_type     number;
  l_script_id       number;
  l_script_path     varchar2(128);
  l_svc_bus         varchar2(32);
  l_msg             varchar2(128);
  l_bind_mode       number;
  l_flow_id         number;
  l_channel_name    varchar2(32);
  l_write_card_mode number;
begin
  select t.script_type
    into l_script_type
    from fc_flow_step t
   where t.fid = v_flow_id
     and t.action = v_action;

  if (l_script_type is null) then
    v_ret_msg := '没有配置该类型的脚本';
    return false;
  end if;

  select t.order_no,
         t.down_order_no,
         t.down_channel_no,
         t.down_product_id,
         t.face,
         t.pay_fee,
         t.trade_fee,
         t.active_phone,
         t.package_id,
         t.product_type,
         t.flow_id
    into l_order_no,
         l_down_order_no,
         l_down_channel_no,
         l_product_id,
         l_face,
         l_down_price,
         l_trade_fee,
         l_phone,
         l_package_id,
         l_product_type,
         l_flow_id
    from fc_order_main t
   where t.order_no = v_order_no
     and t.order_status = order_status.process
     for update nowait;

  select t.bind_mode, t.write_card_mode
    into l_bind_mode, l_write_card_mode
    from fc_down_product t
   where t.pid = l_product_id;

  --获取上游产品信息
  for it in (select up.channel_no,
                    up.product_no,
                    up.pid,
                    up.cost,
                    up.reward,
                    us.sid,
                    us.script_path,
                    us.svc_bus,
                    0 as acct_id,
                    uc.channel_name
               from fc_down_product dp
              inner join fc_up_product up
                 on up.package_id = dp.package_id
              inner join fc_up_channel uc
                 on uc.channel_no = up.channel_no
             /*inner join fc_up_account ua
             on uc.channel_no = ua.channel_no*/
              inner join fc_up_script us
                 on uc.channel_no = us.channel_no
              inner join fc_flow_step fs
                 on fs.fid = dp.flow_id
              where dp.pid = l_product_id
                and fs.action = v_action
                   --and ua.status = enable_status.enabled
                and up.status = enable_status.enabled
                and uc.status = enable_status.enabled
                and us.status = enable_status.enabled
                and us.script_type = fs.script_type
                and (up.province_no = dp.province_no or
                    up.province_no = 'QG')
                and (up.carrier_no = dp.carrier_no or up.carrier_no = '*')
                and (up.city_no = dp.city_no or up.city_no = '*')
                and (up.product_type = dp.product_type or
                    up.product_type = 0)
                and (us.product_type = dp.product_type or
                    us.product_type = 0)
                and (us.package_id = dp.package_id or us.package_id = 0)
                and (us.carrier_no = up.carrier_no or us.carrier_no = '*')
                and (us.province_no = up.province_no or
                    us.province_no = 'QG')
                and (us.city_no = up.city_no or us.city_no = '*')
                and us.script_type = l_script_type
                   /*and (ua.carrier_no = up.carrier_no or ua.carrier_no = '*')
                   and (ua.province_no = up.province_no or
                       ua.province_no = 'QG')
                   and (ua.city_no = up.city_no or ua.city_no = '*')*/
                and not exists
              (select 1
                       from fc_down_exclude_up ex
                      where ex.down_channel_no = dp.channel_no
                        and ex.down_group_no = dp.group_no
                        and ex.up_channel_no = uc.channel_no
                        and ex.up_group_no = up.group_no
                        and ex.status = enable_status.enabled)
                and (l_bind_mode = bind_mode.Free or exists
                     (select 1
                        from fc_down_specify_up su
                       where su.down_channel_no = dp.channel_no
                         and su.down_group_no = dp.group_no
                         and su.up_channel_no = uc.channel_no
                         and su.up_group_no = up.group_no
                         and su.status = enable_status.enabled))
              order by up.cost asc, up.reward desc) loop
    l_channel_name  := it.channel_name;
    l_up_channel_no := it.channel_no;
    l_up_pid        := it.pid;
    l_up_account_id := it.acct_id;
    l_up_cost       := nvl(it.cost, 0);
    l_up_reward     := it.reward;
    l_script_id     := it.sid;
    l_script_path   := it.script_path;
    l_svc_bus       := it.svc_bus;
    exit;
  end loop;

  if (l_up_channel_no is null) then
    l_msg := v_action || '没有可用上游渠道';
    update fc_order_main t
       set t.error_code   = 200,
           t.error_msg    = l_msg,
           t.order_status = order_status.failure
     where t.order_no = l_order_no;
  
    v_ret_msg := l_msg;
    sp_warn_insert(Warn_Keywords.task_exception,
                   '订单:' || l_order_no || l_msg,
                   3);
    return false;
  end if;

  /*l_bind_id := f_new_bind_id();
  insert into fc_order_bind
    (bind_id,
     order_no,
     down_order_no,
     down_channel_no,
     up_channel_no,
     up_product_id,
     up_account_id,
     face,
     down_price,
     down_trade_fee,
     up_cost,
     up_reward,
     phone_no,
     product_type,
     package_id,
     script_id,
     script_path,
     svc_bus,
     bind_time,
     bind_status,
     flow_id,
     action)
  values
    (l_bind_id,
     l_order_no,
     l_down_order_no,
     l_down_channel_no,
     l_up_channel_no,
     l_up_pid,
     l_up_account_id,
     l_face,
     l_down_price,
     l_trade_fee,
     l_up_cost,
     l_up_reward,
     l_phone,
     l_product_type,
     l_package_id,
     l_script_id,
     l_script_path,
     l_svc_bus,
     sysdate,
     process_status.process,
     l_flow_id,
     v_action);*/

  l_task_id := SEQ_FLOW_TASK_ID.Nextval;
  insert into fc_flow_task
    (tid,
     flow_id,
     order_no,
     bind_id,
     action,
     up_channel_no,
     channel_name,
     script_type,
     script_id,
     script_path,
     svc_bus,
     up_product_id,
     write_card_mode,
     down_price,
     trade_fee,
     up_cost,
     up_reward)
  values
    (l_task_id,
     v_flow_id,
     v_order_no,
     nvl(v_bind_id, l_bind_id),
     v_action,
     l_up_channel_no,
     l_channel_name,
     l_script_type,
     l_script_id,
     l_script_path,
     l_svc_bus,
     l_up_pid,
     l_write_card_mode,
     l_down_price,
     l_trade_fee,
     l_up_cost,
     l_up_reward);

  if (l_write_card_mode = write_card_mode.manual) then
    update fc_flow_task t
       set t.task_status   = process_status.process,
           t.manual_status = process_status.wait
     where t.tid = l_task_id;
  end if;

  v_bind_id    := l_bind_id;
  v_ret_taskid := l_task_id;
  v_ret_script := l_script_path;
  v_ret_svc    := l_svc_bus;
  v_ret_msg    := 'OK';
  return true;
end;
/

prompt
prompt Creating function F_CREATE_TASK
prompt ===============================
prompt
create or replace function qxfc.f_create_task(v_flow_id     number,
                                         v_action      varchar2,
                                         v_order_no    varchar2,
                                         v_bind_id     in out varchar2,
                                         v_ret_msg     out varchar2,
                                         v_ret_task_id out number,
                                         v_ret_script  out varchar2,
                                         v_ret_svc     out varchar2)
  return boolean as
  /*
  功能:创建任务
  作者:jiyi
  时间:2018-04-09
  */
  l_cntr number;
  l_ret  boolean;
begin
  select count(1)
    into l_cntr
    from fc_flow_task t
   where t.action = v_action
     and t.order_no = v_order_no;
  if (l_cntr > 0) then
    v_ret_script  := '';
    v_ret_svc     := '';
    v_ret_task_id := -1;
    v_ret_msg     := v_action || '任务已经存在';
    return false;
  end if;

  if (v_action = action_type.print_express) then
    l_ret := f_create_express_task(v_flow_id,
                                   v_action,
                                   v_order_no,
                                   v_bind_id,
                                   v_ret_task_id,
                                   v_ret_msg,
                                   v_ret_script,
                                   v_ret_svc);
  elsif (v_action = action_type.plat_delivery or
        v_action = action_type.get_identity) then
    l_ret := f_create_down_task(v_flow_id,
                                v_action,
                                v_order_no,
                                v_bind_id,
                                v_ret_task_id,
                                v_ret_msg,
                                v_ret_script,
                                v_ret_svc);
  elsif (v_action = action_type.device) then
    l_ret := f_create_task_by_product(v_flow_id,
                                      v_action,
                                      v_order_no,
                                      v_bind_id,
                                      special_product_type.device,
                                      v_ret_task_id,
                                      v_ret_msg,
                                      v_ret_script,
                                      v_ret_svc);
  elsif (v_action = action_type.query_express) then
    l_ret := f_create_query_express_task(v_flow_id,
                                         v_action,
                                         v_order_no,
                                         v_bind_id,
                                         v_ret_task_id,
                                         v_ret_msg,
                                         v_ret_script,
                                         v_ret_svc);
  else
    l_ret := f_create_up_task(v_flow_id,
                              v_action,
                              v_order_no,
                              v_bind_id,
                              v_ret_task_id,
                              v_ret_msg,
                              v_ret_script,
                              v_ret_svc);
    if (v_action = action_type.book_install) then
      update fc_flow_task t
         set t.manual_status = process_status.wait,
             t.task_status   = process_status.process
       where t.tid = v_ret_task_id;
    end if;
  end if;

  return l_ret;
end;
/

prompt
prompt Creating function F_GET_NEXT_STEP
prompt =================================
prompt
create or replace function qxfc.f_get_next_step(v_flow_id number, v_cur_step varchar2) return varchar2 as
  /*
  功能:获取流程下个步骤
  作者:jiyi
  时间:2018-04-08
  */
  l_step varchar2(32);
begin
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
/

prompt
prompt Creating function F_EXECUTE_NEXT_STEP
prompt =====================================
prompt
create or replace function qxfc.f_execute_next_step(v_flow_id     number,
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
/

prompt
prompt Creating function F_FUND_CHANGE_DOWN
prompt ====================================
prompt
create or replace function qxfc.f_fund_change_down(v_down_channel  varchar2,
                                              v_down_order_no varchar2,
                                              v_order_no      varchar2,
                                              v_change_money  number,
                                              v_change_type   number,
                                              v_remark        varchar2,
                                              v_trade_fee     number default 0,
                                              v_adjust        number default enable_status.disabled,
                                              v_operator      varchar2 default 'system',
                                              v_operate_type  number default operate_type.system)
  return boolean as
  /*
  功能:下游资金变更
  作者:jiyi
  时间:2018-04-13
  */
  l_cntr         number;
  l_old_balance  number;
  l_change_money number;
begin
  select abs(v_change_money) * decode(v_change_type,
                                      fund_change_type.add,
                                      1,
                                      fund_change_type.reward,
                                      1,
                                      fund_change_type.reduce,
                                      -1,
                                      fund_change_type.refund,
                                      -1)
    into l_change_money
    from dual;

  if (v_change_type in (fund_change_type.add, fund_change_type.refund)) then
    select count(1)
      into l_cntr
      from fc_fund_change_down t
     where t.channel_no = v_down_channel
       and t.order_no = v_order_no
       and t.change_type = v_change_type;
    if (l_cntr > 0) then
      return false;
    end if;
  end if;

  select t.balance
    into l_old_balance
    from fc_down_channel t
   where t.channel_no = v_down_channel
     for update;

  update fc_down_channel t
     set t.balance = l_old_balance + l_change_money
   where t.channel_no = v_down_channel;

  insert into fc_fund_change_down
    (id,
     order_no,
     channel_no,
     down_order_no,
     change_type,
     change_money,
     trade_fee,
     old_balance,
     after_balance,
     change_time,
     is_adjust,
     operate_user,
     operate_type,
     remark)
  values
    (seq_fcfundchangedown_auto_id.nextval,
     v_order_no,
     v_down_channel,
     v_down_order_no,
     v_change_type,
     l_change_money,
     v_trade_fee,
     l_old_balance,
     l_old_balance + l_change_money,
     sysdate,
     v_adjust,
     v_operator,
     v_operate_type,
     v_remark);

  return true;
end;
/

prompt
prompt Creating function F_FUND_CHANGE_UP
prompt ==================================
prompt
create or replace function qxfc.f_fund_change_up(v_channel_no   varchar2,
                                            v_order_no     varchar2,
                                            v_bind_id      varchar2,
                                            v_change_type  number,
                                            v_change_money number,
                                            v_remark       varchar2,
                                            v_adjust       number default enable_status.disabled,
                                            v_operate_type number default operate_type.system,
                                            v_operator     varchar2 default 'system')
  return boolean as
  /*
  功能:上游资金变更
  作者:jiyi
  时间:2018-04-13
  */
  l_old_balance number;
  l_up_cost     number;
begin
  if (v_change_money = 0) then
    return true;
  end if;

  select abs(v_change_money) * decode(v_change_type,
                                      fund_change_type.add,
                                      1,
                                      fund_change_type.reward,
                                      1,
                                      fund_change_type.reduce,
                                      -1,
                                      fund_change_type.refund,
                                      1,
                                      fund_change_type.express,
                                      1)
    into l_up_cost
    from dual;

  select t.balance
    into l_old_balance
    from fc_up_channel t
   where t.channel_no = v_channel_no
     for update;

  update fc_up_channel t
     set t.balance = l_old_balance + l_up_cost
   where t.channel_no = v_channel_no;

  insert into fc_fund_change_up
    (id,
     order_no,
     channel_no,
     bind_id,
     change_type,
     change_money,
     old_balance,
     after_balance,
     change_time,
     is_adjust,
     operate_user,
     operate_type,
     remark,
     sync_time)
  values
    (seq_fcfundchangeup_auto_id.nextval,
     v_order_no,
     v_channel_no,
     v_bind_id,
     v_change_type,
     l_up_cost,
     l_old_balance,
     l_old_balance + l_up_cost,
     sysdate,
     v_adjust,
     v_operator,
     v_operate_type,
     v_remark,
     sysdate);

  return true;
end;
/

prompt
prompt Creating function F_TRANS_JSON_CHAR
prompt ===================================
prompt
create or replace function qxfc.f_trans_json_char(sourcestr in varchar2)
  return varchar2 is
  l_tmp_str varchar2(4000);
begin
  l_tmp_str := replace(sourcestr, '"', '\"');
  l_tmp_str := translate(l_tmp_str, chr(13) || chr(10), ','); --替换换行符号
  return l_tmp_str;
end;
/

prompt
prompt Creating function F_JSON_ADD
prompt ============================
prompt
create or replace function qxfc.f_json_add(i_content  varchar2,

                                      i_key_name varchar2,
                                      i_value    varchar2) return varchar2 is
begin
  if (i_content is null) then
    return i_content || '"' || i_key_name || '":"' || f_trans_json_char(i_value) || '"';
  else
    return i_content || ',"' || i_key_name || '":"' || f_trans_json_char(i_value) || '"';
  end if;
end;
/

prompt
prompt Creating function F_GET_BIND_RESULT
prompt ===================================
prompt
create or replace function qxfc.f_get_bind_result(v_bind_id     varchar2,
                                             v_code        varchar2,
                                             v_msg         varchar2,
                                             v_svc_bus     varchar2 default '',
                                             v_script_path varchar2 default '') return varchar2 is
  l_content varchar2(512);
begin
  l_content := f_json_add(l_content, 'bind_id', nvl(v_bind_id, ''));
  l_content := f_json_add(l_content, 'code', nvl(v_code, ''));
  l_content := f_json_add(l_content, 'msg', nvl(v_msg, ''));
  l_content := f_json_add(l_content, 'service', nvl(v_svc_bus, ''));
  l_content := '{' || f_json_add(l_content, 'script', nvl(v_script_path, '')) || '}';
  return l_content;
end;
/

prompt
prompt Creating function F_GET_REFUND_RESULT
prompt =====================================
prompt
create or replace function qxfc.f_get_refund_result(v_refund_id varchar2,
                                               v_code      varchar2,
                                               v_msg       varchar2) return varchar2 is
  l_content varchar2(512);
begin
  l_content := f_json_add(l_content, 'refund_id', nvl(v_refund_id, ''));
  l_content := f_json_add(l_content, 'code', nvl(v_code, ''));
  l_content := '{' || f_json_add(l_content, 'msg', nvl(v_msg, '')) || '}';
  return l_content;
end;
/

prompt
prompt Creating function F_GET_TASK_RESULT
prompt ===================================
prompt
create or replace function qxfc.f_get_task_result(v_order_no    varchar2,
                                             v_code        varchar2,
                                             v_msg         varchar2,
                                             v_task_id     number default -1,
                                             v_script_path varchar2 default '',
                                             v_svc_bus     varchar2 default '')
  return varchar2 is
  l_content varchar2(512);
begin
  l_content := f_json_add(l_content, 'order_no', nvl(v_order_no, ''));
  l_content := f_json_add(l_content, 'task_id', nvl(v_task_id, -1));
  l_content := f_json_add(l_content, 'script_path', nvl(v_script_path, ''));
  l_content := f_json_add(l_content, 'svc_bus', nvl(v_svc_bus, ''));
  l_content := f_json_add(l_content, 'code', nvl(v_code, ''));
  l_content := '{' || f_json_add(l_content, 'msg', nvl(v_msg, '')) || '}';
  return l_content;
end;
/

prompt
prompt Creating function F_GET_UP_ACCOUNT
prompt ==================================
prompt
create or replace function qxfc.f_get_up_account(v_task_id      number,
                                            v_order_no     varchar2,
                                            v_ret_acct_id  out number,
                                            v_ret_acct_no  out varchar2,
                                            v_ret_acct_pwd out varchar2)
  return boolean as
  /*
  功能:获取上游帐号
  作者:jiyi
  时间:2018-05-21
  */
  l_up_channel_no varchar2(32);
  l_carrier_no    varchar2(32);
  l_province      varchar2(32);
  l_city          varchar2(32);
begin
  select t.up_channel_no
    into l_up_channel_no
    from fc_flow_task t
   where t.tid = v_task_id;

  select t.carrier_no, t.province_no, t.city_no
    into l_carrier_no, l_province, l_city
    from fc_order_main t
   where t.order_no = v_order_no;

  select t.id, t.account_no, t.account_pwd
    into v_ret_acct_id, v_ret_acct_no, v_ret_acct_pwd
    from (select t.id,
                 t.account_no,
                 t.account_pwd,
                 (case
                   when t.city_no = l_city then
                    0
                   else
                    1
                 end) priority
            from fc_up_account t
           where t.channel_no = l_up_channel_no
             and (t.carrier_no = l_carrier_no or t.carrier_no = '*')
             and (t.province_no = 'QG' or t.province_no = l_province)
             and (t.city_no = '*' or t.city_no = l_city)
             and t.status = enable_status.enabled
           order by priority) t
   where rownum = 1;
  return true;
end;
/

prompt
prompt Creating function F_NEW_BIND_ID
prompt ===============================
prompt
create or replace function qxfc.f_new_bind_id return varchar2 is
  /*
     功能生成绑定编号
     作者:jiyi
     时间:2018-04-02
  */

begin
  return to_char(sysdate, 'yyyymmddhh24miss') || SEQ_FCORDERBIND_AUTO_ID.nextval;
end;
/

prompt
prompt Creating function F_NEW_ORDER_NO
prompt ================================
prompt
create or replace function qxfc.f_new_order_no return varchar2 is
  l_result varchar2(100);
begin
  l_result := 'FC' || to_char(sysdate, 'yymmddhh24miss') || SEQ_FCORDERMAIN_AUTO_ID.nextval;
  return l_result;
end;
/

prompt
prompt Creating function F_SCAN_MAIL
prompt =============================
prompt
create or replace function qxfc.f_scan_mail(v_fr         number, --该记录下次进入后补时间
                                       v_once_count number, --每次最大记录条数
                                       v_batch_id   out number, --批次号
                                       v_count      out number --记录条数
                                       ) return number is
  /*
  功能:后补生成快递单号
  作者:jiyi
  时间:2016-05-30
  */
  l_id number;
begin
  v_count := 0;
  for i in (select t.tid
              from fc_flow_task t
             inner join fc_order_express e
                on e.taskid = t.tid
             where ((t.next_time <= sysdate and t.next_time > sysdate - 1) or
                   t.next_time is null)
               and t.task_status = process_status.wait
               and e.express_status = express_status.wait_print
               and rownum <= v_once_count) loop
    if (v_batch_id is null) then
      v_batch_id := seq_batch_id.nextval;
    end if;
    begin
      select t.tid
        into l_id
        from fc_flow_task t
       where t.tid = i.tid
         and t.task_status = process_status.wait
         and (t.next_time <= sysdate or t.next_time is null)
         for update nowait;
    exception
      when others then
        continue;
    end;
  
    update fc_flow_task t
       set t.next_time = sysdate + v_fr / 24 / 60 / 60,
           t.scan_id   = v_batch_id
     where t.tid = i.tid;
    v_count := v_count + 1;
  end loop;
  if (v_count > 0) then
    return error_code.suc;
  else
    return error_code.failure;
  end if;
end;
/

prompt
prompt Creating function F_SCAN_NOTIFY
prompt ===============================
prompt
create or replace function qxfc.f_scan_notify(v_fr         number, --该记录下次进入后补时间
                                         v_once_count number, --每次最大记录条数
                                         v_batch_id   out number, --批次号
                                         v_count      out number --记录条数
                                         ) return number is
  /*
  功能:后补通知
  作者:jiyi
  时间:2016-05-30
  */
  l_id number;
begin
  v_count := 0;
  for i in (select t.id
              from fc_notify_record t
             where ((t.next_time <= sysdate and t.next_time > sysdate - 1) or
                   t.next_time is null)
               and t.status = process_status.wait
               and rownum <= v_once_count) loop
    if (v_batch_id is null) then
      v_batch_id := seq_batch_id.nextval;
    end if;
    begin
      select t.id
        into l_id
        from fc_notify_record t
       where t.id = i.id
         and t.status = process_status.wait
         and (t.next_time <= sysdate or t.next_time is null)
         for update nowait;
    exception
      when others then
        continue;
    end;
  
    update fc_notify_record t
       set t.next_time = sysdate + v_fr / 24 / 60 / 60,
           t.scan_id   = v_batch_id
     where t.id = i.id;
    v_count := v_count + 1;
  end loop;
  if (v_count > 0) then
    return error_code.suc;
  else
    return error_code.failure;
  end if;
end;
/

prompt
prompt Creating function F_SCAN_PLAT_DELIVERY
prompt ======================================
prompt
create or replace function qxfc.f_scan_plat_delivery(v_fr         number, --该记录下次进入后补时间
                                                v_once_count number, --每次最大记录条数
                                                v_batch_id   out number, --批次号
                                                v_count      out number --记录条数
                                                ) return number is
  /*
  功能:后补平台发货
  作者:jiyi
  时间:2016-05-30
  */
  l_id number;
begin
  v_count := 0;
  for i in (select t.tid
              from fc_flow_task t
             inner join fc_order_express e
                on e.taskid = t.tid
             where ((t.next_time <= sysdate and t.next_time > sysdate - 1) or
                   t.next_time is null)
               and t.task_status = process_status.wait
               and e.express_status = express_status.wait_plat_delivery
               and rownum <= v_once_count) loop
    if (v_batch_id is null) then
      v_batch_id := seq_batch_id.nextval;
    end if;
    begin
      select t.tid
        into l_id
        from fc_flow_task t
       where t.tid = i.tid
         and t.task_status = process_status.wait
         and (t.next_time is null or t.next_time <= sysdate)
         for update nowait;
    exception
      when others then
        continue;
    end;
  
    update fc_flow_task t
       set t.next_time = sysdate + v_fr / 24 / 60 / 60,
           t.scan_id   = v_batch_id
     where t.tid = i.tid;
    v_count := v_count + 1;
  end loop;
  if (v_count > 0) then
    return error_code.suc;
  else
    return error_code.failure;
  end if;
end;
/

prompt
prompt Creating function F_SCAN_TASK
prompt =============================
prompt
create or replace function qxfc.f_scan_task(v_fr         number, --该记录下次进入后补时间
                                       v_once_count number, --每次最大记录条数
                                       v_batch_id   out number, --批次号
                                       v_count      out number --记录条数
                                       ) return number is
  /*
  功能:后补任务
  作者:jiyi
  时间:2016-05-30
  */
  l_id number;
begin
  v_count := 0;
  for i in (select t.tid
              from fc_flow_task t
             where ((t.next_time < sysdate and t.next_time > sysdate - 1) or
                   t.next_time is null)
               and t.task_status = process_status.wait
               and t.action not in
                   (action_type.print_express, action_type.plat_delivery)
               and rownum <= v_once_count) loop
    if (v_batch_id is null) then
      v_batch_id := seq_batch_id.nextval;
    end if;
    begin
      select t.tid
        into l_id
        from fc_flow_task t
       where t.tid = i.tid
         and t.task_status = process_status.wait
         for update nowait;
    exception
      when others then
        continue;
    end;
  
    update fc_flow_task t
       set t.next_time = sysdate + v_fr / 24 / 60 / 60,
           t.scan_id   = v_batch_id
     where t.tid = i.tid;
    v_count := v_count + 1;
  end loop;
  if (v_count > 0) then
    return error_code.suc;
  else
    return error_code.failure;
  end if;
end;
/

prompt
prompt Creating function F_SPLIT_STR
prompt =============================
prompt
CREATE OR REPLACE FUNCTION QXFC.f_split_str(p_str       IN VARCHAR2,
                                       p_delimiter IN VARCHAR2 default (','))
  RETURN split_type IS
  j        number := 0;
  i        number := 1;
  len      number := 0;
  len1     number := 0;
  str      VARCHAR2(1000);
  my_split split_type := split_type();
BEGIN
  len  := LENGTH(p_str);
  len1 := LENGTH(p_delimiter);

  WHILE j < len LOOP
    j := INSTR(p_str, p_delimiter, i);

    IF j = 0 THEN
      j   := len;
      str := SUBSTR(p_str, i);
      my_split.EXTEND;
      my_split(my_split.COUNT) := str;

      IF i >= len THEN
        EXIT;
      END IF;
    ELSE
      str := SUBSTR(p_str, i, j - i);
      i   := j + len1;
      my_split.EXTEND;
      my_split(my_split.COUNT) := str;
    END IF;
  END LOOP;

  RETURN my_split;
END;
/

prompt
prompt Creating function F_UPDATE_ORDER_INFO
prompt =====================================
prompt
create or replace function qxfc.f_update_order_info(v_order_no        varchar2,
                                               v_tmall_status    varchar2,
                                               v_recv_name       varchar2,
                                               v_recv_phone      varchar2,
                                               v_address         varchar2,
                                               v_install_address varchar2,
                                               v_buyer_msg       varchar2,
                                               v_priority        varchar2,
                                               v_seller_msg      varchar2)
  return boolean as
  /*
  功能:更新订单信息
  作者:jiyi
  时间:2018-04-19
  */
begin
  update fc_order_main t
     set t.ext2 = nvl(v_seller_msg, t.ext2),
         t.ext1 = nvl(v_priority, t.ext1)
   where t.order_no = v_order_no;

  update fc_order_ext t
     set t.buyer_name      = v_recv_name,
         t.buyer_phone     = v_recv_phone,
         t.buyer_address   = v_address,
         t.buyer_message   = v_buyer_msg,
         t.tmall_status    = v_tmall_status,
         t.install_address = v_install_address
   where t.order_no = v_order_no;
  return true;
end;
/

prompt
prompt Creating function F_UPDATE_TASK_MSG
prompt ===================================
prompt
create or replace function qxfc.f_update_task_msg(v_order_no      varchar2,
                                             v_task_id       number,
                                             v_msg           varchar2,
                                             v_manual_status number default 10)
  return boolean is
begin
  update fc_order_main t
     set t.error_msg = v_msg
   where t.order_no = v_order_no;

  update fc_flow_task t
     set t.task_msg = v_msg, t.manual_status = v_manual_status
   where t.tid = v_task_id;
  return true;
end;
/

prompt
prompt Creating procedure ACCT_SYNC_GET
prompt ================================
prompt
create or replace procedure qxfc.acct_sync_get(v_robot_ip    varchar2, --机器编号
                                          v_sync_type   number, --同步类型:1-上游资金变更, 2:下游资金变更
                                          v_change_type number, --资金变更类型
                                          v_out_status  out number, --状态:100表示成功
                                          v_out_msg     out varchar2, --错误消息
                                          v_begin_idx   out number, --开始编号(闭区间)
                                          v_end_idx     out number --结束编号(闭区间)
                                          ) as
  /*
  功能:资金变动同步到记账系统
  作者:jiyi
  时间:2016-04-13
  */
  l_min_count    number; --最小同步笔数
  l_last_exec_id number; --上次执行编号
  l_begin_time   date := to_date('2016-04-19', 'yyyy-mm-dd'); --同步初始时间
  l_count        number;
begin
  begin
    select nvl(t.last_exec_id, 1), nvl(t.min_count, 100)
      into l_last_exec_id, l_min_count
      from acct_sync_config t
     where t.channel_type = v_sync_type
       and t.change_type = v_change_type
       for update;
  exception
    when others then
      rollback;
      v_out_status := error_code.failure;
      v_out_msg    := '获取锁失败';
      return;
  end;

  if (l_last_exec_id is null) then
    --上游订单资金变动
    if (v_sync_type = 1) then
      select max(t.id) + 1
        into l_last_exec_id
        from fc_fund_change_up t
       where t.change_type = v_change_type
         and t.change_time < l_begin_time
         and t.change_time > l_begin_time - 1 / 24
         and t.sync_status = process_status.success;
    else
      select max(t.id) + 1
        into l_last_exec_id
        from fc_fund_change_down t
       where t.change_type = v_change_type
         and t.change_time < l_begin_time
         and t.change_time > l_begin_time - 1
         and t.sync_status = process_status.success;
    end if;
    if (l_last_exec_id is null) then
      rollback;
      v_out_status := error_code.failure;
      v_out_msg    := '取初始编号失败';
      return;
    end if;
  end if;

  if (v_sync_type = 1) then
    select count(1), min(t.id), max(t.id)
      into l_count, v_begin_idx, v_end_idx
      from fc_fund_change_up t
     where t.id between l_last_exec_id and l_last_exec_id + l_min_count - 1
       and t.sync_status = process_status.wait
       and t.change_type = v_change_type;
  else
    select count(1), min(t.id), max(t.id)
      into l_count, v_begin_idx, v_end_idx
      from fc_fund_change_down t
     where t.id between l_last_exec_id and l_last_exec_id + l_min_count - 1
       and t.sync_status = process_status.wait
       and t.change_type = v_change_type;
  end if;

  if (l_count < 1) then
    rollback;
    v_out_status := error_code.failure;
    v_out_msg    := '记录数太小,无需再取';
    v_begin_idx  := null;
    v_end_idx    := null;
  
    --中间无数据时,网上自动跳一格
    if (v_sync_type = 1) then
      select count(1)
        into l_count
        from fc_fund_change_up t
       where t.id >= l_last_exec_id + l_min_count;
    else
      select count(1)
        into l_count
        from fc_fund_change_down t
       where t.id >= l_last_exec_id + l_min_count;
    end if;
  
    --自动跳一格有数据，下次从这里开始
    if (l_count > 0) then
      update acct_sync_config t
         set t.last_exec_id   = l_last_exec_id + l_min_count - 1,
             t.last_exec_time = sysdate,
             t.robot_ip       = v_robot_ip
       where t.channel_type = v_sync_type
         and t.change_type = v_change_type;
      commit;
    end if;
    return;
  end if;

  update acct_sync_config t
     set t.last_exec_id   = v_end_idx,
         t.last_exec_time = sysdate,
         t.robot_ip       = v_robot_ip
   where t.channel_type = v_sync_type
     and t.change_type = v_change_type;
  v_out_status := error_code.suc;
  v_out_msg    := '获取成功';
  commit;
  return;
exception
  when others then
    rollback;
    v_out_status := error_code.failure;
    v_out_msg    := '数据库异常:' || sqlerrm;
    sp_write_log('acct_sync_get', '操作失败:' || v_out_msg);
end;
/

prompt
prompt Creating procedure ACCT_SYNC_SAVE
prompt =================================
prompt
create or replace procedure qxfc.acct_sync_save(v_id           varchar2, --机器编号
                                           v_channel_type number, --类型:1-上游资金变动,2-下游资金变动
                                           v_change_type  number,
                                           v_status       number, --状态:100-成功,其他表示失败
                                           v_msg          varchar2, --错误消息
                                           v_out_status   out number, --状态:100表示成功
                                           v_out_msg      out varchar2) as
  /*
  功能:资金变动同步到记账系统同步
  创建人:jiyi
  时间:2016-04-13
  */
  l_error_count number;
  l_rid         number;
begin
  if (v_channel_type <> 1 and v_channel_type <> 2) then
    v_out_status := error_code.failure;
    v_out_msg    := '错误的类型';
    return;
  end if;

  if (v_channel_type = 1) then
    select t.id
      into l_rid
      from fc_fund_change_up t
     where t.id = v_id
       for update;
  else
    select t.id
      into l_rid
      from fc_fund_change_down t
     where t.id = v_id
       for update;
  end if;

  --同步失败
  if (v_status = error_code.suc) then
    if (v_channel_type = 1) then
      update fc_fund_change_up t
         set t.sync_status = process_status.success
       where t.id = v_id;
    else
      update fc_fund_change_down t
         set t.sync_status = process_status.success
       where t.id = v_id;
    end if;
    commit;
    v_out_status := error_code.suc;
    v_out_msg    := '保存成功';
    return;
  end if;

  update acct_sync_error t
     set t.error_count = nvl(t.error_count, 0) + 1
   where t.record_id = v_id
     and t.channel_type = v_channel_type
     and t.change_type = v_change_type;
  if (sql%rowcount > 0) then
    select t.error_count
      into l_error_count
      from acct_sync_error t
     where t.record_id = v_id
       and t.channel_type = v_channel_type
       and t.change_type = v_change_type;
  
    --设置记录为失败
    if (l_error_count > 3) then
      if (v_channel_type = 1) then
        update fc_fund_change_up t
           set t.sync_status = process_status.failure
         where t.id = v_id;
      else
        update fc_fund_change_down t
           set t.sync_status = process_status.failure
         where t.id = v_id;
      end if;
    
      sp_warn_insert('同步记账系统',
                     v_id || '同步记账系统失败,请联系管理员:' || v_msg);
    end if;
  else
    insert into acct_sync_error
      (record_id,
       channel_type,
       change_type,
       error_count,
       created_time,
       result_msg)
    values
      (v_id,
       v_channel_type,
       v_change_type,
       1,
       sysdate,
       substr(v_msg, 1, 100));
  end if;
  v_out_status := error_code.suc;
  v_out_msg    := '保存成功';
  commit;
exception
  when others then
    rollback;
    v_out_status := error_code.suc;
    v_out_msg    := '数据库异常:' || sqlerrm;
    sp_write_log('acct_sync_save', '操作失败:' || v_out_msg);
end;
/

prompt
prompt Creating procedure BARABRABRABRBA
prompt =================================
prompt
create or replace procedure qxfc.barabrabrabrba(v_query_time    varchar2, --查询初始日期
                                           v_contrast_time varchar2, --查询比对日期
                                           v_channel       varchar2, --渠道编号
                                           v_carrier       varchar2, -- 运营商
                                           v_business      number, --业务类型
                                           v_province      varchar2, --省份
                                           v_face          number, --面值
                                           v_out_errcode   out number,
                                           v_out_msg       out varchar2,
                                           v_out_data      out pkg_cursor.pointer) as
  /*
   0:查询日
   1:环比日
   2:同比日
  */
  l_start_time    date;
  l_end_time      date;
  s_contrast_time date;
  e_contrast_time date;
begin

  l_start_time := to_date(v_query_time, 'yyyymmdd');
  l_end_time   := to_date(v_query_time, 'yyyymmdd') + 1;

  if v_contrast_time is null then
    s_contrast_time := l_start_time;
    e_contrast_time := l_end_time;
  else
    s_contrast_time := to_date(v_contrast_time, 'yyyymmdd');
    e_contrast_time := to_date(v_contrast_time, 'yyyymmdd') + 1;
  end if;

  open v_out_data for
    with res0 as
     (select 0 z,
             t.carrier_no a,
             t.business_type b,
             t1.name c,
             ci.carrier_name d,
             sum(t.down_suc_count) e,
             sum(t.all_suc_fee) f,
             sum(t.profit) g,
             decode(sum(t.all_suc_fee),
                    0,
                    0,
                    round(sum(t.profit) / sum(t.all_suc_fee), 5) * 100) h,
             decode(sum(t.all_count),
                    0,
                    0,
                    round(sum(t.suc_count) / sum(t.all_count), 5) * 100) i
        from down_channel_day_trade t
        left join mr_system_dictionary t1
          on t.business_type = t1.value
         and t1.type = 'BusinessType'
        left join mr_carrier_info ci
          on t.carrier_no = ci.carrier_no
       where t.trade_time >= l_start_time
         and t.trade_time < l_end_time
         and (t.channel_no = v_channel or v_channel is null)
         and (t.carrier_no = v_carrier or v_carrier is null)
         and (t.business_type in
             (select * from table(mr_f_split(v_business))) or
             v_business is null)
         and (t.province_no in (select * from table(mr_f_split(v_province))) or
             v_province is null)
         and (t.product_face = v_face or v_face is null)
       group by t.carrier_no, t.business_type, t1.name, ci.carrier_name),
    -- 环比前一天
    res1 as
     (select 1 z,
             t.carrier_no a,
             t.business_type b,
             t1.name c,
             ci.carrier_name d,
             sum(t.down_suc_count) e,
             sum(t.all_suc_fee) f,
             sum(t.profit) g,
             decode(sum(t.all_suc_fee),
                    0,
                    0,
                    round(sum(t.profit) / sum(t.all_suc_fee), 5) * 100) h,
             decode(sum(t.all_count),
                    0,
                    0,
                    round(sum(t.suc_count) / sum(t.all_count), 5) * 100) i
        from down_channel_day_trade t
        left join mr_system_dictionary t1
          on t.business_type = t1.value
         and t1.type = 'BusinessType'
        left join mr_carrier_info ci
          on t.carrier_no = ci.carrier_no
       where t.trade_time >= s_contrast_time
         and t.trade_time < e_contrast_time
         and (t.channel_no = v_channel or v_channel is null)
         and (t.carrier_no = v_carrier or v_carrier is null)
         and (t.business_type in
             (select * from table(mr_f_split(v_business))) or
             v_business is null)
         and (t.province_no in (select * from table(mr_f_split(v_province))) or
             v_province is null)
         and (t.product_face = v_face or v_face is null)
       group by t.carrier_no, t.business_type, t1.name, ci.carrier_name),
    -- 同比上个月当天
    res2 as
     (select 2 z,
             t.carrier_no a,
             t.business_type b,
             t1.name c,
             ci.carrier_name d,
             sum(t.down_suc_count) e,
             sum(t.all_suc_fee) f,
             sum(t.profit) g,
             decode(sum(t.all_suc_fee),
                    0,
                    0,
                    round(sum(t.profit) / sum(t.all_suc_fee), 5) * 100) h,
             decode(sum(t.all_count),
                    0,
                    0,
                    round(sum(t.suc_count) / sum(t.all_count), 5) * 100) i
        from down_channel_day_trade t
        left join mr_system_dictionary t1
          on t.business_type = t1.value
         and t1.type = 'BusinessType'
        left join mr_carrier_info ci
          on t.carrier_no = ci.carrier_no
       where t.trade_time >= s_contrast_time - 30
         and t.trade_time < e_contrast_time - 30
         and (t.channel_no = v_channel or v_channel is null)
         and (t.carrier_no = v_carrier or v_carrier is null)
         and (t.business_type in
             (select * from table(mr_f_split(v_business))) or
             v_business is null)
         and (t.province_no in (select * from table(mr_f_split(v_province))) or
             v_province is null)
         and (t.product_face = v_face or v_face is null)
       group by t.carrier_no, t.business_type, t1.name, ci.carrier_name)
    select r0.a,
           r0.b,
           r0.c "业务类型",
           r0.d "运营商",
           r0.e "收单笔数",
           round(r0.e / r1.e * 100, 3) || '%' "环比收单",
           round(r0.e / r3.e * 100, 3) || '%' "同比收单",
           r0.f "销售额(元)",
           round(r0.f / r1.f * 100, 3) || '%' "环比销售",
           round(r0.f / r3.f * 100, 3) || '%' "同比销售",
           r0.g "当前收益(元)",
           round(r0.g / r1.g * 100, 3) || '%' "环比收益",
           round(r0.g / r3.g * 100, 3) || '%' "同比收益",
           r0.h "当前收益",
           round(r0.h - r1.h) "环比收益率",
           r0.i "当前成功率",
           (r0.i - r1.i) "环比成功率"
      from res0 r0
      left join res1 r1
        on r0.a = r1.a
       and r0.b = r1.b
      left join res2 r3
        on r0.a = r3.a
       and r0.b = r3.b;

  v_out_errcode := error_code.suc;
  v_out_msg     := '操作成功';
exception
  when others then
    v_out_errcode := error_code.failure;
    v_out_msg     := '操作失败' || sqlerrm;
    mr_sp_write_log('sp_st_down_trade', v_out_errcode, sqlerrm, '操作失败');
end;
/

prompt
prompt Creating procedure SP_ADD_OPERATE_LOG
prompt =====================================
prompt
create or replace procedure qxfc.sp_add_operate_log(v_order_no     varchar2,
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
/

prompt
prompt Creating procedure SP_ASSIGN_IMSI
prompt =================================
prompt
create or replace procedure qxfc.sp_assign_imsi(v_order_no varchar2,
                                           v_imsi     varchar2,
                                           v_ret_code out number,
                                           v_ret_msg  out varchar2) as
  /*
  功能:为好卡分配IMSI
  作者:jiyi
  时间:2018-04-24
  */
  l_imsi varchar2(32);
  l_cntr number;
begin
  select t.iccno
    into l_imsi
    from fc_order_ext t
   where t.order_no = v_order_no
     for update;
  if (l_imsi is not null) then
    rollback;
    v_ret_code := error_code.failure;
    v_ret_msg  := '已设置IMSI';
  end if;

  select count(1) into l_cntr from fc_order_ext t where t.iccno = v_imsi;
  if (l_cntr > 0) then
    rollback;
    v_ret_code := error_code.failure;
    v_ret_msg  := '已分配给其它好卡';
  end if;

  update fc_order_ext t set t.iccno = v_imsi where t.order_no = v_order_no;
  commit;

  v_ret_code := error_code.suc;
  v_ret_msg  := 'OK';
end;
/

prompt
prompt Creating procedure SP_AUTO_FLOW_EXECUTE
prompt =======================================
prompt
create or replace procedure qxfc.sp_auto_flow_execute as
  /*
  功能:自动驱动流程
  作者:jiyi
  时间:2018年5月1日
  */
  l_ret_task_id number;
  l_ret_msg     varchar2(128);
  l_ret_script  varchar2(128);
  l_ret_svc     varchar2(32);
  l_ret         boolean;
begin
  for it in (select *
               from fc_flow_task t
              where t.task_status = process_status.success
                and t.flow_mode = flow_mode.manual
                and t.task_end_time < sysdate - 30 / 24 / 3600) loop
    begin
      l_ret := f_execute_next_step(it.flow_id,
                                   it.action,
                                   it.order_no,
                                   it.bind_id,
                                   process_status.success,
                                   it.task_msg,
                                   l_ret_task_id,
                                   l_ret_msg,
                                   l_ret_script,
                                   l_ret_svc);
      if (l_ret) then
        update fc_flow_task t
           set t.flow_mode = flow_mode.auto
         where t.tid = it.tid;
        commit;
      else
        rollback;
      end if;
    exception
      when others then
        rollback;
    end;
  end loop;
end;
/

prompt
prompt Creating procedure SP_AUTO_FLOW_VO_EXECUTE
prompt ==========================================
prompt
create or replace procedure qxfc.sp_auto_flow_vo_execute as
  l_ret_task_id number;
  l_ret_msg     varchar2(128);
  l_ret_script  varchar2(128);
  l_ret_svc     varchar2(32);
  l_ret         boolean;
begin
  for it in (select * from fc_flow_task t where t.task_status = '90'  and t.flow_id not in (select max(t1.sno) from fc_flow_step t1 where t1.fid = t.flow_id)) loop
    begin

        update fc_flow_task t
           set t.next_time = sysdate,
           t.task_status = '20'
         where t.tid = it.tid;
        commit;

    exception
      when others then
        rollback;
    end;
  end loop;
end;
/

prompt
prompt Creating procedure SP_AUTO_TRADE_ANALYSE
prompt ========================================
prompt
create or replace procedure qxfc.sp_auto_trade_analyse as
  /*
  功能:交易分析
  作者:jiyi
  时间:2018-04-20
  */
  l_last_date  date;
  l_order_time date;
  l_end_time   date := sysdate - 1;
begin
  --如果快照表中没有数据，默认生成15天数据
  select trunc(nvl(max(t.trade_date), sysdate - 30))
    into l_last_date
    from fc_trade_analyse t;
  if (l_last_date >= trunc(sysdate) - 1) then
    return;
  end if;

  l_order_time := trunc(l_last_date) + 1;
  while (true) loop
    if (l_order_time >= l_end_time) then
      exit;
    end if;
  
    insert into fc_trade_analyse
      (trade_date,
       down_channel_no,
       product_no,
       carrier_no,
       province_no,
       city_no,
       product_type,
       package_type,
       total_cntr,
       total_fee,
       trade_fee,
       express_fee,
       up_channel_no,
       up_cost,
       up_reward,
       refund_fee)
      select m.request_date,
             m.down_channel_no,
             m.down_product_no,
             m.carrier_no,
             m.province_no,
             m.city_no,
             m.product_type,
             m.package_id,
             m.cntr,
             m.total_fee,
             m.trade_fee,
             nvl(m.express_fee, 0),
             m.up_channel_no,
             m.cost_fee,
             m.reward_fee,
             nvl(r.refund_fee, 0)
        from (select trunc(r.change_time) request_date,
                     r.channel_no up_channel_no,
                     m.down_channel_no,
                     m.down_product_no,
                     m.carrier_no,
                     m.province_no,
                     m.city_no,
                     m.product_type,
                     m.package_id,
                     count(1) cntr,
                     sum(m.pay_fee) total_fee,
                     sum(m.trade_fee) trade_fee,
                     sum(decode(r.change_type, fund_change_type.reduce, r.change_money,0)) cost_fee,
                     sum(decode(r.change_type, fund_change_type.reward, r.change_money, 0)) reward_fee,
                     sum(e.express_fee) express_fee
                from fc_order_main m
                left join fc_fund_change_up r
                  on r.order_no = m.order_no
                left join fc_order_express e on m.order_no = e.order_no
               where m.order_status = 0
                 and r.change_type in (fund_change_type.reduce, fund_change_type.reward)
               group by trunc(r.change_time),
                        r.channel_no,
                        m.down_channel_no,
                        m.down_product_no,
                        m.carrier_no,
                        m.province_no,
                        m.city_no,
                        m.product_type,
                        m.package_id) m
        full join (select trunc(r.finish_time) refund_date,
                          m.down_channel_no,
                          m.down_product_no,
                          m.carrier_no,
                          m.province_no,
                          m.city_no,
                          m.product_type,
                          m.package_id,
                          sum(r.refund_fee) refund_fee
                     from fc_order_refund r
                    inner join fc_order_main m
                       on r.order_no = m.order_no
                    where m.order_status = 0
                      and r.refund_status = 0
                      and r.FINISH_TIME >= l_order_time
                      and r.FINISH_TIME < l_order_time + 1
                    group by trunc(r.finish_time),
                             m.down_channel_no,
                             m.down_product_no,
                             m.carrier_no,
                             m.province_no,
                             m.city_no,
                             m.product_type,
                             m.package_id) r
          on m.request_date = r.refund_date
         and m.down_channel_no = r.down_channel_no
         and m.down_product_no = r.down_product_no
         and m.package_id = r.package_id
         and m.product_type = r.product_type
         and m.carrier_no = r.carrier_no
         and m.province_no = r.province_no
         and m.city_no = r.city_no;
    commit;
  end loop;
end;
/

prompt
prompt Creating procedure SP_AUTO_TRADE_DOWN
prompt =====================================
prompt
create or replace procedure qxfc.sp_auto_trade_down as
  /*
  功能:下游交易分析
  作者:jiyi
  时间:2018-04-20
  */
  l_last_date  date;
  l_order_time date;
  l_end_time   date := sysdate - 1;
begin
  --如果快照表中没有数据，默认生成15天数据
  select trunc(nvl(max(t.trade_date), sysdate - 30))
    into l_last_date
    from fc_trade_down t;
  if (l_last_date >= trunc(sysdate) - 1) then
    return;
  end if;

  l_order_time := trunc(l_last_date) + 1;
  while (true) loop
    if (l_order_time >= l_end_time) then
      exit;
    end if;
  
    insert into fc_trade_down
      (trade_date,
       down_channel_no,
       carrier_no,
       province_no,
       city_no,
       product_type,
       package_type,
       product_no,
       total_cntr,
       total_fee,
       trade_fee,
       refund_fee)
      select trunc(t.change_time) request_date,
             m.down_channel_no,
             m.carrier_no,
             m.province_no,
             m.city_no,
             m.product_type,
             m.package_id,
             m.down_product_no,
             count(1) cntr,
             decode(t.change_type, 1, sum(t.change_money), 0) down_price,
             decode(t.change_type, 1, sum(t.trade_fee), 0) trade_fee,
             decode(t.change_type, 3, sum(t.change_money), 0) refund_fee
        from fc_order_main m
       inner join fc_fund_change_down t
          on m.order_no = t.order_no
       where t.change_time >= l_order_time
         and t.change_time < l_order_time + 1
       group by trunc(t.change_time),
                m.down_channel_no,
                m.carrier_no,
                m.province_no,
                m.city_no,
                m.product_type,
                m.package_id,
                m.down_product_no,
                t.change_type;
    commit;
    l_order_time := l_order_time + 1;
  end loop;
end;
/

prompt
prompt Creating procedure SP_DZ_BRAND_NEW
prompt ==================================
prompt
create or replace procedure qxfc.sp_dz_brand_new as
  pragma autonomous_transaction;
  /*
  功能:新装宽带对账
  作者:jiyi
  时间:2018-05-09
  */
  l_order_no     varchar2(32);
  l_up_cost      number(20, 5);
  l_brand_reward number(20, 5);
  l_itv_reward   number(20, 5);
  l_brand_id     number;
  l_itv_id       number;
  l_brand_no     varchar2(32);
  l_itv_seq      varchar2(32);
  l_order_date   date;
begin
  for it in (select p.*
               from fc_dz_reward_brand_new p
              where p.status = 20
                and rownum = 50) loop
    begin
      select min(t.order_no), min(m.request_time)
        into l_order_no, l_order_date
        from fc_order_ext t
       inner join fc_order_main m
          on m.order_no = t.order_no
       where t.brand_no = it.trans_seq
         and m.order_status = order_status.success;
      if (l_order_no is not null) then
        l_brand_reward := it.reward + 0.5;
        l_brand_id     := it.id;
        l_brand_no     := it.trans_seq;
        select p.reward + 0.5, p.id, p.trans_seq, tsk.up_cost
          into l_itv_reward, l_itv_id, l_itv_seq, l_up_cost
          from fc_dz_reward_brand_new p
         inner join fc_flow_task tsk
            on p.trans_seq = tsk.uptranseq
         where tsk.order_no = l_order_no;
      else
        l_itv_reward := it.reward + 0.5;
        l_itv_id     := it.id;
        l_itv_seq    := it.trans_seq;
        select min(m.order_no), min(m.request_time), min(tsk.up_cost)
          into l_order_no, l_order_date, l_up_cost
          from fc_order_main m
         inner join fc_flow_task tsk
            on tsk.order_no = m.order_no
         where it.trans_seq = tsk.uptranseq
           and m.order_status = order_status.success;
        select min(p.reward + 0.5), min(p.id), min(ex.brand_no)
          into l_brand_reward, l_brand_id, l_brand_no
          from fc_order_ext ex
         inner join fc_dz_reward_brand_new p
            on ex.brand_no = p.trans_seq;
      end if;
    
      if (l_order_no is null) then
        continue;
      end if;
    
      insert into fc_dz_trade_detail
        (id,
         bill_date,
         order_no,
         type,
         account,
         up_seq,
         cost,
         reward,
         order_date,
         status,
         msg)
      values
        (seq_dz_trade_detail_id.nextval,
         it.bill_date,
         l_order_no,
         1,
         l_brand_no,
         l_itv_seq,
         l_up_cost,
         l_brand_reward + l_itv_reward,
         l_order_date,
         20,
         'OK');
    
      --更新激活状态
      update fc_order_main m
         set m.active_status = process_status.success,
             m.active_time   = it.bill_date
       where m.order_no = l_order_no;
    
      update fc_dz_reward_brand_new t
         set t.status = 0
       where t.id in (l_brand_id, l_itv_id);
      commit;
    exception
      when others then
        rollback;
    end;
  end loop;
end;
/

prompt
prompt Creating procedure SP_DZ_ORDER_RENEW
prompt ====================================
prompt
create or replace procedure qxfc.sp_dz_order_renew as
  pragma autonomous_transaction;
  /*
  功能:号卡宽带续费对账
  作者:jiyi
  时间:2018-05-09
  */
  l_order_no   varchar2(32);
  l_up_cost    number(20, 5);
  l_reward     number(20, 5);
  l_order_date date;
  l_cost_id    number;
  l_up_seq     varchar2(32);
begin
  for it in (select p.*
               from fc_dz_reward_renew p
              where p.status = 20
                and rownum = 50) loop
    begin
      l_reward := it.reward;
      select m.order_no, m.request_time
        into l_order_no, l_order_date
        from fc_order_main m
       inner join fc_order_ext ex
          on m.order_no = m.order_no
       where (m.active_phone = it.account or ex.brand_no = it.account)
         and m.order_status = order_status.success;
    
      select t.cost, t.id, t.tans_seq
        into l_up_cost, l_cost_id, l_up_seq
        from fc_dz_renew_cost t
       where t.account = it.account
         and t.status = 20;
    
      insert into fc_dz_trade_detail
        (id,
         bill_date,
         order_no,
         type,
         account,
         up_seq,
         cost,
         reward,
         order_date,
         status,
         msg)
      values
        (seq_dz_trade_detail_id.nextval,
         it.bill_date,
         l_order_no,
         2,
         it.account,
         l_up_seq,
         l_up_cost,
         l_reward,
         l_order_date,
         20,
         'OK');
    
      update fc_dz_reward_renew t set t.status = 0 where t.id = it.id;
      update fc_dz_renew_cost t set t.status = 0 where t.id = l_cost_id;
      commit;
    exception
      when others then
        rollback;
    end;
  end loop;
end;
/

prompt
prompt Creating procedure SP_DZ_PHONE_ACTIVE
prompt =====================================
prompt
create or replace procedure qxfc.sp_dz_phone_active as
  pragma autonomous_transaction;
  /*
  功能:对账号卡激活
  作者:jiyi
  时间:2018-05-09
  */
  l_order_no   varchar2(32);
  l_up_cost    number(20, 5);
  l_reward     number(20, 5);
  l_order_date date;
  l_reward_id  number;
  l_cost_id    number;
  l_up_seq     varchar2(32);
begin
  for it in (select p.*
               from fc_dz_phone_active p
              where p.status = 20
                and rownum = 50) loop
    begin
      select t1.order_no, m.request_time
        into l_order_no, l_order_date
        from fc_order_main m
       inner join fc_flow_task t1
          on t1.order_no = m.order_no
       where m.active_phone = it.phone
         and t1.uptranseq = it.trans_seq
         and m.order_status = order_status.success;
    
      select t.reward, t.id
        into l_reward, l_reward_id
        from fc_dz_reward_renew t
       where t.account = it.phone
         and t.status = 20;
    
      select t.cost, t.id, t.tans_seq
        into l_up_cost, l_cost_id, l_up_seq
        from fc_dz_renew_cost t
       where t.account = it.phone
         and t.status = 20;
    
      insert into fc_dz_trade_detail
        (id,
         bill_date,
         order_no,
         type,
         account,
         up_seq,
         cost,
         reward,
         order_date,
         status,
         msg)
      values
        (seq_dz_trade_detail_id.nextval,
         it.active_date,
         l_order_no,
         2,
         it.phone,
         it.trans_seq,
         l_up_cost,
         l_reward,
         l_order_date,
         20,
         'OK');
    
      --更新激活状态
      update fc_order_main m
         set m.active_status = decode(it.active_status,
                                      '已生效',
                                      process_status.success,
                                      process_status.failure),
             m.active_time   = it.active_date
       where m.order_no = l_order_no;
    
      update fc_dz_phone_active t set t.status = 0 where t.id = it.id;
      update fc_dz_reward_renew t
         set t.status = 0
       where t.id = l_reward_id;
      update fc_dz_renew_cost t set t.status = 0 where t.id = l_cost_id;
      commit;
    exception
      when others then
        rollback;
    end;
  end loop;
end;
/

prompt
prompt Creating procedure SP_AUTO_TRADE_DZ
prompt ===================================
prompt
create or replace procedure qxfc.sp_auto_trade_dz as
  /*
  功能:自动对账
  作者:jiyi
  时间:2018-05-09
  */
begin
  sp_dz_phone_active();
  sp_dz_brand_new();
  sp_dz_order_renew();
end;
/

prompt
prompt Creating procedure SP_AUTO_TRADE_UP
prompt ===================================
prompt
create or replace procedure qxfc.sp_auto_trade_Up as
  /*
  功能:上游交易分析
  作者:jiyi
  时间:2018-04-20
  */
  l_last_date  date;
  l_order_time date;
  l_end_time   date := sysdate - 1;
begin
  --如果快照表中没有数据，默认生成15天数据
  select trunc(nvl(max(t.trade_date), sysdate - 30))
    into l_last_date
    from fc_trade_up t;
  if (l_last_date >= trunc(sysdate) - 1) then
    return;
  end if;

  l_order_time := trunc(l_last_date) + 1;
  while (true) loop
    if (l_order_time >= l_end_time) then
      exit;
    end if;
  
    insert into fc_trade_up
      (trade_date,
       up_channel_no,
       carrier_no,
       province_no,
       city_no,
       product_type,
       package_type,
       product_no,
       total_cntr,
       cost,
       reward,
       express_fee,
       refund_fee)
      select trunc(t.change_time) request_date,
             t.channel_no,
             m.carrier_no,
             m.province_no,
             m.city_no,
             m.product_type,
             m.package_id,
             m.down_product_no,
             count(1) cntr,
             decode(t.change_type, 2, sum(t.change_money), 0) up_cost,
             decode(t.change_type, 4, sum(t.change_money), 0) up_reward,
             decode(t.change_type, 5, sum(t.change_money), 0) express,
             decode(t.change_type, 3, sum(t.change_money), 0) up_refund
        from fc_order_main m
       inner join fc_fund_change_up t
          on m.order_no = t.order_no
       where t.change_time >= l_order_time
         and t.change_time < l_order_time + 1
       group by trunc(t.change_time),
                t.channel_no,
                m.carrier_no,
                m.province_no,
                m.city_no,
                m.product_type,
                m.package_id,
                m.down_product_no,
                t.change_type;
    commit;
    l_order_time := l_order_time + 1;
  end loop;
end;
/

prompt
prompt Creating procedure SP_CHARGE_RETRY
prompt ==================================
prompt
create or replace procedure qxfc.sp_charge_retry(v_id       varchar,
                                            v_operator varchar2,
                                            v_ret_code out number,
                                            v_ret_msg  out varchar2) as
  /*
  功能:存费送费充值重试
  作者:jiyi
  时间:2018-05-03
  */
  l_id              number;
  l_task_id         number;
  l_order_no        varchar2(32);
  l_down_channel_no varchar2(32);
begin
  for it in (select * from table(f_split_str(v_id, ','))) loop
    begin
      select t.id, t.order_no
        into l_id, l_order_no
        from fc_phone_charge t
       where t.id = it.column_value
         and t.status = process_status.failure
         for update;

      select t.down_channel_no
        into l_down_channel_no
        from fc_order_main t
       where t.order_no = l_order_no
         and t.order_status = order_status.failure
         for update;

      select t.tid
        into l_task_id
        from fc_flow_task t
       where t.order_no = l_order_no
         and t.action = action_type.charge
         and t.task_status = process_status.failure
         for update;

      update fc_flow_task t
         set t.task_status = process_status.wait, t.next_time = sysdate
       where t.order_no = l_order_no;

      update fc_order_main t
         set t.order_status = order_status.process
       where t.order_status = order_status.failure
         and t.order_no = l_order_no;

      update fc_phone_charge t
         set t.status = process_status.wait
       where t.status = process_status.failure
         and t.id = l_id;
      commit;

      sp_add_operate_log(l_order_no,
                         '',
                         operate_type.manual,
                         '存费送费订单:' || l_order_no || '重试',
                         l_task_id,
                         '',
                         v_operator);
      v_ret_code := error_code.suc;
      v_ret_msg  := 'OK';
    exception
      when others then
        rollback;
        sp_write_log('sp_charge_retry',
                     l_task_id || '重试失败:' || sqlerrm);
        v_ret_code := error_code.failure;
        v_ret_msg  := sqlerrm;
    end;
  end loop;
end;
/

prompt
prompt Creating procedure SP_COOKIE_GET_BY_CITY
prompt ========================================
prompt
create or replace procedure qxfc.sp_cookie_get_by_city(v_carrier_no varchar2,
                                                  v_city_no    varchar2,
                                                  v_ret_code   out number,
                                                  v_ret_msg    out varchar2) as
  /*
  功能:获取cookie
  作者:jiyi
  时间:2018-05-21
  */
begin
  select t.cookie
    into v_ret_msg
    from (select t.cookie,
                 (case
                   when t.city_no = v_city_no and t.carrier_no = v_carrier_no then
                    0
                   when t.city_no = '*' and t.carrier_no = v_carrier_no then
                    2
                   when t.city_no = '*' and t.carrier_no = '*' then
                    3
                   else
                    4
                 end) priority
            from fc_up_account t
           where (t.carrier_no = v_carrier_no or t.carrier_no = '*')
             and (t.city_no = v_city_no or t.city_no = '*')
             and t.status = enable_status.enabled
           order by priority) t
   where rownum = 1;
  v_ret_code := error_code.suc;
exception
  when others then
    v_ret_code := error_code.failure;
    v_ret_msg  := '';
end;
/

prompt
prompt Creating procedure SP_CREATE_QUERY
prompt ==================================
prompt
create or replace procedure qxfc.sp_create_query(v_task_id number, v_ret_msg out varchar2) as
  /*
  功能:创建查询
  作者:jiyi
  时间:2018-04-10
  */
  l_ret boolean;
begin
  l_ret := f_create_query(v_task_id, v_ret_msg);
  if (l_ret) then
    commit;
  else
    rollback;
  end if;
exception
  when others then
    rollback;
    sp_write_log('sp_create_task_query', '创建查询异常:[' || v_task_id || '],' || sqlerrm);
end;
/

prompt
prompt Creating procedure SP_DA_REWARD
prompt ===============================
prompt
create or replace procedure qxfc.sp_da_reward(v_begin_time   varchar2, --开始时间
                                         v_end_time     varchar2, --结束时间
                                         v_up_channel   varchar2, --上游渠道
                                         v_product_type varchar2, --产品类型
                                         v_ret_code     out number,
                                         v_ret_msg      out varchar2,
                                         v_ret_data     out data_cursor.pointer) as
  /*
  功能:佣金报表
  作者:jiyi
  时间:2018-04-28
  */
  l_begin_time date := trunc(to_date(v_begin_time, 'yyyy-mm-dd hh24:mi:ss'));
  l_end_time   date := trunc(to_date(v_end_time, 'yyyy-mm-dd hh24:mi:ss')) + 1;
begin
  open v_ret_data for
    select c.channel_name 渠道名称,
           p.type_name 产品类型,
           sum(t.change_money) 佣金,
           to_char(t.change_time, 'yyyy-MM-dd') 收款时间
      from fc_fund_change_up t
     inner join fc_order_main m
        on m.order_no = t.order_no
     inner join fc_up_channel c
        on c.channel_no = t.channel_no
     inner join fc_product_type p
        on p.type_id = m.product_type
     where t.change_time >= l_begin_time
       and t.change_time < l_end_time
       and t.change_type = fund_change_type.reward
       and (t.channel_no = v_up_channel or v_up_channel is null)
       and (m.product_type = v_product_type or v_product_type is null)
     group by c.channel_name,
              p.type_name,
              to_char(t.change_time, 'yyyy-MM-dd')
    union all
    select '', '总计', sum(t.change_money), ''
      from fc_fund_change_up t
     inner join fc_order_main m
        on m.order_no = t.order_no
     inner join fc_up_channel c
        on c.channel_no = t.channel_no
     inner join fc_product_type p
        on p.type_id = m.product_type
     where t.change_time >= l_begin_time
       and t.change_time < l_end_time
       and t.change_type = fund_change_type.reward
       and (t.channel_no = v_up_channel or v_up_channel is null)
       and (m.product_type = v_product_type or v_product_type is null);

  v_ret_code := error_code.suc;
  v_ret_msg  := 'OK';
end;
/

prompt
prompt Creating procedure SP_DA_TRADE_CHANNEL
prompt ======================================
prompt
create or replace procedure qxfc.sp_da_trade_channel(v_begin_time   varchar2, --开始时间
                                                v_end_time     varchar2, --结束时间
                                                v_up_channel   varchar2, --上游渠道
                                                v_down_channel varchar2, --下游渠道
                                                v_product_type varchar2, --产品类型                                                
                                                v_ret_code     out number,
                                                v_ret_msg      out varchar2,
                                                v_ret_data     out data_cursor.pointer) as
  /*
  功能:渠道交易分析报表
  作者:jiyi
  时间:2018-04-28
  */
  l_begin_time date := trunc(to_date(v_begin_time, 'yyyy-mm-dd hh24:mi:ss'));
  l_end_time   date := trunc(to_date(v_end_time, 'yyyy-mm-dd hh24:mi:ss')) + 1;
begin
  if (v_down_channel is not null) then
    open v_ret_data for
      select p.type_name 产品类型,
             c.channel_name 下游渠道,
             sum(t.total_cntr) 订单数,
             sum(t.total_fee) 应收款,
             sum(t.trade_fee) 交易费,
             sum(t.refund_fee) 退款
        from fc_trade_down t
       inner join fc_down_channel c
          on c.channel_no = t.down_channel_no
       inner join fc_product_type p
          on p.type_id = t.product_type
       where t.trade_date >= l_begin_time
         and t.trade_date < l_end_time
         and (t.down_channel_no = v_down_channel or v_down_channel is null)
         and (t.product_type = v_product_type or v_product_type is null)
       group by c.channel_name, p.type_name
      union all
      select '总计',
             '',
             sum(t.total_cntr),
             sum(t.total_fee),
             sum(t.trade_fee),
             sum(t.refund_fee)
        from fc_trade_down t
       inner join fc_down_channel c
          on c.channel_no = t.down_channel_no
       inner join fc_product_type p
          on p.type_id = t.product_type
        left join fc_down_channel d
          on d.channel_no = t.down_channel_no
       where t.trade_date >= l_begin_time
         and t.trade_date < l_end_time
         and (t.down_channel_no = v_down_channel or v_down_channel is null)
         and (t.product_type = v_product_type or v_product_type is null);
  else
    open v_ret_data for
      select p.type_name 产品类型,
             c.channel_name 上游渠道,
             sum(t.total_cntr) 订单数,
             sum(t.cost) 成本,
             sum(t.express_fee) 邮费,
             sum(t.reward) 佣金,
             sum(t.refund_fee) 退款
        from fc_trade_up t
       inner join fc_up_channel c
          on c.channel_no = t.up_channel_no
       inner join fc_product_type p
          on p.type_id = t.product_type
       where t.trade_date >= l_begin_time
         and t.trade_date < l_end_time
         and (t.up_channel_no = v_up_channel or v_up_channel is null)
         and (t.product_type = v_product_type or v_product_type is null)
       group by c.channel_name, p.type_name
      union all
      select '总计',
             '',
             sum(t.total_cntr),
             sum(t.cost),
             sum(t.express_fee),
             sum(t.reward),
             sum(t.refund_fee)
        from fc_trade_up t
       inner join fc_product_type p
          on p.type_id = t.product_type
        left join fc_up_channel d
          on d.channel_no = t.up_channel_no
       where t.trade_date >= l_begin_time
         and t.trade_date < l_end_time
         and (t.up_channel_no = v_up_channel or v_up_channel is null)
         and (t.product_type = v_product_type or v_product_type is null);
  end if;

  v_ret_code := error_code.suc;
  v_ret_msg  := 'OK';
end;
/

prompt
prompt Creating procedure SP_DELIVERY_GET
prompt ==================================
prompt
create or replace procedure qxfc.sp_delivery_get(v_task_id  number,
                                            v_robot_ip varchar2, --IP
                                            v_ret_code out number,
                                            v_ret_msg  out varchar2 --结果信息(json)
                                            ) as
  /*
  功能:获取发货信息
  作者:jiyi
  时间:2018-04-02
  */
  l_bind_id         number;
  l_order_no        varchar2(32);
  l_script_path     varchar2(64);
  l_up_channel_no   varchar2(32);
  l_up_product_no   varchar2(32);
  l_face            number;
  l_iccno           varchar2(32);
  l_phone_no        varchar2(32);
  l_down_channel_no varchar2(128);
  l_down_order_no   varchar2(128);
  l_script_id       number;
  l_up_product_id   number;
  l_down_product_id number;
  l_api_url         varchar2(128);
  l_account         varchar2(128);
  l_key             varchar2(512);
  l_notify_url      varchar2(128);
  l_product_type    number;
  l_package_id      number;
  l_real_name       varchar2(32);
  l_idno            varchar2(32);
  l_brand_no        varchar2(32);
  l_up_account_id   number;
  l_deposit         number;
  l_rent            number;
  l_carrier_no      varchar2(32);
  l_province_no     varchar2(32);
  l_city_no         varchar2(32);
  l_trial_day       number;
begin
  select t.order_no, t.bind_id
    into l_order_no, l_bind_id
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.wait
     for update nowait;

  --1.获取发货信息
  select t.face,
         t.up_channel_no,
         t.up_product_id,
         t.script_id,
         t.script_path,
         t.down_channel_no,
         t.down_order_no,
         t.product_type,
         t.package_id,
         t.up_account_id
    into l_face,
         l_up_channel_no,
         l_up_product_id,
         l_script_id,
         l_script_path,
         l_down_channel_no,
         l_down_order_no,
         l_product_type,
         l_package_id,
         l_up_account_id
    from fc_order_bind t
   where t.bind_id = l_bind_id;

  select t.active_phone,
         t.carrier_no,
         t.province_no,
         t.city_no,
         t.down_product_id,
         e.iccno,
         e.active_idno,
         e.active_real_name,
         e.brand_no
    into l_phone_no,
         l_carrier_no,
         l_province_no,
         l_city_no,
         l_down_product_id,
         l_iccno,
         l_idno,
         l_real_name,
         l_brand_no
    from fc_order_main t
   inner join fc_order_ext e
      on t.order_no = e.order_no
   where t.order_no = l_order_no;

  select t.trial_day
    into l_trial_day
    from fc_down_product t
   where t.pid = l_down_product_id;

  select t.product_no
    into l_up_product_no
    from fc_up_product t
   where t.pid = l_up_product_id;

  select t.predeposit, t.month_rent
    into l_deposit, l_rent
    from fc_product_package t
   where t.pkg_id = l_package_id;

  --2.获取账户信息
  select t.account_no, t.account_pwd
    into l_account, l_key
    from fc_up_account t
   where t.id = l_up_account_id;

  select t.notify_url
    into l_notify_url
    from fc_up_channel t
   where t.channel_no = l_up_channel_no;

  --3.获取接口信息
  select t.up_url
    into l_api_url
    from fc_up_script t
   where t.sid = l_script_id;

  v_ret_msg := f_json_add(v_ret_msg, 'bind_id', l_bind_id);
  v_ret_msg := f_json_add(v_ret_msg, 'order_no', l_order_no);
  v_ret_msg := f_json_add(v_ret_msg, 'script_path', l_script_path);
  v_ret_msg := f_json_add(v_ret_msg, 'api_url', l_api_url);
  v_ret_msg := f_json_add(v_ret_msg, 'up_channel_no', l_up_channel_no);
  v_ret_msg := f_json_add(v_ret_msg, 'product_no', l_up_product_no);
  v_ret_msg := f_json_add(v_ret_msg, 'face', l_face);
  v_ret_msg := f_json_add(v_ret_msg, 'iccno', l_iccno);
  v_ret_msg := f_json_add(v_ret_msg, 'phone', l_phone_no);
  v_ret_msg := f_json_add(v_ret_msg, 'real_name', l_real_name);
  v_ret_msg := f_json_add(v_ret_msg, 'idno', l_idno);
  v_ret_msg := f_json_add(v_ret_msg, 'brand_no', l_brand_no);
  v_ret_msg := f_json_add(v_ret_msg, 'product_type', l_product_type);
  v_ret_msg := f_json_add(v_ret_msg, 'predeposit', l_deposit);
  v_ret_msg := f_json_add(v_ret_msg, 'month_rent', l_rent);
  v_ret_msg := f_json_add(v_ret_msg, 'trial_day', l_trial_day);
  v_ret_msg := f_json_add(v_ret_msg, 'carrier_no', l_carrier_no);
  v_ret_msg := f_json_add(v_ret_msg, 'province_no', l_province_no);
  v_ret_msg := f_json_add(v_ret_msg, 'city_no', l_city_no);
  v_ret_msg := f_json_add(v_ret_msg, 'channel_user', l_account);
  v_ret_msg := f_json_add(v_ret_msg, 'channel_key', l_key);
  v_ret_msg := f_json_add(v_ret_msg, 'down_channel_no', l_down_channel_no);
  v_ret_msg := f_json_add(v_ret_msg, 'down_order_no', l_down_order_no);
  v_ret_msg := '{' || f_json_add(v_ret_msg, 'notify_url', l_notify_url) || '}';

  --更新任务信息
  update fc_flow_task t
     set t.task_status = process_status.process, t.ip = v_robot_ip
   where t.tid = v_task_id;

  commit;

  v_ret_code := error_code.suc;
  sp_add_operate_log(l_order_no,
                     l_bind_id,
                     operate_type.manual,
                     '发货',
                     v_task_id,
                     v_robot_ip);
exception
  when others then
    rollback;
    sp_write_log('sp_delivery_get', sqlerrm);
    v_ret_code := error_code.failure;
    v_ret_msg  := '';
end;
/

prompt
prompt Creating procedure SP_DOWN_CHANNEL_KEY_GET
prompt ==========================================
prompt
create or replace procedure qxfc.sp_down_channel_key_get(v_channel_no varchar2,
                                                    v_ret_msg    out varchar2) as
  /*
  功能:获取渠道key
  作者:jiyi
  时间:2017-01-16
  */
  l_key        varchar2(128);
  l_channel_no varchar2(32);
  l_check_sign number;
  l_msg        varchar2(1000);
begin
  select t.channel_key, t.channel_no, t.channel_token
    into l_key, l_channel_no, l_check_sign
    from fc_down_channel t
   where t.channel_no = v_channel_no;

  l_msg     := f_json_add(l_msg, 'code', 100);
  l_msg     := f_json_add(l_msg, 'channel_no', l_channel_no);
  l_msg     := f_json_add(l_msg, 'key', l_key);
  l_msg     := '{' || f_json_add(l_msg, 'token', l_check_sign) || '}';
  v_ret_msg := l_msg;
exception
  when others then
    v_ret_msg := '{"code":200}';
end;
/

prompt
prompt Creating procedure SP_EXPRESS_GET
prompt =================================
prompt
create or replace procedure qxfc.sp_express_get(v_task_id  number,
                                           v_robot_ip varchar2,
                                           v_ret_code out number,
                                           v_ret_msg  out varchar2) as
  /*
  功能:获取快递信息
  作者:jiyi
  时间:2018-04-02
  */
  l_bind_id        number;
  l_down_chanel_no varchar2(32);
  l_down_order_no  varchar2(64);
  l_order_no       varchar2(32);
  l_up_channel_no  varchar2(32);
  l_script_id      number;
  l_api_url        varchar2(128);
  l_account        varchar2(128);
  l_key            varchar2(512);
  l_notify_url     varchar2(128);
  l_exp_id         number;
  l_recv_name      varchar2(32);
  l_recv_phone     varchar2(32);
  l_recv_address   varchar2(128);
begin
  select t.order_no, t.bind_id, t.script_id, t.up_channel_no
    into l_order_no, l_bind_id, l_script_id, l_up_channel_no
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.wait
     for update nowait;

  --1.获取快递信息
  select t.id,
         t.target_name,
         t.target_phone,
         t.target_address,
         t.down_order_no,
         t.down_channel_no
    into l_exp_id,
         l_recv_name,
         l_recv_phone,
         l_recv_address,
         l_down_order_no,
         l_down_chanel_no
    from fc_order_express t
   where t.taskid = v_task_id
     and t.order_no = l_order_no
     and t.express_status = express_status.wait_print
     for update nowait;

  --2.获取账户信息
  select min(t.account_no), min(t.account_pwd)
    into l_account, l_key
    from fc_up_account t
   where t.channel_no = l_up_channel_no
     and rownum = 1;

  select t.notify_url
    into l_notify_url
    from fc_up_channel t
   where t.channel_no = l_up_channel_no;

  --3.获取接口信息
  select t.up_url
    into l_api_url
    from fc_up_script t
   where t.sid = l_script_id;

  v_ret_msg := f_json_add(v_ret_msg, 'express_id', l_exp_id);
  v_ret_msg := f_json_add(v_ret_msg, 'taskid', v_task_id);
  v_ret_msg := f_json_add(v_ret_msg, 'bind_id', l_bind_id);
  v_ret_msg := f_json_add(v_ret_msg, 'order_no', l_order_no);
  v_ret_msg := f_json_add(v_ret_msg, 'down_order_no', l_down_order_no);
  v_ret_msg := f_json_add(v_ret_msg, 'svc_url', l_api_url);
  v_ret_msg := f_json_add(v_ret_msg, 'sender_name', '四川千行');
  v_ret_msg := f_json_add(v_ret_msg, 'sender_phone', '123456');
  v_ret_msg := f_json_add(v_ret_msg, 'recv_name', l_recv_name);
  v_ret_msg := f_json_add(v_ret_msg, 'recv_phone', l_recv_phone);
  v_ret_msg := f_json_add(v_ret_msg, 'recv_address', l_recv_address);
  v_ret_msg := f_json_add(v_ret_msg, 'channel_user', l_account);
  v_ret_msg := f_json_add(v_ret_msg, 'channel_key', l_key);
  v_ret_msg := f_json_add(v_ret_msg,
                          'wave_no',
                          to_char(sysdate, 'yyyyMMdd'));
  v_ret_msg := '{' || f_json_add(v_ret_msg, 'notify_url', l_notify_url) || '}';

  --更新任务信息
  update fc_flow_task t
     set t.task_status = process_status.process, t.ip = v_robot_ip
   where t.tid = v_task_id;

  --更新快递记录状态
  update fc_order_express t
     set t.express_status = express_status.printing
   where t.id = l_exp_id;

  commit;
  v_ret_code := error_code.suc;
  sp_add_operate_log(l_order_no,
                     l_bind_id,
                     operate_type.system,
                     '打印快递单号',
                     v_task_id,
                     v_robot_ip);
exception
  when others then
    rollback;
    sp_write_log('sp_express_get', sqlerrm);
    v_ret_code := error_code.failure;
    v_ret_msg  := '';
end;
/

prompt
prompt Creating procedure SP_EXPRESS_PLAT_GET
prompt ======================================
prompt
create or replace procedure qxfc.sp_express_plat_get(v_task_id  number,
                                                v_robot_ip varchar2,
                                                v_ret_code out number,
                                                v_ret_msg  out varchar2) as
  /*
  功能:获取更新快递单号到电商平台
  作者:jiyi
  时间:2018-04-02
  */
  l_exp_id          number;
  l_bind_id         number;
  l_order_no        varchar2(32);
  l_up_channel_no   varchar2(32);
  l_script_id       number;
  l_down_chanel_no  varchar2(32);
  l_down_order_no   varchar2(128);
  l_express_no      varchar2(32);
  l_express_name    varchar2(32);
  l_down_app_key    varchar2(32);
  l_down_app_secret varchar2(64);
  l_real_delivery   number;
  l_cntr            number;
begin
  select t.order_no, t.bind_id, t.script_id, t.up_channel_no
    into l_order_no, l_bind_id, l_script_id, l_up_channel_no
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.wait
     for update nowait;

  --1.获取快递信息,有快递记录则是实体发货,否则虚拟发货
  select count(1)
    into l_cntr
    from fc_order_express t
   where t.taskid = v_task_id
     and t.order_no = l_order_no
     and t.express_status = express_status.wait_plat_delivery;
  if (l_cntr > 0) then
    select t.id, t.express_no, t.express_name
      into l_exp_id, l_express_no, l_express_name
      from fc_order_express t
     where t.taskid = v_task_id
       and t.order_no = l_order_no
       and t.express_status = express_status.wait_plat_delivery
       for update nowait;
    l_real_delivery := enable_status.enabled;
  else
    l_real_delivery := enable_status.disabled;
  end if;

  select t.down_order_no, t.down_channel_no
    into l_down_order_no, l_down_chanel_no
    from fc_order_main t
   where t.order_no = l_order_no;

  select t.channel_account, t.channel_key
    into l_down_app_key, l_down_app_secret
    from fc_down_channel t
   where t.channel_no = l_down_chanel_no;

  v_ret_msg := f_json_add(v_ret_msg, 'taskid', v_task_id);
  v_ret_msg := f_json_add(v_ret_msg, 'order_no', l_order_no);
  v_ret_msg := f_json_add(v_ret_msg, 'down_order_no', l_down_order_no);
  v_ret_msg := f_json_add(v_ret_msg, 'app_key', l_down_app_key);
  v_ret_msg := f_json_add(v_ret_msg, 'goods_mail', l_real_delivery);
  v_ret_msg := f_json_add(v_ret_msg, 'app_secret', l_down_app_secret);
  v_ret_msg := f_json_add(v_ret_msg,
                          'company_code',
                          nvl(l_express_name, ''));
  v_ret_msg := '{' ||
               f_json_add(v_ret_msg, 'mail_no', nvl(l_express_no, '')) || '}';

  --更新任务信息
  update fc_flow_task t
     set t.task_status = process_status.process, t.ip = v_robot_ip
   where t.tid = v_task_id;

  --更新快递记录状态
  update fc_order_express t
     set t.express_status = express_status.delivery
   where t.id = l_exp_id;

  commit;

  v_ret_code := error_code.suc;
  sp_add_operate_log(l_order_no,
                     l_bind_id,
                     operate_type.system,
                     '更新快递单号到商家平台',
                     v_task_id,
                     v_robot_ip);
exception
  when others then
    rollback;
    sp_write_log('sp_express_plat_get', sqlerrm);
    v_ret_code := error_code.failure;
    v_ret_msg  := '';
end;
/

prompt
prompt Creating procedure SP_EXPRESS_PLAT_SAVE
prompt =======================================
prompt
create or replace procedure qxfc.sp_express_plat_save(v_task_id number,
                                                 v_status  number,
                                                 v_msg     varchar2,
                                                 v_ret_msg out varchar2) as
  /*
  功能:更新电商平台快递单号保存
  作者:jiyi
  时间:2018-04-12
  */
  l_exp_id      number;
  l_task_id     number;
  l_flow_id     number;
  l_action      varchar2(32);
  l_order_no    varchar2(32);
  l_bind_id     varchar2(32);
  l_msg         varchar2(128);
  l_ret         boolean;
  l_ret_task_id number;
  l_script_path varchar2(64);
  l_svc_bus     varchar2(32);
begin
  select t.tid, t.flow_id, t.action, t.order_no, t.bind_id
    into l_task_id, l_flow_id, l_action, l_order_no, l_bind_id
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.process
     for update;

  select t.id
    into l_exp_id
    from fc_order_express t
   where t.taskid = v_task_id
     and t.express_status = express_status.delivery
     for update;

  update fc_order_express t
     set t.express_status = v_status,
         t.result_msg     = v_msg,
         t.finish_time    = sysdate
   where t.id = l_exp_id;

  update fc_flow_task t
     set t.task_status   = v_status,
         t.manual_status = decode(v_status,
                                  process_status.success,
                                  process_status.no_need,
                                  process_status.wait),
         t.task_msg      = v_msg,
         t.task_end_time = sysdate
   where t.tid = l_task_id;

  if (v_status = process_status.failure) then
    commit;
    sp_warn_insert(warn_keywords.task_exception,
                   l_order_no || '平台发货异常,请人工处理');
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.failure,
                                   '任务进入人工审核');
    return;
  end if;

  --推动流程
  l_ret := f_execute_next_step(l_flow_id,
                               l_action,
                               l_order_no,
                               l_bind_id,
                               v_status,
                               v_msg,
                               l_ret_task_id,
                               l_msg,
                               l_script_path,
                               l_svc_bus);
  if (l_ret) then
    commit;
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.suc,
                                   'OK',
                                   l_ret_task_id,
                                   l_script_path,
                                   l_svc_bus);
  else
    rollback;
    l_ret := f_update_task_msg(l_order_no,
                               l_task_id,
                               l_msg,
                               process_status.wait);
    commit;
    v_ret_msg := f_get_task_result(l_order_no, error_code.failure, l_msg);
  end if;
exception
  when others then
    rollback;
    v_ret_msg := f_get_task_result(l_order_no, error_code.failure, sqlerrm);
    sp_write_log('sp_express_plat_save',
                 '保存电商快递任务异常:[' || v_task_id || ',' || v_msg || ']');
end;
/

prompt
prompt Creating procedure SP_EXPRESS_QUERY_GET
prompt =======================================
prompt
create or replace procedure qxfc.sp_express_query_get(v_task_id  number,
                                                 v_robot_ip varchar2,
                                                 v_ret_code out number,
                                                 v_ret_msg  out varchar2) as
  /*
  功能:代客下单快递查询
  作者:jiyi
  时间:2018-04-02
  */
  l_bind_id       number;
  l_order_no      varchar2(32);
  l_up_channel_no varchar2(32);
  l_script_id     number;
  l_api_url       varchar2(128);
  l_account       varchar2(128);
  l_key           varchar2(512);
  l_real_name     varchar2(32);
  l_idno          varchar2(32);
  l_up_seq        varchar2(32);
begin
  select t.order_no, t.bind_id, t.script_id, t.up_channel_no, t.uptranseq
    into l_order_no, l_bind_id, l_script_id, l_up_channel_no, l_up_seq
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.wait
     for update nowait;

  select t.active_real_name, t.active_idno
    into l_real_name, l_idno
    from fc_order_ext t
   where t.order_no = l_order_no;

  --2.获取账户信息
  select min(t.account_no), min(t.account_pwd)
    into l_account, l_key
    from fc_up_account t
   where t.channel_no = l_up_channel_no
     and rownum = 1;

  --3.获取接口信息
  select t.up_url
    into l_api_url
    from fc_up_script t
   where t.sid = l_script_id;

  v_ret_msg := f_json_add(v_ret_msg, 'taskid', v_task_id);
  v_ret_msg := f_json_add(v_ret_msg, 'order_no', l_order_no);
  v_ret_msg := f_json_add(v_ret_msg, 'up_order_no', l_up_seq);
  v_ret_msg := f_json_add(v_ret_msg, 'svc_url', l_api_url);
  v_ret_msg := f_json_add(v_ret_msg, 'real_name', l_real_name);
  v_ret_msg := f_json_add(v_ret_msg, 'idno', l_idno);
  v_ret_msg := f_json_add(v_ret_msg, 'channel_user', l_account);
  v_ret_msg := '{' || f_json_add(v_ret_msg, 'channel_key', l_key) || '}';

  --更新任务信息
  update fc_flow_task t
     set t.task_status = process_status.process, t.ip = v_robot_ip
   where t.tid = v_task_id;

  commit;
  v_ret_code := error_code.suc;
  /*sp_add_operate_log(l_order_no,
  l_bind_id,
  operate_type.system,
  '查询代客下单快递号',
  v_task_id,
  v_robot_ip);*/
exception
  when others then
    rollback;
    sp_write_log('sp_express_query_get', sqlerrm);
    v_ret_code := error_code.failure;
    v_ret_msg  := '';
end;
/

prompt
prompt Creating procedure SP_EXPRESS_QUERY_SAVE
prompt ========================================
prompt
create or replace procedure qxfc.sp_express_query_save(v_task_id   number,
                                                  v_status    number,
                                                  v_mail_name varchar2,
                                                  v_mail_no   varchar2,
                                                  v_msg       varchar2,
                                                  v_ret_msg   out varchar2) as
  /*
  功能:三方快递查询结果保存
  作者:jiyi
  时间:2018-04-12
  */
  l_task_id         number;
  l_flow_id         number;
  l_action          varchar2(32);
  l_order_no        varchar2(32);
  l_bind_id         varchar2(32);
  l_up_channel_no   varchar2(32);
  l_up_product_id   number;
  l_msg             varchar2(128);
  l_ret             boolean;
  l_ret_task_id     number;
  l_script_path     varchar2(64);
  l_svc_bus         varchar2(32);
  l_down_channel_no varchar2(32);
  l_down_order_no   varchar2(32);
  l_order_time      date;
  l_buyer_name      varchar2(32);
  l_buyer_phone     varchar2(32);
  l_buyer_address   varchar2(128);
begin
  select t.tid,
         t.flow_id,
         t.action,
         t.order_no,
         t.bind_id,
         t.up_channel_no,
         t.up_product_id
    into l_task_id,
         l_flow_id,
         l_action,
         l_order_no,
         l_bind_id,
         l_up_channel_no,
         l_up_product_id
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.process
     for update;

  update fc_flow_task t
     set t.task_status   = decode(v_status,
                                  process_status.failure,
                                  process_status.wait,
                                  process_status.success),
         t.manual_status = decode(v_status,
                                  process_status.success,
                                  process_status.no_need,
                                  process_status.wait),
         t.next_time     = decode(v_status,
                                  process_status.failure,
                                  sysdate,
                                  null),
         t.task_msg      = v_msg,
         t.task_end_time = sysdate
   where t.tid = l_task_id;

  if (v_status = process_status.failure) then
    commit;
    v_ret_msg := f_get_task_result(l_order_no, error_code.failure, v_msg);
    return;
  end if;

  select t.down_order_no,
         t.down_channel_no,
         t.request_time,
         ex.buyer_name,
         ex.buyer_phone,
         ex.buyer_address
    into l_down_order_no,
         l_down_channel_no,
         l_order_time,
         l_buyer_name,
         l_buyer_phone,
         l_buyer_address
    from fc_order_main t
   inner join fc_order_ext ex
      on t.order_no = ex.order_no
   where t.order_no = l_order_no;

  insert into fc_order_express
    (id,
     taskid,
     order_no,
     down_order_no,
     down_channel_no,
     order_time,
     express_name,
     express_no,
     express_fee,
     target_name,
     target_phone,
     target_address,
     create_time,
     express_status,
     operate_user)
  values
    (seq_fcorderexpress_id.nextval,
     l_task_id,
     l_order_no,
     l_down_order_no,
     l_down_channel_no,
     l_order_time,
     v_mail_name,
     v_mail_no,
     0,
     l_buyer_name,
     l_buyer_phone,
     l_buyer_address,
     sysdate,
     express_status.wait_plat_delivery,
     'system');

  --推动流程
  l_ret := f_execute_next_step(l_flow_id,
                               l_action,
                               l_order_no,
                               l_bind_id,
                               v_status,
                               v_msg,
                               l_ret_task_id,
                               l_msg,
                               l_script_path,
                               l_svc_bus);
  if (l_ret) then
    commit;
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.suc,
                                   'OK',
                                   l_ret_task_id,
                                   l_script_path,
                                   l_svc_bus);
  else
    rollback;
    l_ret := f_update_task_msg(l_order_no,
                               l_task_id,
                               l_msg,
                               process_status.wait);
    commit;
    v_ret_msg := f_get_task_result(l_order_no, error_code.failure, l_msg);
  end if;
exception
  when others then
    rollback;
    v_ret_msg := f_get_task_result(l_order_no, error_code.failure, sqlerrm);
    sp_write_log('sp_express_query_save',
                 '代客下单快递查询保存异常:[' || v_task_id || ',' || v_mail_no || ',' ||
                 v_msg || ']');
end;
/

prompt
prompt Creating procedure SP_EXPRESS_SAVE
prompt ==================================
prompt
create or replace procedure qxfc.sp_express_save(v_task_id number,
                                            v_status  number,
                                            v_mail_no varchar2,
                                            v_msg     varchar2,
                                            v_ret_msg out varchar2) as
  /*
  功能:快递结果保存
  作者:jiyi
  时间:2018-04-12
  */
  l_exp_id         number;
  l_task_id        number;
  l_flow_id        number;
  l_action         varchar2(32);
  l_next_action    varchar2(32);
  l_order_no       varchar2(32);
  l_bind_id        varchar2(32);
  l_up_channel_no  varchar2(32);
  l_up_product_id  number;
  l_cost           number;
  l_express_status number;
  l_msg            varchar2(128);
  l_ret            boolean;
  l_ret_task_id    number;
  l_end_time       date;
  l_script_path    varchar2(64);
  l_svc_bus        varchar2(32);
begin
  select t.tid,
         t.flow_id,
         t.action,
         t.order_no,
         t.bind_id,
         t.up_channel_no,
         t.up_product_id
    into l_task_id,
         l_flow_id,
         l_action,
         l_order_no,
         l_bind_id,
         l_up_channel_no,
         l_up_product_id
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.process
     for update;

  select t.id
    into l_exp_id
    from fc_order_express t
   where t.taskid = v_task_id
     and t.express_status = express_status.printing
     for update;

  --判断是否还有后续步骤
  l_next_action := f_get_next_step(l_flow_id, l_action);
  if (v_status = process_status.success and
     l_next_action = action_type.plat_delivery) then
    l_express_status := express_status.wait_plat_delivery;
  else
    l_express_status := express_status.wait_print;
  end if;

  update fc_order_express t
     set t.express_status = l_express_status,
         t.express_no     = v_mail_no,
         t.result_msg     = v_msg,
         t.finish_time    = l_end_time
   where t.id = l_exp_id;

  update fc_flow_task t
     set t.task_status   = v_status,
         t.manual_status = decode(v_status,
                                  process_status.success,
                                  process_status.no_need,
                                  process_status.wait),
         t.uptranseq     = v_mail_no,
         t.task_msg      = v_msg,
         t.task_end_time = sysdate
   where t.tid = l_task_id;

  if (v_status = process_status.failure) then
    commit;
    sp_warn_insert(warn_keywords.task_exception,
                   l_order_no || '打印快递单异常:' || v_msg || ',请人工处理');
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.failure,
                                   '任务进入人工审核');
    return;
  end if;

  select t.cost
    into l_cost
    from fc_up_product t
   where t.pid = l_up_product_id;

  --添加资金变更
  l_ret := f_fund_change_up(l_up_channel_no,
                            l_order_no,
                            l_task_id,
                            fund_change_type.express,
                            l_cost,
                            l_order_no || '订单快递费');
  if (not l_ret) then
    rollback;
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.failure,
                                   '添加快递资金变更失败');
    return;
  end if;

  --推动流程
  l_ret := f_execute_next_step(l_flow_id,
                               l_action,
                               l_order_no,
                               l_bind_id,
                               v_status,
                               v_msg,
                               l_ret_task_id,
                               l_msg,
                               l_script_path,
                               l_svc_bus);
  if (l_ret) then
    commit;
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.suc,
                                   'OK',
                                   l_ret_task_id,
                                   l_script_path,
                                   l_svc_bus);
  else
    rollback;
    l_ret := f_update_task_msg(l_order_no,
                               l_task_id,
                               l_msg,
                               process_status.wait);
    commit;
    v_ret_msg := f_get_task_result(l_order_no, error_code.failure, l_msg);
  end if;
exception
  when others then
    rollback;
    v_ret_msg := f_get_task_result(l_order_no, error_code.failure, sqlerrm);
    sp_write_log('sp_express_save',
                 '保存快递任务异常:[' || v_task_id || ',' || v_mail_no || ',' ||
                 v_msg || ']');
end;
/

prompt
prompt Creating procedure SP_EXPRESS_UPDATE
prompt ====================================
prompt
create or replace procedure qxfc.sp_express_update(v_task_id number,
                                              v_mail_no varchar2,
                                              v_msg     varchar2,
                                              v_ret_msg out varchar2) as
  /*
  功能:快递更新
  作者:jiyi
  时间:2018-04-12
  */
  l_exp_id   number;
  l_task_id  number;
  l_order_no varchar2(32);
begin
  select t.tid, t.order_no
    into l_task_id, l_order_no
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.process
     for update;

  select t.id
    into l_exp_id
    from fc_order_express t
   where t.taskid = v_task_id
     and t.express_status in
         (express_status.printing, express_status.delivery)
     for update;

  update fc_order_express t
     set t.express_no = v_mail_no, t.result_msg = v_msg
   where t.id = l_exp_id;

  update fc_flow_task t
     set t.uptranseq = v_mail_no, t.task_msg = v_msg
   where t.tid = l_task_id;

  commit;
  v_ret_msg := f_get_task_result(l_order_no,
                                 error_code.suc,
                                 'OK',
                                 v_task_id);
exception
  when others then
    rollback;
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.failure,
                                   sqlerrm,
                                   v_task_id);
    sp_write_log('sp_express_update',
                 '更新快递任务异常:[' || v_task_id || ',' || v_mail_no || ',' ||
                 v_msg || ']');
end;
/

prompt
prompt Creating procedure SP_IDENTITY_INFO_GET
prompt =======================================
prompt
create or replace procedure qxfc.sp_identity_info_get(v_task_id  number,
                                                 v_robot_ip varchar2,
                                                 v_ret_code out number,
                                                 v_ret_msg  out varchar2) as
  /*
  功能:获取实名信息
  作者:jiyi
  时间:2018-04-02
  */
  l_bind_id         number;
  l_order_no        varchar2(32);
  l_script_id       number;
  l_down_chanel_no  varchar2(32);
  l_down_order_no   varchar2(128);
  l_down_app_key    varchar2(32);
  l_down_app_secret varchar2(64);
begin
  select t.order_no, t.bind_id, t.script_id
    into l_order_no, l_bind_id, l_script_id
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.wait
     for update nowait;

  select t.down_order_no, t.down_channel_no
    into l_down_order_no, l_down_chanel_no
    from fc_order_main t
   where t.order_no = l_order_no;

  select t.channel_account, t.channel_key
    into l_down_app_key, l_down_app_secret
    from fc_down_channel t
   where t.channel_no = l_down_chanel_no;

  v_ret_msg := f_json_add(v_ret_msg, 'taskid', v_task_id);
  v_ret_msg := f_json_add(v_ret_msg, 'order_no', l_order_no);
  v_ret_msg := f_json_add(v_ret_msg, 'down_order_no', l_down_order_no);
  v_ret_msg := f_json_add(v_ret_msg, 'app_key', l_down_app_key);
  v_ret_msg := '{' ||
               f_json_add(v_ret_msg, 'app_secret', l_down_app_secret) || '}';

  --更新任务信息
  update fc_flow_task t
     set t.task_status = process_status.process, t.ip = v_robot_ip
   where t.tid = v_task_id;

  commit;

  v_ret_code := error_code.suc;
  sp_add_operate_log(l_order_no,
                     l_bind_id,
                     operate_type.system,
                     '获取实名身份信息',
                     v_task_id,
                     v_robot_ip);
exception
  when others then
    rollback;
    sp_write_log('sp_identity_info_get', sqlerrm);
    v_ret_code := error_code.failure;
    v_ret_msg  := '';
end;
/

prompt
prompt Creating procedure SP_IDENTITY_INFO_SAVE
prompt ========================================
prompt
create or replace procedure qxfc.sp_identity_info_save(v_task_id         number,
                                                  v_status          number,
                                                  v_msg             varchar2,
                                                  v_package_phone   varchar2, --新办理的号码
                                                  v_idno            varchar2,
                                                  v_real_name       varchar2,
                                                  v_install_address varchar2,
                                                  v_belong_area     varchar2,
                                                  v_recv_province   varchar2,
                                                  v_recv_city       varchar2,
                                                  v_recv_address    varchar2,
                                                  v_memo            varchar2,
                                                  v_ret_msg         out varchar2) as
  /*
  功能:更新实名信息
  作者:jiyi
  时间:2018-04-12
  */
  l_task_id       number;
  l_flow_id       number;
  l_action        varchar2(32);
  l_order_no      varchar2(32);
  l_bind_id       varchar2(32);
  l_city_no       varchar2(32); --归属城市
  l_province_no   varchar2(32); --归属省份
  l_recv_province varchar2(32);
  l_recv_city     varchar2(32);
  l_msg           varchar2(128);
  l_ret           boolean;
  l_ret_task_id   number;
  l_script_path   varchar2(64);
  l_svc_bus       varchar2(32);
begin
  select t.tid, t.flow_id, t.action, t.order_no, t.bind_id
    into l_task_id, l_flow_id, l_action, l_order_no, l_bind_id
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.process
     for update;

  update fc_flow_task t
     set t.task_status   = v_status,
         t.manual_status = decode(v_status,
                                  process_status.success,
                                  process_status.no_need,
                                  process_status.wait),
         t.task_msg      = v_msg,
         t.task_end_time = sysdate
   where t.tid = l_task_id;

  if (v_status = process_status.failure) then
    commit;
    sp_warn_insert(warn_keywords.task_exception,
                   l_order_no || '获取实名信息异常:' || v_msg || ',请人工处理');
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.failure,
                                   '任务进入人工审核');
    return;
  end if;

  if (length(v_belong_area) > 0) then
    select nvl(min(t.city_no), '*'), nvl(min(t.province_no), 'QG')
      into l_city_no, l_province_no
      from fc_system_city t
     where t.city_name = v_belong_area;
  end if;

  if (length(v_recv_city) > 0) then
    select nvl(min(t.city_no), '*')
      into l_recv_city
      from fc_system_city t
     where t.city_name like '%' || v_recv_city || '%';
  
  end if;

  if (length(v_recv_province) > 0) then
    select nvl(min(t.province_no), 'QG')
      into l_recv_province
      from fc_system_province t
     where t.province_name like '%' || v_recv_province || '%';
  end if;

  --根据归属地更新省份/城市
  update fc_order_main t
     set t.active_phone = nvl(v_package_phone, t.active_phone),
         t.city_no      = nvl(l_city_no, '*'),
         t.province_no  = nvl(l_province_no, 'QG')
   where t.order_no = l_order_no;

  update fc_order_ext t
     set t.active_real_name = decode(v_real_name,
                                     '',
                                     t.active_real_name,
                                     v_real_name),
         t.active_idno      = decode(v_idno, '', t.active_idno, v_idno),
         t.install_address  = decode(v_install_address,
                                     '',
                                     t.install_address,
                                     v_install_address),
         t.buyer_address    = decode(v_recv_address,
                                     '',
                                     t.buyer_address,
                                     v_recv_address),
         t.buyer_province   = decode(l_recv_province,
                                     '',
                                     t.buyer_province,
                                     l_recv_province),
         t.buyer_city       = decode(l_recv_city,
                                     '',
                                     t.buyer_city,
                                     l_recv_city),
         t.buyer_message    = nvl(t.buyer_message, v_memo)
   where t.order_no = l_order_no;

  commit;

  --推动流程
  l_ret := f_execute_next_step(l_flow_id,
                               l_action,
                               l_order_no,
                               l_bind_id,
                               v_status,
                               v_msg,
                               l_ret_task_id,
                               l_msg,
                               l_script_path,
                               l_svc_bus);
  if (l_ret) then
    commit;
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.suc,
                                   'OK',
                                   l_ret_task_id,
                                   l_script_path,
                                   l_svc_bus);
  else
    rollback;
    sp_warn_insert(Warn_Keywords.flow_exception,
                   l_order_no || ',' || l_msg);
    l_ret := f_update_task_msg(l_order_no,
                               l_task_id,
                               l_msg,
                               process_status.wait);
    commit;
    v_ret_msg := f_get_task_result(l_order_no, error_code.failure, l_msg);
  end if;
exception
  when others then
    rollback;
    v_ret_msg := f_get_task_result(l_order_no, error_code.failure, sqlerrm);
    sp_write_log('sp_identity_info_save',
                 '保存实名信息异常:[' || v_task_id || ',' || v_msg || ']');
end;
/

prompt
prompt Creating procedure SP_MANUAL_BOOK_INSTALL
prompt =========================================
prompt
create or replace procedure qxfc.sp_manual_book_install(v_task_id      number,
                                                   v_status       number,
                                                   v_msg          varchar2,
                                                   v_install_date varchar2, --yyyy-mm-dd
                                                   v_brand_no     varchar2,
                                                   v_itv_no       varchar2,
                                                   v_operator     varchar2,
                                                   v_ret_code     out number,
                                                   v_ret_msg      out varchar2) as
  /*
  功能:人工预约安装
  作者:jiyi
  时间:2018-04-27
  */
  l_task_id      number;
  l_flow_id      number;
  l_order_no     varchar2(32);
  l_bind_id      varchar2(32);
  l_action       varchar2(32);
  l_ret_task_id  number;
  l_install_date date;
  l_ret          boolean;
  l_msg          varchar2(128);
  l_script_path  varchar2(64);
  l_svc_bus      varchar2(32);
begin
  l_install_date := to_date(v_install_date, 'yyyy-MM-dd');
  select t.tid, t.order_no, t.bind_id, t.action, t.flow_id
    into l_task_id, l_order_no, l_bind_id, l_action, l_flow_id
    from fc_flow_task t
   where t.tid = v_task_id
     and t.manual_status = process_status.wait
     for update;

  update fc_order_ext t
     set t.install_date = l_install_date, t.brand_no = v_brand_no
   where t.order_no = l_order_no;

  update fc_flow_task t
     set t.uptranseq     = v_itv_no,
         t.task_status   = v_status,
         t.manual_status = process_status.success,
         t.task_msg      = decode(v_status,
                                  process_status.success,
                                  '安装时间:' || v_install_date,
                                  v_msg)
   where t.tid = v_task_id;

  l_ret := f_execute_next_step(l_flow_id,
                               l_action,
                               l_order_no,
                               '',
                               v_status,
                               v_msg,
                               l_ret_task_id,
                               l_msg,
                               l_script_path,
                               l_svc_bus);
  if (l_ret) then
    v_ret_code := error_code.suc;
    v_ret_msg  := '成功';
    commit;
  else
    rollback;
    v_ret_code := error_code.failure;
    v_ret_msg  := '操作预约失败';
    return;
  end if;

  sp_add_operate_log(l_order_no,
                     l_bind_id,
                     operate_type.manual,
                     '安装时间:' || v_install_date,
                     v_task_id,
                     '',
                     v_operator);
exception
  when others then
    rollback;
    sp_write_log('sp_manual_book_install', sqlerrm);
    v_ret_code := error_code.failure;
    v_ret_msg  := '';
end;
/

prompt
prompt Creating procedure SP_MANUAL_EXPRESS
prompt ====================================
prompt
create or replace procedure qxfc.sp_manual_express(v_task_id    number,
                                              v_mail_no    varchar2,
                                              v_channel_no varchar2,
                                              v_operator   varchar2,
                                              v_ret_code   out number,
                                              v_ret_msg    out varchar2) as
  /*
  功能:手动打印快递
  作者:jiyi
  时间:2018-04-27
  */
  l_task_id        number;
  l_flow_id        number;
  l_order_no       varchar2(32);
  l_bind_id        varchar2(32);
  l_action         varchar2(32);
  l_next_action    varchar2(32);
  l_express_status varchar2(32);
  l_ret_task_id    number;
  l_script         varchar2(128);
  l_svc            varchar2(32);
  l_ret            boolean;
begin
  select t.tid, t.order_no, t.bind_id, t.action, t.flow_id
    into l_task_id, l_order_no, l_bind_id, l_action, l_flow_id
    from fc_flow_task t
   where t.tid = v_task_id
     and t.manual_status = process_status.wait
     for update;

  --判断是否还有后续步骤
  l_next_action := f_get_next_step(l_flow_id, l_action);
  if (l_next_action = action_type.plat_delivery) then
    l_express_status := express_status.wait_plat_delivery;
  else
    l_express_status := express_status.success;
  end if;

  update fc_flow_task t
     set t.uptranseq     = v_mail_no,
         t.up_channel_no = v_channel_no,
         t.task_status   = process_status.success,
         t.manual_status = process_status.success,
         t.task_msg      = '手动发货:' || v_mail_no,
         t.task_end_time = sysdate
   where t.tid = v_task_id;

  update fc_order_express t
     set t.express_no     = v_mail_no,
         t.express_name   = v_channel_no,
         t.express_status = l_express_status
   where t.order_no = l_order_no
     and t.taskid = l_task_id;

  l_ret := f_execute_next_step(l_flow_id,
                               l_action,
                               l_order_no,
                               l_bind_id,
                               process_status.success,
                               '手动发货:' || v_mail_no,
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
                     '手动发货:' || v_mail_no,
                     v_task_id,
                     '',
                     v_operator);
exception
  when others then
    rollback;
    sp_write_log('sp_manual_express', sqlerrm);
    v_ret_code := error_code.failure;
    v_ret_msg  := '';
end;
/

prompt
prompt Creating procedure SP_MANUAL_IDENTITY_AUTH
prompt ==========================================
prompt
create or replace procedure qxfc.sp_manual_identity_auth(v_task_id       number,
                                                    v_real_name     varchar2,
                                                    v_idno          varchar2,
                                                    v_card_province varchar2,
                                                    v_card_city     varchar2,
                                                    v_operator      varchar2,
                                                    v_ret_code      out number,
                                                    v_ret_msg       out varchar2) as
  /*
  功能:手动身份认证
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
     set t.task_status   = process_status.success,
         t.manual_status = process_status.failure,
         t.task_msg      = '人工完善实名信息',
         t.task_end_time = sysdate
   where t.tid = v_task_id;

  update fc_order_main t
     set t.province_no = v_card_province, t.city_no = v_card_city
   where t.order_no = l_order_no;

  update fc_order_ext t
     set t.active_real_name = v_real_name, t.active_idno = v_idno
   where t.order_no = l_order_no;

  l_ret := f_execute_next_step(l_flow_id,
                               l_action,
                               l_order_no,
                               l_bind_id,
                               process_status.success,
                               '人工完善实名信息',
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
                     '订单:' || l_order_no || '人工完善实名信息OK',
                     v_task_id,
                     '',
                     v_operator);
exception
  when others then
    rollback;
    sp_write_log('sp_manual_identity_auth', sqlerrm);
    v_ret_code := error_code.failure;
    v_ret_msg  := '';
end;
/

prompt
prompt Creating procedure SP_MANUAL_RENEW
prompt ==================================
prompt
create or replace procedure qxfc.sp_manual_renew(v_task_id   number,
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
end;
/

prompt
prompt Creating procedure SP_MANUAL_WRITE_CARD
prompt =======================================
prompt
create or replace procedure qxfc.sp_manual_write_card(v_task_id   number,
                                                 v_status    number, --0:成功 90:失败
                                                 v_trans_seq varchar2,
                                                 v_remark    varchar2,
                                                 v_operator  varchar2,
                                                 v_newphone  varchar2 default '',
                                                 v_ret_code  out number,
                                                 v_ret_msg   out varchar2) as
  /*
  功能:手动写卡
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

  update fc_order_ext t
     set t.write_card = write_card_mode.manual
   where t.order_no = l_order_no;

  --更新新的手机号
  if (v_newphone is not null and length(v_newphone) > 0) then
    update fc_order_main t
       set t.active_phone = v_newphone
     where t.order_no = l_order_no;
  end if;

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
                     '订单:' || l_order_no || ',' || l_action || '改为手动写卡',
                     v_task_id,
                     '',
                     v_operator);
exception
  when others then
    rollback;
    sp_write_log('sp_manual_write_card', v_task_id || ',' || sqlerrm);
    v_ret_code := error_code.failure;
    v_ret_msg  := '';
end;
/

prompt
prompt Creating procedure SP_ORDER_BIND
prompt ================================
prompt
create or replace procedure qxfc.sp_order_bind(v_order_no varchar2,
                                          v_robot_ip varchar2,
                                          v_ret_msg  out varchar2) as
  pragma autonomous_transaction;
  /*
  功能:绑定
  作者:jiyi
  时间:2018-04-02
  */
  l_bind_id         varchar2(32);
  l_order_no        varchar2(64);
  l_down_order_no   varchar2(64);
  l_down_channel_no varchar2(32);
  l_phone           varchar2(32);
  l_package_id      number;
  l_product_type    number;
  l_face            number;
  l_down_price      number;
  l_trade_fee       number;
  l_product_id      number;
  l_up_channel_no   varchar2(32);
  l_up_account_id   number;
  l_up_pid          number;
  l_up_cost         number;
  l_up_reward       number;
  l_script_id       number;
  l_script_path     varchar2(128);
  l_svc_bus         varchar2(32);
  l_msg             varchar2(128);
  l_bind_mode       number;
  l_flow_id         number;
  l_flow_step       varchar2(32);
  l_ret             boolean;
  l_task_id         number;
  l_task_msg        varchar2(32);
begin

  select t.order_no,
         t.down_order_no,
         t.down_channel_no,
         t.down_product_id,
         t.face,
         t.pay_fee,
         t.trade_fee,
         t.active_phone,
         t.package_id,
         t.product_type,
         t.flow_id,
         t.action
    into l_order_no,
         l_down_order_no,
         l_down_channel_no,
         l_product_id,
         l_face,
         l_down_price,
         l_trade_fee,
         l_phone,
         l_package_id,
         l_product_type,
         l_flow_id,
         l_flow_step
    from fc_order_main t
   where t.order_no = v_order_no
     and t.order_status = order_status.wait
     for update nowait;

  select t.bind_mode
    into l_bind_mode
    from fc_down_product t
   where t.pid = l_product_id;

  --获取上游产品信息
  for it in (select up.channel_no,
                    up.product_no,
                    up.pid,
                    up.cost,
                    up.reward,
                    us.sid,
                    us.script_path,
                    us.svc_bus,
                    ua.id as acct_id
               from fc_down_product dp
              inner join fc_up_product up
                 on up.package_id = dp.package_id
              inner join fc_up_channel uc
                 on uc.channel_no = up.channel_no
              inner join fc_up_account ua
                 on uc.channel_no = ua.channel_no
              inner join fc_up_script us
                 on uc.channel_no = us.channel_no
              inner join fc_product_package pp
                 on pp.pkg_id = up.package_id
              inner join fc_flow_step fs
                 on fs.fid = dp.flow_id
              where dp.pid = l_product_id
                and fs.action = l_flow_step
                and ua.status = enable_status.enabled
                and up.status = enable_status.enabled
                and uc.status = enable_status.enabled
                and us.status = enable_status.enabled
                and us.script_type = fs.script_type
                and (up.province_no = dp.province_no or
                    up.province_no = 'QG')
                and (up.carrier_no = dp.carrier_no or up.carrier_no = '*')
                and (up.city_no = dp.city_no or up.city_no = '*')
                and (up.product_type = dp.product_type or
                    up.product_type = 0)
                and (us.product_type = dp.product_type or
                    us.product_type = 0)
                and (us.package_id = dp.package_id or us.package_id = 0)
                and (us.carrier_no = up.carrier_no or us.carrier_no = '*')
                and (us.province_no = up.province_no or
                    us.province_no = 'QG')
                and (us.city_no = up.city_no or us.city_no = '*')
                and (ua.carrier_no = up.carrier_no or ua.carrier_no = '*')
                and (ua.province_no = up.province_no or
                    ua.province_no = 'QG')
                and (ua.city_no = up.city_no or ua.city_no = '*')
                and not exists
              (select 1
                       from fc_down_exclude_up ex
                      where ex.down_channel_no = dp.channel_no
                        and ex.down_group_no = dp.group_no
                        and ex.up_channel_no = uc.channel_no
                        and ex.up_group_no = up.group_no
                        and ex.status = enable_status.enabled)
                and (l_bind_mode = bind_mode.Free or exists
                     (select 1
                        from fc_down_specify_up su
                       where su.down_channel_no = dp.channel_no
                         and su.down_group_no = dp.group_no
                         and su.up_channel_no = uc.channel_no
                         and su.up_group_no = up.group_no
                         and su.status = enable_status.enabled))
              order by up.cost asc, up.reward desc) loop
    l_up_channel_no := it.channel_no;
    l_up_pid        := it.pid;
    l_up_account_id := it.acct_id;
    l_up_cost       := nvl(it.cost, 0);
    l_up_reward     := it.reward;
    l_script_id     := it.sid;
    l_script_path   := it.script_path;
    l_svc_bus       := it.svc_bus;
    exit;
  end loop;

  if (l_up_channel_no is null) then
    l_msg := '没有可用上游渠道';
    update fc_order_main t
       set t.error_code   = 200,
           t.error_msg    = l_msg,
           t.order_status = order_status.failure
     where t.order_no = l_order_no;
    commit;
  
    v_ret_msg := f_get_bind_result(l_bind_id, '200', l_msg);
    sp_warn_insert(Warn_Keywords.task_exception,
                   '订单' || l_order_no || l_msg,
                   3);
    return;
  end if;

  l_bind_id := f_new_bind_id();
  insert into fc_order_bind
    (bind_id,
     order_no,
     down_order_no,
     down_channel_no,
     up_channel_no,
     up_product_id,
     up_account_id,
     face,
     down_price,
     down_trade_fee,
     up_cost,
     up_reward,
     phone_no,
     product_type,
     package_id,
     script_id,
     script_path,
     svc_bus,
     ip,
     bind_time,
     bind_status,
     flow_id,
     action)
  values
    (l_bind_id,
     l_order_no,
     l_down_order_no,
     l_down_channel_no,
     l_up_channel_no,
     l_up_pid,
     l_up_account_id,
     l_face,
     l_down_price,
     l_trade_fee,
     l_up_cost,
     l_up_reward,
     l_phone,
     l_product_type,
     l_package_id,
     l_script_id,
     l_script_path,
     l_svc_bus,
     v_robot_ip,
     sysdate,
     process_status.process,
     l_flow_id,
     l_flow_step);

  update fc_order_main t
     set t.bind_ip      = v_robot_ip,
         t.order_status = order_status.process,
         t.error_msg    = '绑定成功'
   where t.order_no = l_order_no;
  commit;

  --创建任务
  l_ret := f_create_task(l_flow_id,
                         l_flow_step,
                         l_order_no,
                         l_bind_id,
                         l_task_id,
                         l_task_msg,
                         l_script_path,
                         l_svc_bus);
  if (not l_ret) then
    rollback;
    update fc_order_bind t
       set t.bind_status  = process_status.failure,
           t.delivery_msg = '创建任务失败:' || l_task_msg
     where t.bind_id = l_bind_id;
  
    update fc_order_main t
       set t.order_status = order_status.failure,
           t.error_msg    = '创建任务失败:' || l_task_msg
     where t.order_no = l_order_no;
  
    sp_warn_insert('绑定告警', l_order_no || '创建任务失败:' || l_task_msg);
  end if;

  commit;
  v_ret_msg := f_get_bind_result(l_bind_id, error_code.suc, 'OK');
  sp_add_operate_log(l_order_no,
                     l_bind_id,
                     operate_type.system,
                     '绑定成功');
exception
  when others then
    rollback;
    sp_write_log('sp_order_bind', '绑定异常:' || sqlerrm);
    v_ret_msg := f_get_bind_result('', error_code.failure, sqlerrm);
end;
/

prompt
prompt Creating procedure SP_ORDER_QUERY
prompt =================================
prompt
create or replace procedure qxfc.sp_order_query(v_coopId    varchar2,
                                           v_coopOrder varchar2,
                                           v_ret_msg   out varchar2) as
  /*
  功能:订单查询
  作者:jiyi
  时间:2018-05-11
  */
  l_order_no     varchar2(32);
  l_order_status number;
  l_msg          varchar2(128);
begin
  select min(t.order_no),
         min(decode(t.order_status, 0, 0, 90, 1, 2)),
         min(t.error_msg)
    into l_order_no, l_order_status, l_msg
    from fc_order_main t
   where t.down_channel_no = v_coopId
     and t.down_order_no = v_coopOrder;

  if (l_order_no is null) then
    l_order_no     := '';
    l_order_status := 4;
  end if;

  v_ret_msg := f_json_add(v_ret_msg, 'order_no', l_order_no);
  v_ret_msg := f_json_add(v_ret_msg, 'order_status', l_order_status);
  v_ret_msg := '{' || f_json_add(v_ret_msg, 'msg', l_order_status) || '}';
end;
/

prompt
prompt Creating procedure SP_RECV_CHECK_CHARGE
prompt =======================================
prompt
create or replace procedure qxfc.sp_recv_check_charge(v_down_channel_no varchar2,
                                                 v_down_order_no   varchar2,
                                                 v_idno            varchar2,
                                                 v_brand_no        varchar2,
                                                 v_phone           varchar2,
                                                 v_biz_type        varchar2,
                                                 v_carrier_no      varchar2,
                                                 v_ret_msg         out varchar2) as
  /*
  功能:缴费/续费鉴权保存
  作者:jiyi
  时间:2018-05-14
  */
  l_id         number;
  l_carrier_no varchar2(32) := v_carrier_no;
begin
  if (v_carrier_no is null or length(v_carrier_no) = 0) then
    l_carrier_no := 'DX';
  end if;

  l_id := seq_check_charge_id.nextval;
  insert into fc_check_charge
    (id,
     down_channel_no,
     down_order_no,
     idno,
     brand_no,
     phone,
     biz_type,
     carrier_no,
     status,
     bus_svc,
     script_path)
  values
    (l_id,
     v_down_channel_no,
     v_down_order_no,
     v_idno,
     v_brand_no,
     v_phone,
     v_biz_type,
     'DX',
     process_status.wait,
     'qx.fc.mail',
     '../script/scdx/auth.lua');
  commit;
  v_ret_msg := f_get_task_result(l_id,
                                 100,
                                 'OK',
                                 l_id,
                                 '../script/scdx/auth.lua',
                                 'qx.fc.mail');
exception
  when others then
    rollback;
    sp_write_log('sp_recv_check_charge', v_down_order_no || ',' || sqlerrm);
    v_ret_msg := f_get_task_result(-1, 200, sqlerrm);
end;
/

prompt
prompt Creating procedure SP_RECV_ORDER
prompt ================================
prompt
create or replace procedure qxfc.sp_recv_order(v_coopId          varchar2,
                                          v_coopOrderNo     varchar2,
                                          v_payOrderNo      varchar2,
                                          v_productNo       varchar2,
                                          v_sku_id          varchar2,
                                          v_payFee          number,
                                          v_pay_account     varchar2,
                                          v_newPhone        varchar2,
                                          v_buyerIdno       varchar2,
                                          v_buyerBrandNo    varchar2,
                                          v_buyerNick       varchar2,
                                          v_buyerName       varchar2,
                                          v_buyerPhone      varchar2,
                                          v_buyerAddress    varchar2,
                                          v_installAdress   varchar2,
                                          v_buyerMessage    varchar2,
                                          v_tmall_status    varchar2,
                                          v_tmall_orderDate varchar2, --yyyymmddhh24miss
                                          v_remark          varchar2,
                                          v_ext1            varchar2,
                                          v_ext2            varchar2,
                                          v_ret_msg         out varchar2) as
  /*
  功能:收单
  作者:jiyi
  时间:2018-04-01
  */
  l_channel_no      varchar2(32);
  l_order_no        varchar2(32) := '';
  l_product_id      number;
  l_product_fee     number;
  l_trade_fee       number;
  l_product_name    varchar2(64);
  l_package_id      number;
  l_product_type    number;
  l_icc_type        number;
  l_write_card_type number;
  l_carrier_no      varchar2(32);
  l_province_no     varchar2(32);
  l_city_no         varchar2(32);
  l_trial_day       number;
  l_can_trial       number;
  l_auto_active     number;
  l_order_timeout   number := 1;
  l_flow_id         number;
  l_flow_step       varchar2(32);
  l_task_id         number;
  l_script_path     varchar2(64);
  l_svc_bus         varchar2(32);
  l_msg             varchar2(64);
  l_bind_id         varchar2(32);
  l_ret             boolean;
begin
  select min(t.order_no)
    into l_order_no
    from fc_order_main t
   where t.down_channel_no = v_coopId
     and t.down_order_no = v_coopOrderNo;

  if (l_order_no is null and v_tmall_status <> 'WAIT_SELLER_SEND_GOODS') then
    v_ret_msg := f_get_task_result(l_order_no, '101', '天猫订单状态不正确');
    return;
  end if;

  if (l_order_no is not null) then
    v_ret_msg := f_get_task_result(l_order_no, '100', 'OK');
    l_ret     := f_update_order_info(l_order_no,
                                     v_tmall_status,
                                     v_buyerName,
                                     v_buyerPhone,
                                     v_buyerAddress,
                                     v_installAdress,
                                     v_buyerMessage,
                                     v_ext1,
                                     v_ext2);
    commit;
    return;
  end if;

  select min(t.channel_no)
    into l_channel_no
    from fc_down_channel t
   where t.channel_no = v_coopId
     and t.status = enable_status.enabled;
  if (l_channel_no is null) then
    v_ret_msg := f_get_task_result(l_order_no, '102', '渠道不可用');
    return;
  end if;

  select min(t.pid),
         min(t.product_name),
         min(t.package_id),
         min(t.product_type),
         min(t.can_trial),
         min(t.trial_day),
         min(t.auto_active),
         min(t.sale_price),
         min(decode(t.fee_type,
                    fee_type.fix,
                    t.trade_fee,
                    t.sale_price * t.trade_fee / 1000)),
         min(t.carrier_no),
         min(t.province_no),
         min(t.city_no),
         min(t.flow_id),
         min(t.icc_type),
         min(t.write_card_mode)
    into l_product_id,
         l_product_name,
         l_package_id,
         l_product_type,
         l_can_trial,
         l_trial_day,
         l_auto_active,
         l_product_fee,
         l_trade_fee,
         l_carrier_no,
         l_province_no,
         l_city_no,
         l_flow_id,
         l_icc_type,
         l_write_card_type
    from fc_down_product t
   where t.channel_no = v_coopId
     and (t.product_no = v_productNo or t.sku = v_sku_id)
     and t.status = enable_status.enabled
     and rownum = 1;

  if (l_product_id is null) then
    v_ret_msg := f_get_task_result(l_order_no, '103', '产品不存在或不可用');
    sp_warn_insert(warn_keywords.recv_exception,
                   '[' || v_coopOrderNo || ',' || v_productNo || ']不存在或不可用');
    return;
  end if;

  if (l_product_fee <> v_payFee) then
    v_ret_msg := f_get_task_result(l_order_no, '104', '金额不正确');
    sp_warn_insert(warn_keywords.recv_exception,
                   '[' || v_coopOrderNo || ',' || v_productNo || ']产品金额不一致');
    return;
  end if;

  select min(t.action)
    into l_flow_step
    from fc_flow_step t
   where t.fid = l_flow_id
     and t.sno = 1;

  l_order_no := f_new_order_no();
  insert into fc_order_main
    (order_no,
     down_channel_no,
     down_order_no,
     down_product_no,
     down_product_id,
     product_name,
     product_type,
     package_id,
     carrier_no,
     province_no,
     city_no,
     active_phone,
     face,
     pay_fee,
     trade_fee,
     buy_cntr,
     trial_day,
     auto_active,
     request_time,
     order_timeout,
     order_status,
     active_status,
     active_timeout,
     remark,
     ext1,
     ext2,
     action,
     flow_id)
  values
    (l_order_no,
     v_coopId,
     v_coopOrderNo,
     v_productNo,
     l_product_id,
     l_product_name,
     l_product_type,
     l_package_id,
     l_carrier_no,
     l_province_no,
     l_city_no,
     v_newPhone,
     l_product_fee,
     v_payFee,
     l_trade_fee,
     1,
     l_trial_day,
     l_auto_active,
     sysdate,
     sysdate + l_order_timeout,
     order_status.process,
     active_status.no_need,
     decode(l_can_trial,
            enable_status.enabled,
            sysdate + l_trial_day + 1,
            sysdate),
     v_remark,
     v_ext1,
     v_ext2,
     l_flow_step,
     l_flow_id);

  insert into fc_order_ext
    (order_no,
     buyer_name,
     active_real_name,
     active_idno,
     brand_no,
     buyer_nick,
     buyer_alipay_id,
     pay_order_no,
     buyer_phone,
     buyer_address,
     buyer_message,
     icc_type,
     write_card,
     tmall_status,
     tmall_order_date,
     install_address)
  values
    (l_order_no,
     v_buyerName,
     v_buyerName,
     v_buyerIdno,
     v_buyerBrandNo,
     v_buyerNick,
     v_pay_account,
     v_payOrderNo,
     v_buyerPhone,
     v_buyerAddress,
     v_buyerMessage,
     l_icc_type,
     l_write_card_type,
     v_tmall_status,
     to_date(v_tmall_orderDate, 'yyyyMMddHH24miss'),
     v_installAdress);

  --添加下游资金变更
  l_ret := f_fund_change_down(v_coopId,
                              v_coopOrderNo,
                              l_order_no,
                              v_payFee,
                              fund_change_type.add,
                              '新订单加款',
                              l_trade_fee);
  commit;

  --设置iccid
  if (l_icc_type in (1, 2)) then
    l_ret := f_assign_iccno(l_order_no,
                            l_icc_type,
                            l_carrier_no,
                            l_province_no,
                            l_city_no,
                            l_msg);
    if (not l_ret) then
      update fc_order_main t
         set t.error_msg = l_msg
       where t.order_no = l_order_no;
    end if;
  end if;

  --创建任务,驱动流程
  l_ret := f_create_task(l_flow_id,
                         l_flow_step,
                         l_order_no,
                         l_bind_id,
                         l_msg,
                         l_task_id,
                         l_script_path,
                         l_svc_bus);

  v_ret_msg := f_get_task_result(l_order_no,
                                 error_code.suc,
                                 'OK',
                                 l_task_id,
                                 l_script_path,
                                 l_svc_bus);
  commit;
  sp_add_operate_log(l_order_no, '', operate_type.system, '收单成功');
exception
  when others then
    rollback;
    l_order_no := '';
    v_ret_msg  := f_get_task_result(l_order_no, error_code.failure, sqlerrm);
    sp_write_log('sp_recv_order', sqlerrm);
    sp_warn_insert(warn_keywords.recv_exception,
                   v_coopOrderNo || '收单异常:' || sqlerrm);
end;
/

prompt
prompt Creating procedure SP_RECV_REFUND
prompt =================================
prompt
create or replace procedure qxfc.s0p_recv_refund(v_down_channel_no     varchar2,
                                           v_down_order_no       varchar2,
                                           v_refund_no           varchar2,
                                           v_pay_order_no        varchar2,
                                           v_refund_fee          number,
                                           v_reason              varchar2,
                                           v_tmall_refund_date   varchar2,
                                           v_tmall_refund_status varchar2,
                                           v_tmall_order_status  varchar2,
                                           v_tmall_goods_status  varchar2,
                                           v_buyernick           varchar2,
                                           v_attribute           varchar2,
                                           v_ret_msg             out varchar2) as
  /*
  功能:退款订单保存
  作者:jiyi
  时间:2018-04-09
  */
  l_cntr            number;
  l_order_no        varchar2(32);
  l_pay_fee         number;
  l_down_product_no varchar2(32);
  l_product_name    varchar2(32);
  l_from            varchar2(32);
  l_to              varchar2(32);
  l_refund_id       number;
begin
  select count(1)
    into l_cntr
    from fc_order_refund t
   where t.down_channel_no = v_down_channel_no
     and t.down_order_no = v_down_order_no;
  if (l_cntr > 0) then
    --更新退款信息
    update fc_order_refund t
       set t.message             = v_attribute,
           t.tmall_refund_status = v_tmall_refund_status,
           t.tmall_goods_status  = v_tmall_goods_status
     where t.down_channel_no = v_down_channel_no
       and t.down_order_no = v_down_order_no;
    commit;
    v_ret_msg := f_get_refund_result(l_refund_id, 100, 'OK');
    return;
  end if;

  select min(t.order_no),
         min(t.pay_fee),
         min(t.down_product_no),
         min(t.product_name)
    into l_order_no, l_pay_fee, l_down_product_no, l_product_name
    from fc_order_main t
   where t.down_channel_no = v_down_channel_no
     and t.down_order_no = v_down_order_no;
  if (l_order_no is null) then
    v_ret_msg := f_get_refund_result('', error_code.failure, '订单不存在');
    return;
  end if;

  select t.buyer_alipay_id
    into l_to
    from fc_order_ext t
   where t.order_no = l_order_no;

  if (l_pay_fee < v_refund_fee) then
    v_ret_msg := f_get_refund_result('',
                                     error_code.failure,
                                     '退款金额不正确');
    return;
  end if;

  l_refund_id := seq_fcorderrefund_auto_id.nextval;
  insert into fc_order_refund
    (id,
     order_no,
     down_order_no,
     down_channel_no,
     down_product_no,
     product_name,
     buyer_nick,
     tmall_refund_id,
     tmall_refund_date,
     tmall_refund_status,
     reason,
     message,
     tmall_goods_status,
     tmall_order_status,
     pay_order_no,
     refund_fee,
     from_account,
     to_account,
     refund_status,
     created_user,
     created_time)
  values
    (l_refund_id,
     l_order_no,
     v_down_order_no,
     v_down_channel_no,
     l_down_product_no,
     l_product_name,
     v_buyernick,
     v_refund_no,
     to_date(v_tmall_refund_date, 'yyyyMMddHH24miss'),
     v_tmall_refund_status,
     v_reason,
     v_attribute,
     v_tmall_goods_status,
     v_tmall_order_status,
     v_pay_order_no,
     v_refund_fee,
     l_from,
     l_to,
     refund_status.wait_confirm,
     'system',
     sysdate);

  update fc_order_main t
     set t.refund_status = refund_status.wait_confirm,
         t.refund_time   = sysdate
   where t.order_no = l_order_no;

  update fc_order_bind t
     set t.refund_status     = refund_status.wait_confirm,
         t.refund_start_time = sysdate
   where t.order_no = l_order_no;

  commit;
  v_ret_msg := f_get_refund_result(l_refund_id, 100, 'OK');
exception
  when others then
    rollback;
    v_ret_msg := f_get_refund_result('', 200, '保存退款订单异常');
    sp_write_log('sp_recv_refund',
                 '保存退款订单异常:[' || v_down_order_no || '],' || sqlerrm);
end;
/

prompt
prompt Creating procedure SP_RECV_REFUND_OFFLINE
prompt =========================================
prompt
create or replace procedure qxfc.sp_recv_refund_offline(v_down_channel_no varchar2,
                                                   v_down_order_no   varchar2,
                                                   v_refund_fee      number, --退款金额
                                                   v_refund_from     varchar2, --出账帐号
                                                   v_refund_to       varchar2, --收款帐号
                                                   v_remark          varchar2, --备注
                                                   v_operator        varchar2,
                                                   v_ret_code        out number,
                                                   v_ret_msg         out varchar2) as
  /*
  功能:线下退款
  作者:jiyi
  时间:2018-04-09
  */
  l_cntr            number;
  l_order_no        varchar2(32);
  l_pay_fee         number;
  l_down_product_no varchar2(32);
  l_product_name    varchar2(32);
  l_pay_order_no    varchar2(64);
  l_buyer_nick      varchar2(32);
  l_refund_id       number;
  l_ret             boolean;
begin

  select count(1)
    into l_cntr
    from fc_order_refund t
   where t.down_channel_no = v_down_channel_no
     and t.down_order_no = v_down_order_no;

  if (l_cntr > 0) then
    v_ret_code := error_code.failure;
    v_ret_msg  := '已退款';
    return;
  end if;

  select min(t.order_no),
         min(t.pay_fee),
         min(t.down_product_no),
         min(t.product_name)
    into l_order_no, l_pay_fee, l_down_product_no, l_product_name
    from fc_order_main t
   where t.down_channel_no = v_down_channel_no
     and t.down_order_no = v_down_order_no;

  if (l_order_no is null) then
    v_ret_code := error_code.failure;
    v_ret_msg  := '订单不存在';
    return;
  end if;

  if (l_pay_fee < v_refund_fee) then
    v_ret_code := error_code.failure;
    v_ret_msg  := '退款金额不正确';
    return;
  end if;

  select t.pay_order_no, t.buyer_nick
    into l_pay_order_no, l_buyer_nick
    from fc_order_ext t
   where t.order_no = l_order_no;

  l_refund_id := seq_fcorderrefund_auto_id.nextval;

  insert into fc_order_refund
    (id,
     order_no,
     down_order_no,
     down_channel_no,
     down_product_no,
     product_name,
     buyer_nick,
     message,
     pay_order_no,
     refund_fee,
     from_account,
     to_account,
     refund_status,
     refund_type,
     created_user,
     confirm_user,
     created_time,
     finish_time)
  values
    (l_refund_id,
     l_order_no,
     v_down_order_no,
     v_down_channel_no,
     l_down_product_no,
     l_product_name,
     l_buyer_nick,
     v_remark,
     l_pay_order_no,
     v_refund_fee,
     v_refund_from,
     v_refund_to,
     refund_status.success,
     refund_type.offline,
     v_operator,
     v_operator,
     sysdate,
     sysdate);

  --添加下游资金变更
  l_ret := f_fund_change_down(v_down_channel_no,
                              v_down_order_no,
                              l_order_no,
                              v_refund_fee,
                              fund_change_type.refund,
                              l_order_no || '线下退款');

  if (not l_ret) then
    rollback;
    v_ret_code := error_code.failure;
    v_ret_msg  := '下游资金变更失败';
    return;
  end if;

  --更新订单表退款状态
  update fc_order_main t
     set t.refund_status = refund_status.success, t.refund_time = sysdate
   where t.order_no = l_order_no;

  update fc_order_bind t
     set t.refund_status     = refund_status.success,
         t.refund_start_time = sysdate,
         t.refund_end_time   = sysdate
   where t.order_no = l_order_no;

  commit;

  sp_add_operate_log(l_order_no,
                     '',
                     operate_type.manual,
                     '线下退款',
                     0,
                     '',
                     v_operator);
  v_ret_code := error_code.suc;
  v_ret_msg  := '线下退款成功';
exception
  when others then
    rollback;
    v_ret_code := error_code.failure;
    v_ret_msg  := sqlerrm;
    sp_write_log('sp_recv_refund_offline',
                 '保存退款订单异常:[' || v_down_order_no || '],' || sqlerrm);
end;
/

prompt
prompt Creating procedure SP_REFUND_CONFIRM
prompt ====================================
prompt
create or replace procedure qxfc.sp_refund_confirm(v_refund_ids varchar2,
                                              v_status     number,
                                              v_msg        varchar2,
                                              v_operator   varchar2,
                                              v_ret_code   out number,
                                              v_ret_msg    out varchar2) as
  /*
  功能:退款确认
  作者:jiyi
  时间:2018-04-24
  */
  l_id     number;
  l_status number;
begin

  if (v_status = process_status.success) then
    l_status := refund_status.wait;
  else
    l_status := refund_status.wait_confirm;
  end if;

  for d in (select t.id, t.order_no
              from fc_order_refund t
             where t.refund_status = refund_status.wait_confirm
               and t.tmall_refund_status = 'WAIT_SELLER_AGREE'
               and t.id in
                   (select * from table(f_split_str(v_refund_ids, ',')))) loop
    begin

      select t.id
        into l_id
        from fc_order_refund t
       where t.refund_status = refund_status.wait_confirm
         and t.id = d.id
         for update nowait;
    
      update fc_order_refund t
         set t.message       = v_msg || '|' || t.message,
             t.refund_status = l_status,
             t.confirm_user  = v_operator,
             t.edit_time     = sysdate
       where t.id = l_id;
    
      update fc_order_main t
         set t.refund_status = l_status
       where t.order_no = d.order_no;
    
      update fc_order_bind t
         set t.refund_status = l_status
       where t.order_no = d.order_no;
      commit;
    exception
      when others then
        rollback;
    end;
  end loop;

  v_ret_code := error_code.suc;
  v_ret_msg  := '批量退款确认成功';
end;
/

prompt
prompt Creating procedure SP_SCAN_DB
prompt =============================
prompt
create or replace procedure qxfc.sp_scan_db(v_scan_name      varchar2, --名称,
                                       v_robot_ip       varchar2, --机器人IP
                                       v_out_error_code out number, --100:成功;200:失败
                                       v_out_count      out number, --记录条数
                                       v_out_batch_id   out number,
                                       v_out_msg        out varchar2) as
  /*
  功能:后补扫描
  作者:jiyi
  时间:2016-05-30
  */
  l_frequency    number;
  l_once_count   number;
  l_do_frequency number;
  l_status       number;
begin
  v_out_count := 0;
  begin
    
    select t.scan_interval, t.once_count, t.do_interval, t.status
      into l_frequency, l_once_count, l_do_frequency, l_status
      from fc_scan_config t
     where t.scan_name = v_scan_name
       and t.next_exec_time <= sysdate
       for update nowait;

  exception
    when others then
      rollback;
      v_out_error_code := error_code.failure;
      v_out_msg        := '执行时间未到';
      return;
  end;

  if (l_status <> enable_status.enabled) then
    rollback;
    v_out_error_code := error_code.failure;
    v_out_msg        := v_scan_name || '后补被暂停';
    return;
  end if;

  if (v_scan_name = 'task') then
    --1.任务
    v_out_error_code := f_scan_task(l_do_frequency,
                                    l_once_count,
                                    v_out_batch_id,
                                    v_out_count);

  elsif (v_scan_name = 'notify') then
    --2.通知
    v_out_error_code := f_scan_notify(l_do_frequency,
                                      l_once_count,
                                      v_out_batch_id,
                                      v_out_count);
  elsif (v_scan_name = 'mail') then
    --3.生成快递单号
    v_out_error_code := f_scan_mail(l_do_frequency,
                                    l_once_count,
                                    v_out_batch_id,
                                    v_out_count);
  elsif (v_scan_name = 'delivery') then
    --4.平台发货
    v_out_error_code := f_scan_plat_delivery(l_do_frequency,
                                             l_once_count,
                                             v_out_batch_id,
                                             v_out_count);
  else
    --主动抛异常
    raise_application_error(-20001, '不存在的名称:' || v_scan_name);
  end if;

  update fc_scan_config t
     set t.last_exec_time = sysdate,
         t.next_exec_time = sysdate + t.scan_interval / 24 / 60 / 60,
         t.last_exec_ip   = v_robot_ip
   where t.scan_name = v_scan_name;

  if (v_out_error_code = error_code.suc) then
    v_out_msg := '操作成功';
  else
    v_out_msg := '无数据';
  end if;

  commit;
exception
  when others then
    rollback;
    sp_write_log('sp_scan_db', sqlerrm);
    v_out_error_code := error_code.failure;
    v_out_count      := 0;
end;
/

prompt
prompt Creating procedure SP_TASK_AUDIT_SAVE
prompt =====================================
prompt
create or replace procedure qxfc.sp_task_audit_save(v_task_id  number,
                                               v_status   number, --0:成功;90:失败
                                               v_remark   varchar2,
                                               v_operator varchar2,
                                               v_ret_code out number,
                                               v_ret_msg  out varchar2) as
  /*
  功能:任务审核保存
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

  select t.tid, t.order_no, t.bind_id, t.action
    into l_task_id, l_order_no, l_bind_id, l_action
    from fc_flow_task t
   where t.tid = v_task_id
     and t.manual_status = process_status.wait
     for update;

  update fc_flow_task t
     set t.task_status   = v_status,
         t.task_msg      = v_remark,
         t.task_end_time = sysdate;

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
                     '订单:' || l_order_no || ',' || l_action || '审核为:' ||
                     v_status,
                     v_task_id,
                     '',
                     v_operator);
exception
  when others then
    rollback;
    sp_write_log('sp_task_audit_save', sqlerrm);
    v_ret_code := error_code.failure;
    v_ret_msg  := '';
end;
/

prompt
prompt Creating procedure SP_TASK_GET
prompt ==============================
prompt
create or replace procedure qxfc.sp_task_get(v_task_id  number,
                                        v_robot_ip varchar2, --IP
                                        v_ret_code out number,
                                        v_ret_msg  out varchar2 --结果信息(json)
                                        ) as
  /*
  功能:获取发货信息
  作者:jiyi
  时间:2018-04-02
  */
  l_bind_id         number;
  l_order_no        varchar2(32);
  l_script_path     varchar2(64);
  l_up_channel_no   varchar2(32);
  l_up_product_no   varchar2(32);
  l_face            number;
  l_iccno           varchar2(32);
  l_phone_no        varchar2(32);
  l_down_channel_no varchar2(128);
  l_down_order_no   varchar2(128);
  l_script_id       number;
  l_up_product_id   number;
  l_down_product_id number;
  l_api_url         varchar2(128);
  l_account         varchar2(128);
  l_key             varchar2(512);
  l_notify_url      varchar2(128);
  l_product_type    number;
  l_package_id      number;
  l_real_name       varchar2(32);
  l_idno            varchar2(32);
  l_brand_no        varchar2(32);
  l_up_account_id   number;
  l_deposit         number;
  l_rent            number;
  l_carrier_no      varchar2(32);
  l_province_no     varchar2(32);
  l_city_no         varchar2(32);
  l_trial_day       number;
begin
  select t.order_no, t.bind_id
    into l_order_no, l_bind_id
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.wait
     for update nowait;

  --1.获取发货信息
  select t.face,
         t.up_channel_no,
         t.up_product_id,
         t.script_id,
         t.script_path,
         t.down_channel_no,
         t.down_order_no,
         t.product_type,
         t.package_id,
         t.up_account_id
    into l_face,
         l_up_channel_no,
         l_up_product_id,
         l_script_id,
         l_script_path,
         l_down_channel_no,
         l_down_order_no,
         l_product_type,
         l_package_id,
         l_up_account_id
    from fc_order_bind t
   where t.bind_id = l_bind_id;

  select t.active_phone,
         t.carrier_no,
         t.province_no,
         t.city_no,
         t.down_product_id,
         e.iccno,
         e.active_idno,
         e.active_real_name,
         e.brand_no
    into l_phone_no,
         l_carrier_no,
         l_province_no,
         l_city_no,
         l_down_product_id,
         l_iccno,
         l_idno,
         l_real_name,
         l_brand_no
    from fc_order_main t
   inner join fc_order_ext e
      on t.order_no = e.order_no
   where t.order_no = l_order_no;

  select t.trial_day
    into l_trial_day
    from fc_down_product t
   where t.pid = l_down_product_id;

  select t.product_no
    into l_up_product_no
    from fc_up_product t
   where t.pid = l_up_product_id;

  select t.predeposit, t.month_rent
    into l_deposit, l_rent
    from fc_product_package t
   where t.pkg_id = l_package_id;

  --2.获取账户信息
  select t.account_no, t.account_pwd
    into l_account, l_key
    from fc_up_account t
   where t.id = l_up_account_id;

  select t.notify_url
    into l_notify_url
    from fc_up_channel t
   where t.channel_no = l_up_channel_no;

  --3.获取接口信息
  select t.up_url
    into l_api_url
    from fc_up_script t
   where t.sid = l_script_id;

  v_ret_msg := f_json_add(v_ret_msg, 'bind_id', l_bind_id);
  v_ret_msg := f_json_add(v_ret_msg, 'order_no', l_order_no);
  v_ret_msg := f_json_add(v_ret_msg, 'script_path', l_script_path);
  v_ret_msg := f_json_add(v_ret_msg, 'api_url', l_api_url);
  v_ret_msg := f_json_add(v_ret_msg, 'up_channel_no', l_up_channel_no);
  v_ret_msg := f_json_add(v_ret_msg, 'product_no', l_up_product_no);
  v_ret_msg := f_json_add(v_ret_msg, 'face', l_face);
  v_ret_msg := f_json_add(v_ret_msg, 'iccno', l_iccno);
  v_ret_msg := f_json_add(v_ret_msg, 'phone', l_phone_no);
  v_ret_msg := f_json_add(v_ret_msg, 'real_name', l_real_name);
  v_ret_msg := f_json_add(v_ret_msg, 'idno', l_idno);
  v_ret_msg := f_json_add(v_ret_msg, 'brand_no', l_brand_no);
  v_ret_msg := f_json_add(v_ret_msg, 'product_type', l_product_type);
  v_ret_msg := f_json_add(v_ret_msg, 'predeposit', l_deposit);
  v_ret_msg := f_json_add(v_ret_msg, 'month_rent', l_rent);
  v_ret_msg := f_json_add(v_ret_msg, 'trial_day', l_trial_day);
  v_ret_msg := f_json_add(v_ret_msg, 'carrier_no', l_carrier_no);
  v_ret_msg := f_json_add(v_ret_msg, 'province_no', l_province_no);
  v_ret_msg := f_json_add(v_ret_msg, 'city_no', l_city_no);
  v_ret_msg := f_json_add(v_ret_msg, 'channel_user', l_account);
  v_ret_msg := f_json_add(v_ret_msg, 'channel_key', l_key);
  v_ret_msg := f_json_add(v_ret_msg, 'down_channel_no', l_down_channel_no);
  v_ret_msg := f_json_add(v_ret_msg, 'down_order_no', l_down_order_no);
  v_ret_msg := '{' || f_json_add(v_ret_msg, 'notify_url', l_notify_url) || '}';

  --更新任务信息
  update fc_flow_task t
     set t.task_status = process_status.process, t.ip = v_robot_ip
   where t.tid = v_task_id;

  commit;

  v_ret_code := error_code.suc;
  sp_add_operate_log(l_order_no,
                     l_bind_id,
                     operate_type.manual,
                     '发货',
                     v_task_id,
                     v_robot_ip);
exception
  when others then
    rollback;
    sp_write_log('sp_delivery_get', sqlerrm);
    v_ret_code := error_code.failure;
    v_ret_msg  := '';
end;
/

prompt
prompt Creating procedure SP_TASK_RETRY
prompt ================================
prompt
create or replace procedure qxfc.sp_task_retry(v_task_id  number,
                                          v_operator varchar2,
                                          v_ret_code out number,
                                          v_ret_msg  out varchar2) as
  /*
  功能:任务重试
  作者:jiyi
  时间:2018-05-03
  */
  l_task_id  number;
  l_order_no varchar2(32);
  l_action   varchar2(32);
begin
  select t.tid, t.order_no, t.action
    into l_task_id, l_order_no, l_action
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.failure
     for update;

  update fc_flow_task t
     set t.task_status = process_status.wait, t.next_time = sysdate
   where t.task_status = process_status.failure;

  if (l_action = action_type.print_express) then
    update fc_order_express t
       set t.express_status = express_status.wait_print
     where t.order_no = l_order_no
       and t.taskid = l_task_id;
  end if;

  if (l_action = action_type.plat_delivery) then
    update fc_order_express t
       set t.express_status = express_status.wait_plat_delivery
     where t.order_no = l_order_no
       and t.taskid = l_task_id;
  end if;

  commit;
  sp_add_operate_log(l_order_no,
                     '',
                     operate_type.manual,
                     '订单:' || l_order_no || ',' || l_action || '重试',
                     v_task_id,
                     '',
                     v_operator);
  v_ret_code := error_code.suc;
  v_ret_msg  := 'OK';
exception
  when others then
    rollback;
    sp_write_log('sp_task_retry', v_task_id || '重试失败:' || sqlerrm);
    v_ret_code := error_code.failure;
    v_ret_msg  := sqlerrm;
end;
/

prompt
prompt Creating procedure SP_TASK_UPDATE
prompt =================================
prompt
create or replace procedure qxfc.sp_task_update(v_task_id number,
                                           v_transeq varchar2,
                                           v_msg     varchar2,
                                           v_ret_msg out varchar2) as
  /*
  功能:任务更新
  作者:jiyi
  时间:2018-04-12
  */
  l_task_id  number;
  l_order_no varchar2(32);
begin
  select t.tid, t.order_no
    into l_task_id, l_order_no
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.process
     for update;

  update fc_flow_task t
     set t.uptranseq = v_transeq, t.task_msg = v_msg
   where t.tid = l_task_id;

  commit;
  v_ret_msg := f_get_task_result(l_order_no,
                                 error_code.suc,
                                 'OK',
                                 v_task_id);
exception
  when others then
    rollback;
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.failure,
                                   sqlerrm,
                                   v_task_id);
    sp_write_log('sp_task_update',
                 '更新任务异常:[' || v_task_id || ',' || v_transeq || ',' ||
                 v_msg || ']');
end;
/

prompt
prompt Creating procedure SP_WRITE_CARD_GET
prompt ====================================
prompt
create or replace procedure qxfc.sp_write_card_get(v_task_id  varchar2, --任务编号
                                              v_robot_ip varchar2, --IP
                                              v_ret_code out number,
                                              v_ret_msg  out varchar2 --结果信息(json)
                                              ) as
  /*
  功能:获取写卡发货信息
  作者:jiyi
  时间:2018-04-02
  */
  l_bind_id            number;
  l_order_no           varchar2(32);
  l_script_path        varchar2(64);
  l_up_channel_no      varchar2(32);
  l_up_product_no      varchar2(32);
  l_face               number;
  l_icc_type           number;
  l_iccno              varchar2(32);
  l_phone_no           varchar2(32);
  l_down_channel_no    varchar2(128);
  l_down_order_no      varchar2(128);
  l_script_id          number;
  l_up_product_id      number;
  l_down_product_id    number;
  l_api_url            varchar2(128);
  l_account            varchar2(128);
  l_key                varchar2(512);
  l_notify_url         varchar2(128);
  l_product_type       number;
  l_package_id         number;
  l_real_name          varchar2(32);
  l_idno               varchar2(32);
  l_brand_no           varchar2(32);
  l_deposit            number;
  l_rent               number;
  l_carrier_no         varchar2(32);
  l_province_no        varchar2(32);
  l_city_no            varchar2(32);
  l_trial_day          number;
  l_write_card_mode    number;
  l_recv_phone         varchar2(32);
  l_recv_address       varchar2(128);
  l_recv_province      varchar2(32);
  l_recv_city          varchar2(32);
  l_recv_province_name varchar2(32);
  l_recv_city_name     varchar2(32);
  l_belong_city        varchar2(32);
  l_belong_province    varchar2(32);
  l_remark             varchar2(256);
  l_acct_id            number;
  l_ret                boolean;

begin
  select t.order_no,
         t.bind_id,
         t.down_price,
         t.up_channel_no,
         t.up_product_id,
         t.script_id,
         t.script_path
    into l_order_no,
         l_bind_id,
         l_face,
         l_up_channel_no,
         l_up_product_id,
         l_script_id,
         l_script_path
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.wait
     for update nowait;

  --1.获取发货信息
  select t.face,
         t.down_channel_no,
         t.down_order_no,
         t.product_type,
         t.package_id,
         t.active_phone,
         t.carrier_no,
         t.province_no,
         t.city_no,
         t.down_product_id,
         e.iccno,
         e.active_idno,
         e.active_real_name,
         e.brand_no,
         e.write_card,
         e.buyer_phone,
         e.buyer_address,
         e.buyer_province,
         e.buyer_city
    into l_face,
         l_down_channel_no,
         l_down_order_no,
         l_product_type,
         l_package_id,
         l_phone_no,
         l_carrier_no,
         l_province_no,
         l_city_no,
         l_down_product_id,
         l_iccno,
         l_idno,
         l_real_name,
         l_brand_no,
         l_write_card_mode,
         l_recv_phone,
         l_recv_address,
         l_recv_province,
         l_recv_city
    from fc_order_main t
   inner join fc_order_ext e
      on t.order_no = e.order_no
   where t.order_no = l_order_no;

  select t.trial_day, t.icc_type
    into l_trial_day, l_icc_type
    from fc_down_product t
   where t.pid = l_down_product_id;

  select t.product_no, t.remark
    into l_up_product_no, l_remark
    from fc_up_product t
   where t.pid = l_up_product_id;

  select t.predeposit, t.month_rent
    into l_deposit, l_rent
    from fc_product_package t
   where t.pkg_id = l_package_id;

  select t.city_name into l_recv_city_name from fc_system_city t where t.city_no = l_recv_city;

  select t.province_name
    into l_recv_province_name
    from fc_system_province t
   where t.province_no = l_recv_province;

  select t.city_name into l_belong_city from fc_system_city t where t.city_no = l_city_no;

  select t.province_name
    into l_belong_province
    from fc_system_province t
   where t.province_no = l_province_no;

  --2.获取账户信息
  l_ret := f_get_up_account(v_task_id, l_order_no, l_acct_id, l_account, l_key);
  if (not l_ret) then
    v_ret_code := error_code.failure;
    v_ret_msg  := '获取上游帐号错误';
    return;
  end if;

  select t.notify_url into l_notify_url from fc_up_channel t where t.channel_no = l_up_channel_no;

  --3.获取接口信息
  select t.up_url into l_api_url from fc_up_script t where t.sid = l_script_id;

  v_ret_msg := f_json_add(v_ret_msg, 'taskid', v_task_id);
  v_ret_msg := f_json_add(v_ret_msg, 'bind_id', l_bind_id);
  v_ret_msg := f_json_add(v_ret_msg, 'order_no', l_order_no);
  v_ret_msg := f_json_add(v_ret_msg, 'script_path', l_script_path);
  v_ret_msg := f_json_add(v_ret_msg, 'api_url', l_api_url);
  v_ret_msg := f_json_add(v_ret_msg, 'up_channel_no', l_up_channel_no);
  v_ret_msg := f_json_add(v_ret_msg, 'product_no', l_up_product_no);
  v_ret_msg := f_json_add(v_ret_msg, 'face', l_face);
  v_ret_msg := f_json_add(v_ret_msg, 'iccno', l_iccno);
  v_ret_msg := f_json_add(v_ret_msg, 'phone', l_phone_no);
  v_ret_msg := f_json_add(v_ret_msg, 'real_name', l_real_name);
  v_ret_msg := f_json_add(v_ret_msg, 'icc_type', l_icc_type);
  v_ret_msg := f_json_add(v_ret_msg, 'idno', l_idno);
  v_ret_msg := f_json_add(v_ret_msg, 'brand_no', l_brand_no);
  v_ret_msg := f_json_add(v_ret_msg, 'product_type', l_product_type);
  v_ret_msg := f_json_add(v_ret_msg, 'predeposit', l_deposit);
  v_ret_msg := f_json_add(v_ret_msg, 'month_rent', l_rent);
  v_ret_msg := f_json_add(v_ret_msg, 'trial_day', l_trial_day);
  v_ret_msg := f_json_add(v_ret_msg, 'carrier_no', l_carrier_no);
  v_ret_msg := f_json_add(v_ret_msg, 'province_no', l_province_no);
  v_ret_msg := f_json_add(v_ret_msg, 'city_no', l_city_no);
  v_ret_msg := f_json_add(v_ret_msg, 'province_name', l_belong_province);
  v_ret_msg := f_json_add(v_ret_msg, 'city_name', l_belong_city);
  v_ret_msg := f_json_add(v_ret_msg, 'recv_phone', l_recv_phone);
  v_ret_msg := f_json_add(v_ret_msg, 'recv_address', l_recv_address);
  v_ret_msg := f_json_add(v_ret_msg, 'recv_province', l_recv_province_name);
  v_ret_msg := f_json_add(v_ret_msg, 'recv_city', l_recv_city_name);
  v_ret_msg := f_json_add(v_ret_msg, 'acct_id', l_acct_id);
  v_ret_msg := f_json_add(v_ret_msg, 'channel_user', l_account);
  v_ret_msg := f_json_add(v_ret_msg, 'channel_key', l_key);
  v_ret_msg := f_json_add(v_ret_msg, 'down_channel_no', l_down_channel_no);
  v_ret_msg := f_json_add(v_ret_msg, 'down_order_no', l_down_order_no);
  v_ret_msg := f_json_add(v_ret_msg, 'write_card_mode', l_write_card_mode);
  v_ret_msg := f_json_add(v_ret_msg, 'remark', l_remark);
  v_ret_msg := '{' || f_json_add(v_ret_msg, 'notify_url', l_notify_url) || '}';

  --更新任务信息
  update fc_flow_task t
     set t.task_status = process_status.process, t.ip = v_robot_ip
   where t.tid = v_task_id;

  commit;
  v_ret_code := error_code.suc;
  sp_add_operate_log(l_order_no, l_bind_id, operate_type.system, '写卡', v_task_id, v_robot_ip);
exception
  when others then
    rollback;
    sp_write_log('sp_write_card_get', sqlerrm);
    v_ret_code := error_code.failure;
    v_ret_msg  := '';
end;
/

prompt
prompt Creating procedure SP_WRITE_CARD_SAVE
prompt =====================================
prompt
create or replace procedure qxfc.sp_write_card_save(v_task_id  varchar2,
                                               v_status   number,
                                               v_up_seq   varchar2,
                                               v_msg      varchar2,
                                               v_newphone varchar2 default '',
                                               v_ret_msg  out varchar2) as
  /*
  功能:写号卡保存
  作者:jiyi
  时间:2018-04-08
  */
  l_task_id       number;
  l_order_no      varchar2(32);
  l_bind_id       varchar2(32);
  l_flow_id       number;
  l_action        varchar2(32);
  l_ret           boolean;
  l_msg           varchar2(128);
  l_ret_task_id   number;
  l_script_path   varchar2(64);
  l_svc_bus       varchar2(32);
  l_up_product_id number;
  l_up_channel_no varchar2(32);
  l_cost          number;
  l_debit_mode    number;
begin

  select t.tid,
         t.flow_id,
         t.action,
         t.order_no,
         t.bind_id,
         t.up_product_id,
         t.up_channel_no
    into l_task_id,
         l_flow_id,
         l_action,
         l_order_no,
         l_bind_id,
         l_up_product_id,
         l_up_channel_no
    from fc_flow_task t
   where t.tid = v_task_id
     and t.task_status = process_status.process
     for update;

  select t.debit_mode, t.cost
    into l_debit_mode, l_cost
    from fc_up_product t
   where t.pid = l_up_product_id;

  --更新新的手机号
  if (v_newphone is not null and length(v_newphone) > 0) then
    update fc_order_main t
       set t.active_phone = v_newphone
     where t.order_no = l_order_no;
  end if;

  --更新任务信息
  update fc_flow_task t
     set t.task_status   = v_status,
         t.manual_status = decode(v_status,
                                  process_status.success,
                                  process_status.no_need,
                                  process_status.wait),
         t.uptranseq     = v_up_seq,
         t.task_msg      = v_msg,
         t.task_end_time = sysdate
   where t.tid = l_task_id;

  if (v_status = process_status.failure) then
    commit;
    sp_warn_insert(warn_keywords.task_exception,
                   l_order_no || '写卡异常:' || v_msg || ',请人工处理');
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.failure,
                                   '任务进入人工审核');
    return;
  end if;

  --添加资金变更
  if (v_status = process_status.success and
     l_debit_mode = debit_mode.immediate) then
    l_ret := f_fund_change_up(l_up_channel_no,
                              l_order_no,
                              l_task_id,
                              fund_change_type.reduce,
                              l_cost,
                              l_order_no || '订单扣款');
    if (not l_ret) then
      rollback;
      v_ret_msg := f_get_task_result(l_order_no,
                                     error_code.failure,
                                     '添加上游资金变更失败');
      return;
    end if;
  end if;

  --处理流程
  l_ret := f_execute_next_step(l_flow_id,
                               l_action,
                               l_order_no,
                               l_bind_id,
                               v_status,
                               v_msg,
                               l_ret_task_id,
                               l_msg,
                               l_script_path,
                               l_svc_bus);
  if (l_ret) then
    commit;
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.suc,
                                   l_msg,
                                   l_ret_task_id,
                                   l_script_path,
                                   l_svc_bus);
  else
    rollback;
    l_ret := f_update_task_msg(l_order_no,
                               l_task_id,
                               l_msg,
                               process_status.wait);
    commit;
    v_ret_msg := f_get_task_result(l_order_no, error_code.failure, l_msg);
  end if;
exception
  when others then
    rollback;
    sp_write_log('sp_write_card_save', '[' || v_task_id || ']' || sqlerrm);
    v_ret_msg := f_get_task_result(l_order_no, error_code.failure, sqlerrm);
end;
/

prompt
prompt Creating procedure ST_SP_REMOVE_COMPLAINTS
prompt ==========================================
prompt
create or replace procedure qxfc.st_sp_remove_complaints(v_id       in varchar2,
                                                    v_out_error_code out number

                                                    ) as
  /********************************
  作者：guowei
  时间：2019/7/9
  描述：投诉表移库操作
  ********************************/
  l_msg     varchar2(2000);
  l_cntr    number;
begin

  insert into ST_Down_Complaints

    select *
      from ST_Down_Complaints_hs t
     where t.id = v_id;


  delete from ST_Down_Complaints_hs t where t.id = v_id;

  commit;
  v_out_error_code := 100;
exception
  when others then
    l_msg            := sqlerrm;
    v_out_error_code := 200;
    rollback;
end;
/

prompt
prompt Creating procedure TEST
prompt =======================
prompt
create or replace procedure qxfc.Test(v_1 out number,
                                 v_2 out number,
                                 v_3 out number) is

begin
  v_1 := 1;
  v_2 := 2;
  v_3 := 3;
end Test;
/


prompt Done
spool off
set define on
