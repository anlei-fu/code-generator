Creating package PKG_18CAP_TYPE
prompt ===============================
prompt
create or replace package fd_account.pkg_18cap_type is

  /********************
  *   18平台资产类型
  *********************/
  capital  constant number(3) := 1; --- 资产类
  negative constant number(3) := 2; --- 负载
end;
/

prompt
prompt Creating package PKG_ACTIVITY_CHANGE_TYPE
prompt =========================================
prompt
create or replace package fd_account.pkg_activity_change_type is

  /********************
  *活动变动类型
  *********************/
  --活动预付款
  prepay constant number(3) := 1;
  --增加利润
  add_profit constant number(3) := 2;
  --减少利润
  minus_profit constant number(3) := 3;
end;
/

prompt
prompt Creating package PKG_AGENT_FUND_CHANGE_TYPE
prompt ===========================================
prompt
create or replace package fd_account.pkg_agent_fund_change_type is

  /********************
  *   代理人资金变动类型
  *   创建人：周荣省
  *   创建时间：2019-04-11
  *********************/
  add_amount     constant number(3) := 1; --- 加款
  debit_amount   constant number(3) := 2; --- 交易扣款
  refund_amount  constant number(3) := 3; --- 交易退款
  draw_amount    constant number(3) := 4; --- 提款
end;
/

prompt
prompt Creating package PKG_AGENT_MANUAL_CHANGE_TYPE
prompt =============================================
prompt
create or replace package fd_account.pkg_agent_manual_change_type is

  ---------------------------------------------
  --功能：代理人手工加减款类型
  --创建人：周荣省
  --创建时间：2019-04-11
  ---------------------------------------------
  add_amount           constant number(3) := 11; --- 加款+
  red_recharge         constant number(3) := 12; --- 红冲加款-
  draw_amount          constant number(3) := 13; --- 提款+
  draw_red             constant number(3) := 14; --- 红冲提款-
  debit_revise_add     constant number(3) := 21; --- 扣款平账加+
  debit_revise_minus   constant number(3) := 22; --- 扣款平账减-
  refund_revise_add    constant number(3) := 31; --- 退款平账加+
  refund_revise_minus  constant number(3) := 32; --- 退款平账减-
  balance_revise_add   constant number(3) := 41; --- 余额平账加+
  balance_revise_minus constant number(3) := 42; --- 余额平账减-
  service_add          constant number(3) := 51; --- 手续费加+
  service_red          constant number(3) := 52; --- 手续费红冲+
  trade_revise         constant number(3) := 60; --- 交易平账
  agent_revise         constant number(3) := 61; ---代理费平账
end;
/

prompt
prompt Creating package PKG_APPLY_RV_STATUS
prompt ====================================
prompt
create or replace package fd_account.pkg_apply_rv_status is

  /********************
  *平账申请状态
  *********************/
  --完成
  apply_complete constant number(3) := 0;
  --提交申请
  apply_submit constant number(3) := 1;
  --作废
  apply_invalid constant number(3) := 9;
end;
/

prompt
prompt Creating package PKG_APPLY_RV_TYPE
prompt ==================================
prompt
create or replace package fd_account.pkg_apply_rv_type is

  /********************
  *平账申请处理类型
  *********************/
  --交易平账
  apply_trade_rv constant number(3) := 1;
  --余额平账
  apply_balance_rv constant number(3) := 2;
end;
/

prompt
prompt Creating package PKG_AUDIT_STATUS
prompt =================================
prompt
create or replace package fd_account.Pkg_Audit_status is

    /********************
    *审核状态
    *********************/
	--未开始
NotStart constant number(3) := 1;
--等待审核
Wait constant number(3) := 2;
--正在审核
Auditing constant number(3) := 3;
--审核完成
Complete constant number(3) := 0;

	end;
/

prompt
prompt Creating package PKG_B2E_ADD_APPLY_STATUS
prompt =========================================
prompt
create or replace package fd_account.pkg_b2e_add_apply_status is

  -----------------------------------
  --功能：下游加款申请状态
  --创建人：周荣省
  --创建时间：2019-09-12
  -----------------------------------
  status_success constant number(3) := 0;--处理成功
  status_wait constant number(3) := 10;--等待处理
  status_doing constant number(3) := 20;--处理中
  status_fail constant number(3) := 90;--处理失败

end;
/

prompt
prompt Creating package PKG_B2E_AMOUNT_AUDIT_STATUS
prompt ============================================
prompt
create or replace package fd_account.pkg_b2e_amount_audit_status is

  /********************
  *审核类型
  *********************/
  --运营审核
  operate_audit constant number(3) := 1;
  --财务审核
  finance_audit constant number(3) := 2;
  --审核完成
  complate constant number(3) := 0;
  --审核取消
  cancel constant number(3) := 9;
end;
/

prompt
prompt Creating package PKG_B2E_CREATE_TYPE
prompt ====================================
prompt
create or replace package fd_account.pkg_b2e_create_type is

  /********************
  *主记录创建类型
  *********************/
  --自动创建
  auto_create constant number(3) := 1;
  --用户创建
  user_create constant number(3) := 2;

end;
/

prompt
prompt Creating package PKG_B2E_DEAL_STATUS
prompt ====================================
prompt
create or replace package fd_account.Pkg_b2e_deal_status is

  /********************
  *加款审核状态
  *********************/
  --未开始
  not_start constant number(3) := 1;
  --等待
  wait constant number(3) := 2;
  --正在审核
  dealing constant number(3) := 3;
  --成功
  success constant number(3) := 0;
  --失败
  failure constant number(3) := 9;

end;
/

prompt
prompt Creating package PKG_B2E_DETAILS_QUERY_STATUS
prompt =============================================
prompt
create or replace package fd_account.Pkg_b2e_details_query_status is

  /********************
  *查询转账结果状态
  *********************/
  --未开始
  not_start constant number(3) := 1;
  --等待执行
  wait constant number(3) := 2;
  --正在执行
  dealing constant number(3) := 3;
  --查询结果为成功
  complate constant number(3) := 0;

end;
/

prompt
prompt Creating package PKG_B2E_DETAILS_SUBMIT_STATUS
prompt ==============================================
prompt
create or replace package fd_account.pkg_b2e_details_submit_status is

  /********************
  *支付子记录提交状态
  *********************/
  --等待提交
  Wait constant number(3) := 2;
  --正在提交
  Dealing constant number(3) := 3;
  --执行完成
  complate constant number(3) := 0;
  --执行失败
  failure constant number(3) := 9;

end;
/

prompt
prompt Creating package PKG_B2E_PAYMENT_AUDIT_STATUS
prompt =============================================
prompt
create or replace package fd_account.Pkg_b2e_payment_audit_status is

  /********************
  *支付审核状态
  *********************/
  --等待
  wait constant number(3) := 2;
  --正在支付
  dealing constant number(3) := 3;
  --支付成功
  success constant number(3) := 0;
  --支付失败
  failure constant number(3) := 9;

