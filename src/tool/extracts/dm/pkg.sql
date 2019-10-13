Creating package ACCOUNT_TYPE
prompt =============================
prompt
create or replace package dm_system.account_type is
  ------------------------------------------
  -- 账号类型
  ------------------------------------------
  alipay constant number(2) := 1; -- 支付宝
  wechat constant number(2) := 2; -- 微信
  jd     constant number(2) := 3; -- 京东

end;
/

prompt
prompt Creating package BUSINESS_TYPE
prompt ==============================
prompt
create or replace package dm_system.business_type is
  ------------------------------------------
  -- 业务类型
  ------------------------------------------
  all_type   constant number(2) := 0; -- 所有业务类型
  tel_card   constant number(2) := 1; -- 电话号卡
  mob_charge constant number(2) := 2; -- 手机话费
  mob_flow   constant number(2) := 3; -- 手机流量
  mob_meal   constant number(2) := 4; -- 手机套餐
  video_vip   constant number(2) := 5; -- 视频会员

end;
/

prompt
prompt Creating package CHANGE_TYPE
prompt ============================
prompt
create or replace package dm_system.change_type is
  ------------------------------------------
  -- 资金变动类型
  ------------------------------------------
  income   constant number(1) := 1; -- 收款
  deduct   constant number(1) := 2; -- 扣款
  refund   constant number(1) := 3; -- 退款
  withdraw constant number(1) := 4; -- 提现
end;
/

prompt
prompt Creating package DEAL_CODE
prompt ==========================
prompt
create or replace package dm_system.deal_code is
  ----------------------------------------------------
  -- 处理码
  ----------------------------------------------------
  succeed constant number(1) := 0; -- 成功
  failed  constant number(1) := 1; -- 失败  
  unknown constant number(1) := 9; -- 未知

end;
/

prompt
prompt Creating package DEAL_STATUS
prompt ============================
prompt
create or replace package dm_system.deal_status is
  ----------------------------------------------------
  -- 处理状态
  ----------------------------------------------------
  succeed    constant number(2) := 0; -- 处理成功
  noneed     constant number(2) := 10; -- 无需处理
  waiting    constant number(2) := 20; -- 等待处理
  processing constant number(2) := 30; -- 正在处理
  failed     constant number(2) := 90; -- 处理失败
end;
/

prompt
prompt Creating package DEDUCT_MODE
prompt ============================
prompt
create or replace package dm_system.deduct_mode is
  ------------------------------------------
  -- 扣费模式
  ------------------------------------------
  none  constant number(1) := 0; -- 不扣费
  early constant number(1) := 1; -- 先扣费
  later constant number(1) := 2; -- 后扣费

end;
/

prompt
prompt Creating package DIVISION_MODE
prompt ==============================
prompt
create or replace package dm_system.division_mode is
  ------------------------------------------
  -- 分流模式
  ------------------------------------------
  priority constant number(2) := 1; -- 优先级
  percent  constant number(2) := 2; -- 百分比

end;
/

prompt
prompt Creating package ENABLE_STATUS
prompt ==============================
prompt
create or replace package dm_system.enable_status is
  ------------------------------------------
  -- 启用状态
  ------------------------------------------
  enabled  constant number(1) := 0; -- 启用
  disabled constant number(1) := 1; -- 禁用
end;
/

prompt
prompt Creating package ERROR_CODE
prompt ===========================
prompt
create or replace package dm_system.error_code is
  ----------------------------------------------------
  -- 数据库错误码
  ----------------------------------------------------

  success  constant number(3) := 100; -- 成功
  failed   constant number(3) := 200; -- 失败  
  except   constant number(3) := 999; -- 异常
  done     constant number(3) := 201; -- 已经办理
  repeat   constant number(3) := 202; -- 重复
  overload constant number(3) := 203; -- 次数达限
  
end;
/

prompt
prompt Creating package NOTIFY_TYPE
prompt ============================
prompt
create or replace package dm_system.notify_type is
  ------------------------------------------
  -- 通知类型
  ------------------------------------------
  all_type       constant number(2) := 0; -- 所有
  order_state    constant number(2) := 1; -- 订单状态
  activate_state constant number(2) := 2; -- 激活状态
  recharge_state constant number(2) := 3; -- 首充状态

end;
/

prompt
prompt Creating package PICTURE_MODE
prompt =============================
prompt
create or replace package dm_system.picture_mode is
  ------------------------------------------
  -- 上游照片模式
  ------------------------------------------
  no_need     constant number(1) := 0; -- 无需照片
  only_photo  constant number(1) := 1; -- 上游重提照片
  retry_order constant number(1) := 2; -- 上游重提订单
end;
/

prompt
prompt Creating package PKG_CURSOR
prompt ===========================
prompt
create or replace package dm_system.pkg_cursor is
    type pointer is ref cursor;
end;
/

prompt
prompt Creating package RULE_CND
prompt =========================
prompt
create or replace package dm_system.rule_cnd is
  ------------------------------------------
  -- 规则条件
  ------------------------------------------
  range      constant number(2) := 1; -- 范围
  equal      constant number(2) := 2; -- 等于
  unequal    constant number(2) := 3; -- 不等于
  include    constant number(2) := 4; -- 包含
  exclude    constant number(2) := 5; -- 不包含
  not_exceed constant number(2) := 6; -- 不超过
  
end;
/

prompt
prompt Creating package RULE_TYPE
prompt ==========================
prompt
create or replace package dm_system.rule_type is
  ------------------------------------------
  -- 规则类型
  ------------------------------------------
  ip_addr       constant number(2) := 1; -- IP地址
  phone_no      constant number(2) := 2; -- 手机号
  card_user_age constant number(2) := 3; -- 年龄
  card_user_id  constant number(2) := 4; -- 身份证号
  contact_addr  constant number(2) := 5; -- 联系地址

end;
/

prompt
prompt Creating package SCRIPT_TYPE
prompt ============================
prompt
create or replace package dm_system.script_type is
  ------------------------------------------
  -- 脚本类型
  ------------------------------------------  
  order_submit  constant number(2) := 1; -- 订单提交
  order_query   constant number(2) := 2; -- 订单查询
  balnc_query   constant number(2) := 3; -- 余额查询
  refund_apply  constant number(2) := 4; -- 退款申请
  vcode_send    constant number(2) := 5; -- 验证码发送
  vcode_submit  constant number(2) := 6; -- 验证码提交
  video_submit  constant number(2) := 7; -- 视频会员提交
  picture_retry constant number(2) := 8; -- 重提身份证

end;
/

prompt
prompt Creating package WHITE_TYPE
prompt ===========================
prompt
create or replace package dm_system.white_type is
  ------------------------------------------
  -- 白名单类型
  ------------------------------------------
  ip_addr  constant number(1) := 1; -- IP地址
  phone_no constant number(1) := 2; -- 手机号

end;
/

prompt
prompt Creating type STRING_ARRAY
prompt ==========================
prompt
CREATE OR REPLACE TYPE DM_SYSTEM.STRING_ARRAY is table of varchar2 (4000)
/

prompt
prompt 