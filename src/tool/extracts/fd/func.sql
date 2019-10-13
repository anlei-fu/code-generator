Creating function CZTH_F_CHANNEL_COMPANY_CHECK
prompt ==============================================
prompt
create or replace function fd_account.czth_f_channel_company_check(v_up_channel_no   varchar2,
                                                        v_down_channel_no varchar2)
  return varchar2 is
  ----------------充值特惠公司检查---------------
  l_up_company_id   number;
  l_down_company_id number;
begin
  ---1.上游公司编号获取
  select t.company_id
    into l_up_company_id
    from fd_base_up_channel t
   where t.channel_no = v_up_channel_no;

  ---2.下游公司编号获取
  select t.company_id
    into l_down_company_id
    from fd_base_down_channel t
   where t.channel_no = v_down_channel_no;

  if l_up_company_id != l_down_company_id then
    return pkg_error_code.company_error;
  end if;

  return pkg_error_code.success;
end;
/

prompt
prompt Creating function CZTH_F_TRADE_BACK_MOVE
prompt ========================================
prompt
create or replace function fd_account.czth_f_trade_back_move(v_order_source   number,
                                                  v_trade_order_no varchar2,
                                                  v_order_time     varchar2)
  return varchar2 is
  ------------------充值特惠订单数据历史库转移当前库-------------------
  l_end_time     date := add_months(trunc(sysdate + 3, 'dd'), -1); --历史库保留1个月前数据
  l_bak_end_time date := add_months(trunc(sysdate + 3, 'dd'), -3) - 15; --归档库保留三个半月前数据
begin
  --1.满足转移历史表的订单需尝试从历史表转移当前表
  if to_date(v_order_time, 'yyyy-mm-dd hh24:mi:ss') < l_end_time then
    insert into czth_trade_order
      (record_id,
       fd_order_id,
       trade_order_no,
       trade_delivery_no,
       order_source,
       down_channel_no,
       down_account_id,
       up_channel_no,
       up_account_id,
       company_id,
       draw_unit,
       draw_face,
       draw_amount,
       service_rate,
       change_time,
       change_type,
       bill_type,
       business_type,
       carrier_no,
       province_no,
       memo)
      select t.record_id,
             t.fd_order_id,
             t.trade_order_no,
             t.trade_delivery_no,
             t.order_source,
             t.down_channel_no,
             t.down_account_id,
             t.up_channel_no,
             t.up_account_id,
             t.company_id,
             t.draw_unit,
             t.draw_face,
             t.draw_amount,
             t.service_rate,
             t.change_time,
             t.change_type,
             t.bill_type,
             t.business_type,
             t.carrier_no,
             t.province_no,
             t.memo
        from czth_trade_order_hs t
       where t.trade_order_no = v_trade_order_no
         and t.order_source = v_order_source;
  
  end if;

  --2.满足转移备份表的订单需尝试从备份表转移当前表
  if to_date(v_order_time, 'yyyy-mm-dd hh24:mi:ss') < l_bak_end_time then
    insert into czth_trade_order
      (record_id,
       fd_order_id,
       trade_order_no,
       trade_delivery_no,
       order_source,
       down_channel_no,
       down_account_id,
       up_channel_no,
       up_account_id,
       company_id,
       draw_unit,
       draw_face,
       draw_amount,
       service_rate,
       change_time,
       change_type,
       bill_type,
       business_type,
       carrier_no,
       province_no,
       memo)
      select t.record_id,
             t.fd_order_id,
             t.trade_order_no,
             t.trade_delivery_no,
             t.order_source,
             t.down_channel_no,
             t.down_account_id,
             t.up_channel_no,
             t.up_account_id,
             t.company_id,
             t.draw_unit,
             t.draw_face,
             t.draw_amount,
             t.service_rate,
             t.change_time,
             t.change_type,
             t.bill_type,
             t.business_type,
             t.carrier_no,
             t.province_no,
             t.memo
        from czth_trade_order_hs t ---@agentbackupdb t
       where t.trade_order_no = v_trade_order_no
         and t.order_source = v_order_source;
  end if;

  return pkg_error_code.success;
end;
/