end;
/

prompt
prompt Creating package PKG_B2E_PAYMENT_CODE_TYPE
prompt ==========================================
prompt
create or replace package fd_account.pkg_b2e_PAYMENT_CODE_type is

  /********************
  *银行接口对应的编码方式
  *********************/
  --支付
  pay constant number(3) := 1;
  --支付查询
  pay_query constant number(3) := 2;

end;
/

prompt
prompt Creating package PKG_B2E_RECEIVED_STATUS
prompt ========================================
prompt
create or replace package fd_account.Pkg_b2e_received_status is

  /********************
  *加款审核状态
  *********************/
  --未开始
  not_start constant number(3) := 1;
  --正在审核
  dealing constant number(3) := 3;
  --成功
  success constant number(3) := 0;
  --失败
  failure constant number(3) := 9;

end;
/

prompt
prompt Creating package PKG_B2E_RECV_MATCH_TYPE
prompt ========================================
prompt
create or replace package fd_account.Pkg_b2e_recv_match_type is

  /********************
  *加款审核状态
  *********************/
  --系统匹配
  sys_match constant number(3) := 1;
  --用户匹配
  user_match constant number(3) := 2;
  --无需匹配
  no_need constant number(3) := 9;

end;
/

prompt
prompt Creating package PKG_B2E_RECV_TRADE_TYPE
prompt ========================================
prompt
create or replace package fd_account.pkg_b2e_recv_trade_type is
  /***********************
  银企直连银行交易记录类型
  ***********************/
  payment constant number(3) := 1; ---支付交易
  receive constant number(3) := 2; ---收款交易
end;
/

prompt
prompt Creating package PKG_B2E_SAME_BANK_TYPE
prompt =======================================
prompt
create or replace package fd_account.pkg_b2e_same_bank_type is

  /********************
  *银企直连同行跨行信息
  *********************/
  --通用
  is_all constant number(3) := 0;
  --同行
  is_same_bank constant number(3) := 1;
  --跨行
  is_different_bank constant number(3) := 2;

end;
/

prompt
prompt Creating package PKG_BALANCE_SYNC_STATUS
prompt ========================================
prompt
create or replace package fd_account.pkg_balance_sync_status is

  /********************
  *   报警同步状态
  *********************/
  complate constant number(3) := 0; --- 同步完成
  wait     constant number(3) := 1; --- 等待同步
  syncing  constant number(3) := 2; --- 正在同步
  failed   constant number(3) := 9; --- 同步失败
end;
/

prompt
prompt Creating package PKG_BALANCE_WARN_TYPE
prompt ======================================
prompt
create or replace package fd_account.pkg_balance_warn_type is

  /********************
  *   报警类型
  *********************/
  single_warn constant number(3) := 1; --- 单个支付账户不足
  all_warn    constant number(3) := 2; --- 合计支付账户不足

end;
/

prompt
prompt Creating package PKG_BANK_FUND_CHANGE_TYPE
prompt ==========================================
prompt
create or replace package fd_account.pkg_bank_fund_change_type is

  /********************
  *  实体卡变动类型
  *********************/
  add_amount   constant number(3) := 1; --- 加款
  minus_amount constant number(3) := 2; --- 减款
end;
/

prompt
prompt Creating package PKG_BANK_PAYMENT_TYPE
prompt ======================================
prompt
create or replace package fd_account.Pkg_bank_payment_type is

  /********************
  *银企直连加款类型
  *********************/

  --民生代付
  proxy_pay constant number(1) := 1;
  --民生小额网银
  online_small constant number(1) := 2;
  --民生大额网银
  online_big constant number(1) := 3;
  --民生网银互联
  cyber_bank constant number(1) := 5;

  --建行跨行对私5w内
  js_super_bank constant number(3) := 10;
  --建行跨行代发扣款
  js_proxy_pay constant number(3) := 11;
  --建行跨行大额支付
  js_big_pay constant number(3) := 12;
  --建行跨行非工作时对公
  js_night_public constant number(3) := 13;
  --建行跨行非工作时对私
  js_night_private constant number(3) := 14;
  --建行跨行对公节假日
  js_holiday_public constant number(3) := 15;
  --建行跨行对私节假日
  js_holiday_private constant number(3) := 16;
  --建行行内转账
  js_inner_pay constant number(3) := 17;

  --中信同行
  zx_inner_pay constant number(3) := 20;
  --中信大额支付
  zx_big_pay constant number(3) := 21;
  --中信网银互联
  zx_cyber_bank constant number(3) := 22;
  --中信夜间通道
  zx_night_pay constant number(3) := 23;
end;
/

prompt
prompt Creating package PKG_BANK_TYPE
prompt ==============================
prompt
create or replace package fd_account.Pkg_Bank_Type is

    /********************
    *银行类型
    *********************/
	--其他
Others constant number(3) := -1;
--财富通
Tenpay constant number(3) := 0;
--支付宝
Alipay constant number(3) := 1;
--移动钱包
MobileWallet constant number(3) := 2;
--19E钱包
I9EWallet constant number(3) := 3;
--银行账户
BankAccount constant number(3) := 4;
--北京银行
BOB constant number(3) := 5;
--建设银行
CCB constant number(3) := 6;
--京东
JD constant number(3) := 7;
--民生银行
BOC constant number(3) := 8;
--联通迷你
CUCCMini constant number(3) := 9;
--交通银行
BCM constant number(3) := 10;
--财富通企业
TenpayCo constant number(3) := 11;

	end;
/

prompt
prompt Creating package PKG_BANK_USE_TYPE
prompt ==================================
prompt
create or replace package fd_account.pkg_bank_use_type is

  /********************
  *  实体卡资金变动用途
  *********************/
  up_add           constant number(3) := 1; --- 上游加款
  down_add         constant number(3) := 2; --- 下游加款
  transfer         constant number(3) := 3; --- 转账
  up_commission    constant number(3) := 4; ---上游佣金结算
  down_commission  constant number(3) := 5; ---下游佣金结算
  profits_withdraw constant number(3) := 6; ---利润提取
  card_settle      constant number(3) := 7; ---收卡结算
  service_fee      constant number(3) := 8; ---收取收取费
  borrow           constant number(3) := 9; ---借支
  deposit          constant number(3) := 10; ---押金
  bond             constant number(3) := 11; ---保证金
  short_borrow     constant number(3) := 12; ---短期借款
  import_amount    constant number(3) := 13; ---倒款
  refund_amount    constant number(3) := 14; ---通过银行卡的特殊退款
  prepayment       constant number(3) := 15; ---预付款
  personal_borrow  constant number(3) := 16; ---个人账户借支
  transfer_refund  constant number(3) := 17; ---转账退款账户
  activity         constant number(3) := 18; ---活动专用
  manual_refund    constant number(3) := 19; ---手工转账退款账户
  up_draw          constant number(3) := 21; ---上游提款
  down_draw        constant number(3) := 22; ---下游提款
  others_type      constant number(3) := 99; --其他

  dk_down_settle constant number(3) := 23; ---代扣业务:下游结算
  dk_up_settle   constant number(3) := 24; ---代扣业务:上游结算
