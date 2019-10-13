Creating function F_BACKUP_BIND
prompt ===============================
prompt
create or replace function dm_system.f_backup_bind(v_next_interval number,
                                         v_scan_max      number,
                                         v_out_count     out number,
                                         v_out_batch_no  out number,
                                         v_out_msg       out varchar2)
  return number is
  -----------------------------------------------------------------------
  -- 功能: 后补绑定
  -- 创建: zhusm 2019-09-29
  -----------------------------------------------------------------------
  l_order_no  varchar2(32);
  l_batch_cnt number := 0;

begin

  -- 扫描数据
  for r in (select t.order_no
              from dm_order_main t
             where t.order_status = deal_status.waiting
               and ((t.bind_next_time < sysdate and
                   t.bind_next_time > sysdate - 1) or
                   t.bind_next_time is null)
               and rownum <= v_scan_max) loop
    if (v_out_batch_no is null) then
      v_out_batch_no := seq_backup_batch_no.nextval;
    end if;
    -- 锁数据
    begin
      select t.order_no
        into l_order_no
        from dm_order_main t
       where t.order_no = r.order_no
         and t.order_status = deal_status.waiting
         for update nowait;
    exception
      when others then
        rollback;
        continue;
    end;
    -- 更新订单
    update dm_order_main t
       set t.bind_next_time = sysdate + v_next_interval / 24 / 60 / 60,
           t.bind_batch_no  = v_out_batch_no
     where t.order_no = r.order_no;
    l_batch_cnt := l_batch_cnt + 1;
  end loop;
  if (l_batch_cnt > 0) then
    v_out_msg   := '操作成功';
    v_out_count := l_batch_cnt;
    return error_code.success;
  else
    v_out_msg := '无后补绑定数据';
    return error_code.failed;
  end if;
end;
/

prompt
prompt Creating function F_ORDER_REFUND_ADD
prompt ====================================
prompt
create or replace function dm_system.f_order_refund_add(v_order_no      varchar2, -- 订单号
                                              v_refund_reason varchar2, -- 退款原因
                                              v_out_msg       out varchar2)
  return boolean is
  -------------------------------------------------------------------------
  -- 功能: 创建订单退款记录
  -- 创建: zhusm 2019-05-16
  -------------------------------------------------------------------------
  l_count         number;
  l_account_id    number;
  l_account_type  number;
  l_term_no       varchar2(32);
  l_pay_status    number;
  l_refund_fee    number;
  l_service_fee   number;
  l_plat_trade_no varchar2(64);
  l_service_code  varchar2(64);

begin

  -- 检查是否存在
  select count(1)
    into l_count
    from dm_order_refund t
   where t.order_no = v_order_no;
  if (l_count > 0) then
    v_out_msg := '退款记录已存在';
    return false;
  end if;
  -- 获取参数
  select t.term_no,
         t.pay_status,
         t.pay_price,
         t.service_fee,
         t.plat_trade_no,
         t.account_id
    into l_term_no,
         l_pay_status,
         l_refund_fee,
         l_service_fee,
         l_plat_trade_no,
         l_account_id
    from dm_order_main t
   where t.order_no = v_order_no
     and t.pay_status = deal_status.succeed;
  select t.account_type
    into l_account_type
    from dm_pay_account t
   where t.account_id = l_account_id;
  select t.service_code
    into l_service_code
    from dm_pay_script t
   where t.account_type = l_account_type
     and t.script_type = script_type.refund_apply;
  -- 插入记录
  insert into dm_order_refund
    (record_id,
     account_id,
     account_type,
     term_no,
     order_no,
     refund_fee,
     refund_reason,
     service_fee,
     plat_trade_no,
     service_code)
  values
    (seq_order_refund_id.nextval,
     l_account_id,
     l_account_type,
     l_term_no,
     v_order_no,
     l_refund_fee,
     substr(v_refund_reason, 1, 128),
     l_service_fee,
     l_plat_trade_no,
     l_service_code);
  return true;
exception
  when others then
    return false;
end;
/

prompt
prompt Creating function F_BIND_FAILD
prompt ==============================
prompt
create or replace function dm_system.f_bind_faild(v_order_no   in varchar2, -- 记录编号
                                        v_result_msg in varchar2, -- 结果消息
                                        v_out_msg    out varchar2) -- 结果消息
 return boolean is
  -----------------------------------------------------------------------
  -- 功能: 绑定失败
  -- 创建人: zhusm 2019-08-23
  -----------------------------------------------------------------------
  l_order_no   varchar2(32);
  l_pay_status number;
  l_err_code   number;
  l_err_desc   varchar2(64);

begin
  -- 锁订单
  select t.order_no, t.pay_status
    into l_order_no, l_pay_status
    from dm_order_main t
   where t.order_no = v_order_no
     and t.order_status = deal_status.waiting
     for update;
  -- 获取参数
  select t.order_code, t.order_desc
    into l_err_code, l_err_desc
    from dm_system_deal_code t
   where t.error_code = error_code.failed;
  -- 更新状态
  update dm_order_main t
     set t.order_status = deal_status.failed,
         t.result_msg   = v_result_msg,
         t.error_code   = l_err_code,
         t.error_desc   = l_err_desc,
         t.finish_time  = sysdate
   where t.order_no = l_order_no;
  -- 创建退款
  if (l_pay_status = deal_status.succeed) then
    return f_order_refund_add(l_order_no, '业务办理失败[001]', v_out_msg);
  end if;
  return true;

exception
  when others then
    return false;
end;
/

prompt
prompt Creating function F_BIND_ID_CREATE
prompt ==================================
prompt
create or replace function dm_system.f_bind_id_create return varchar2 is
  -----------------------------------------------------------------------
  -- 功能: 构造bind_id
  -- 创建人: zhusm 2019-05-25
  -----------------------------------------------------------------------
begin
  return to_char(sysdate, 'yymmddhh24miss') || seq_order_bind_id.nextval;
end;
/

prompt
prompt Creating function F_BIND_UP_PRODUCT
prompt ===================================
prompt
create or replace function dm_system.f_bind_up_product(v_product_no        varchar2, -- 终端产品编码
                                             v_busi_type         number, -- 业务类型
                                             v_face_fee          number, -- 面值
                                             v_carrier_no        varchar2, -- 运营商
                                             v_province_no       varchar2, -- 省份编码
                                             v_city_no           varchar2, -- 地市编码
                                             v_out_chnnl_no      out varchar2, -- 上游渠道编号
                                             v_out_prd_no        out varchar2, -- 上游产品编号
                                             v_out_prd_price     out number, -- 上游产品价格
                                             v_out_need_delivery out number, -- 是否需要发货
                                             v_out_need_vcode    out number, -- 是否需要验证码
                                             v_out_picture_mode  out number, -- 照片提交模式
                                             v_out_msg           out varchar2)
  return boolean is
  -----------------------------------------------------------------------
  -- 功能: 绑定上游产品
  -- 创建: zhusm 2019-05-25
  -- 修改: zhusm 2019-10-20 增加号卡不验证运营商/省份/地市逻辑
  -----------------------------------------------------------------------