prompt
prompt Creating function FD_F_TRADE_BACK_MOVE2
prompt =======================================
prompt
create or replace function fd_account.fd_f_trade_back_move2(v_order_source   number,
                                                 v_trade_order_no varchar2)
  return varchar2 is
  -------------------交易资金变动由离线库转移到当前库-----------------
  l_order_add_count     number;
  l_order_del_count     number;
  l_down_fund_add_count number;
  l_down_fund_del_count number;
  l_up_fund_add_count   number;
  l_up_fund_del_count   number;
begin
  ---1.转移历史库可能存在的订单信息
  insert into fd_trade_order_main
    (fd_order_id,
     down_channel_no,
     down_account_id,
     down_company_id,
     trade_order_no,
     ext_order_no,
     order_source,
     create_time,
     order_time,
     business_type,
     carrier_no,
     province_no,
     city_no,
     total_face,
     recharge_unit,
     recharge_account_no,
     has_up_trade,
     down_order_amount)
    select fd_order_id,
           down_channel_no,
           down_account_id,
           down_company_id,
           trade_order_no,
           ext_order_no,
           order_source,
           create_time,
           order_time,
           business_type,
           carrier_no,
           province_no,
           city_no,
           total_face,
           recharge_unit,
           recharge_account_no,
           has_up_trade,
           down_order_amount
      from fd_trade_order_main_hs t ---@agentbackupdb t
     where t.trade_order_no = v_trade_order_no
       and t.order_source = v_order_source;
  l_order_add_count := sql%rowcount;

  ---2.删除离线库订单主表数据
  delete from fd_trade_order_main_hs t ---@agentbackupdb t
   where t.trade_order_no = v_trade_order_no
     and t.order_source = v_order_source;
  l_order_del_count := sql%rowcount;

  if l_order_del_count != l_order_add_count then
    return pkg_error_code.data_error;
  end if;

  ---3.下游资金变动数据
  insert into fd_trade_down_fund
    (record_id,
     fd_order_id,
     channel_no,
     account_id,
     trade_order_no,
     ext_order_no,
     order_source,
     create_time,
     order_time,
     change_type,
     change_amount,
     balance,
     memo,
     service_fee) ----添加手续费
    select record_id,
           fd_order_id,
           channel_no,
           account_id,
           trade_order_no,
           ext_order_no,
           order_source,
           create_time,
           order_time,
           change_type,
           change_amount,
           balance,
           memo,
           service_fee
      from fd_trade_down_fund_hs t ---@agentbackupdb t
     where t.trade_order_no = v_trade_order_no
       and t.order_source = v_order_source;
  l_down_fund_add_count := sql%rowcount;

  ---4.删除历史库下游资金变动数据
  delete from fd_trade_down_fund_hs t ---@agentbackupdb t
   where t.trade_order_no = v_trade_order_no
     and t.order_source = v_order_source;
  l_down_fund_del_count := sql%rowcount;

  if l_down_fund_del_count != l_down_fund_add_count then
    return pkg_error_code.data_error;
  end if;

  ---5.上游资金变动数据
  insert into fd_trade_up_fund
    (record_id,
     fd_order_id,
     trade_order_no,
     order_source,
     trade_delivery_no,
     down_channel_no,
     down_account_id,
     down_company_id,
     up_channel_no,
     up_account_id,
     up_company_id,
     down_draw_unit,
     down_draw_face,
     down_draw_amount,
     down_real_amount,
     up_draw_unit,
     up_draw_face,
     up_draw_amount,
     up_real_amount,
     change_time,
     change_type,
     bill_type,
     business_type,
     carrier_no,
     province_no,
     balance,
     profits,
     down_commission,
     up_commission,
     settle_amount,
     settle_batch_id,
     settle_status,
     settle_time,
     memo,
     order_time,
     split_profit_status,
     out_change_time)
    select record_id,
           fd_order_id,
           trade_order_no,
           order_source,
           trade_delivery_no,
           down_channel_no,
           down_account_id,
           down_company_id,
           up_channel_no,
           up_account_id,
           up_company_id,
           down_draw_unit,
           down_draw_face,
           down_draw_amount,
           down_real_amount,
           up_draw_unit,
           up_draw_face,
           up_draw_amount,
           up_real_amount,
           change_time,
           change_type,
           bill_type,
           business_type,
           carrier_no,
           province_no,
           balance,
           profits,
           down_commission,
           up_commission,
           settle_amount,
           settle_batch_id,
           settle_status,
           settle_time,
           memo,
           order_time,
           split_profit_status,
           out_change_time
      from fd_trade_up_fund_hs t ---@agentbackupdb t
     where t.trade_order_no = v_trade_order_no
       and t.order_source = v_order_source;
  l_up_fund_add_count := sql%rowcount;

  ---6.删除历史库上游资金变动数据
  delete from fd_trade_up_fund_hs t ---@agentbackupdb t
   where t.trade_order_no = v_trade_order_no
     and t.order_source = v_order_source;
  l_up_fund_del_count := sql%rowcount;

  if l_up_fund_del_count != l_up_fund_add_count then
    return pkg_error_code.data_error;
  end if;

  return pkg_error_code.success;
