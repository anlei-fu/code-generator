Creating procedure SP_SYSTEM_LOG_ADD
prompt ====================================
prompt
create or replace procedure dm_system.sp_system_log_add(v_object_name in varchar2,
                                              v_error_level in number,
                                              v_error_desc  in varchar2) as
  pragma autonomous_transaction; --自治事务
begin
  insert into dm_system_log
    (log_id, object_name, error_level, error_desc, trace_info, create_time)
  values
    (seq_operate_log_id.nextval,
     substr(v_object_name, 1, 255),
     v_error_level,
     substr(v_error_desc, 1, 255),
     substr(dbms_utility.format_error_backtrace, 1, 1024),
     sysdate);
  commit;
exception
  when others then
    rollback;
end;
/

prompt
prompt Creating procedure AUTO_SCAN_TO_CLOSE
prompt =====================================
prompt
create or replace procedure dm_system.auto_scan_to_close as
  -----------------------------------------------------------------------
  -- 功能: 扫描并关闭绑定/订单
  -- 创建人: zhusm 2019-08-08
  -----------------------------------------------------------------------
  l_ret_msg varchar2(128);

begin
  -- 关闭绑定
  for r in (select t.bind_id, t.order_no
              from dm_order_bind t
             where t.bind_status = deal_status.waiting
               and t.close_time <= sysdate) loop
    
    update dm_order_bind t
       set t.bind_status = deal_status.failed,
           t.result_msg  = '长时间未发货',
           t.finish_time = sysdate
     where t.bind_id = r.bind_id;

    update dm_order_main t
       set t.order_status = deal_status.failed,
           t.result_msg   = '长时间未发货',
           t.error_code   = error_code.failed,
           t.error_desc   = '办理失败',
           t.finish_time  = sysdate
     where t.order_no = t.order_no
       and t.order_status = deal_status.processing;

    commit;
  end loop;

  -- 关闭订单
  for r in (select t.order_no
              from dm_order_main t
             where t.order_status = deal_status.waiting
               and t.close_time <= sysdate) loop

    if (f_bind_faild(r.order_no, '长时间未绑定', l_ret_msg)) then
      commit;
    else
      rollback;
    end if;
  end loop;
exception
  when others then
    rollback;
    sp_system_log_add('auto_scan_to_close', 1, '过程异常: ' || sqlerrm);
end;
/

prompt
prompt Creating procedure AUTO_SCAN_TO_MANUAL
prompt ======================================
prompt
create or replace procedure dm_system.auto_scan_to_manual as
  -----------------------------------------------------------------------
  -- 功能: 扫描绑定进入人工审核
  -- 创建人: zhusm 2019-08-08
  -----------------------------------------------------------------------
  l_minute number := 5;

begin
  -- 获取处理中记录(暂定15分钟无结果记录)
  for r in (select t.bind_id, t.order_no
              from dm_order_bind t
             where t.bind_status = deal_status.processing
               and t.manual_status = deal_status.noneed
               and t.create_time < sysdate - l_minute / 24 / 60) loop
    -- 更改状态
    update dm_order_bind t set t.manual_status = deal_status.waiting where t.bind_id = r.bind_id;
    update dm_order_main t set t.manual_status = deal_status.waiting where t.order_no = r.order_no;
    commit;
  end loop;


exception
  when others then
    rollback;
    sp_system_log_add('auto_scan_to_manual', 1, '过程异常: ' || sqlerrm);
end;
/