end;
/

prompt
prompt Creating package PKG_BILL_TYPE
prompt ==============================
prompt
create or replace package fd_account.pkg_bill_type is

  /********************
  *利润类型
  *********************/
  --前向
  front constant number(1) := 1;
  --后向
  back constant number(1) := 2;

end;
/

prompt
prompt Creating package PKG_BUSINESS_TYPE
prompt ==================================
prompt
create or replace package fd_account.pkg_business_type is

  /********************
  *业务类型
  *********************/
  --游戏
  game constant number(1) := 1;
  --话费
  huafei constant number(1) := 2;
  --Q币
  qq constant number(1) := 3;
  --固话
  fixedtel constant number(1) := 4;
  --国内流量
  QGFlow constant number(1) := 5;
  --省内流量
  SNFlow constant number(1) := 6;
  --市内流量
  CityFlow constant number(1) := 7;
  --国际流量
  GJFlow constant number(1) := 8;
  --全国联通国际包天流量
  GJBTFlow constant number(1) := 9;

  --加油卡
  FuelCard constant number(2) := 11;
  --加油卡车队卡
  CarFuel constant number(2) := 12;

  --手机代售
  PhoneConsignment constant number(2) := 13;
  --手机销售
  PhoneSale constant number(2) := 14;
  --号卡代售
  CardConsignment constant number(2) := 15;
  --宽带代售
  wbConsignment constant number(2) := 16;

  -- 代扣业务.点播
  DK_Dianbo constant number(2) := 17;
  -- 代扣业务.包月
  DK_Monthly constant number(2) := 18;
  -- 代扣业务.SDK
  DK_SDK constant number(2) := 19;

  -- 国内24H流量
  QG24HFlow constant number(2) := 20;
  -- 省内20天流量
  SN20DFlow constant number(2) := 21;
  -- 省内24H流量
  SN24HFlow constant number(2) := 22;
  --全国季度包
  QGJDFlow constant number(2) := 23;
  --全国半年包
  QGBNFlow constant number(2) := 24;
  --全国转移流量
  QGZYFlow constant number(2) := 25;

  --充值卡收购
  DK_Recharge_Card constant number(2) := 26;

  --积分兑换
  Integral_exchange constant number(2) := 27;

  --非充快递费
  Express_fee constant number(2) := 28;

  --加油卡开户
  Express_fee constant number(2) := 29;

  --加油卡圈存
  Express_fee constant number(2) := 30;
  ---视频会员
  SPHY constant number(2) := 53;

  --文本短信
  TextMsg constant number(2) := 108;
  --语音短信
  VoiceMsg constant number(2) := 109;
end;
/

prompt
prompt Creating package PKG_CHANNEL_CAPITAL_CLASS
prompt ==========================================
prompt
create or replace package fd_account.pkg_channel_capital_class is

  /********************
  *渠道资金分类
  *********************/
  --普通话费
  normal_huafei constant number(3) := 1;
  --普通流量
  normal_flow constant number(3) := 2;
  --特殊话费
  special_huafei constant number(3) := 3;
  --特殊流量
  special_flow constant number(3) := 4;
  --其他渠道
  others_channel constant number(3) := 0;
end;
/

prompt
prompt Creating package PKG_CHANNEL_TYPE
prompt =================================
prompt
create or replace package fd_account.pkg_channel_type is

  /********************
  *  渠道类型
  *********************/
  up_channel   constant number(3) := 1; --- 上游渠道
  down_channel constant number(3) := 2; --- 下游渠道
  settle_up    constant number(3) := 3; --- 上游结算渠道---指报表中账户存的公司代表的上下游
  settle_down  constant number(3) := 4; --- 下游结算渠道---指报表中账户存的公司代表的上下游
  none         constant number(3) := 9; ---无
end;
/

prompt
prompt Creating package PKG_COMMIS_FUND_TYPE
prompt =====================================
prompt
create or replace package fd_account.pkg_commis_fund_type is

  /********************
    *  佣金月报表变动类型
  *********************/
  total_add          constant number(3) := 11; ---总佣金加款
  total_revise_add   constant number(3) := 12; ---总佣金调整加款
  total_revise_minus constant number(3) := 13; ---总佣金调整减款
  draw_add           constant number(3) := 21; ---提取佣金加款
  draw_red           constant number(3) := 22; ---提取佣金红冲
end;
/

prompt
prompt Creating package PKG_COMMI_PROFIT_ADD_STATUS
prompt ============================================
prompt
create or replace package fd_account.pkg_commi_profit_add_status is

  /********************
  *   佣金和利润账户加款
  *********************/
  complate constant number(3) := 0; --- 同步完成
  wait     constant number(3) := 1; --- 等待同步
  syncing  constant number(3) := 2; --- 正在同步
  failed   constant number(3) := 9; --- 同步失败
end;
/

prompt
prompt Creating package PKG_COMMI_SETTLE_TYPE
prompt ======================================
prompt
create or replace package fd_account.pkg_commi_settle_type is

  /********************
  *  佣金结算类型
  *********************/
  settle     constant number(3) := 1; --- 结算
  to_channel constant number(3) := 2; --- 转渠道余额
  add_commi  constant number(3) := 3; --- 佣金加款
end;
/

prompt
prompt Creating package PKG_CO_CAP_ACCOUNT_TYPE
prompt ========================================
prompt
create or replace package fd_account.pkg_co_cap_account_type is

  /********************
    *  公司账户分类
  *********************/
  borrow            constant number(3) := 1; ---运营投入
  deposit           constant number(3) := 2; ---押金账户
  bond              constant number(3) := 3; ---保证金账户
  prepayment        constant number(3) := 4; ---预付费
  short_borrow      constant number(3) := 5; ---短期借贷
  personal_borrow   constant number(3) := 6; ---借支账户(个人借支)
  profit            constant number(3) := 7; ---利润账户
  transfer_refund   constant number(3) := 8; ---转账退款账户
  activity          constant number(3) := 9; ---活动专用账户
  manual_refund     constant number(3) := 10; ---人工转账退款账户
  jfb_account       constant number(3) := 11; ---集分宝账户
  yx_expense        constant number(3) := 12; --营销系统费用账户(支出)
  yx_handling_fee   constant number(3) := 13; --营销系统手续费账户
  yx_income         constant number(3) := 14; --营销系统收入账户
  yx_expense_income constant number(3) := 15; --营销系统费用账户(收入)
end;
/