end;
/

prompt
prompt Creating function FD_F_TRADE_HS_MOVE2
prompt =====================================
prompt
create or replace function fd_account.fd_f_trade_hs_move2(v_order_source   number,
                                               v_trade_order_no varchar2)
  return varchar2 is
  -------------------交易资金变动由历史表转移到当前表-----------------
  l_order_add_count     number;
  l_order_del_count     number;
  l_down_fund_add_count number;
  l_down_fund_del_count number;
  l_up_fund_add_count   number;
  l_up_fund_del_count   number;
begin
  ---1.转移历史表可能存在的订单信息
  insert into fd_trade_order_main
    (fd_order_id,
     down_channel_no,
     down_account_id,
     down_company_id,
     trade_order_no,
     ext_order_no,
     order_source,
     create_time,
     order_time,
     business_type,
     carrier_no,
     province_no,
     city_no,
     total_face,
     recharge_unit,
     recharge_account_no,
     has_up_trade,
     down_order_amount)
    select fd_order_id,
           down_channel_no,
           down_account_id,
           down_company_id,
           trade_order_no,
           ext_order_no,
           order_source,
           create_time,
           order_time,
           business_type,
           carrier_no,
           province_no,
           city_no,
           total_face,
           recharge_unit,
           recharge_account_no,
           has_up_trade,
           down_order_amount
      from fd_trade_order_main_hs t
     where t.trade_order_no = v_trade_order_no
       and t.order_source = v_order_source;
  l_order_add_count := sql%rowcount;

  ---2.删除离线库订单主表数据
  delete from fd_trade_order_main_hs t
   where t.trade_order_no = v_trade_order_no
     and t.order_source = v_order_source;
  l_order_del_count := sql%rowcount;

  if l_order_del_count != l_order_add_count then
    return pkg_error_code.data_error;
  end if;

  ---3.下游资金变动数据
  insert into fd_trade_down_fund
    (record_id,
     fd_order_id,
     channel_no,
     account_id,
     trade_order_no,
     ext_order_no,
     order_source,
     create_time,
     order_time,
     change_type,
     change_amount,
     balance,
     memo,
     service_fee) ----添加手续费
    select record_id,
           fd_order_id,
           channel_no,
           account_id,
           trade_order_no,
           ext_order_no,
           order_source,
           create_time,
           order_time,
           change_type,
           change_amount,
           balance,
           memo,
           service_fee
      from fd_trade_down_fund_hs t
     where t.trade_order_no = v_trade_order_no
       and t.order_source = v_order_source;
  l_down_fund_add_count := sql%rowcount;

  ---4.删除历史库下游资金变动数据
  delete from fd_trade_down_fund_hs t
   where t.trade_order_no = v_trade_order_no
     and t.order_source = v_order_source;
  l_down_fund_del_count := sql%rowcount;

  if l_down_fund_del_count != l_down_fund_add_count then
    return pkg_error_code.data_error;
  end if;

  ---5.上游资金变动数据
  insert into fd_trade_up_fund
    (record_id,
     fd_order_id,
     trade_order_no,
     order_source,
     trade_delivery_no,
     down_channel_no,
     down_account_id,
     down_company_id,
     up_channel_no,
     up_account_id,
     up_company_id,
     down_draw_unit,
     down_draw_face,
     down_draw_amount,
     down_real_amount,
     up_draw_unit,
     up_draw_face,
     up_draw_amount,
     up_real_amount,
     change_time,
     change_type,
     bill_type,
     business_type,
     carrier_no,
     province_no,
     balance,
     profits,
     down_commission,
     up_commission,
     settle_amount,
     settle_batch_id,
     settle_status,
     settle_time,
     memo,
     order_time,
     split_profit_status,
     out_change_time)
    select record_id,
           fd_order_id,
           trade_order_no,
           order_source,
           trade_delivery_no,
           down_channel_no,
           down_account_id,
           down_company_id,
           up_channel_no,
           up_account_id,
           up_company_id,
           down_draw_unit,
           down_draw_face,
           down_draw_amount,
           down_real_amount,
           up_draw_unit,
           up_draw_face,
           up_draw_amount,
           up_real_amount,
           change_time,
           change_type,
           bill_type,
           business_type,
           carrier_no,
           province_no,
           balance,
           profits,
           down_commission,
           up_commission,
           settle_amount,
           settle_batch_id,
           settle_status,
           settle_time,
           memo,
           order_time,
           split_profit_status,
           out_change_time
      from fd_trade_up_fund_hs t
     where t.trade_order_no = v_trade_order_no
       and t.order_source = v_order_source;
  l_up_fund_add_count := sql%rowcount;

  ---6.删除历史库上游资金变动数据
  delete from fd_trade_up_fund_hs t
   where t.trade_order_no = v_trade_order_no
     and t.order_source = v_order_source;
  l_up_fund_del_count := sql%rowcount;

  if l_up_fund_del_count != l_up_fund_add_count then
    return pkg_error_code.data_error;
  end if;
  if l_order_del_count = 0 and l_down_fund_add_count = 0 and
     l_up_fund_add_count = 0 then
    return pkg_error_code.not_exists;
  end if;
  return pkg_error_code.success;