begin
  -- 选择上游产品(暂只支持优先级)
  if (v_busi_type = business_type.tel_card) then
    -- 号卡不验证运营商/省份/地市
    for r in (select t1.channel_no,
                     t1.product_no,
                     t1.real_price,
                     t1.need_delivery,
                     t1.need_vcode,
                     t1.picture_mode
                from dm_up_product t1
               inner join dm_term_assign_up t2
                  on t1.channel_no = t2.up_channel_no
                 and t1.group_no = t2.up_group_no
               inner join dm_term_product t3
                  on t2.term_no = t3.term_no
                 and t2.term_group_no = t3.group_no
               where t3.product_no = v_product_no
                 and t1.status = enable_status.enabled
                 and (t1.business_type = v_busi_type or t1.business_type = 0)
                 and (t1.face_fee = v_face_fee or t1.face_fee = 0)
                 and t2.status = enable_status.enabled
                 and t2.division_mode = division_mode.priority
                 and t3.status = enable_status.enabled
               order by t2.division_value desc) loop
      v_out_chnnl_no      := r.channel_no;
      v_out_prd_no        := r.product_no;
      v_out_prd_price     := r.real_price;
      v_out_need_delivery := r.need_delivery;
      v_out_need_vcode    := r.need_vcode;
      v_out_picture_mode  := r.picture_mode;
      exit;
    end loop;
  else
    for r in (select t1.channel_no,
                     t1.product_no,
                     t1.real_price,
                     t1.need_delivery,
                     t1.need_vcode,
                     t1.picture_mode
                from dm_up_product t1
               inner join dm_term_assign_up t2
                  on t1.channel_no = t2.up_channel_no
                 and t1.group_no = t2.up_group_no
               inner join dm_term_product t3
                  on t2.term_no = t3.term_no
                 and t2.term_group_no = t3.group_no
               where t3.product_no = v_product_no
                 and t1.status = enable_status.enabled
                 and (t1.business_type = v_busi_type or t1.business_type = 0)
                 and (t1.face_fee = v_face_fee or t1.face_fee = 0)
                 and (t1.carrier_no = v_carrier_no or t1.carrier_no = '*')
                 and (t1.province_no = v_province_no or
                     t1.province_no = 'QG')
                 and (t1.city_no = v_city_no or t1.city_no = '*')
                 and t2.status = enable_status.enabled
                 and t2.division_mode = division_mode.priority
                 and t3.status = enable_status.enabled
               order by t2.division_value desc) loop
      v_out_chnnl_no      := r.channel_no;
      v_out_prd_no        := r.product_no;
      v_out_prd_price     := r.real_price;
      v_out_need_delivery := r.need_delivery;
      v_out_need_vcode    := r.need_vcode;
      v_out_picture_mode  := r.picture_mode;
      exit;
    end loop;
  end if;
  if (v_out_chnnl_no is null) then
    v_out_msg := '下游指定配置错误';
    return false;
  else
    v_out_msg := '操作成功';
    return true;
  end if;
end;
/

prompt
prompt Creating function F_CHAR_REPLACE
prompt ================================
prompt
create or replace function dm_system.f_char_replace(sourcestr in varchar2)
  return varchar2 is
  /*
     功能：替换特殊字符
     返回值：返回替换后的字符串
     作者：纪毅
  */
  l_tmp_str varchar2(4000);
begin
  l_tmp_str := sourcestr;
  l_tmp_str := replace(l_tmp_str, '"', '\"');
  l_tmp_str := translate(l_tmp_str, chr(13) || chr(10), ','); --替换换行符号
  return l_tmp_str;
end;
/

prompt
prompt Creating function F_CHECK_TERM_PROMOTE
prompt ======================================
prompt
create or replace function dm_system.f_check_term_promote(v_term_no         in varchar2, -- 终端编号
                                                v_promote_guid    in varchar2, -- 推广GUID                                                   
                                                v_out_msg         out varchar2, -- 结果消息    
                                                v_out_promote_id  out number, -- 推广编号                                            
                                                v_out_promoter_id out number, -- 推广人编号                                               
                                                v_out_label_id    out number) -- 用户标签编号
 return boolean is
  -----------------------------------------------------------------------
  -- 功能: 检查终端推广           (term-info) =>promote-info
  -- 创建人: zhusm 2019-06-03
  -- 修改人: zhusm 2019-09-03[增加推广URL判断]
  -----------------------------------------------------------------------
  l_entry_url   varchar2(256);
  l_promote_id  number;
  l_promoter_id number;
  l_label_id    number;
  l_promote_url varchar2(512);
  l_count       number;

begin

  -- 检查终端
  select max(t.entry_url)
    into l_entry_url
    from dm_term_info t
   where t.term_no = v_term_no
     and t.status = enable_status.enabled;
  if (l_entry_url is null) then
    v_out_msg := '终端未配置或未启用';
    return false;
  end if;
  -- 检查推广编号
  select max(t.promote_id), max(t.promoter_id), max(t.label_id), max(t.promote_url)
    into l_promote_id, l_promoter_id, l_label_id, l_promote_url
    from dm_term_promote t
   where t.term_no = v_term_no
     and t.promote_guid = v_promote_guid
     and t.status = enable_status.enabled;
  if (l_promote_id is null) then
    v_out_msg := '推广人未配置或未启用';
    return false;
  end if;
  -- 检查终端推广人
  select count(1)
    into l_count
    from dm_promoter_info t
   where t.promoter_id = l_promoter_id
     and t.status = enable_status.enabled;
  if (l_count <= 0) then
    v_out_msg := '终端推广人未配置或未启用';
    return false;
  end if;
  -- 检查推广地址
  if (lower(l_promote_url) <> lower(l_entry_url) || lower(v_promote_guid)) then
    v_out_msg := '推广地址非法';
    return false;
  end if;
  v_out_msg         := '操作成功';
  v_out_promote_id  := l_promote_id;
  v_out_promoter_id := l_promoter_id;
  v_out_label_id    := l_label_id;
  return true;
end;
/

prompt
prompt Creating function F_CHECK_VCODE1_ORDER
prompt ======================================
prompt
create or replace function dm_system.f_check_vcode1_order(v_order_no  varchar2, -- 订单号
                                                v_server_ip varchar2, -- 服务端IP
                                                v_user_ip   varchar2, -- 客户端IP
                                                v_out_code  out varchar2, -- 错误码
                                                v_out_msg   out varchar2) -- 错误消息
 return boolean is
  -------------------------------------------------------------------------
  -- 检查验证码订单      (order-number,server-ip,user-ip)=>vcode status
  -- 创建人: zhusm 2019-05-24
  -------------------------------------------------------------------------
  l_order_no     varchar2(64);
  l_send_status  number;
  l_verify_state number;
  l_retry_times  number;
  l_user_ip      varchar2(32);
  l_create_time  date;
  l_order_status number;