prompt
prompt Creating package PKG_CO_CAP_FUND_TYPE
prompt =====================================
prompt
create or replace package fd_account.pkg_co_cap_fund_type is

  /********************
    *  资产账户变动类型
  *********************/
  add_amount       constant number(3) := 1; ---加款
  minus_amount     constant number(3) := 2; ---减款
  deposit_down_add constant number(3) := 3; ---押金类下游加款
  deposit_up_add   constant number(3) := 4; ---押金类上游加款
  borrow_up_add    constant number(3) := 5; ---借支类上游加款
  service_fee      constant number(3) := 6; ---收取手续费
  down_borrow_add  constant number(3) := 7; ---下游渠道加款到借支账户
end;
/

prompt
prompt Creating package PKG_CO_CAP_JFB_SETTLE_STATUS
prompt =============================================
prompt
create or replace package fd_account.pkg_co_cap_jfb_settle_status is

  /********************
    *  集分宝结算状态
  *********************/
  complete    constant number(3) := 0; ---完成
  wait_settle constant number(3) := 1; ---等待结算
end;
/

prompt
prompt Creating package PKG_CO_CAP_USE_TYPE
prompt ====================================
prompt
create or replace package fd_account.pkg_co_cap_use_type is

  /********************
    *  公司账户使用分类
  *********************/
  input   constant number(3) := 1; ---投入账户
  operate constant number(3) := 2; ---运营账户
end;
/

prompt
prompt Creating package PKG_CO_FUND_RECV_TYPE
prompt ======================================
prompt
create or replace package fd_account.pkg_co_fund_recv_type is

  /********************
  *  公司间结算变动类型
  *********************/
  add_amount    constant number(3) := 1; --- 加款
  minus_amount  constant number(3) := 2; --- 扣款
  refund_amount constant number(3) := 3; --- 退款
end;
/

prompt
prompt Creating package PKG_CO_FUND_TYPE
prompt =================================
prompt
create or replace package fd_account.pkg_co_fund_type is

  /********************
  *  公司间结算变动类型
  *********************/
  add_amount    constant number(3) := 1; --- 加款
  debit_amount  constant number(3) := 2; --- 扣款
  refund_amount constant number(3) := 3; --- 退款
end;
/

prompt
prompt Creating package PKG_CO_IMP_FUND_TYPE
prompt =====================================
prompt
create or replace package fd_account.pkg_co_imp_fund_type is

  /********************
    *  倒款账户变动类型
  *********************/
  add_amount   constant number(3) := 1; ---加款
  minus_amount constant number(3) := 2; ---减款
end;
/

prompt
prompt Creating package PKG_CO_IMP_USE_TYPE
prompt ====================================
prompt
create or replace package fd_account.pkg_co_imp_use_type is

  /********************
    *  公司倒款账户
  *********************/
  down_add constant number(3) := 1; ---下游加款
  zfb_imp  constant number(3) := 2; ---支付宝倒款
  cft_imp  constant number(3) := 3; ---财付通倒款
  other    constant number(3) := 99; ---其他
end;
/

prompt
prompt Creating package PKG_CO_SELF_ACCOUNT_TYPE
prompt =========================================
prompt
create or replace package fd_account.pkg_co_self_account_type is

  /********************
    *  公司独立账户分类
  *********************/
  service_fee     constant number(3) := 1; ---汇款手续费账户
  down_commission constant number(3) := 2; ---下游已付佣金账户
  up_commission   constant number(3) := 3; ---上游已收佣金账户
  profit_draw     constant number(3) := 4; ---毛利提取
  short_msg_fee   constant number(3) := 5; ---短信服务费
end;
/

prompt
prompt Creating package PKG_CO_SELF_FUND_TYPE
prompt ======================================
prompt
create or replace package fd_account.pkg_co_self_fund_type is

  /********************
  *  实体卡变动类型
  *********************/
  add_amount   constant number(3) := 1; --- 加款
  minus_amount constant number(3) := 2; --- 减款
end;
/

prompt
prompt Creating package PKG_DATE_RANGE_TYPE
prompt ====================================
prompt
create or replace package fd_account.Pkg_Date_Range_Type is

    /********************
    *交易所处时段
    *********************/
	--高峰时段
PeakPeriod constant number(3) := 0;
--正常时段
NormalPeriod constant number(3) := 1;

	end;
/

prompt
prompt Creating package PKG_DATE_TYPE
prompt ==============================
prompt
create or replace package fd_account.Pkg_Date_Type is

    /********************
    *日期类型
    *********************/
	--日期类型
DateDay constant number(3) := 0;
--每周星期类型
WeekDay constant number(3) := 1;

	end;
/

prompt
prompt Creating package PKG_DEAL_CODE
prompt ==============================
prompt
create or replace package fd_account.pkg_deal_code is
  /********************
  *  银企直连处理码
  *********************/

  success constant varchar2(32) := 'success'; --- 成功
  failure constant varchar2(32) := 'failure'; --- 失败
  unknown constant varchar2(32) := 'unknown'; --- 未知
end;
/

prompt
prompt Creating package PKG_DIFFER_TYPE
prompt ================================
prompt
create or replace package fd_account.pkg_differ_type is

  /********************
  *差异类型
  *********************/
  --订单
  main constant number(1) := 1;
  --上游资金变动
  up_trade constant number(1) := 2;

end;
/

prompt
prompt Creating package PKG_DK_CHANNEL_CLASSIFICATION
prompt ==============================================
prompt
create or replace package fd_account.pkg_dk_channel_classification is

  /************************
  *  代扣系统渠道分类
  ************************/
  ---sp代扣系统
  sp constant number(3) := 1;
  ---sk收卡系统
  sk constant number(3) := 2;
end;
/

prompt
prompt Creating package PKG_DK_CHANNEL_PAYMENT_TYPE
prompt ============================================
prompt
create or replace package fd_account.pkg_dk_channel_payment_type is

  /************************
  *  收卡系统渠道支付方式
  ************************/
  ---预付
  prepay constant number(3) := 1;
  ---后付
  after_pay constant number(3) := 2;
end;
/

prompt
prompt Creating package PKG_DK_CHANNEL_SETTLE_STATUS
prompt =============================================
prompt
create or replace package fd_account.pkg_dk_channel_settle_status is

  /************************
  *  收款结算记录生成状态
  ************************/
  ---结算记录生成成功
  complete constant number(3) := 0;
  ---结算记录等待生成
  wait constant number(3) := 1;
  ---结算记录正在生成
  doing constant number(3) := 2;
  ---结算记录无需生成(sp系统数据)
  noneed constant number(3) := 99;
end;
/

prompt
prompt Creating package PKG_DK_REPORT_SETTLE_STATUS
prompt ============================================
prompt
create or replace package fd_account.pkg_dk_report_settle_status is

  /************************
  *  结算记录人工结算状态
  ************************/
  ---结算完成
  complete constant number(3) := 0;
  ---等待结算
  wait constant number(3) := 1;
  ---正在结算
  doing constant number(3) := 2;
  ---无需结算
  noneed constant number(3) := 9;