end;
/

prompt
prompt Creating function FD_F_TRADE_PAY_HS_MOVE2
prompt =========================================
prompt
create or replace function fd_account.fd_f_trade_pay_hs_move2(v_order_source   number,
                                                   v_trade_order_no varchar2,
                                                   v_order_time     varchar2)
  return varchar2 is
  ---------------------支付扣款从历史库获取一个月前订单数据------------------
  l_end_time     date := add_months(trunc(sysdate + 3, 'dd'), -1); --历史库保留1个月前数据
  l_bak_end_time date := add_months(trunc(sysdate + 3, 'dd'), -3) - 15; --归档库保留三个半月前数据
  l_result       varchar2(32);
begin
  --1.满足转移历史表的订单需尝试从历史表转移当前表
  if to_date(v_order_time, 'yyyy-mm-dd hh24:mi:ss') < l_end_time then
    l_result := fd_f_trade_hs_move2(v_order_source, v_trade_order_no);
  
    if (l_result != pkg_error_code.success) then
      return l_result;
    end if;
  end if;

  --2.满足转移备份表的订单需尝试从备份表转移当前表
  if to_date(v_order_time, 'yyyy-mm-dd hh24:mi:ss') < l_bak_end_time then
    l_result := fd_f_trade_back_move2(v_order_source, v_trade_order_no);
  
    if (l_result != pkg_error_code.success) then
      return l_result;
    end if;
  
  end if;
  return pkg_error_code.success;
end;
/

prompt
prompt Creating function CZTH_F_TRADE_HS_MOVE
prompt ======================================
prompt
create or replace function fd_account.czth_f_trade_hs_move(v_order_source   number,
                                                v_trade_order_no varchar2,
                                                v_order_time     varchar2)
  return varchar2 is
  -----------------充值特惠相关数据历史库转移到当前库-------------------
  l_result varchar2(32);
begin
  ---1.交易记录相关历史库转移当前库
  l_result := fd_f_trade_pay_hs_move2(v_order_source,
                                      v_trade_order_no,
                                      v_order_time);
  if (l_result != pkg_error_code.success) then
    return l_result;
  end if;

  ---2.充值特惠记录历史库转移当前库
  l_result := czth_f_trade_back_move(v_order_source,
                                     v_trade_order_no,
                                     v_order_time);
  if (l_result != pkg_error_code.success) then
    return l_result;
  end if;

  return pkg_error_code.success;
end;
/