begin

  -- 检查前置条件
  begin
    select t.order_no, t.send_status, t.verify_state, t.retry_times, t.user_ip, t.create_time
      into l_order_no, l_send_status, l_verify_state, l_retry_times, l_user_ip, l_create_time
      from dm_order_vcode t
     where t.order_no = v_order_no;
  exception
    when others then
      v_out_code := error_code.failed;
      v_out_msg  := '验证码未发送';
      return false;
  end;
  if (l_user_ip <> v_user_ip) then
    v_out_code := error_code.failed;
    v_out_msg  := '异常IP拒绝提交';
    return false;
  end if;
  if (l_send_status <> deal_status.succeed) then
    v_out_code := error_code.failed;
    v_out_msg  := '验证码发送失败';
    return false;
  end if;
  if (sysdate > l_create_time + 5 / 24 / 60) then
    v_out_code := error_code.failed;
    v_out_msg  := '验证码已失效';
    return false;
  end if;
  if (l_verify_state <> deal_status.succeed) then
    v_out_code := error_code.failed;
    v_out_msg  := '验证码不正确';
    return false;
  end if;

  if (l_retry_times >= 3) then
    v_out_code := error_code.overload;
    v_out_msg  := '重试超限';
    return false;
  end if;
  -- 检查订单
  select max(t.order_status)
    into l_order_status
    from dm_order_main t
   where t.order_no = l_order_no;
  if (l_order_status is null) then
    v_out_code := error_code.success;
    v_out_msg  := '订单无记录';
    return true;
  end if;
  if (l_order_status = deal_status.succeed) then
    v_out_code := error_code.done;
    v_out_msg  := '已经办理';
    return false;
  end if;
  if (l_order_status <> deal_status.failed) then
    v_out_code := error_code.repeat;
    v_out_msg  := '存在在途订单';
    return false;
  end if;
  -- 失败订单(重试)
  update dm_order_main t
     set t.order_status = deal_status.processing,
         t.error_code   = null,
         t.error_desc   = null,
         t.user_ip      = v_user_ip,
         t.server_ip    = v_server_ip
   where t.order_no = l_order_no
     and t.order_status = deal_status.failed;
  -- 更新重试次数
  update dm_order_vcode t set t.retry_times = t.retry_times + 1 where t.order_no = l_order_no;
  -- 构造JSON
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  return false;
end;
/

prompt
prompt Creating function F_JSON_ADD
prompt ============================
prompt
create or replace function dm_system.f_json_add(v_data  varchar2,
                                      v_name  varchar2,
                                      v_value varchar2) return varchar2 is
  --=====================================
  --主要功能:添加json的item
  --创建人:兰长勇
  --创建时间:2018-08-23
  --=====================================
begin
  if (v_data is null) then
    return v_data || '"' || v_name || '":"' || f_char_replace(v_value) || '"';
  else
    return v_data || ',"' || v_name || '":"' || f_char_replace(v_value) || '"';
  end if;
end;
/

prompt
prompt Creating function F_CHECK_VCODE2_ORDER
prompt ======================================
prompt
create or replace function dm_system.f_check_vcode2_order(v_order_no  varchar2,
                                                v_server_ip varchar2,
                                                v_user_ip   varchar2,
                                                v_out_code  out varchar2,
                                                v_out_msg   out varchar2,
                                                v_out_json  out varchar2) -- 发货队列值:{"que_name":"","bind_id":"","script_path":""}
 return boolean is
  -------------------------------------------------------------------------
  -- 检查验证码订单
  -- 创建人: zhusm 2019-05-24
  -------------------------------------------------------------------------
  l_send_status  number;
  l_retry_times  number;
  l_order_status number;
  l_bind_id      varchar2(32);
  l_script_path  varchar2(128);
  l_svc_code     varchar2(128);
  l_term_no      varchar2(32);
  l_term_prd_no  varchar2(32);

  l_temp varchar2(256) := '';

begin
  -- 查询验证码
  begin
    select t.term_no, t.term_product_no, t.send_status, t.retry_times
      into l_term_no, l_term_prd_no, l_send_status, l_retry_times
      from dm_order_vcode t
     where t.order_no = v_order_no;
  exception
    when others then
      v_out_code := error_code.failed;
      v_out_msg  := '验证码未发送';
      return false;
  end;
  if (l_send_status <> deal_status.succeed) then
    v_out_code := error_code.failed;
    v_out_msg  := '验证码发送失败';
    return false;
  end if;
  -- 查询订单
  begin
    select t.order_status into l_order_status from dm_order_main t where t.order_no = v_order_no;
  exception
    when others then
      v_out_code := error_code.success;
      v_out_msg  := '订单无记录';
      return true;
  end;
  -- 已办理成功
  if (l_order_status = deal_status.succeed) then
    v_out_code := error_code.done;
    v_out_msg  := '已经办理';
    return false;
  end if;
  -- 重试超限
  if (l_retry_times >= 3) then
    v_out_code := error_code.overload;
    v_out_msg  := '重试超限';
    return false;
  end if;
  -- 非失败状态
  if (l_order_status <> deal_status.failed) then
    v_out_code := error_code.repeat;
    v_out_msg  := '存在在途订单';
    return false;
  end if;
  -- 失败订单(重试)
  select t1.bind_id, t2.script_path, t2.service_code
    into l_bind_id, l_script_path, l_svc_code
    from dm_order_bind t1
   inner join dm_up_script t2
      on t1.script_id = t2.script_id
   where t1.order_no = v_order_no;
   
  update dm_order_main t
     set t.order_status = deal_status.processing,
         t.error_code   = null,
         t.error_desc   = null,
         t.user_ip      = v_user_ip,
         t.server_ip    = v_server_ip
   where t.order_no = v_order_no
     and t.order_status = deal_status.failed;
  update dm_order_bind t
     set t.bind_status    = deal_status.waiting,
         t.robot_ip       = null,
         t.result_msg     = null,
         t.next_bind_time = sysdate
   where t.bind_id = l_bind_id
     and t.bind_status = deal_status.failed;
  -- 更新重试次数
  update dm_order_vcode t set t.retry_times = t.retry_times + 1 where t.order_no = v_order_no;
  -- 构造JSON
  l_temp     := f_json_add(l_temp, 'que_name', l_svc_code);
  l_temp     := f_json_add(l_temp, 'bind_id', l_bind_id);
  l_temp     := f_json_add(l_temp, 'script_path', l_script_path);
  v_out_code := error_code.success;
  v_out_msg  := '操作成功';
  v_out_json := '{' || l_temp || '}';
  return false;
end;
/

prompt
prompt Creating function F_ORDER_NOTIFY_ADD
prompt ====================================
prompt
create or replace function dm_system.f_order_notify_add(v_order_no    varchar2, -- 订单号
                                              v_notify_type number, -- 通知类型
                                              v_out_msg     out varchar2)
  return boolean is
  -------------------------------------------------------------------------
  -- 功能: 创建订单通知记录
  -- 创建: zhusm 2019-09-11
  -------------------------------------------------------------------------
  l_promote_id  number;
  l_busi_type   number;
  l_need_notify number;
  l_script_id   number;
  l_svc_code    varchar2(128);
  l_max_times   number;