end;
/

prompt
prompt Creating package PKG_DOWN_FUND_CHANGE_TYPE
prompt ==========================================
prompt
create or replace package fd_account.pkg_down_fund_change_type is

  /********************
  *  下游资金变动类型
  *********************/
  add_amount     constant number(3) := 1; --- 加款
  debit_amount   constant number(3) := 2; --- 交易扣款
  refund_amount  constant number(3) := 3; --- 交易退款
  draw_amount    constant number(3) := 4; --- 提款
  service_amount constant number(3) := 5; --- 手续费
  add_issue      constant number(3) := 11; --- 发行加款
  debit_issue    constant number(3) := 12; --- 发行扣款
  refund_issue   constant number(3) := 13; --- 发行退款
end;
/

prompt
prompt Creating package PKG_DOWN_MANUAL_CHANGE_TYPE
prompt ============================================
prompt
create or replace package fd_account.pkg_down_manual_change_type is

  /********************
  *  下游手工加减款类型 
  *********************/
  add_amount           constant number(3) := 11; --- 加款+
  red_recharge         constant number(3) := 12; --- 红冲加款-
  draw_amount          constant number(3) := 13; --- 提款+
  draw_red             constant number(3) := 14; --- 红冲提款-
  debit_revise_add     constant number(3) := 21; --- 扣款平账加+
  debit_revise_minus   constant number(3) := 22; --- 扣款平账减-
  refund_revise_add    constant number(3) := 31; --- 退款平账加+
  refund_revise_minus  constant number(3) := 32; --- 退款平账减-
  balance_revise_add   constant number(3) := 41; --- 余额平账加+
  balance_revise_minus constant number(3) := 42; --- 余额平账减-
  service_add          constant number(3) := 51; --- 手续费加+
  service_red          constant number(3) := 52; --- 手续费红冲+
  trade_revise         constant number(3) := 60; --- 交易平账
  agent_revise         constant number(3) := 61; ---代理费平账
  issue_add            constant number(3) := 71; ---发行加款
end;
/

prompt
prompt Creating package PKG_DOWN_REFUND_CHANGE_TYPE
prompt ============================================
prompt
create or replace package fd_account.pkg_down_refund_change_type is

  /********************
  *  下游退款类型
  *********************/
  refund             constant number(3) := 1; --- 退款
  red_refund         constant number(3) := 2; --- 退款红冲
  refund_service_fee constant number(3) := 3; --- 手续费退款
  red_service_fee    constant number(3) := 4; --- 红冲手续费-------
end;
/

prompt
prompt Creating package PKG_DOWN_RV_TYPE
prompt =================================
prompt
create or replace package fd_account.pkg_down_rv_type is

  /********************
  *下游交易平账类型
  *********************/
  --普通交易平账
  normal_rv constant number(3) := 0;
  --集分宝交易平账
  jfb_rv constant number(3) := 1;

end;
/

prompt
prompt Creating package PKG_ERROR_CODE
prompt ===============================
prompt
create or replace package fd_account.pkg_error_code is

  /********************
  *  错误码
  *********************/
  success                     constant varchar2(32) := 'success'; --- 操作成功
  failure                     constant varchar2(32) := 'failure'; --- 系统忙稍后再试
  not_exists                  constant varchar2(32) := 'not_exists'; --- 数据不存在
  param_miss                  constant varchar2(32) := 'param_miss'; --- 缺少必须的参数
  data_miss                   constant varchar2(32) := 'data_miss'; --- 数据不存在或已被删除
  data_not_exists             constant varchar2(32) := 'data_not_exists'; --- 数据不存在
  data_error                  constant varchar2(32) := 'data_error'; ---数据错误
  system_busy                 constant varchar2(32) := 'system_busy'; --- 系统忙稍后再试
  balance_low                 constant varchar2(32) := 'balance_low'; --- 账户余额不足
  has_refunded                constant varchar2(32) := 'has_refunded'; --- 退过款了
  data_repeat                 constant varchar2(32) := 'data_repeat'; --- 数据已存在,请勿重复提交
  amount_error                constant varchar2(32) := 'order.amount_error'; --- 订单金额错误
  param_error                 constant varchar2(32) := 'param_error'; --- 参数错误
  account_balance_error       constant varchar2(32) := 'account_balance_error'; ---账户错误或余额不足
  channel_error               constant varchar2(32) := 'channel_error'; ---渠道错误
  has_pay                     constant varchar2(32) := 'has_pay'; --- 已支付
  order_not_exists            constant varchar2(32) := 'order_not_exists'; ---订单不存在
  order_or_account_not_exists constant varchar2(32) := 'order_or_acc_not_exists'; ---订单或账户不存在
  bank_account_id_error       constant varchar2(32) := 'bank_account_id_error'; ---银行账户编号错误
  co_account_not_exists       constant varchar2(32) := 'co_account_not_exists'; ---公司独立账户不存在
  adjust_record_error         constant varchar2(32) := 'adjust_record_error'; ---红冲记录不正确
  channel_or_account_error    constant varchar2(32) := 'channel_or_acc_error'; ---渠道或账户错误
  face_error                  constant varchar2(32) := 'face_error'; ---面值错误
  order_insert_fail           constant varchar2(32) := 'order_insert_fail'; ---订单插入失败
  adjust_timeout              constant varchar2(32) := 'adjust_timeout'; ---红冲时间过期
  change_amount_error         constant varchar2(32) := 'change_amount_error'; ---变动金额错误
  no_need_adjust              constant varchar2(32) := 'no_need_adjust'; ---无需调整
  debit_not_exists            constant varchar2(32) := 'debit_not_exists'; ---扣款不存在
  channel_match_error         constant varchar2(32) := 'channel_match_error'; ---渠道匹配错位
  expire_or_balance_low       constant varchar2(32) := 'expire_or_balance_low'; ---过期或账户余额不足
  bank_payment_type_error     constant varchar2(32) := 'bank_payment_type_error'; ---银行支付方式不可用
  data_repeat_or_error        constant varchar2(32) := 'data_repeat_or_error'; --- 数据已存在或错误
  amount_exceed_limit         constant varchar2(32) := 'amount_exceed_limit'; --- 金额超过限制
  white_list_not_exists       constant varchar2(32) := 'white_list_not_exists'; --- 白名单不存在
  payment_record_repeat       constant varchar2(32) := 'payment_record_repeat'; --- 支付记录重复
  business_type_not_exists    constant varchar2(32) := 'business_type_not_exists'; --- 错误码不存在
  bank_not_suport             constant varchar2(32) := 'bank_not_suport'; --- 银行不支持
  order_face_too_max          constant varchar2(32) := 'order_face_too_max'; --- 订单面值过大
  company_error               constant varchar2(32) := 'company_error'; --- 公司信息错误
  sys_info_error              constant varchar2(32) := 'sys_info_error'; --- 系统信息错误
  business_type_error         constant varchar2(32) := 'business_type_error'; --- 业务类型错误
  order_own_profit            constant varchar2(32) := 'order_own_profit'; ---订单包含利润
  tran_no_repeat            constant varchar2(32) := 'tran_no_repeat'; ---流水号重复 