prompt
prompt Creating function FD_F_TRADE_DOWN_AMOUNT_CHECK
prompt ==============================================
prompt
create or replace function fd_account.fd_f_trade_down_amount_check(v_down_channel_no varchar2,
                                                        v_order_amount    number)
  return varchar2 is

  l_account_id number;
  ----------------------------检查下游账户余额-----------------------------

begin

  ---1.粗检下游账户余额
  select t.account_id
    into l_account_id
    from fd_base_down_account_map t
   inner join fd_base_down_account a on t.account_id = a.account_id
   inner join fd_base_down_channel c on t.channel_no = c.channel_no
   where t.channel_no = v_down_channel_no
     and (a.inner_balance + a.credit_money) >= v_order_amount
     and rownum <= 1;

  return pkg_error_code.success;

exception
  when others then
    return pkg_error_code.balance_low;
end;
/

prompt
prompt Creating function FD_F_TRADE_DOWN_DRAW_CHECK
prompt ============================================
prompt
create or replace function fd_account.fd_f_trade_down_draw_check(v_order_source   number,
                                                      v_trade_order_no varchar2)
  return varchar2 is

  ---------------下游扣款检查----------------
  l_pay_count number;
begin
  select count(1)
    into l_pay_count
    from fd_trade_down_fund t
   where t.trade_order_no = v_trade_order_no
     and t.order_source = v_order_source
     and t.change_type = pkg_down_fund_change_type.debit_amount
     and rownum <= 1;

  if (l_pay_count > 0) then
    return pkg_error_code.data_repeat;
  end if;

  return pkg_error_code.success;
end;
/

prompt
prompt Creating function FD_F_TRADE_PAY_ACCOUNT_GET
prompt ============================================
prompt
create or replace function fd_account.fd_f_trade_pay_account_get(v_order_source  number,
                                                      v_up_channel_no varchar2,
                                                      v_up_account_id out number)
  return varchar2 is

  -----------------获取上游支付账户编号------------------
begin

  ---1.获取上游渠道唯一账户，当有多个账户时，请使用其它方式获取
  select t.account_id
    into v_up_account_id
    from fd_base_up_account_map t
   inner join fd_base_up_account a on t.account_id = a.account_id
   inner join fd_base_up_channel c on t.channel_no = c.channel_no
   inner join fd_base_up_system_map s on t.channel_no = s.channel_no
   where t.channel_no = v_up_channel_no
     and s.source_system_id = v_order_source
   --  and a.status = 0
   --  and c.status = 0
     and rownum <= 2;

  return pkg_error_code.success;
exception
  when others then
    return pkg_error_code.channel_error;
end;
/

prompt
prompt Creating function CZTH_F_TRADE_INFO_CHECK
prompt =========================================
prompt
create or replace function fd_account.czth_f_trade_info_check(v_order_source    number,
                                                   v_trade_order_no  varchar2,
                                                   v_down_channel_no varchar2,
                                                   v_up_channel_no   varchar2,
                                                   v_draw_amount     number,
                                                   v_up_account_id   out number)
  return varchar2 is
  -------------充值特惠扣款检查------------
  l_result varchar2(32);
begin
  ---1.检查扣款是否成功
  l_result := fd_f_trade_down_draw_check(v_order_source, v_trade_order_no);
  if (l_result != pkg_error_code.success) then
    return l_result;
  end if;

  ---2.上游渠道信息检查
  l_result := fd_f_trade_pay_account_get(v_order_source,
                                         v_up_channel_no,
                                         v_up_account_id);
  if (l_result != pkg_error_code.success) then
    return l_result;
  end if;

  ---3.下游渠道信息检查
  l_result := fd_f_trade_down_amount_check(v_down_channel_no, v_draw_amount);
  if (l_result != pkg_error_code.success) then
    return l_result;
  end if;

  ---4.检查上下游公司是否一致
  l_result := czth_f_channel_company_check(v_up_channel_no,
                                           v_down_channel_no);
  if (l_result != pkg_error_code.success) then
    return l_result;
  end if;

  return pkg_error_code.success;
end;
/