begin
  -- 获取订单参数
  select t.promote_id, t.business_type
    into l_promote_id, l_busi_type
    from dm_order_main t
   where t.order_no = v_order_no;
  -- 检查是否需要通知
  select t.need_notify
    into l_need_notify
    from dm_term_promote t
   where t.promote_id = l_promote_id;
  if (l_need_notify = enable_status.disabled) then
    v_out_msg := '无需通知';
    return true;
  end if;
  -- 获取脚本参数
  begin
    select a.record_id, a.service_code, a.notify_max_times
      into l_script_id, l_svc_code, l_max_times
      from (select t.record_id, t.service_code, t.notify_max_times
              from dm_term_script t
             where t.promote_id = l_promote_id
               and (t.business_type = l_busi_type or t.business_type = 0)
               and (t.notify_type = v_notify_type or t.notify_type = 0)
               and t.status = enable_status.enabled
             order by t.business_type desc) a
     where rownum <= 1;
  exception
    when others then
      v_out_msg := '通知脚本未配置';
      return true;
  end;
  -- 添加记录
  insert into dm_order_notify
    (record_id,
     promote_id,
     order_no,
     notify_type,
     notify_max_times,
     script_id,
     service_code)
  values
    (seq_term_script_id.nextval,
     l_promote_id,
     v_order_no,
     v_notify_type,
     l_max_times,
     l_script_id,
     l_svc_code);
  v_out_msg := '操作成功';
  return true;

exception
  when others then
    v_out_msg := sqlerrm;
    return false;
end;
/

prompt
prompt Creating function F_DELIVERY_FAILED
prompt ===================================
prompt
create or replace function dm_system.f_delivery_failed(v_bind_id     varchar2,
                                             v_order_no    varchar2,
                                             v_term_prd_no varchar2,
                                             v_pay_status  number,
                                             v_result_msg  varchar2,
                                             v_order_code  number,
                                             v_order_desc  varchar2,
                                             v_out_msg     out varchar2)
  return boolean is
  -----------------------------------------------------------------------
  -- 功能: 发货失败
  -- 创建人: zhusm 2019-05-25
  -----------------------------------------------------------------------
  l_term_mode number;
begin
  -- 获取参数
  select t.deduct_mode
    into l_term_mode
    from dm_term_product t
   where t.product_no = v_term_prd_no;
  -- 更新绑定
  update dm_order_bind t
     set t.bind_status          = deal_status.failed,
         t.manual_status        = deal_status.noneed,
         t.finish_time          = sysdate,
         t.delivery_finish_time = sysdate
   where t.bind_id = v_bind_id;
  -- 更新订单
  update dm_order_main t
     set t.order_status  = deal_status.failed,
         t.manual_status = deal_status.noneed,
         t.result_msg    = nvl(substr(v_result_msg, 1, 128), t.result_msg),
         t.error_code    = v_order_code,
         t.error_desc    = v_order_desc,
         t.finish_time   = sysdate
   where t.order_no = v_order_no;
  -- 关闭查询
  update dm_order_query t
     set t.status      = deal_status.noneed,
         t.finish_time = sysdate,
         t.result_msg  = '自动关闭:发货失败'
   where t.bind_id = v_bind_id;
  -- 创建通知
  if (not f_order_notify_add(v_order_no, notify_type.order_state, v_out_msg)) then
    return false;
  end if;
  -- 创建退款
  if (v_pay_status = deal_status.succeed) then
    return f_order_refund_add(v_order_no, '业务办理失败[002]', v_out_msg);
  end if;
  v_out_msg := '操作成功';
  return true;
exception
  when others then
    v_out_msg := sqlerrm;
    return false;
end;
/

prompt
prompt Creating function F_TERM_FUND_CHANGE_ADD
prompt ========================================
prompt
create or replace function dm_system.f_term_fund_change_add(v_term_no      varchar2, -- 终端编号
                                                  v_order_no     varchar2, -- 订单号
                                                  v_change_type  number, -- 变动类型: 1-收款 2-退款
                                                  v_change_money number, -- 变动金额
                                                  v_operator     varchar2, -- 操作人
                                                  v_remark       varchar2, -- 备注
                                                  v_out_msg      out varchar2)
  return boolean is
  -------------------------------------------------------------------------
  -- 功能: 创建终端资金变动
  -- 创建: zhusm 2019-05-27
  -------------------------------------------------------------------------
  l_count        number;
  l_change_money number;
  l_balance      number;

begin
  -- 检查参数
  if (v_term_no is null or v_order_no is null or v_change_money is null or
     v_operator is null or v_remark is null) then
    v_out_msg := '参数不能为空';
    return false;
  end if;
  if (v_change_type not in
     (change_type.income, change_type.deduct, change_type.refund)) then
    v_out_msg := '变动类型不支持';
    return false;
  end if;
  if (v_change_money = 0) then
    v_out_msg := '变动金额为零';
    return true;
  end if;
  -- 检查是否存在
  select count(1)
    into l_count
    from dm_term_fund_change t
   where t.order_no = v_order_no
     and t.change_type = v_change_type;
  if (l_count >= 1) then
    v_out_msg := '变动记录已存在';
    return false;
  end if;
  -- 参数转化
  if (v_change_type = change_type.deduct) then
    l_change_money := abs(v_change_money) * -1;
  else
    l_change_money := abs(v_change_money);
  end if;
  -- 获取余额
  select t.balance
    into l_balance
    from dm_term_info t
   where t.term_no = v_term_no
     for update;
  -- 添加数据
  insert into dm_term_fund_change
    (record_id,
     term_no,
     order_no,
     change_type,
     change_money,
     before_balance,
     after_balance,
     change_time,
     operator,
     remark)
  values
    (seq_term_fund_change_id.nextval,
     v_term_no,
     v_order_no,
     v_change_type,
     l_change_money,
     l_balance,
     l_balance + l_change_money,
     sysdate,
     v_operator,
     v_remark);
  update dm_term_info t
     set t.balance = t.balance + l_change_money
   where t.term_no = v_term_no;
  v_out_msg := '操作成功';
  return true;
end;
/

prompt
prompt Creating function F_UP_FUND_CHANGE_ADD
prompt ======================================
prompt
create or replace function dm_system.f_up_fund_change_add(v_channel_no   varchar2, -- 渠道编号
                                                v_order_no     varchar2, -- 订单号
                                                v_bind_id      number, -- 绑定编号
                                                v_change_type  number, -- 变动类型: 1-收款 2-退款
                                                v_change_money number, -- 变动金额
                                                v_operator     varchar2, -- 操作人
                                                v_remark       varchar2, -- 备注
                                                v_out_msg      out varchar2)
  return boolean is
  -------------------------------------------------------------------------
  -- 功能: 创建上游资金变动
  -- 创建: zhusm 2019-05-27
  -------------------------------------------------------------------------
  l_count        number;
  l_change_money number;
  l_balance      number;