end;
/

prompt
prompt Creating package PKG_ERROR_CODE_TYPE
prompt ====================================
prompt
create or replace package fd_account.Pkg_Error_Code_Type is

    /********************
    *错误码分类
    *********************/
	--收款查询
ReceiveQuery constant number(3) := 1;
--加款操作
Addamount constant number(3) := 2;
--加款信息查询
AddQuery constant number(3) := 3;
--银行卡余额查询
BankBalanceQuery constant number(3) := 4;

	end;
/

prompt
prompt Creating package PKG_PAYMENT_TYPE
prompt =================================
prompt
create or replace package fd_account.pkg_payment_type is

  /********************
  *  银企直连收款记录的收款方式
  *********************/
  up_add      constant number(3) := 1; --- 上游渠道加款
  down_commi  constant number(3) := 2; --- 下游渠道返佣
  pay_deposit constant number(3) := 3; --- 支付押金
  pay_bond    constant number(3) := 4; --- 支付保证金
end;
/

prompt
prompt Creating package PKG_PAY_TYPE
prompt =============================
prompt
create or replace package fd_account.Pkg_Pay_Type is

    /********************
    *支付类型
    *********************/
	--本地
Local constant number(3) := 0;
--异地
Remote constant number(3) := 1;
--大额汇路
LargeAmount constant number(3) := 2;
--小额汇路
SmallAmount constant number(3) := 3;
--网银
OnlineBank constant number(3) := 5;

	end;
/

prompt
prompt Creating package PKG_PROFIT_FUND_TYPE
prompt =====================================
prompt
create or replace package fd_account.pkg_profit_fund_type is

  /********************
    *  利润月报表变动类型
  *********************/
  total_add          constant number(3) := 11; ---总利润加款
  total_revise_add   constant number(3) := 12; ---总利润调整加款
  total_revise_minus constant number(3) := 13; ---总利润调整减款
  draw_add           constant number(3) := 21; ---提取利润加款
  draw_red           constant number(3) := 22; ---提取利润红冲
end;
/

prompt
prompt Creating package PKG_RCV_CARD_TYPE
prompt ==================================
prompt
create or replace package fd_account.Pkg_Rcv_Card_Type is

  /********************
  *上游收款银行账户类型
  *********************/
  --通用(对公、对私都可以)    
  is_all constant number(1) := 0;
  --对公
  is_public constant number(1) := 1;
  --对私
  is_private constant number(1) := 2;

end;
/

prompt
prompt Creating package PKG_RECEIVE_TYPE
prompt =================================
prompt
create or replace package fd_account.pkg_receive_type is

  /********************
  *  银企直连收款记录的收款方式
  *********************/
  down_add     constant number(3) := 1; --- 下游渠道加款
  up_commi     constant number(3) := 2; --- 上游渠道返佣
  recv_deposit constant number(3) := 3; --- 收取押金
  recv_bond    constant number(3) := 4; --- 收取保证金
  service_fee  constant number(3) := 5; --- 收取手续费
end;
/

prompt
prompt Creating package PKG_RECV_TYPE
prompt ==============================
prompt
create or replace package fd_account.pkg_recv_type is

  /********************
  *  渠道类型
  *********************/
  up_channel   constant number(3) := 1; --- 上游渠道
  down_channel constant number(3) := 2; --- 下游渠道
  others_type  constant number(3) := 3; --- 其他方式
end;
/

prompt
prompt Creating package PKG_REPORT_SYNC_STATUS
prompt =======================================
prompt
create or replace package fd_account.pkg_report_sync_status is

  /********************
  *   佣金利润报表同步状态
  *********************/
  complate constant number(3) := 0; --- 同步完成
  wait     constant number(3) := 1; --- 等待同步
  syncing  constant number(3) := 2; --- 正在同步
  failed   constant number(3) := 9; --- 同步失败
end;
/

prompt
prompt Creating package PKG_REPORT_ZERO_ACC_TYPE
prompt =========================================
prompt
create or replace package fd_account.pkg_report_zero_acc_type is

  /********************
    *  零点余额账户类型
  *********************/
  up_channel        constant number(3) := 1; ---上游渠道
  down_channel      constant number(3) := 2; ---下游渠道
  bank_account      constant number(3) := 3; ---银行账户
  recv_account      constant number(3) := 4; ---收款账户
  cap_account       constant number(3) := 5; ---资产账户
  self_account      constant number(3) := 6; ---非资产账户
  imp_account       constant number(3) := 7; ---倒款账户
  profit_account    constant number(3) := 8; ---毛利账户
  down_commi_account constant number(3) := 9; ---下游佣金账户
  up_commi_account   constant number(3) := 10; ---上游佣金账户
end;
/

prompt
prompt Creating package PKG_SERVICE_FEE_TYPE
prompt =====================================
prompt
create or replace package fd_account.Pkg_Service_Fee_Type is

    /********************
    *手续费收取类型
    *********************/
--不收取手续费
None constant number(3) := 0;
	--交易金额比例收取
Discount constant number(3) := 1;
--每笔交易收取固定值
Single constant number(3) := 2;

	end;
/

prompt
prompt Creating package PKG_SETTLE_STATUS
prompt ==================================
prompt
create or replace package fd_account.pkg_settle_status is

  /********************
  *  结算状态
  *********************/
  no_need         constant number(3) := 10; --- 无需结算
  wait_settle     constant number(3) := 20; --- 等待结算
  complete_settle constant number(3) := 0; --- 结算完成
  settle_fail     constant number(3) := 90; --- 结算失败
end;
/

prompt
prompt Creating package PKG_SPLIT_PROFIT_STATUS
prompt ========================================
prompt
create or replace package fd_account.pkg_split_profit_status is

  /********************
  *  代运营渠道下游利润分配状态
  *********************/
  success constant number(3) := 0; --- 分配成功
  doing   constant number(3) := 1; --- 正在分配
  failure constant number(3) := 9; --- 分配失败
end;
/