prompt
prompt Creating function CZTH_F_TRADE_ORDER_ADD
prompt ========================================
prompt
create or replace function fd_account.czth_f_trade_order_add(v_trade_order_no    varchar2,
                                                  v_trade_delivery_no varchar2,
                                                  v_order_source      number,
                                                  v_up_channel_no     varchar2,
                                                  v_up_account_id     number,
                                                  v_draw_unit         number,
                                                  v_draw_face         number,
                                                  v_draw_amount       number,
                                                  v_service_rate      number,
                                                  v_subsidy           number,
                                                  v_change_type       number,
                                                  v_bill_type         number,
                                                  v_memo              varchar2)
  return varchar2 is
  -------------添加充值特惠记录------------
  l_fd_order_id     number;
  l_down_channel_no varchar2(32);
  l_down_account_id number;
  l_down_company_id number;
  l_business_type   number;
  l_carrier_no      varchar2(32);
  l_province_no     varchar2(32);
  l_pay_count       number;
begin
  ---1.锁订单
  select t.fd_order_id,
         t.down_channel_no,
         t.down_account_id,
         t.down_company_id,
         t.business_type,
         t.carrier_no,
         t.province_no
    into l_fd_order_id,
         l_down_channel_no,
         l_down_account_id,
         l_down_company_id,
         l_business_type,
         l_carrier_no,
         l_province_no
    from fd_trade_order_main t
   where t.trade_order_no = v_trade_order_no
     and t.order_source = v_order_source
     and rownum <= 1
     for update;

  ---2.检查记录是否存在
  select count(1)
    into l_pay_count
    from czth_trade_order t
   where t.trade_delivery_no = v_trade_delivery_no
     and t.order_source = v_order_source
     and t.change_type = v_change_type
     and rownum <= 1;

  if (l_pay_count > 0) then
    return pkg_error_code.success;
  end if;

  ---3.添加充值特惠记录
  insert into czth_trade_order
    (record_id,
     fd_order_id,
     trade_order_no,
     trade_delivery_no,
     order_source,
     down_channel_no,
     down_account_id,
     up_channel_no,
     up_account_id,
     company_id,
     draw_unit,
     draw_face,
     draw_amount,
     service_rate,
     subsidy,
     change_time,
     change_type,
     bill_type,
     business_type,
     carrier_no,
     province_no,
     memo)
  values
    (seq_czth_trade_orderrecord_id.nextval,
     l_fd_order_id,
     v_trade_order_no,
     v_trade_delivery_no,
     v_order_source,
     l_down_channel_no,
     l_down_account_id,
     v_up_channel_no,
     v_up_account_id,
     l_down_company_id,
     v_draw_unit,
     v_draw_face,
     v_draw_amount,
     v_service_rate,
     v_subsidy,
     sysdate,
     v_change_type,
     v_bill_type,
     l_business_type,
     l_carrier_no,
     l_province_no,
     v_memo);

  return pkg_error_code.success;
end;
/

prompt
prompt Creating function CZTH_F_TRADE_RV_ADD
prompt =====================================
prompt
create or replace function fd_account.czth_f_trade_rv_add(v_down_channel_no varchar2,
                                               v_down_account_id number,
                                               v_up_channel_no   varchar2,
                                               v_up_account_id   number,
                                               v_company_id      number,
                                               v_draw_amount     number,
                                               v_service_rate    number,
                                               v_subsidy         number,
                                               v_bill_type       number,
                                               v_business_type   number,
                                               v_memo            varchar2)
  return varchar2 is
  ---------------添加充值特惠的平账记录----------------
begin
  insert into czth_trade_order
    (record_id,
     fd_order_id,
     trade_order_no,
     trade_delivery_no,
     order_source,
     down_channel_no,
     down_account_id,
     up_channel_no,
     up_account_id,
     company_id,
     draw_unit,
     draw_face,
     draw_amount,
     service_rate,
     subsidy,
     change_time,
     change_type,
     bill_type,
     business_type,
     carrier_no,
     province_no,
     memo)
  values
    (seq_czth_trade_orderrecord_id.nextval,
     0,
     '-',
     '-',
     0,
     v_down_channel_no,
     v_down_account_id,
     v_up_channel_no,
     v_up_account_id,
     v_company_id,
     0,
     0,
     v_draw_amount,
     v_service_rate,
     v_subsidy,
     sysdate,
     pkg_up_fund_change_type.debit_amount,
     v_bill_type,
     v_business_type,
     '-',
     '-',
     v_memo);

  return pkg_error_code.success;