begin
  -- 检查参数
  if (v_channel_no is null or v_order_no is null or v_bind_id is null or
     v_change_money is null or v_operator is null or v_remark is null) then
    v_out_msg := '参数不能为空';
    return false;
  end if;
  if (v_change_type not in
     (change_type.income, change_type.deduct, change_type.refund)) then
    v_out_msg := '变动类型不支持';
    return false;
  end if;
  if (v_change_money = 0) then
    v_out_msg := '变动金额为零';
    return true;
  end if;

  -- 检查是否存在
  select count(1)
    into l_count
    from dm_up_fund_change t
   where t.order_no = v_order_no
     and t.bind_id = v_bind_id
     and t.change_type = v_change_type;

  if (l_count >= 1) then
    v_out_msg := '变动记录已存在';
    return false;
  end if;

  -- 参数转化
  if (v_change_type = change_type.deduct) then
    l_change_money := abs(v_change_money) * -1;
  else
    l_change_money := abs(v_change_money);
  end if;

  -- 获取余额
  select t.balance
    into l_balance
    from dm_up_channel t
   where t.channel_no = v_channel_no
     for update;

  -- 添加数据
  insert into dm_up_fund_change
    (record_id,
     bind_id,
     order_no,
     channel_no,
     change_type,
     change_money,
     before_balance,
     after_balance,
     change_time,
     operator,
     remark)
  values
    (seq_up_fund_change_id.nextval,
     v_bind_id,
     v_order_no,
     v_channel_no,
     v_change_type,
     l_change_money,
     l_balance,
     l_balance + l_change_money,
     sysdate,
     v_operator,
     v_remark);
  update dm_up_channel t
     set t.balance = t.balance + l_change_money
   where t.channel_no = v_channel_no;
  v_out_msg := '操作成功';
  return true;
end;
/

prompt
prompt Creating function F_DELIVERY_SUCCEED
prompt ====================================
prompt
create or replace function dm_system.f_delivery_succeed(v_bind_id     varchar2,
                                              v_order_no    varchar2,
                                              v_up_chnnl_no varchar2,
                                              v_up_price    number,
                                              v_term_prd_no varchar2,
                                              v_result_msg  varchar2,
                                              v_order_code  number,
                                              v_order_desc  varchar2,
                                              v_out_msg     out varchar2)
  return boolean is
  -----------------------------------------------------------------------
  -- 功能: 发货成功
  -- 创建人: zhusm 2019-05-25
  -----------------------------------------------------------------------
  l_term_mode  number;
  l_term_no    varchar2(32);
  l_term_price number;

begin

  -- 获取参数
  select t.deduct_mode, t.term_no, t.pay_price
    into l_term_mode, l_term_no, l_term_price
    from dm_term_product t
   where t.product_no = v_term_prd_no;

  -- 更新绑定
  update dm_order_bind t
     set t.bind_status          = deal_status.succeed,
         t.manual_status        = deal_status.noneed,
         t.finish_time          = sysdate,
         t.delivery_finish_time = sysdate
   where t.bind_id = v_bind_id;

  -- 更新订单
  update dm_order_main t
     set t.order_status  = deal_status.succeed,
         t.manual_status = deal_status.noneed,
         t.result_msg    = nvl(substr(v_result_msg, 1, 128), t.result_msg),
         t.error_code    = v_order_code,
         t.error_desc    = v_order_desc, -- 显示给下游的结果消息保持不变
         t.finish_time   = sysdate
   where t.order_no = v_order_no;

  -- 关闭查询
  update dm_order_query t
     set t.status      = deal_status.noneed,
         t.finish_time = sysdate,
         t.result_msg  = '自动关闭:发货成功'
   where t.bind_id = v_bind_id;

  -- 创建通知
  if (not f_order_notify_add(v_order_no, notify_type.order_state, v_out_msg)) then
    return false;
  end if;

  -- 增加资金变动
  if (not f_up_fund_change_add(v_up_chnnl_no,
                               v_order_no,
                               v_bind_id,
                               change_type.deduct,
                               v_up_price,
                               '_system',
                               '办理成功扣款',
                               v_out_msg)) then
    return false;
  end if;

  if (l_term_mode = deduct_mode.later) then
    if (not f_term_fund_change_add(l_term_no,
                                   v_order_no,
                                   change_type.deduct,
                                   l_term_price,
                                   '_system',
                                   '办理成功扣款[后扣款]',
                                   v_out_msg)) then
      return false;
    end if;
  end if;

  v_out_msg := '操作成功';
  return true;

exception
  when others then
    v_out_msg := sqlerrm;
    return false;
end;
/

prompt
prompt Creating function F_NUM_SECTION_GET
prompt ===================================
prompt
create or replace function dm_system.f_num_section_get(v_phone_no     in varchar2,
                                             v_out_msg      out varchar2,
                                             v_out_carrier  out varchar2,
                                             v_out_province out varchar2,
                                             v_out_city     out varchar2)
  return boolean is
  -----------------------------------------------------------------------
  -- 功能: 获取手机号号段
  -- 创建人: zhusm 2019-05-30
  -----------------------------------------------------------------------
  
begin
  begin
   
    select t.carrier_no, t.province_no, t.city_no
      into v_out_carrier, v_out_province, v_out_city
      from dm_system_num_section t
     where t.section = substr(v_phone_no, 1, 7)
       and t.enable = enable_status.enabled;

  exception
    when others then
      v_out_msg := '号段不支持或未启用';
      return false;
  end;
  v_out_msg := '操作成功';
  return true;
end;
/

prompt
prompt Creating function F_ORDER_NO_CREATE
prompt ===================================
prompt
create or replace function dm_system.f_order_no_create return varchar2 is
  -----------------------------------------------------------------------
  -- 功能: 创建订单号
  -- 创建人: zhusm 2019-05-25
  -----------------------------------------------------------------------
begin
  return 'D' || to_char(sysdate, 'yymmddhh24miss') || seq_order_main_id.nextval;
end;
/

prompt
prompt Creating function F_PAY_ACCOUNT_GET
prompt ===================================
prompt
create or replace function dm_system.f_pay_account_get(v_term_no        in varchar2, -- 终端编号
                                             v_account_type   in number, -- 支付类型: 1-支付宝 2-微信
                                             v_out_msg        out varchar2, -- 结果消息
                                             v_out_account_id out number) -- 支付账号编号
 return boolean is
  -----------------------------------------------------------------------
  -- 功能: 获取收款账号(选择优先级最高的一个)
  -- 创建人: zhusm 2019-06-02
  -----------------------------------------------------------------------

begin
  begin
    /*
      -- 方法1
      select a.account_id
        into v_out_account_id
        from dm_pay_account a
       inner join (select t.account_id, t.term_no
                     from (select t1.account_id, t2.term_no
                             from dm_pay_account t1
                            inner join dm_term_pay_account t2
                               on t1.account_id = t2.account_id
                            where t1.status = enable_status.enabled
                              and t1.account_type = v_account_type
                              and t2.status = enable_status.enabled
                              and t2.account_type = v_account_type
                              and t2.term_no = v_term_no
                              and rownum <= 1
                            order by t2.priority desc) t) b
          on a.account_id = b.account_id
       inner join dm_term_info c
          on c.term_no = b.term_no
       where a.account_type = v_account_type
         and a.status = enable_status.enabled
         and c.term_no = v_term_no
         and c.status = enable_status.enabled;
    */
    -- 方法2
    select t.account_id
      into v_out_account_id
      from (select row_number() over(partition by a.account_type order by b.priority desc) row_num,
                   a.account_id
              from dm_pay_account a
             inner join dm_term_pay_account b
                on a.account_id = b.account_id
             inner join dm_term_info c
                on c.term_no = b.term_no
             where a.account_type = v_account_type
               and a.status = enable_status.enabled
               and b.term_no = v_term_no
               and b.status = enable_status.enabled
               and c.status = enable_status.enabled) t
     where t.row_num <= 1;
    v_out_msg := '操作成功';
    return true;
  exception
    when others then
      v_out_msg := '终端账号不存在或未启用';
      return false;
  end;