prompt
prompt Creating package PKG_STATISTICS_TYPE
prompt ====================================
prompt
create or replace package fd_account.pkg_statistics_type is

  /********************
  *业务类型--统计类型
  *********************/
  --流量数据包
  FlowBag constant number(2) := 1;
  --前向流量
  FrontFlow constant number(2) := 2;
  --话费、固话
  HuafeiFixedtel constant number(2) := 3;
  --加油卡充值
  FuelCard constant number(2) := 4;
  --Q币、游戏币
  qqGame constant number(2) := 5;
  --非充业务
  NotRecharge constant number(2) := 6;
  --代扣业务
  DaiKou constant number(2) := 7;
  --收卡业务
  ShouKa constant number(2) := 8;
  --积分业务
  JiFen constant number(2) := 9;
  --视频会员
  SPHY constant number(2) := 13;
  --短信业务
  DuanXin constant number(2) := 14;
end;
/

prompt
prompt Creating package PKG_SUP_DOWN_FUND_TYPE
prompt =======================================
prompt
create or replace package fd_account.pkg_sup_down_fund_type is

  /********************
  *  下游资金变动的变动类型
  *********************/
  add_amount    constant number(3) := 1; --- 加款
  debit_amount  constant number(3) := 2; --- 扣款
  refund_amount constant number(3) := 3; --- 退款
  pick_amount   constant number(3) := 4; --- 提款
end;
/

prompt
prompt Creating package PKG_SUP_DOWN_MANUAL_TYPE
prompt =========================================
prompt
create or replace package fd_account.pkg_sup_down_manual_type is

  /********************
  *  下游操作记录变动类型
  *********************/
  add_amount     constant number(3) := 11; --- 加款+
  red_add        constant number(3) := 12; --- 加款红冲-
  pick_amount    constant number(3) := 13; --- 提款+
  red_pick       constant number(3) := 14; --- 提款红冲-
  trade_revise   constant number(3) := 60; ---交易平账
  balance_revise constant number(3) := 61; ---余额平账
end;
/

prompt
prompt Creating package PKG_SUP_UP_FUND_TYPE
prompt =====================================
prompt
create or replace package fd_account.pkg_sup_up_fund_type is

  /********************
  *  上游资金变动的变动类型
  *********************/
  add_amount    constant number(3) := 1; --- 加款
  debit_amount  constant number(3) := 2; --- 扣款
  refund_amount constant number(3) := 3; --- 退款
  pick_amount   constant number(3) := 4; --- 提款
  move_amount   constant number(3) := 5; ---账户资金转移
end;
/

prompt
prompt Creating package PKG_SUP_UP_MANUAL_TYPE
prompt =======================================
prompt
create or replace package fd_account.pkg_sup_up_manual_type is

  /********************
  *  上游操作记录变动类型
  *********************/
  add_amount            constant number(3) := 11; --- 加款+
  red_add               constant number(3) := 12; --- 加款红冲-
  pick_amount           constant number(3) := 13; --- 提款+
  red_pick              constant number(3) := 14; --- 提款红冲-
  physical_storage      constant number(3) := 21; ---实体卡入库
  electronic_storage    constant number(3) := 22; ---电子卡密入库
  physical_2_electronic constant number(3) := 23; ---实体卡转电子卡密
  trade_revise          constant number(3) := 60; ---交易平账
  balance_revise        constant number(3) := 61; ---余额平账
end;
/

prompt
prompt Creating package PKG_SYS_BOOLEAN
prompt ================================
prompt
create or replace package fd_account.pkg_sys_boolean is

  /********************
  *  系统所用bool值
  *********************/
  istrue  constant number(3) := 0; --- 成立
  isfalse constant number(3) := 1; --- 不成立
end;
/

prompt
prompt Creating package PKG_SYS_REVISE_TYPE
prompt ====================================
prompt
create or replace package fd_account.pkg_sys_revise_type is

  /********************
  *  平账类型
  *********************/
  balance constant number(3) := 1; --- 余额平账
  debit   constant number(3) := 2; --- 扣款平账
  refund  constant number(3) := 3; --- 退款平账
end;
/

prompt
prompt Creating package PKG_TASK_STATUS
prompt ================================
prompt
create or replace package fd_account.Pkg_Task_Status is

  /********************
  *任务所处状态
  *********************/
  --未开始
  NotStart constant number(3) := 1;
  --等待执行
  Wait constant number(3) := 2;
  --正在执行
  Dealing constant number(3) := 3;
  --执行完成
  Complete constant number(3) := 0;

  --执行失败
  failure constant number(3) := 9;

end;
/

prompt
prompt Creating package PKG_TASK_TYPE
prompt ==============================
prompt
create or replace package fd_account.Pkg_Task_Type is

  /********************
  *任务类型
  *********************/
  --收款查询
  receiveQuery constant number(3) := 1;
  --支付操作
  payment constant number(3) := 2;
  --支付进度查询
  paymentQuery constant number(3) := 3;
  --银行卡余额查询
  bankBalanceQuery constant number(3) := 4;

end;
/

prompt
prompt Creating package PKG_TRADE_DOWN_YC_DEAL_STATUS
prompt ==============================================
prompt
create or replace package fd_account.pkg_trade_down_yc_deal_status is

  /********************
  *   云充利润合计平账状态
  *********************/
  ok      constant number(3) := 0; --- 完成
  notdeal constant number(3) := 1; --- 未处理
  dealing constant number(3) := 2; --- 正在处理
  failure constant number(3) := 9; --- 处理失败
end;
/

prompt
prompt Creating package PKG_TRADE_TYPE
prompt ===============================
prompt
create or replace package fd_account.pkg_trade_type is

  /********************
  *交易操作类型
  *********************/
  --下游扣款
  down_debit constant number(1) := 1;
  --上游扣款
  up_debit constant number(1) := 2;
  --上游退款
  up_refund constant number(1) := 3;
  --下游退款
  down_refund constant number(1) := 4;
  --下游转账退款
  transfer_refund constant number(1) := 5;
  --下游退款红冲
  refund_red constant number(1) := 6;
end;
/

prompt
prompt Creating package PKG_TRANSFER_TYPE
prompt ==================================
prompt
create or replace package fd_account.pkg_transfer_type is

  /********************
  *  银企直连收款记录的收款方式
  *********************/
  up_add      constant number(3) := 1; --- 上游渠道加款
  down_commi  constant number(3) := 2; --- 下游渠道返佣
  pay_deposit constant number(3) := 3; --- 支付押金
  pay_bond    constant number(3) := 4; --- 支付保证金
end;
/

prompt
prompt Creating package PKG_UP_ACCOUNT_TYPE
prompt ====================================
prompt
create or replace package fd_account.pkg_up_account_type is

  /********************
  *  上游账户类型
  *********************/
  sys_account constant number(3) := 1; --- 系统账户
  pay_account constant number(3) := 2; --- 支付账户
end;
/

