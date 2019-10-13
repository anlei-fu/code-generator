Creating function F_ASSIGN_ICCNO
prompt ================================
prompt
create or replace function qxfc.f_assign_iccno(v_order_no    varchar2,
                                          v_icc_type    number,
                                          v_carrier_no  varchar2,
                                          v_province_no varchar2,
                                          v_city_no     varchar2,
                                          v_ret_msg     out varchar2)
  return boolean is
  /*
  功能:分配iccno
  作者:jiyi
  时间:2018-04-24
  */
  l_iccno varchar2(32);
begin
  select min(iccid)
    into l_iccno
    from (select t.iccid
            from fc_iccid t
           where t.icc_type = v_icc_type
             and (t.carrier_no = v_carrier_no or t.carrier_no = '*')
             and (t.province_no = v_province_no or t.province_no = 'QG')
             and (t.city_no = v_city_no or t.city_no = '*')
             and t.status = enable_status.enabled
           order by t.create_time)
   where rownum = 1;

  if (l_iccno is null) then
    v_ret_msg := '没有可用的ICCNO';
    return false;
  end if;

  update fc_order_ext t
     set t.iccno = l_iccno
   where t.order_no = v_order_no;
  v_ret_msg := 'OK';
  return true;
end;
/

prompt
prompt Creating function F_CREATE_DOWN_TASK
prompt ====================================
prompt
create or replace function qxfc.f_create_down_task(v_flow_id     number,
                                              v_action      varchar2,
                                              v_order_no    varchar2,
                                              v_bind_id     varchar2,
                                              v_ret_task_id out number,
                                              v_ret_msg     out varchar2,
                                              v_ret_script  out varchar2,
                                              v_ret_svc     out varchar2)
  return boolean as
  /*
  功能:创建和下游相关任务
  作者:jiyi
  时间:2018-04-09
  */
  l_task_id         number;
  l_script_type     number;
  l_script_id       number;
  l_script_path     varchar2(128);
  l_svc_bus         varchar2(32);
  l_up_channel_no   varchar2(32);
  l_channel_name    varchar2(32);
  l_product_type    number;
  l_package_id      number;
  l_down_channel_no varchar2(32);
  l_down_order_no   varchar2(32);
  l_province_no     varchar2(32);
  l_city_no         varchar2(32);
  l_carrier_no      varchar2(32);
  l_order_time      date;
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

  select t.package_id, t.product_type
    into l_package_id, l_product_type
    from fc_order_main t
   where t.order_no = v_order_no;

  select t.province_no,
         t.city_no,
         t.carrier_no,
         t.down_order_no,
         t.down_channel_no,
         t.request_time,
         d.channel_name
    into l_province_no,
         l_city_no,
         l_carrier_no,
         l_down_order_no,
         l_down_channel_no,
         l_order_time,
         l_channel_name
    from fc_order_main t
    left join fc_down_channel d
      on t.down_channel_no = d.channel_no
   where t.order_no = v_order_no;

  l_up_channel_no := l_down_channel_no;
  if (v_action = action_type.plat_delivery) then
    --天猫更新快递单号与之前绑定的渠道没有关系, 找下游的脚本类型
    l_script_type := script_type.down_plat_delivery;
    select min(t.sid), min(t.script_path), min(t.svc_bus)
      into l_script_id, l_script_path, l_svc_bus
      from fc_down_script t
     where t.script_type = script_type.down_plat_delivery
       and t.channel_no = l_down_channel_no
       and t.status = enable_status.enabled
       and rownum = 1;
  elsif (v_action = action_type.get_identity) then
    --获取实名信息与之前绑定的渠道没有关系, 找下游的脚本类型
    l_script_type := script_type.down_get_identity;
    select min(t.sid), min(t.script_path), min(t.svc_bus)
      into l_script_id, l_script_path, l_svc_bus
      from fc_down_script t
     where t.script_type = script_type.down_get_identity
       and t.channel_no = l_down_channel_no
       and t.status = enable_status.enabled
       and rownum = 1;
  end if;

  if (l_script_id is null) then
    v_ret_msg := '没有找到脚本';
    return false;
  end if;

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
     svc_bus)
  values
    (l_task_id,
     v_flow_id,
     v_order_no,
     v_bind_id,
     v_action,
     l_up_channel_no,
     l_channel_name,
     l_script_type,
     l_script_id,
     l_script_path,
     l_svc_bus);

  if (v_action = action_type.plat_delivery) then
    --天猫发货和快递共用一个Express_Order, 关联到天猫发货taskid
    update fc_order_express t
       set t.taskid = l_task_id
     where t.order_no = v_order_no
       and t.express_status = express_status.wait_plat_delivery;
  end if;

  v_ret_script  := l_script_path;
  v_ret_svc     := l_svc_bus;
  v_ret_task_id := l_task_id;
  v_ret_msg     := 'OK';
  return true;