end;
/

prompt
prompt Creating function CZTH_F_TRADE_RV_CHECK
prompt =======================================
prompt
create or replace function fd_account.czth_f_trade_rv_check(v_down_channel_no varchar2,
                                                 v_up_channel_no   varchar2,
                                                 v_down_account_id out number,
                                                 v_up_account_id   out number,
                                                 v_company_id      out number)
  return varchar2 is
  ---------------充值特惠交易平账信息检查------------
  l_up_company_id number;
begin
  ---1.检查充值特惠下游渠道
  select t.company_id, a.account_id
    into v_company_id, v_down_account_id
    from fd_base_down_channel t
   inner join fd_base_down_account_map m
      on t.channel_no = m.channel_no
   inner join fd_base_down_account a
      on m.account_id = a.account_id
   where t.channel_no = v_down_channel_no;

  ---2.检查充值特惠上游渠道
  select t.company_id, a.account_id
    into l_up_company_id, v_up_account_id
    from fd_base_up_channel t
   inner join fd_base_up_account_map m
      on t.channel_no = m.channel_no
   inner join fd_base_up_account a
      on m.account_id = a.account_id
   where t.channel_no = v_up_channel_no;

  ---3.检查平账公司
  if v_company_id != l_up_company_id then
    return pkg_error_code.company_error;
  end if;

  return pkg_error_code.success;
end;
/

prompt
prompt Creating function FD_F_MANUAL_DOWN_RV_TRADE
prompt ===========================================
prompt
create or replace function fd_account.fd_f_manual_down_rv_trade(v_down_channel_no     varchar2,
                                                     v_down_account_id     number,
                                                     v_down_draw_amount    number,
                                                     v_down_real_amount    number,
                                                     v_business_type       number,
                                                     v_bill_type           number,
                                                     v_create_user         varchar2,
                                                     v_memo                varchar2,
                                                     v_split_profit_status in number default null,
                                                     v_trade_fund_id       out number)
  return varchar2 is
  l_inner_balance    number;
  l_trade_up_fund_id number;
  l_down_company     number;

  --------------------下游渠道交易平账-----------------------
begin
  ---1.获取变动记录参数
  select seq_trade_down_fund_id.nextval, seq_trade_up_fund_id.nextval
    into v_trade_fund_id, l_trade_up_fund_id
    from dual;

  select t.company_id
    into l_down_company
    from fd_base_down_channel t
   where t.channel_no = v_down_channel_no;

  if v_down_draw_amount != 0 then
  
    select t.inner_balance
      into l_inner_balance
      from fd_base_down_account t
     where t.account_id = v_down_account_id
       for update;
  
    ---2.修改账户余额添加资金变动
    update fd_base_down_account t
       set t.inner_balance =
           (l_inner_balance - v_down_draw_amount),
           t.last_edit_user = v_create_user,
           t.last_edit_time = sysdate
     where t.account_id = v_down_account_id;
  else
    select t.inner_balance
      into l_inner_balance
      from fd_base_down_account t
     where t.account_id = v_down_account_id;
  
  end if;

  ---3.下游手工记录添加
  insert into fd_trade_down_manual
    (record_id,
     channel_no,
     account_id,
     adjust_id,
     has_adjust,
     add_type,
     change_amount,
     change_time,
     balance,
     create_user,
     memo,
     real_amount)
  values
    (v_trade_fund_id,
     v_down_channel_no,
     v_down_account_id,
     0,
     0,
     pkg_down_manual_change_type.trade_revise,
     v_down_draw_amount,
     sysdate,
     (l_inner_balance - v_down_draw_amount),
     v_create_user,
     nvl2(v_memo, v_memo || ',下游交易平账', '下游交易平账'),
     v_down_real_amount);

  ---4.下游资金变动添加(通过trade_order_no关联上游资金变动)
  insert into fd_trade_down_fund
    (record_id,
     fd_order_id,
     channel_no,
     account_id,
     trade_order_no,
     change_type,
     change_amount,
     balance,
     memo)
  values
    (v_trade_fund_id,
     0,
     v_down_channel_no,
     v_down_account_id,
     'SARV' || l_trade_up_fund_id,
     pkg_down_fund_change_type.debit_amount,
     v_down_draw_amount,
     (l_inner_balance - v_down_draw_amount),
     v_memo);

  ---5.上游资金变动（上游下游公司相同避免结算)
  insert into fd_trade_up_fund
    (record_id,
     trade_order_no,
     down_channel_no,
     down_account_id,
     down_company_id,
     up_channel_no,
     up_account_id,
     up_company_id,
     down_draw_unit,
     down_draw_face,
     down_draw_amount,
     down_real_amount,
     up_draw_amount,
     up_real_amount,
     change_time,
     change_type,
     bill_type,
     business_type,
     balance,
     memo,
     split_profit_status)
  values
    (l_trade_up_fund_id,
     'SARV' || l_trade_up_fund_id,
     v_down_channel_no,
     v_down_account_id,
     l_down_company,
     0,
     0,
     l_down_company,
     0,
     0,
     v_down_draw_amount,
     v_down_real_amount,
     0,
     0,
     sysdate,
     pkg_up_fund_change_type.debit_amount,
     v_bill_type,
     v_business_type,
     0,
     v_memo,
     v_split_profit_status);

  return pkg_error_code.success;
