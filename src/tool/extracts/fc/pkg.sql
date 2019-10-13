Creating package ACTION_TYPE
prompt ============================
prompt
create or replace package qxfc.action_type is

  /*流程步骤类型*/

  --获取实名信息
  get_identity constant varchar2(32) := 'get_identity';

  --写卡
  write_card constant varchar2(32) := 'write_card';

  --打快递单
  print_express constant varchar2(32) := 'print_express';

  --平台发货
  plat_delivery constant varchar2(32) := 'plat_delivery';

  --缴费
  charge constant varchar2(32) := 'charge';

  --设备
  device constant varchar2(32) := 'device';

  --预约安装
  book_install constant varchar2(32) := 'book_install';

  --查询物流信息
  query_express constant varchar2(32) := 'query_mail';
end;
/

prompt
prompt Creating package ACTIVE_STATUS
prompt ==============================
prompt
create or replace package qxfc.active_status is

  /********************
  *激活状态
  *********************/

  no_need constant number(2) := 10;

  wait constant number(2) := 20;

  dealing constant number(2) := 30;

  failure constant number(2) := 90;

  success constant number(2) := 0;

end;
/

prompt
prompt Creating package BIND_MODE
prompt ==========================
prompt
create or replace package qxfc.Bind_Mode is

  /********************
  *绑定模式
  *********************/

  Free constant number(2) := 0;

  Force constant number(2) := 1;
end;
/

prompt
prompt Creating package DATA_CURSOR
prompt ============================
prompt
create or replace package qxfc.data_cursor is
  type pointer is ref cursor;
end;
/

prompt
prompt Creating package DEBIT_MODE
prompt ===========================
prompt
create or replace package qxfc.Debit_Mode is

  -- 上游扣款模式

  --先扣后返
  immediate CONSTANT Number(1) := 1;

  --按激活扣
  active CONSTANT Number(1) := 2;
end;
/

prompt
prompt Creating package ENABLE_STATUS
prompt ==============================
prompt
create or replace package qxfc.enable_status is

  /********************
  *状态码
  *********************/

  --启用
  enabled constant number(1) := 0;

  --禁用
  disabled constant number(1) := 1;

end;
/

prompt
prompt Creating package ERROR_CODE
prompt ===========================
prompt
create or replace package qxfc.error_code is

    /********************
    *错误码
    *********************/

    --成功
    suc constant number(3) := 100;

    --人工审核
    manual constant number(3) := 999;

    --处理失败
    failure constant number(3) := 200;
end;
/

prompt
prompt Creating package EXPRESS_STATUS
prompt ===============================
prompt
create or replace package qxfc.express_status is

  /********************
  *快递处理状态
  *********************/

  --等待打印快递单
  wait_print constant number(2) := 10;

  --正在打印
  printing constant number := 11;

  --等待平台发货
  wait_plat_delivery constant number(2) := 20;

  --平台发货处理中
  delivery constant number := 30;

  --全部失败
  failure constant number(2) := 90;

  --全部成功
  success constant number(2) := 0;
end;
/

prompt
prompt Creating package FEE_TYPE
prompt =========================
prompt
create or replace package qxfc.FEE_TYPE is

  /********************
  *手续费类型
  *********************/

  --固定
  fix constant number(1) := 0;

  --按比例
  rate constant number(1) := 1;

end;
/

prompt
prompt Creating package FLOW_MODE
prompt ==========================
prompt
create or replace package qxfc.flow_mode is

  /********************
  *步骤驱动方式
  *********************/

  --自动
  auto constant number(1) := 0;

  --禁用
  manual constant number(1) := 1;
end;
/

prompt
prompt Creating package FUND_CHANGE_TYPE
prompt =================================
prompt
create or replace package qxfc.Fund_Change_Type is

  /********************
  *资金变动类型
  *********************/

  --加款
  add CONSTANT Number(1) := 1;

  --扣款
  reduce CONSTANT Number(1) := 2;

  --退款
  refund CONSTANT Number(1) := 3;

  --佣金
  reward constant number := 4;

  --快递费
  express constant number := 5;