end;
/

prompt
prompt Creating function F_CREATE_EXPRESS_TASK
prompt =======================================
prompt
create or replace function qxfc.f_create_express_task(v_flow_id     number,
                                                 v_action      varchar2,
                                                 v_order_no    varchar2,
                                                 v_bind_id     varchar2,
                                                 v_ret_task_id out number,
                                                 v_ret_msg     out varchar2,
                                                 v_ret_script  out varchar2,
                                                 v_ret_svc     out varchar2)
  return boolean as
  /*
  功能:创建快递任务
  作者:jiyi
  时间:2018-04-09
  */
  l_task_id         number;
  l_script_type     number;
  l_script_id       number;
  l_script_path     varchar2(128);
  l_svc_bus         varchar2(32);
  l_up_channel_no   varchar2(32);
  l_down_channel_no varchar2(32);
  l_down_order_no   varchar2(32);
  l_province_no     varchar2(32);
  l_city_no         varchar2(32);
  l_carrier_no      varchar2(32);
  l_up_product_id   number;
  l_order_time      date;
  l_buyer_name      varchar2(32);
  l_buyer_phone     varchar2(32);
  l_buyer_address   varchar2(128);
  l_express_name    varchar2(32);
  l_express_fee     number;
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

  select ex.buyer_province,
         ex.buyer_city,
         t.carrier_no,
         t.down_order_no,
         t.down_channel_no,
         t.request_time
    into l_province_no,
         l_city_no,
         l_carrier_no,
         l_down_order_no,
         l_down_channel_no,
         l_order_time
    from fc_order_main t
   inner join fc_order_ext ex
      on t.order_no = ex.order_no
   where t.order_no = v_order_no;

  --打印快递与之前绑定的渠道没有关系
  select min(t.sid),
         min(t.script_path),
         min(t.svc_bus),
         min(t.channel_no),
         min(t.channel_name),
         min(t.cost),
         min(t.pid)
    into l_script_id,
         l_script_path,
         l_svc_bus,
         l_up_channel_no,
         l_express_name,
         l_express_fee,
         l_up_product_id
    from (select t.*,
                 up.cost,
                 up.pid,
                 uc.channel_name,
                 (case
                   when t.city_no = l_city_no then
                    0
                   when t.province_no = l_province_no then
                    2
                   when t.province_no = 'QG' then
                    3
                 end) priority
            from fc_up_script t
           inner join fc_up_channel uc
              on t.channel_no = uc.channel_no
           inner join fc_up_product up
              on t.channel_no = up.channel_no
           where t.script_type = l_script_type
             and (up.product_type = special_product_type.express or
                 up.product_type = 0)
             and (t.province_no = 'QG' or t.province_no = l_province_no)
             and (t.city_no = '*' or t.city_no = l_city_no)
             and t.status = enable_status.enabled
             and uc.status = enable_status.enabled
             and up.status = enable_status.enabled
           order by priority) t
   where rownum = 1;

  if (l_script_id is null) then
    v_ret_msg := '没有找到脚本';
    return false;
  end if;

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
     up_cost)
  values
    (l_task_id,
     v_flow_id,
     v_order_no,
     v_bind_id,
     v_action,
     l_up_channel_no,
     l_express_name,
     l_script_type,
     l_script_id,
     l_script_path,
     l_svc_bus,
     l_up_product_id,
     l_express_fee);

  select t.buyer_name, t.buyer_phone, t.buyer_address
    into l_buyer_name, l_buyer_phone, l_buyer_address
    from fc_order_ext t
   where t.order_no = v_order_no;

  insert into fc_order_express
    (id,
     taskid,
     order_no,
     down_order_no,
     down_channel_no,
     order_time,
     express_name,
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
     v_order_no,
     l_down_order_no,
     l_down_channel_no,
     l_order_time,
     l_express_name,
     l_express_fee,
     l_buyer_name,
     l_buyer_phone,
     l_buyer_address,
     sysdate,
     express_status.wait_print,
     'system');

  v_ret_script  := l_script_path;
  v_ret_svc     := l_svc_bus;
  v_ret_task_id := l_task_id;

  v_ret_msg := 'OK';
  return true;
end;
/

