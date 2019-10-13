prompt PL/SQL Developer Export User Objects for user DM_SYSTEM@DB210
prompt Created by Administrator on 2019年10月11日
set define off
spool 2.log

prompt
prompt Creating table DM_BACKUP_CONFIG
prompt ===============================
prompt
create table DM_SYSTEM.DM_BACKUP_CONFIG
(
  record_id     NUMBER not null,
  backup_name   VARCHAR2(64) not null,
  backup_title  VARCHAR2(100) not null,
  scan_max      NUMBER default 500 not null,
  scan_interval NUMBER default 10 not null,
  next_interval NUMBER default 60 not null,
  status        NUMBER default 0 not null,
  last_exec     DATE default sysdate not null,
  next_exec     DATE default sysdate not null,
  robot_ip      VARCHAR2(32)
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_BACKUP_CONFIG
  is '后补配置表';
comment on column DM_SYSTEM.DM_BACKUP_CONFIG.record_id
  is '记录编号';
comment on column DM_SYSTEM.DM_BACKUP_CONFIG.backup_name
  is '后补名称';
comment on column DM_SYSTEM.DM_BACKUP_CONFIG.backup_title
  is '后补标题';
comment on column DM_SYSTEM.DM_BACKUP_CONFIG.scan_max
  is '扫描最大笔数';
comment on column DM_SYSTEM.DM_BACKUP_CONFIG.scan_interval
  is '扫描间隔(秒)';
comment on column DM_SYSTEM.DM_BACKUP_CONFIG.next_interval
  is '下次间隔(秒)';
comment on column DM_SYSTEM.DM_BACKUP_CONFIG.status
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_BACKUP_CONFIG.last_exec
  is '最近执行时间';
comment on column DM_SYSTEM.DM_BACKUP_CONFIG.next_exec
  is '下次执行时间';
comment on column DM_SYSTEM.DM_BACKUP_CONFIG.robot_ip
  is '机器人IP';
alter table DM_SYSTEM.DM_BACKUP_CONFIG
  add constraint PK_BACKUP_CONFIG_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_OPERATE_DETAIL
prompt ================================
prompt
create table DM_SYSTEM.DM_OPERATE_DETAIL
(
  record_id   NUMBER not null,
  batch_no    NUMBER not null,
  serial_no   VARCHAR2(64) not null,
  create_time DATE default sysdate not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_OPERATE_DETAIL
  is '日志详情表';
comment on column DM_SYSTEM.DM_OPERATE_DETAIL.record_id
  is '记录编号';
comment on column DM_SYSTEM.DM_OPERATE_DETAIL.batch_no
  is '操作批次';
comment on column DM_SYSTEM.DM_OPERATE_DETAIL.serial_no
  is '系统流水号(order_no/bind_id/product_id/record_id)';
comment on column DM_SYSTEM.DM_OPERATE_DETAIL.create_time
  is '创建时间';
create index DM_SYSTEM.IDX_OPER_DETAIL_BATCH_NO on DM_SYSTEM.DM_OPERATE_DETAIL (BATCH_NO)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_OPER_DETAIL_SERIAL_NO on DM_SYSTEM.DM_OPERATE_DETAIL (SERIAL_NO)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_OPERATE_DETAIL
  add constraint PK_ORPERATE_DETAIL_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_OPERATE_LOG
prompt =============================
prompt
create table DM_SYSTEM.DM_OPERATE_LOG
(
  record_id   NUMBER not null,
  user_id     VARCHAR2(64) not null,
  batch_no    NUMBER,
  operate_log VARCHAR2(512) not null,
  create_time DATE default sysdate
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_OPERATE_LOG
  is '操作日志表';
comment on column DM_SYSTEM.DM_OPERATE_LOG.record_id
  is '记录编号';
comment on column DM_SYSTEM.DM_OPERATE_LOG.user_id
  is '用户编号';
comment on column DM_SYSTEM.DM_OPERATE_LOG.batch_no
  is '操作批次';
comment on column DM_SYSTEM.DM_OPERATE_LOG.operate_log
  is '操作日志';
comment on column DM_SYSTEM.DM_OPERATE_LOG.create_time
  is '创建时间';
create index DM_SYSTEM.IDX_OPER_LOG_BATCH_NO on DM_SYSTEM.DM_OPERATE_LOG (BATCH_NO)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_OPER_LOG_UID on DM_SYSTEM.DM_OPERATE_LOG (USER_ID, CREATE_TIME)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_OPERATE_LOG
  add constraint PK_OPERATE_LOG_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_ORDER_BIND
prompt ============================
prompt
create table DM_SYSTEM.DM_ORDER_BIND
(
  bind_id              VARCHAR2(32) not null,
  order_no             VARCHAR2(64) not null,
  term_no              VARCHAR2(32) not null,
  term_product_no      VARCHAR2(32) not null,
  term_price           NUMBER(20,3) not null,
  phone_no             VARCHAR2(32) not null,
  business_type        NUMBER not null,
  carrier_no           VARCHAR2(10),
  province_no          VARCHAR2(10),
  city_no              VARCHAR2(10),
  up_channel_no        VARCHAR2(32) not null,
  up_product_no        VARCHAR2(32) not null,
  up_price             NUMBER(20,3) not null,
  bind_status          NUMBER default 20 not null,
  manual_status        NUMBER default 10 not null,
  script_id            NUMBER,
  service_code         VARCHAR2(128),
  delivery_start_time  DATE,
  delivery_finish_time DATE,
  robot_ip             VARCHAR2(32),
  result_msg           VARCHAR2(256),
  up_order_no          VARCHAR2(128),
  allow_bind           NUMBER default 1 not null,
  next_bind_time       DATE,
  batch_no             NUMBER,
  create_time          DATE default sysdate not null,
  finish_time          DATE,
  close_time           DATE default sysdate+5/24/60,
  picture_mode         NUMBER default 0
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_ORDER_BIND
  is '订单绑定表';
comment on column DM_SYSTEM.DM_ORDER_BIND.bind_id
  is '绑定编号';
comment on column DM_SYSTEM.DM_ORDER_BIND.order_no
  is '订单编号';
comment on column DM_SYSTEM.DM_ORDER_BIND.term_no
  is '终端编号';
comment on column DM_SYSTEM.DM_ORDER_BIND.term_product_no
  is '终端产品编号';
comment on column DM_SYSTEM.DM_ORDER_BIND.term_price
  is '终端价格';
comment on column DM_SYSTEM.DM_ORDER_BIND.phone_no
  is '手机号';
comment on column DM_SYSTEM.DM_ORDER_BIND.business_type
  is '业务类型';
comment on column DM_SYSTEM.DM_ORDER_BIND.carrier_no
  is '运营商';
comment on column DM_SYSTEM.DM_ORDER_BIND.province_no
  is '省份编码';
comment on column DM_SYSTEM.DM_ORDER_BIND.city_no
  is '地市编码';
comment on column DM_SYSTEM.DM_ORDER_BIND.up_channel_no
  is '上游渠道编号';
comment on column DM_SYSTEM.DM_ORDER_BIND.up_product_no
  is '上游产品编号';
comment on column DM_SYSTEM.DM_ORDER_BIND.up_price
  is '上游价格';
comment on column DM_SYSTEM.DM_ORDER_BIND.bind_status
  is '绑定状态: 0-成功 20-等待处理 30-正在绑定 90-绑定失败';
comment on column DM_SYSTEM.DM_ORDER_BIND.manual_status
  is '人工状态: 0-成功 10-无需处理 20-等待处理 90-失败';
comment on column DM_SYSTEM.DM_ORDER_BIND.script_id
  is '发货脚本ID';
comment on column DM_SYSTEM.DM_ORDER_BIND.service_code
  is '服务编码(队列名/机器人CODE)';
comment on column DM_SYSTEM.DM_ORDER_BIND.delivery_start_time
  is '发货开始时间';
comment on column DM_SYSTEM.DM_ORDER_BIND.delivery_finish_time
  is '发货结束时间';
comment on column DM_SYSTEM.DM_ORDER_BIND.robot_ip
  is '发货IP';
comment on column DM_SYSTEM.DM_ORDER_BIND.result_msg
  is '结果消息';
comment on column DM_SYSTEM.DM_ORDER_BIND.up_order_no
  is '上游订单号';
comment on column DM_SYSTEM.DM_ORDER_BIND.allow_bind
  is '允许绑定: 0-允许 1-不允许';
comment on column DM_SYSTEM.DM_ORDER_BIND.next_bind_time
  is '下次绑定时间';
comment on column DM_SYSTEM.DM_ORDER_BIND.batch_no
  is '后补批次';
comment on column DM_SYSTEM.DM_ORDER_BIND.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_ORDER_BIND.finish_time
  is '结束时间';
comment on column DM_SYSTEM.DM_ORDER_BIND.close_time
  is '自动关闭时间';
comment on column DM_SYSTEM.DM_ORDER_BIND.picture_mode
  is '照片提交模式: 0-无需照片 1-重新提交照片 2-重新提交订单 ';
create index DM_SYSTEM.IDX_ORDER_BIND_ORDER_NO on DM_SYSTEM.DM_ORDER_BIND (ORDER_NO)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_ORDER_BIND_PHONE_NO on DM_SYSTEM.DM_ORDER_BIND (PHONE_NO)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_ORDER_BIND_STATUS on DM_SYSTEM.DM_ORDER_BIND (BIND_STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_ORDER_BIND
  add constraint PK_ORDER_BIND_ID primary key (BIND_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_ORDER_BIND_EXT
prompt ================================
prompt
create table DM_SYSTEM.DM_ORDER_BIND_EXT
(
  bind_id         VARCHAR2(32) not null,
  phone_no2       VARCHAR2(32),
  activate_status NUMBER,
  activate_time   DATE,
  recharge_status NUMBER,
  recharge_time   DATE,
  express_name    VARCHAR2(128),
  express_no      VARCHAR2(64),
  create_time     DATE default sysdate not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_ORDER_BIND_EXT
  is '绑定扩展表';
comment on column DM_SYSTEM.DM_ORDER_BIND_EXT.bind_id
  is '绑定编号';
comment on column DM_SYSTEM.DM_ORDER_BIND_EXT.phone_no2
  is '新手机号';
comment on column DM_SYSTEM.DM_ORDER_BIND_EXT.activate_status
  is '激活状态: 0-已激活 1-待激活';
comment on column DM_SYSTEM.DM_ORDER_BIND_EXT.activate_time
  is '激活时间';
comment on column DM_SYSTEM.DM_ORDER_BIND_EXT.recharge_status
  is '首充状态: 0-已首充 1-未首充';
comment on column DM_SYSTEM.DM_ORDER_BIND_EXT.recharge_time
  is '首充时间';
comment on column DM_SYSTEM.DM_ORDER_BIND_EXT.express_name
  is '快递名称';
comment on column DM_SYSTEM.DM_ORDER_BIND_EXT.express_no
  is '快递单号';
comment on column DM_SYSTEM.DM_ORDER_BIND_EXT.create_time
  is '创建时间';
alter table DM_SYSTEM.DM_ORDER_BIND_EXT
  add constraint PK_BIND_EXT_BIND_ID primary key (BIND_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_ORDER_MAIN
prompt ============================
prompt
create table DM_SYSTEM.DM_ORDER_MAIN
(
  order_no        VARCHAR2(64) not null,
  term_no         VARCHAR2(32) not null,
  product_no      VARCHAR2(32) not null,
  business_type   NUMBER not null,
  phone_no        VARCHAR2(64) not null,
  carrier_no      VARCHAR2(5),
  province_no     VARCHAR2(5),
  city_no         VARCHAR2(5),
  user_ip         VARCHAR2(32) not null,
  promote_id      NUMBER,
  account_id      NUMBER,
  need_vcode      NUMBER default 1 not null,
  order_face      NUMBER(15,3) not null,
  pay_price       NUMBER(15,3) not null,
  cost_price      NUMBER(15,3),
  service_fee     NUMBER(15,3),
  succ_money      NUMBER(15,3),
  pay_status      NUMBER not null,
  order_status    NUMBER not null,
  refund_status   NUMBER default 10 not null,
  manual_status   NUMBER default 10 not null,
  pay_finish_time DATE,
  plat_trade_no   VARCHAR2(64),
  plat_trade_msg  VARCHAR2(128),
  result_msg      VARCHAR2(256),
  error_code      NUMBER,
  error_desc      VARCHAR2(256),
  server_ip       VARCHAR2(16) not null,
  create_time     DATE default sysdate not null,
  finish_time     DATE,
  close_time      DATE default sysdate+5/24/60,
  promoter_id     NUMBER,
  label_id        NUMBER,
  bind_next_time  DATE,
  bind_times      NUMBER default 0,
  bind_batch_no   NUMBER
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_ORDER_MAIN
  is '订单主表';
comment on column DM_SYSTEM.DM_ORDER_MAIN.order_no
  is '订单号';
comment on column DM_SYSTEM.DM_ORDER_MAIN.term_no
  is '终端编号';
comment on column DM_SYSTEM.DM_ORDER_MAIN.product_no
  is '产品编号';
comment on column DM_SYSTEM.DM_ORDER_MAIN.business_type
  is '业务类型: 1-电话号卡 2-手机话费 3-手机流量 4-手机套餐';
comment on column DM_SYSTEM.DM_ORDER_MAIN.phone_no
  is '办理账号';
comment on column DM_SYSTEM.DM_ORDER_MAIN.carrier_no
  is '运营商编码';
comment on column DM_SYSTEM.DM_ORDER_MAIN.province_no
  is '省份编码';
comment on column DM_SYSTEM.DM_ORDER_MAIN.city_no
  is '地市编码';
comment on column DM_SYSTEM.DM_ORDER_MAIN.user_ip
  is '用户IP';
comment on column DM_SYSTEM.DM_ORDER_MAIN.promote_id
  is '推广编号';
comment on column DM_SYSTEM.DM_ORDER_MAIN.account_id
  is '收款账号ID';
comment on column DM_SYSTEM.DM_ORDER_MAIN.need_vcode
  is '需要验证码: 0-需要 1-不需要';
comment on column DM_SYSTEM.DM_ORDER_MAIN.order_face
  is '订单面值';
comment on column DM_SYSTEM.DM_ORDER_MAIN.pay_price
  is '支付价格';
comment on column DM_SYSTEM.DM_ORDER_MAIN.cost_price
  is '成本价格';
comment on column DM_SYSTEM.DM_ORDER_MAIN.service_fee
  is '手续费';
comment on column DM_SYSTEM.DM_ORDER_MAIN.succ_money
  is '成功金额';
comment on column DM_SYSTEM.DM_ORDER_MAIN.pay_status
  is '支付状态: 0-成功 10-无需处理 20-等待支付 30-支付中 90-失败';
comment on column DM_SYSTEM.DM_ORDER_MAIN.order_status
  is '订单状态: 0-成功 10-无需处理 20-等待处理 30-处理中 90-失败';
comment on column DM_SYSTEM.DM_ORDER_MAIN.refund_status
  is '退款状态: 0-成功 10-无需处理 20-等待退款 30-退款中 90-失败';
comment on column DM_SYSTEM.DM_ORDER_MAIN.manual_status
  is '人工状态: 0-成功 10-无需处理 20-等待审核 90-审核成功';
comment on column DM_SYSTEM.DM_ORDER_MAIN.pay_finish_time
  is '支付完成时间';
comment on column DM_SYSTEM.DM_ORDER_MAIN.plat_trade_no
  is '支付平台流水号';
comment on column DM_SYSTEM.DM_ORDER_MAIN.plat_trade_msg
  is '平台支付消息';
comment on column DM_SYSTEM.DM_ORDER_MAIN.result_msg
  is '结果消息';
comment on column DM_SYSTEM.DM_ORDER_MAIN.error_code
  is '终端错误码';
comment on column DM_SYSTEM.DM_ORDER_MAIN.error_desc
  is '终端错误描述';
comment on column DM_SYSTEM.DM_ORDER_MAIN.server_ip
  is '收单服务器IP';
comment on column DM_SYSTEM.DM_ORDER_MAIN.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_ORDER_MAIN.finish_time
  is '完成时间';
comment on column DM_SYSTEM.DM_ORDER_MAIN.close_time
  is '自动关闭时间';
comment on column DM_SYSTEM.DM_ORDER_MAIN.promoter_id
  is '推广人编号';
comment on column DM_SYSTEM.DM_ORDER_MAIN.label_id
  is '推广人标签编号';
comment on column DM_SYSTEM.DM_ORDER_MAIN.bind_next_time
  is '下次绑定时间';
comment on column DM_SYSTEM.DM_ORDER_MAIN.bind_times
  is '绑定次数';
comment on column DM_SYSTEM.DM_ORDER_MAIN.bind_batch_no
  is '绑定批次号';
create index DM_SYSTEM.IDX_BIND_BATCH_NO on DM_SYSTEM.DM_ORDER_MAIN (BIND_BATCH_NO)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_ORDER_ORDER_STATUS on DM_SYSTEM.DM_ORDER_MAIN (ORDER_STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_ORDER_REFUND_PAY_STATUS on DM_SYSTEM.DM_ORDER_MAIN (PAY_STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_ORDER_REFUND_STATUS on DM_SYSTEM.DM_ORDER_MAIN (REFUND_STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_ORDER_SHARE_UID on DM_SYSTEM.DM_ORDER_MAIN (PROMOTE_ID)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_ORDER_MAIN
  add constraint PK_ORDER_MAIN_ID primary key (ORDER_NO)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_ORDER_MAIN_EXT
prompt ================================
prompt
create table DM_SYSTEM.DM_ORDER_MAIN_EXT
(
  order_no        VARCHAR2(32) not null,
  contact_name    VARCHAR2(64) not null,
  contact_addr    VARCHAR2(256) not null,
  card_user_id    VARCHAR2(32) not null,
  card_user_name  VARCHAR2(100) not null,
  card_pic_front  VARCHAR2(128),
  card_pic_back   VARCHAR2(128),
  card_pic_hand   VARCHAR2(128),
  new_phone_no    VARCHAR2(32),
  activate_status NUMBER,
  activate_time   DATE,
  recharge_status NUMBER,
  recharge_time   DATE,
  express_name    VARCHAR2(128),
  express_no      VARCHAR2(64),
  create_time     DATE default sysdate not null,
  update_time     DATE,
  recharge_face   NUMBER
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_ORDER_MAIN_EXT
  is '订单用户信息表';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.order_no
  is '订单号';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.contact_name
  is '联系人姓名';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.contact_addr
  is '联系人地址';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.card_user_id
  is '身份证号码';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.card_user_name
  is '身份证姓名';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.card_pic_front
  is '身份证照地址(正面)';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.card_pic_back
  is '身份证照地址(反面)';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.card_pic_hand
  is '身份证照地址(手持)';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.new_phone_no
  is '新手机号';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.activate_status
  is '激活状态: 0-已激活 1-待激活';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.activate_time
  is '激活时间';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.recharge_status
  is '首充状态: 0-已首充 1-未首充';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.recharge_time
  is '首充时间';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.express_name
  is '快递名称';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.express_no
  is '快递单号';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.update_time
  is '更新时间';
comment on column DM_SYSTEM.DM_ORDER_MAIN_EXT.recharge_face
  is '首充面值';
create index DM_SYSTEM.IDX_USER_ID_NO on DM_SYSTEM.DM_ORDER_MAIN_EXT (CARD_USER_ID)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_ORDER_MAIN_EXT
  add constraint PK_ORDER_USER_ID primary key (ORDER_NO)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_ORDER_NOTIFY
prompt ==============================
prompt
create table DM_SYSTEM.DM_ORDER_NOTIFY
(
  record_id        NUMBER not null,
  promote_id       NUMBER not null,
  order_no         VARCHAR2(32) not null,
  notify_type      NUMBER not null,
  notify_times     NUMBER default 0 not null,
  notify_max_times NUMBER not null,
  status           NUMBER default 20 not null,
  script_id        NUMBER not null,
  service_code     VARCHAR2(128) not null,
  robot_ip         VARCHAR2(64),
  result_msg       VARCHAR2(256),
  create_time      DATE default sysdate not null,
  last_time        DATE,
  next_time        DATE default sysdate not null,
  finish_time      DATE
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_ORDER_NOTIFY
  is '订单通知';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.record_id
  is '通知编号';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.promote_id
  is '推广编号';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.order_no
  is '订单编号';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.notify_type
  is '通知类型';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.notify_times
  is '通知次数';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.notify_max_times
  is '通知最大次数';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.status
  is '通知状态: 0-成功 20-等待处理 30-处理中 90-处理失败';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.script_id
  is '脚本编号';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.service_code
  is '服务编码';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.robot_ip
  is '机器人IP';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.result_msg
  is '结果消息';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.last_time
  is '上次通知时间';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.next_time
  is '下次通知时间';
comment on column DM_SYSTEM.DM_ORDER_NOTIFY.finish_time
  is '完成时间';
create index DM_SYSTEM.IDX_TERM_NOTIFY_NEXT_TIME on DM_SYSTEM.DM_ORDER_NOTIFY (NEXT_TIME)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_TERM_NOTIFY_STATUS on DM_SYSTEM.DM_ORDER_NOTIFY (STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_TERM_NOTIFY_SVC_CODE on DM_SYSTEM.DM_ORDER_NOTIFY (SERVICE_CODE)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_ORDER_NOTIFY
  add constraint PK_ORDER_NOTIFY_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_ORDER_NOTIFY
  add constraint UK_ORDER_NOTIFY_TYPE unique (ORDER_NO, NOTIFY_TYPE)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_ORDER_QUERY
prompt =============================
prompt
create table DM_SYSTEM.DM_ORDER_QUERY
(
  bind_id      VARCHAR2(64) not null,
  order_no     VARCHAR2(64) not null,
  status       NUMBER default 20 not null,
  script_id    NUMBER not null,
  service_code VARCHAR2(32) not null,
  robot_ip     VARCHAR2(20),
  result_msg   VARCHAR2(256),
  query_times  NUMBER default 0 not null,
  batch_no     NUMBER,
  next_time    DATE not null,
  create_time  DATE default sysdate not null,
  finish_time  DATE,
  max_times    NUMBER not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_ORDER_QUERY
  is '订单查询表';
comment on column DM_SYSTEM.DM_ORDER_QUERY.bind_id
  is '绑定编号';
comment on column DM_SYSTEM.DM_ORDER_QUERY.order_no
  is '订单编号';
comment on column DM_SYSTEM.DM_ORDER_QUERY.status
  is '查询状态: 0-成功 10-无需处理 20-等待查询 30-正在查询 90-查询失败';
comment on column DM_SYSTEM.DM_ORDER_QUERY.script_id
  is '脚本ID';
comment on column DM_SYSTEM.DM_ORDER_QUERY.service_code
  is '服务编码(队列名/机器人CODE)';
comment on column DM_SYSTEM.DM_ORDER_QUERY.robot_ip
  is '查询机器IP';
comment on column DM_SYSTEM.DM_ORDER_QUERY.result_msg
  is '结果消息(最近一次)';
comment on column DM_SYSTEM.DM_ORDER_QUERY.query_times
  is '查询次数';
comment on column DM_SYSTEM.DM_ORDER_QUERY.batch_no
  is '后补批次';
comment on column DM_SYSTEM.DM_ORDER_QUERY.next_time
  is '下次查询时间';
comment on column DM_SYSTEM.DM_ORDER_QUERY.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_ORDER_QUERY.finish_time
  is '完成时间';
comment on column DM_SYSTEM.DM_ORDER_QUERY.max_times
  is '查询最大次数: 0-不限次数';
create index DM_SYSTEM.IDX_ORDER_BIND_QUERY_STATUS on DM_SYSTEM.DM_ORDER_QUERY (STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_ORDER_QUERY
  add constraint PK_ORDER_BIND_QUERY_ID primary key (BIND_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_ORDER_REFUND
prompt ==============================
prompt
create table DM_SYSTEM.DM_ORDER_REFUND
(
  record_id      NUMBER not null,
  account_id     NUMBER not null,
  account_type   NUMBER not null,
  term_no        VARCHAR2(64) not null,
  order_no       VARCHAR2(32) not null,
  refund_fee     NUMBER(15,3) not null,
  refund_reason  VARCHAR2(128) not null,
  service_fee    NUMBER not null,
  plat_trade_no  VARCHAR2(64) not null,
  plat_refund_no VARCHAR2(64),
  status         NUMBER default 20 not null,
  service_code   VARCHAR2(64) not null,
  robot_ip       VARCHAR2(32),
  result_msg     VARCHAR2(256),
  create_time    DATE default sysdate not null,
  finish_time    DATE,
  start_time     DATE
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_ORDER_REFUND
  is '订单退款记录';
comment on column DM_SYSTEM.DM_ORDER_REFUND.record_id
  is '记录编号';
comment on column DM_SYSTEM.DM_ORDER_REFUND.account_id
  is '账号编号';
comment on column DM_SYSTEM.DM_ORDER_REFUND.account_type
  is '账户类型: 1-支付宝 2-微信';
comment on column DM_SYSTEM.DM_ORDER_REFUND.term_no
  is '终端编号';
comment on column DM_SYSTEM.DM_ORDER_REFUND.order_no
  is '订单号';
comment on column DM_SYSTEM.DM_ORDER_REFUND.refund_fee
  is '退款金额';
comment on column DM_SYSTEM.DM_ORDER_REFUND.refund_reason
  is '退款原因';
comment on column DM_SYSTEM.DM_ORDER_REFUND.service_fee
  is '手续费';
comment on column DM_SYSTEM.DM_ORDER_REFUND.plat_trade_no
  is '支付平台交易编号';
comment on column DM_SYSTEM.DM_ORDER_REFUND.plat_refund_no
  is '支付平台退款编号';
comment on column DM_SYSTEM.DM_ORDER_REFUND.status
  is '退款状态: 0-成功 20-等待 30-处理中 90-失败';
comment on column DM_SYSTEM.DM_ORDER_REFUND.service_code
  is '服务编码(机器人编码)';
comment on column DM_SYSTEM.DM_ORDER_REFUND.robot_ip
  is '机器人IP';
comment on column DM_SYSTEM.DM_ORDER_REFUND.result_msg
  is '结果消息';
comment on column DM_SYSTEM.DM_ORDER_REFUND.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_ORDER_REFUND.finish_time
  is '完成时间';
comment on column DM_SYSTEM.DM_ORDER_REFUND.start_time
  is '开始时间';
create index DM_SYSTEM.IDX_REFUND_RECORD_ACNT_ID on DM_SYSTEM.DM_ORDER_REFUND (ACCOUNT_ID)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_REFUND_RECORD_ORDER_NO on DM_SYSTEM.DM_ORDER_REFUND (ORDER_NO)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_REFUND_RECORD_STATUS on DM_SYSTEM.DM_ORDER_REFUND (STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_ORDER_REFUND
  add constraint PK_REFUND_RECORD_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_ORDER_REFUND
  add constraint UK_REFUND_RECORD_ORDER_NO unique (ORDER_NO);

prompt
prompt Creating table DM_ORDER_VCODE
prompt =============================
prompt
create table DM_SYSTEM.DM_ORDER_VCODE
(
  order_no        VARCHAR2(64) not null,
  term_no         VARCHAR2(64) not null,
  term_product_no VARCHAR2(64),
  up_channel_no   VARCHAR2(64),
  up_product_no   VARCHAR2(64),
  phone_no        VARCHAR2(64) not null,
  business_type   NUMBER,
  carrier_no      VARCHAR2(64) not null,
  province_no     VARCHAR2(64) not null,
  city_no         VARCHAR2(64) not null,
  promote_id      NUMBER not null,
  script_id       NUMBER,
  send_times      NUMBER default 1 not null,
  send_status     NUMBER default 20 not null,
  retry_times     NUMBER default 0,
  next_send_time  DATE default sysdate + 1/24/60 not null,
  result_msg      VARCHAR2(256),
  user_ip         VARCHAR2(64) not null,
  vcode           VARCHAR2(64),
  create_time     DATE default sysdate not null,
  finish_time     DATE,
  promoter_id     NUMBER not null,
  label_id        NUMBER not null,
  template_id     VARCHAR2(128),
  verify_state    NUMBER,
  serial_no       NUMBER
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_ORDER_VCODE
  is '订单验证码表';
comment on column DM_SYSTEM.DM_ORDER_VCODE.order_no
  is '订单号';
comment on column DM_SYSTEM.DM_ORDER_VCODE.term_no
  is '终端编号';
comment on column DM_SYSTEM.DM_ORDER_VCODE.term_product_no
  is '终端产品编码';
comment on column DM_SYSTEM.DM_ORDER_VCODE.up_channel_no
  is '上游渠道编号';
comment on column DM_SYSTEM.DM_ORDER_VCODE.up_product_no
  is '上游产品编号';
comment on column DM_SYSTEM.DM_ORDER_VCODE.phone_no
  is '手机号';
comment on column DM_SYSTEM.DM_ORDER_VCODE.business_type
  is '业务类型';
comment on column DM_SYSTEM.DM_ORDER_VCODE.carrier_no
  is '运营商编码';
comment on column DM_SYSTEM.DM_ORDER_VCODE.province_no
  is '省份编码';
comment on column DM_SYSTEM.DM_ORDER_VCODE.city_no
  is '地市编码';
comment on column DM_SYSTEM.DM_ORDER_VCODE.promote_id
  is '推广编号';
comment on column DM_SYSTEM.DM_ORDER_VCODE.script_id
  is '脚本编号';
comment on column DM_SYSTEM.DM_ORDER_VCODE.send_times
  is '发送次数';
comment on column DM_SYSTEM.DM_ORDER_VCODE.send_status
  is '短信状态: 0-发送成功 20-等待发送 30-发送中 90-发送失败  99-发送未知';
comment on column DM_SYSTEM.DM_ORDER_VCODE.retry_times
  is '重试次数';
comment on column DM_SYSTEM.DM_ORDER_VCODE.next_send_time
  is '下次发送时间';
comment on column DM_SYSTEM.DM_ORDER_VCODE.result_msg
  is '发送结果消息';
comment on column DM_SYSTEM.DM_ORDER_VCODE.user_ip
  is '用户IP';
comment on column DM_SYSTEM.DM_ORDER_VCODE.vcode
  is '用户验证码';
comment on column DM_SYSTEM.DM_ORDER_VCODE.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_ORDER_VCODE.finish_time
  is '完成时间';
comment on column DM_SYSTEM.DM_ORDER_VCODE.promoter_id
  is '推广人编号';
comment on column DM_SYSTEM.DM_ORDER_VCODE.label_id
  is '推广人标签编号';
comment on column DM_SYSTEM.DM_ORDER_VCODE.template_id
  is '短信模板ID(暂存短信内容)';
comment on column DM_SYSTEM.DM_ORDER_VCODE.verify_state
  is '验证状态: 0-验证通过 20-等待验证  90-验证未通过';
comment on column DM_SYSTEM.DM_ORDER_VCODE.serial_no
  is '发送流水号';
create index DM_SYSTEM.IDX_ORDER_VCODE_SEND_STATUS on DM_SYSTEM.DM_ORDER_VCODE (SEND_STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_ORDER_VCODE
  add constraint PK_ORDER_VCODE_ORDER_NO primary key (ORDER_NO)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_PAY_ACCOUNT
prompt =============================
prompt
create table DM_SYSTEM.DM_PAY_ACCOUNT
(
  account_id        NUMBER not null,
  account_type      NUMBER(1) not null,
  app_id            VARCHAR2(128) not null,
  app_secret        VARCHAR2(64),
  merchant_id       VARCHAR2(128),
  sign_key          VARCHAR2(256),
  cert_path         VARCHAR2(256),
  cert_pwd          VARCHAR2(64),
  public_key        VARCHAR2(4000),
  private_key       VARCHAR2(4000),
  balance           NUMBER(15,3) default 0 not null,
  auth_redirect_url VARCHAR2(64),
  pay_redirect_url  VARCHAR2(256),
  pay_notify_url    VARCHAR2(256) not null,
  refund_notify_url VARCHAR2(256),
  status            NUMBER(1) default 0 not null,
  remark            VARCHAR2(128),
  create_user       VARCHAR2(64) not null,
  create_time       DATE default sysdate not null,
  update_user       VARCHAR2(64),
  update_time       DATE default sysdate not null,
  account_name      VARCHAR2(128)
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_PAY_ACCOUNT
  is '平台支付账号';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.account_id
  is '支付账号编号';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.account_type
  is '账号类型: 1-支付宝 2-微信';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.app_id
  is '开放平台AppId';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.app_secret
  is '开放平台AppSecret';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.merchant_id
  is '商户编号';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.sign_key
  is '签名KEY';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.cert_path
  is '证书路径';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.cert_pwd
  is '证书密码';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.public_key
  is '加密公钥';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.private_key
  is '解密/验签私钥';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.balance
  is '账户余额';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.auth_redirect_url
  is 'API授权跳转地址';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.pay_redirect_url
  is '支付完跳转地址';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.pay_notify_url
  is '支付结果回调地址';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.refund_notify_url
  is '退款回调地址';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.status
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.remark
  is '备注';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.update_user
  is '更新人';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.update_time
  is '更新时间';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT.account_name
  is '账号名称';
create index DM_SYSTEM.IDX_PAY_ACNT_STATUS on DM_SYSTEM.DM_PAY_ACCOUNT (STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_PAY_ACCOUNT
  add constraint PK_PAY_ACNT_ID primary key (ACCOUNT_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_PAY_ACCOUNT
  add constraint UK_ACNT_TYPE_APP_ID unique (ACCOUNT_TYPE, APP_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_PAY_ACCOUNT_RATE
prompt ==================================
prompt
create table DM_SYSTEM.DM_PAY_ACCOUNT_RATE
(
  record_id      NUMBER not null,
  account_type   NUMBER not null,
  pay_type       VARCHAR2(32) default '*' not null,
  service_rate   NUMBER(10,3) default 0 not null,
  pay_name       VARCHAR2(128),
  refund_service NUMBER default 0
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_PAY_ACCOUNT_RATE
  is '支付平台手续费率';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT_RATE.record_id
  is '记录编号';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT_RATE.account_type
  is '账号类型: 1-支付宝 2-微信 3-京东';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT_RATE.pay_type
  is '支付类型: *-所有';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT_RATE.service_rate
  is '手续费率';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT_RATE.pay_name
  is '支付名称';
comment on column DM_SYSTEM.DM_PAY_ACCOUNT_RATE.refund_service
  is '退手续费: 0-退 1-不退';
alter table DM_SYSTEM.DM_PAY_ACCOUNT_RATE
  add constraint PK_PAY_ACNT_RATE_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255;

prompt
prompt Creating table DM_PAY_FUND_CHANGE
prompt =================================
prompt
create table DM_SYSTEM.DM_PAY_FUND_CHANGE
(
  record_id      NUMBER not null,
  term_no        VARCHAR2(32) not null,
  order_no       VARCHAR2(32) not null,
  account_id     NUMBER(20) not null,
  change_type    NUMBER(2) not null,
  change_money   NUMBER(15,3) not null,
  before_balance NUMBER(15,3) not null,
  after_balance  NUMBER(15,3) not null,
  service_fee    NUMBER(15,3) not null,
  change_time    DATE default sysdate,
  operator       VARCHAR2(64) not null,
  remark         VARCHAR2(128)
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_PAY_FUND_CHANGE
  is '收款账号资金变动';
comment on column DM_SYSTEM.DM_PAY_FUND_CHANGE.record_id
  is '记录编号';
comment on column DM_SYSTEM.DM_PAY_FUND_CHANGE.term_no
  is '终端编号';
comment on column DM_SYSTEM.DM_PAY_FUND_CHANGE.order_no
  is '订单号';
comment on column DM_SYSTEM.DM_PAY_FUND_CHANGE.account_id
  is '账户编号';
comment on column DM_SYSTEM.DM_PAY_FUND_CHANGE.change_type
  is '变动类型: 1-收款 2-扣款 3-退款 4-提现';
comment on column DM_SYSTEM.DM_PAY_FUND_CHANGE.change_money
  is '变动金额';
comment on column DM_SYSTEM.DM_PAY_FUND_CHANGE.before_balance
  is '变动前余额';
comment on column DM_SYSTEM.DM_PAY_FUND_CHANGE.after_balance
  is '变动后余额';
comment on column DM_SYSTEM.DM_PAY_FUND_CHANGE.service_fee
  is '手续费(亏损)';
comment on column DM_SYSTEM.DM_PAY_FUND_CHANGE.change_time
  is '变动时间';
comment on column DM_SYSTEM.DM_PAY_FUND_CHANGE.operator
  is '操作人';
comment on column DM_SYSTEM.DM_PAY_FUND_CHANGE.remark
  is '备注';
create index DM_SYSTEM.IDX_PAY_FUND_ACCOUNT_ID on DM_SYSTEM.DM_PAY_FUND_CHANGE (ACCOUNT_ID)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_PAY_FUND_CHANGE_TYPE on DM_SYSTEM.DM_PAY_FUND_CHANGE (CHANGE_TYPE)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_PAY_FUND_CHANGE
  add constraint PK_PAY_FUND_CHANGE_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_PAY_FUND_CHANGE
  add constraint UK_PAY_FUND_CHANGE_TYPE unique (ORDER_NO, CHANGE_TYPE)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_PAY_SCRIPT
prompt ============================
prompt
create table DM_SYSTEM.DM_PAY_SCRIPT
(
  record_id    NUMBER not null,
  account_type NUMBER not null,
  script_type  NUMBER not null,
  script_path  VARCHAR2(64) not null,
  request_url  VARCHAR2(256) not null,
  service_code VARCHAR2(64) not null,
  status       NUMBER default 0 not null,
  remark       VARCHAR2(128),
  create_user  VARCHAR2(64) not null,
  create_time  DATE default sysdate not null,
  update_user  VARCHAR2(64),
  update_time  DATE default sysdate not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_PAY_SCRIPT
  is '支付账号脚本';
comment on column DM_SYSTEM.DM_PAY_SCRIPT.record_id
  is '记录编号';
comment on column DM_SYSTEM.DM_PAY_SCRIPT.account_type
  is '账号类型: 1-支付宝 2-微信';
comment on column DM_SYSTEM.DM_PAY_SCRIPT.script_type
  is '脚本类型: 1-订单提交 2-订单查询 3-余额查询 4-退款申请 5-验证码发送 6-验证码提交';
comment on column DM_SYSTEM.DM_PAY_SCRIPT.script_path
  is '脚本路径';
comment on column DM_SYSTEM.DM_PAY_SCRIPT.request_url
  is '请求地址';
comment on column DM_SYSTEM.DM_PAY_SCRIPT.service_code
  is '服务编码(机器人code)';
comment on column DM_SYSTEM.DM_PAY_SCRIPT.status
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_PAY_SCRIPT.remark
  is '备注';
comment on column DM_SYSTEM.DM_PAY_SCRIPT.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_PAY_SCRIPT.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_PAY_SCRIPT.update_user
  is '更新人';
comment on column DM_SYSTEM.DM_PAY_SCRIPT.update_time
  is '更新时间';
alter table DM_SYSTEM.DM_PAY_SCRIPT
  add constraint PK_PAYMENT_SCRIPT_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_PAY_SCRIPT
  add constraint UK_PAYMENT_SCRIPT_TYPE unique (ACCOUNT_TYPE, SCRIPT_TYPE)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_PRODUCT_GROUP
prompt ===============================
prompt
create table DM_SYSTEM.DM_PRODUCT_GROUP
(
  group_no    VARCHAR2(64) not null,
  group_name  VARCHAR2(128) not null,
  remark      VARCHAR2(256),
  create_user VARCHAR2(64) not null,
  create_time DATE default sysdate not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_PRODUCT_GROUP
  is '产品分组表';
comment on column DM_SYSTEM.DM_PRODUCT_GROUP.group_no
  is '分组编号';
comment on column DM_SYSTEM.DM_PRODUCT_GROUP.group_name
  is '分组名称';
comment on column DM_SYSTEM.DM_PRODUCT_GROUP.remark
  is '备注';
comment on column DM_SYSTEM.DM_PRODUCT_GROUP.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_PRODUCT_GROUP.create_time
  is '创建时间';
alter table DM_SYSTEM.DM_PRODUCT_GROUP
  add constraint PK_PRODUCT_GROUP_NO primary key (GROUP_NO)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_PROMOTER_INFO
prompt ===============================
prompt
create table DM_SYSTEM.DM_PROMOTER_INFO
(
  promoter_id    NUMBER not null,
  user_name      VARCHAR2(100) not null,
  login_uid      VARCHAR2(32),
  login_pwd      VARCHAR2(32),
  phone_no       VARCHAR2(32),
  wechat         VARCHAR2(64),
  email          VARCHAR2(128),
  settle_account VARCHAR2(128),
  account_name   VARCHAR2(64),
  account_type   NUMBER,
  account_desc   VARCHAR2(64),
  company_name   VARCHAR2(128),
  company_addr   VARCHAR2(256),
  license_pic    VARCHAR2(256),
  status         NUMBER default 0 not null,
  remark         VARCHAR2(128),
  create_user    VARCHAR2(64) not null,
  create_time    DATE default sysdate not null,
  update_user    VARCHAR2(64),
  update_time    DATE
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_PROMOTER_INFO
  is '推广人信息';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.promoter_id
  is '推广人编号';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.user_name
  is '用户姓名';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.login_uid
  is '登录账号';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.login_pwd
  is '登录密码';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.phone_no
  is '手机号';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.wechat
  is '微信号';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.email
  is '邮件地址';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.settle_account
  is '结算账号';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.account_name
  is '账号名称';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.account_type
  is '账号类型: 1-支付宝 2-微信 3-京东 4-银行卡';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.account_desc
  is '账号说明';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.company_name
  is '公司名称';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.company_addr
  is '公司地址';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.license_pic
  is '营业执照';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.status
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.remark
  is '备注';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.update_user
  is '更新人';
comment on column DM_SYSTEM.DM_PROMOTER_INFO.update_time
  is '更新时间';
create unique index DM_SYSTEM.UK_LOGIN_UID on DM_SYSTEM.DM_PROMOTER_INFO (LOGIN_UID)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_PROMOTER_INFO
  add constraint PK_SHARE_USER_ID primary key (PROMOTER_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_PROMOTER_LABEL
prompt ================================
prompt
create table DM_SYSTEM.DM_PROMOTER_LABEL
(
  label_id    NUMBER not null,
  promoter_id NUMBER not null,
  label_name  VARCHAR2(128) not null,
  remark      VARCHAR2(256),
  create_time DATE default sysdate not null,
  update_time DATE,
  create_user VARCHAR2(64)
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_PROMOTER_LABEL
  is '推广人标签(渠道)';
comment on column DM_SYSTEM.DM_PROMOTER_LABEL.label_id
  is '标签编号';
comment on column DM_SYSTEM.DM_PROMOTER_LABEL.promoter_id
  is '推广人编号';
comment on column DM_SYSTEM.DM_PROMOTER_LABEL.label_name
  is '标签名称';
comment on column DM_SYSTEM.DM_PROMOTER_LABEL.remark
  is '备注';
comment on column DM_SYSTEM.DM_PROMOTER_LABEL.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_PROMOTER_LABEL.update_time
  is '更新时间';
comment on column DM_SYSTEM.DM_PROMOTER_LABEL.create_user
  is '创建人';
alter table DM_SYSTEM.DM_PROMOTER_LABEL
  add constraint PK_PROMOTER_LABEL_ID primary key (LABEL_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_SYSTEM_CARRIER
prompt ================================
prompt
create table DM_SYSTEM.DM_SYSTEM_CARRIER
(
  carrier_no   VARCHAR2(10) not null,
  carrier_name VARCHAR2(32) not null,
  enable       NUMBER(1) default 0 not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_SYSTEM_CARRIER
  is '系统运营商编号表';
comment on column DM_SYSTEM.DM_SYSTEM_CARRIER.carrier_no
  is '运营商编号';
comment on column DM_SYSTEM.DM_SYSTEM_CARRIER.carrier_name
  is '运营商名称';
comment on column DM_SYSTEM.DM_SYSTEM_CARRIER.enable
  is '状态: 0-启用 1-禁用';
alter table DM_SYSTEM.DM_SYSTEM_CARRIER
  add constraint PK_SYS_CARRIER_ID primary key (CARRIER_NO)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_SYSTEM_CITY
prompt =============================
prompt
create table DM_SYSTEM.DM_SYSTEM_CITY
(
  city_no     VARCHAR2(10) not null,
  city_name   VARCHAR2(40),
  status      NUMBER(1) default 0,
  province_no VARCHAR2(4),
  code        VARCHAR2(10)
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_SYSTEM_CITY
  is '地市表';
comment on column DM_SYSTEM.DM_SYSTEM_CITY.city_no
  is '城市编码';
comment on column DM_SYSTEM.DM_SYSTEM_CITY.city_name
  is '城市名称';
comment on column DM_SYSTEM.DM_SYSTEM_CITY.status
  is '状态';
comment on column DM_SYSTEM.DM_SYSTEM_CITY.province_no
  is '省份编码';
comment on column DM_SYSTEM.DM_SYSTEM_CITY.code
  is '编号';

prompt
prompt Creating table DM_SYSTEM_DEAL_CODE
prompt ==================================
prompt
create table DM_SYSTEM.DM_SYSTEM_DEAL_CODE
(
  error_code   NUMBER not null,
  deal_code    NUMBER(2) not null,
  allow_rebind NUMBER(1) default 1 not null,
  allow_retry  NUMBER(1) default 1 not null,
  to_manual    NUMBER(1) default 1 not null,
  delay_failed NUMBER default 1 not null,
  delay_minute NUMBER,
  order_code   VARCHAR2(10) not null,
  order_desc   VARCHAR2(128) not null,
  error_msg    VARCHAR2(64) not null,
  status       NUMBER(1) default 0 not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_SYSTEM_DEAL_CODE
  is '系统错误处理码';
comment on column DM_SYSTEM.DM_SYSTEM_DEAL_CODE.error_code
  is '错误码';
comment on column DM_SYSTEM.DM_SYSTEM_DEAL_CODE.deal_code
  is '处理码: 0-处理成功 1-处理失败 9-未知';
comment on column DM_SYSTEM.DM_SYSTEM_DEAL_CODE.allow_rebind
  is '允许再次绑定: 0-允许 1-不允许';
comment on column DM_SYSTEM.DM_SYSTEM_DEAL_CODE.allow_retry
  is '订单失败重试: 0-允许 1-不允许';
comment on column DM_SYSTEM.DM_SYSTEM_DEAL_CODE.to_manual
  is '进入人工审核: 0-是 1-否';
comment on column DM_SYSTEM.DM_SYSTEM_DEAL_CODE.delay_failed
  is '是否延迟失败: 0-是 1-否';
comment on column DM_SYSTEM.DM_SYSTEM_DEAL_CODE.delay_minute
  is '延迟失败分钟';
comment on column DM_SYSTEM.DM_SYSTEM_DEAL_CODE.order_code
  is '订单错误码';
comment on column DM_SYSTEM.DM_SYSTEM_DEAL_CODE.order_desc
  is '订单错误消息';
comment on column DM_SYSTEM.DM_SYSTEM_DEAL_CODE.error_msg
  is '错误消息';
comment on column DM_SYSTEM.DM_SYSTEM_DEAL_CODE.status
  is '状态';
alter table DM_SYSTEM.DM_SYSTEM_DEAL_CODE
  add constraint PK_SYS_DEAL_CODE_ID primary key (ERROR_CODE)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_SYSTEM_DICTIONARY
prompt ===================================
prompt
create table DM_SYSTEM.DM_SYSTEM_DICTIONARY
(
  dic_id NUMBER(10) not null,
  type   VARCHAR2(32) not null,
  name   VARCHAR2(32) not null,
  value  VARCHAR2(32) not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_SYSTEM_DICTIONARY
  is '系统字典配置表';
comment on column DM_SYSTEM.DM_SYSTEM_DICTIONARY.dic_id
  is '字典编号';
comment on column DM_SYSTEM.DM_SYSTEM_DICTIONARY.type
  is '字典类型';
comment on column DM_SYSTEM.DM_SYSTEM_DICTIONARY.name
  is '字典名称';
comment on column DM_SYSTEM.DM_SYSTEM_DICTIONARY.value
  is '字典值';
alter table DM_SYSTEM.DM_SYSTEM_DICTIONARY
  add constraint PK_SYS_DIC_ID primary key (DIC_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_SYSTEM_LOG
prompt ============================
prompt
create table DM_SYSTEM.DM_SYSTEM_LOG
(
  log_id      NUMBER(20) not null,
  object_name VARCHAR2(255) not null,
  error_level NUMBER(10) not null,
  error_desc  VARCHAR2(255) not null,
  trace_info  VARCHAR2(1024) not null,
  create_time DATE default sysdate not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_SYSTEM_LOG
  is '系统日志';
comment on column DM_SYSTEM.DM_SYSTEM_LOG.log_id
  is '日志编号';
comment on column DM_SYSTEM.DM_SYSTEM_LOG.object_name
  is '对象名称';
comment on column DM_SYSTEM.DM_SYSTEM_LOG.error_level
  is '错误等级';
comment on column DM_SYSTEM.DM_SYSTEM_LOG.error_desc
  is '错误信息';
comment on column DM_SYSTEM.DM_SYSTEM_LOG.trace_info
  is '堆栈信息';
comment on column DM_SYSTEM.DM_SYSTEM_LOG.create_time
  is '创建时间';
alter table DM_SYSTEM.DM_SYSTEM_LOG
  add constraint PK_SYS_LOG_ID primary key (LOG_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_SYSTEM_NUM_SECTION
prompt ====================================
prompt
create table DM_SYSTEM.DM_SYSTEM_NUM_SECTION
(
  section     VARCHAR2(512) not null,
  carrier_no  VARCHAR2(10) not null,
  province_no VARCHAR2(10) not null,
  city_no     VARCHAR2(10) not null,
  enable      NUMBER default 0 not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_SYSTEM_NUM_SECTION
  is '系统号段表';
comment on column DM_SYSTEM.DM_SYSTEM_NUM_SECTION.section
  is '号段';
comment on column DM_SYSTEM.DM_SYSTEM_NUM_SECTION.carrier_no
  is '运营商';
comment on column DM_SYSTEM.DM_SYSTEM_NUM_SECTION.province_no
  is '省份';
comment on column DM_SYSTEM.DM_SYSTEM_NUM_SECTION.city_no
  is '城市';
comment on column DM_SYSTEM.DM_SYSTEM_NUM_SECTION.enable
  is '启用状态: 0-启用 1-禁用';
alter table DM_SYSTEM.DM_SYSTEM_NUM_SECTION
  add constraint PK_SECTION_ID primary key (SECTION)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_SYSTEM_PROVINCE
prompt =================================
prompt
create table DM_SYSTEM.DM_SYSTEM_PROVINCE
(
  province_no   VARCHAR2(4) not null,
  province_name VARCHAR2(32) not null,
  enable        NUMBER(1) not null,
  sort_id       NUMBER(2) not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_SYSTEM_PROVINCE
  is '系统省份编号表';
comment on column DM_SYSTEM.DM_SYSTEM_PROVINCE.province_no
  is '省份编号';
comment on column DM_SYSTEM.DM_SYSTEM_PROVINCE.province_name
  is '省份名称';
comment on column DM_SYSTEM.DM_SYSTEM_PROVINCE.enable
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_SYSTEM_PROVINCE.sort_id
  is '排序编号';
alter table DM_SYSTEM.DM_SYSTEM_PROVINCE
  add constraint PK_SYS_PROVC_ID primary key (PROVINCE_NO)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_TERM_ASSIGN_UP
prompt ================================
prompt
create table DM_SYSTEM.DM_TERM_ASSIGN_UP
(
  record_id      NUMBER not null,
  term_no        VARCHAR2(64) not null,
  term_group_no  VARCHAR2(64),
  up_channel_no  VARCHAR2(64) not null,
  up_group_no    VARCHAR2(64),
  division_mode  NUMBER default 1 not null,
  division_value NUMBER default 0 not null,
  status         NUMBER default 0 not null,
  remark         VARCHAR2(100),
  create_user    VARCHAR2(32) not null,
  create_time    DATE default sysdate not null,
  update_user    VARCHAR2(32),
  update_time    DATE
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_TERM_ASSIGN_UP
  is '终端指定上游';
comment on column DM_SYSTEM.DM_TERM_ASSIGN_UP.record_id
  is '记录编号';
comment on column DM_SYSTEM.DM_TERM_ASSIGN_UP.term_no
  is '终端编号';
comment on column DM_SYSTEM.DM_TERM_ASSIGN_UP.term_group_no
  is '终端分组编号';
comment on column DM_SYSTEM.DM_TERM_ASSIGN_UP.up_channel_no
  is '上游渠道编号';
comment on column DM_SYSTEM.DM_TERM_ASSIGN_UP.up_group_no
  is '上游分组编号';
comment on column DM_SYSTEM.DM_TERM_ASSIGN_UP.division_mode
  is '分流模式: 1-按优先级 2-按分流比';
comment on column DM_SYSTEM.DM_TERM_ASSIGN_UP.division_value
  is '分流值(division_mode=1时值越大优先级越高)';
comment on column DM_SYSTEM.DM_TERM_ASSIGN_UP.status
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_TERM_ASSIGN_UP.remark
  is '备注';
comment on column DM_SYSTEM.DM_TERM_ASSIGN_UP.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_TERM_ASSIGN_UP.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_TERM_ASSIGN_UP.update_user
  is '更新人';
comment on column DM_SYSTEM.DM_TERM_ASSIGN_UP.update_time
  is '更新时间';
create index DM_SYSTEM.IDX_TERM_GROUP_NO on DM_SYSTEM.DM_TERM_ASSIGN_UP (TERM_NO, TERM_GROUP_NO)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_UP_GROUP_NO on DM_SYSTEM.DM_TERM_ASSIGN_UP (UP_CHANNEL_NO, UP_GROUP_NO)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create unique index DM_SYSTEM.UK_TERM_DIVISION_MODE on DM_SYSTEM.DM_TERM_ASSIGN_UP (TERM_NO, TERM_GROUP_NO, UP_CHANNEL_NO, UP_GROUP_NO)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_TERM_ASSIGN_UP
  add constraint PK_TERM_ASSIGN_UP_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_TERM_FUND_CHANGE
prompt ==================================
prompt
create table DM_SYSTEM.DM_TERM_FUND_CHANGE
(
  record_id      NUMBER not null,
  term_no        VARCHAR2(32) not null,
  order_no       VARCHAR2(32) not null,
  change_type    NUMBER(2) not null,
  change_money   NUMBER(15,3) not null,
  before_balance NUMBER(15,3) not null,
  after_balance  NUMBER(15,3) not null,
  change_time    DATE default sysdate,
  operator       VARCHAR2(64) not null,
  remark         VARCHAR2(128)
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_TERM_FUND_CHANGE
  is '终端资金变动';
comment on column DM_SYSTEM.DM_TERM_FUND_CHANGE.record_id
  is '记录编号';
comment on column DM_SYSTEM.DM_TERM_FUND_CHANGE.term_no
  is '终端编号';
comment on column DM_SYSTEM.DM_TERM_FUND_CHANGE.order_no
  is '订单号';
comment on column DM_SYSTEM.DM_TERM_FUND_CHANGE.change_type
  is '变动类型: 1-收款 2-扣款 3-退款';
comment on column DM_SYSTEM.DM_TERM_FUND_CHANGE.change_money
  is '变动金额';
comment on column DM_SYSTEM.DM_TERM_FUND_CHANGE.before_balance
  is '变动前余额';
comment on column DM_SYSTEM.DM_TERM_FUND_CHANGE.after_balance
  is '变动后余额';
comment on column DM_SYSTEM.DM_TERM_FUND_CHANGE.change_time
  is '变动时间';
comment on column DM_SYSTEM.DM_TERM_FUND_CHANGE.operator
  is '操作人';
comment on column DM_SYSTEM.DM_TERM_FUND_CHANGE.remark
  is '备注';
create index DM_SYSTEM.IDX_TERM_FND_CHNG_ORDER_NO on DM_SYSTEM.DM_TERM_FUND_CHANGE (ORDER_NO)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_TERM_FND_CHNG_TYPE on DM_SYSTEM.DM_TERM_FUND_CHANGE (CHANGE_TYPE)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_TERM_FUND_CHANGE
  add constraint PK_TERM_FND_CHNG_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_TERM_INFO
prompt ===========================
prompt
create table DM_SYSTEM.DM_TERM_INFO
(
  term_no     VARCHAR2(32) not null,
  term_name   VARCHAR2(64) not null,
  balance     NUMBER(15,3) default 0 not null,
  status      NUMBER default 0 not null,
  entry_url   VARCHAR2(256) not null,
  can_promote NUMBER default 1,
  remark      VARCHAR2(1024),
  create_time DATE default sysdate not null,
  create_user VARCHAR2(64) not null,
  update_time DATE default sysdate not null,
  update_user VARCHAR2(64),
  image_url   VARCHAR2(128)
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_TERM_INFO
  is '终端信息表';
comment on column DM_SYSTEM.DM_TERM_INFO.term_no
  is '终端编号';
comment on column DM_SYSTEM.DM_TERM_INFO.term_name
  is '终端名称';
comment on column DM_SYSTEM.DM_TERM_INFO.balance
  is '终端余额';
comment on column DM_SYSTEM.DM_TERM_INFO.status
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_TERM_INFO.entry_url
  is '入口地址';
comment on column DM_SYSTEM.DM_TERM_INFO.can_promote
  is '可否推广: 0-是 1-否';
comment on column DM_SYSTEM.DM_TERM_INFO.remark
  is '终端说明';
comment on column DM_SYSTEM.DM_TERM_INFO.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_TERM_INFO.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_TERM_INFO.update_time
  is '更新时间';
comment on column DM_SYSTEM.DM_TERM_INFO.update_user
  is '更新人';
comment on column DM_SYSTEM.DM_TERM_INFO.image_url
  is '推广图片';
alter table DM_SYSTEM.DM_TERM_INFO
  add constraint PK_TERM_INFO_ID primary key (TERM_NO)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_TERM_PAY_ACCOUNT
prompt ==================================
prompt
create table DM_SYSTEM.DM_TERM_PAY_ACCOUNT
(
  map_id     NUMBER not null,
  term_no    VARCHAR2(32) not null,
  account_id NUMBER not null,
  priority   NUMBER default 1 not null,
  status     NUMBER default 0 not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_TERM_PAY_ACCOUNT
  is '终端支付账号关系表';
comment on column DM_SYSTEM.DM_TERM_PAY_ACCOUNT.map_id
  is '关系编号';
comment on column DM_SYSTEM.DM_TERM_PAY_ACCOUNT.term_no
  is '终端编号';
comment on column DM_SYSTEM.DM_TERM_PAY_ACCOUNT.account_id
  is '支付账号编号';
comment on column DM_SYSTEM.DM_TERM_PAY_ACCOUNT.priority
  is '优先级(用于值越大优先级越大)';
comment on column DM_SYSTEM.DM_TERM_PAY_ACCOUNT.status
  is '状态: 0-启用 1-禁用';
alter table DM_SYSTEM.DM_TERM_PAY_ACCOUNT
  add constraint PK_TERM_ACNT_ID primary key (MAP_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_TERM_PRODUCT
prompt ==============================
prompt
create table DM_SYSTEM.DM_TERM_PRODUCT
(
  product_no      VARCHAR2(32) not null,
  term_no         VARCHAR2(32) not null,
  product_name    VARCHAR2(256) not null,
  product_title   VARCHAR2(1024),
  product_summary VARCHAR2(512),
  product_detail  VARCHAR2(1024),
  product_tip     VARCHAR2(256),
  product_type    NUMBER default 1 not null,
  business_type   NUMBER(20) not null,
  carrier_no      VARCHAR2(32) not null,
  province_no     VARCHAR2(32) default 'QG' not null,
  city_no         VARCHAR2(32) default '*' not null,
  face_fee        NUMBER not null,
  normal_price    NUMBER(20,5) not null,
  pay_price       NUMBER(20,5) not null,
  cost_price      NUMBER(15,3) not null,
  deduct_mode     NUMBER default 0,
  need_vcode      NUMBER not null,
  need_pay        NUMBER not null,
  need_card_uid   NUMBER default 1,
  need_card_pic   NUMBER default 1,
  group_no        VARCHAR2(64),
  priority        NUMBER default 0 not null,
  sort_num        NUMBER default 0,
  status          NUMBER(20) default 0 not null,
  remark          VARCHAR2(128),
  create_user     VARCHAR2(64) not null,
  create_time     DATE default sysdate not null,
  update_user     VARCHAR2(64),
  update_time     DATE default sysdate not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_TERM_PRODUCT
  is '终端产品表';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.product_no
  is '终端产品编码';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.term_no
  is '终端编号';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.product_name
  is '产品名称(运营使用)';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.product_title
  is '产品标题(可HTML)';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.product_summary
  is '产品简要说明(可HTML)';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.product_detail
  is '产品详细说明(可HTML)';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.product_tip
  is '产品提示(温馨提示)';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.product_type
  is '业务分类: 1-话费 2-流量(前端显示用,区分Tab)';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.business_type
  is '业务类型';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.carrier_no
  is '运营商';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.province_no
  is '省份: QG-全国';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.city_no
  is '城市: *-全省';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.face_fee
  is '面值';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.normal_price
  is '标准价格';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.pay_price
  is '支付价格';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.cost_price
  is '成本价格';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.deduct_mode
  is '扣费模式: 0-不扣费 1-先扣费 2-后扣费';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.need_vcode
  is '发送验证码: 1-不需要 2-平台发送 3-上游发送';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.need_pay
  is '需要支付: 0-需要 1-不需要';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.need_card_uid
  is '需要身份证号: 0-需要 1-不需要';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.need_card_pic
  is '需要身份证照: 0-需要 1-不需要';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.group_no
  is '分组编号';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.priority
  is '权重: 0-不显示(前端显示用, 值越大,优先级越高,显示越靠前)';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.sort_num
  is '排序编号';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.status
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.remark
  is '备注';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.update_user
  is '更新人';
comment on column DM_SYSTEM.DM_TERM_PRODUCT.update_time
  is '更新时间';
create index DM_SYSTEM.IDX_TERM_PRD_STATUS on DM_SYSTEM.DM_TERM_PRODUCT (STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_TERM_PRD_TERM_ID on DM_SYSTEM.DM_TERM_PRODUCT (TERM_NO)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_TERM_PRODUCT
  add constraint PK_TERM_PRODUCT_NO primary key (PRODUCT_NO)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_TERM_PRODUCT_RULE
prompt ===================================
prompt
create table DM_SYSTEM.DM_TERM_PRODUCT_RULE
(
  record_id      NUMBER not null,
  term_no        VARCHAR2(32) not null,
  product_no     VARCHAR2(32) not null,
  rule_type      NUMBER not null,
  rule_condition NUMBER not null,
  rule_value_a   VARCHAR2(128) not null,
  rule_value_b   VARCHAR2(128),
  priority       NUMBER default 1 not null,
  status         NUMBER default 0 not null,
  create_user    VARCHAR2(64) not null,
  create_time    DATE default sysdate not null,
  update_user    VARCHAR2(64),
  update_time    DATE default sysdate not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_TERM_PRODUCT_RULE
  is '终端产品规则表';
comment on column DM_SYSTEM.DM_TERM_PRODUCT_RULE.record_id
  is '记录编号';
comment on column DM_SYSTEM.DM_TERM_PRODUCT_RULE.term_no
  is '终端编号';
comment on column DM_SYSTEM.DM_TERM_PRODUCT_RULE.product_no
  is '产品编号';
comment on column DM_SYSTEM.DM_TERM_PRODUCT_RULE.rule_type
  is '规则类型: 1-IP 2-手机号 3-年龄 4-身份证 5-地址';
comment on column DM_SYSTEM.DM_TERM_PRODUCT_RULE.rule_condition
  is '规则条件: 1-范围 2-等于 3-不等于 4-包含 5-不包含 6-不超过(时间段内)';
comment on column DM_SYSTEM.DM_TERM_PRODUCT_RULE.rule_value_a
  is '规则取值A';
comment on column DM_SYSTEM.DM_TERM_PRODUCT_RULE.rule_value_b
  is '规则取值B';
comment on column DM_SYSTEM.DM_TERM_PRODUCT_RULE.priority
  is '优先级';
comment on column DM_SYSTEM.DM_TERM_PRODUCT_RULE.status
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_TERM_PRODUCT_RULE.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_TERM_PRODUCT_RULE.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_TERM_PRODUCT_RULE.update_user
  is '更新人';
comment on column DM_SYSTEM.DM_TERM_PRODUCT_RULE.update_time
  is '更新时间';
create index DM_SYSTEM.UK_TERM_PRODCT_RULE_STATUS on DM_SYSTEM.DM_TERM_PRODUCT_RULE (STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_TERM_PRODUCT_RULE
  add constraint PK_TERM_PRODUCT_RULE_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_TERM_PROMOTE
prompt ==============================
prompt
create table DM_SYSTEM.DM_TERM_PROMOTE
(
  promote_id   NUMBER not null,
  term_no      VARCHAR2(32) not null,
  promoter_id  VARCHAR2(64) not null,
  label_id     NUMBER not null,
  promote_guid VARCHAR2(64) not null,
  promote_url  VARCHAR2(256) not null,
  status       NUMBER default 0 not null,
  remark       VARCHAR2(128),
  create_user  VARCHAR2(64) not null,
  create_time  DATE default sysdate not null,
  update_user  VARCHAR2(64),
  update_time  DATE,
  need_notify  NUMBER default 1 not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_TERM_PROMOTE
  is '终端推广表';
comment on column DM_SYSTEM.DM_TERM_PROMOTE.promote_id
  is '推广编号';
comment on column DM_SYSTEM.DM_TERM_PROMOTE.term_no
  is '终端编号';
comment on column DM_SYSTEM.DM_TERM_PROMOTE.promoter_id
  is '推广人编号';
comment on column DM_SYSTEM.DM_TERM_PROMOTE.label_id
  is '推广人标签编号';
comment on column DM_SYSTEM.DM_TERM_PROMOTE.promote_guid
  is '推广编码';
comment on column DM_SYSTEM.DM_TERM_PROMOTE.promote_url
  is '推广地址';
comment on column DM_SYSTEM.DM_TERM_PROMOTE.status
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_TERM_PROMOTE.remark
  is '备注';
comment on column DM_SYSTEM.DM_TERM_PROMOTE.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_TERM_PROMOTE.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_TERM_PROMOTE.update_user
  is '更新人';
comment on column DM_SYSTEM.DM_TERM_PROMOTE.update_time
  is '更新时间';
comment on column DM_SYSTEM.DM_TERM_PROMOTE.need_notify
  is '需要通知: 0-需要 1-不需要';
create unique index DM_SYSTEM.UK_TERM_PROMOTE_LABEL on DM_SYSTEM.DM_TERM_PROMOTE (TERM_NO, PROMOTER_ID, LABEL_ID)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_TERM_PROMOTE
  add constraint PK_TERM_PROMOTE_ID primary key (PROMOTE_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_TERM_SCRIPT
prompt =============================
prompt
create table DM_SYSTEM.DM_TERM_SCRIPT
(
  record_id        NUMBER not null,
  term_no          VARCHAR2(32) not null,
  promoter_id      NUMBER not null,
  promote_id       NUMBER not null,
  business_type    NUMBER not null,
  notify_type      NUMBER not null,
  notify_url       VARCHAR2(256) not null,
  notify_max_times NUMBER default 5 not null,
  script_path      VARCHAR2(128) not null,
  service_code     VARCHAR2(128) not null,
  status           NUMBER default 0 not null,
  create_user      VARCHAR2(64) not null,
  create_time      DATE default sysdate not null,
  update_user      VARCHAR2(64),
  update_time      DATE default sysdate not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_TERM_SCRIPT
  is '终端脚本(通知)';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.record_id
  is '记录编号';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.term_no
  is '终端编号';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.promoter_id
  is '推广人编号';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.promote_id
  is '推广编号';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.business_type
  is '业务类型: 0-所有';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.notify_type
  is '通知类型: 1-订单状态';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.notify_url
  is '通知地址';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.notify_max_times
  is '通知最大次数';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.script_path
  is '脚本路径';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.service_code
  is '服务编码';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.status
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.update_user
  is '更新人';
comment on column DM_SYSTEM.DM_TERM_SCRIPT.update_time
  is '更新时间';
create index DM_SYSTEM.UK_TEM_SCRIPT on DM_SYSTEM.DM_TERM_SCRIPT (PROMOTE_ID, BUSINESS_TYPE, NOTIFY_TYPE)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_TERM_SCRIPT
  add constraint PK_TERM_SCRIPT_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_TERM_WHITE_LIST
prompt =================================
prompt
create table DM_SYSTEM.DM_TERM_WHITE_LIST
(
  record_id   NUMBER not null,
  tem_no      VARCHAR2(32) not null,
  white_type  NUMBER default 1 not null,
  white_value VARCHAR2(32) not null,
  status      NUMBER default 0 not null,
  create_time DATE default sysdate not null,
  create_user VARCHAR2(64) not null,
  update_time DATE default sysdate not null,
  update_user VARCHAR2(64)
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255;
comment on table DM_SYSTEM.DM_TERM_WHITE_LIST
  is '终端IP白名单';
comment on column DM_SYSTEM.DM_TERM_WHITE_LIST.record_id
  is '记录编号';
comment on column DM_SYSTEM.DM_TERM_WHITE_LIST.tem_no
  is '终端编号';
comment on column DM_SYSTEM.DM_TERM_WHITE_LIST.white_type
  is '白名单类型: 1-IP白名单 2-号码白名单';
comment on column DM_SYSTEM.DM_TERM_WHITE_LIST.white_value
  is '白名单值';
comment on column DM_SYSTEM.DM_TERM_WHITE_LIST.status
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_TERM_WHITE_LIST.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_TERM_WHITE_LIST.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_TERM_WHITE_LIST.update_time
  is '更新时间';
comment on column DM_SYSTEM.DM_TERM_WHITE_LIST.update_user
  is '更新人';
create unique index DM_SYSTEM.UK_TERM_NO_IP_WHITE_LIST on DM_SYSTEM.DM_TERM_WHITE_LIST (TEM_NO, WHITE_VALUE)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255;
alter table DM_SYSTEM.DM_TERM_WHITE_LIST
  add constraint PK_TERM_IP_WHITE_LIST_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255;

prompt
prompt Creating table DM_UP_CHANNEL
prompt ============================
prompt
create table DM_SYSTEM.DM_UP_CHANNEL
(
  channel_no      VARCHAR2(32) not null,
  channel_name    VARCHAR2(64) not null,
  api_id          VARCHAR2(128),
  api_key         VARCHAR2(128),
  notify_url      VARCHAR2(256),
  login_id        VARCHAR2(64),
  login_pwd       VARCHAR2(128),
  balance         NUMBER(15,3) default 0 not null,
  support_query   NUMBER(1) default 1 not null,
  query_delay     NUMBER(20) default 120 not null,
  query_interval  NUMBER(20) default 60 not null,
  sync_status     NUMBER default 1 not null,
  principal       VARCHAR2(128),
  status          NUMBER default 0 not null,
  remark          VARCHAR2(1024),
  create_user     VARCHAR2(64) not null,
  create_time     DATE default sysdate not null,
  update_user     VARCHAR2(64),
  update_time     DATE default sysdate not null,
  query_max_times NUMBER
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_UP_CHANNEL
  is '上游渠道表';
comment on column DM_SYSTEM.DM_UP_CHANNEL.channel_no
  is '渠道编号';
comment on column DM_SYSTEM.DM_UP_CHANNEL.channel_name
  is '渠道名称';
comment on column DM_SYSTEM.DM_UP_CHANNEL.api_id
  is '接口ID';
comment on column DM_SYSTEM.DM_UP_CHANNEL.api_key
  is '接口key';
comment on column DM_SYSTEM.DM_UP_CHANNEL.notify_url
  is '回调地址';
comment on column DM_SYSTEM.DM_UP_CHANNEL.login_id
  is '登录id';
comment on column DM_SYSTEM.DM_UP_CHANNEL.login_pwd
  is '登录密码';
comment on column DM_SYSTEM.DM_UP_CHANNEL.balance
  is '余额';
comment on column DM_SYSTEM.DM_UP_CHANNEL.support_query
  is '是否支持查询';
comment on column DM_SYSTEM.DM_UP_CHANNEL.query_delay
  is '首次查询延迟(秒)';
comment on column DM_SYSTEM.DM_UP_CHANNEL.query_interval
  is '查询时间间隔(秒)';
comment on column DM_SYSTEM.DM_UP_CHANNEL.sync_status
  is '同步记账状态';
comment on column DM_SYSTEM.DM_UP_CHANNEL.principal
  is '负责人';
comment on column DM_SYSTEM.DM_UP_CHANNEL.status
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_UP_CHANNEL.remark
  is '渠道备注';
comment on column DM_SYSTEM.DM_UP_CHANNEL.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_UP_CHANNEL.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_UP_CHANNEL.update_user
  is '更新人';
comment on column DM_SYSTEM.DM_UP_CHANNEL.update_time
  is '更新时间';
comment on column DM_SYSTEM.DM_UP_CHANNEL.query_max_times
  is '查询最大次数: 0-不限次数';
create index DM_SYSTEM.IDX_UP_CHNNL_SYNC_STATUS on DM_SYSTEM.DM_UP_CHANNEL (SYNC_STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_UP_CHANNEL
  add constraint PK_UP_CHANNEL_NO primary key (CHANNEL_NO)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_UP_ERROR_MAP
prompt ==============================
prompt
create table DM_SYSTEM.DM_UP_ERROR_MAP
(
  record_id   NUMBER not null,
  channel_no  VARCHAR2(32) not null,
  msg_type    NUMBER(2) not null,
  condition_1 VARCHAR2(128) not null,
  condition_2 VARCHAR2(128),
  condition_3 VARCHAR2(128),
  condition_4 VARCHAR2(128),
  condition_5 VARCHAR2(128),
  error_code  NUMBER(4) not null,
  status      NUMBER(1) default 0 not null,
  create_user VARCHAR2(32) not null,
  create_time DATE default sysdate not null,
  update_user VARCHAR2(32),
  update_time DATE default sysdate not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_UP_ERROR_MAP
  is '上游错误码映射表';
comment on column DM_SYSTEM.DM_UP_ERROR_MAP.record_id
  is '记录编号';
comment on column DM_SYSTEM.DM_UP_ERROR_MAP.channel_no
  is '渠道编号';
comment on column DM_SYSTEM.DM_UP_ERROR_MAP.msg_type
  is '消息类型: 1-发货 2-查询 3-回调';
comment on column DM_SYSTEM.DM_UP_ERROR_MAP.condition_1
  is '条件1';
comment on column DM_SYSTEM.DM_UP_ERROR_MAP.condition_2
  is '条件2';
comment on column DM_SYSTEM.DM_UP_ERROR_MAP.condition_3
  is '条件3';
comment on column DM_SYSTEM.DM_UP_ERROR_MAP.condition_4
  is '条件4';
comment on column DM_SYSTEM.DM_UP_ERROR_MAP.condition_5
  is '条件5';
comment on column DM_SYSTEM.DM_UP_ERROR_MAP.error_code
  is '错误处理码';
comment on column DM_SYSTEM.DM_UP_ERROR_MAP.status
  is '状态: 0-启用 1-禁用 2-人工暂停 3-系统暂停';
comment on column DM_SYSTEM.DM_UP_ERROR_MAP.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_UP_ERROR_MAP.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_UP_ERROR_MAP.update_user
  is '更新人';
comment on column DM_SYSTEM.DM_UP_ERROR_MAP.update_time
  is '更新时间';
create index DM_SYSTEM.IDX_CHANNEL_TYPE_STATUS on DM_SYSTEM.DM_UP_ERROR_MAP (CHANNEL_NO, MSG_TYPE, STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_UP_ERROR_MAP
  add constraint PK_UP_ERR_MAP_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_UP_FUND_CHANGE
prompt ================================
prompt
create table DM_SYSTEM.DM_UP_FUND_CHANGE
(
  record_id      NUMBER not null,
  bind_id        VARCHAR2(32) not null,
  order_no       VARCHAR2(32) not null,
  channel_no     VARCHAR2(32) not null,
  change_type    NUMBER(2) not null,
  change_money   NUMBER(15,3) not null,
  before_balance NUMBER(15,3) not null,
  after_balance  NUMBER(15,3) not null,
  change_time    DATE default sysdate,
  operator       VARCHAR2(64) not null,
  remark         VARCHAR2(128)
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_UP_FUND_CHANGE
  is '上游资金变动';
comment on column DM_SYSTEM.DM_UP_FUND_CHANGE.record_id
  is '记录编号';
comment on column DM_SYSTEM.DM_UP_FUND_CHANGE.bind_id
  is '绑定编号';
comment on column DM_SYSTEM.DM_UP_FUND_CHANGE.order_no
  is '订单号';
comment on column DM_SYSTEM.DM_UP_FUND_CHANGE.channel_no
  is '渠道编号';
comment on column DM_SYSTEM.DM_UP_FUND_CHANGE.change_type
  is '变动类型: 1-收款 2-扣款 3-退款';
comment on column DM_SYSTEM.DM_UP_FUND_CHANGE.change_money
  is '变动金额';
comment on column DM_SYSTEM.DM_UP_FUND_CHANGE.before_balance
  is '变动前余额';
comment on column DM_SYSTEM.DM_UP_FUND_CHANGE.after_balance
  is '变动后余额';
comment on column DM_SYSTEM.DM_UP_FUND_CHANGE.change_time
  is '变动时间';
comment on column DM_SYSTEM.DM_UP_FUND_CHANGE.operator
  is '操作人';
comment on column DM_SYSTEM.DM_UP_FUND_CHANGE.remark
  is '备注';
create index DM_SYSTEM.IDX_UP_FUND_CHNG_CHNG_TYPE on DM_SYSTEM.DM_UP_FUND_CHANGE (CHANGE_TYPE)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.IDX_UP_FUND_CHNG_CHNNL_NO on DM_SYSTEM.DM_UP_FUND_CHANGE (CHANNEL_NO)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.DM_UP_FUND_CHANGE
  add constraint PK_UP_FUND_CHNG_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_UP_PRODUCT
prompt ============================
prompt
create table DM_SYSTEM.DM_UP_PRODUCT
(
  product_no    VARCHAR2(32) not null,
  product_name  VARCHAR2(128) not null,
  channel_no    VARCHAR2(64) not null,
  up_product_no VARCHAR2(64),
  business_type NUMBER not null,
  carrier_no    VARCHAR2(32) not null,
  province_no   VARCHAR2(32) default 'QG' not null,
  city_no       VARCHAR2(32) default '*' not null,
  face_fee      NUMBER not null,
  normal_price  NUMBER(20,3) not null,
  deduct_price  NUMBER(20,3) not null,
  real_price    NUMBER(20,3) not null,
  need_vcode    NUMBER default 1 not null,
  need_delivery NUMBER default 0 not null,
  need_card_uid NUMBER default 1,
  picture_mode  NUMBER default 0,
  group_no      VARCHAR2(64),
  status        NUMBER default 0 not null,
  remark        VARCHAR2(128),
  create_user   VARCHAR2(64) not null,
  create_time   DATE default sysdate not null,
  update_user   VARCHAR2(64),
  update_time   DATE default sysdate not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_UP_PRODUCT
  is '上游产品表';
comment on column DM_SYSTEM.DM_UP_PRODUCT.product_no
  is '产品编号';
comment on column DM_SYSTEM.DM_UP_PRODUCT.product_name
  is '产品名称';
comment on column DM_SYSTEM.DM_UP_PRODUCT.channel_no
  is '渠道编号';
comment on column DM_SYSTEM.DM_UP_PRODUCT.up_product_no
  is '上游产品编码';
comment on column DM_SYSTEM.DM_UP_PRODUCT.business_type
  is '业务类型 ';
comment on column DM_SYSTEM.DM_UP_PRODUCT.carrier_no
  is '运营商';
comment on column DM_SYSTEM.DM_UP_PRODUCT.province_no
  is '省份: QG-全国';
comment on column DM_SYSTEM.DM_UP_PRODUCT.city_no
  is '城市: *-全省';
comment on column DM_SYSTEM.DM_UP_PRODUCT.face_fee
  is '面值';
comment on column DM_SYSTEM.DM_UP_PRODUCT.normal_price
  is '标准价格';
comment on column DM_SYSTEM.DM_UP_PRODUCT.deduct_price
  is '扣款价格';
comment on column DM_SYSTEM.DM_UP_PRODUCT.real_price
  is '实际价格';
comment on column DM_SYSTEM.DM_UP_PRODUCT.need_vcode
  is '需要验证码: 0-需要 1-不需要';
comment on column DM_SYSTEM.DM_UP_PRODUCT.need_delivery
  is '需要发货: 0-需要 1-不需要';
comment on column DM_SYSTEM.DM_UP_PRODUCT.need_card_uid
  is '需要身份证号: 0-需要 1-不需要';
comment on column DM_SYSTEM.DM_UP_PRODUCT.picture_mode
  is '身份证照模式: 0-无需照片 1-重提照片 2-重提订单 ';
comment on column DM_SYSTEM.DM_UP_PRODUCT.group_no
  is '分组编号';
comment on column DM_SYSTEM.DM_UP_PRODUCT.status
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_UP_PRODUCT.remark
  is '备注';
comment on column DM_SYSTEM.DM_UP_PRODUCT.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_UP_PRODUCT.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_UP_PRODUCT.update_user
  is '更新人';
comment on column DM_SYSTEM.DM_UP_PRODUCT.update_time
  is '更新时间';
alter table DM_SYSTEM.DM_UP_PRODUCT
  add constraint PK_UP_PRODUCT_ID primary key (PRODUCT_NO)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table DM_UP_SCRIPT
prompt ===========================
prompt
create table DM_SYSTEM.DM_UP_SCRIPT
(
  script_id     NUMBER not null,
  channel_no    VARCHAR2(64) not null,
  business_type NUMBER default 0 not null,
  carrier_no    VARCHAR2(20) not null,
  script_type   NUMBER not null,
  script_path   VARCHAR2(256) not null,
  service_code  VARCHAR2(128) not null,
  api_url       VARCHAR2(256) not null,
  status        NUMBER default 0 not null,
  create_user   VARCHAR2(32) not null,
  create_time   DATE default sysdate not null,
  update_user   VARCHAR2(32),
  update_time   DATE default sysdate not null
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.DM_UP_SCRIPT
  is '上游脚本配置表';
comment on column DM_SYSTEM.DM_UP_SCRIPT.script_id
  is '脚本编号';
comment on column DM_SYSTEM.DM_UP_SCRIPT.channel_no
  is '渠道编号';
comment on column DM_SYSTEM.DM_UP_SCRIPT.business_type
  is '业务类型:  0-所有';
comment on column DM_SYSTEM.DM_UP_SCRIPT.carrier_no
  is '运营商: *-所有';
comment on column DM_SYSTEM.DM_UP_SCRIPT.script_type
  is '脚本类型: 1-订单提交 2-订单查询 3-余额查询 4-退款申请 5-验证码发送 6-验证码提交';
comment on column DM_SYSTEM.DM_UP_SCRIPT.script_path
  is '脚本路径';
comment on column DM_SYSTEM.DM_UP_SCRIPT.service_code
  is '服务编码(队列名/机器人CODE)';
comment on column DM_SYSTEM.DM_UP_SCRIPT.api_url
  is '接口地址';
comment on column DM_SYSTEM.DM_UP_SCRIPT.status
  is '状态: 0-启用 1-禁用';
comment on column DM_SYSTEM.DM_UP_SCRIPT.create_user
  is '创建人';
comment on column DM_SYSTEM.DM_UP_SCRIPT.create_time
  is '创建时间';
comment on column DM_SYSTEM.DM_UP_SCRIPT.update_user
  is '更新人';
comment on column DM_SYSTEM.DM_UP_SCRIPT.update_time
  is '更新时间';
alter table DM_SYSTEM.DM_UP_SCRIPT
  add constraint PK_UP_SCRIPT_ID primary key (SCRIPT_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table TMP_TERM_CARD_DETAIL
prompt ===================================
prompt
create table DM_SYSTEM.TMP_TERM_CARD_DETAIL
(
  record_id      NUMBER not null,
  task_id        NUMBER not null,
  contact_phone  VARCHAR2(16) not null,
  contact_name   VARCHAR2(64) not null,
  contact_addr   VARCHAR2(256) not null,
  card_user_id   VARCHAR2(64) not null,
  card_user_name VARCHAR2(32) not null,
  card_pic_front VARCHAR2(256),
  card_pic_back  VARCHAR2(256),
  card_pic_hand  VARCHAR2(256),
  deal_status    NUMBER default 20 not null,
  deal_msg       VARCHAR2(128),
  create_time    DATE default sysdate not null,
  start_time     DATE,
  finish_time    DATE
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.TMP_TERM_CARD_DETAIL
  is '终端号卡明细表(商户导入)';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.record_id
  is '编号';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.task_id
  is '任务编号';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.contact_phone
  is '联系电话';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.contact_name
  is '联系人';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.contact_addr
  is '联系地址';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.card_user_id
  is '办理人身份证号';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.card_user_name
  is '办理人姓名';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.card_pic_front
  is '办理人身份证照(正面)';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.card_pic_back
  is '办理人身份证照(反面)';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.card_pic_hand
  is '办理人身份证照(手持)';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.deal_status
  is '处理状态: 0-成功 20-等待处理 30-处理中 90-处理失败';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.deal_msg
  is '处理结果消息';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.create_time
  is '创建时间';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.start_time
  is '开始时间';
comment on column DM_SYSTEM.TMP_TERM_CARD_DETAIL.finish_time
  is '结束时间';
create index DM_SYSTEM.UK_TERM_CARD_DEAL_STATUS on DM_SYSTEM.TMP_TERM_CARD_DETAIL (DEAL_STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
create index DM_SYSTEM.UK_TERM_CARD_TASK_ID on DM_SYSTEM.TMP_TERM_CARD_DETAIL (TASK_ID)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.TMP_TERM_CARD_DETAIL
  add constraint PK_TERM_CARD_DETAIL_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table TMP_TERM_CARD_TASK
prompt =================================
prompt
create table DM_SYSTEM.TMP_TERM_CARD_TASK
(
  task_id      NUMBER not null,
  term_no      VARCHAR2(32) not null,
  product_no   VARCHAR2(32) not null,
  promoter_id  NUMBER not null,
  promote_id   NUMBER not null,
  card_pic_zip VARCHAR2(256),
  status       NUMBER default 20 not null,
  total_rows   NUMBER default 0 not null,
  succ_rows    NUMBER default 0 not null,
  fail_rows    NUMBER default 0 not null,
  create_user  VARCHAR2(64),
  create_time  DATE default sysdate not null,
  start_time   DATE,
  finish_time  DATE
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.TMP_TERM_CARD_TASK
  is '终端号卡任务表(商户导入)';
comment on column DM_SYSTEM.TMP_TERM_CARD_TASK.task_id
  is '任务编号';
comment on column DM_SYSTEM.TMP_TERM_CARD_TASK.term_no
  is '终端编号';
comment on column DM_SYSTEM.TMP_TERM_CARD_TASK.product_no
  is '终端产品编号';
comment on column DM_SYSTEM.TMP_TERM_CARD_TASK.promoter_id
  is '推广人编号';
comment on column DM_SYSTEM.TMP_TERM_CARD_TASK.promote_id
  is '推广编号';
comment on column DM_SYSTEM.TMP_TERM_CARD_TASK.card_pic_zip
  is '身份证照片压缩包';
comment on column DM_SYSTEM.TMP_TERM_CARD_TASK.status
  is '处理状态: 0-成功 20-等待处理 30-处理中 90-处理失败';
comment on column DM_SYSTEM.TMP_TERM_CARD_TASK.total_rows
  is '总条数';
comment on column DM_SYSTEM.TMP_TERM_CARD_TASK.succ_rows
  is '成功条数';
comment on column DM_SYSTEM.TMP_TERM_CARD_TASK.fail_rows
  is '失败条数';
comment on column DM_SYSTEM.TMP_TERM_CARD_TASK.create_user
  is '创建人';
comment on column DM_SYSTEM.TMP_TERM_CARD_TASK.create_time
  is '创建时间';
comment on column DM_SYSTEM.TMP_TERM_CARD_TASK.start_time
  is '任务开始时间';
comment on column DM_SYSTEM.TMP_TERM_CARD_TASK.finish_time
  is '任务结束时间';
create index DM_SYSTEM.UK_TERM_CARD_TASK_STATUS on DM_SYSTEM.TMP_TERM_CARD_TASK (STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.TMP_TERM_CARD_TASK
  add constraint PK_TERM_CARD_TASK_ID primary key (TASK_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating table TMP_UP_CARD_DETAIL
prompt =================================
prompt
create table DM_SYSTEM.TMP_UP_CARD_DETAIL
(
  record_id       NUMBER not null,
  up_product_no   VARCHAR2(64),
  bind_id         VARCHAR2(64),
  phone_no        VARCHAR2(20),
  card_no         VARCHAR2(32),
  user_name       VARCHAR2(100),
  new_phone_no    VARCHAR2(32),
  order_status    NUMBER,
  order_msg       VARCHAR2(256),
  activate_status NUMBER,
  activate_time   VARCHAR2(32),
  recharge_status NUMBER,
  recharge_time   VARCHAR2(32),
  express_name    VARCHAR2(128),
  express_no      VARCHAR2(64),
  deal_status     NUMBER default 20 not null,
  deal_msg        VARCHAR2(256),
  batch_no        NUMBER not null,
  create_user     VARCHAR2(64) not null,
  create_time     DATE default sysdate not null,
  finish_time     DATE,
  recharge_face   NUMBER
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
comment on table DM_SYSTEM.TMP_UP_CARD_DETAIL
  is '上游号卡明细表(后台人工审核导入[原TMP_ORDER_IMPORT表])';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.record_id
  is '记录编号';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.up_product_no
  is '上游产品编号';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.bind_id
  is '绑定编号';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.phone_no
  is '联系方式';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.card_no
  is '身份证号';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.user_name
  is '办理人';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.new_phone_no
  is '新手机号';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.order_status
  is '订单状态: 0-成功 90-失败';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.order_msg
  is '订单消息';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.activate_status
  is '激活状态: 0-已激活 1-待激活';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.activate_time
  is '激活时间(格式: yyyy-mm-dd hh24:mi:ss)';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.recharge_status
  is '首充状态: 0-已首充 1-未首充';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.recharge_time
  is '首充时间(格式: yyyy-mm-dd hh24:mi:ss)';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.express_name
  is '快递名称';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.express_no
  is '快递单号';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.deal_status
  is '处理状态: 0-处理成功 20-等待处理 90-处理失败';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.deal_msg
  is '处理结果';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.batch_no
  is '操作批次';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.create_user
  is '创建人';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.create_time
  is '创建时间';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.finish_time
  is '完成时间';
comment on column DM_SYSTEM.TMP_UP_CARD_DETAIL.recharge_face
  is '首充面值';
create index DM_SYSTEM.IDX_ORDER_IMPORT_STATUS on DM_SYSTEM.TMP_UP_CARD_DETAIL (DEAL_STATUS)
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
alter table DM_SYSTEM.TMP_UP_CARD_DETAIL
  add constraint PK_ORDER_IMPORT_ID primary key (RECORD_ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );

prompt
prompt Creating sequence SEQ_BACKUP_BATCH_NO
prompt =====================================
prompt
create sequence DM_SYSTEM.SEQ_BACKUP_BATCH_NO
minvalue 1
maxvalue 999999999999999999
start with 317
increment by 1
nocache;

prompt
prompt Creating sequence SEQ_IMPORT_BATCH_NO
prompt =====================================
prompt
create sequence DM_SYSTEM.SEQ_IMPORT_BATCH_NO
minvalue 1
maxvalue 999999999999999
start with 161
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_OPERATE_BATCH_NO
prompt ======================================
prompt
create sequence DM_SYSTEM.SEQ_OPERATE_BATCH_NO
minvalue 1
maxvalue 999999999999999999
start with 1320
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_OPERATE_DETAIL_ID
prompt =======================================
prompt
create sequence DM_SYSTEM.SEQ_OPERATE_DETAIL_ID
minvalue 1
maxvalue 999999999999999999
start with 1340
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_OPERATE_LOG_ID
prompt ====================================
prompt
create sequence DM_SYSTEM.SEQ_OPERATE_LOG_ID
minvalue 1
maxvalue 999999999999999999
start with 1840
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_ORDER_BIND_EXT_ID
prompt =======================================
prompt
create sequence DM_SYSTEM.SEQ_ORDER_BIND_EXT_ID
minvalue 1
maxvalue 999999999999999999
start with 160
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_ORDER_BIND_ID
prompt ===================================
prompt
create sequence DM_SYSTEM.SEQ_ORDER_BIND_ID
minvalue 1
maxvalue 9999
start with 1764
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_ORDER_MAIN_ID
prompt ===================================
prompt
create sequence DM_SYSTEM.SEQ_ORDER_MAIN_ID
minvalue 1
maxvalue 999999999999999999
start with 2340
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_ORDER_NOTIFY_ID
prompt =====================================
prompt
create sequence DM_SYSTEM.SEQ_ORDER_NOTIFY_ID
minvalue 1
maxvalue 9999999999999
start with 1001
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_ORDER_QUERY_ID
prompt ====================================
prompt
create sequence DM_SYSTEM.SEQ_ORDER_QUERY_ID
minvalue 1
maxvalue 999999999999999999
start with 1000
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_ORDER_REFUND_ID
prompt =====================================
prompt
create sequence DM_SYSTEM.SEQ_ORDER_REFUND_ID
minvalue 1
maxvalue 999999999999999999
start with 1060
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_PAY_ACCOUNT_ID
prompt ====================================
prompt
create sequence DM_SYSTEM.SEQ_PAY_ACCOUNT_ID
minvalue 1
maxvalue 999999999999999999
start with 1120
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_PAY_FUND_CHANGE_ID
prompt ========================================
prompt
create sequence DM_SYSTEM.SEQ_PAY_FUND_CHANGE_ID
minvalue 1
maxvalue 999999999999999999
start with 1120
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_PAY_SCRIPT_ID
prompt ===================================
prompt
create sequence DM_SYSTEM.SEQ_PAY_SCRIPT_ID
minvalue 1
maxvalue 999999999999999999
start with 1120
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_PRODUCT_GROUP_ID
prompt ======================================
prompt
create sequence DM_SYSTEM.SEQ_PRODUCT_GROUP_ID
minvalue 1
maxvalue 999999999999999999
start with 1101
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_PROMOTER_INFO_ID
prompt ======================================
prompt
create sequence DM_SYSTEM.SEQ_PROMOTER_INFO_ID
minvalue 1
maxvalue 999999999999999999
start with 1220
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_PROMOTER_LABEL_ID
prompt =======================================
prompt
create sequence DM_SYSTEM.SEQ_PROMOTER_LABEL_ID
minvalue 1
maxvalue 999999999999999999
start with 121
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_SYSTEM_DICTIONARY_ID
prompt ==========================================
prompt
create sequence DM_SYSTEM.SEQ_SYSTEM_DICTIONARY_ID
minvalue 1
maxvalue 999999999999999
start with 461
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TERM_ACCOUNT_ID
prompt =====================================
prompt
create sequence DM_SYSTEM.SEQ_TERM_ACCOUNT_ID
minvalue 1
maxvalue 999999999999999999
start with 1080
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TERM_ASSIGN_UP_ID
prompt =======================================
prompt
create sequence DM_SYSTEM.SEQ_TERM_ASSIGN_UP_ID
minvalue 1
maxvalue 999999999999999999
start with 1120
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TERM_FUND_CHANGE_ID
prompt =========================================
prompt
create sequence DM_SYSTEM.SEQ_TERM_FUND_CHANGE_ID
minvalue 1
maxvalue 999999999999999999
start with 1240
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TERM_INFO_ID
prompt ==================================
prompt
create sequence DM_SYSTEM.SEQ_TERM_INFO_ID
minvalue 1
maxvalue 999999999999999999
start with 10008
increment by 1
nocache;

prompt
prompt Creating sequence SEQ_TERM_PAY_ACCOUNT_ID
prompt =========================================
prompt
create sequence DM_SYSTEM.SEQ_TERM_PAY_ACCOUNT_ID
minvalue 100
maxvalue 9999999999999999999
start with 140
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TERM_PRODUCT_NO
prompt =====================================
prompt
create sequence DM_SYSTEM.SEQ_TERM_PRODUCT_NO
minvalue 1
maxvalue 999999999999999999
start with 10140
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TERM_PRODUCT_RULE_ID
prompt ==========================================
prompt
create sequence DM_SYSTEM.SEQ_TERM_PRODUCT_RULE_ID
minvalue 1
maxvalue 999999999999999999
start with 1021
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TERM_PROMOTE_ID
prompt =====================================
prompt
create sequence DM_SYSTEM.SEQ_TERM_PROMOTE_ID
minvalue 1
maxvalue 999999999999999999
start with 1340
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TERM_SCRIPT_ID
prompt ====================================
prompt
create sequence DM_SYSTEM.SEQ_TERM_SCRIPT_ID
minvalue 1
maxvalue 9999999999999
start with 1041
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TERM_WHITE_LIST_ID
prompt ========================================
prompt
create sequence DM_SYSTEM.SEQ_TERM_WHITE_LIST_ID
minvalue 1
maxvalue 999999999999999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TMP_ORDER_IMPORT_ID
prompt =========================================
prompt
create sequence DM_SYSTEM.SEQ_TMP_ORDER_IMPORT_ID
minvalue 1
maxvalue 999999999999999
start with 41
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TMP_TERM_CARD_DETAIL_ID
prompt =============================================
prompt
create sequence DM_SYSTEM.SEQ_TMP_TERM_CARD_DETAIL_ID
minvalue 1
maxvalue 99999999999999999999
start with 101
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TMP_TERM_CARD_TASK_ID
prompt ===========================================
prompt
create sequence DM_SYSTEM.SEQ_TMP_TERM_CARD_TASK_ID
minvalue 1
maxvalue 99999999999999999999
start with 161
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TMP_UP_CARD_DETAIL_ID
prompt ===========================================
prompt
create sequence DM_SYSTEM.SEQ_TMP_UP_CARD_DETAIL_ID
minvalue 1
maxvalue 99999999999999999999
start with 61
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_UP_CHANNEL_ID
prompt ===================================
prompt
create sequence DM_SYSTEM.SEQ_UP_CHANNEL_ID
minvalue 1
maxvalue 999999999999999999
start with 1160
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_UP_ERROR_MAP_ID
prompt =====================================
prompt
create sequence DM_SYSTEM.SEQ_UP_ERROR_MAP_ID
minvalue 1
maxvalue 999999999999999999
start with 1080
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_UP_FUND_CHANGE_ID
prompt =======================================
prompt
create sequence DM_SYSTEM.SEQ_UP_FUND_CHANGE_ID
minvalue 1
maxvalue 999999999999999999
start with 1220
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_UP_PRODUCT_ID
prompt ===================================
prompt
create sequence DM_SYSTEM.SEQ_UP_PRODUCT_ID
minvalue 1
maxvalue 999999999999999999
start with 1160
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_UP_SCRIPT_ID
prompt ==================================
prompt
create sequence DM_SYSTEM.SEQ_UP_SCRIPT_ID
minvalue 1
maxvalue 999999999999999999
start with 1160
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_VCODE_SERIAL_NO
prompt =====================================
prompt
create sequence DM_SYSTEM.SEQ_VCODE_SERIAL_NO
minvalue 1001
maxvalue 9999999999999999999999999
start with 10101
increment by 1
cache 20;

prompt
prompt Creating package ACCOUNT_TYPE
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
prompt Creating function F_BACKUP_BIND
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
prompt Creating procedure SP_SYSTEM_LOG_ADD
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