end;
/

prompt
prompt Creating package OPERATE_TYPE
prompt =============================
prompt
create or replace package qxfc.operate_type is

  /********************
  *操作类型
  *********************/
  --人工
  manual constant number(1) :=1;
  --系统自动
  system constant number(1) := 2;
end;
/

prompt
prompt Creating package ORDER_STATUS
prompt =============================
prompt
create or replace package qxfc.order_status is

  /********************
  *订单状态
  *********************/

  --等待初始化
  wait_init constant number(2) := 10;

  --等待充值
  wait constant number(2) := 20;

  --正在充值
  process constant number(2) := 30;

  --全部失败
  failure constant number(2) := 90;

  --全部成功
  success constant number(2) := 0;

end;
/

prompt
prompt Creating package PROCESS_STATUS
prompt ===============================
prompt
create or replace package qxfc.process_status is

  /********************
  *处理状态
  *********************/
  no_need constant number := 10;

  --等待
  wait constant number := 20;

  --正在处理
  process constant number := 30;

  --全部失败
  failure constant number := 90;

  --全部成功
  success constant number := 0;
end;
/

prompt
prompt Creating package REFUND_STATUS
prompt ==============================
prompt
create or replace package qxfc.refund_status is

  /********************
  *退款状态
  *********************/

  --等待确认
  wait_confirm constant number(2) := 10;

  --等待退款
  wait constant number(2) := 20;

  --正在退款
  process constant number(2) := 30;

  --失败
  failure constant number(2) := 90;

  --成功
  success constant number(2) := 0;

end;
/

prompt
prompt Creating package REFUND_TYPE
prompt ============================
prompt
create or replace package qxfc.refund_type is

  /********************
  *退款类型
  *********************/

  --线上退款
  online constant number(2) := 1;

  --线下退款
  offline constant number := 2;

end;
/

prompt
prompt Creating package SCRIPT_TYPE
prompt ============================
prompt
create or replace package qxfc.script_type is

  /*上游脚本类型*/

  --打快递单
  print_express constant number := 1;

  --淘宝发货
  taobao_delivery constant number := 2;

  --查询
  query constant number := 3;

  --退款
  refund constant number := 4;

  --写卡
  write_card constant number := 5;

  --宽带续费
  brand_xf constant number := 6;

  --号卡续费
  card_xf constant number := 7;

  ------------------------下游脚本类型--------------
  --订单通知
  down_order_notify constant number := 31;

  --退款通知
  down_refund_notify constant number := 32;

  --更新快递单号
  down_plat_delivery constant number := 33;

  --获取实名信息
  down_get_identity constant number := 34;
end;
/

prompt
prompt Creating package SPECIAL_PRODUCT_TYPE
prompt =====================================
prompt
create or replace package qxfc.special_product_type is

  /*产品类型*/

  --快递
  express constant number := 1;

  --设备
  device constant number := 32;
end;
/

prompt
prompt Creating package WARN_KEYWORDS
prompt ==============================
prompt
create or replace package qxfc.Warn_Keywords is

  recv_exception constant varchar2(32) := '收单异常';

  flow_exception constant varchar2(32) := '流程异常';

  task_exception constant varchar2(32) := '任务异常';

end;
/

prompt
prompt Creating package WRITE_CARD_MODE
prompt ================================
prompt
create or replace package qxfc.write_card_mode is

  /********************
  *写卡方式
  *********************/

  --无须写卡
  none constant number := 0;

  --自动
  auto constant number(1) := 1;

  --手动
  manual constant number(1) := 2;

  --三方代客下单
  proxy constant number := 3;
end;
/

prompt
prompt Creating type SPLIT_TYPE
prompt ========================
prompt
CREATE OR REPLACE TYPE QXFC."SPLIT_TYPE"                                          IS TABLE OF VARCHAR2 (1000)
/

prompt
prompt 