prompt
prompt Creating function F_CREATE_QUERY
prompt ================================
prompt
create or replace function qxfc.f_create_query(v_task_id varchar2,
                                          v_ret_msg out varchar2)
  return boolean as
  /*
    功能:创建查询
    作者:jiyi
    时间:2018-04-10
  */
  l_need_query     number;
  l_up_channel_no  varchar2(128);
  l_script_path    varchar2(256);
  l_svc_bus        varchar2(128);
  l_first_interval number;
  l_next_interval  number;
  l_order_no       varchar2(32);
  l_bind_id        varchar2(32);
  l_script_id      number;
  l_product_type   number;
  l_package_id     number;
  l_carrier_no     varchar2(32);
  l_province_no    varchar2(32);
  l_city_no        varchar2(32);
begin
  --判断是否需要查询
  select b.order_no, b.bind_id
    into l_order_no, l_bind_id
    from fc_flow_task b
   where b.tid = v_task_id
     and b.task_status = process_status.process
     for update nowait;

  select t.need_query,
         t.first_interval,
         t.next_interval,
         b.up_channel_no,
         b.package_id,
         b.product_type
    into l_need_query,
         l_first_interval,
         l_next_interval,
         l_up_channel_no,
         l_package_id,
         l_product_type
    from fc_up_channel t
   inner join fc_order_bind b
      on t.channel_no = b.up_channel_no
   where b.bind_id = l_bind_id;

  if (l_need_query <> enable_status.enabled) then
    v_ret_msg := '不需要查询';
    return false;
  end if;

  select t.carrier_no, t.province_no, t.city_no
    into l_carrier_no, l_province_no, l_city_no
    from fc_order_main t
   where t.order_no = l_order_no;

  --添加查询记录
  select min(t.script_path), min(t.svc_bus), min(t.sid)
    into l_script_path, l_svc_bus, l_script_id
    from fc_up_script t
   where t.script_type = script_type.query
     and t.channel_no = l_up_channel_no
     and (t.product_type = l_product_type or t.product_type = 0)
     and (t.package_id = l_package_id or t.package_id = 0)
     and (t.province_no = l_province_no or t.province_no = 'QG')
     and (t.city_no = l_city_no or t.city_no = '*')
     and (t.carrier_no = l_carrier_no or t.carrier_no = '*')
     and t.status = enable_status.enabled
     and rownum = 1;

  if (l_script_id is null) then
    v_ret_msg := '未配置脚本或脚本被禁用';
    return false;
  end if;

  insert into fc_flow_task_query
    (qid,
     task_id,
     order_no,
     bind_id,
     script_id,
     script_path,
     svc_bus,
     status,
     first_interval,
     next_interval,
     start_time)
  values
    (SEQ_FLOW_TASK_QUERY_ID.Nextval,
     v_task_id,
     l_order_no,
     l_bind_id,
     l_script_id,
     l_script_path,
     l_svc_bus,
     process_status.wait,
     l_first_interval,
     l_next_interval,
     sysdate);

  v_ret_msg := '创建查询成功';
  return true;
end;
/

prompt
prompt Creating function F_CREATE_QUERY_EXPRESS_TASK
prompt =============================================
prompt
create or replace function qxfc.f_create_query_express_task(v_flow_id     number,
                                                       v_action      varchar2,
                                                       v_order_no    varchar2,
                                                       v_bind_id     varchar2,
                                                       v_ret_task_id out number,
                                                       v_ret_msg     out varchar2,
                                                       v_ret_script  out varchar2,
                                                       v_ret_svc     out varchar2)
  return boolean as
  /*
  功能:代客下单查询物流信息
  作者:jiyi
  时间:2018-04-09
  */
  l_task_id         number;
  l_script_type     number;
  l_script_id       number;
  l_script_path     varchar2(128);
  l_svc_bus         varchar2(32);
  l_up_channel_no   varchar2(32);
  l_down_channel_no varchar2(32);
  l_down_order_no   varchar2(32);
  l_province_no     varchar2(32);
  l_city_no         varchar2(32);
  l_carrier_no      varchar2(32);
  l_product_type    number;
  l_up_product_id   number;
  l_order_time      date;
  l_pre_step        varchar2(32);
  l_channel_name    varchar2(32);
  l_up_seq          varchar2(32);