end;
/

prompt
prompt Creating function F_PAY_FUND_CHANGE_ADD
prompt =======================================
prompt
create or replace function dm_system.f_pay_fund_change_add(v_term_no      varchar2, -- 终端编号
                                                 v_order_no     varchar2, -- 订单号
                                                 v_account_id   number, -- 账号编号
                                                 v_change_type  number, -- 变动类型: 1-收款 2-退款 3-提现
                                                 v_change_money number, -- 变动金额
                                                 v_service_fee  number, -- 手续费
                                                 v_operator     varchar2, -- 操作人
                                                 v_remark       varchar2, -- 备注
                                                 v_out_msg      out varchar2)
  return boolean is
  -------------------------------------------------------------------------
  -- 功能: 创建支付账号资金变动记录
  -- 创建: zhusm 2019-05-16
  -------------------------------------------------------------------------
  l_count        number;
  l_change_money number;
  l_balance      number;

begin
  -- 检查参数
  if (v_term_no is null or v_order_no is null or v_account_id is null or
     v_change_money is null or v_service_fee is null or v_operator is null or
     v_remark is null) then
    v_out_msg := '参数不能为空';
    return false;
  end if;
  if (v_change_type not in (change_type.income,
                            change_type.deduct,
                            change_type.refund,
                            change_type.withdraw)) then
    v_out_msg := '变动类型不支持';
    return false;
  end if;  
  if (v_change_money = 0) then
    v_out_msg := '变动金额为零';
    return true;
  end if;  
  -- 检查是否存在
  select count(1)
    into l_count
    from dm_pay_fund_change t
   where t.order_no = v_order_no
     and t.change_type = v_change_type;
  if (l_count >= 1) then
    v_out_msg := '变动记录已存在';
    return false;
  end if;
  
  -- 参数转化
  if (v_change_type in (change_type.income, change_type.refund)) then
    l_change_money := abs(v_change_money);
  else
    l_change_money := abs(v_change_money) * -1;
  end if;

  -- 获取余额
  select t.balance
    into l_balance
    from dm_pay_account t
   where t.account_id = v_account_id
     for update nowait;

  -- 添加数据
  insert into dm_pay_fund_change
    (record_id,
     term_no,
     order_no,
     account_id,
     change_type,
     change_money,
     service_fee,
     before_balance,
     after_balance,
     change_time,
     operator,
     remark)
  values
    (seq_pay_fund_change_id.nextval,
     v_term_no,
     v_order_no,
     v_account_id,
     v_change_type,
     l_change_money,
     v_service_fee,
     l_balance,
     l_balance + l_change_money,
     sysdate,
     v_operator,
     v_remark);
  v_out_msg := '操作成功';
  return true;
end;
/

prompt
prompt Creating function F_PAY_RESULT_FAILED
prompt =====================================
prompt
create or replace function dm_system.f_pay_result_failed(v_order_no varchar2,
                                               v_out_msg  out varchar2)
  return boolean is
  -----------------------------------------------------------------------
  -- 功能: 支付失败
  -- 创建人: zhusm 2019-05-30
  -----------------------------------------------------------------------
  l_err_code number;
  l_err_desc varchar2(128);

begin

  -- 获取参数
  select t.order_code, t.order_desc
    into l_err_code, l_err_desc
    from dm_system_deal_code t
   where t.error_code = error_code.failed;
  
  -- 更新订单
  update dm_order_main t
     set t.pay_status    = deal_status.failed,
         t.order_status  = deal_status.failed,
         t.manual_status = deal_status.noneed,
         t.succ_money    = 0,
         t.error_code    = nvl(l_err_code, t.error_code),
         t.error_desc    = nvl(l_err_desc, t.error_desc),
         t.pay_finish_time = sysdate
   where t.order_no = v_order_no;

  v_out_msg := '操作成功';
  return true;
end;
/

prompt
prompt Creating function F_PAY_RESULT_SUCCEED
prompt ======================================
prompt
create or replace function dm_system.f_pay_result_succeed(v_order_no    varchar2, -- 订单号
                                                v_term_no     varchar2, -- 终端编号                                   
                                                v_account_id  number, -- 收款账号编号
                                                v_suc_money   number, -- 成功金额
                                                v_service_fee number, -- 手续费
                                                v_out_msg     out varchar2)
  return boolean is
  -----------------------------------------------------------------------
  -- 功能: 支付成功
  -- 创建人: zhusm 2019-05-31
  -----------------------------------------------------------------------
  l_err_code number;
  l_err_desc varchar2(128);

begin

  -- 获取参数
  select t.order_code, t.order_desc
    into l_err_code, l_err_desc
    from dm_system_deal_code t
   where t.error_code = error_code.success;

  -- 支付账号资金变动
  if (not (f_pay_fund_change_add(v_term_no,
                                 v_order_no,
                                 v_account_id,
                                 change_type.income,
                                 v_suc_money,
                                 v_service_fee,
                                 '_system',
                                 '付款成功',
                                 v_out_msg))) then
    rollback;
    return false;
  end if;

  -- 等待绑定
  update dm_order_main t
     set t.pay_status    = deal_status.succeed,
         t.order_status  = deal_status.waiting,
         t.manual_status = deal_status.noneed,
         t.service_fee   = v_service_fee,
         t.cost_price    = v_suc_money + v_service_fee,
         t.pay_finish_time = sysdate
   where t.order_no = v_order_no;

  v_out_msg := '操作成功';
  return true;
end;
/

prompt
prompt Creating function F_PRD_GROUP_NO_CREATE
prompt =======================================
prompt
create or replace function dm_system.f_prd_group_no_create return varchar2 is
begin
  return 'G' || seq_product_group_id.nextval;
end;
/

prompt
prompt Creating function F_PROMOTE_GUID_CREATE
prompt =======================================
prompt
create or replace function dm_system.f_promote_guid_create return varchar2 is
  -----------------------------------------------------------------------
  -- 功能: 生成推广GUID
  -- 创建人: zhusm 2019-05-25
  -----------------------------------------------------------------------
begin
  return SYS_GUID();
end;
/

prompt
prompt Creating function F_STRING_SPLIT
prompt ================================
prompt
create or replace function dm_system.f_string_split(v_string    in varchar2,
                                          p_separator in varchar2 default (',')) -- 分隔符，默认逗号
 return string_array is
  j         number := 0;
  i         number := 1;
  len       number := 0;
  len1      number := 0;
  str       varchar2(1000);
  str_array string_array := string_array();