end;
/

prompt
prompt Creating function FD_F_MANUAL_UP_RV_TRADE
prompt =========================================
prompt
create or replace function fd_account.fd_f_manual_up_rv_trade(v_up_channel_no    varchar2,
                                                   v_up_account_id    number,
                                                   v_up_draw_amount   number,
                                                   v_up_real_amount   number,
                                                   v_business_type    number,
                                                   v_bill_type        number,
                                                   v_create_user      varchar2,
                                                   v_memo             varchar2,
                                                   v_trade_up_fund_id out number)
  return varchar2 is
  l_inner_balance number;
  l_up_company    number;

  --------------------下游渠道交易平账-----------------------
begin
  ---1.获取变动记录参数
  select t.company_id
    into l_up_company
    from fd_base_up_channel t
   where t.channel_no = v_up_channel_no;

  if v_up_draw_amount != 0 then
    select t.inner_balance
      into l_inner_balance
      from fd_base_up_account t
     where t.account_id = v_up_account_id
       for update;
  
    ---2.修改账户余额添加资金变动
    update fd_base_up_account t
       set t.inner_balance =
           (l_inner_balance - v_up_draw_amount),
           t.last_edit_user = v_create_user,
           t.last_edit_time = sysdate
     where t.account_id = v_up_account_id;
  else
    select t.inner_balance
      into l_inner_balance
      from fd_base_up_account t
     where t.account_id = v_up_account_id;
  end if;

  ---3.添加上游加款记录
  select seq_trade_up_fund_id.nextval into v_trade_up_fund_id from dual;

  insert into fd_trade_up_manual
    (record_id,
     channel_no,
     account_id,
     adjust_id,
     manual_change_type,
     change_amount,
     change_time,
     balance,
     memo,
     create_user,
     has_adjust,
     real_amount)
  values
    (v_trade_up_fund_id,
     v_up_channel_no,
     v_up_account_id,
     0,
     pkg_up_manual_change_type.trade_revise,
     v_up_draw_amount,
     sysdate,
     (l_inner_balance - v_up_draw_amount),
     v_memo,
     v_create_user,
     0,
     v_up_real_amount);

  ---4.上游资金变动（上游下游公司相同避免结算)
  insert into fd_trade_up_fund
    (record_id,
     down_channel_no,
     down_account_id,
     down_company_id,
     up_channel_no,
     up_account_id,
     up_company_id,
     down_draw_unit,
     down_draw_face,
     down_draw_amount,
     down_real_amount,
     up_draw_amount,
     up_real_amount,
     change_time,
     change_type,
     bill_type,
     business_type,
     balance,
     memo)
  values
    (v_trade_up_fund_id,
     0,
     0,
     l_up_company,
     v_up_channel_no,
     v_up_account_id,
     l_up_company,
     0,
     0,
     0,
     0,
     v_up_draw_amount,
     v_up_real_amount,
     sysdate,
     pkg_up_fund_change_type.debit_amount,
     v_bill_type,
     v_business_type,
     (l_inner_balance - v_up_draw_amount),
     v_memo);

  return pkg_error_code.success;
end;
/

prompt
prompt 