begin
  select t.script_type, p.action
    into l_script_type, l_pre_step
    from fc_flow_step t
   inner join fc_flow_step p
      on p.fid = p.fid
   where t.fid = v_flow_id
     and p.fid = v_flow_id
     and t.action = v_action
     and p.sno = t.sno - 1;

  if (l_script_type is null) then
    v_ret_msg := '没有配置该类型的脚本';
    return false;
  end if;

  select t.up_channel_no, t.channel_name, t.uptranseq
    into l_up_channel_no, l_channel_name, l_up_seq
    from fc_flow_task t
   where t.order_no = v_order_no
     and t.action = l_pre_step;

  select ex.buyer_province,
         ex.buyer_city,
         t.carrier_no,
         t.down_order_no,
         t.down_channel_no,
         t.request_time,
         t.product_type
    into l_province_no,
         l_city_no,
         l_carrier_no,
         l_down_order_no,
         l_down_channel_no,
         l_order_time,
         l_product_type
    from fc_order_main t
   inner join fc_order_ext ex
      on t.order_no = ex.order_no
   where t.order_no = v_order_no;

  --获取查询脚本
  select min(t.sid), min(t.script_path), min(t.svc_bus)
    into l_script_id, l_script_path, l_svc_bus
    from fc_up_script t
   where t.script_type = l_script_type
     and t.channel_no = l_up_channel_no
     and (t.product_type = l_product_type or t.product_type = 0)
     and (t.province_no = 'QG' or t.province_no = l_province_no)
     and (t.city_no = '*' or t.city_no = l_city_no)
     and t.status = enable_status.enabled
     and rownum = 1;

  if (l_script_id is null) then
    v_ret_msg := '没有找到脚本';
    return false;
  end if;

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
     uptranseq)
  values
    (l_task_id,
     v_flow_id,
     v_order_no,
     v_bind_id,
     v_action,
     l_up_channel_no,
     l_channel_name,
     l_script_type,
     l_script_id,
     l_script_path,
     l_svc_bus,
     l_up_product_id,
     l_up_seq);

  v_ret_script  := l_script_path;
  v_ret_svc     := l_svc_bus;
  v_ret_task_id := l_task_id;

  v_ret_msg := 'OK';
  return true;
end;
/

prompt
prompt Creating function F_CREATE_TASK_BY_PRODUCT
prompt ==========================================
prompt
create or replace function qxfc.f_create_task_by_product(v_flow_id      number,
                                                    v_action       varchar2,
                                                    v_order_no     varchar2,
                                                    v_bind_id      varchar2,
                                                    v_product_type number,
                                                    v_ret_task_id  out number,
                                                    v_ret_msg      out varchar2,
                                                    v_ret_script   out varchar2,
                                                    v_ret_svc      out varchar2)
  return boolean as
  /*
  功能:按产品类型创建任务
  作者:jiyi
  时间:2018-04-09
  */
  l_task_id         number;
  l_script_type     number;
  l_script_id       number;
  l_script_path     varchar2(128);
  l_svc_bus         varchar2(32);
  l_up_channel_no   varchar2(32);
  l_province_no     varchar2(32);
  l_city_no         varchar2(32);
  l_carrier_no      varchar2(32);
  l_up_product_id   number;
  l_channel_name    varchar2(32);
  l_down_channel_no varchar2(32);
  l_down_group_no   varchar2(32);
  l_cost            number;
begin
  select t.province_no,
         t.carrier_no,
         t.carrier_no,
         t.down_channel_no,
         p.group_no
    into l_province_no,
         l_city_no,
         l_carrier_no,
         l_down_channel_no,
         l_down_group_no
    from fc_order_main t
   inner join fc_down_product p
      on t.down_product_id = p.pid
   where t.order_no = v_order_no;

  select min(uc.channel_no),
         min(uc.channel_name),
         min(up.cost),
         min(up.pid)
    into l_up_channel_no, l_channel_name, l_cost, l_up_product_id
    from fc_up_channel uc
   inner join fc_up_product up
      on uc.channel_no = up.channel_no
   inner join fc_down_specify_up sp
      on sp.down_channel_no = l_down_channel_no
     and sp.up_channel_no = up.channel_no
   where up.product_type = v_product_type
     and sp.down_group_no = l_down_group_no
     and sp.up_group_no = up.group_no
     and (up.province_no = 'QG' or up.province_no = l_province_no)
     and (up.city_no = '*' or up.city_no = l_city_no)
     and uc.status = enable_status.enabled
     and up.status = enable_status.enabled
     and rownum = 1;

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
     up_cost,
     task_status,
     task_msg,
     task_start_time,
     task_end_time,
     flow_mode)
  values
    (l_task_id,
     v_flow_id,
     v_order_no,
     v_bind_id,
     v_action,
     l_up_channel_no,
     l_channel_name,
     l_script_type,
     l_script_id,
     l_script_path,
     l_svc_bus,
     l_up_product_id,
     l_cost,
     process_status.success,
     'OK',
     sysdate,
     sysdate,
     flow_mode.manual);

  v_ret_script  := l_script_path;
  v_ret_svc     := l_svc_bus;
  v_ret_task_id := l_task_id;

  v_ret_msg := 'OK';
  return true;
end;
/

prompt
prompt 