begin
  len  := length(v_string);
  len1 := length(p_separator);
  while j < len loop
    j := instr(v_string, p_separator, i);
    if j = 0 then
      j   := len;
      str := substr(v_string, i);
      str_array.extend;
      str_array(str_array.count) := str;
      if i >= len then
        exit;
      end if;
    else
      str := substr(v_string, i, j - i);
      i   := j + len1;
      str_array.extend;
      str_array(str_array.count) := str;
    end if;
  end loop;
  return str_array;
end;
/

prompt
prompt Creating function F_TERM_NO_CREATE
prompt ==================================
prompt
create or replace function dm_system.f_term_no_create return varchar2 is
  -----------------------------------------------------------------------
  -- 功能: 创建终端编号
  -- 创建人: zhusm 2019-05-25
  -----------------------------------------------------------------------
begin
  return 'TM' || seq_term_info_id.nextval;
end;
/

prompt
prompt Creating function F_TERM_PRD_NO_CREATE
prompt ======================================
prompt
create or replace function dm_system.f_term_prd_no_create return varchar2 is
  -----------------------------------------------------------------------
  -- 功能: 创建产品编号
  -- 创建人: zhusm 2019-05-25
  -----------------------------------------------------------------------
begin
  return 'TP' || seq_term_product_no.nextval;
end;
/

prompt
prompt Creating function F_TERM_RULE_CHECK_ADDR
prompt ========================================
prompt
create or replace function dm_system.f_term_rule_check_addr(v_term_prd_no  varchar2,
                                                  v_contact_addr varchar2,
                                                  v_out_msg      out varchar2)
  return boolean is
  -----------------------------------------------------------------------
  -- 功能: 校验联系地址规则
  -- 创建人: zhusm 2019-09-20
  -----------------------------------------------------------------------
  l_cnt_total number;
  l_cnt_exist number;
  l_passed    boolean := false;
begin

  for r in (select t.rule_condition
              from dm_term_product_rule t
             where t.product_no = v_term_prd_no
               and t.rule_type = rule_type.contact_addr
               and t.status = enable_status.enabled
             group by t.rule_condition
             order by t.rule_condition desc) loop
    if (r.rule_condition = rule_cnd.include) then
      -- 包含地址(白名单地址)
      for m in (select t.rule_value_a
                  from dm_term_product_rule t
                 where t.product_no = v_term_prd_no
                   and t.rule_type = rule_type.contact_addr
                   and t.rule_condition = rule_cnd.include
                   and t.status = enable_status.enabled) loop
        l_cnt_total := 0;
        l_cnt_exist := 0;
        for n in (select * from table(f_string_split(m.rule_value_a, '&'))) loop
          if (instr(v_contact_addr, n.column_value, 1) > 0) then
            l_cnt_exist := l_cnt_exist + 1;
          end if;
          l_cnt_total := l_cnt_total + 1;
        end loop;
        if ((l_cnt_total > 0 and l_cnt_exist > 0) and
           l_cnt_total = l_cnt_exist) then
          v_out_msg := '操作成功';
          return true;
        end if;
      end loop;
      l_passed := false;
    elsif (r.rule_condition = rule_cnd.exclude) then
      -- 不包含地址(黑名单地址)
      for m in (select t.rule_value_a
                  from dm_term_product_rule t
                 where t.product_no = v_term_prd_no
                   and t.rule_type = rule_type.contact_addr
                   and t.rule_condition = rule_cnd.exclude
                   and t.status = enable_status.enabled) loop
        l_cnt_total := 0;
        l_cnt_exist := 0;
        for n in (select * from table(f_string_split(m.rule_value_a, '&'))) loop
          if (instr(v_contact_addr, n.column_value, 1) > 0) then
            l_cnt_exist := l_cnt_exist + 1;
          end if;
          l_cnt_total := l_cnt_total + 1;
        end loop;
        if ((l_cnt_total > 0 and l_cnt_exist > 0) and
           l_cnt_total = l_cnt_exist) then
          v_out_msg := '地址被排除';
          return false;
        end if;
      end loop;
      l_passed := true;
    else
      -- 其他规则条件不处理
      v_out_msg := '操作成功';
      return true;
    end if;
  end loop;
  if (l_passed) then
    v_out_msg := '操作成功';
    return true;
  else
    v_out_msg := '地址不在范围内';
    return false;
  end if;
end;
/

prompt
prompt Creating function F_TERM_RULE_CHECK_AGE
prompt =======================================
prompt
create or replace function dm_system.f_term_rule_check_age(v_term_prd_no varchar2,
                                                 v_user_age    varchar2,
                                                 v_out_msg     out varchar2) return boolean is
  -----------------------------------------------------------------------
  -- 功能: 校验年龄规则
  -- 创建人: zhusm 2019-09-20
  -----------------------------------------------------------------------
  l_min_age number;
  l_max_age number;

begin

  select max(rule_value_a), max(rule_value_b)
    into l_min_age, l_max_age
    from (select t.rule_value_a, t.rule_value_b
            from dm_term_product_rule t
           where t.product_no = v_term_prd_no
             and t.rule_type = rule_type.card_user_age
             and t.rule_condition = rule_cnd.range
             and t.status = enable_status.enabled
           order by t.priority desc) a
   where rownum <= 1;
  if (l_min_age is not null) then
    if (not (v_user_age >= l_min_age and v_user_age <= l_max_age)) then
      v_out_msg := '年龄超过限制';
      return false;
    end if;
  end if;
  v_out_msg := '操作成功';
  return true;
end;
/

prompt
prompt Creating function F_TERM_RULE_CHECK_CARD
prompt ========================================
prompt
create or replace function dm_system.f_term_rule_check_card(v_term_prd_no varchar2,
                                                  v_card_no     varchar2,
                                                  v_out_msg     out varchar2) return boolean is
  -----------------------------------------------------------------------
  -- 功能: 校验身份证规则
  -- 创建人: zhusm 2019-09-20
  -----------------------------------------------------------------------
  l_rule_days  number; -- 规则天数
  l_rule_count number; -- 规则笔数
  l_count      number;

begin

  -- 获取规则
  select max(rule_value_a), max(rule_value_b)
    into l_rule_days, l_rule_count
    from (select t.rule_value_a, t.rule_value_b
            from dm_term_product_rule t
           where t.product_no = v_term_prd_no
             and t.rule_type = rule_type.card_user_id
             and t.rule_condition = rule_cnd.not_exceed
             and t.status = enable_status.enabled
           order by t.priority desc) a
   where rownum <= 1;

  if (l_rule_days is not null) then
    select count(1)
      into l_count
      from dm_order_main t1
     inner join dm_order_main_ext t2
        on t1.order_no = t2.order_no
     where t1.product_no = v_term_prd_no
       and t1.create_time > sysdate - l_rule_days
       and t2.card_user_id = v_card_no
       and t1.order_status <> deal_status.failed;

    if (l_count > l_rule_count) then
      v_out_msg := '身份证超过限制';
      return false;
    end if;

  end if;

  v_out_msg := '操作成功';
  return true;
end;
/