prompt
prompt Creating package PKG_UP_FUND_CHANGE_TYPE
prompt ========================================
prompt
create or replace package fd_account.pkg_up_fund_change_type is

  /********************
  *  上游资金变动类型
  *********************/

  add_amount    constant number(3) := 1; --- 加款
  debit_amount  constant number(3) := 2; --- 交易扣款
  refund_amount constant number(3) := 3; --- 交易退款
  draw_amount   constant number(3) := 4; --- 提款
  service_tran_balance   constant number(3):=5; ---服务费转余额
  service_draw           constant number(3):=6;---服务费提现
  add_issue      constant number(3) := 11; --- 发行加款
  debit_issue constant number(3) := 12; --- 发行扣款
  refund_issue constant number(3) := 13; --- 发行退款
end;
/

prompt
prompt Creating package PKG_UP_MANUAL_CHANGE_TYPE
prompt ==========================================
prompt
create or replace package fd_account.pkg_up_manual_change_type is

  /********************
  *  上游手工加减款类型
  *********************/
  add_amount            constant number(3) := 11; --- 加款+
  red_recharge          constant number(3) := 12; --- 红冲-
  draw_amount           constant number(3) := 13; --- 提款+
  red_draw              constant number(3) := 14; --- 红冲提款-
  cap_add               constant number(3) := 15; --- 资产账户加款
  red_cap               constant number(3) := 16; --- 红冲资产账户加款
  service_add_balance   constant number(3) := 17; ---服务费转余额加款
  service_draw          constant number(3) := 18; ---服务费提现
  service_tsfer_balance constant number(3) := 19; ---服务费转余额
  red_service_draw      constant number(3) := 20; ---红冲服务费提现
  debit_revise_add      constant number(3) := 21; --- 扣款平账加+
  debit_revise_minus    constant number(3) := 22; --- 扣款平账减-
  refund_revise_add     constant number(3) := 31; --- 退款平账加+
  refund_revise_minus   constant number(3) := 32; --- 退款平账减-
  balance_revise_add    constant number(3) := 41; --- 余额平账加+
  balance_revise_minus  constant number(3) := 42; --- 余额平账减-
  trade_revise          constant number(3) := 60; --- 交易平账
  service_revise        constant number(3) :=61;  ---服务费平账
  issue_add            constant number(3) := 71; ---发行加款

end;
/

prompt
prompt Creating package PKG_UP_REFUND_CHANGE_TYPE
prompt ==========================================
prompt
create or replace package fd_account.pkg_up_refund_change_type is

  /********************
  *  下游退款类型
  *********************/
  refund             constant number(3) := 1; --- 交易退款
  refund_service_fee constant number(3) := 3; --- 手续费退款
end;
/

prompt
prompt Creating package PKG_WARN_INTO_TYPE
prompt ===================================
prompt
create or replace package fd_account.pkg_warn_into_type is

  /********************
  *   报警信息类型
  *********************/
  balance_warn         constant number(3) := 1; --- 余额报警
  use_warn             constant number(3) := 2; --- 渠道使用情款报警
  settle_warn          constant number(3) := 3; --- 公司间结算报警
  b2e_bank_warn        constant number(3) := 4; --- 银企直连银行卡余额报警
  b2e_add_type         constant number(3) := 5; --- 银企直连加款方式报警
  b2e_error_code       constant number(3) := 6; --- 银企直连错误码
  report_merge_warn    constant number(3) := 7; --- sp报表合并到财务报表报警
  dbg_sync_warn        constant number(3) := 8; --- dbg数据同步报警
  auto_error           constant number(3) := 9; --- 自动脚本执行错误
  capital_use_rate_err constant number(3) := 10; --- 资金利用率不合理报警
  add_much_warn        constant number(3) := 11; --- 加款过多报警
  monitor_warn         constant number(3) := 12; ---数据同步监控报警
  b2e_down_auto_add    constant number(3) := 13; ---银企直联下游自动加款提醒
  b2e_down_apply_warn  constant number(3) := 15; ---银企直联下游申请报警
end;
/

prompt
prompt Creating package PKG_WORK_DAY_TYPE
prompt ==================================
prompt
create or replace package fd_account.pkg_work_day_type is

  /********************
  *工作日分类
  *********************/
  --所有日期
  all_days constant number := 0;
  --工作日
  work_day constant number(3) := 1;
  --非工作日
  not_work_day constant number(3) := 2;

end;
/

prompt
prompt Creating package PKG_YX_ACC_TYPE
prompt ================================
prompt
create or replace package fd_account.pkg_yx_acc_type is

  /********************
  *营销账户类型
  *********************/
  up_channel      constant number(3) := 1; ---上游渠道
  down_channel    constant number(3) := 2; ---下游渠道
  bank_acc        constant number(3) := 3; ---银行账户
  service_fee_acc constant number(3) := 4; ---服务费账户
  agent_acc       constant number(3) := 5; ---代理人账户
  send_cost       constant number(3) := 6; ---发行成本账户
  send_revenue    constant number(3) := 7; ---发行收入账户

end;
/

prompt
prompt Creating package PKG_YX_AGENT_TYPE
prompt ==================================
prompt
create or replace package fd_account.pkg_yx_agent_type is
/******
代理人类型
创建人：周荣省
创建时间：2019-05-25
******/

group_agent     constant  number(3):=0;--组合代理人
common_agent      constant  number(3):=1;--普通代理人

end;
/

prompt
prompt Creating package PKG_YX_CHANNEL_TYPE
prompt ====================================
prompt
create or replace package fd_account.pkg_yx_channel_type is
/******
营销渠道类型
******/

up_channel      constant  number(3):=1;--上游渠道
down_channel    constant  number(3):=2;--下游渠道
agent_channel   constant  number(3):=3;--代理商

end;
/

prompt
prompt Creating package PKG_YX_ERROR_CODE
prompt ==================================
prompt
create or replace package fd_account.pkg_yx_error_code is

  /********************
  *  错误码
  *********************/
  success           constant varchar2(32) := 'success'; --- 操作成功
  failure           constant varchar2(32) := 'failure'; --- 系统忙稍后再试
  no_group_agent    constant varchar2(32) := 'no_group_agent'; --组合代理人不存在
  group_count_error constant varchar2(32) := 'group_count_error'; --组合代理人数量错误
  debit_not_exists  constant varchar2(32) := 'debit_not_exists'; --扣款不存在
end;
/

prompt
prompt Creating package PKG_YX_EXPENSE_TYPE
prompt ====================================
prompt
create or replace package fd_account.pkg_yx_expense_type is
/******
额外费用类型
创建人：周荣省
创建时间：2019-01-18
******/

income_type_in      constant  number(3):=2;--收入
income_type_out      constant  number(3):=1;--支出

end;
/

prompt
prompt Creating type SPLIT_TYPE
prompt ========================
prompt
CREATE OR REPLACE TYPE FD_ACCOUNT."SPLIT_TYPE"                                          IS TABLE OF VARCHAR2 (2000)
/

prompt
prompt Creating type T_ARRAY
prompt =====================
prompt
CREATE OR REPLACE TYPE FD_ACCOUNT.t_Array IS TABLE OF VARCHAR2(512)
/

prompt
prompt 