prompt
prompt Creating procedure SP_QUERY_CREATE
prompt ==================================
prompt
create or replace procedure dm_system.sp_query_create(v_bind_id  in varchar2, -- 订单号
                                            v_out_code out number,
                                            v_out_msg  out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 创建查询
  -- 创建人: zhusm 2019-05-25
  -----------------------------------------------------------------------
  l_order_no      varchar2(32);
  l_channel_no    varchar2(32);
  l_busi_type     number;
  l_support_query number;
  l_query_delay   number;
  l_query_max     number;
  l_count         number;
  l_script_id     number;
  l_service_code  varchar2(64);

begin

  -- 检查参数
  if (v_bind_id is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传参数为空';
    return;
  end if;

  -- 获取上游渠道
  begin
    select t.order_no, t.up_channel_no, t.business_type
      into l_order_no, l_channel_no, l_busi_type
      from dm_order_bind t
     where t.bind_id = v_bind_id
       and t.bind_status = deal_status.processing
       for update nowait;

  exception
    when others then
      rollback;
      v_out_code := error_code.failed;
      v_out_msg  := '记录不存在';
      return;
  end;

  -- 检查是否支持查询
  select t.support_query, t.query_delay, t.query_max_times
    into l_support_query, l_query_delay, l_query_max
    from dm_up_channel t
   where t.channel_no = l_channel_no;

  if (l_support_query <> enable_status.enabled) then
    rollback;
    v_out_code := error_code.failed;
    v_out_msg  := '渠道不支持查询';
    return;
  end if;

  -- 检查查询记录
  select count(1)
    into l_count
    from dm_order_query t
   where t.bind_id = v_bind_id;

  if (l_count > 0) then
    rollback;
    v_out_code := error_code.failed;
    v_out_msg  := '查询已创建';
    return;
  end if;

  -- 获取查询配置
  select t.script_id, t.service_code
    into l_script_id, l_service_code
    from dm_up_script t
   where t.channel_no = l_channel_no
     and (t.business_type = l_busi_type or
         t.business_type = business_type.all_type)
     and t.script_type = script_type.order_query
     and t.status = enable_status.enabled;

  -- 创建记录
  insert into dm_order_query
    (bind_id, order_no, script_id, service_code, next_time, max_times)
  values
    (v_bind_id,
     l_order_no,
     l_script_id,
     l_service_code,
     sysdate + l_query_delay / 24 / 60 / 60,
     l_query_max);
  commit;

  v_out_code := error_code.success;
  v_out_msg  := '操作成功';

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := sqlerrm;
    sp_system_log_add('sp_query_create', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure AUTO_SCAN_TO_QUERY_TMP
prompt =========================================
prompt
create or replace procedure dm_system.auto_scan_to_query_tmp as
  l_ret_code number;
  l_ret_msg  varchar2(256);
begin
  for r in (select *
              from dm_order_bind t1
             where t1.up_channel_no = 'UC1002'
               and t1.bind_id = '1909061824241589'
               and t1.bind_status = deal_status.processing
               and not exists (select null from dm_order_query t2 where t2.bind_id = t1.bind_id)
               and rownum <= 50) loop
    null;
    sp_query_create(r.bind_id, l_ret_code, l_ret_msg);
  end loop;

exception
  when others then
    rollback;
    sp_system_log_add('auto_scan_to_query_tmp', 1, sqlerrm);
end;
/

prompt
prompt Creating procedure SP_BACKUP_SCAN
prompt =================================
prompt
create or replace procedure dm_system.sp_backup_scan(v_backup_name  in varchar2,
                                           v_robot_ip     in varchar2,
                                           v_out_code     out number,
                                           v_out_msg      out varchar2,
                                           v_out_count    out number,
                                           v_out_batch_no out number) as
  -----------------------------------------------------------------------
  -- 功能: 后补扫描
  -- 创建: zhusm 2019/9/29 11:05:17
  -----------------------------------------------------------------------
  l_record_id   number;
  l_backup_name varchar2(64);
  l_scan_intvl  number;
  l_scan_max    number;
  l_next_intvl  number;
  l_status      number;

begin

  -- 获取配置
  begin
    select t.record_id,
           lower(t.backup_name),
           t.scan_interval,
           t.scan_max,
           t.next_interval,
           t.status
      into l_record_id,
           l_backup_name,
           l_scan_intvl,
           l_scan_max,
           l_next_intvl,
           l_status
      from dm_backup_config t
     where t.backup_name = v_backup_name
       and t.next_exec <= sysdate
       for update nowait;

  exception
    when others then
      rollback;
      v_out_code := error_code.failed;
      v_out_msg  := '后补时间未到';
      return;
  end;

  if (l_status <> enable_status.enabled) then
    rollback;
    v_out_code := error_code.failed;
    v_out_msg  := '后补未启用';
    return;
  end if;

  -- 分类扫描后补
  if (l_backup_name = 'bind') then
    v_out_code := f_backup_bind(l_next_intvl,
                                l_scan_max,
                                v_out_count,
                                v_out_batch_no,
                                v_out_msg);
  else
    raise_application_error(-1, '后补不存在:' || l_backup_name);
  end if;

  -- 更新状态
  update dm_backup_config t
     set t.last_exec = sysdate,
         t.next_exec = sysdate + t.scan_interval / 24 / 60 / 60,
         t.robot_ip  = v_robot_ip
   where t.record_id = l_record_id;
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常:' || sqlerrm;
    sp_system_log_add('sp_backup_scan', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_BIND_CREATE
prompt =================================
prompt
create or replace procedure dm_system.sp_bind_create(v_order_no in varchar2, -- 订单号
                                           v_out_code out number,
                                           v_out_msg  out varchar2,
                                           v_out_json out varchar2) -- 发货队列参数: {"que_name":"","bind_id":"","script_path":""}
 as
  -----------------------------------------------------------------------
  -- 功能: 绑定上游渠道(创建绑定记录)
  -- 创建人: zhusm 2019-05-25
  -----------------------------------------------------------------------
  l_term_no     varchar2(32);
  l_term_prd_no varchar2(32);
  l_phone_no    varchar2(16);
  l_face_fee    number;
  l_busi_type   number;
  l_carrier_no  varchar2(5);
  l_province_no varchar2(5);
  l_city_no     varchar2(5);
  l_bind_times  number;

  l_up_chnnl_no   varchar2(32);
  l_up_prd_no     varchar2(32);
  l_up_price      number(15, 3);
  l_need_delivery number;
  l_need_vcode    number;
  l_picture_mode  number;
  l_fn_msg        varchar2(128);

  l_term_price   number;
  l_script_id    number;
  l_script_path  varchar2(128);
  l_service_code varchar2(64);
  l_bind_id      varchar2(32);

  l_temp varchar2(256) := '';

begin

  -- 锁订单
  select t.term_no,
         t.product_no,
         t.phone_no,
         t.order_face,
         t.business_type,
         t.carrier_no,
         t.province_no,
         t.city_no,
         t.bind_times
    into l_term_no,
         l_term_prd_no,
         l_phone_no,
         l_face_fee,
         l_busi_type,
         l_carrier_no,
         l_province_no,
         l_city_no,
         l_bind_times
    from dm_order_main t
   where t.order_no = v_order_no
     and t.order_status = deal_status.waiting
     for update nowait;

  if (l_bind_times > 5) then
    rollback;
    v_out_code := error_code.failed;
    v_out_msg  := '绑定次数达限';
    return;
  end if;

  -- 绑定上游产品 get up-product parameters
  if (not f_bind_up_product(l_term_prd_no,
                            l_busi_type,
                            l_face_fee,
                            l_carrier_no,
                            l_province_no,
                            l_city_no,
                            l_up_chnnl_no,
                            l_up_prd_no,
                            l_up_price,
                            l_need_delivery,
                            l_need_vcode,
                            l_picture_mode,
                            l_fn_msg)) then
    rollback;
    v_out_code := error_code.failed;
    v_out_msg  := l_fn_msg;
    return;
  end if;

  -- 获取参数
  select t.pay_price
    into l_term_price
    from dm_term_product t
   where t.product_no = l_term_prd_no;

  if (l_need_delivery = enable_status.enabled) then
    begin
    
      select t.script_id, t.script_path, t.service_code
        into l_script_id, `h, l_service_code
        from dm_up_script t
       where t.channel_no = l_up_chnnl_no
         and t.status = enable_status.enabled
         and (t.business_type = l_busi_type or
             t.business_type = business_type.all_type)
         and t.script_type = case
               when l_need_vcode = enable_status.enabled then
                script_type.vcode_submit -- 验证码订单
               else
                case
                  when l_busi_type = business_type.video_vip then
                   script_type.video_submit -- 视频会员
                  else
                   script_type.order_submit -- 普通订单
                end
             end;

    exception
      when others then
        rollback;
        v_out_code := error_code.failed;
        v_out_msg  := '上游脚本未配置';
        return;
    end;
  end if;

  -- 创建记录 create bind record
  l_bind_id := f_bind_id_create();
  insert into dm_order_bind
    (bind_id,
     order_no,
     term_no,
     term_product_no,
     term_price,
     phone_no,
     business_type,
     carrier_no,
     province_no,
     city_no,
     up_channel_no,
     up_product_no,
     up_price,
     bind_status,
     manual_status,
     script_id,
     service_code,
     picture_mode)
  values
    (l_bind_id,
     v_order_no,
     l_term_no,
     l_term_prd_no,
     l_term_price,
     l_phone_no,
     l_busi_type,
     l_carrier_no,
     l_province_no,
     l_city_no,
     l_up_chnnl_no,
     l_up_prd_no,
     l_up_price,
     decode(l_need_delivery,
            enable_status.enabled,
            deal_status.waiting,
            deal_status.processing),
     decode(l_need_delivery,
            enable_status.enabled,
            deal_status.noneed,
            deal_status.waiting),
     l_script_id,
     l_service_code,
     l_picture_mode);

  -- change main order status
  update dm_order_main t
     set t.order_status  = deal_status.processing,
         t.manual_status = case
                             when l_need_delivery = enable_status.disabled then
                              deal_status.waiting
                             else
                              t.manual_status
                           end,
         t.bind_times    = nvl(t.bind_times, 0) + 1
   where t.order_no = v_order_no;
  
  -- 构造JSON
  if (l_need_delivery = enable_status.enabled) then
    l_temp     := f_json_add(l_temp, 'que_name', l_service_code);
    l_temp     := f_json_add(l_temp, 'bind_id', l_bind_id);
    l_temp     := f_json_add(l_temp, 'script_path', l_script_path);
    v_out_json := '{' || l_temp || '}';
  end if;

  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常: ' || sqlerrm;
    sp_system_log_add('sp_bind_create', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_OPERATE_LOG_ADD
prompt =====================================
prompt
create or replace procedure dm_system.sp_operate_log_add(v_user_id     in varchar2, -- 用户编号
                                               v_serial_nos  in varchar2, -- 流水号或主键ID(|分割), 可以是order_no/bind_id/product_id/record_id)
                                               v_operate_log in varchar2, -- 操作日志
                                               v_out_code    out number,
                                               v_out_msg     out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 添加操作日志
  -- 创建人: ldp 2019-05-15
  -----------------------------------------------------------------------
  l_oper_bat_no number; -- 操作批次

begin

  -- 检查参数
  if (v_user_id is null or v_serial_nos is null or v_operate_log is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传参数为空';
    return;
  end if;
 
  l_oper_bat_no := seq_operate_batch_no.nextval;
 
  -- 保存操作日志
  insert into dm_operate_log
    (record_id, user_id, batch_no, operate_log)
  values
    (seq_operate_log_id.nextval,
     v_user_id,
     l_oper_bat_no,
     substr(v_operate_log, 1, 256));
 
  -- 保存流水号
  for r in (select *
              from table(f_string_split(v_serial_nos, '|'))) loop
  
    insert into dm_operate_detail
      (record_id, batch_no, serial_no)
    values
      (seq_operate_detail_id.nextval, l_oper_bat_no, r.column_value);
  end loop;

  commit;

  v_out_code := error_code.success;
  v_out_msg  := '操作成功';

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := sqlerrm;
    sp_system_log_add('sp_operate_log_add', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_BIND_RETRY1
prompt =================================
prompt
create or replace procedure dm_system.sp_bind_retry1(v_bind_id  varchar2, -- 绑定编号
                                           v_out_code out number,
                                           v_out_msg  out varchar2,
                                           v_out_json out varchar2) -- 返回JSON: {"order_no":"","need_pay":""}
 as
  -----------------------------------------------------------------------
  -- 功能: 绑定重试(重新提交照片)
  -- 创建: zhusm 2019-10-01
  -----------------------------------------------------------------------
  l_order_no      varchar2(64);
  l_up_chnnl_no   varchar2(32);
  l_up_prd_no     varchar2(32);
  l_service_code  varchar2(64);
  l_robot_ip      varchar2(16);
  l_result_msg    varchar2(256);
  l_delivery_time date;
  l_bind_times    number;
  l_need_delivery number;
  l_script_id     number;
  l_script_path   varchar2(128);

  l_bind_max number := 5;
  l_ret_code number;
  l_ret_msg  varchar2(32);
  RETRY_FAIL exception;

  l_temp varchar2(2000) := '';

begin
  -- 准备参数
  select t.order_no,
         t.up_channel_no,
         t.up_product_no,
         t.service_code,
         t.robot_ip,
         t.result_msg,
         t.delivery_start_time
    into l_order_no,
         l_up_chnnl_no,
         l_up_prd_no,
         l_service_code,
         l_robot_ip,
         l_result_msg,
         l_delivery_time
    from dm_order_bind t
   where t.bind_id = v_bind_id
     and t.bind_status <> deal_status.succeed
     for update;

  -- 检查重试次数
  select t.bind_times
    into l_bind_times
    from dm_order_main t
   where t.order_no = l_order_no;
  if (l_bind_times >= l_bind_max) then
    l_ret_msg := '重试次数达限';
    raise RETRY_FAIL;
  end if;

  -- 获取上游参数
  begin
    select t.script_id, t.script_path
      into l_script_id, l_script_path
      from dm_up_script t
     where t.channel_no = l_up_chnnl_no
       and t.script_type = script_type.picture_retry
       and t.status = enable_status.enabled;
  exception
    when others then
      l_ret_msg := '重提照片脚本未配置';
      raise RETRY_FAIL;
  end;

  select t.need_delivery
    into l_need_delivery
    from dm_up_product t
   where t.product_no = l_up_prd_no;

  -- 更新绑定状态
  update dm_order_bind t
     set t.bind_status          = deal_status.waiting,
         t.manual_status        = deal_status.noneed,
         t.script_id            = l_script_id,
         t.delivery_start_time  = null,
         t.delivery_finish_time = null,
         t.robot_ip             = null,
         t.result_msg           = null,
         t.finish_time          = null,
         t.next_bind_time       = null,
         t.close_time           = sysdate + 5 / 24 / 60
   where t.bind_id = v_bind_id;

  -- 更新订单状态
  update dm_order_main t
     set t.order_status = deal_status.processing,
         t.result_msg   = null,
         t.error_code   = null,
         t.error_desc   = '办理中',
         t.finish_time  = null,
         t.bind_times   = t.bind_times + 1
   where t.order_no = l_order_no;
  sp_operate_log_add('__system',
                     v_bind_id,
                     '重新发货: robot_ip=' || l_robot_ip || ',result_msg=' ||
                     l_result_msg || ',delivery_time=' ||
                     to_char(l_delivery_time, 'yyyy-mm-dd hh24:mi:ss'),
                     l_ret_code,
                     l_ret_msg);

  if (l_ret_code <> error_code.success) then
    raise RETRY_FAIL;
  end if;

  -- 构造JSON
  if (l_need_delivery = enable_status.enabled) then
    l_temp     := f_json_add(l_temp, 'que_name', l_service_code);
    l_temp     := f_json_add(l_temp, 'bind_id', v_bind_id);
    l_temp     := f_json_add(l_temp, 'script_path', l_script_path);
    v_out_json := '{' || l_temp || '}';
  end if;

  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  commit;

exception
  
  when RETRY_FAIL then
    rollback;
    update dm_order_main t
       set t.order_status = deal_status.failed,
           t.bind_times   = t.bind_times + 1,
           t.result_msg   = l_ret_msg,
           t.finish_time  = sysdate
     where t.order_no = l_order_no;

    update dm_order_bind t
       set t.bind_status = deal_status.failed,
           t.result_msg  = 'B|' || l_ret_msg,
           t.finish_time = sysdate
     where t.bind_id = v_bind_id;

    v_out_code := error_code.failed;
    v_out_msg  := l_ret_msg;
    commit;

  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常:' || sqlerrm;
end;
/

prompt
prompt Creating procedure SP_BIND_RETRY2
prompt =================================
prompt
create or replace procedure dm_system.sp_bind_retry2(v_bind_id  varchar2, -- 绑定编号
                                           v_out_code out number,
                                           v_out_msg  out varchar2,
                                           v_out_json out varchar2) -- 返回JSON: {"order_no":"","need_pay":""}
 as
  -----------------------------------------------------------------------
  -- 功能: 绑定重试(重新提交订单)
  -- 创建: zhusm 2019-10-01
  -----------------------------------------------------------------------
  l_order_no      varchar2(64);
  l_up_chnnl_no   varchar2(32);
  l_up_prd_no     varchar2(32);
  l_bind_status   number;
  l_service_code  varchar2(64);
  l_script_path   varchar2(128);
  l_robot_ip      varchar2(16);
  l_result_msg    varchar2(256);
  l_delivery_time date;
  l_bind_times    number;
  l_picture_mode  number;
  l_need_delivery number;
  l_script_id     number;

  l_bind_max number := 5;
  l_bind_id  number;
  l_ret_msg  varchar2(32);

  l_temp varchar2(2000) := '';
  RETRY_FAIL exception;

begin

  -- 准备参数
  select t.order_no,
         t.up_channel_no,
         t.up_product_no,
         t.service_code,
         t.script_id,
         t.robot_ip,
         t.result_msg,
         t.delivery_start_time,
         t.picture_mode,
         t.bind_status
    into l_order_no,
         l_up_chnnl_no,
         l_up_prd_no,
         l_service_code,
         l_script_id,
         l_robot_ip,
         l_result_msg,
         l_delivery_time,
         l_picture_mode,
         l_bind_status
    from dm_order_bind t
   where t.bind_id = v_bind_id
     for update;

  if (l_bind_status <> deal_status.failed) then
    rollback;
    v_out_code := error_code.failed;
    v_out_msg  := '不允许重提';
    return;
  end if;

  -- 检查重试次数
  select t.bind_times
    into l_bind_times
    from dm_order_main t
   where t.order_no = l_order_no;

  if (l_bind_times >= l_bind_max) then
    l_ret_msg := '重试次数达限';
    raise RETRY_FAIL;
  end if;
  
  -- 获取脚本
  select t.script_path
    into l_script_path
    from dm_up_script t
   where t.script_id = l_script_id;

  -- 创建绑定记录
  l_bind_id := f_bind_id_create();
  insert into dm_order_bind
    (bind_id,
     order_no,
     term_no,
     term_product_no,
     term_price,
     phone_no,
     business_type,
     carrier_no,
     province_no,
     city_no,
     up_channel_no,
     up_product_no,
     up_price,
     script_id,
     service_code,
     picture_mode)
   
    select l_bind_id,
           t.order_no,
           t.term_no,
           t.term_product_no,
           t.term_price,
           t.phone_no,
           t.business_type,
           t.carrier_no,
           t.province_no,
           t.city_no,
           t.up_channel_no,
           t.up_product_no,
           t.up_price,
           t.script_id,
           t.service_code,
           l_picture_mode
      from dm_order_bind t
     where t.bind_id = v_bind_id;

  -- 更新订单状态
  update dm_order_main t
     set t.order_status = deal_status.processing,
         t.result_msg   = null,
         t.error_code   = null,
         t.error_desc   = '办理中',
         t.finish_time  = null,
         t.bind_times   = t.bind_times + 1
   where t.order_no = l_order_no;

  -- 构造JSON
  select t.need_delivery
    into l_need_delivery
    from dm_up_product t
   where t.product_no = l_up_prd_no;
  if (l_need_delivery = enable_status.enabled) then
    l_temp     := f_json_add(l_temp, 'que_name', l_service_code);
    l_temp     := f_json_add(l_temp, 'bind_id', l_bind_id);
    l_temp     := f_json_add(l_temp, 'script_path', l_script_path);
    v_out_json := '{' || l_temp || '}';
  end if;

  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  commit;

exception
  when RETRY_FAIL then
    rollback;
    update dm_order_main t
       set t.order_status = deal_status.failed,
           t.bind_times   = t.bind_times + 1,
           t.result_msg   = l_ret_msg,
           t.finish_time  = sysdate
     where t.order_no = l_order_no;

    update dm_order_bind t
       set t.bind_status = deal_status.failed,
           t.result_msg  = 'B|' || l_ret_msg,
           t.finish_time = sysdate
     where t.bind_id = v_bind_id;

    v_out_code := error_code.failed;
    v_out_msg  := l_ret_msg;
    commit;

  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常:' || sqlerrm;
end;
/

prompt
prompt Creating procedure SP_CARD_DETAIL_GET
prompt =====================================
prompt
create or replace procedure dm_system.sp_card_detail_get(v_task_id   in number,
                                               v_out_count out number, -- 输出条数
                                               v_out_json  out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 获取终端号卡任务明细参数(机器人参数)
  -- 创建: zhusm 2019-09-25
  -----------------------------------------------------------------------
  l_temp           varchar2(512) := '';
  l_result         varchar2(4000) := '';
  l_get_count      number := 0;
  l_max_count      number := 10;
  l_record_id      number;
  l_task_id        number;
  l_contact_phone  varchar2(16);
  l_contact_name   varchar2(32);
  l_contact_addr   varchar2(128);
  l_card_user_id   varchar2(64);
  l_card_user_name varchar2(32);
  l_card_user_zip  varchar2(128);
  l_product_no     varchar(128);
  l_promoter_id    varchar(128);
  l_promote_id     varchar(128);
  l_script_path    varchar2(128) := '../script/temp/term_order_add.lua';

begin

  -- 扫描记录
  for r in (select t.record_id
              from tmp_term_card_detail t
             where t.deal_status = deal_status.waiting
               and t.create_time < sysdate
               and t.task_id = v_task_id
               and rownum <= l_max_count) loop

    -- 重置变量
    l_record_id      := null;
    l_task_id        := null;
    l_contact_phone  := null;
    l_contact_name   := null;
    l_contact_addr   := null;
    l_card_user_id   := null;
    l_card_user_name := null;
    l_card_user_zip  := null;
    
    begin

   -- 锁数据
      select t.record_id,
             t.task_id,
             t.contact_phone,
             t.contact_name,
             t.contact_addr,
             t.card_user_id,
             t.card_user_name
        into l_record_id,
             l_task_id,
             l_contact_phone,
             l_contact_name,
             l_contact_addr,
             l_card_user_id,
             l_card_user_name
        from tmp_term_card_detail t
       where t.record_id = r.record_id
         for update nowait;

    exception
      when others then
        rollback;
        continue;
    end;
  
    select t.product_no, t.promoter_id, t.promote_id
      into l_product_no, l_promoter_id, l_promote_id
      from tmp_term_card_task t
     where t.task_id = v_task_id;
  
    -- 更新状态
    update tmp_term_card_detail t
       set t.deal_status = deal_status.processing, t.start_time = sysdate
     where t.record_id = l_record_id;

    -- 组织参数
    l_temp      := f_json_add(l_temp, 'script_path', l_script_path);
    l_temp      := f_json_add(l_temp, 'record_id', l_record_id);
    l_temp      := f_json_add(l_temp, 'task_id', l_task_id);
    l_temp      := f_json_add(l_temp, 'contact_phone', l_contact_phone);
    l_temp      := f_json_add(l_temp, 'contact_name', l_contact_name);
    l_temp      := f_json_add(l_temp, 'contact_addr', l_contact_addr);
    l_temp      := f_json_add(l_temp, 'card_user_id', l_card_user_id);
    l_temp      := f_json_add(l_temp, 'card_user_name', l_card_user_name);
    l_temp      := f_json_add(l_temp, 'roduct_no', l_product_no);
    l_temp      := f_json_add(l_temp, 'promoter_id', l_promoter_id);
    l_temp      := f_json_add(l_temp, 'promote_id', l_promote_id);
    l_result    := l_result || ',' || '{' || l_temp || '}';
    l_get_count := l_get_count + 1;
  end loop;

  if (l_get_count > 0) then
    l_result := substr(l_result, 2, length(l_result));
  end if;

  v_out_count := l_get_count;
  v_out_json  := '[' || l_result || ']';
  commit;

exception
  when others then
    rollback;
    v_out_count := 0;
    v_out_json  := '';
    sp_system_log_add('sp_card_detail_get', 1, sqlerrm);
end;
/

prompt
prompt Creating procedure SP_CARD_DETAIL_SAVE
prompt ======================================
prompt
create or replace procedure dm_system.sp_card_detail_save(v_record_id  varchar2, -- 记录编号
                                                v_status     varchar2, -- 处理状态: 0-成功 90-失败
                                                v_result_msg varchar2, -- 结果消息
                                                v_out_code   out number,
                                                v_out_msg    out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 保存终端号卡任务明细
  -- 创建: zhusm 2019-09-24
  -----------------------------------------------------------------------
  l_record_id number;
  l_task_id   number;

  l_cnt_total number;
  l_cnt_succ  number;
  l_cnt_fail  number;

begin

  -- 检查参数
  if (v_record_id is null or v_status is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传参数为空';
    return;
  end if;
  if (v_status not in (deal_status.succeed, deal_status.failed)) then
    v_out_code := error_code.failed;
    v_out_msg  := '处理状态错误';
    return;
  end if;

  -- 锁数据
  select t.record_id, t.task_id
    into l_record_id, l_task_id
    from tmp_term_card_detail t
   where t.record_id = v_record_id
     and t.deal_status = deal_status.processing
     for update;

  select t.task_id
    into l_task_id
    from tmp_term_card_task t
   where t.task_id = l_task_id
     and t.status = deal_status.processing
     for update;

  if (l_record_id is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '记录不存在';
    return;
  end if;

  -- 处理处理结果
  update tmp_term_card_detail t
     set t.deal_status = v_status,
         t.deal_msg    = nvl(substr(v_result_msg, 1, 128), t.deal_msg),
         t.finish_time = sysdate
   where t.record_id = l_record_id;

  if (v_status = deal_status.succeed) then
    update tmp_term_card_task t
       set t.succ_rows = t.succ_rows + 1
     where t.task_id = l_task_id
       and t.status = deal_status.processing;
  else
    update tmp_term_card_task t
       set t.fail_rows = t.fail_rows + 1
     where t.task_id = l_task_id
       and t.status = deal_status.processing;
  end if;

  -- 更新任务状态
  select t.total_rows, t.succ_rows, t.fail_rows
    into l_cnt_total, l_cnt_succ, l_cnt_fail
    from tmp_term_card_task t
   where t.task_id = l_task_id;

  if (l_cnt_succ + l_cnt_fail >= l_cnt_total) then
    update tmp_term_card_task t
       set t.status = deal_status.succeed, t.finish_time = sysdate
     where t.task_id = l_task_id
       and t.status = deal_status.processing;
  end if;

  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常:' || sqlerrm;
    sp_system_log_add('sp_card_detail_save', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_CARD_TASK_GET_BAT
prompt =======================================
prompt
create or replace procedure dm_system.sp_card_task_get_bat(v_robot_ip   varchar2, -- 机器人IP
                                                 v_robot_code varchar2, -- 机器人编码
                                                 v_get_count  number, -- 获取数量
                                                 v_out_count  out number, -- 输出条数
                                                 v_out_json   out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 获取终端号卡任务参数(机器人参数)
  -- 创建: zhusm 2019-09-24
  -----------------------------------------------------------------------
  l_max_cntr  number := 10;
  l_row_cntr  number;
  l_temp      varchar2(512) := '';
  l_result    varchar2(4000) := '';
  l_get_count number := 0;

  l_term_no       varchar2(32);
  l_promoter_id   number;
  l_task_id       number;
  l_card_user_zip varchar2(128);
  l_script_path   varchar2(256) := '../script/tmp/term_order_deal.lua';

begin

  if (v_get_count > l_max_cntr) then
    l_row_cntr := l_max_cntr;
  else
    l_row_cntr := nvl(v_get_count, 1);
  end if;

  -- 扫描记录
  for r in (select t.task_id, t.card_pic_zip
              from tmp_term_card_task t
             where t.status = deal_status.waiting
               and t.create_time < sysdate
               and rownum <= l_row_cntr) loop
    -- 重置变量
    l_task_id       := null;
    l_card_user_zip := null;
  
    -- 锁数据
    begin
      select t.term_no, t.promoter_id, t.task_id, t.card_pic_zip
        into l_term_no, l_promoter_id, l_task_id, l_card_user_zip
        from tmp_term_card_task t
       where t.task_id = r.task_id
         for update nowait;

    exception
      when others then
        rollback;
        continue;
    end;

    -- 更新状态
    update tmp_term_card_task t
       set t.status = deal_status.processing, t.start_time = sysdate
     where t.task_id = l_task_id;
    update tmp_term_card_detail t
       set t.deal_status = deal_status.processing, t.start_time = sysdate
     where t.task_id = l_task_id
       and t.deal_status = deal_status.waiting;

    -- 组织脚本参数
    l_temp      := f_json_add(l_temp, 'script_path', l_script_path);
    l_temp      := f_json_add(l_temp, 'term_no', l_term_no);
    l_temp      := f_json_add(l_temp, 'promoter_id', l_promoter_id);
    l_temp      := f_json_add(l_temp, 'task_id', l_task_id);
    l_temp      := f_json_add(l_temp, 'card_pic_zip', l_card_user_zip);
    l_result    := l_result || ',' || '{' || l_temp || '}';
    l_get_count := l_get_count + 1;
  end loop;

  if (l_get_count > 0) then
    l_result := substr(l_result, 2, length(l_result));
  end if;

  v_out_count := l_get_count;
  v_out_json  := '[' || l_result || ']';
  commit;

exception
  when others then
    rollback;
    v_out_count := 0;
    v_out_json  := '';
    sp_system_log_add('sp_card_task_get_bat', 1, sqlerrm);
end;
/

prompt
prompt Creating procedure SP_DELIVERY_GET
prompt ==================================
prompt
create or replace procedure dm_system.sp_delivery_get(v_bind_id  in varchar2, -- 订单号
                                            v_robot_ip in varchar2, -- 机器人IP
                                            v_out_code out number,
                                            v_out_msg  out varchar2,
                                            v_out_json out varchar2) -- 机器人参数(JSON)
 as
  -----------------------------------------------------------------------
  -- 功能: 获取发货参数
  -- 创建人: zhusm 2019-05-25
  -----------------------------------------------------------------------
  l_order_no       varchar2(64);
  l_busi_type      number;
  l_phone_no       varchar2(16);
  l_carrier_no     varchar2(5);
  l_province_no    varchar2(5);
  l_city_no        varchar2(5);
  l_script_id      number;
  l_up_chnnl_no    varchar2(64);
  l_up_prd_id      varchar2(64);
  l_up_price       number;
  l_need_vcode     number;
  l_vcode          varchar2(32);
  l_contact_name   varchar2(64);
  l_contact_addr   varchar2(128);
  l_card_user_name varchar2(64);
  l_card_user_id   varchar2(64);
  l_card_pic_front varchar2(128);
  l_card_pic_back  varchar2(128);
  l_card_pic_hand  varchar2(128);

  l_api_id      varchar2(64);
  l_api_key     varchar2(256);
  l_up_prd_no   varchar2(64);
  l_script_path varchar2(256);
  l_api_url     varchar2(256);

  l_temp varchar2(2000) := '';

begin

  -- 锁记录
  select t.order_no,
         t.business_type,
         t.phone_no,
         t.carrier_no,
         t.province_no,
         t.city_no,
         t.script_id,
         t.up_channel_no,
         t.up_product_no,
         t.up_price
    into l_order_no,
         l_busi_type,
         l_phone_no,
         l_carrier_no,
         l_province_no,
         l_city_no,
         l_script_id,
         l_up_chnnl_no,
         l_up_prd_id,
         l_up_price
    from dm_order_bind t
   where t.bind_id = v_bind_id
     and t.bind_status = deal_status.waiting
     for update;

  select t1.need_vcode,
         t2.contact_name,
         t2.contact_addr,
         t2.card_user_name,
         t2.card_user_id,
         t2.card_pic_front,
         t2.card_pic_back,
         t2.card_pic_hand
    into l_need_vcode,
         l_contact_name,
         l_contact_addr,
         l_card_user_name,
         l_card_user_id,
         l_card_pic_front,
         l_card_pic_back,
         l_card_pic_hand
    from dm_order_main t1
    left join dm_order_main_ext t2
      on t1.order_no = t2.order_no
   where t1.order_no = l_order_no
     and t1.order_status = deal_status.processing;

  -- 获取参数
  select t.api_id, t.api_key
    into l_api_id, l_api_key
    from dm_up_channel t
   where t.channel_no = l_up_chnnl_no;
  select t.up_product_no into l_up_prd_no from dm_up_product t where t.product_no = l_up_prd_id;
  select t.script_path, t.api_url
    into l_script_path, l_api_url
    from dm_up_script t
   where t.script_id = l_script_id;

  if (l_need_vcode = enable_status.enabled) then
    select max(t.vcode) into l_vcode from dm_order_vcode t where t.order_no = l_order_no;
  end if;

  -- 更新记录
  update dm_order_bind t
     set t.bind_status         = deal_status.processing,
         t.robot_ip            = v_robot_ip,
         t.delivery_start_time = sysdate
   where t.bind_id = v_bind_id;

  -- 构造JSON
  l_temp := f_json_add(l_temp, 'order_no', l_order_no);
  l_temp := f_json_add(l_temp, 'business_type', l_busi_type);
  l_temp := f_json_add(l_temp, 'phone_no', l_phone_no);
  l_temp := f_json_add(l_temp, 'carrier_no', l_carrier_no);
  l_temp := f_json_add(l_temp, 'province_no', l_province_no);
  l_temp := f_json_add(l_temp, 'city_no', l_city_no);
  l_temp := f_json_add(l_temp, 'up_channel_no', l_up_chnnl_no);
  l_temp := f_json_add(l_temp, 'up_product_no', l_up_prd_no);
  l_temp := f_json_add(l_temp, 'up_price', l_up_price);

  if (l_need_vcode = enable_status.enabled) then
    l_temp := f_json_add(l_temp, 'vcode', l_vcode);
  end if;

  if (l_card_user_id is not null) then
    l_temp := f_json_add(l_temp, 'contact_name', l_contact_name);
    l_temp := f_json_add(l_temp, 'contact_addr', l_contact_addr);
    l_temp := f_json_add(l_temp, 'card_user_name', l_card_user_name);
    l_temp := f_json_add(l_temp, 'card_user_id', l_card_user_id);
    l_temp := f_json_add(l_temp, 'card_pic_front', l_card_pic_front);
    l_temp := f_json_add(l_temp, 'card_pic_back', l_card_pic_back);
    l_temp := f_json_add(l_temp, 'card_pic_hand', l_card_pic_hand);
  end if;

  l_temp     := f_json_add(l_temp, 'api_id', l_api_id);
  l_temp     := f_json_add(l_temp, 'api_key', l_api_key);
  l_temp     := f_json_add(l_temp, 'api_url', l_api_url);
  v_out_json := '{' || l_temp || '}';
  commit;
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := sqlerrm;
    sp_system_log_add('sp_delivery_get', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_DELIVERY_SAVE
prompt ===================================
prompt
create or replace procedure dm_system.sp_delivery_save(v_bind_id     in varchar2, -- 订单号
                                             v_error_code  in number, -- 错误码: 100-成功 200-失败 600-订单不存在 ...
                                             v_result_msg  in varchar2, -- 结果消息
                                             v_up_order_no in varchar2, -- 上游订单号
                                             v_out_code    out number,
                                             v_out_msg     out varchar2,
                                             v_out_json    out varchar2) -- 预留字段
 as
  -----------------------------------------------------------------------
  -- 功能: 保存发货结果
  -- 创建人: zhusm 2019-05-25
  -----------------------------------------------------------------------
  l_bind_id      varchar2(32);
  l_order_no     varchar2(32);
  l_up_chnnl_no  varchar2(32);
  l_up_price     number;
  l_term_no      varchar2(32);
  l_term_prd_no  varchar2(64);
  l_term_price   number;
  l_promote_id   number;
  l_pay_status   number;
  l_deal_code    number;
  l_delay_failed number;
  l_delay_min    number;
  l_order_code   number;
  l_order_desc   varchar2(64);

begin

  -- 更新消息
  update dm_order_bind t
     set t.up_order_no = nvl(v_up_order_no, t.up_order_no),
         t.result_msg  = nvl(substr(v_result_msg, 1, 128), t.result_msg)
   where t.bind_id = v_bind_id;
  commit;
  -- 锁记录
  select t.bind_id,
         t.order_no,
         t.up_channel_no,
         t.up_price,
         t.term_no,
         t.term_product_no,
         t.term_price
    into l_bind_id,
         l_order_no,
         l_up_chnnl_no,
         l_up_price,
         l_term_no,
         l_term_prd_no,
         l_term_price
    from dm_order_bind t
   where t.bind_id = v_bind_id
     and t.bind_status = deal_status.processing
     for update;

  select t.order_no, t.pay_status, t.promote_id
    into l_order_no, l_pay_status, l_promote_id
    from dm_order_main t
   where t.order_no = l_order_no
     and t.order_status = deal_status.processing
     for update;

  -- 获取处理码
  select t.deal_code,
         t.delay_failed,
         t.delay_minute,
         t.order_code,
         t.order_desc
    into l_deal_code,
         l_delay_failed,
         l_delay_min,
         l_order_code,
         l_order_desc
    from dm_system_deal_code t
   where t.error_code = v_error_code;

  -- 处理结果
  if (l_deal_code = deal_code.succeed) then
    if (not f_delivery_succeed(l_bind_id,
                               l_order_no,
                               l_up_chnnl_no,
                               l_up_price,
                               l_term_prd_no,
                               v_result_msg,
                               l_order_code,
                               l_order_desc,
                               v_out_msg)) then
      rollback;
      v_out_code := error_code.failed;
      return;
    end if;
  elsif (l_deal_code = deal_code.failed) then
    -- 延迟失败
    if (l_delay_failed = enable_status.enabled) then
      update dm_order_main t
         set t.close_time = sysdate + l_delay_min / 24 / 60
       where t.order_no = l_order_no;
      v_out_code := error_code.failed;
      v_out_msg  := '延迟失败';
      return;
    end if;
    -- 发货失败
    if (not f_delivery_failed(l_bind_id,
                              l_order_no,
                              l_term_prd_no,
                              l_pay_status,
                              v_result_msg,
                              l_order_code,
                              l_order_desc,
                              v_out_msg)) then
      rollback;
      v_out_code := error_code.failed;
      return;
    end if;
  else
    -- 发货未知
    rollback;
    v_out_code := error_code.failed;
    v_out_msg  := '未知错误码';
    return;
  end if;

  commit;
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  v_out_json := '';

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := sqlerrm;
    sp_system_log_add('sp_delivery_save', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_MANUAL_BIND_BAT
prompt =====================================
prompt
create or replace procedure dm_system.sp_manual_bind_bat(v_bind_ids   in varchar2, -- 绑定编号(|分割)
                                               v_error_code in number, -- 错误码: 100-成功 200-失败 ...
                                               v_result_msg in varchar2, -- 结果消息
                                               v_order_msg  in varchar2, -- 订单消息(显示商户)
                                               v_operator   in varchar2, -- 操作人
                                               v_out_code   out number,
                                               v_out_msg    out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 批量人工审核订单(自动发货订单)
  -- 创建: zhusm 2019-05-25
  -- 修改: zhusm 2019-09-10[增加审核技术解决产生多条操作日志问题]
  -- 修改: zhusm 2019-10-11[增加订单消息入参(可空)]
  -----------------------------------------------------------------------
  l_deal_code   number;
  l_order_code  number;
  l_order_desc  varchar2(64);
  l_bind_id     varchar2(32);
  l_order_no    varchar2(64);
  l_up_chnnl_no varchar2(32);
  l_up_price    number;
  l_term_no     varchar2(32);
  l_term_prd_no varchar2(32);
  l_pay_status  number;
  l_fn_ret      boolean := false;
  l_fn_msg      varchar2(128);

  l_deal_count number := 0; -- 审核条数计数

begin

  -- 检查参数
  if (v_bind_ids is null or v_error_code is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传参数为空';
    return;
  end if;

  -- 获取处理码
  select t.deal_code, t.order_code, t.order_desc
    into l_deal_code, l_order_code, l_order_desc
    from dm_system_deal_code t
   where t.error_code = v_error_code;

  -- 批量处理订单
  for r in (select * from table(f_string_split(v_bind_ids, '|'))) loop
    -- 锁记录
    begin
      select t.bind_id, t.order_no, t.up_channel_no, t.up_price, t.term_no
        into l_bind_id, l_order_no, l_up_chnnl_no, l_up_price, l_term_no
        from dm_order_bind t
       where t.bind_id = r.column_value
         and t.bind_status = deal_status.processing
         and t.manual_status = deal_status.waiting
         for update nowait;

      select t.product_no, t.pay_status
        into l_term_prd_no, l_pay_status
        from dm_order_main t
       where t.order_no = l_order_no
         and t.order_status = deal_status.processing
         and t.manual_status = deal_status.waiting
         for update nowait;

    exception
      when others then
        rollback;
        continue;
    end;
    
    -- 处理结果
    if (l_deal_code = deal_code.succeed) then
      -- 成功
      l_fn_ret := f_delivery_succeed(l_bind_id,
                                     l_order_no,
                                     l_up_chnnl_no,
                                     l_up_price,
                                     l_term_prd_no,
                                     v_result_msg,
                                     l_order_code,
                                     nvl(substr(v_order_msg, 1, 255),
                                         l_order_desc),
                                     l_fn_msg);
    elsif (l_deal_code = deal_code.failed) then
      -- 失败
      l_fn_ret := f_delivery_failed(l_bind_id,
                                    l_order_no,
                                    l_term_prd_no,
                                    l_pay_status,
                                    v_result_msg,
                                    l_order_code,
                                    nvl(substr(v_order_msg, 1, 255),
                                        l_order_desc),
                                    l_fn_msg);
    end if;

    if (not (l_fn_ret)) then
      rollback;
      sp_operate_log_add(v_operator,
                         l_bind_id,
                         '人工审核[绑定]失败: ' || l_fn_msg,
                         v_out_code,
                         v_out_msg);
      continue;
    end if;

    -- 更新状态
    update dm_order_bind t
       set t.result_msg    = nvl(substr(v_result_msg, 1, 128), t.result_msg),
           t.manual_status = case
                               when l_deal_code in
                                    (deal_code.succeed, deal_code.failed) then
                                deal_status.succeed
                               else
                                t.manual_status
                             end
     where t.bind_id = l_bind_id;

    update dm_order_main t
       set t.manual_status = case
                               when l_deal_code in
                                    (deal_code.succeed, deal_code.failed) then
                                deal_status.succeed
                               else
                                t.manual_status
                             end,
           t.result_msg    = nvl(substr(v_result_msg, 1, 128), t.result_msg),
           t.error_code    = l_order_code,
           t.error_desc    = l_order_desc
     where t.order_no = l_order_no;

    -- 处理计数+1
    l_deal_count := l_deal_count + 1;
    commit;
  end loop;

  if (l_deal_count > 0) then
    -- 记录操作日志
    sp_operate_log_add(v_operator,
                       v_bind_ids,
                       '人工' || case
                         when l_deal_count > 1 then
                          '批量'
                         else
                          ''
                       end || '审核[绑定], 备注: ' || nvl(v_result_msg, '无'),
                       v_out_code,
                       v_out_msg);
  end if;

  v_out_code := error_code.success;
  v_out_msg  := '操作成功: 共处理' || l_deal_count || '条';
exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := sqlerrm;
    sp_system_log_add('sp_manual_bind_bat', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_ORDER_EXT_UPDATE
prompt ======================================
prompt
create or replace procedure dm_system.sp_order_ext_update(v_order_no        varchar2, -- 订单号
                                                v_new_phone_no    varchar2, -- 新手机号
                                                v_activate_status number, -- 激活状态: 0-已激活 1-未激活
                                                v_activate_time   varchar2, -- 激活时间
                                                v_recharge_status number, -- 首充状态: 0-已首充 1-未首充
                                                v_recharge_time   varchar2, -- 首充时间
                                                v_recharge_face   number, -- 首充面值
                                                v_express_name    varchar2, -- 快递名称
                                                v_express_no      varchar2, -- 快递单号
                                                v_out_code        out number,
                                                v_out_msg         out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 更新订单扩展信息
  -- 创建: zhusm 2019-09-26
  -----------------------------------------------------------------------
  l_count           number;
  l_activate_status number;
  l_recharge_status number;

begin

  -- 检查参数
  if (v_order_no is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '订单号为空';
    return;
  end if;

  if (v_new_phone_no is null and v_activate_status is null and
     v_recharge_status is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传字段为空';
    return;
  end if;

  if (v_activate_status not in
     (enable_status.enabled, enable_status.disabled)) then
    v_out_code := error_code.failed;
    v_out_msg  := '激活状态错误';
    return;
  end if;

  if (v_recharge_status not in
     (enable_status.enabled, enable_status.disabled)) then
    v_out_code := error_code.failed;
    v_out_msg  := '首充状态错误';
    return;
  end if;

  -- 获取参数
  select count(1)
    into l_count
    from dm_order_main_ext t
   where t.order_no = v_order_no;

  if (l_count <= 0) then
    v_out_code := error_code.failed;
    v_out_msg  := '订单不存在';
    return;
  end if;

  select t.activate_status, t.recharge_status
    into l_activate_status, l_recharge_status
    from dm_order_main_ext t
   where t.order_no = v_order_no;
  -- 更新结果

  update dm_order_main_ext t
     set t.new_phone_no    = nvl(substr(v_new_phone_no, 1, 16),
                                 t.new_phone_no),
         t.activate_status = nvl(v_activate_status, t.activate_status),
         t.activate_time   = nvl(to_date(v_activate_time,
                                         'yyyy-mm-dd hh24:mi:ss'),
                                 t.activate_time),
         t.recharge_status = nvl(v_recharge_status, t.recharge_status),
         t.recharge_time   = nvl(to_date(v_recharge_time,
                                         'yyyy-mm-dd hh24:mi:ss'),
                                 t.recharge_time),
         t.recharge_face   = nvl(v_recharge_face, t.recharge_face),
         t.express_name    = nvl(v_express_name, t.express_name),
         t.express_no      = nvl(v_express_no, t.express_no),
         t.update_time     = sysdate
   where t.order_no = v_order_no;

  -- 创建通知
  if (l_activate_status <> enable_status.enabled and
     v_activate_status = enable_status.enabled) then
    if (not f_order_notify_add(v_order_no,
                               notify_type.activate_state,
                               v_out_msg)) then
      rollback;
      v_out_code := error_code.failed;
      return;
    end if;
  end if;

  if (l_recharge_status <> enable_status.enabled and
     v_recharge_status = enable_status.enabled) then
    if (not f_order_notify_add(v_order_no,
                               notify_type.recharge_state,
                               v_out_msg)) then
      rollback;
      v_out_code := error_code.failed;
      return;
    end if;
  end if;

  commit;
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常:' || sqlerrm;
end;
/

prompt
prompt Creating procedure SP_MANUAL_TASK
prompt =================================
prompt
create or replace procedure dm_system.sp_manual_task(v_batch_no number) -- 批次号
 as
  -----------------------------------------------------------------------
  -- 功能: 批量人工审核
  -----------------------------------------------------------------------
  l_bind_id      varchar2(32);
  l_order_no     varchar2(32);
  l_order_status number;
  l_count        number;

  l_ret_code number := error_code.success;
  l_deal_msg varchar2(128);
  ROW_FAILED exception;

begin
  -- 遍历数据
  for r in (select t.*
              from tmp_up_card_detail t
             where t.batch_no = v_batch_no
               and t.deal_status = deal_status.waiting) loop
    -- 重置变量
    l_bind_id      := null;
    l_order_no     := null;
    l_order_status := null;
    begin

      -- 检查参数
      if (r.up_product_no is null) then
        l_deal_msg := '上游产品编号为空';
        raise ROW_FAILED;
      end if;

      if (r.order_status not in (deal_status.succeed, deal_status.failed)) then
        l_deal_msg := '订单状态错误';
        raise ROW_FAILED;
      end if;

      if (r.bind_id is null and r.card_no is null and r.phone_no is null) then
        l_deal_msg := '绑定编号,身份证号,手机号全为空';
        raise ROW_FAILED;
      end if;

      if (r.bind_id is not null) then
        -- 有绑定编号
        select max(b.bind_id), max(b.order_no), max(m.order_status)
          into l_bind_id, l_order_no, l_order_status
          from dm_order_bind b
          left join dm_order_main m
            on m.order_no = b.order_no
         where b.bind_id = r.bind_id
           and b.bind_status in
               (deal_status.processing, deal_status.succeed);
        if (l_order_status is null) then
          l_deal_msg := '绑定记录不存在';
          raise ROW_FAILED;
        end if;
      elsif (r.card_no is not null) then
        -- 有身份证号
        select count(1)
          into l_count
          from dm_order_main m
         inner join dm_order_main_ext e
            on e.order_no = m.order_no
          left join dm_order_bind b
            on b.order_no = m.order_no
         where e.card_user_id = r.card_no
           and b.up_product_no = r.up_product_no
           and b.bind_status in
               (deal_status.processing, deal_status.succeed);
        if (l_count > 1) then
          l_deal_msg := '该身份证存在多笔订单';
          raise ROW_FAILED;
        end if;

        select b.bind_id, b.order_no, m.order_status
          into l_bind_id, l_order_no, l_order_status
          from dm_order_main m
         inner join dm_order_main_ext e
            on e.order_no = m.order_no
          left join dm_order_bind b
            on b.order_no = m.order_no
         where e.card_user_id = r.card_no
           and b.up_product_no = r.up_product_no
           and b.bind_status in
               (deal_status.processing, deal_status.succeed)
           for update;
      elsif (r.phone_no is not null) then
        -- 有联系人手机号
        select count(1)
          into l_count
          from dm_order_main m
         inner join dm_order_bind b
            on b.order_no = m.order_no
         where m.phone_no = r.phone_no
           and b.up_product_no = r.up_product_no
           and b.bind_status in
               (deal_status.processing, deal_status.succeed);
        if (l_count > 1) then
          l_deal_msg := '该手机号存在多笔订单';
          raise ROW_FAILED;
        end if;
        select b.bind_id, b.order_no, m.order_status
          into l_bind_id, l_order_no, l_order_status
          from dm_order_main m
         inner join dm_order_bind b
            on b.order_no = m.order_no
         where m.phone_no = r.phone_no
           and b.up_product_no = r.up_product_no
           and b.bind_status in
               (deal_status.processing, deal_status.succeed)
           for update;
      end if;
      if (l_order_status = deal_status.processing and
         r.order_status = deal_status.succeed) then
        -- 办理成功(首次)
        sp_manual_bind_bat(l_bind_id,
                           error_code.success,
                           r.order_msg,
                           r.order_msg,
                           r.create_user,
                           l_ret_code,
                           l_deal_msg);
      end if;
      if (l_order_status = deal_status.processing and
         r.order_status = deal_status.failed) then
       
        -- 办理失败(首次)
        sp_manual_bind_bat(l_bind_id,
                           error_code.failed,
                           r.order_msg,
                           r.order_msg,
                           r.create_user,
                           l_ret_code,
                           l_deal_msg);
      end if;
      if (l_ret_code <> error_code.success) then
        raise ROW_FAILED;
      end if;

      -- 更新order_ext/创建通知
      sp_order_ext_update(l_order_no,
                          r.new_phone_no,
                          r.activate_status,
                          r.activate_time,
                          r.recharge_status,
                          r.recharge_time,
                          r.recharge_face,
                          r.express_name,
                          r.express_no,
                          l_ret_code,
                          l_deal_msg);
      if (l_ret_code <> error_code.success) then
        raise ROW_FAILED;
      end if;
   
      update dm_order_main t
         set t.error_desc = nvl(substr(r.order_msg, 1, 128), t.error_desc)
       where t.order_no = l_order_no;
    
      -- 更新记录成功
      update tmp_up_card_detail t
         set t.deal_status = deal_status.succeed,
             t.deal_msg    = '处理成功',
             t.finish_time = sysdate
       where t.record_id = r.record_id;
      commit;
    exception
      when ROW_FAILED then
     
        -- 更新记录失败
        update tmp_up_card_detail t
           set t.deal_status = deal_status.failed,
               t.deal_msg    = substr('处理失败:' || l_deal_msg, 1, 256),
               t.finish_time = sysdate
         where t.record_id = r.record_id;
        commit;
      when others then
        rollback;
     
        -- 更新记录失败
        l_deal_msg := sqlerrm;
        update tmp_up_card_detail t
           set t.deal_status = deal_status.failed,
               t.deal_msg    = substr('处理异常:' || l_deal_msg, 1, 256),
               t.finish_time = sysdate
         where t.record_id = r.record_id;
        commit;
    end;
  end loop;
exception
  when others then
    rollback;
    sp_system_log_add('sp_manual_task', 1, '过程异常:' || sqlerrm);
end;
/

prompt
prompt Creating procedure SP_MANUAL_TASK_RUN
prompt =====================================
prompt
create or replace procedure dm_system.sp_manual_task_run(v_batch_no number, -- 批次号
                                               v_out_code out number, -- 错误码
                                               v_out_msg  out varchar2) -- 错误消息
 as
  -----------------------------------------------------------------------
  -- 功能: 执行人工审核任务
  -----------------------------------------------------------------------
  l_job_name varchar2(128) := 'IMPORT_UP_CARD_DETAIL';

begin

  /*
    begin
      dbms_scheduler.create_job(job_name            => 'IMPORT_UP_CARD_DETAIL',
                                job_type            => 'stored_procedure',
                                job_action          => 'sp_manual_task',
                                number_of_arguments => 1,
                                enabled             => false,
                                start_date          => sysdate,
                                auto_drop           => false,
                                comments            => '人工导入上游号卡处理');
    end;
    -- select t.* from user_scheduler_jobs t where t.job_name = 'IMPORT_UP_CARD_DETAIL';
  */

  -- 设置存储过程参数
  dbms_scheduler.set_job_argument_value(job_name          => l_job_name,
                                        argument_position => 1,
                                        argument_value    => v_batch_no);

  -- 启动job
  dbms_scheduler.enable(l_job_name);
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';

exception
  when others then
    rollback;
    v_out_code := error_code.failed;
    v_out_msg  := '过程异常:' || sqlerrm;
end;
/

prompt
prompt Creating procedure SP_NOTIFY_GET_BAT
prompt ====================================
prompt
create or replace procedure dm_system.sp_notify_get_bat(v_robot_ip   varchar2, -- 机器人IP
                                              v_robot_code varchar2, -- 机器人编码
                                              v_get_count  number, -- 获取数量
                                              v_out_count  out number, -- 输出条数
                                              v_out_json   out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 获取通知参数(机器人参数)
  -- 创建人: zhusm 2019-09-11
  -----------------------------------------------------------------------
  l_max_cntr number := 10;
  l_row_cntr number;

  l_record_id    number;
  l_order_no     varchar2(32);
  l_script_id    number;
  l_notify_type  number;
  l_phone_no     varchar2(32);
  l_order_status number;
  l_finish_time  varchar2(32);
  l_order_msg    varchar2(256);

  l_new_phone_no    varchar2(32);
  l_activate_status number;
  l_activate_time   varchar2(16);
  l_rechargeStatus  number;
  l_rechargeTime    varchar2(16);
  l_expressName     varchar2(64);
  l_expressNo       varchar2(64);

  l_notify_url  varchar2(256);
  l_script_path varchar2(128);

  l_temp      varchar2(512) := '';
  l_result    varchar2(4000) := '';
  l_get_count number := 0;

begin

  if (v_get_count > l_max_cntr) then
    l_row_cntr := l_max_cntr;
  else
    l_row_cntr := nvl(v_get_count, 1);
  end if;
  -- 扫描记录
  for r in (select t.record_id
              from dm_order_notify t
             where t.status = deal_status.waiting
               and t.service_code = v_robot_code
               and t.notify_times < t.notify_max_times
               and t.next_time < sysdate
               and rownum <= l_row_cntr) loop
    -- 重置变量
    l_record_id       := null;
    l_order_no        := null;
    l_script_id       := null;
    l_notify_type     := null;
    l_phone_no        := null;
    l_order_status    := null;
    l_finish_time     := null;
    l_order_msg       := null;
    l_new_phone_no    := null;
    l_activate_status := null;
    l_activate_time   := null;
    l_rechargeStatus  := null;
    l_rechargeTime    := null;
    l_expressName     := null;
    l_expressNo       := null;
    l_notify_url      := null;
    l_script_path     := null;
    l_temp            := null;
    -- 锁数据
    begin
    
      select t.record_id, t.order_no, t.script_id, t.notify_type
        into l_record_id, l_order_no, l_script_id, l_notify_type
        from dm_order_notify t
       where t.record_id = r.record_id
         for update nowait;

    exception
      when others then
        rollback;
        continue;
    end;
    
    -- 获取参数
    select t1.phone_no,
           t1.order_status,
           t1.error_desc,
           to_char(t1.finish_time, 'yyyymmddHH24miss'),
           t2.new_phone_no,
           t2.activate_status,
           to_char(t2.activate_time, 'yyyymmddHH24miss'),
           t2.recharge_status,
           to_char(t2.recharge_time, 'yyyymmddHH24miss'),
           t2.express_name,
           t2.express_no
      into l_phone_no,
           l_order_status,
           l_order_msg,
           l_finish_time,
           l_new_phone_no,
           l_activate_status,
           l_activate_time,
           l_rechargeStatus,
           l_rechargeTime,
           l_expressName,
           l_expressNo
      from dm_order_main t1
      left join dm_order_main_ext t2
        on t1.order_no = t2.order_no
     where t1.order_no = l_order_no;

    select t.script_path, t.notify_url
      into l_script_path, l_notify_url
      from dm_term_script t
     where t.record_id = l_script_id;

    -- 更新状态
    update dm_order_notify t
       set t.status       = deal_status.processing,
           t.robot_ip     = v_robot_ip,
           t.last_time    = t.next_time,
           t.next_time    = sysdate + power(2, t.notify_times + 1) / 24 / 60, -- 通知时间按2的指数增加
           t.notify_times = t.notify_times + 1
     where t.record_id = l_record_id;

    -- 组织脚本参数
    l_temp      := f_json_add(l_temp, 'script_path', l_script_path);
    l_temp      := f_json_add(l_temp, 'notify_id', l_record_id);
    l_temp      := f_json_add(l_temp, 'order_no', l_order_no);
    l_temp      := f_json_add(l_temp, 'phone_no', l_phone_no);
    l_temp      := f_json_add(l_temp, 'order_status', l_order_status);
    l_temp      := f_json_add(l_temp, 'order_msg', l_order_msg);
    l_temp      := f_json_add(l_temp, 'finish_time', l_finish_time);
    l_temp      := f_json_add(l_temp, 'phone_no2', l_new_phone_no);
    l_temp      := f_json_add(l_temp, 'activate_status', l_activate_status);
    l_temp      := f_json_add(l_temp, 'activate_time', l_activate_time);
    l_temp      := f_json_add(l_temp, 'recharge_status', l_rechargeStatus);
    l_temp      := f_json_add(l_temp, 'recharge_time', l_rechargeTime);
    l_temp      := f_json_add(l_temp, 'express_name', l_expressName);
    l_temp      := f_json_add(l_temp, 'express_no', l_expressNo);
    l_temp      := f_json_add(l_temp, 'notify_url', l_notify_url);
    l_result    := l_result || ',' || '{' || l_temp || '}';
    l_get_count := l_get_count + 1;
  end loop;

  if (l_get_count > 0) then
    l_result := substr(l_result, 2, length(l_result));
  end if;

  v_out_count := l_get_count;
  v_out_json  := '[' || l_result || ']';
  commit;

exception
  when others then
    rollback;
    v_out_count := 0;
    v_out_json  := '';
    sp_system_log_add('sp_notify_get_bat', 1, sqlerrm);
end;
/

prompt
prompt Creating procedure SP_NOTIFY_SAVE
prompt =================================
prompt
create or replace procedure dm_system.sp_notify_save(v_notify_id  in varchar2, -- 通知编号
                                           v_status     in number, -- 状态: 0-成功 90-失败
                                           v_result_msg in varchar2, -- 结果消息
                                           v_out_code   out number,
                                           v_out_msg    out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 保存查询
  -- 创建人: zhusm 2019-10-11
  -----------------------------------------------------------------------
  l_record_id    number;
  l_notify_times number;
  l_notify_max   number;

begin

  -- 参数检查
  if (v_notify_id is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '通知编号为空';
    return;
  end if;

  if (v_status not in (deal_status.succeed, deal_status.failed)) then
    v_out_code := error_code.failed;
    v_out_msg  := '状态错误';
    return;
  end if;

  -- 更新消息
  update dm_order_notify t
     set t.result_msg = nvl(substr(v_result_msg, 1, 256), t.result_msg)
   where t.record_id = v_notify_id;
  commit;
 
  -- 锁订单
  select t.record_id
    into l_record_id
    from dm_order_notify t
   where t.record_id = v_notify_id
     and t.status = deal_status.processing
     for update;

  if (v_status = deal_status.succeed) then
    -- 通知成功
    update dm_order_notify t
       set t.status = deal_status.succeed, t.finish_time = sysdate
     where t.record_id = l_record_id;
  else
    -- 通知失败
    select t.notify_times, t.notify_max_times
      into l_notify_times, l_notify_max
      from dm_order_notify t
     where t.record_id = l_record_id;
    if (l_notify_times + 1 > l_notify_max) then
      update dm_order_notify t
         set t.status = deal_status.failed, t.finish_time = sysdate
       where t.record_id = l_record_id;
    else
      update dm_order_notify t
         set t.status = deal_status.waiting
       where t.record_id = l_record_id;
    end if;
  end if;

  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := sqlerrm;
    sp_system_log_add('sp_notify_save', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_ORDER_ADD
prompt ===============================
prompt
create or replace procedure dm_system.sp_order_add(v_product_no     varchar2, -- 产品编号
                                         v_promote_guid   varchar2, -- 推广GUID
                                         v_phone_no       varchar2, -- 联系人手机号
                                         v_contact_name   varchar2, -- 联系人名称
                                         v_contact_addr   varchar2, -- 联系人地址
                                         v_card_user_name varchar2, -- 办理人身份证姓名
                                         v_card_user_id   varchar2, -- 办理人身份证号码
                                         v_card_pic_front varchar2, -- 办理人身份证照(正面)
                                         v_card_pic_back  varchar2, -- 办理人身份证照(反面)
                                         v_card_pic_hand  varchar2, -- 办理人身份证照(手持)
                                         v_user_ip        varchar2, -- 用户IP
                                         v_server_ip      varchar2, -- 收单服务器IP
                                         v_out_code       out number,
                                         v_out_msg        out varchar2,
                                         v_out_json       out varchar2) -- 返回JSON: {"order_no":"","need_pay":""}
 as
  -----------------------------------------------------------------------
  -- 功能: 创建订单
  -- 创建人: zhusm 2019-07-31
  -----------------------------------------------------------------------
  -- l_count       number;
  l_err_code    number;
  l_err_desc    varchar2(64);
  l_carrier_no  varchar2(5);
  l_province_no varchar2(5);
  l_city_no     varchar2(5);
  l_busi_type   number;
  l_term_no     varchar2(32);
  l_order_face  number;
  l_pay_price   number;
  l_cost_price  number;
  l_deduct_mode number;
  l_need_pay    number;
  l_need_vcode  number;
  l_promote_id  number;
  l_promoter_id number;
  l_label_id    number;
  l_order_no    varchar2(64);

  l_contact_addr varchar2(256);
  l_temp         varchar2(2000) := '';

begin
  -- 参数检查
  if (v_product_no is null or v_promote_guid is null or v_phone_no is null or
     v_card_user_name is null or v_contact_addr is null or
     v_card_user_id is null or v_user_ip is null or v_server_ip is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传参数为空';
    return;
  end if;

  -- 获取号段
  if (not f_num_section_get(v_phone_no,
                            v_out_msg,
                            l_carrier_no,
                            l_province_no,
                            l_city_no)) then
    v_out_code := error_code.failed;
    return;
  end if;

  -- 查询产品
  begin
    select t.business_type,
           t.term_no,
           t.face_fee,
           t.pay_price,
           t.cost_price,
           t.deduct_mode,
           t.need_pay,
           t.need_vcode
      into l_busi_type,
           l_term_no,
           l_order_face,
           l_pay_price,
           l_cost_price,
           l_deduct_mode,
           l_need_pay,
           l_need_vcode
      from dm_term_product t
     where t.product_no = v_product_no
       and t.status = enable_status.enabled;
  exception
    when others then
      rollback;
      v_out_code := error_code.failed;
      v_out_msg  := '产品不存在或未启用';
      return;
  end;

  if (l_need_vcode = enable_status.enabled) then
    v_out_code := error_code.failed;
    v_out_msg  := '不支持验证码产品';
    return;
  end if;

  -- 检查终端推广人
  if (not f_check_term_promote(l_term_no,
                               v_promote_guid,
                               v_out_msg,
                               l_promote_id,
                               l_promoter_id,
                               l_label_id)) then
    v_out_code := error_code.failed;
    return;
  end if;

  /*-- 30天内同一IP限制3笔
  select count(1)
    into l_count
    from dm_term_white_list t
   where t.tem_no = l_term_no
     and t.white_type = white_type.ip_addr
     and t.white_value = v_user_ip
     and t.status = enable_status.enabled;
  if (l_count <= 0) then
    select count(1)
      into l_count
      from dm_order_main m
     inner join dm_order_main_ext e
        on m.order_no = e.order_no
     where m.term_no = l_term_no
       and m.user_ip = v_user_ip
       and m.create_time > trunc(sysdate) - 30
       and m.order_status <> deal_status.failed
       and (m.order_status <> deal_status.failed and m.pay_status = case
             when l_need_pay = enable_status.enabled then
              deal_status.succeed
             else
              deal_status.noneed
           end);
    if (l_count >= 3) then
      v_out_code := error_code.failed;
      v_out_msg  := '超过IP限制';
      return;
    end if;
  end if;
  -- 30天内同一身份证限制1笔(支付成功但已退款还能办理)
  select count(1)
    into l_count
    from dm_order_main m
   inner join dm_order_main_ext e
      on m.order_no = e.order_no
   where m.term_no = l_term_no
     and e.card_user_id = v_card_user_id
     and m.create_time > trunc(sysdate) - 30
     and m.order_status <> deal_status.failed
     and (m.order_status <> deal_status.failed and m.pay_status = case
           when l_need_pay = enable_status.enabled then
            deal_status.succeed
           else
            deal_status.noneed
         end);
  if (l_count >= 1) then
    v_out_code := error_code.failed;
    v_out_msg  := '超过张数限制';
    return;
  end if;*/
  -- 校验终端产品规则
  if (not f_term_prd_rule_check(l_term_no,
                                v_product_no,
                                v_card_user_id,
                                v_phone_no,
                                v_contact_addr,
                                v_user_ip,
                                v_out_msg)) then
    v_out_code := error_code.failed;
    return;
  end if;

  -- 关闭未办理订单
  select t.order_code, t.order_desc
    into l_err_code, l_err_desc
    from dm_system_deal_code t
   where t.error_code = error_code.failed;

  update dm_order_main t
     set t.order_status = deal_status.failed,
         t.result_msg   = '订单关闭(未支付)',
         t.error_code   = l_err_code,
         t.error_desc   = l_err_desc
   where t.pay_status = deal_status.waiting
     and t.order_no in
         (select u.order_no
            from dm_order_main_ext u
           where u.card_user_id = v_card_user_id);
  
  -- 保存订单
  l_order_no := f_order_no_create();
  insert into dm_order_main
    (order_no,
     term_no,
     product_no,
     business_type,
     phone_no,
     carrier_no,
     province_no,
     city_no,
     user_ip,
     promoter_id,
     promote_id,
     label_id,
     order_face,
     pay_price,
     cost_price,
     pay_status,
     order_status,
     server_ip)
  values
    (l_order_no,
     l_term_no,
     v_product_no,
     l_busi_type,
     v_phone_no,
     l_carrier_no,
     l_province_no,
     l_city_no,
     v_user_ip,
     l_promoter_id,
     l_promote_id,
     l_label_id,
     l_order_face,
     l_pay_price,
     l_cost_price,
     decode(l_need_pay,
            enable_status.enabled,
            deal_status.waiting,
            deal_status.noneed),
     decode(l_need_pay,
            enable_status.enabled,
            deal_status.noneed,
            deal_status.waiting),
     v_server_ip);
  
  -- 保存扩展信息
  if (v_card_user_name is not null or v_card_user_id is not null or
     v_contact_name is not null or v_contact_addr is not null or
     v_card_pic_front is null or v_card_pic_back is not null or
     v_card_pic_hand is not null) then
    l_contact_addr := replace(v_contact_addr, '\r', '');
    l_contact_addr := replace(l_contact_addr, '\n', '');
    l_contact_addr := replace(l_contact_addr, '\t', '');
  
    insert into dm_order_main_ext
      (order_no,
       card_user_name,
       contact_name,
       contact_addr,
       card_user_id,
       card_pic_front,
       card_pic_back,
       card_pic_hand)
    values
      (l_order_no,
       trim(v_card_user_name),
       trim(v_contact_name),
       trim(l_contact_addr),
       trim(v_card_user_id),
       trim(v_card_pic_front),
       trim(v_card_pic_back),
       trim(v_card_pic_hand));
  end if;

  -- 构造JSON
  l_temp     := f_json_add(l_temp, 'order_no', l_order_no);
  l_temp     := f_json_add(l_temp, 'need_pay', l_need_pay);
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  v_out_json := '{' || l_temp || '}';
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常: ' || sqlerrm;
    sp_system_log_add('sp_order_add', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_ORDER_ADD_VCODE1
prompt ======================================
prompt
create or replace procedure dm_system.sp_order_add_vcode1(v_order_no   varchar2, -- 订单号
                                                v_product_no varchar2, -- 产品编号
                                                v_account_no varchar2, -- 办理账号
                                                v_server_ip  varchar2, -- 收单接口IP
                                                v_user_ip    varchar2, -- 用户IP
                                                v_out_code   out number,
                                                v_out_msg    out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 创建带有验证码(平台发送)订单
  -- 创建人: zhusm 2019-08-26
  -----------------------------------------------------------------------
  l_term_no     varchar2(32);
  l_term_prd_no varchar2(32);
  l_busi_type   number;
  l_carrier_no  varchar2(10);
  l_province_no varchar2(10);
  l_city_no     varchar2(10);
  l_promote_id  number;
  l_promoter_id number;
  l_label_id    number;
  l_face_fee    number;
  l_pay_price   number;
  l_cost_price  number;
  l_count       number;

begin

  -- 参数检查
  if (v_order_no is null or v_product_no is null or v_account_no is null or v_server_ip is null or
     v_user_ip is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传参数为空';
    return;
  end if;

  -- 检查订单: 重试提交存入发货队列
  if (not f_check_vcode1_order(v_order_no, v_server_ip, v_user_ip, v_out_code, v_out_msg)) then
    commit;
    return;
  end if;

  -- 检查终端产品
  begin
    select t.term_no,
           t.product_no,
           t.business_type,
           t.carrier_no,
           t.province_no,
           t.city_no,
           t.face_fee,
           t.pay_price,
           t.cost_price
      into l_term_no,
           l_term_prd_no,
           l_busi_type,
           l_carrier_no,
           l_province_no,
           l_city_no,
           l_face_fee,
           l_pay_price,
           l_cost_price
      from dm_term_product t
     where t.product_no = v_product_no
       and t.status = enable_status.enabled;
  exception
    when others then
      v_out_code := error_code.failed;
      v_out_msg  := '产品不支持或未启用';
      return;
  end;

  -- 检查终端
  select count(1)
    into l_count
    from dm_term_info t
   where t.term_no = l_term_no
     and t.status = enable_status.enabled;

  if (l_count <= 0) then
    v_out_code := error_code.failed;
    v_out_msg  := '终端不支持或未启用';
    return;
  end if;

  -- 获取参数
  select t.term_no, t.promote_id, t.promoter_id, t.label_id
    into l_term_no, l_promote_id, l_promoter_id, l_label_id
    from dm_order_vcode t
   where t.order_no = v_order_no
     and t.send_status = deal_status.succeed;

  -- 创建订单
  insert into dm_order_main
    (order_no,
     term_no,
     product_no,
     business_type,
     phone_no,
     carrier_no,
     province_no,
     city_no,
     promote_id,
     promoter_id,
     label_id,
     order_face,
     pay_price,
     cost_price,
     pay_status,
     order_status,
     need_vcode,
     server_ip,
     user_ip)
  values
    (v_order_no,
     l_term_no,
     l_term_prd_no,
     l_busi_type,
     v_account_no,
     l_carrier_no,
     l_province_no,
     l_city_no,
     l_promote_id,
     l_promoter_id,
     l_label_id,
     l_face_fee,
     l_pay_price,
     l_cost_price,
     deal_status.noneed,
     deal_status.waiting,
     enable_status.enabled,
     v_server_ip,
     v_user_ip);

  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常: ' || sqlerrm;
    sp_system_log_add('sp_order_add_vcode1', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_ORDER_ADD_VCODE2
prompt ======================================
prompt
create or replace procedure dm_system.sp_order_add_vcode2(v_order_no  varchar2, -- 订单号
                                                v_vcode     varchar2, -- 验证码
                                                v_server_ip varchar2, -- 收单接口IP
                                                v_user_ip   varchar2, -- 用户IP
                                                v_out_code  out number,
                                                v_out_msg   out varchar2,
                                                v_out_json  out varchar2) -- JSON参数: {"que_name":"","bind_id":"","script_path":""}
 as
  -----------------------------------------------------------------------
  -- 功能: 创建带有验证码(上游发验证码)订单
  -- 创建人: zhusm 2019-05-24
  -----------------------------------------------------------------------
  l_term_no      varchar2(32);
  l_term_prd_no  varchar2(32);
  l_term_price   number;
  l_deduct_mode  number;
  l_up_chnnl_no  varchar2(32);
  l_up_prd_no    varchar2(32);
  l_up_prd_price number;
  l_busi_type    number;
  l_phone_no     varchar2(16);
  l_carrier_no   varchar2(10);
  l_province_no  varchar2(10);
  l_city_no      varchar2(10);
  l_promote_id   number;
  l_promoter_id  number;
  l_label_id     number;
  l_face_fee     number;
  l_pay_price    number;
  l_cost_price   number;
  l_send_status  number;
  l_script_id    number;
  l_script_path  varchar2(128);
  l_svc_code     varchar2(128);

  l_bind_id varchar2(32);
  l_temp    varchar2(256) := '';

begin

  -- 参数检查
  if (v_order_no is null or v_vcode is null or v_server_ip is null or v_user_ip is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传参数为空';
    return;
  end if;

  -- 检查订单: 重试提交存入发货队列
  if (not
      f_check_vcode2_order(v_order_no, v_server_ip, v_user_ip, v_out_code, v_out_msg, v_out_json)) then
    commit;
    return;
  end if;

  -- 获取参数
  select t.term_no,
         t.term_product_no,
         t.up_channel_no,
         t.up_product_no,
         t.business_type,
         t.phone_no,
         t.carrier_no,
         t.province_no,
         t.city_no,
         t.promote_id,
         t.promoter_id,
         t.label_id,
         t.send_status
    into l_term_no,
         l_term_prd_no,
         l_up_chnnl_no,
         l_up_prd_no,
         l_busi_type,
         l_phone_no,
         l_carrier_no,
         l_province_no,
         l_city_no,
         l_promote_id,
         l_promoter_id,
         l_label_id,
         l_send_status
    from dm_order_vcode t
   where t.order_no = v_order_no
     and t.send_status = deal_status.succeed;

  -- 准备参数
  select t.face_fee, t.pay_price, t.pay_price, t.cost_price, t.deduct_mode
    into l_face_fee, l_pay_price, l_term_price, l_cost_price, l_deduct_mode
    from dm_term_product t
   where t.product_no = l_term_prd_no;

  select t.deduct_price into l_up_prd_price from dm_up_product t where t.product_no = l_up_prd_no;

  select t.script_id, t.script_path, t.service_code
    into l_script_id, l_script_path, l_svc_code
    from dm_up_script t
   where t.channel_no = l_up_chnnl_no
     and t.script_type = script_type.vcode_submit;

  -- 更新验证码
  update dm_order_vcode t
     set t.vcode = v_vcode, t.retry_times = t.retry_times + 1
   where t.order_no = v_order_no
     and t.send_status = deal_status.succeed;

  -- 创建订单
  insert into dm_order_main
    (order_no,
     term_no,
     product_no,
     business_type,
     phone_no,
     carrier_no,
     province_no,
     city_no,
     user_ip,
     promote_id,
     promoter_id,
     label_id,
     order_face,
     pay_price,
     cost_price,
     pay_status,
     order_status,
     server_ip,
     need_vcode)
  values
    (v_order_no,
     l_term_no,
     l_term_prd_no,
     l_busi_type,
     l_phone_no,
     l_carrier_no,
     l_province_no,
     l_city_no,
     v_user_ip,
     l_promote_id,
     l_promoter_id,
     l_label_id,
     l_face_fee,
     l_pay_price,
     l_cost_price,
     deal_status.noneed,
     deal_status.processing,
     v_server_ip,
     enable_status.enabled);

  -- 创建绑定
  l_bind_id := f_bind_id_create();
  insert into dm_order_bind
    (bind_id,
     order_no,
     term_no,
     term_price,
     phone_no,
     business_type,
     carrier_no,
     province_no,
     city_no,
     up_channel_no,
     up_product_no,
     up_price,
     script_id,
     service_code,
     bind_status,
     manual_status,
     term_product_no)
  values
    (l_bind_id,
     v_order_no,
     l_term_no,
     l_term_price,
     l_phone_no,
     l_busi_type,
     l_carrier_no,
     l_province_no,
     l_city_no,
     l_up_chnnl_no,
     l_up_prd_no,
     l_up_prd_price,
     l_script_id,
     l_script_path,
     deal_status.waiting,
     deal_status.noneed,
     l_term_prd_no);

  /*
  -- 添加终端资金变动
  if (l_deduct_mode = deduct_mode.early) then
    if (not f_term_fund_change_add(l_term_no,
                                   v_order_no,
                                   change_type.deduct,
                                   l_cost_price,
                                   '_system',
                                   '初始扣款',
                                   v_out_msg)) then
      rollback;
      v_out_code := error_code.failed;
      return;
    end if;
  end if;
  */
  -- 构造JSON数据
  l_temp     := f_json_add(l_temp, 'que_name', l_svc_code);
  l_temp     := f_json_add(l_temp, 'bind_id', l_bind_id);
  l_temp     := f_json_add(l_temp, 'script_path', l_script_path);
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  v_out_json := '{' || l_temp || '}';
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常: ' || sqlerrm;
    sp_system_log_add('sp_order_add_vcode2', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_ORDER_PIC_UPDATE
prompt ======================================
prompt
create or replace procedure dm_system.sp_order_pic_update(v_order_no       varchar2, -- 订单号
                                                v_card_pic_front varchar2, -- 办理人身份证照(正面)
                                                v_card_pic_back  varchar2, -- 办理人身份证照(反面)
                                                v_card_pic_hand  varchar2, -- 办理人身份证照(手持)
                                                v_user_ip        varchar2, -- 用户IP
                                                v_server_ip      varchar2, -- 收单服务器IP
                                                v_out_code       out number,
                                                v_out_msg        out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 更新身份证照片
  -- 创建人: zhusm 2019-09-29 14:18:20
  -----------------------------------------------------------------------
  l_bind_times    number;
  l_bind_max      number := 5;
  l_order_no      varchar2(32);
  l_term_prd_no   varchar2(32);
  l_need_card_pic number;

  l_bind_status number;
  l_pic_mode    number;

begin

  -- 检查参数
  if (v_order_no is null or v_card_pic_front is null or
     v_card_pic_back is null or v_card_pic_hand is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传参数为空';
    return;
  end if;

  -- 检查订单
  select t.bind_times
    into l_bind_times
    from dm_order_main t
   where t.order_no = v_order_no;

  if (l_bind_times <= 0) then
    v_out_code := error_code.failed;
    v_out_msg  := '订单不存在';
    return;
  end if;

  if (l_bind_times >= l_bind_max) then
    v_out_code := error_code.failed;
    v_out_msg  := '重试次数达限';
    return;
  end if;

  begin
    select t.order_no, t.product_no
      into l_order_no, l_term_prd_no
      from dm_order_main t
     where t.order_no = v_order_no
       and t.order_status <> deal_status.succeed
       for update;

  exception
    when others then
      rollback;
      v_out_code := error_code.failed;
      v_out_msg  := '订单错误';
      return;
  end;

  -- 检查订单扩展
  select t.need_card_pic
    into l_need_card_pic
    from dm_term_product t
   where t.product_no = l_term_prd_no;

  if (l_need_card_pic = enable_status.disabled) then
    rollback;
    v_out_code := error_code.failed;
    v_out_msg  := '不支持重提';
    return;

  end if;
 
  -- 获取绑定
  select picture_mode, l_bind_status
    into l_pic_mode, l_bind_status
    from (select t.bind_id, t.bind_status, t.picture_mode
            from dm_order_bind t
           where t.order_no = v_order_no
             and t.bind_status <> deal_status.succeed
           order by t.bind_id desc)
   where rownum <= 1;

  if (l_pic_mode = picture_mode.only_photo) then
    if (l_bind_status = deal_status.succeed) then
      rollback;
      v_out_code := error_code.failed;
      v_out_msg  := '订单已成功';
      return;
    end if;
  else
    if (l_bind_status <> deal_status.failed) then
      rollback;
      v_out_code := error_code.failed;
      v_out_msg  := '仅失败可重提';
      return;
    end if;
  end if;
 
  -- 更新数据
  update dm_order_main_ext t
     set t.card_pic_front = v_card_pic_front,
         t.card_pic_back  = v_card_pic_back,
         t.card_pic_hand  = v_card_pic_hand,
         t.update_time    = sysdate
   where t.order_no = l_order_no;
 
  update dm_order_main t
     set t.order_status   = deal_status.waiting,
         t.manual_status  = deal_status.noneed,
         t.server_ip      = v_server_ip,
         t.user_ip        = v_user_ip,
         t.result_msg     = null,
         t.error_code     = null,
         t.error_desc     = null,
         t.finish_time    = null,
         t.close_time     = sysdate + 5 / 24 / 60,
         t.bind_next_time = sysdate,
         t.bind_batch_no  = null,
         t.bind_times     = t.bind_times + 1
   where t.order_no = l_order_no;

  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常: ' || sqlerrm;
    sp_system_log_add('sp_order_pic_update', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_PAY_INFO_GET
prompt ==================================
prompt
create or replace procedure dm_system.sp_pay_info_get(v_order_no     varchar2,
                                            v_account_type number,
                                            v_out_code     out number,
                                            v_out_msg      out varchar2,
                                            v_out_json     out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 获取支付信息
  -- 创建人: zhusm 2019-07-31
  -----------------------------------------------------------------------
  l_order_no      varchar2(64);
  l_term_no       varchar2(32);
  l_product_no    varchar2(32);
  l_pay_price     number(15, 3);
  l_product_title varchar2(1024);
  l_account_id    number;
  l_temp          varchar2(2000) := '';

begin

  -- 检查参数
  if (v_order_no is null or v_account_type is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传参数为空';
    return;
  end if;

  if (v_account_type not in (account_type.alipay, account_type.wechat)) then
    v_out_code := error_code.failed;
    v_out_msg  := '只支持微信支付宝';
    return;
  end if;

  -- 获取参数
  begin
    select t.order_no, t.term_no, t.product_no, t.pay_price
      into l_order_no, l_term_no, l_product_no, l_pay_price
      from dm_order_main t
     where t.order_no = v_order_no
       and t.pay_status = deal_status.waiting
       for update;

  exception
    when others then
      rollback;
      v_out_code := error_code.failed;
      v_out_msg  := '异常订单拒绝处理';
      return;
  end;

  select t.product_title
    into l_product_title
    from dm_term_product t
   where t.product_no = l_product_no;
 
  -- 获取收款账号
  if (not
      f_pay_account_get(l_term_no, v_account_type, v_out_msg, l_account_id)) then
    rollback;
    v_out_code := error_code.failed;
    return;
  end if;

  -- 更新订单
  update dm_order_main t
     set t.account_id = l_account_id, t.pay_status = deal_status.processing
   where t.order_no = l_order_no;

  -- 构造JSON
  l_temp     := f_json_add(l_temp, 'order_no', l_order_no);
  l_temp     := f_json_add(l_temp, 'account_id', l_account_id);
  l_temp     := f_json_add(l_temp, 'pay_price', l_pay_price);
  l_temp     := f_json_add(l_temp, 'product_title', l_product_title);
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  v_out_json := '{' || l_temp || '}';
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常: ' || sqlerrm;
    sp_system_log_add('sp_pay_info_get', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_PAY_RESULT_SAVE
prompt =====================================
prompt
create or replace procedure dm_system.sp_pay_result_save(v_order_no    in varchar2, -- 订单号
                                               v_pay_status  in varchar2, --支付状态 0-成功 90-失败
                                               v_suc_money   in number, -- 成功金额
                                               v_service_fee in number, -- 手续费
                                               v_trade_msg   in varchar2, -- 支付结果消息
                                               v_trade_no    in varchar2, -- 支付平台流水
                                               v_out_code    out number,
                                               v_out_msg     out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 保存支付结果
  -- 创建人: ldp 2019-05-15
  -- 修改人: zhusm 2019-08-01
  -----------------------------------------------------------------------
  l_term_no     varchar2(64);
  l_term_prd_no varchar2(32);
  l_account_id  number;
  l_pay_price   number;
  l_service_fee number := nvl(v_service_fee, 0);

begin

  -- 检查参数
  if (v_order_no is null or v_pay_status is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传参数为空';
    return;
  end if;
 
  -- 更新消息
  update dm_order_main t
     set t.plat_trade_msg = nvl(substr(v_trade_msg, 1, 128),
                                t.plat_trade_msg),
         t.plat_trade_no  = nvl(v_trade_no, t.plat_trade_no)
   where t.order_no = v_order_no;
  commit;
 
  -- 获取参数
  begin
    select t.term_no, t.product_no, t.account_id, t.pay_price
      into l_term_no, l_term_prd_no, l_account_id, l_pay_price
      from dm_order_main t
     where t.order_no = v_order_no
       and t.pay_status = deal_status.processing
       for update;
  exception
    when others then
      rollback;
      v_out_code := error_code.failed;
      v_out_msg  := '异常订单拒绝处理';
      return;
  end;

  if (abs(l_pay_price - v_suc_money) > 0) then
    v_out_code := error_code.failed;
    v_out_msg  := '成功金额与支付金额不符';
    rollback;
    return;
  end if;

  -- 处理支付结果
  if (v_pay_status = deal_status.succeed) then
    -- 支付成功
    if (not f_pay_result_succeed(v_order_no,
                                 l_term_no,
                                 l_account_id,
                                 v_suc_money,
                                 l_service_fee,
                                 v_out_msg)) then
      rollback;
      v_out_code := error_code.failed;
      return;
    end if;
  elsif (v_pay_status = deal_status.failed) then
    -- 支付失败
    if (not f_pay_result_failed(v_order_no, v_out_msg)) then
      rollback;
      v_out_code := error_code.failed;
      return;
    end if;
  else
    -- 支付未知
    v_out_code := error_code.failed;
    v_out_msg  := '支付状态错误';
    return;
  end if;
  commit;
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';

exception
  when others then
    rollback;
    v_out_code := error_code.failed;
    v_out_msg  := '过程异常: ' || sqlerrm;
    sp_system_log_add('sp_pay_result_save', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_QUERY_CREATE_TMP
prompt ======================================
prompt
create or replace procedure dm_system.sp_query_create_tmp(v_bind_id  in varchar2, -- 订单号
                                                v_out_code out number,
                                                v_out_msg  out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 创建查询
  -- 创建人: zhusm 2019-05-25
  -----------------------------------------------------------------------
  l_order_no      varchar2(32);
  l_channel_no    varchar2(32);
  l_busi_type     number;
  l_query_delay   number;
  l_count         number;
  l_script_id     number;
  l_service_code  varchar2(64);

begin
 
  -- 检查参数
  if (v_bind_id is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传参数为空';
    return;
  end if;

  -- 获取上游渠道
  begin
  
    select t.order_no, t.up_channel_no, t.business_type
      into l_order_no, l_channel_no, l_busi_type
      from dm_order_bind t
     where t.bind_id = v_bind_id
       and t.bind_status = deal_status.processing
       for update nowait;

  exception
    when others then
      rollback;
      v_out_code := error_code.failed;
      v_out_msg  := '记录不存在';
      return;
  end;
  
  -- !!! 号卡不能创建查询
  if (l_busi_type = business_type.tel_card) then
    v_out_code := error_code.failed;
    v_out_msg  := '号卡不能创建查询';
    return;
  end if;

  -- 检查查询记录
  select count(1) into l_count from dm_order_query t where t.bind_id = v_bind_id;
  if (l_count > 0) then
    rollback;
    v_out_code := error_code.failed;
    v_out_msg  := '查询已创建';
    return;
  end if;

  -- 获取查询配置
  select t.script_id, t.service_code
    into l_script_id, l_service_code
    from dm_up_script t
   where t.channel_no = 'UC1040'
     and (t.business_type = l_busi_type or t.business_type = business_type.all_type)
     and t.script_type = script_type.order_query
     and t.status = enable_status.enabled;
  -- 创建记录
  insert into dm_order_query
    (bind_id, order_no, script_id, service_code, next_time)
  values
    (v_bind_id, l_order_no, l_script_id, l_service_code, sysdate + l_query_delay / 24 / 60 / 60);
  commit;
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := sqlerrm;
    sp_system_log_add('sp_query_create_tmp', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_QUERY_GET_BAT
prompt ===================================
prompt
create or replace procedure dm_system.sp_query_get_bat(v_robot_ip   varchar2, -- 机器人IP
                                             v_robot_code varchar2, -- 机器人编码
                                             v_get_count  number, -- 获取数量
                                             v_out_count  out number, -- 输出条数
                                             v_out_json   out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 获取查询参数(机器人参数)
  -- 创建人: zhusm 2019-05-25
  -----------------------------------------------------------------------
  l_max_cntr number := 10;
  l_row_cntr number;

  l_bind_id   varchar2(32);
  l_order_no  varchar2(32);
  l_script_id number;
  l_bind_time date;

  l_up_chnnl_no    varchar2(32);
  l_up_prd_no      varchar2(32);
  l_up_order_no    varchar2(64);
  l_api_id         varchar2(64);
  l_api_key        varchar2(64);
  l_api_url        varchar2(128);
  l_script_path    varchar2(128);
  l_query_interval number;

  l_temp      varchar2(512) := '';
  l_result    varchar2(4000) := '';
  l_get_count number := 0;

begin
 
  if (v_get_count > l_max_cntr) then
    l_row_cntr := l_max_cntr;
  else
    l_row_cntr := nvl(v_get_count, 1);
  end if;

  -- 扫描记录
  for r in (select t.bind_id
              from dm_order_query t
             where t.status = deal_status.waiting
               and t.service_code = v_robot_code
               and t.next_time < sysdate
               and rownum <= l_row_cntr) loop
    -- 重置变量
    l_bind_id     := null;
    l_order_no    := null;
    l_script_id   := null;
    l_up_chnnl_no := null;
    l_up_order_no := null;
    l_api_id      := null;
    l_api_key     := null;
    l_api_url     := null;
    l_script_path := null;
    l_temp        := null;
    -- 锁数据
    begin
      select t.bind_id, t.order_no, t.script_id, t.create_time
        into l_bind_id, l_order_no, l_script_id, l_bind_time
        from dm_order_query t
       where t.bind_id = r.bind_id
         for update nowait;
    exception
      when others then
        rollback;
        continue;
    end;
    -- 获取参数
    begin
      select t.up_order_no, t.up_channel_no, t.up_product_no
        into l_up_order_no, l_up_chnnl_no, l_up_prd_no
        from dm_order_bind t
       where t.bind_id = l_bind_id;
    exception
      when others then
        rollback;
        continue;
    end;
    select t2.api_id,
           t2.api_key,
           t1.api_url,
           t1.script_path,
           t2.query_interval
      into l_api_id, l_api_key, l_api_url, l_script_path, l_query_interval
      from dm_up_script t1
     inner join dm_up_channel t2
        on t1.channel_no = t2.channel_no
     where t1.script_id = l_script_id;
    /*
    -- !! 临时使用----begin
    select t.api_id, t.api_key, nvl(t.query_interval, 300)
      into l_api_id, l_api_key, l_query_interval
      from dm_up_channel t
     where t.channel_no = l_up_chnnl_no;
    select t.api_url, t.script_path
      into l_api_url, l_script_path
      from dm_up_script t
     where t.script_id = l_script_id;
     */

    -- 更新状态
    update dm_order_query t
       set t.status      = deal_status.processing,
           t.robot_ip    = v_robot_ip,
           t.next_time   = sysdate + l_query_interval / 24 / 60 / 60,
           t.query_times = nvl(t.query_times, 0) + 1
     where t.bind_id = l_bind_id;
    -- 组织脚本参数
    l_temp      := f_json_add(l_temp, 'script_path', l_script_path);
    l_temp      := f_json_add(l_temp, 'bind_id', l_bind_id);
    l_temp      := f_json_add(l_temp, 'order_no', l_order_no);
    l_temp      := f_json_add(l_temp, 'up_channel_no', l_up_chnnl_no);
    l_temp      := f_json_add(l_temp, 'up_product_no', l_up_prd_no);
    l_temp      := f_json_add(l_temp, 'up_order_no', l_up_order_no);
    l_temp      := f_json_add(l_temp, 'api_id', l_api_id);
    l_temp      := f_json_add(l_temp, 'api_key', l_api_key);
    l_temp      := f_json_add(l_temp, 'api_url', l_api_url);
    l_temp      := f_json_add(l_temp,
                              'bind_time',
                              to_char(l_bind_time, 'yyyymmddHH24miss'));
    l_result    := l_result || ',' || '{' || l_temp || '}';
    l_get_count := l_get_count + 1;
  end loop;

  if (l_get_count > 0) then
    l_result := substr(l_result, 2, length(l_result));
  end if;

  v_out_count := l_get_count;
  v_out_json  := '[' || l_result || ']';
  commit;
exception
  when others then
    rollback;
    v_out_count := 0;
    v_out_json  := '';
    sp_system_log_add('sp_query_get_bat', 1, sqlerrm);
end;
/

prompt
prompt Creating procedure SP_QUERY_SAVE
prompt ================================
prompt
create or replace procedure dm_system.sp_query_save(v_bind_id    in varchar2, -- 订单号
                                          v_status     in number, -- 状态: 0-成功 90-失败
                                          v_result_msg in varchar2, -- 结果消息
                                          v_out_code   out number,
                                          v_out_msg    out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 保存查询
  -- 创建人: zhusm 2019-05-26
  -----------------------------------------------------------------------
  l_script_id      number;
  l_query_max      number;
  l_query_times    number;
  l_query_interval number;
  l_order_no       varchar2(32);
begin
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  
  -- 锁记录
  select t.script_id, t.query_times, t.max_times, t.order_no
    into l_script_id, l_query_times, l_query_max, l_order_no
    from dm_order_query t
   where t.bind_id = v_bind_id
     and t.status = deal_status.processing
     for update;
 
  update dm_order_bind t
     set t.result_msg = nvl(substr(v_result_msg, 1, 128), t.result_msg)
   where t.bind_id = v_bind_id;

  update dm_order_main t
     set t.result_msg = nvl(substr(v_result_msg, 1, 128), t.result_msg)
   where t.order_no = l_order_no;

  -- 成功关闭查询
  if (v_status = deal_status.succeed) then
    update dm_order_query t
       set t.status      = deal_status.succeed,
           t.result_msg  = nvl(substr(v_result_msg, 1, 128), t.result_msg),
           t.finish_time = sysdate
     where t.bind_id = v_bind_id;
    commit;
    return;
  end if;
 
  -- 失败超限关闭查询
  if (l_query_max <> 0 and l_query_times >= l_query_max) then
    update dm_order_query t
       set t.status      = deal_status.failed,
           t.result_msg  = nvl(substr(v_result_msg, 1, 128), t.result_msg),
           t.finish_time = sysdate
     where t.bind_id = v_bind_id;
    commit;
    return;
  end if;
 
  -- 可重试
  select t1.query_interval
    into l_query_interval
    from dm_up_channel t1
   inner join dm_up_script t2
      on t1.channel_no = t2.channel_no
   where t2.script_id = l_script_id;
  update dm_order_query t
     set t.status      = deal_status.waiting,
         t.result_msg  = nvl(substr(v_result_msg, 1, 128), t.result_msg),
         t.next_time   = sysdate + l_query_interval / 24 / 60 / 60,
         t.query_times = t.query_times + 1
   where t.bind_id = v_bind_id;
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := sqlerrm;
    sp_system_log_add('sp_query_save', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_REFUND_GET_BAT
prompt ====================================
prompt
create or replace procedure dm_system.sp_refund_get_bat(v_robot_ip   varchar2, -- 机器人IP
                                              v_robot_code varchar2, -- 机器人编码
                                              v_get_count  number, -- 获取数量
                                              v_out_count  out number, -- 输出条数
                                              v_out_json   out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 获取退款记录(用于机器人退款)
  -- 创建人: zhusm 2019-05-16
  -----------------------------------------------------------------------
  l_max_cntr number := 10;
  l_row_cntr number;

  l_record_id     number;
  l_order_no      varchar2(64);
  l_plat_trade_no varchar2(64);
  l_account_id    number;
  l_account_type  number;
  l_app_id        varchar2(128);
  l_merchant_id   varchar2(128);
  l_refund_fee    number; -- 退款金额
  l_refund_reason varchar2(128); -- 退款原因
  l_script_path   varchar2(256);
  l_request_url   varchar2(128);
  l_notify_url    varchar2(128);

  l_temp      varchar2(2000) := '';
  l_result    varchar2(2000) := '';
  l_get_count number default 0;

begin
 
  if (v_get_count > l_max_cntr) then
    l_row_cntr := l_max_cntr;
  else
    l_row_cntr := v_get_count;
  end if;

  -- 扫描记录
  for r in (select t.record_id
              from dm_order_refund t
             where t.status = deal_status.waiting
               and t.service_code = v_robot_code
               and rownum <= l_row_cntr) loop
    begin
      -- 重置变量
      l_record_id     := null;
      l_order_no      := null;
      l_account_id    := null;
      l_account_type  := null;
      l_app_id        := null;
      l_merchant_id   := null;
      l_refund_fee    := null;
      l_refund_reason := null;
      l_script_path   := null;
      l_request_url   := null;
      begin
   
        -- 锁记录
        select t.record_id,
               t.account_id,
               t.order_no,
               t.plat_trade_no,
               t.refund_fee,
               t.refund_reason
          into l_record_id,
               l_account_id,
               l_order_no,
               l_plat_trade_no,
               l_refund_fee,
               l_refund_reason
          from dm_order_refund t
         where t.record_id = r.record_id
           and t.status = deal_status.waiting
           for update nowait;

      exception
        when others then
          continue;
      end;
   
      -- 支付账号
      select t.account_type, t.app_id, t.merchant_id, t.refund_notify_url
        into l_account_type, l_app_id, l_merchant_id, l_notify_url
        from dm_pay_account t
       where t.account_id = l_account_id
         and t.status = enable_status.enabled;
   
      -- 退款脚本
      select t.request_url, t.script_path
        into l_request_url, l_script_path
        from dm_pay_script t
       where t.account_type = l_account_type
         and t.script_type = script_type.refund_apply
         and t.status = enable_status.enabled;
 
      -- 更新退款记录
      update dm_order_refund t
         set t.robot_ip   = v_robot_ip,
             t.status     = deal_status.processing,
             t.start_time = sysdate
       where t.record_id = l_record_id;
   
      -- 组织脚本参数
      l_temp      := f_json_add(l_temp, 'script_path', l_script_path);
      l_temp      := f_json_add(l_temp, 'record_id', l_record_id);
      l_temp      := f_json_add(l_temp, 'order_no', l_order_no);
      l_temp      := f_json_add(l_temp, 'trade_no', l_plat_trade_no);
      l_temp      := f_json_add(l_temp, 'account_id', l_account_id);
      l_temp      := f_json_add(l_temp, 'app_id', l_app_id);
      l_temp      := f_json_add(l_temp, 'merchant_id', l_merchant_id);
      l_temp      := f_json_add(l_temp, 'refund_fee', l_refund_fee);
      l_temp      := f_json_add(l_temp, 'refund_reason', l_refund_reason);
      l_temp      := f_json_add(l_temp, 'request_url', l_request_url);
      l_temp      := f_json_add(l_temp, 'notify_url', l_notify_url);
      l_result    := ',' || l_result || '{' || l_temp || '}';
      l_get_count := l_get_count + 1;
      commit;
    exception
      when others then
        rollback;
        sp_system_log_add('sp_refund_get_bat', 1, sqlerrm);
        continue;
    end;
  end loop;
  if (l_get_count > 0) then
    l_result := substr(l_result, 2, length(l_result));
  end if;
  v_out_json  := '[' || l_result || ']';
  v_out_count := l_get_count;
exception
  when others then
    rollback;
    sp_system_log_add('sp_refund_get_bat', 1, sqlerrm);
end;
/

prompt
prompt Creating procedure SP_REFUND_SAVE
prompt =================================
prompt
create or replace procedure dm_system.sp_refund_save(v_record_id  in varchar2, -- 记录编号
                                           v_status     in varchar2, -- 退款状态: 0-成功 90-失败
                                           v_result_msg in varchar2, -- 退款结果消息
                                           v_refund_no  in varchar2, -- 平台退款单号
                                           v_out_code   out number,
                                           v_out_msg    out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 保存退款结果
  -- 创建人: zhusm 2019-05-16
  -- 修改人: zhusm 2019-05-17
  -----------------------------------------------------------------------
  l_term_no      varchar2(64);
  l_order_no     varchar2(64);
  l_account_id   number;
  l_account_type number;
  l_refund_fee   number; -- 订单退款金额
  l_change_money number; -- 实际退款金额
  l_service_fee  number; -- 手续费
  l_term_mode    number;
  l_term_price   number;

begin

  -- 参数检查
  if (v_record_id is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '记录编号为空';
    return;
  end if;

  if (v_status not in (deal_status.succeed, deal_status.failed)) then
    v_out_code := error_code.failed;
    v_out_msg  := '退款状态错误';
    return;
  end if;

  -- 记录检查
  begin
    select t.term_no,
           t.order_no,
           t.account_id,
           t.account_type,
           t.refund_fee,
           t.service_fee
      into l_term_no,
           l_order_no,
           l_account_id,
           l_account_type,
           l_refund_fee,
           l_service_fee
      from dm_order_refund t
     where t.record_id = v_record_id
       and t.status = deal_status.processing;
  exception
    when others then
      rollback;
      v_out_code := error_code.failed;
      v_out_msg  := '退款记录不存在';
      return;
  end;

  -- 更新退款结果
  update dm_order_refund t
     set t.status         = v_status,
         t.result_msg     = nvl(substr(v_result_msg, 1, 128), t.result_msg),
         t.plat_refund_no = nvl(substr(v_refund_no, 1, 64), t.plat_refund_no),
         t.finish_time    = sysdate
   where t.record_id = v_record_id;
  
  -- 退款失败返回
  if (v_status <> deal_status.succeed) then
    commit;
    v_out_code := error_code.success;
    v_out_msg  := '操作成功';
    return;
  end if;

  -- 退款成功流程
  update dm_order_main t
     set t.refund_status = deal_status.succeed
   where t.order_no = l_order_no;

  if (l_account_type = account_type.alipay) then
    -- 支付宝不退手续费(亏损)
    l_change_money := l_refund_fee;
    l_service_fee  := l_service_fee;
  else
    -- 微信要退手续费
    l_change_money := l_refund_fee;
    l_service_fee  := 0;
  end if;

  -- 创建资金账户退款变动
  if (not (f_pay_fund_change_add(l_term_no,
                                 l_order_no,
                                 l_account_id,
                                 change_type.deduct,
                                 l_change_money,
                                 l_service_fee,
                                 '_system',
                                 '自动退款',
                                 v_out_msg))) then
    rollback;
    sp_system_log_add('sp_refund_save',
                      1,
                      'order_no=' || l_order_no || ', msg=' || v_out_msg);
    v_out_code := error_code.failed;
    return;
  end if;

  -- 创建终端退款变动
  select t1.deduct_mode, t1.pay_price
    into l_term_mode, l_term_price
    from dm_term_product t1
   inner join dm_order_main t2
      on t1.product_no = t2.product_no
   where t2.order_no = l_order_no;

  if (l_term_mode = deduct_mode.early) then
    if (not f_term_fund_change_add(l_term_no,
                                   l_order_no,
                                   change_type.income,
                                   l_term_price,
                                   '_system',
                                   '自动退款',
                                   v_out_msg)) then
      rollback;
      v_out_code := error_code.failed;
      return;
    end if;
  end if;

  commit;
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := sqlerrm;
    sp_system_log_add('sp_refund_save', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_STATICS_DIAGRAM
prompt =====================================
prompt
create or replace procedure dm_system.sp_statics_diagram(v_pid         varchar2,
                                               v_begin_time  varchar2,
                                               v_end_time    varchar2,
                                               v_out_errcode out number,
                                               v_out_msg     out varchar2,
                                               v_out_data    out pkg_cursor.pointer) is

begin
  open v_out_data for
  
    select count(*) 订单量,
           nvl(sum(decode(t1.order_status, 0, 1, 0)), 0) 发货量,
           nvl(sum(decode(t2.activate_status, 0, 1, 0)), 0) 激活量,
           nvl(sum(decode(t1.order_status, 90, 1, 0)), 0) 异常量
      from dm_order_main t1
      left join dm_order_main_ext t2
        on t1.order_no = t2.order_no
     where t1.promote_id = v_pid
       and (t1.create_time >= to_date(v_begin_time, 'YYYY/MM/DD') or
           v_begin_time is null)
       and (t1.create_time <= to_date(v_end_time, 'YYYY/MM/DD') or
           v_end_time is null);
  /*
    select count(*) 订单量,
           nvl(sum(decode(t1.bind_status, 0, 1, 0)), 0) 发货量,
           nvl(sum(decode(t2.activate_status, 0, 1, 0)), 0) 激活量,
           nvl(sum(decode(t1.bind_status, 90, 1, 0)), 0) 异常量
      from dm_order_main t
      left join dm_order_bind t1
        on t.order_no = t1.order_no
      left join dm_order_bind_ext t2
        on t2.bind_id = t1.bind_id
     where t.promoter_id = v_pid
       and (t.create_time >= TO_DATE(v_begin_time, 'YYYY/MM/DD') or
           v_begin_time is null)
       and (t.create_time <= TO_DATE(v_end_time, 'YYYY/MM/DD') or
           v_end_time is null);
  */
  v_out_errcode := error_code.success;
  v_out_msg     := '操作成功';
exception
  when others then
    v_out_errcode := error_code.failed;
    v_out_msg     := '操作失败' || sqlerrm;
    sp_system_log_add('sp_statics_diagram', 1, '过程异常: ' || sqlerrm);
end;
/

prompt
prompt Creating procedure SP_TEST
prompt ==========================
prompt
create or replace procedure dm_system.sp_test(v_product_no varchar2, -- 产品编号
                                    v_out_code   out number,
                                    v_out_msg    out varchar2) as
  -----------------------------------------------------------------------
  -- 功能: 测试用存储
  -----------------------------------------------------------------------

begin
  dbms_output.put_line('--测试开始---');

end;
/

prompt
prompt Creating procedure SP_VCODE1_CREATE
prompt ===================================
prompt
create or replace procedure dm_system.sp_vcode1_create(v_phone_no     varchar2, -- 办理人手机号
                                             v_promote_guid varchar2, -- 推广GUID
                                             v_user_ip      varchar2, -- 用户IP
                                             v_out_code     out number, -- 错误码
                                             v_out_msg      out varchar2, -- 错误消息
                                             v_out_json     out varchar2) -- 验证码队列参数
 as
  -----------------------------------------------------------------------
  -- 功能: 首次发送验证码(平台发送)
  -- 创建人: zhusm 2019-08-26
  -----------------------------------------------------------------------
  l_count       number;
  l_carrier_no  varchar2(32);
  l_province_no varchar2(10);
  l_city_no     varchar2(10);
  l_term_no     varchar2(32);
  l_term_prd_no varchar2(32);
  l_busi_type   number;
  l_order_no    varchar2(32);
  l_serial_no   number;
  l_vcode       varchar2(6);
  l_template_id varchar2(256);

  l_promote_id  number;
  l_promoter_id number;
  l_label_id    number;
  l_temp        varchar2(256) := '';

begin

  -- 检查参数
  if (v_phone_no is null or v_promote_guid is null or v_user_ip is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传参数为空';
    return;
  end if;

  -- 获取号段
  if (not f_num_section_get(v_phone_no, v_out_msg, l_carrier_no, l_province_no, l_city_no)) then
    v_out_code := error_code.failed;
    return;
  end if;

  -- 检查推广
  select min(t.term_no)
    into l_term_no
    from dm_term_promote t
   where t.promote_guid = v_promote_guid
     and t.status = enable_status.enabled;

  if (l_term_no is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '推广不存在或未启用';
    return;
  end if;

  -- 限制频率
  select count(1)
    into l_count
    from dm_order_vcode t
   where t.phone_no = v_phone_no
     and t.term_no = l_term_no
     and t.create_time > sysdate - 1 / 24 / 60;

  if (l_count >= 1) then
    v_out_code := error_code.failed;
    v_out_msg  := '操作太快，稍后再试';
    return;
  end if;

  -- 限制IP
  select count(1)
    into l_count
    from dm_order_vcode t
   where t.user_ip = v_user_ip
     and t.create_time > sysdate - 1 / 24 / 60;

  if (l_count >= 5) then
    v_out_code := error_code.failed;
    v_out_msg  := 'IP超过限制，稍后再试';
    return;
  end if;

  -- 检查终端推广
  if (not f_check_term_promote(l_term_no,
                               v_promote_guid,
                               v_out_msg,
                               l_promote_id,
                               l_promoter_id,
                               l_label_id)) then
    v_out_code := error_code.failed;
    return;
  end if;

  -- 添加记录
  l_order_no    := f_order_no_create();
  l_serial_no   := seq_vcode_serial_no.nextval;
  l_vcode       := trunc(dbms_random.value(100000, 999999));
  l_template_id := '【验证码】您的验证码为：' || l_vcode || '，5分钟内有效。';
  insert into dm_order_vcode
    (order_no,
     term_no,
     term_product_no,
     phone_no,
     business_type,
     carrier_no,
     province_no,
     city_no,
     promote_id,
     promoter_id,
     label_id,
     vcode,
     template_id,
     send_status,
     verify_state,
     serial_no,
     user_ip)
  values
    (l_order_no,
     l_term_no,
     l_term_prd_no,
     v_phone_no,
     l_busi_type,
     l_carrier_no,
     l_province_no,
     l_city_no,
     l_promote_id,
     l_promoter_id,
     l_label_id,
     l_vcode,
     l_template_id,
     deal_status.processing,
     deal_status.waiting,
     l_serial_no,
     v_user_ip);
  l_temp     := f_json_add(l_temp, 'que_name', 'DM:TERM:VCODE1');
  l_temp     := f_json_add(l_temp, 'order_no', l_order_no);
  l_temp     := f_json_add(l_temp, 'serial_no', l_serial_no);
  l_temp     := f_json_add(l_temp, 'phone_no', v_phone_no);
  l_temp     := f_json_add(l_temp, 'content', l_template_id);
  l_temp     := f_json_add(l_temp, 'script_path', '../script/smsjk/vcode_send.lua');
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  v_out_json := '{' || l_temp || '}';
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常: ' || sqlerrm;
    sp_system_log_add('sp_vcode1_create', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_VCODE1_RETRY
prompt ==================================
prompt
create or replace procedure dm_system.sp_vcode1_retry(v_order_no varchar2, -- 订单号
                                            v_user_ip  varchar2, -- 用户IP
                                            v_out_code out number,
                                            v_out_msg  out varchar2,
                                            v_out_json out varchar2) -- 验证码队列参数: {"que_name":"","order_no":"","script_path":""}
 as
  -----------------------------------------------------------------------
  -- 功能: 重复发送验证码(平台发送)
  -- 创建人: zhusm 2019-08-26
  -----------------------------------------------------------------------
  l_order_no       varchar2(32);
  l_phone_no       varchar2(24);
  l_next_send_time date;
  l_send_times     number;
  l_user_ip        varchar2(24);
  l_send_max       number := 3;
  l_order_status   number;
  l_vcode          varchar2(10);
  l_serial_no      number;
  l_template_id    varchar2(128);
  l_temp           varchar2(256) := '';

begin

  -- 检查参数
  if (v_order_no is null or v_user_ip is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '用户IP为空';
    return;
  end if;

  -- 检查发送记录
  begin
    select t.order_no,
           t.phone_no,
           t.next_send_time,
           t.send_times,
           t.user_ip
      into l_order_no,
           l_phone_no,
           l_next_send_time,
           l_send_times,
           l_user_ip
      from dm_order_vcode t
     where t.order_no = v_order_no;
  exception
    when others then
      v_out_code := error_code.failed;
      v_out_msg  := '非法订单拒绝处理';
      return;
  end;

  if (v_user_ip <> l_user_ip) then
    v_out_code := error_code.failed;
    v_out_msg  := '提交IP异常';
    return;
  end if;

  if (l_send_times > l_send_max) then
    v_out_code := error_code.overload;
    v_out_msg  := '发送次数超限';
    return;
  end if;

  if (l_next_send_time > sysdate) then
    v_out_code := error_code.failed;
    v_out_msg  := '发送频率太快';
    return;
  end if;

  -- 检查订单
  select max(t.order_status)
    into l_order_status
    from dm_order_main t
   where t.order_no = v_order_no;

  if (l_order_status is not null) then
    if (l_order_status = deal_status.succeed) then
      v_out_code := error_code.failed;
      v_out_msg  := '订单已经成功';
      return;
    end if;
    if (l_order_status <> deal_status.failed) then
      v_out_code := error_code.repeat;
      v_out_msg  := '存在在途订单';
      return;
    end if;
  end if;

  -- 重复发送
  l_serial_no   := seq_vcode_serial_no.nextval;
  l_vcode       := trunc(dbms_random.value(100000, 999999));
  l_template_id := '【验证码】您的验证码为：' || l_vcode || '，5分钟内有效。';
  update dm_order_vcode t
     set t.send_status    = deal_status.processing,
         t.result_msg     = null,
         t.finish_time    = null,
         t.serial_no      = l_serial_no,
         t.vcode          = l_vcode,
         t.template_id    = l_template_id,
         t.send_times     = t.send_times + 1,
         t.retry_times    = t.retry_times + 1,
         t.next_send_time = sysdate + 1 / 24 / 60,
         t.user_ip        = substr(v_user_ip, 1, 17),
         t.verify_state   = deal_status.waiting
   where t.order_no = l_order_no;
  -- 构造JSON

  l_temp := f_json_add(l_temp, 'que_name', 'DM:TERM:VCODE1');
  l_temp := f_json_add(l_temp, 'order_no', l_order_no);
  l_temp := f_json_add(l_temp, 'serial_no', l_serial_no);
  l_temp := f_json_add(l_temp, 'phone_no', l_phone_no);
  l_temp := f_json_add(l_temp, 'content', l_template_id);
  l_temp := f_json_add(l_temp,
                       'script_path',
                       '../script/smsjk/vcode_send.lua');

  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  v_out_json := '{' || l_temp || '}';
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常: ' || sqlerrm;
    sp_system_log_add('sp_vcode1_retry', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_VCODE1_VERIFY
prompt ===================================
prompt
create or replace procedure dm_system.sp_vcode1_verify(v_order_no varchar2, -- 订单号
                                             v_vcode    varchar2, -- 验证码
                                             v_user_ip  varchar2, -- 用户IP
                                             v_out_code out number, -- 错误码
                                             v_out_msg  out varchar2) -- 错误消息
 as
  -----------------------------------------------------------------------
  -- 功能: 校验短信验证码(平台发送)
  -- 创建人: zhusm 2019-08-26
  -----------------------------------------------------------------------
  l_send_status number;
  l_retry_times number;

  l_count number;

begin

  -- 检查参数
  if (v_order_no is null or v_vcode is null or v_user_ip is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传参数为空';
    return;
  end if;

  -- 检查订单
  select max(t.send_status), max(t.retry_times)
    into l_send_status, l_retry_times
    from dm_order_vcode t
   where t.order_no = v_order_no
     and t.verify_state = deal_status.waiting;

  if (l_send_status is null or l_retry_times is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '验证码未发送';
    return;
  end if;

  if (l_send_status <> deal_status.succeed) then
    v_out_code := error_code.failed;
    v_out_msg  := '验证码发送失败, 请重试';
    return;
  end if;

  if (l_retry_times > 3) then
    v_out_code := error_code.overload;
    v_out_msg  := '重试超过限制';
    return;
  end if;

  -- 检查提交IP
  select count(1)
    into l_count
    from dm_order_vcode t
   where t.order_no = v_order_no
     and t.user_ip = v_user_ip;
  if (l_count <= 0) then
    v_out_code := error_code.failed;
    v_out_msg  := '提交IP异常';
    return;
  end if;

  -- 检查验证码
  select count(1)
    into l_count
    from dm_order_vcode t
   where t.order_no = v_order_no
     and t.send_status = deal_status.succeed
     and t.verify_state = deal_status.waiting
     and t.vcode = v_vcode;
  if (l_count <= 0) then
    v_out_code := error_code.failed;
    v_out_msg  := '验证码错误';
    return;
  end if;

  -- 更新验证状态
  update dm_order_vcode t
     set t.verify_state = deal_status.succeed
   where t.order_no = v_order_no
     and t.send_status = deal_status.succeed
     and t.verify_state = deal_status.waiting;

  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常: ' || sqlerrm;
    sp_system_log_add('sp_vcode1_verify', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_VCODE2_CREATE
prompt ===================================
prompt
create or replace procedure dm_system.sp_vcode2_create(v_product_no   varchar2, -- 终端产品编号
                                             v_phone_no     varchar2, -- 办理人手机号
                                             v_promote_guid varchar2, -- 推广GUID
                                             v_user_ip      varchar2, -- 用户IP
                                             v_out_code     out number,
                                             v_out_msg      out varchar2,
                                             v_out_json     out varchar2) -- 验证码队列参数: {"que_name":"","order_no":"","script_path":""}
 as
  -----------------------------------------------------------------------
  -- 功能: 首次发送验证码(上游发送)
  -- 创建人: zhusm 2019-05-24
  -----------------------------------------------------------------------
  l_count         number;
  l_carrier_no    varchar2(32);
  l_province_no   varchar2(10);
  l_city_no       varchar2(10);
  l_term_no       varchar2(32);
  l_term_prd_no   varchar2(32);
  l_busi_type     number;
  l_face_fee      number;
  l_up_chnnl_no   varchar2(32);
  l_up_prd_no     varchar2(64);
  l_up_prd_price  number;
  l_need_delivery number;
  l_need_vcode    number;
  l_picture_mode  number;
  l_order_no      varchar2(32);
  l_script_id     number;
  l_script_path   varchar2(128);
  l_svc_code      varchar2(128);

  l_promote_id  number;
  l_promoter_id number;
  l_label_id    number;
  l_temp        varchar2(256) := '';

begin

  -- 检查参数
  if (v_product_no is null or v_phone_no is null or v_promote_guid is null or
     v_user_ip is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '必传参数为空';
    return;
  end if;

  -- 获取号段
  if (not f_num_section_get(v_phone_no,
                            v_out_msg,
                            l_carrier_no,
                            l_province_no,
                            l_city_no)) then
    v_out_code := error_code.failed;
    return;
  end if;

  -- 检查终端产品
  begin
    select term_no, product_no, business_type, face_fee
      into l_term_no, l_term_prd_no, l_busi_type, l_face_fee
      from (select t.term_no,
                   t.product_no,
                   t.business_type,
                   t.face_fee,
                   (decode(t.carrier_no, l_carrier_no, 2, 1) +
                   decode(t.province_no, l_province_no, 2, 1) +
                   decode(t.city_no, l_city_no, 2, 1)) priority
              from dm_term_product t
             where t.product_no = v_product_no
               and (t.carrier_no = l_carrier_no or t.carrier_no = '*')
               and (t.province_no = l_province_no or t.province_no = 'QG')
               and (t.city_no = l_city_no or t.city_no = '*')
               and t.status = enable_status.enabled
               and t.need_vcode = enable_status.enabled
             order by priority desc)
     where rownum = 1;
  exception
    when others then
      v_out_code := error_code.failed;
      v_out_msg  := '产品不支持或未启用';
      return;
  end;

  -- 检查终端
  select count(1)
    into l_count
    from dm_term_info t
   where t.term_no = l_term_no
     and t.status = enable_status.enabled;

  if (l_count <= 0) then
    v_out_code := error_code.failed;
    v_out_msg  := '终端不支持或未启用';
    return;
  end if;

  -- 检查终端推广
  if (not f_check_term_promote(l_term_no,
                               v_promote_guid,
                               v_out_msg,
                               l_promote_id,
                               l_promoter_id,
                               l_label_id)) then
    v_out_code := error_code.failed;
    return;
  end if;

  -- !!!陕西移动只能办理一次
  select count(1)
    into l_count
    from dm_order_main t
   where t.product_no = v_product_no
     and t.business_type = business_type.mob_flow
     and t.phone_no = v_phone_no
     and t.carrier_no = 'YD'
     and t.province_no = 'SX1'
     and t.order_status <> deal_status.failed;
  if (l_count > 0) then
    v_out_code := error_code.repeat;
    v_out_msg  := '不可重复办理';
    return;
  end if;

  -- 选择上游产品
  if (not f_bind_up_product(l_term_prd_no,
                            l_busi_type,
                            l_face_fee,
                            l_carrier_no,
                            l_province_no,
                            l_city_no,
                            l_up_chnnl_no,
                            l_up_prd_no,
                            l_up_prd_price,
                            l_need_delivery,
                            l_need_vcode,
                            l_picture_mode,
                            v_out_msg)) then
    rollback;
    v_out_code := error_code.failed;
    return;
  end if;

  -- 检查是否发货
  if (l_need_delivery = enable_status.disabled) then
    v_out_code := error_code.failed;
    v_out_msg  := '上游产品错误';
    return;
  end if;

  -- 获取脚本
  select t.script_id, t.script_path, t.service_code
    into l_script_id, l_script_path, l_svc_code
    from dm_up_script t
   where t.channel_no = l_up_chnnl_no
     and t.script_type = script_type.vcode_send;

  -- 添加记录
  l_order_no := f_order_no_create();
  insert into dm_order_vcode
    (order_no,
     term_no,
     term_product_no,
     up_channel_no,
     up_product_no,
     phone_no,
     business_type,
     carrier_no,
     province_no,
     city_no,
     promote_id,
     promoter_id,
     label_id,
     script_id,
     user_ip)
  values
    (l_order_no,
     l_term_no,
     l_term_prd_no,
     l_up_chnnl_no,
     l_up_prd_no,
     v_phone_no,
     l_busi_type,
     l_carrier_no,
     l_province_no,
     l_city_no,
     l_promote_id,
     l_promoter_id,
     l_label_id,
     l_script_id,
     v_user_ip);
  l_temp     := f_json_add(l_temp, 'que_name', l_svc_code);
  l_temp     := f_json_add(l_temp, 'order_no', l_order_no);
  l_temp     := f_json_add(l_temp, 'script_path', l_script_path);
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  v_out_json := '{' || l_temp || '}';
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常: ' || sqlerrm;
    sp_system_log_add('sp_vcode2_create', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_VCODE2_GET
prompt ================================
prompt
create or replace procedure dm_system.sp_vcode2_get(v_order_no varchar2, -- 订单号
                                          v_out_code out number,
                                          v_out_msg  out varchar2,
                                          v_out_json out varchar2) -- 机器人参数(JSON)
 as
  -----------------------------------------------------------------------
  -- 功能: 获取验证码参数(机器人发验证码参数)
  -- 创建人: zhusm 2019-05-24
  -----------------------------------------------------------------------
  l_phone_no    varchar2(32);
  l_up_chnnl_no varchar2(32);
  l_up_prd_id   varchar2(64);
  l_up_prd_no   varchar2(64);
  l_api_id      varchar2(128);
  l_api_key     varchar2(256);
  l_api_url     varchar2(256);
  l_script_path varchar2(256);
  l_temp        varchar2(2000) := '';
begin

  -- 检查订单
  begin
    select t.up_channel_no, t.up_product_no, t.phone_no
      into l_up_chnnl_no, l_up_prd_id, l_phone_no
      from dm_order_vcode t
     where t.order_no = v_order_no;
  exception
    when others then
      v_out_code := error_code.failed;
      v_out_msg  := '订单不存在';
      return;
  end;

  -- 获取渠道配置
  select t1.api_id, t1.api_key, t2.api_url, t2.script_path
    into l_api_id, l_api_key, l_api_url, l_script_path
    from dm_up_channel t1
   inner join dm_up_script t2
      on t1.channel_no = t2.channel_no
   where t1.channel_no = l_up_chnnl_no
     and t1.status = enable_status.enabled
     and t2.status = enable_status.enabled
     and t2.script_type = script_type.vcode_send;

  select t.up_product_no
    into l_up_prd_no
    from dm_up_product t
   where t.product_no = l_up_prd_id
     and t.status = enable_status.enabled;
  -- 更新发送状态

  update dm_order_vcode t
     set t.send_status = deal_status.processing
   where t.order_no = v_order_no
     and t.send_status = deal_status.waiting;

  -- 构造参数  
  l_temp     := f_json_add(l_temp, 'up_channel_no', l_up_chnnl_no);
  l_temp     := f_json_add(l_temp, 'up_product_no', l_up_prd_no);
  l_temp     := f_json_add(l_temp, 'api_id', l_api_id);
  l_temp     := f_json_add(l_temp, 'api_key', l_api_key);
  l_temp     := f_json_add(l_temp, 'api_url', l_api_url);
  l_temp     := f_json_add(l_temp, 'phone_no', l_phone_no);
  v_out_json := '{' || l_temp || '}';
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常: ' || sqlerrm;
    sp_system_log_add('sp_vcode2_get', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure SP_VCODE2_RETRY
prompt ==================================
prompt
create or replace procedure dm_system.sp_vcode2_retry(v_order_no varchar2, -- 订单号
                                            v_user_ip  varchar2, -- 用户IP
                                            v_out_code out number,
                                            v_out_msg  out varchar2,
                                            v_out_json out varchar2) -- 验证码队列参数: {"que_name":"","order_no":"","script_path":""}
 as
  -----------------------------------------------------------------------
  -- 功能: 重复发送验证码
  -- 创建人: zhusm 2019-05-26
  -----------------------------------------------------------------------
  l_order_no       varchar2(32);
  l_next_send_time date;
  l_send_times     number;
  l_script_id      number;
  l_send_max       number := 3;
  l_order_status   number;

  l_script_path varchar2(128);
  l_svc_code    varchar2(128);
  l_temp        varchar2(256) := '';

begin

  -- 检查参数
  if (v_user_ip is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '用户IP为空';
    return;
  end if;

  -- 检查发送记录
  select min(t.order_no),
         min(t.next_send_time),
         min(t.send_times),
         min(t.script_id)
    into l_order_no, l_next_send_time, l_send_times, l_script_id
    from dm_order_vcode t
   where t.order_no = v_order_no;

  if (l_order_no is null) then
    v_out_code := error_code.failed;
    v_out_msg  := '错误的订单号';
    return;
  end if;

  if (l_next_send_time > sysdate) then
    v_out_code := error_code.failed;
    v_out_msg  := '发送频率太快';
    return;
  end if;

  if (l_send_times >= l_send_max) then
    v_out_code := error_code.overload;
    v_out_msg  := '发送次数超限';
    return;
  end if;

  -- 检查订单
  select max(t.order_status)
    into l_order_status
    from dm_order_main t
   where t.order_no = v_order_no;

  if (l_order_status is not null) then
    if (l_order_status = deal_status.succeed) then
      v_out_code := error_code.failed;
      v_out_msg  := '订单已经成功';
      return;
    end if;

    if (l_order_status <> deal_status.failed) then
      v_out_code := error_code.repeat;
      v_out_msg  := '存在在途订单';
      return;
    end if;
  end if;

  -- 获取参数
  select t.script_path, t.service_code
    into l_script_path, l_svc_code
    from dm_up_script t
   where t.script_id = l_script_id;

  -- 重复发送
  update dm_order_vcode t
     set t.send_status    = deal_status.waiting,
         t.result_msg     = null,
         t.finish_time    = null,
         t.vcode          = null,
         t.send_times     = t.send_times + 1,
         t.next_send_time = sysdate + 1 / 24 / 60,
         t.user_ip        = substr(v_user_ip, 1, 17)
   where t.order_no = l_order_no;

  -- 构造JSON
  l_temp     := f_json_add(l_temp, 'que_name', l_svc_code);
  l_temp     := f_json_add(l_temp, 'order_no', l_order_no);
  l_temp     := f_json_add(l_temp, 'script_path', l_script_path);
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  v_out_json := '{' || l_temp || '}';
  commit;

exception
  when others then
    rollback;
    v_out_code := error_code.except;
    v_out_msg  := '过程异常: ' || sqlerrm;
    sp_system_log_add('sp_vcode2_retry', 1, v_out_msg);
end;
/

prompt
prompt Creating procedure T_SP_TEST_ZHU
prompt ================================
prompt
create or replace procedure dm_system.t_sp_test_zhu as
  -----------------------------------------------------------------------
  -- 功能: 测试删除订单数据
  -----------------------------------------------------------------------

begin

  -- 遍历数据
  for e in (select t.order_no
              from dm_order_main_ext t
             where t.card_user_id = '513021198410035216') loop
    -- 删除绑定数据
    for b in (select t.bind_id
                from dm_order_bind t
               where t.order_no = e.order_no) loop
      -- 删除dm_order_bind_ext数据
      delete from dm_order_bind_ext t where t.bind_id = b.bind_id;
      -- 删除dm_order_bind数据
      delete from dm_order_bind t where t.bind_id = b.bind_id;
    end loop;
    -- 删除订单数据
    delete from dm_order_main t where t.order_no = e.order_no;
    delete from dm_order_main_ext t where t.order_no = e.order_no;
  end loop;
  commit;

exception
  when others then
    rollback;
end;
/


prompt Done
spool off
set define on