prompt
prompt Creating function F_TERM_RULE_CHECK_IP
prompt ======================================
prompt
create or replace function dm_system.f_term_rule_check_ip(v_term_prd_no varchar2,
                                                v_ip_addr     varchar2,
                                                v_out_msg     out varchar2)
  return boolean is
  -----------------------------------------------------------------------
  -- 功能: 校验IP规则
  -- 创建人: zhusm 2019-09-20
  -----------------------------------------------------------------------
  l_count        number;
  l_rule_value_a varchar2(128);
  l_rule_value_b varchar2(128);

begin

  for r in (select t.rule_condition
              from dm_term_product_rule t
             where t.product_no = v_term_prd_no
               and t.rule_type = rule_type.ip_addr
               and t.status = enable_status.enabled
             group by t.rule_condition
             order by t.rule_condition desc) loop
    if (r.rule_condition = rule_cnd.unequal) then
      -- 黑名单IP
      select count(1)
        into l_count
        from dm_term_product_rule t
       where t.product_no = v_term_prd_no
         and t.rule_type = rule_type.ip_addr
         and t.rule_condition = rule_cnd.unequal
         and t.rule_value_a = v_ip_addr
         and t.status = enable_status.enabled;
      if (l_count > 0) then
        v_out_msg := '黑名单IP';
        return false;
      end if;
    elsif (r.rule_condition = rule_cnd.equal) then
      -- 白名单IP
      select count(1)
        into l_count
        from dm_term_product_rule t
       where t.product_no = v_term_prd_no
         and t.rule_type = rule_type.ip_addr
         and t.rule_condition = rule_cnd.equal
         and t.rule_value_a = v_ip_addr
         and t.status = enable_status.enabled;
      if (l_count <= 0) then
        v_out_msg := '非白名单IP';
        return false;
      end if;
    elsif (r.rule_condition = rule_cnd.not_exceed) then
      -- 多长时间不超过多少笔
      select rule_value_a, rule_value_b
        into l_rule_value_a, l_rule_value_b
        from (select t.rule_value_a, t.rule_value_b
                from dm_term_product_rule t
               where t.product_no = v_term_prd_no
                 and t.rule_type = rule_type.ip_addr
                 and t.rule_condition = rule_cnd.not_exceed
                 and t.status = enable_status.enabled
               order by t.priority desc)
       where rownum <= 1;
      select count(1)
        into l_count
        from dm_order_main t
       where t.user_ip = v_ip_addr
         and t.create_time >= sysdate - l_rule_value_a;
      if (l_count > l_rule_value_b) then
        v_out_msg := 'IP超过规则限制';
        return false;
      end if;
    end if;

  end loop;

  v_out_msg := '操作成功';
  return true;
end;
/

prompt
prompt Creating function F_TERM_RULE_CHECK_PHONE
prompt =========================================
prompt
create or replace function dm_system.f_term_rule_check_phone(v_term_prd_no varchar2,
                                                   v_phone_no    varchar2,
                                                   v_out_msg     out varchar2) return boolean is
  -----------------------------------------------------------------------
  -- 功能: 校验手机号规则
  -- 创建人: zhusm 2019-09-20
  -----------------------------------------------------------------------
  l_count number;

begin

  for r in (select t.rule_condition
              from dm_term_product_rule t
             where t.product_no = v_term_prd_no
               and t.rule_type = rule_type.phone_no
               and t.status = enable_status.enabled
             group by t.rule_condition) loop
    if (r.rule_condition = rule_cnd.unequal) then
      -- 黑名单手机号
      select count(1)
        into l_count
        from dm_term_product_rule t
       where t.product_no = v_term_prd_no
         and t.rule_type = rule_type.phone_no
         and t.rule_condition = rule_cnd.unequal
         and t.rule_value_a = v_phone_no
         and t.status = enable_status.enabled;
      if (l_count > 0) then
        v_out_msg := '黑名单号码';
        return false;
      end if;
    end if;
  end loop;

  v_out_msg := '操作成功';
  return true;
end;
/

prompt
prompt Creating function F_TERM_PRD_RULE_CHECK
prompt =======================================
prompt
create or replace function dm_system.f_term_prd_rule_check(v_term_no       varchar2, -- 终端编号
                                                 v_term_prd_no   varchar2, -- 终端产品编号
                                                 v_user_card_no  varchar2, -- 身份证号
                                                 v_contact_phone varchar2, -- 联系电话
                                                 v_contact_addr  varchar2, -- 联系地址
                                                 v_ip_addr       varchar2, -- 用户IP
                                                 v_out_msg       out varchar2)
  return boolean is
  -----------------------------------------------------------------------
  -- 功能: 终端产品规则校验
  -- 创建人: zhusm 2019-09-19
  -----------------------------------------------------------------------
  l_user_age number;

begin

  -- 检查规则
  for m in (select t.rule_type
              from dm_term_product_rule t
             where t.term_no = v_term_no
               and t.product_no = v_term_prd_no
               and t.status = enable_status.enabled
             group by t.rule_type) loop
    if (m.rule_type = rule_type.ip_addr) then
      -- IP地址规则(黑名单)
      if (not f_term_rule_check_ip(v_term_prd_no, v_ip_addr, v_out_msg)) then
        return false;
      end if;
    elsif (m.rule_type = rule_type.phone_no) then
      -- 手机号码规则(黑名单)
      if (not
          f_term_rule_check_phone(v_term_prd_no, v_contact_phone, v_out_msg)) then
        return false;
      end if;
    elsif (m.rule_type = rule_type.card_user_age) then
      -- 用户年龄规则
      l_user_age := floor(months_between(sysdate,
                                         to_date(substr(v_user_card_no, 7, 8),
                                                 'yyyymmdd')) / 12);
      if (not f_term_rule_check_age(v_term_prd_no, l_user_age, v_out_msg)) then
        return false;
      end if;
    elsif (m.rule_type = rule_type.card_user_id) then
      -- 用户身份证规则
      if (not
          f_term_rule_check_card(v_term_prd_no, v_user_card_no, v_out_msg)) then
        return false;
      end if;
    elsif (m.rule_type = rule_type.contact_addr) then
      -- 用户地址规则
      if (not
          f_term_rule_check_addr(v_term_prd_no, v_contact_addr, v_out_msg)) then
        return false;
      end if;
    end if;
  end loop;
  v_out_msg := '操作成功';
  return true;

exception
  when others then
    rollback;
    v_out_msg := '过程异常:' || sqlerrm;
    return true;
end;
/

prompt
prompt Creating function F_UP_CHNNL_NO_CREATE
prompt ======================================
prompt
create or replace function dm_system.f_up_chnnl_no_create return varchar2 is
  -----------------------------------------------------------------------
  -- 功能: 绑定上游渠道编号
  -- 创建人: zhusm 2019-05-25
  -----------------------------------------------------------------------
begin
  return 'UC' || seq_up_channel_id.nextval;
end;
/

prompt
prompt Creating function F_UP_PRD_NO_CREATE
prompt ====================================
prompt
create or replace function dm_system.f_up_prd_no_create return varchar2 is
begin
  return 'UP' || seq_up_product_id.nextval;
end;
/

prompt
prompt 