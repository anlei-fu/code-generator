prompt PL/SQL Developer Export User Objects for user QXFC@DB210
prompt Created by Administrator on 2019��10��11��
set define off
spool 3.log

prompt
prompt Creating table ACCT_SYNC_CONFIG
prompt ===============================
prompt
create table QXFC.ACCT_SYNC_CONFIG
(
  channel_type   NUMBER not null,
  title          VARCHAR2(100) not null,
  change_type    NUMBER,
  last_exec_id   NUMBER,
  last_exec_time DATE default sysdate,
  min_count      NUMBER default 100,
  robot_ip       VARCHAR2(32),
  next_time      DATE default sysdate not null,
  frequency      NUMBER default 60
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
comment on table QXFC.ACCT_SYNC_CONFIG
  is 'ͬ������ϵͳ����';
comment on column QXFC.ACCT_SYNC_CONFIG.channel_type
  is '�������� 1:���� 2:����';
comment on column QXFC.ACCT_SYNC_CONFIG.title
  is '����';
comment on column QXFC.ACCT_SYNC_CONFIG.change_type
  is '�ʽ�������';
comment on column QXFC.ACCT_SYNC_CONFIG.last_exec_id
  is '�ϴ�ִ�б��';
comment on column QXFC.ACCT_SYNC_CONFIG.last_exec_time
  is '�ϴ�ִ��ʱ��';
comment on column QXFC.ACCT_SYNC_CONFIG.min_count
  is '��С����ͬ����';
comment on column QXFC.ACCT_SYNC_CONFIG.robot_ip
  is '���ִ�л���ip';
comment on column QXFC.ACCT_SYNC_CONFIG.next_time
  is '�´κ�ʱ��';
comment on column QXFC.ACCT_SYNC_CONFIG.frequency
  is 'ִ��Ƶ��(��)';
alter table QXFC.ACCT_SYNC_CONFIG
  add constraint PK_SYNC_CONFIG_ID primary key (CHANNEL_TYPE)
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
prompt Creating table ACCT_SYNC_ERROR
prompt ==============================
prompt
create table QXFC.ACCT_SYNC_ERROR
(
  record_id    NUMBER,
  channel_type NUMBER,
  change_type  NUMBER,
  error_count  NUMBER default 1,
  created_time DATE,
  result_msg   VARCHAR2(100),
  has_warn     NUMBER default 1
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
comment on table QXFC.ACCT_SYNC_ERROR
  is 'ͬ�������¼';
comment on column QXFC.ACCT_SYNC_ERROR.record_id
  is '��¼���';
comment on column QXFC.ACCT_SYNC_ERROR.channel_type
  is '����';
comment on column QXFC.ACCT_SYNC_ERROR.change_type
  is '�������';
comment on column QXFC.ACCT_SYNC_ERROR.error_count
  is '�������';
comment on column QXFC.ACCT_SYNC_ERROR.created_time
  is '����ʱ��';
comment on column QXFC.ACCT_SYNC_ERROR.result_msg
  is '������Ϣ';
comment on column QXFC.ACCT_SYNC_ERROR.has_warn
  is '�Ƿ񱨾�';

prompt
prompt Creating table FC_CHECK_CHARGE
prompt ==============================
prompt
create table QXFC.FC_CHECK_CHARGE
(
  id              NUMBER not null,
  down_channel_no VARCHAR2(32),
  down_order_no   VARCHAR2(32),
  idno            VARCHAR2(32),
  brand_no        VARCHAR2(32),
  phone           VARCHAR2(32),
  biz_type        VARCHAR2(32),
  carrier_no      VARCHAR2(32),
  status          NUMBER default 20 not null,
  result          VARCHAR2(128),
  script_path     VARCHAR2(32),
  bus_svc         VARCHAR2(32),
  ip              VARCHAR2(32),
  create_time     DATE default sysdate,
  finish_time     DATE
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
comment on table QXFC.FC_CHECK_CHARGE
  is '�ɷ�/���Ѽ�Ȩ�ӿ�';
comment on column QXFC.FC_CHECK_CHARGE.id
  is '���';
comment on column QXFC.FC_CHECK_CHARGE.down_channel_no
  is '��������';
comment on column QXFC.FC_CHECK_CHARGE.down_order_no
  is '���ζ�����';
comment on column QXFC.FC_CHECK_CHARGE.idno
  is '���֤��';
comment on column QXFC.FC_CHECK_CHARGE.brand_no
  is '����ʺ�';
comment on column QXFC.FC_CHECK_CHARGE.phone
  is '�ֻ���';
comment on column QXFC.FC_CHECK_CHARGE.biz_type
  is '���� 2:�̻�, 3:���';
comment on column QXFC.FC_CHECK_CHARGE.carrier_no
  is '��Ӫ��';
comment on column QXFC.FC_CHECK_CHARGE.status
  is '״̬ 20:�ȴ�; 30:���ڴ��� 90:ʧ�� 0:�ɹ�';
comment on column QXFC.FC_CHECK_CHARGE.result
  is '���';
comment on column QXFC.FC_CHECK_CHARGE.script_path
  is '�ű�·��';
comment on column QXFC.FC_CHECK_CHARGE.bus_svc
  is '���߷���';
comment on column QXFC.FC_CHECK_CHARGE.ip
  is 'IP';
comment on column QXFC.FC_CHECK_CHARGE.create_time
  is '����ʱ��';
comment on column QXFC.FC_CHECK_CHARGE.finish_time
  is '���ʱ��';
alter table QXFC.FC_CHECK_CHARGE
  add constraint PK_CHECK_ID primary key (ID)
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
prompt Creating table FC_DOWN_CHANNEL
prompt ==============================
prompt
create table QXFC.FC_DOWN_CHANNEL
(
  channel_no      VARCHAR2(32) not null,
  channel_name    VARCHAR2(32) not null,
  channel_account VARCHAR2(64) not null,
  channel_key     VARCHAR2(64) not null,
  channel_token   VARCHAR2(64),
  status          NUMBER(2) default 0 not null,
  balance         NUMBER(20) default 0 not null,
  need_notify     NUMBER(20) default 1 not null,
  remark          VARCHAR2(64),
  sync_status     NUMBER(20) default 20 not null,
  created_user    VARCHAR2(32) not null,
  created_time    DATE default Sysdate not null,
  edit_user       VARCHAR2(32),
  edit_time       DATE,
  fd_channel_no   VARCHAR2(32)
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
comment on table QXFC.FC_DOWN_CHANNEL
  is '����������';
comment on column QXFC.FC_DOWN_CHANNEL.channel_no
  is '�����������';
comment on column QXFC.FC_DOWN_CHANNEL.channel_name
  is '������������';
comment on column QXFC.FC_DOWN_CHANNEL.channel_account
  is '�����ʺ�';
comment on column QXFC.FC_DOWN_CHANNEL.channel_key
  is '����Key';
comment on column QXFC.FC_DOWN_CHANNEL.channel_token
  is '����Token';
comment on column QXFC.FC_DOWN_CHANNEL.status
  is '״̬';
comment on column QXFC.FC_DOWN_CHANNEL.balance
  is '���';
comment on column QXFC.FC_DOWN_CHANNEL.need_notify
  is '�Ƿ�֪ͨ;0:֪ͨ;1:��֪ͨ';
comment on column QXFC.FC_DOWN_CHANNEL.remark
  is '��ע';
comment on column QXFC.FC_DOWN_CHANNEL.sync_status
  is 'ͬ������ϵͳ״̬';
comment on column QXFC.FC_DOWN_CHANNEL.created_user
  is '������';
comment on column QXFC.FC_DOWN_CHANNEL.created_time
  is '����ʱ��';
comment on column QXFC.FC_DOWN_CHANNEL.edit_user
  is '������';
comment on column QXFC.FC_DOWN_CHANNEL.edit_time
  is '����ʱ��';
comment on column QXFC.FC_DOWN_CHANNEL.fd_channel_no
  is '����ϵͳ�������';
alter table QXFC.FC_DOWN_CHANNEL
  add constraint PK_FC_DOWN_CHANNEL primary key (CHANNEL_NO)
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
prompt Creating table FC_DOWN_EXCLUDE_UP
prompt =================================
prompt
create table QXFC.FC_DOWN_EXCLUDE_UP
(
  id              NUMBER(20) not null,
  down_channel_no VARCHAR2(32) not null,
  down_group_no   VARCHAR2(32) not null,
  up_channel_no   VARCHAR2(32) not null,
  up_group_no     VARCHAR2(32) not null,
  status          NUMBER(20) default 0 not null,
  created_user    VARCHAR2(32) not null,
  created_time    DATE default Sysdate not null,
  edit_user       VARCHAR2(32),
  edit_time       DATE
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
comment on table QXFC.FC_DOWN_EXCLUDE_UP
  is '�����ų�����(����)';
comment on column QXFC.FC_DOWN_EXCLUDE_UP.id
  is '���';
comment on column QXFC.FC_DOWN_EXCLUDE_UP.down_channel_no
  is '�����������';
comment on column QXFC.FC_DOWN_EXCLUDE_UP.down_group_no
  is '���β�Ʒ����';
comment on column QXFC.FC_DOWN_EXCLUDE_UP.up_channel_no
  is '�����������';
comment on column QXFC.FC_DOWN_EXCLUDE_UP.up_group_no
  is '���β�Ʒ����';
comment on column QXFC.FC_DOWN_EXCLUDE_UP.status
  is '״̬';
comment on column QXFC.FC_DOWN_EXCLUDE_UP.created_user
  is '������';
comment on column QXFC.FC_DOWN_EXCLUDE_UP.created_time
  is '����ʱ��';
comment on column QXFC.FC_DOWN_EXCLUDE_UP.edit_user
  is '������';
comment on column QXFC.FC_DOWN_EXCLUDE_UP.edit_time
  is '����ʱ��';
alter table QXFC.FC_DOWN_EXCLUDE_UP
  add constraint PK_FC_DOWN_EXCLUDE_UP primary key (ID)
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
prompt Creating table FC_DOWN_PRODUCT
prompt ==============================
prompt
create table QXFC.FC_DOWN_PRODUCT
(
  pid             NUMBER(20) not null,
  channel_no      VARCHAR2(32) not null,
  product_no      VARCHAR2(32) not null,
  product_name    VARCHAR2(32) not null,
  sku             VARCHAR2(32),
  product_type    NUMBER(20) not null,
  package_id      NUMBER(20) not null,
  carrier_no      VARCHAR2(32) not null,
  province_no     VARCHAR2(32) not null,
  city_no         VARCHAR2(32) not null,
  sale_price      NUMBER(20,5),
  trade_fee       NUMBER(20,5),
  can_trial       NUMBER(20) default 1 not null,
  trial_day       NUMBER(20) default 0 not null,
  auto_active     NUMBER(20) default 1 not null,
  group_no        VARCHAR2(32),
  bind_mode       NUMBER(20) default 0 not null,
  status          NUMBER(20) default 0 not null,
  remark          VARCHAR2(64),
  created_user    VARCHAR2(32) not null,
  created_time    DATE default Sysdate not null,
  edit_user       VARCHAR2(32),
  edit_time       DATE,
  icc_type        NUMBER default 0,
  flow_id         NUMBER,
  write_card_mode NUMBER default 0,
  fee_type        NUMBER default 0,
  reward          NUMBER default 0,
  reward_cntr     NUMBER default 0
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
comment on table QXFC.FC_DOWN_PRODUCT
  is '����������Ʒ��';
comment on column QXFC.FC_DOWN_PRODUCT.pid
  is '��ƷID';
comment on column QXFC.FC_DOWN_PRODUCT.channel_no
  is '�������';
comment on column QXFC.FC_DOWN_PRODUCT.product_no
  is '��Ʒ����';
comment on column QXFC.FC_DOWN_PRODUCT.product_name
  is '��Ʒ����';
comment on column QXFC.FC_DOWN_PRODUCT.sku
  is 'SKUID';
comment on column QXFC.FC_DOWN_PRODUCT.product_type
  is '��Ʒ����';
comment on column QXFC.FC_DOWN_PRODUCT.package_id
  is '�ײͱ��';
comment on column QXFC.FC_DOWN_PRODUCT.carrier_no
  is '��Ӫ��;*:����';
comment on column QXFC.FC_DOWN_PRODUCT.province_no
  is 'ʡ��;QG:ȫ��';
comment on column QXFC.FC_DOWN_PRODUCT.city_no
  is '����;*:ȫ��';
comment on column QXFC.FC_DOWN_PRODUCT.sale_price
  is '�ۼ�';
comment on column QXFC.FC_DOWN_PRODUCT.trade_fee
  is '����������';
comment on column QXFC.FC_DOWN_PRODUCT.can_trial
  is '��������;0:����;1:������';
comment on column QXFC.FC_DOWN_PRODUCT.trial_day
  is '������,��λ��';
comment on column QXFC.FC_DOWN_PRODUCT.auto_active
  is '�����������Ƿ��Զ�����/ת��1:�Զ�;2:�ֶ�';
comment on column QXFC.FC_DOWN_PRODUCT.group_no
  is '������';
comment on column QXFC.FC_DOWN_PRODUCT.bind_mode
  is '��ģʽ 0:����; 1:ǿ��';
comment on column QXFC.FC_DOWN_PRODUCT.status
  is '״̬;0:����;1:����';
comment on column QXFC.FC_DOWN_PRODUCT.remark
  is '��ע';
comment on column QXFC.FC_DOWN_PRODUCT.created_user
  is '������';
comment on column QXFC.FC_DOWN_PRODUCT.created_time
  is '����ʱ��';
comment on column QXFC.FC_DOWN_PRODUCT.edit_user
  is '������';
comment on column QXFC.FC_DOWN_PRODUCT.edit_time
  is '����ʱ��';
comment on column QXFC.FC_DOWN_PRODUCT.icc_type
  is '������ 1:����д��; 2:���������� 0:��д��';
comment on column QXFC.FC_DOWN_PRODUCT.flow_id
  is '��������';
comment on column QXFC.FC_DOWN_PRODUCT.write_card_mode
  is 'д����ʽ 0:��д�� 1:�Զ�; 2:�ֶ�; 3:�����µ�';
comment on column QXFC.FC_DOWN_PRODUCT.fee_type
  is '���������� 0:���� 1:������';
comment on column QXFC.FC_DOWN_PRODUCT.reward
  is 'Ӷ��';
comment on column QXFC.FC_DOWN_PRODUCT.reward_cntr
  is '���ڴ���';
alter table QXFC.FC_DOWN_PRODUCT
  add constraint PK_FC_DOWN_PRODUCT primary key (PID)
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
prompt Creating table FC_DOWN_SCRIPT
prompt =============================
prompt
create table QXFC.FC_DOWN_SCRIPT
(
  sid          NUMBER(20) not null,
  channel_no   VARCHAR2(32) not null,
  script_type  NUMBER(20) not null,
  package_id   NUMBER(20) default 0 not null,
  product_type NUMBER(20) default 0 not null,
  carrier_no   VARCHAR2(32) not null,
  province_no  VARCHAR2(32) not null,
  script_path  VARCHAR2(64) not null,
  notify_url   VARCHAR2(128) not null,
  svc_bus      VARCHAR2(32) not null,
  notify_limit NUMBER(20) default 5 not null,
  interval     NUMBER(20) default 60 not null,
  status       NUMBER(20) default 0 not null,
  created_user VARCHAR2(32) not null,
  created_time DATE default Sysdate not null,
  edit_user    VARCHAR2(32),
  edit_time    DATE
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
comment on table QXFC.FC_DOWN_SCRIPT
  is '���νű�';
comment on column QXFC.FC_DOWN_SCRIPT.sid
  is '�ű�ID';
comment on column QXFC.FC_DOWN_SCRIPT.channel_no
  is '�������';
comment on column QXFC.FC_DOWN_SCRIPT.script_type
  is '�ű�����1:ҵ�������֪ͨ;2:�˿�';
comment on column QXFC.FC_DOWN_SCRIPT.package_id
  is '�ײͱ�� 0:����';
comment on column QXFC.FC_DOWN_SCRIPT.product_type
  is '��Ʒ����;0:����';
comment on column QXFC.FC_DOWN_SCRIPT.carrier_no
  is '��Ӫ��;*:����';
comment on column QXFC.FC_DOWN_SCRIPT.province_no
  is 'ʡ��;QG:ȫ��';
comment on column QXFC.FC_DOWN_SCRIPT.script_path
  is '�ű�·��';
comment on column QXFC.FC_DOWN_SCRIPT.notify_url
  is '֪ͨ��ַ';
comment on column QXFC.FC_DOWN_SCRIPT.svc_bus
  is '֪ͨ����';
comment on column QXFC.FC_DOWN_SCRIPT.notify_limit
  is '֪ͨ��������';
comment on column QXFC.FC_DOWN_SCRIPT.interval
  is '֪ͨ���,��λs';
comment on column QXFC.FC_DOWN_SCRIPT.status
  is '״̬';
comment on column QXFC.FC_DOWN_SCRIPT.created_user
  is '������';
comment on column QXFC.FC_DOWN_SCRIPT.created_time
  is '����ʱ��';
comment on column QXFC.FC_DOWN_SCRIPT.edit_user
  is '������';
comment on column QXFC.FC_DOWN_SCRIPT.edit_time
  is '����ʱ��';
alter table QXFC.FC_DOWN_SCRIPT
  add constraint PK_FC_DOWN_SCRIPT primary key (SID)
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
prompt Creating table FC_DOWN_SPECIFY_UP
prompt =================================
prompt
create table QXFC.FC_DOWN_SPECIFY_UP
(
  id              NUMBER(20) not null,
  down_channel_no VARCHAR2(32) not null,
  down_group_no   VARCHAR2(32) not null,
  up_channel_no   VARCHAR2(32) not null,
  up_group_no     VARCHAR2(32) not null,
  status          NUMBER(20) default 0 not null,
  created_user    VARCHAR2(32) not null,
  created_time    DATE default Sysdate not null,
  edit_user       VARCHAR2(32),
  edit_time       DATE,
  percent         NUMBER default 100
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
comment on table QXFC.FC_DOWN_SPECIFY_UP
  is '����ָ������';
comment on column QXFC.FC_DOWN_SPECIFY_UP.id
  is '���';
comment on column QXFC.FC_DOWN_SPECIFY_UP.down_channel_no
  is '�����������';
comment on column QXFC.FC_DOWN_SPECIFY_UP.down_group_no
  is '���β�Ʒ����';
comment on column QXFC.FC_DOWN_SPECIFY_UP.up_channel_no
  is '�����������';
comment on column QXFC.FC_DOWN_SPECIFY_UP.up_group_no
  is '���β�Ʒ����';
comment on column QXFC.FC_DOWN_SPECIFY_UP.status
  is '״̬';
comment on column QXFC.FC_DOWN_SPECIFY_UP.created_user
  is '������';
comment on column QXFC.FC_DOWN_SPECIFY_UP.created_time
  is '����ʱ��';
comment on column QXFC.FC_DOWN_SPECIFY_UP.edit_user
  is '������';
comment on column QXFC.FC_DOWN_SPECIFY_UP.edit_time
  is '����ʱ��';
comment on column QXFC.FC_DOWN_SPECIFY_UP.percent
  is '������';
alter table QXFC.FC_DOWN_SPECIFY_UP
  add constraint PK_FC_DOWN_SPECIFY_UP primary key (ID)
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
prompt Creating table FC_DZ_PHONE_ACTIVE
prompt =================================
prompt
create table QXFC.FC_DZ_PHONE_ACTIVE
(
  id            NUMBER not null,
  phone         VARCHAR2(32) not null,
  trans_seq     VARCHAR2(64) not null,
  active_date   DATE,
  active_status VARCHAR2(32),
  iccid         VARCHAR2(32),
  status        NUMBER default 20 not null,
  create_time   DATE default sysdate
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
comment on table QXFC.FC_DZ_PHONE_ACTIVE
  is '�ſ���������';
comment on column QXFC.FC_DZ_PHONE_ACTIVE.id
  is '���';
comment on column QXFC.FC_DZ_PHONE_ACTIVE.phone
  is '�ֻ���';
comment on column QXFC.FC_DZ_PHONE_ACTIVE.trans_seq
  is '������ˮ';
comment on column QXFC.FC_DZ_PHONE_ACTIVE.active_date
  is '����ʱ��';
comment on column QXFC.FC_DZ_PHONE_ACTIVE.active_status
  is '����״̬';
comment on column QXFC.FC_DZ_PHONE_ACTIVE.iccid
  is 'ICCID';
comment on column QXFC.FC_DZ_PHONE_ACTIVE.status
  is '״̬ 20:�ȴ�����; 30:������ 0:�������';
comment on column QXFC.FC_DZ_PHONE_ACTIVE.create_time
  is '����ʱ��';
alter table QXFC.FC_DZ_PHONE_ACTIVE
  add constraint PK_DZ_ACTIVE_ID primary key (ID)
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
prompt Creating table FC_DZ_RENEW_COST
prompt ===============================
prompt
create table QXFC.FC_DZ_RENEW_COST
(
  id          NUMBER not null,
  account     VARCHAR2(32) not null,
  tans_seq    VARCHAR2(32) not null,
  cost        NUMBER(20,5),
  bill_date   VARCHAR2(32),
  status      NUMBER default 20,
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
comment on table QXFC.FC_DZ_RENEW_COST
  is '�ſ�������ѳɱ�';
comment on column QXFC.FC_DZ_RENEW_COST.id
  is '���';
comment on column QXFC.FC_DZ_RENEW_COST.account
  is '�������';
comment on column QXFC.FC_DZ_RENEW_COST.tans_seq
  is '��ˮ';
comment on column QXFC.FC_DZ_RENEW_COST.cost
  is '�ɱ�';
comment on column QXFC.FC_DZ_RENEW_COST.bill_date
  is '�˵�����';
comment on column QXFC.FC_DZ_RENEW_COST.status
  is '״̬';
comment on column QXFC.FC_DZ_RENEW_COST.create_time
  is '����ʱ��';
alter table QXFC.FC_DZ_RENEW_COST
  add constraint PK_RENEW_COST_ID primary key (ID)
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
prompt Creating table FC_DZ_REWARD_BRAND_NEW
prompt =====================================
prompt
create table QXFC.FC_DZ_REWARD_BRAND_NEW
(
  id          NUMBER not null,
  trans_seq   VARCHAR2(32) not null,
  reward      NUMBER(20,5) not null,
  bill_date   VARCHAR2(32) not null,
  status      NUMBER default 20 not null,
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
comment on table QXFC.FC_DZ_REWARD_BRAND_NEW
  is '�����װӶ��';
comment on column QXFC.FC_DZ_REWARD_BRAND_NEW.id
  is '���';
comment on column QXFC.FC_DZ_REWARD_BRAND_NEW.trans_seq
  is 'ҵ����ˮ��';
comment on column QXFC.FC_DZ_REWARD_BRAND_NEW.reward
  is 'Ӷ��';
comment on column QXFC.FC_DZ_REWARD_BRAND_NEW.bill_date
  is '�˵���';
comment on column QXFC.FC_DZ_REWARD_BRAND_NEW.status
  is '״̬ 20:�ȴ� 30:������ 0:�ɹ�';
comment on column QXFC.FC_DZ_REWARD_BRAND_NEW.create_time
  is '����ʱ��';
alter table QXFC.FC_DZ_REWARD_BRAND_NEW
  add constraint PK_DZ_REWARD_NEW_ID primary key (ID)
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
prompt Creating table FC_DZ_REWARD_RENEW
prompt =================================
prompt
create table QXFC.FC_DZ_REWARD_RENEW
(
  id          NUMBER not null,
  account     VARCHAR2(32) not null,
  reward      NUMBER(20,5) not null,
  reward_type NUMBER not null,
  bill_date   VARCHAR2(32) not null,
  status      NUMBER default 20 not null,
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
comment on table QXFC.FC_DZ_REWARD_RENEW
  is '�ſ��������Ӷ��';
comment on column QXFC.FC_DZ_REWARD_RENEW.id
  is '���';
comment on column QXFC.FC_DZ_REWARD_RENEW.account
  is '�ʺ�';
comment on column QXFC.FC_DZ_REWARD_RENEW.reward
  is 'Ӷ��';
comment on column QXFC.FC_DZ_REWARD_RENEW.reward_type
  is '���� 1:��� 2:�ſ�';
comment on column QXFC.FC_DZ_REWARD_RENEW.bill_date
  is '�˵���';
comment on column QXFC.FC_DZ_REWARD_RENEW.status
  is '״̬ 20:�ȴ� 30:������ 0:�ɹ�';
comment on column QXFC.FC_DZ_REWARD_RENEW.create_time
  is '����ʱ��';
alter table QXFC.FC_DZ_REWARD_RENEW
  add constraint PK_DZ_REWARD_ID primary key (ID)
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
prompt Creating table FC_DZ_TRADE_DETAIL
prompt =================================
prompt
create table QXFC.FC_DZ_TRADE_DETAIL
(
  id          NUMBER not null,
  bill_date   VARCHAR2(32) not null,
  order_no    VARCHAR2(32),
  type        NUMBER,
  account     VARCHAR2(32),
  up_seq      VARCHAR2(32),
  cost        NUMBER(20,5) default 0,
  reward      NUMBER(20,5) default 0,
  order_date  DATE,
  create_date DATE default sysdate,
  status      NUMBER default 10,
  msg         VARCHAR2(128)
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
comment on table QXFC.FC_DZ_TRADE_DETAIL
  is '������ϸ';
comment on column QXFC.FC_DZ_TRADE_DETAIL.id
  is '���';
comment on column QXFC.FC_DZ_TRADE_DETAIL.bill_date
  is '�˵�ʱ��';
comment on column QXFC.FC_DZ_TRADE_DETAIL.order_no
  is '������';
comment on column QXFC.FC_DZ_TRADE_DETAIL.type
  is '���� 1:��� 2:�ſ�';
comment on column QXFC.FC_DZ_TRADE_DETAIL.account
  is '�û��ʺ� �ֻ���/����ʺ�';
comment on column QXFC.FC_DZ_TRADE_DETAIL.up_seq
  is '������ˮ';
comment on column QXFC.FC_DZ_TRADE_DETAIL.cost
  is '�ɱ�';
comment on column QXFC.FC_DZ_TRADE_DETAIL.reward
  is 'Ӷ��';
comment on column QXFC.FC_DZ_TRADE_DETAIL.order_date
  is '����ʱ��';
comment on column QXFC.FC_DZ_TRADE_DETAIL.create_date
  is '����ʱ��';
comment on column QXFC.FC_DZ_TRADE_DETAIL.status
  is '״̬ 20:�ȴ��������� 30:�ȴ�����; 0:�ɹ�; 90:ʧ��';
comment on column QXFC.FC_DZ_TRADE_DETAIL.msg
  is '��Ϣ';
alter table QXFC.FC_DZ_TRADE_DETAIL
  add constraint PK_DZ_DETAIL_ID primary key (ID)
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
prompt Creating table FC_ERROR_CODE
prompt ============================
prompt
create table QXFC.FC_ERROR_CODE
(
  cid          NUMBER(20) not null,
  channel_no   VARCHAR2(32) not null,
  product_type VARCHAR2(32) not null,
  action_type  VARCHAR2(32) not null,
  key_word1    VARCHAR2(32) not null,
  key_word2    VARCHAR2(32),
  deal_type    NUMBER(20) not null,
  status       NUMBER(20) not null,
  created_user VARCHAR2(32) not null,
  created_time DATE not null,
  edit_user    VARCHAR2(32),
  edit_time    DATE,
  deal_msg     VARCHAR2(256),
  is_warn      NUMBER(20) default 1
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 8K
    minextents 1
    maxextents unlimited
  );
comment on column QXFC.FC_ERROR_CODE.cid
  is '����';
comment on column QXFC.FC_ERROR_CODE.channel_no
  is '�������';
comment on column QXFC.FC_ERROR_CODE.product_type
  is '��Ʒ����';
comment on column QXFC.FC_ERROR_CODE.action_type
  is '��������';
comment on column QXFC.FC_ERROR_CODE.key_word1
  is '�ؼ���1';
comment on column QXFC.FC_ERROR_CODE.key_word2
  is '�ؼ���2
';
comment on column QXFC.FC_ERROR_CODE.deal_type
  is '��������';
comment on column QXFC.FC_ERROR_CODE.status
  is '״̬(����/����)
';
comment on column QXFC.FC_ERROR_CODE.created_user
  is '������';
comment on column QXFC.FC_ERROR_CODE.created_time
  is '����ʱ��';
comment on column QXFC.FC_ERROR_CODE.edit_user
  is '������';
comment on column QXFC.FC_ERROR_CODE.edit_time
  is '����ʱ��';
comment on column QXFC.FC_ERROR_CODE.deal_msg
  is '������Ϣ';
comment on column QXFC.FC_ERROR_CODE.is_warn
  is '�Ƿ�澯 0;�澯 1:���澯';

prompt
prompt Creating table FC_FLOW
prompt ======================
prompt
create table QXFC.FC_FLOW
(
  fid          NUMBER not null,
  flow_name    VARCHAR2(32) default 1 not null,
  remark       VARCHAR2(32),
  status       NUMBER(20) default 0 not null,
  created_user VARCHAR2(32) not null,
  created_time DATE default Sysdate not null,
  edit_user    VARCHAR2(32),
  edit_time    DATE,
  flow_type    NUMBER
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
comment on table QXFC.FC_FLOW
  is '���̿���';
comment on column QXFC.FC_FLOW.fid
  is '���̱��';
comment on column QXFC.FC_FLOW.flow_name
  is '��������';
comment on column QXFC.FC_FLOW.remark
  is '��ע';
comment on column QXFC.FC_FLOW.status
  is '״̬';
comment on column QXFC.FC_FLOW.created_user
  is '������';
comment on column QXFC.FC_FLOW.created_time
  is '����ʱ��';
comment on column QXFC.FC_FLOW.edit_user
  is '������';
comment on column QXFC.FC_FLOW.edit_time
  is '����ʱ��';
comment on column QXFC.FC_FLOW.flow_type
  is '�������� 1���� 2����';

prompt
prompt Creating table FC_FLOW_STEP
prompt ===========================
prompt
create table QXFC.FC_FLOW_STEP
(
  action       VARCHAR2(32) not null,
  fid          NUMBER not null,
  sno          NUMBER default 1 not null,
  script_type  NUMBER,
  step_name    VARCHAR2(32) not null,
  created_user VARCHAR2(32) not null,
  created_time DATE default Sysdate not null,
  edit_user    VARCHAR2(32),
  edit_time    DATE,
  step_id      NUMBER not null,
  face         NUMBER,
  deal_mode    NUMBER
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 8K
    minextents 1
    maxextents unlimited
  );
comment on table QXFC.FC_FLOW_STEP
  is '���̲���';
comment on column QXFC.FC_FLOW_STEP.action
  is '����';
comment on column QXFC.FC_FLOW_STEP.fid
  is '���̱��';
comment on column QXFC.FC_FLOW_STEP.sno
  is '������';
comment on column QXFC.FC_FLOW_STEP.script_type
  is '�����Ľű�����';
comment on column QXFC.FC_FLOW_STEP.step_name
  is '��������';
comment on column QXFC.FC_FLOW_STEP.created_user
  is '������';
comment on column QXFC.FC_FLOW_STEP.created_time
  is '����ʱ��';
comment on column QXFC.FC_FLOW_STEP.edit_user
  is '������';
comment on column QXFC.FC_FLOW_STEP.edit_time
  is '����ʱ��';
comment on column QXFC.FC_FLOW_STEP.step_id
  is 'Ψһ��ʶ';
comment on column QXFC.FC_FLOW_STEP.face
  is '��ֵ';
comment on column QXFC.FC_FLOW_STEP.deal_mode
  is '����ʽ(0�Զ�1�Զ�)';
alter table QXFC.FC_FLOW_STEP
  add constraint PK_STEP_ID primary key (STEP_ID)
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
prompt Creating table FC_FLOW_TASK
prompt ===========================
prompt
create table QXFC.FC_FLOW_TASK
(
  tid             NUMBER not null,
  flow_id         NUMBER not null,
  order_no        VARCHAR2(32) not null,
  bind_id         VARCHAR2(32),
  action          VARCHAR2(32) not null,
  script_type     NUMBER(20),
  up_channel_no   VARCHAR2(32),
  script_id       NUMBER(20),
  script_path     VARCHAR2(64),
  svc_bus         VARCHAR2(64),
  ip              VARCHAR2(32),
  uptranseq       VARCHAR2(32),
  task_msg        VARCHAR2(256),
  query_msg       VARCHAR2(256),
  scan_id         NUMBER(20),
  next_time       DATE,
  task_status     NUMBER default 20 not null,
  manual_status   NUMBER default 10 not null,
  task_start_time DATE default sysdate not null,
  task_end_time   DATE,
  up_product_id   NUMBER,
  flow_mode       NUMBER default 0,
  channel_name    VARCHAR2(32),
  down_price      NUMBER(20,5) default 0,
  trade_fee       NUMBER(20,5) default 0,
  up_cost         NUMBER(20,5) default 0,
  up_reward       NUMBER(20,5) default 0,
  write_card_mode NUMBER,
  face            NUMBER
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 8K
    minextents 1
    maxextents unlimited
  );
comment on table QXFC.FC_FLOW_TASK
  is '��������';
comment on column QXFC.FC_FLOW_TASK.tid
  is '������';
comment on column QXFC.FC_FLOW_TASK.flow_id
  is '���̱��';
comment on column QXFC.FC_FLOW_TASK.order_no
  is '������';
comment on column QXFC.FC_FLOW_TASK.bind_id
  is '�󶨱��';
comment on column QXFC.FC_FLOW_TASK.action
  is '��ǰ����';
comment on column QXFC.FC_FLOW_TASK.script_type
  is '�ű�����';
comment on column QXFC.FC_FLOW_TASK.up_channel_no
  is '�����������';
comment on column QXFC.FC_FLOW_TASK.script_id
  is '�ű�ID';
comment on column QXFC.FC_FLOW_TASK.script_path
  is '�ű�·��';
comment on column QXFC.FC_FLOW_TASK.svc_bus
  is '���߷���';
comment on column QXFC.FC_FLOW_TASK.ip
  is '����IP';
comment on column QXFC.FC_FLOW_TASK.uptranseq
  is '������ˮ';
comment on column QXFC.FC_FLOW_TASK.task_msg
  is '�����Ϣ';
comment on column QXFC.FC_FLOW_TASK.query_msg
  is '��ѯ��Ϣ';
comment on column QXFC.FC_FLOW_TASK.scan_id
  is '��ɨ��ID';
comment on column QXFC.FC_FLOW_TASK.next_time
  is '�´�ʱ��';
comment on column QXFC.FC_FLOW_TASK.task_status
  is '����״̬';
comment on column QXFC.FC_FLOW_TASK.manual_status
  is '�˹����״̬';
comment on column QXFC.FC_FLOW_TASK.task_start_time
  is '����ʱ��';
comment on column QXFC.FC_FLOW_TASK.task_end_time
  is '��������ʱ��';
comment on column QXFC.FC_FLOW_TASK.up_product_id
  is '���β�ƷID';
comment on column QXFC.FC_FLOW_TASK.flow_mode
  is '��������ģʽ 0:�Զ�; 1:�ֶ�';
comment on column QXFC.FC_FLOW_TASK.channel_name
  is '��������';
comment on column QXFC.FC_FLOW_TASK.down_price
  is '�����ۼ�';
comment on column QXFC.FC_FLOW_TASK.trade_fee
  is '������';
comment on column QXFC.FC_FLOW_TASK.up_cost
  is '���γɱ�';
comment on column QXFC.FC_FLOW_TASK.up_reward
  is '����Ӷ��';
comment on column QXFC.FC_FLOW_TASK.write_card_mode
  is 'д����ʽ';
comment on column QXFC.FC_FLOW_TASK.face
  is '��ֵ';
alter table QXFC.FC_FLOW_TASK
  add constraint PK_TASK_ID primary key (TID)
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
prompt Creating table FC_FLOW_TASK_QUERY
prompt =================================
prompt
create table QXFC.FC_FLOW_TASK_QUERY
(
  qid            NUMBER not null,
  task_id        NUMBER not null,
  order_no       VARCHAR2(32) not null,
  script_id      NUMBER not null,
  script_path    VARCHAR2(128),
  svc_bus        VARCHAR2(32),
  ip             VARCHAR2(32),
  query_cntr     NUMBER default 0 not null,
  query_msg      VARCHAR2(128),
  status         NUMBER default 20 not null,
  first_interval NUMBER,
  next_interval  NUMBER,
  next_time      DATE,
  scan_id        NUMBER,
  start_time     DATE default sysdate not null,
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
comment on table QXFC.FC_FLOW_TASK_QUERY
  is '�����ѯ';
comment on column QXFC.FC_FLOW_TASK_QUERY.qid
  is '��ѯ���';
comment on column QXFC.FC_FLOW_TASK_QUERY.task_id
  is '������';
comment on column QXFC.FC_FLOW_TASK_QUERY.order_no
  is '������';
comment on column QXFC.FC_FLOW_TASK_QUERY.script_id
  is '�ű����';
comment on column QXFC.FC_FLOW_TASK_QUERY.script_path
  is '�ű�·��';
comment on column QXFC.FC_FLOW_TASK_QUERY.svc_bus
  is '���߷���';
comment on column QXFC.FC_FLOW_TASK_QUERY.ip
  is '��ѯIP';
comment on column QXFC.FC_FLOW_TASK_QUERY.query_cntr
  is '��ѯ����';
comment on column QXFC.FC_FLOW_TASK_QUERY.query_msg
  is '��ѯ��Ϣ';
comment on column QXFC.FC_FLOW_TASK_QUERY.status
  is '��ѯ״̬';
comment on column QXFC.FC_FLOW_TASK_QUERY.first_interval
  is '��ѯ���';
comment on column QXFC.FC_FLOW_TASK_QUERY.next_interval
  is '�´μ��';
comment on column QXFC.FC_FLOW_TASK_QUERY.next_time
  is '�´β�ѯʱ��';
comment on column QXFC.FC_FLOW_TASK_QUERY.scan_id
  is 'ɨ������';
comment on column QXFC.FC_FLOW_TASK_QUERY.start_time
  is '��ʼʱ��';
comment on column QXFC.FC_FLOW_TASK_QUERY.finish_time
  is '���ʱ��';
alter table QXFC.FC_FLOW_TASK_QUERY
  add constraint PK_TASK_QUERY_ID primary key (QID)
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
prompt Creating table FC_FUND_CHANGE_DOWN
prompt ==================================
prompt
create table QXFC.FC_FUND_CHANGE_DOWN
(
  id            NUMBER(20) not null,
  order_no      VARCHAR2(32) not null,
  channel_no    VARCHAR2(32) not null,
  down_order_no VARCHAR2(64) not null,
  change_type   NUMBER(20) not null,
  change_money  NUMBER(20,5) not null,
  old_balance   NUMBER(20,5) not null,
  after_balance NUMBER(20,5) not null,
  change_time   DATE default Sysdate not null,
  is_adjust     NUMBER(20) default 1 not null,
  operate_user  VARCHAR2(32) not null,
  operate_type  NUMBER(20) default 1 not null,
  remark        VARCHAR2(128),
  sync_status   NUMBER(20) default 20 not null,
  sync_end_time DATE,
  trade_fee     NUMBER default 0
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
comment on table QXFC.FC_FUND_CHANGE_DOWN
  is '�����ʽ�����';
comment on column QXFC.FC_FUND_CHANGE_DOWN.id
  is '���';
comment on column QXFC.FC_FUND_CHANGE_DOWN.order_no
  is '������';
comment on column QXFC.FC_FUND_CHANGE_DOWN.channel_no
  is '�����������';
comment on column QXFC.FC_FUND_CHANGE_DOWN.down_order_no
  is '���ζ�����';
comment on column QXFC.FC_FUND_CHANGE_DOWN.change_type
  is '�������1:�ۿ�;2:�ӿ�;3:�˿�';
comment on column QXFC.FC_FUND_CHANGE_DOWN.change_money
  is '������';
comment on column QXFC.FC_FUND_CHANGE_DOWN.old_balance
  is '�䶯ǰ���';
comment on column QXFC.FC_FUND_CHANGE_DOWN.after_balance
  is '�䶯�����';
comment on column QXFC.FC_FUND_CHANGE_DOWN.change_time
  is '���ʱ��';
comment on column QXFC.FC_FUND_CHANGE_DOWN.is_adjust
  is '�Ƿ����0:����;1:������';
comment on column QXFC.FC_FUND_CHANGE_DOWN.operate_user
  is '������';
comment on column QXFC.FC_FUND_CHANGE_DOWN.operate_type
  is '��������1:ϵͳ;2:�˹�';
comment on column QXFC.FC_FUND_CHANGE_DOWN.remark
  is '��ע';
comment on column QXFC.FC_FUND_CHANGE_DOWN.sync_status
  is 'ͬ��״̬20:�ȴ�ͬ��;30:����ͬ��;90:ͬ��ʧ��;0:ͬ���ɹ�';
comment on column QXFC.FC_FUND_CHANGE_DOWN.sync_end_time
  is 'ͬ�����ʱ��';
comment on column QXFC.FC_FUND_CHANGE_DOWN.trade_fee
  is '������';
alter table QXFC.FC_FUND_CHANGE_DOWN
  add constraint PK_FC_FUND_CHANGE_DOWN primary key (ID)
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
prompt Creating table FC_FUND_CHANGE_UP
prompt ================================
prompt
create table QXFC.FC_FUND_CHANGE_UP
(
  id            NUMBER(20) not null,
  order_no      VARCHAR2(32) not null,
  channel_no    VARCHAR2(32) not null,
  bind_id       VARCHAR2(64),
  change_type   NUMBER(20) not null,
  change_money  NUMBER(20,5) not null,
  old_balance   NUMBER(20,5) not null,
  after_balance NUMBER(20,5) not null,
  change_time   DATE default Sysdate not null,
  is_adjust     NUMBER(20) default 1 not null,
  operate_user  VARCHAR2(32) not null,
  operate_type  NUMBER(20) default 1 not null,
  remark        VARCHAR2(128),
  sync_status   NUMBER(20) default 20 not null,
  sync_time     DATE,
  sync_end_time DATE
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
comment on table QXFC.FC_FUND_CHANGE_UP
  is '�����ʽ�����';
comment on column QXFC.FC_FUND_CHANGE_UP.id
  is '���';
comment on column QXFC.FC_FUND_CHANGE_UP.order_no
  is '������';
comment on column QXFC.FC_FUND_CHANGE_UP.channel_no
  is '�����������';
comment on column QXFC.FC_FUND_CHANGE_UP.bind_id
  is '�󶨱��';
comment on column QXFC.FC_FUND_CHANGE_UP.change_type
  is '�������1:�ۿ�;2:�ӿ�;3:�˿�';
comment on column QXFC.FC_FUND_CHANGE_UP.change_money
  is '������';
comment on column QXFC.FC_FUND_CHANGE_UP.old_balance
  is '�䶯ǰ���';
comment on column QXFC.FC_FUND_CHANGE_UP.after_balance
  is '�䶯�����';
comment on column QXFC.FC_FUND_CHANGE_UP.change_time
  is '���ʱ��';
comment on column QXFC.FC_FUND_CHANGE_UP.is_adjust
  is '�Ƿ����0:����;1:������';
comment on column QXFC.FC_FUND_CHANGE_UP.operate_user
  is '������';
comment on column QXFC.FC_FUND_CHANGE_UP.operate_type
  is '��������1:ϵͳ;2:�˹�';
comment on column QXFC.FC_FUND_CHANGE_UP.remark
  is '��ע';
comment on column QXFC.FC_FUND_CHANGE_UP.sync_status
  is 'ͬ��״̬20:�ȴ�ͬ��;30:����ͬ��;90:ͬ��ʧ��;0:ͬ���ɹ�';
comment on column QXFC.FC_FUND_CHANGE_UP.sync_time
  is 'ͬ��ʱ��(�����ڲ�����ͬ���Ķ���)';
comment on column QXFC.FC_FUND_CHANGE_UP.sync_end_time
  is 'ͬ�����ʱ��';
alter table QXFC.FC_FUND_CHANGE_UP
  add constraint PK_FC_FUND_CHANGE_UP primary key (ID)
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
prompt Creating table FC_ICCID
prompt =======================
prompt
create table QXFC.FC_ICCID
(
  iccid        VARCHAR2(32) not null,
  carrier_no   VARCHAR2(32) default '*' not null,
  province_no  VARCHAR2(32) default 'QG' not null,
  city_no      VARCHAR2(32) default '*' not null,
  icc_type     NUMBER default 1 not null,
  status       NUMBER default 0 not null,
  create_time  DATE default sysdate not null,
  section_type VARCHAR2(32) default 1 not null
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
comment on table QXFC.FC_ICCID
  is 'ICCID����';
comment on column QXFC.FC_ICCID.iccid
  is 'ICCID';
comment on column QXFC.FC_ICCID.carrier_no
  is '��Ӫ��';
comment on column QXFC.FC_ICCID.province_no
  is 'ʡ��';
comment on column QXFC.FC_ICCID.city_no
  is '����';
comment on column QXFC.FC_ICCID.icc_type
  is '������ 1:����д��; 2:����������';
comment on column QXFC.FC_ICCID.status
  is '״̬ 0:����; 1:���� 2:��ʹ��';
comment on column QXFC.FC_ICCID.create_time
  is '����ʱ��';
comment on column QXFC.FC_ICCID.section_type
  is '�Ŷ�����';
alter table QXFC.FC_ICCID
  add constraint PK_ICCID primary key (ICCID)
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
prompt Creating table FC_NOTIFY_RECORD
prompt ===============================
prompt
create table QXFC.FC_NOTIFY_RECORD
(
  id            NUMBER(20) not null,
  order_no      VARCHAR2(32) not null,
  down_order_no VARCHAR2(64) not null,
  notify_type   NUMBER(20) default 1 not null,
  script_path   VARCHAR2(64) not null,
  notify_url    VARCHAR2(128) not null,
  svc_bus       VARCHAR2(32) not null,
  notify_cntr   NUMBER(20) default 0 not null,
  notify_limit  NUMBER(20) default 5 not null,
  interval      NUMBER(20) default 60 not null,
  ip            VARCHAR2(32),
  status        NUMBER(20) default 0 not null,
  scan_id       NUMBER(20),
  created_time  DATE default Sysdate not null,
  next_time     DATE,
  finish_time   DATE
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
comment on table QXFC.FC_NOTIFY_RECORD
  is '����֪ͨ��¼';
comment on column QXFC.FC_NOTIFY_RECORD.id
  is '֪ͨ��¼ID';
comment on column QXFC.FC_NOTIFY_RECORD.order_no
  is '������';
comment on column QXFC.FC_NOTIFY_RECORD.down_order_no
  is '���ζ�����';
comment on column QXFC.FC_NOTIFY_RECORD.notify_type
  is '֪ͨ����;1:ҵ��ɹ�֪ͨ;2:�˿�';
comment on column QXFC.FC_NOTIFY_RECORD.script_path
  is '�ű�·��';
comment on column QXFC.FC_NOTIFY_RECORD.notify_url
  is '֪ͨURL';
comment on column QXFC.FC_NOTIFY_RECORD.svc_bus
  is '������';
comment on column QXFC.FC_NOTIFY_RECORD.notify_cntr
  is '֪ͨ����';
comment on column QXFC.FC_NOTIFY_RECORD.notify_limit
  is '֪ͨ��������';
comment on column QXFC.FC_NOTIFY_RECORD.interval
  is '֪ͨ���,��λs';
comment on column QXFC.FC_NOTIFY_RECORD.ip
  is '֪ͨIP';
comment on column QXFC.FC_NOTIFY_RECORD.status
  is '״̬;20:�ȴ�;30:����֪ͨ;90:֪ͨʧ��;0:֪ͨ�ɹ�';
comment on column QXFC.FC_NOTIFY_RECORD.scan_id
  is '������';
comment on column QXFC.FC_NOTIFY_RECORD.created_time
  is '����ʱ��';
comment on column QXFC.FC_NOTIFY_RECORD.next_time
  is '�´�ʱ��';
comment on column QXFC.FC_NOTIFY_RECORD.finish_time
  is '���ʱ��';
alter table QXFC.FC_NOTIFY_RECORD
  add constraint PK_FC_NOTIFY_RECORD primary key (ID)
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
prompt Creating table FC_OPERATION
prompt ===========================
prompt
create table QXFC.FC_OPERATION
(
  op_id        NUMBER not null,
  key_id       VARCHAR2(1000),
  operate_type VARCHAR2(32),
  details      VARCHAR2(2000),
  operator     VARCHAR2(32),
  operate_time DATE default Sysdate not null,
  menu_path    VARCHAR2(100)
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
comment on column QXFC.FC_OPERATION.op_id
  is '�������';
comment on column QXFC.FC_OPERATION.key_id
  is '��������ID';
comment on column QXFC.FC_OPERATION.operate_type
  is '��������';
comment on column QXFC.FC_OPERATION.details
  is '��������';
comment on column QXFC.FC_OPERATION.operator
  is '������';
comment on column QXFC.FC_OPERATION.operate_time
  is '����ʱ��';
comment on column QXFC.FC_OPERATION.menu_path
  is '�˵�·��';

prompt
prompt Creating table FC_ORDER_BIND
prompt ============================
prompt
create table QXFC.FC_ORDER_BIND
(
  bind_id             VARCHAR2(32) not null,
  order_no            VARCHAR2(32) not null,
  down_order_no       VARCHAR2(64) not null,
  down_channel_no     VARCHAR2(32) not null,
  up_channel_no       VARCHAR2(32) not null,
  up_product_id       NUMBER(20) not null,
  up_account_id       NUMBER not null,
  up_order_no         VARCHAR2(32),
  face                NUMBER not null,
  down_price          NUMBER(20) not null,
  down_trade_fee      NUMBER(20,5) default 0 not null,
  up_cost             NUMBER(20) not null,
  up_reward           NUMBER(20,5) default 0 not null,
  phone_no            VARCHAR2(32),
  package_id          NUMBER(20) not null,
  product_type        NUMBER(20) not null,
  script_id           NUMBER(20),
  script_path         VARCHAR2(64),
  svc_bus             VARCHAR2(64),
  ip                  VARCHAR2(32),
  bind_time           DATE default Sysdate not null,
  end_time            DATE,
  delivery_start_time DATE,
  delivery_end_time   DATE,
  delivery_msg        VARCHAR2(256),
  query_msg           VARCHAR2(256),
  scan_id             NUMBER(20),
  next_time           DATE,
  bind_status         NUMBER(20) default 20 not null,
  manual_status       NUMBER(20) default 10 not null,
  refund_status       NUMBER(20) default 10 not null,
  refund_start_time   DATE,
  refund_end_time     DATE,
  action              VARCHAR2(32),
  flow_id             NUMBER not null
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
comment on table QXFC.FC_ORDER_BIND
  is '�󶨱�';
comment on column QXFC.FC_ORDER_BIND.bind_id
  is '���';
comment on column QXFC.FC_ORDER_BIND.order_no
  is '������';
comment on column QXFC.FC_ORDER_BIND.down_order_no
  is '���ζ�����';
comment on column QXFC.FC_ORDER_BIND.down_channel_no
  is '�����������';
comment on column QXFC.FC_ORDER_BIND.up_channel_no
  is '��������';
comment on column QXFC.FC_ORDER_BIND.up_product_id
  is '���β�ƷID';
comment on column QXFC.FC_ORDER_BIND.up_account_id
  is '�����ʺ�';
comment on column QXFC.FC_ORDER_BIND.up_order_no
  is '���ζ�����';
comment on column QXFC.FC_ORDER_BIND.face
  is '��ֵ';
comment on column QXFC.FC_ORDER_BIND.down_price
  is '�����ۼ�';
comment on column QXFC.FC_ORDER_BIND.down_trade_fee
  is '���ν���������';
comment on column QXFC.FC_ORDER_BIND.up_cost
  is '���γɱ�';
comment on column QXFC.FC_ORDER_BIND.up_reward
  is '����Ӷ��';
comment on column QXFC.FC_ORDER_BIND.phone_no
  is '�ֻ���';
comment on column QXFC.FC_ORDER_BIND.package_id
  is '�ײͱ��';
comment on column QXFC.FC_ORDER_BIND.product_type
  is '��Ʒ����';
comment on column QXFC.FC_ORDER_BIND.script_id
  is '�ű�ID';
comment on column QXFC.FC_ORDER_BIND.script_path
  is '�ű�·��';
comment on column QXFC.FC_ORDER_BIND.svc_bus
  is '���߷���';
comment on column QXFC.FC_ORDER_BIND.ip
  is '����IP';
comment on column QXFC.FC_ORDER_BIND.bind_time
  is '��ʱ��';
comment on column QXFC.FC_ORDER_BIND.end_time
  is '�󶨽���ʱ��';
comment on column QXFC.FC_ORDER_BIND.delivery_start_time
  is '������ʼʱ��';
comment on column QXFC.FC_ORDER_BIND.delivery_end_time
  is '��������ʱ��';
comment on column QXFC.FC_ORDER_BIND.delivery_msg
  is '������Ϣ';
comment on column QXFC.FC_ORDER_BIND.query_msg
  is '��ѯ��Ϣ';
comment on column QXFC.FC_ORDER_BIND.scan_id
  is '��ɨ��ID';
comment on column QXFC.FC_ORDER_BIND.next_time
  is '�´�ʱ��';
comment on column QXFC.FC_ORDER_BIND.bind_status
  is '��״̬;20:�ȴ�;30:���ڰ�;90:ʧ��;0:�ɹ�';
comment on column QXFC.FC_ORDER_BIND.manual_status
  is '�˹����״̬;10:���账��;20:�ȴ�;30:���ڴ���;90:ʧ��;0:�ɹ�';
comment on column QXFC.FC_ORDER_BIND.refund_status
  is '�˿�״̬;10:���账��;20:�ȴ�;30:�����˿�;90:ʧ��;0:�ɹ�';
comment on column QXFC.FC_ORDER_BIND.refund_start_time
  is '�˿�����ʱ��';
comment on column QXFC.FC_ORDER_BIND.refund_end_time
  is '�˿����ʱ��';
comment on column QXFC.FC_ORDER_BIND.action
  is '��ǰ����';
comment on column QXFC.FC_ORDER_BIND.flow_id
  is '���̱��';
alter table QXFC.FC_ORDER_BIND
  add constraint PK_FC_ORDER_BIND primary key (BIND_ID)
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
prompt Creating table FC_ORDER_EXPRESS
prompt ===============================
prompt
create table QXFC.FC_ORDER_EXPRESS
(
  id              NUMBER(20) not null,
  taskid          NUMBER not null,
  order_no        VARCHAR2(32) not null,
  down_order_no   VARCHAR2(64) not null,
  down_channel_no VARCHAR2(32) not null,
  order_time      DATE,
  target_name     VARCHAR2(32),
  target_phone    VARCHAR2(32),
  target_address  VARCHAR2(128),
  express_no      VARCHAR2(32),
  express_name    VARCHAR2(32),
  express_fee     NUMBER(20) default 0,
  create_time     DATE default Sysdate,
  express_status  NUMBER default 10 not null,
  result_msg      VARCHAR2(128),
  operate_user    VARCHAR2(32),
  edit_user       VARCHAR2(32),
  edit_time       DATE,
  finish_time     DATE
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
comment on table QXFC.FC_ORDER_EXPRESS
  is '��ݷ�����¼��';
comment on column QXFC.FC_ORDER_EXPRESS.id
  is '���';
comment on column QXFC.FC_ORDER_EXPRESS.taskid
  is '������';
comment on column QXFC.FC_ORDER_EXPRESS.order_no
  is '������';
comment on column QXFC.FC_ORDER_EXPRESS.down_order_no
  is '���ζ�����';
comment on column QXFC.FC_ORDER_EXPRESS.down_channel_no
  is '�����������';
comment on column QXFC.FC_ORDER_EXPRESS.order_time
  is '�µ�ʱ��';
comment on column QXFC.FC_ORDER_EXPRESS.target_name
  is '�ռ���';
comment on column QXFC.FC_ORDER_EXPRESS.target_phone
  is '�ռ����ֻ���';
comment on column QXFC.FC_ORDER_EXPRESS.target_address
  is '�ջ���ַ';
comment on column QXFC.FC_ORDER_EXPRESS.express_no
  is '��ݵ���';
comment on column QXFC.FC_ORDER_EXPRESS.express_name
  is '��ݹ�˾����';
comment on column QXFC.FC_ORDER_EXPRESS.express_fee
  is '��ݷ�';
comment on column QXFC.FC_ORDER_EXPRESS.create_time
  is '����ʱ��';
comment on column QXFC.FC_ORDER_EXPRESS.express_status
  is '���״̬ 20:�ȴ���ӡ����; 30:��ӡ; 40:�ȴ���è����; 90:����ʧ��; 0:�ɹ�';
comment on column QXFC.FC_ORDER_EXPRESS.result_msg
  is '��Ϣ';
comment on column QXFC.FC_ORDER_EXPRESS.operate_user
  is '�ļ���';
comment on column QXFC.FC_ORDER_EXPRESS.edit_user
  is '������';
comment on column QXFC.FC_ORDER_EXPRESS.edit_time
  is '����ʱ��';
comment on column QXFC.FC_ORDER_EXPRESS.finish_time
  is '���ʱ��';
alter table QXFC.FC_ORDER_EXPRESS
  add constraint PK_FC_ORDER_DELIVERY primary key (ID)
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
prompt Creating table FC_ORDER_EXT
prompt ===========================
prompt
create table QXFC.FC_ORDER_EXT
(
  order_no         VARCHAR2(32) not null,
  active_real_name VARCHAR2(32),
  active_idno      VARCHAR2(32),
  brand_no         VARCHAR2(32),
  buyer_nick       VARCHAR2(32),
  buyer_alipay_id  VARCHAR2(32),
  pay_order_no     VARCHAR2(64),
  buyer_name       VARCHAR2(32),
  buyer_phone      VARCHAR2(32),
  buyer_address    VARCHAR2(128),
  buyer_message    VARCHAR2(128),
  iccno            VARCHAR2(64),
  write_card       NUMBER,
  tmall_status     VARCHAR2(32),
  tmall_order_date DATE,
  install_address  VARCHAR2(128),
  buyer_province   VARCHAR2(32),
  buyer_city       VARCHAR2(32),
  icc_type         NUMBER,
  install_date     DATE,
  ext_info         VARCHAR2(512),
  is_wuliu         NUMBER default 0
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
comment on column QXFC.FC_ORDER_EXT.order_no
  is '������';
comment on column QXFC.FC_ORDER_EXT.active_real_name
  is '�ſ�ʵ����';
comment on column QXFC.FC_ORDER_EXT.active_idno
  is '�ſ�ʵ�����֤��';
comment on column QXFC.FC_ORDER_EXT.brand_no
  is '��ҿ���ʺ�';
comment on column QXFC.FC_ORDER_EXT.buyer_nick
  is '�������';
comment on column QXFC.FC_ORDER_EXT.buyer_alipay_id
  is '���֧�����ʺ�';
comment on column QXFC.FC_ORDER_EXT.pay_order_no
  is '֧��������';
comment on column QXFC.FC_ORDER_EXT.buyer_name
  is '�������';
comment on column QXFC.FC_ORDER_EXT.buyer_phone
  is '�ռ����ֻ���';
comment on column QXFC.FC_ORDER_EXT.buyer_address
  is '��ҵ�ַ';
comment on column QXFC.FC_ORDER_EXT.buyer_message
  is '�������';
comment on column QXFC.FC_ORDER_EXT.iccno
  is 'ICC���к�';
comment on column QXFC.FC_ORDER_EXT.write_card
  is '�Ƿ����Զ�д�� 0:�Զ� 1:�˹�';
comment on column QXFC.FC_ORDER_EXT.tmall_status
  is '��è����״̬';
comment on column QXFC.FC_ORDER_EXT.tmall_order_date
  is '��è����ʱ��';
comment on column QXFC.FC_ORDER_EXT.install_address
  is '��װ��ַ';
comment on column QXFC.FC_ORDER_EXT.buyer_province
  is '���ʡ��';
comment on column QXFC.FC_ORDER_EXT.buyer_city
  is '����';
comment on column QXFC.FC_ORDER_EXT.icc_type
  is '������ ͬ���β�Ʒ���iccType';
comment on column QXFC.FC_ORDER_EXT.install_date
  is '��װʱ��';
comment on column QXFC.FC_ORDER_EXT.ext_info
  is '��չ��Ϣ';
comment on column QXFC.FC_ORDER_EXT.is_wuliu
  is '�Ƿ���Ҫ����, 0:��Ҫ 1:����Ҫ';
alter table QXFC.FC_ORDER_EXT
  add constraint PK_ORDER_EXT_ORDER_NO primary key (ORDER_NO)
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
prompt Creating table FC_ORDER_MAIN
prompt ============================
prompt
create table QXFC.FC_ORDER_MAIN
(
  order_no        VARCHAR2(32) not null,
  down_order_no   VARCHAR2(64) not null,
  down_channel_no VARCHAR2(32) not null,
  down_product_no VARCHAR2(32) not null,
  down_product_id NUMBER(20) not null,
  product_name    VARCHAR2(32) not null,
  package_id      NUMBER(20) not null,
  product_type    NUMBER(20) not null,
  carrier_no      VARCHAR2(32) not null,
  province_no     VARCHAR2(32) not null,
  city_no         VARCHAR2(32) not null,
  active_phone    VARCHAR2(32),
  old_phone       VARCHAR2(32),
  face            NUMBER(20,5) not null,
  pay_fee         NUMBER(20,5) not null,
  trade_fee       NUMBER(20,5) default 0 not null,
  buy_cntr        NUMBER(20) default 1,
  trial_day       NUMBER(20) not null,
  auto_active     NUMBER(20) not null,
  request_time    DATE not null,
  order_timeout   DATE,
  order_status    NUMBER(20) default 10 not null,
  refund_status   NUMBER(20),
  refund_time     DATE,
  active_status   NUMBER(20) default 90 not null,
  active_time     DATE,
  active_timeout  DATE,
  notify_status   NUMBER(20) default 10 not null,
  error_code      NUMBER(20),
  error_msg       VARCHAR2(128),
  scan_id         NUMBER(20),
  bind_ip         VARCHAR2(32),
  next_bind_time  DATE,
  finish_time     DATE,
  remark          VARCHAR2(128),
  ext1            VARCHAR2(128),
  ext2            VARCHAR2(128),
  action          VARCHAR2(32),
  flow_id         NUMBER not null,
  action_no       NUMBER
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
comment on table QXFC.FC_ORDER_MAIN
  is '������';
comment on column QXFC.FC_ORDER_MAIN.order_no
  is '������';
comment on column QXFC.FC_ORDER_MAIN.down_order_no
  is '���ζ�����';
comment on column QXFC.FC_ORDER_MAIN.down_channel_no
  is '�����������';
comment on column QXFC.FC_ORDER_MAIN.down_product_no
  is '���β�Ʒ����';
comment on column QXFC.FC_ORDER_MAIN.down_product_id
  is '���β�ƷID';
comment on column QXFC.FC_ORDER_MAIN.product_name
  is '��Ʒ����';
comment on column QXFC.FC_ORDER_MAIN.package_id
  is '�ײͱ��';
comment on column QXFC.FC_ORDER_MAIN.product_type
  is '��Ʒ����';
comment on column QXFC.FC_ORDER_MAIN.carrier_no
  is '��Ӫ��';
comment on column QXFC.FC_ORDER_MAIN.province_no
  is 'ʡ��;QG:ȫ��';
comment on column QXFC.FC_ORDER_MAIN.city_no
  is '����:*:ȫ��';
comment on column QXFC.FC_ORDER_MAIN.active_phone
  is '�����ֻ���';
comment on column QXFC.FC_ORDER_MAIN.old_phone
  is 'δ����ɹ����ֻ���';
comment on column QXFC.FC_ORDER_MAIN.face
  is '��ֵ';
comment on column QXFC.FC_ORDER_MAIN.pay_fee
  is '֧�����';
comment on column QXFC.FC_ORDER_MAIN.trade_fee
  is '����������';
comment on column QXFC.FC_ORDER_MAIN.buy_cntr
  is '����';
comment on column QXFC.FC_ORDER_MAIN.trial_day
  is '������';
comment on column QXFC.FC_ORDER_MAIN.auto_active
  is '�Ƿ��Զ�����';
comment on column QXFC.FC_ORDER_MAIN.request_time
  is '����ʱ��';
comment on column QXFC.FC_ORDER_MAIN.order_timeout
  is '������ʱʱ��';
comment on column QXFC.FC_ORDER_MAIN.order_status
  is '����״̬';
comment on column QXFC.FC_ORDER_MAIN.refund_status
  is '�˿�״̬';
comment on column QXFC.FC_ORDER_MAIN.refund_time
  is '�˿�ʱ��';
comment on column QXFC.FC_ORDER_MAIN.active_status
  is '����״̬0:ת��/����90:δת��/δ����';
comment on column QXFC.FC_ORDER_MAIN.active_time
  is '����ʱ��';
comment on column QXFC.FC_ORDER_MAIN.active_timeout
  is '���ʱʱ��';
comment on column QXFC.FC_ORDER_MAIN.notify_status
  is '֪ͨ״̬';
comment on column QXFC.FC_ORDER_MAIN.error_code
  is '������';
comment on column QXFC.FC_ORDER_MAIN.error_msg
  is '������Ϣ';
comment on column QXFC.FC_ORDER_MAIN.scan_id
  is 'ɨ������';
comment on column QXFC.FC_ORDER_MAIN.bind_ip
  is '��IP';
comment on column QXFC.FC_ORDER_MAIN.next_bind_time
  is '�´ΰ�ʱ��';
comment on column QXFC.FC_ORDER_MAIN.finish_time
  is '�������ʱ��';
comment on column QXFC.FC_ORDER_MAIN.remark
  is '��ע';
comment on column QXFC.FC_ORDER_MAIN.ext1
  is '��չ1';
comment on column QXFC.FC_ORDER_MAIN.ext2
  is '��չ2';
comment on column QXFC.FC_ORDER_MAIN.action
  is '��ǰ����';
comment on column QXFC.FC_ORDER_MAIN.flow_id
  is '���̱��';
comment on column QXFC.FC_ORDER_MAIN.action_no
  is '���̲��� action��Ӧ�����';
alter table QXFC.FC_ORDER_MAIN
  add constraint PK_FC_ORDER_MAIN primary key (ORDER_NO)
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
prompt Creating table FC_ORDER_OPERATE
prompt ===============================
prompt
create table QXFC.FC_ORDER_OPERATE
(
  id           NUMBER(20) not null,
  order_no     VARCHAR2(32) not null,
  bind_id      VARCHAR2(64),
  task_id      NUMBER,
  operate_user VARCHAR2(32),
  operate_type NUMBER(20) default 1 not null,
  ip           VARCHAR2(32),
  remark       VARCHAR2(128),
  created_time DATE default sysdate
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
comment on table QXFC.FC_ORDER_OPERATE
  is '����������¼';
comment on column QXFC.FC_ORDER_OPERATE.id
  is '���';
comment on column QXFC.FC_ORDER_OPERATE.order_no
  is '������';
comment on column QXFC.FC_ORDER_OPERATE.bind_id
  is '�󶨱��';
comment on column QXFC.FC_ORDER_OPERATE.task_id
  is '������';
comment on column QXFC.FC_ORDER_OPERATE.operate_user
  is '������';
comment on column QXFC.FC_ORDER_OPERATE.operate_type
  is '��������1:ϵͳ;2:�˹�';
comment on column QXFC.FC_ORDER_OPERATE.ip
  is 'IP';
comment on column QXFC.FC_ORDER_OPERATE.remark
  is '��ע';
comment on column QXFC.FC_ORDER_OPERATE.created_time
  is '����ʱ��';
alter table QXFC.FC_ORDER_OPERATE
  add constraint PK_ORDER_OPERATE_ID primary key (ID)
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
prompt Creating table FC_ORDER_REFUND
prompt ==============================
prompt
create table QXFC.FC_ORDER_REFUND
(
  id                  NUMBER(20) not null,
  order_no            VARCHAR2(32) not null,
  down_order_no       VARCHAR2(64) not null,
  down_channel_no     VARCHAR2(32) not null,
  down_product_no     VARCHAR2(32),
  product_name        VARCHAR2(128),
  buyer_nick          VARCHAR2(64),
  tmall_refund_id     VARCHAR2(64),
  tmall_refund_date   DATE,
  tmall_refund_status VARCHAR2(32),
  reason              VARCHAR2(128),
  message             VARCHAR2(4000),
  tmall_goods_status  VARCHAR2(32),
  tmall_order_status  VARCHAR2(32),
  refund_fee          NUMBER(20),
  pay_order_no        VARCHAR2(32),
  from_account        VARCHAR2(64),
  to_account          VARCHAR2(64),
  refund_status       NUMBER(20) default 10 not null,
  result_msg          VARCHAR2(128),
  refund_type         NUMBER(20) default 1,
  finish_time         DATE,
  created_user        VARCHAR2(32),
  created_time        DATE default Sysdate not null,
  edit_user           VARCHAR2(32),
  edit_time           DATE,
  confirm_user        VARCHAR2(32)
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
comment on table QXFC.FC_ORDER_REFUND
  is '�˿��¼��';
comment on column QXFC.FC_ORDER_REFUND.id
  is '���';
comment on column QXFC.FC_ORDER_REFUND.order_no
  is '������';
comment on column QXFC.FC_ORDER_REFUND.down_order_no
  is '���ζ�����';
comment on column QXFC.FC_ORDER_REFUND.down_channel_no
  is '�����������';
comment on column QXFC.FC_ORDER_REFUND.down_product_no
  is '���β�Ʒ���';
comment on column QXFC.FC_ORDER_REFUND.product_name
  is '��Ʒ����';
comment on column QXFC.FC_ORDER_REFUND.buyer_nick
  is '�������';
comment on column QXFC.FC_ORDER_REFUND.tmall_refund_id
  is '��è�˿����';
comment on column QXFC.FC_ORDER_REFUND.tmall_refund_date
  is '��è�˿�ʱ��';
comment on column QXFC.FC_ORDER_REFUND.tmall_refund_status
  is '��è�˿����';
comment on column QXFC.FC_ORDER_REFUND.reason
  is '�˿�ԭ��';
comment on column QXFC.FC_ORDER_REFUND.message
  is '��Ϣ';
comment on column QXFC.FC_ORDER_REFUND.tmall_goods_status
  is '����״̬';
comment on column QXFC.FC_ORDER_REFUND.tmall_order_status
  is '��è����״̬';
comment on column QXFC.FC_ORDER_REFUND.refund_fee
  is '���';
comment on column QXFC.FC_ORDER_REFUND.pay_order_no
  is '֧��������';
comment on column QXFC.FC_ORDER_REFUND.from_account
  is '�˿��˻�';
comment on column QXFC.FC_ORDER_REFUND.to_account
  is '�տ��˻�';
comment on column QXFC.FC_ORDER_REFUND.refund_status
  is '�˿�״̬0:�ɹ�;10:�ȴ���ʵ;20:�ȴ�;30:�����˿�90:�˿�ʧ��';
comment on column QXFC.FC_ORDER_REFUND.result_msg
  is '�����Ϣ';
comment on column QXFC.FC_ORDER_REFUND.refund_type
  is '�˿�����1:�����˿�;2:�����˿�';
comment on column QXFC.FC_ORDER_REFUND.finish_time
  is '����ʱ��';
comment on column QXFC.FC_ORDER_REFUND.created_user
  is '������';
comment on column QXFC.FC_ORDER_REFUND.created_time
  is '����ʱ��';
comment on column QXFC.FC_ORDER_REFUND.edit_user
  is '������';
comment on column QXFC.FC_ORDER_REFUND.edit_time
  is '����ʱ��';
comment on column QXFC.FC_ORDER_REFUND.confirm_user
  is 'ȷ����';
alter table QXFC.FC_ORDER_REFUND
  add constraint PK_FC_ORDER_REFUND primary key (ID)
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
prompt Creating table FC_PHONE_CHARGE
prompt ==============================
prompt
create table QXFC.FC_PHONE_CHARGE
(
  id            NUMBER not null,
  phone         VARCHAR2(32) not null,
  face          NUMBER not null,
  remark        VARCHAR2(128),
  create_time   DATE default sysdate not null,
  creator       VARCHAR2(32) not null,
  status        NUMBER default 20 not null,
  order_no      VARCHAR2(64),
  charge_time   DATE,
  result_msg    VARCHAR2(128),
  activate_time DATE
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
comment on table QXFC.FC_PHONE_CHARGE
  is '����仰�Ѽ�¼';
comment on column QXFC.FC_PHONE_CHARGE.remark
  is '��ע';
comment on column QXFC.FC_PHONE_CHARGE.creator
  is '������';
comment on column QXFC.FC_PHONE_CHARGE.status
  is 'ͬprocess_status';
comment on column QXFC.FC_PHONE_CHARGE.activate_time
  is '����ʱ��';
create index QXFC.IDX_CHARGE_PHONE on QXFC.FC_PHONE_CHARGE (PHONE)
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
create index QXFC.IDX_CHARGE_STATUS on QXFC.FC_PHONE_CHARGE (STATUS)
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
prompt Creating table FC_PRODUCT_PACKAGE
prompt =================================
prompt
create table QXFC.FC_PRODUCT_PACKAGE
(
  pkg_id       NUMBER not null,
  pkg_name     VARCHAR2(32) not null,
  predeposit   NUMBER default 0 not null,
  month_rent   NUMBER default 1 not null,
  status       NUMBER default 0 not null,
  created_user VARCHAR2(32) not null,
  created_time DATE default sysdate not null,
  edit_user    VARCHAR2(32),
  edit_time    DATE
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
comment on table QXFC.FC_PRODUCT_PACKAGE
  is '��Ʒ�ײͱ�';
comment on column QXFC.FC_PRODUCT_PACKAGE.pkg_id
  is '������';
comment on column QXFC.FC_PRODUCT_PACKAGE.pkg_name
  is '��������';
comment on column QXFC.FC_PRODUCT_PACKAGE.predeposit
  is 'Ԥ����';
comment on column QXFC.FC_PRODUCT_PACKAGE.month_rent
  is '����';
comment on column QXFC.FC_PRODUCT_PACKAGE.status
  is '״̬ 0:����; 1:����';
comment on column QXFC.FC_PRODUCT_PACKAGE.created_user
  is '������';
comment on column QXFC.FC_PRODUCT_PACKAGE.created_time
  is '����ʱ��';
comment on column QXFC.FC_PRODUCT_PACKAGE.edit_user
  is '������';
comment on column QXFC.FC_PRODUCT_PACKAGE.edit_time
  is '����ʱ��';

prompt
prompt Creating table FC_PRODUCT_TYPE
prompt ==============================
prompt
create table QXFC.FC_PRODUCT_TYPE
(
  type_id      NUMBER(20) not null,
  type_name    VARCHAR2(32) not null,
  status       NUMBER(20) default 0 not null,
  created_user VARCHAR2(32) not null,
  created_time DATE default Sysdate not null,
  edit_user    VARCHAR2(32),
  edit_time    DATE
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
comment on table QXFC.FC_PRODUCT_TYPE
  is '��Ʒ�����(������/������...)';
comment on column QXFC.FC_PRODUCT_TYPE.type_id
  is '����ID';
comment on column QXFC.FC_PRODUCT_TYPE.type_name
  is '��������';
comment on column QXFC.FC_PRODUCT_TYPE.status
  is '״̬0:����;1:����';
comment on column QXFC.FC_PRODUCT_TYPE.created_user
  is '������';
comment on column QXFC.FC_PRODUCT_TYPE.created_time
  is '����ʱ��';
comment on column QXFC.FC_PRODUCT_TYPE.edit_user
  is '������';
comment on column QXFC.FC_PRODUCT_TYPE.edit_time
  is '����ʱ��';
alter table QXFC.FC_PRODUCT_TYPE
  add constraint PK_FC_PRODUCT_TYPE primary key (TYPE_ID)
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
prompt Creating table FC_SCAN_CONFIG
prompt =============================
prompt
create table QXFC.FC_SCAN_CONFIG
(
  scan_name      VARCHAR2(32) not null,
  scan_title     VARCHAR2(100) not null,
  scan_interval  NUMBER default 20 not null,
  once_count     NUMBER default 1000 not null,
  do_interval    NUMBER default 60,
  status         NUMBER default 0,
  last_exec_time DATE default sysdate not null,
  next_exec_time DATE default sysdate not null,
  last_exec_ip   VARCHAR2(32)
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
comment on table QXFC.FC_SCAN_CONFIG
  is '������';
comment on column QXFC.FC_SCAN_CONFIG.scan_name
  is '����';
comment on column QXFC.FC_SCAN_CONFIG.scan_title
  is '����';
comment on column QXFC.FC_SCAN_CONFIG.scan_interval
  is '��ɨ����(��)';
comment on column QXFC.FC_SCAN_CONFIG.once_count
  is '��һ�ζ���������';
comment on column QXFC.FC_SCAN_CONFIG.do_interval
  is '�󲹼��(��),�´��������ʱ��';
comment on column QXFC.FC_SCAN_CONFIG.status
  is '״̬';
comment on column QXFC.FC_SCAN_CONFIG.last_exec_time
  is '���ִ��ʱ��';
comment on column QXFC.FC_SCAN_CONFIG.next_exec_time
  is '�´�ִ��ʱ��';
comment on column QXFC.FC_SCAN_CONFIG.last_exec_ip
  is 'ִ��ip';

prompt
prompt Creating table FC_SMS_RECORD
prompt ============================
prompt
create table QXFC.FC_SMS_RECORD
(
  sms_no          VARCHAR2(32) not null,
  down_channel_no VARCHAR2(32) not null,
  down_order_no   VARCHAR2(32),
  product_no      VARCHAR2(32),
  phone           VARCHAR2(32) not null,
  carrier_no      VARCHAR2(32),
  province_no     VARCHAR2(32),
  city_no         VARCHAR2(32),
  up_channel_no   VARCHAR2(32),
  up_product_no   VARCHAR2(32),
  up_account_id   NUMBER,
  up_product_id   NUMBER,
  script_id       NUMBER,
  api_url         VARCHAR2(256),
  status          NUMBER default 20,
  msg             VARCHAR2(128),
  create_time     DATE default sysdate,
  cookie          VARCHAR2(512),
  ip              VARCHAR2(32)
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
comment on column QXFC.FC_SMS_RECORD.sms_no
  is '���';
comment on column QXFC.FC_SMS_RECORD.down_channel_no
  is '�����������';
comment on column QXFC.FC_SMS_RECORD.down_order_no
  is '���ζ�����';
comment on column QXFC.FC_SMS_RECORD.product_no
  is '��Ʒ���';
comment on column QXFC.FC_SMS_RECORD.phone
  is '�ֻ���';
comment on column QXFC.FC_SMS_RECORD.carrier_no
  is '��Ӫ��';
comment on column QXFC.FC_SMS_RECORD.province_no
  is 'ʡ��';
comment on column QXFC.FC_SMS_RECORD.city_no
  is '����';
comment on column QXFC.FC_SMS_RECORD.up_channel_no
  is '��������';
comment on column QXFC.FC_SMS_RECORD.up_product_no
  is '���β�Ʒ���';
comment on column QXFC.FC_SMS_RECORD.up_account_id
  is '�����ʺ�ID';
comment on column QXFC.FC_SMS_RECORD.up_product_id
  is '���β�ƷID';
comment on column QXFC.FC_SMS_RECORD.script_id
  is '�ű�ID';
comment on column QXFC.FC_SMS_RECORD.api_url
  is '�ӿڵ�ַ';
comment on column QXFC.FC_SMS_RECORD.status
  is '״̬';
comment on column QXFC.FC_SMS_RECORD.msg
  is '�����Ϣ';
comment on column QXFC.FC_SMS_RECORD.create_time
  is '����ʱ��';
comment on column QXFC.FC_SMS_RECORD.cookie
  is 'cookie';
comment on column QXFC.FC_SMS_RECORD.ip
  is 'IP';

prompt
prompt Creating table FC_SYSTEM_CITY
prompt =============================
prompt
create table QXFC.FC_SYSTEM_CITY
(
  city_no     VARCHAR2(10) not null,
  city_name   VARCHAR2(40),
  status      NUMBER(1) default 0,
  province_no VARCHAR2(4),
  code        VARCHAR2(32)
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
comment on table QXFC.FC_SYSTEM_CITY
  is '���б�';
comment on column QXFC.FC_SYSTEM_CITY.city_no
  is '�б��';
comment on column QXFC.FC_SYSTEM_CITY.city_name
  is '����';
comment on column QXFC.FC_SYSTEM_CITY.status
  is '״̬';
comment on column QXFC.FC_SYSTEM_CITY.province_no
  is 'ʡid';

prompt
prompt Creating table FC_SYSTEM_DICTIONARY
prompt ===================================
prompt
create table QXFC.FC_SYSTEM_DICTIONARY
(
  dic_id NUMBER not null,
  name   VARCHAR2(32) not null,
  value  VARCHAR2(32) not null,
  short  NUMBER default 0,
  type   VARCHAR2(32) not null
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
comment on table QXFC.FC_SYSTEM_DICTIONARY
  is '�����ֵ�';
comment on column QXFC.FC_SYSTEM_DICTIONARY.dic_id
  is '�ֵ���';
comment on column QXFC.FC_SYSTEM_DICTIONARY.name
  is '�ֵ�����';
comment on column QXFC.FC_SYSTEM_DICTIONARY.value
  is '�ֵ�ֵ';
comment on column QXFC.FC_SYSTEM_DICTIONARY.short
  is '����';
comment on column QXFC.FC_SYSTEM_DICTIONARY.type
  is '����';

prompt
prompt Creating table FC_SYSTEM_LOG
prompt ============================
prompt
create table QXFC.FC_SYSTEM_LOG
(
  id           NUMBER(20) not null,
  object_name  VARCHAR2(60),
  error_level  NUMBER(20) default 3,
  error_desc   VARCHAR2(256),
  trace_info   VARCHAR2(516),
  created_time DATE default sysdate
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
comment on column QXFC.FC_SYSTEM_LOG.id
  is '���';
comment on column QXFC.FC_SYSTEM_LOG.object_name
  is '����';
comment on column QXFC.FC_SYSTEM_LOG.error_level
  is '���󼶱�';
comment on column QXFC.FC_SYSTEM_LOG.error_desc
  is '������Ϣ';
comment on column QXFC.FC_SYSTEM_LOG.trace_info
  is '��ջ��Ϣ';
comment on column QXFC.FC_SYSTEM_LOG.created_time
  is '����ʱ��';

prompt
prompt Creating table FC_SYSTEM_PROVINCE
prompt =================================
prompt
create table QXFC.FC_SYSTEM_PROVINCE
(
  province_no   VARCHAR2(4) not null,
  province_name VARCHAR2(32) not null,
  status        NUMBER(1) not null,
  short         NUMBER default 0
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
comment on table QXFC.FC_SYSTEM_PROVINCE
  is 'ʡ�ݱ�';
comment on column QXFC.FC_SYSTEM_PROVINCE.province_no
  is 'ʡ���';
comment on column QXFC.FC_SYSTEM_PROVINCE.province_name
  is '����';
comment on column QXFC.FC_SYSTEM_PROVINCE.status
  is '״̬';
comment on column QXFC.FC_SYSTEM_PROVINCE.short
  is '����';

prompt
prompt Creating table FC_TRADE_ANALYSE
prompt ===============================
prompt
create table QXFC.FC_TRADE_ANALYSE
(
  trade_date      DATE,
  down_channel_no VARCHAR2(32),
  up_channel_no   VARCHAR2(32),
  carrier_no      VARCHAR2(32),
  province_no     VARCHAR2(10),
  city_no         VARCHAR2(32),
  product_type    NUMBER(20),
  package_type    NUMBER,
  product_no      VARCHAR2(32),
  total_cntr      NUMBER(20),
  total_fee       NUMBER(20,5),
  trade_fee       NUMBER(20,5),
  refund_fee      NUMBER(20,5),
  express_fee     NUMBER(20,5),
  up_cost         NUMBER(20,5),
  up_reward       NUMBER(20,5)
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
comment on table QXFC.FC_TRADE_ANALYSE
  is '���ν��ױ���';
comment on column QXFC.FC_TRADE_ANALYSE.trade_date
  is '����ʱ��';
comment on column QXFC.FC_TRADE_ANALYSE.down_channel_no
  is '�����������';
comment on column QXFC.FC_TRADE_ANALYSE.up_channel_no
  is '�����������';
comment on column QXFC.FC_TRADE_ANALYSE.carrier_no
  is '��Ӫ��';
comment on column QXFC.FC_TRADE_ANALYSE.province_no
  is 'ʡ��';
comment on column QXFC.FC_TRADE_ANALYSE.city_no
  is '����';
comment on column QXFC.FC_TRADE_ANALYSE.product_type
  is '��Ʒ����';
comment on column QXFC.FC_TRADE_ANALYSE.package_type
  is '�ײ�';
comment on column QXFC.FC_TRADE_ANALYSE.product_no
  is '��Ʒ����';
comment on column QXFC.FC_TRADE_ANALYSE.total_cntr
  is '��������';
comment on column QXFC.FC_TRADE_ANALYSE.total_fee
  is '�ɹ����';
comment on column QXFC.FC_TRADE_ANALYSE.trade_fee
  is '�ɹ���ֵ';
comment on column QXFC.FC_TRADE_ANALYSE.refund_fee
  is '�˿���';
comment on column QXFC.FC_TRADE_ANALYSE.express_fee
  is '��ݷ�';
comment on column QXFC.FC_TRADE_ANALYSE.up_cost
  is '���γɱ�';
comment on column QXFC.FC_TRADE_ANALYSE.up_reward
  is '���η�Ӷ';

prompt
prompt Creating table FC_TRADE_DOWN
prompt ============================
prompt
create table QXFC.FC_TRADE_DOWN
(
  trade_date      DATE,
  down_channel_no VARCHAR2(32),
  carrier_no      VARCHAR2(32),
  province_no     VARCHAR2(10),
  city_no         VARCHAR2(32),
  product_type    NUMBER(20),
  package_type    NUMBER,
  product_no      VARCHAR2(32),
  total_cntr      NUMBER(20),
  total_fee       NUMBER(20,5),
  trade_fee       NUMBER(20,5),
  refund_fee      NUMBER(20,5)
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
comment on table QXFC.FC_TRADE_DOWN
  is '���ν��ױ���';
comment on column QXFC.FC_TRADE_DOWN.trade_date
  is '����ʱ��';
comment on column QXFC.FC_TRADE_DOWN.down_channel_no
  is '�����������';
comment on column QXFC.FC_TRADE_DOWN.carrier_no
  is '��Ӫ��';
comment on column QXFC.FC_TRADE_DOWN.province_no
  is 'ʡ��';
comment on column QXFC.FC_TRADE_DOWN.city_no
  is '����';
comment on column QXFC.FC_TRADE_DOWN.product_type
  is '��Ʒ����';
comment on column QXFC.FC_TRADE_DOWN.package_type
  is '�ײ�';
comment on column QXFC.FC_TRADE_DOWN.product_no
  is '��Ʒ����';
comment on column QXFC.FC_TRADE_DOWN.total_cntr
  is '��������';
comment on column QXFC.FC_TRADE_DOWN.total_fee
  is '�ɹ����';
comment on column QXFC.FC_TRADE_DOWN.trade_fee
  is '�ɹ���ֵ';
comment on column QXFC.FC_TRADE_DOWN.refund_fee
  is '�˿���';

prompt
prompt Creating table FC_TRADE_UP
prompt ==========================
prompt
create table QXFC.FC_TRADE_UP
(
  trade_date    DATE,
  up_channel_no VARCHAR2(32),
  carrier_no    VARCHAR2(32),
  province_no   VARCHAR2(10),
  city_no       VARCHAR2(32),
  product_type  NUMBER(20),
  package_type  NUMBER,
  product_no    VARCHAR2(32),
  total_cntr    NUMBER(20),
  cost          NUMBER(20,5),
  reward        NUMBER(20,5),
  express_fee   NUMBER(20,5),
  refund_fee    NUMBER(20,5)
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
comment on table QXFC.FC_TRADE_UP
  is '���ν��ױ���';
comment on column QXFC.FC_TRADE_UP.trade_date
  is '����ʱ��';
comment on column QXFC.FC_TRADE_UP.up_channel_no
  is '�����������';
comment on column QXFC.FC_TRADE_UP.carrier_no
  is '��Ӫ��';
comment on column QXFC.FC_TRADE_UP.province_no
  is 'ʡ��';
comment on column QXFC.FC_TRADE_UP.city_no
  is '����';
comment on column QXFC.FC_TRADE_UP.product_type
  is '��Ʒ����';
comment on column QXFC.FC_TRADE_UP.package_type
  is '�ײ�';
comment on column QXFC.FC_TRADE_UP.product_no
  is '��Ʒ����';
comment on column QXFC.FC_TRADE_UP.total_cntr
  is '��������';
comment on column QXFC.FC_TRADE_UP.cost
  is '�ɱ�';
comment on column QXFC.FC_TRADE_UP.reward
  is 'Ӷ��';
comment on column QXFC.FC_TRADE_UP.express_fee
  is '��ݷ�';
comment on column QXFC.FC_TRADE_UP.refund_fee
  is '�˿���';

prompt
prompt Creating table FC_UP_ACCOUNT
prompt ============================
prompt
create table QXFC.FC_UP_ACCOUNT
(
  id           NUMBER not null,
  channel_no   VARCHAR2(32) not null,
  account_no   VARCHAR2(32) not null,
  account_pwd  VARCHAR2(128) not null,
  balance      NUMBER default 0 not null,
  carrier_no   VARCHAR2(32) not null,
  province_no  VARCHAR2(32) not null,
  city_no      VARCHAR2(32) not null,
  status       NUMBER default 0 not null,
  created_user VARCHAR2(32) not null,
  created_time DATE default sysdate not null,
  edit_user    VARCHAR2(32),
  edit_time    DATE,
  cookie       VARCHAR2(4000),
  bind_phone   VARCHAR2(11),
  is_using     NUMBER default 0,
  product_type NUMBER
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 8K
    minextents 1
    maxextents unlimited
  );
comment on table QXFC.FC_UP_ACCOUNT
  is '�����˻���';
comment on column QXFC.FC_UP_ACCOUNT.id
  is '�ʺű��';
comment on column QXFC.FC_UP_ACCOUNT.channel_no
  is '�����������';
comment on column QXFC.FC_UP_ACCOUNT.account_no
  is '�ʺ���';
comment on column QXFC.FC_UP_ACCOUNT.account_pwd
  is '�ʺ�����';
comment on column QXFC.FC_UP_ACCOUNT.balance
  is '���';
comment on column QXFC.FC_UP_ACCOUNT.carrier_no
  is '��Ӫ��; *:����';
comment on column QXFC.FC_UP_ACCOUNT.province_no
  is 'ʡ��; QG:ȫ��';
comment on column QXFC.FC_UP_ACCOUNT.city_no
  is '����; *:ȫ��';
comment on column QXFC.FC_UP_ACCOUNT.status
  is '״̬';
comment on column QXFC.FC_UP_ACCOUNT.created_user
  is '������';
comment on column QXFC.FC_UP_ACCOUNT.created_time
  is '����ʱ��';
comment on column QXFC.FC_UP_ACCOUNT.edit_user
  is '������';
comment on column QXFC.FC_UP_ACCOUNT.edit_time
  is '����ʱ��';
comment on column QXFC.FC_UP_ACCOUNT.cookie
  is '��վcookie';
comment on column QXFC.FC_UP_ACCOUNT.bind_phone
  is '���ֻ�';
comment on column QXFC.FC_UP_ACCOUNT.is_using
  is '�Ƿ�����ʹ�� 0����ʹ�� 1����';
comment on column QXFC.FC_UP_ACCOUNT.product_type
  is '��Ʒ����';

prompt
prompt Creating table FC_UP_ACCOUNT_EX
prompt ===============================
prompt
create table QXFC.FC_UP_ACCOUNT_EX
(
  channel_no   VARCHAR2(32),
  channel_pwd  VARCHAR2(32),
  status       NUMBER,
  create_time  DATE default sysdate,
  create_user  VARCHAR2(32),
  channel_user VARCHAR2(32)
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 8K
    minextents 1
    maxextents unlimited
  );
comment on column QXFC.FC_UP_ACCOUNT_EX.channel_no
  is '�����������';
comment on column QXFC.FC_UP_ACCOUNT_EX.channel_pwd
  is '��¼����';
comment on column QXFC.FC_UP_ACCOUNT_EX.status
  is '״̬0-����1-����';
comment on column QXFC.FC_UP_ACCOUNT_EX.create_time
  is '����ʱ��';
comment on column QXFC.FC_UP_ACCOUNT_EX.create_user
  is '������';
comment on column QXFC.FC_UP_ACCOUNT_EX.channel_user
  is '�˻���';

prompt
prompt Creating table FC_UP_CHANNEL
prompt ============================
prompt
create table QXFC.FC_UP_CHANNEL
(
  channel_no     VARCHAR2(32) not null,
  channel_name   VARCHAR2(32) not null,
  notify_url     VARCHAR2(128),
  need_query     NUMBER(20) default 1 not null,
  first_interval NUMBER(20) default 0,
  next_interval  NUMBER(20) default 20,
  status         NUMBER(2) default 0 not null,
  balance        NUMBER(20) default 0 not null,
  remark         VARCHAR2(64),
  sync_status    NUMBER(20) default 20 not null,
  created_user   VARCHAR2(32) not null,
  created_time   DATE default Sysdate not null,
  edit_user      VARCHAR2(32),
  edit_time      DATE,
  fd_channel_no  VARCHAR2(32)
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
comment on table QXFC.FC_UP_CHANNEL
  is '����������';
comment on column QXFC.FC_UP_CHANNEL.channel_no
  is '�����������';
comment on column QXFC.FC_UP_CHANNEL.channel_name
  is '������������';
comment on column QXFC.FC_UP_CHANNEL.notify_url
  is '�ص���ַ';
comment on column QXFC.FC_UP_CHANNEL.need_query
  is '�Ƿ��ѯ;0:��ѯ;1:����ѯ';
comment on column QXFC.FC_UP_CHANNEL.first_interval
  is '���β�ѯʱ��';
comment on column QXFC.FC_UP_CHANNEL.next_interval
  is '��ѯ���';
comment on column QXFC.FC_UP_CHANNEL.status
  is '״̬';
comment on column QXFC.FC_UP_CHANNEL.balance
  is '���';
comment on column QXFC.FC_UP_CHANNEL.remark
  is '��ע';
comment on column QXFC.FC_UP_CHANNEL.sync_status
  is 'ͬ������ϵͳ״̬';
comment on column QXFC.FC_UP_CHANNEL.created_user
  is '������';
comment on column QXFC.FC_UP_CHANNEL.created_time
  is '����ʱ��';
comment on column QXFC.FC_UP_CHANNEL.edit_user
  is '������';
comment on column QXFC.FC_UP_CHANNEL.edit_time
  is '����ʱ��';
comment on column QXFC.FC_UP_CHANNEL.fd_channel_no
  is '����ϵͳ�������';
alter table QXFC.FC_UP_CHANNEL
  add constraint PK_FC_UP_CHANNEL primary key (CHANNEL_NO)
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
prompt Creating table FC_UP_MANUAL_ORDER
prompt =================================
prompt
create table QXFC.FC_UP_MANUAL_ORDER
(
  order_no        VARCHAR2(64),
  product_no      VARCHAR2(32),
  product_name    VARCHAR2(128),
  up_channel_no   VARCHAR2(32),
  task_id         NUMBER,
  user_name       VARCHAR2(32),
  phone_no        VARCHAR2(32),
  idno            VARCHAR2(32),
  install_address VARCHAR2(256),
  remark          VARCHAR2(128),
  status          NUMBER,
  brand_no        VARCHAR2(32),
  install_date    DATE,
  create_time     DATE,
  end_time        DATE,
  result_msg      VARCHAR2(256)
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
comment on column QXFC.FC_UP_MANUAL_ORDER.order_no
  is '������';
comment on column QXFC.FC_UP_MANUAL_ORDER.product_no
  is '��Ʒ���';
comment on column QXFC.FC_UP_MANUAL_ORDER.product_name
  is '��Ʒ����';
comment on column QXFC.FC_UP_MANUAL_ORDER.up_channel_no
  is '�����������';
comment on column QXFC.FC_UP_MANUAL_ORDER.task_id
  is '������';
comment on column QXFC.FC_UP_MANUAL_ORDER.user_name
  is '�û�����';
comment on column QXFC.FC_UP_MANUAL_ORDER.phone_no
  is '����';
comment on column QXFC.FC_UP_MANUAL_ORDER.idno
  is '���֤';
comment on column QXFC.FC_UP_MANUAL_ORDER.install_address
  is '��װ��ַ';
comment on column QXFC.FC_UP_MANUAL_ORDER.remark
  is '��ע';
comment on column QXFC.FC_UP_MANUAL_ORDER.status
  is '״̬';
comment on column QXFC.FC_UP_MANUAL_ORDER.brand_no
  is '����˺�';
comment on column QXFC.FC_UP_MANUAL_ORDER.install_date
  is '��װʱ��';
comment on column QXFC.FC_UP_MANUAL_ORDER.create_time
  is '����ʱ��';
comment on column QXFC.FC_UP_MANUAL_ORDER.end_time
  is '����ʱ��';
comment on column QXFC.FC_UP_MANUAL_ORDER.result_msg
  is '�����Ϣ';

prompt
prompt Creating table FC_UP_PRODUCT
prompt ============================
prompt
create table QXFC.FC_UP_PRODUCT
(
  pid           NUMBER(20) not null,
  channel_no    VARCHAR2(32) not null,
  product_no    VARCHAR2(32),
  product_name  VARCHAR2(32) not null,
  package_id    NUMBER(20) not null,
  product_type  NUMBER(20) not null,
  carrier_no    VARCHAR2(32) not null,
  province_no   VARCHAR2(32) not null,
  city_no       VARCHAR2(32) not null,
  cost          NUMBER(20,5) default 0,
  reward        NUMBER(20,5) default 0 not null,
  group_no      VARCHAR2(32),
  status        NUMBER(20) default 0 not null,
  remark        VARCHAR2(64),
  created_user  VARCHAR2(32) not null,
  created_time  DATE default Sysdate not null,
  edit_user     VARCHAR2(32),
  edit_time     DATE,
  debit_mode    NUMBER default 1 not null,
  reward_cntr   NUMBER default 0,
  active_expire NUMBER default 0,
  face          NUMBER(20,5),
  flow_id       NUMBER
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 8K
    minextents 1
    maxextents unlimited
  );
comment on table QXFC.FC_UP_PRODUCT
  is '����������Ʒ��';
comment on column QXFC.FC_UP_PRODUCT.pid
  is '��ƷID';
comment on column QXFC.FC_UP_PRODUCT.channel_no
  is '�������';
comment on column QXFC.FC_UP_PRODUCT.product_no
  is '��Ʒ����';
comment on column QXFC.FC_UP_PRODUCT.product_name
  is '��Ʒ����';
comment on column QXFC.FC_UP_PRODUCT.package_id
  is '�ײͱ��';
comment on column QXFC.FC_UP_PRODUCT.product_type
  is '��Ʒ����';
comment on column QXFC.FC_UP_PRODUCT.carrier_no
  is '��Ӫ��;*:����';
comment on column QXFC.FC_UP_PRODUCT.province_no
  is 'ʡ��;QG:ȫ��';
comment on column QXFC.FC_UP_PRODUCT.city_no
  is '����;*:ȫ��';
comment on column QXFC.FC_UP_PRODUCT.cost
  is '�ɱ�';
comment on column QXFC.FC_UP_PRODUCT.reward
  is 'Ӷ��';
comment on column QXFC.FC_UP_PRODUCT.group_no
  is '������';
comment on column QXFC.FC_UP_PRODUCT.status
  is '״̬;0:����;1:����';
comment on column QXFC.FC_UP_PRODUCT.remark
  is '��ע';
comment on column QXFC.FC_UP_PRODUCT.created_user
  is '������';
comment on column QXFC.FC_UP_PRODUCT.created_time
  is '����ʱ��';
comment on column QXFC.FC_UP_PRODUCT.edit_user
  is '������';
comment on column QXFC.FC_UP_PRODUCT.edit_time
  is '����ʱ��';
comment on column QXFC.FC_UP_PRODUCT.debit_mode
  is '�ۿ�ģʽ 1:�ȿۺ���;2:������ٿ�';
comment on column QXFC.FC_UP_PRODUCT.active_expire
  is '���ʱ(��)';
comment on column QXFC.FC_UP_PRODUCT.face
  is '��ֵ';
comment on column QXFC.FC_UP_PRODUCT.flow_id
  is '��������';
alter table QXFC.FC_UP_PRODUCT
  add constraint PK_FC_UP_PRODUCT primary key (PID)
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
prompt Creating table FC_UP_SCRIPT
prompt ===========================
prompt
create table QXFC.FC_UP_SCRIPT
(
  sid          NUMBER(20) not null,
  channel_no   VARCHAR2(32) not null,
  script_type  NUMBER(20) not null,
  product_type NUMBER(20) default 0 not null,
  package_id   NUMBER(20) not null,
  carrier_no   VARCHAR2(32) not null,
  province_no  VARCHAR2(32) default 'QG' not null,
  city_no      VARCHAR2(32) default '*' not null,
  script_path  VARCHAR2(64) not null,
  up_url       VARCHAR2(128),
  svc_bus      VARCHAR2(32) not null,
  status       NUMBER(20) default 0 not null,
  created_user VARCHAR2(32) not null,
  created_time DATE default Sysdate not null,
  edit_user    VARCHAR2(32),
  edit_time    DATE
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
comment on table QXFC.FC_UP_SCRIPT
  is '���νű�';
comment on column QXFC.FC_UP_SCRIPT.sid
  is '�ű�ID';
comment on column QXFC.FC_UP_SCRIPT.channel_no
  is '�������';
comment on column QXFC.FC_UP_SCRIPT.script_type
  is '�ű�����';
comment on column QXFC.FC_UP_SCRIPT.product_type
  is '��Ʒ����;0:����';
comment on column QXFC.FC_UP_SCRIPT.package_id
  is '�ײͱ��';
comment on column QXFC.FC_UP_SCRIPT.carrier_no
  is '��Ӫ��;*:����';
comment on column QXFC.FC_UP_SCRIPT.province_no
  is 'ʡ��;QG:ȫ��';
comment on column QXFC.FC_UP_SCRIPT.city_no
  is '����';
comment on column QXFC.FC_UP_SCRIPT.script_path
  is '�ű�·��';
comment on column QXFC.FC_UP_SCRIPT.up_url
  is '���η����ַ';
comment on column QXFC.FC_UP_SCRIPT.svc_bus
  is '���߷���';
comment on column QXFC.FC_UP_SCRIPT.status
  is '״̬';
comment on column QXFC.FC_UP_SCRIPT.created_user
  is '������';
comment on column QXFC.FC_UP_SCRIPT.created_time
  is '����ʱ��';
comment on column QXFC.FC_UP_SCRIPT.edit_user
  is '������';
comment on column QXFC.FC_UP_SCRIPT.edit_time
  is '����ʱ��';
alter table QXFC.FC_UP_SCRIPT
  add constraint PK_FC_UP_SCRIPT primary key (SID)
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
prompt Creating table FC_WARN_MSG
prompt ==========================
prompt
create table QXFC.FC_WARN_MSG
(
  id           NUMBER(20) not null,
  title        VARCHAR2(512) not null,
  keywords     VARCHAR2(512) not null,
  content      VARCHAR2(1000),
  warn_level   NUMBER(5) not null,
  created_time DATE default sysdate not null,
  is_sync      NUMBER(2) default 1,
  sync_status  NUMBER default 20 not null
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
comment on column QXFC.FC_WARN_MSG.id
  is '��Ϣ���';
comment on column QXFC.FC_WARN_MSG.title
  is '����';
comment on column QXFC.FC_WARN_MSG.keywords
  is '�ؼ���';
comment on column QXFC.FC_WARN_MSG.content
  is '����';
comment on column QXFC.FC_WARN_MSG.warn_level
  is '�澯����';
comment on column QXFC.FC_WARN_MSG.created_time
  is '����ʱ��';
comment on column QXFC.FC_WARN_MSG.is_sync
  is '�Ƿ�ͬ��:1-δͬ��,0-��ͬ��';
comment on column QXFC.FC_WARN_MSG.sync_status
  is 'ͬ��״̬:20:�ȴ�ͬ��,30:ͬ����,0:ͬ�����';

prompt
prompt Creating table FC_YXHD_PHONE
prompt ============================
prompt
create table QXFC.FC_YXHD_PHONE
(
  channel_no       VARCHAR2(32) not null,
  phone            VARCHAR2(32) not null,
  pkg_type         VARCHAR2(32),
  limit_cntr       NUMBER default 1 not null,
  limit_type       NUMBER default 1 not null,
  expire_date      DATE,
  charge_cntr      NUMBER default 0 not null,
  total_cntr       NUMBER default 0 not null,
  last_charge_time DATE,
  status           NUMBER default 0 not null,
  create_time      DATE default sysdate not null,
  active_time      DATE,
  hd_type          NUMBER default 1 not null
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
comment on column QXFC.FC_YXHD_PHONE.channel_no
  is '�������';
comment on column QXFC.FC_YXHD_PHONE.phone
  is '�ֻ���';
comment on column QXFC.FC_YXHD_PHONE.pkg_type
  is '�ײ�';
comment on column QXFC.FC_YXHD_PHONE.limit_cntr
  is '���ƴ���';
comment on column QXFC.FC_YXHD_PHONE.limit_type
  is '�������� 1:���� 2:����';
comment on column QXFC.FC_YXHD_PHONE.expire_date
  is 'ʧЧʱ��';
comment on column QXFC.FC_YXHD_PHONE.charge_cntr
  is '��ǰ���������ڳ�ֵ����';
comment on column QXFC.FC_YXHD_PHONE.total_cntr
  is '�ۼƳ�ֵ����';
comment on column QXFC.FC_YXHD_PHONE.last_charge_time
  is '����ֵʱ��';
comment on column QXFC.FC_YXHD_PHONE.status
  is '״̬ 0:����; 1:����';
comment on column QXFC.FC_YXHD_PHONE.create_time
  is '����ʱ��';
comment on column QXFC.FC_YXHD_PHONE.active_time
  is '����ʱ��';
comment on column QXFC.FC_YXHD_PHONE.hd_type
  is '����� 1:5�ۻ 2:8�ۻ 3:��Ƶ��Ա';
alter table QXFC.FC_YXHD_PHONE
  add constraint PK_YXHD_PHONE primary key (PHONE)
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
prompt Creating table TB_TEMP
prompt ======================
prompt
create table QXFC.TB_TEMP
(
  down_channel_no VARCHAR2(32),
  carrier_no      VARCHAR2(32),
  province        VARCHAR2(32),
  city            VARCHAR2(32),
  type            VARCHAR2(32),
  rent            NUMBER,
  deposit         NUMBER,
  price           NUMBER(20,5),
  icc_type        NUMBER,
  fee             NUMBER(20,5),
  cost            NUMBER,
  reward          NUMBER(20,5),
  product_no      VARCHAR2(32),
  trial           NUMBER,
  debit_mode      NUMBER,
  up_channel      VARCHAR2(32),
  group_no        VARCHAR2(32),
  flow            VARCHAR2(32),
  create_date     DATE default sysdate
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

prompt
prompt Creating table T_ADDR
prompt =====================
prompt
create table QXFC.T_ADDR
(
  addr_code_1        VARCHAR2(200),
  district           VARCHAR2(300),
  addr_detail        VARCHAR2(500),
  district_code_1    VARCHAR2(300),
  district_code_2    VARCHAR2(300),
  addr_code_2        VARCHAR2(300),
  addr_level         NUMBER(5),
  scenes             VARCHAR2(100),
  area_type          VARCHAR2(100),
  business_area_code VARCHAR2(100)
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

prompt
prompt Creating sequence SEQ_BATCH_ID
prompt ==============================
prompt
create sequence QXFC.SEQ_BATCH_ID
minvalue 1
maxvalue 9999999999
start with 75501
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_CHECK_CHARGE_ID
prompt =====================================
prompt
create sequence QXFC.SEQ_CHECK_CHARGE_ID
minvalue 1
maxvalue 999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_DZ_TRADE_DETAIL_ID
prompt ========================================
prompt
create sequence QXFC.SEQ_DZ_TRADE_DETAIL_ID
minvalue 1
maxvalue 999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_ERROR_CODE_ID
prompt ===================================
prompt
create sequence QXFC.SEQ_ERROR_CODE_ID
minvalue 1
maxvalue 9999999999
start with 141
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCBUSINESSTYPE_AUTO_ID
prompt ============================================
prompt
create sequence QXFC.SEQ_FCBUSINESSTYPE_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCDOWNCHANNEL_AUTO_ID
prompt ===========================================
prompt
create sequence QXFC.SEQ_FCDOWNCHANNEL_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 21
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCDOWNEXCLUDEUP_AUTO_ID
prompt =============================================
prompt
create sequence QXFC.SEQ_FCDOWNEXCLUDEUP_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 21
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCDOWNPRODUCT_AUTO_ID
prompt ===========================================
prompt
create sequence QXFC.SEQ_FCDOWNPRODUCT_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 201
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCDOWNSCRIPT_AUTO_ID
prompt ==========================================
prompt
create sequence QXFC.SEQ_FCDOWNSCRIPT_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 61
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCDOWNSPECIFYUP_AUTO_ID
prompt =============================================
prompt
create sequence QXFC.SEQ_FCDOWNSPECIFYUP_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 141
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCFLOWSTEP_AUTO_ID
prompt ========================================
prompt
create sequence QXFC.SEQ_FCFLOWSTEP_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 181
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCFLOW_AUTO_ID
prompt ====================================
prompt
create sequence QXFC.SEQ_FCFLOW_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 141
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCFUNDCHANGEDOWN_AUTO_ID
prompt ==============================================
prompt
create sequence QXFC.SEQ_FCFUNDCHANGEDOWN_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 481
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCFUNDCHANGEUP_AUTO_ID
prompt ============================================
prompt
create sequence QXFC.SEQ_FCFUNDCHANGEUP_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 21
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCNOTIFYRECORD_AUTO_ID
prompt ============================================
prompt
create sequence QXFC.SEQ_FCNOTIFYRECORD_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCOPREATION_AUTO_ID
prompt =========================================
prompt
create sequence QXFC.SEQ_FCOPREATION_AUTO_ID
minvalue 1
maxvalue 9999999999
start with 82
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCORDERBIND_AUTO_ID
prompt =========================================
prompt
create sequence QXFC.SEQ_FCORDERBIND_AUTO_ID
minvalue 1
maxvalue 9999
start with 1241
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCORDEREXPRESS_ID
prompt =======================================
prompt
create sequence QXFC.SEQ_FCORDEREXPRESS_ID
minvalue 1
maxvalue 99999999
start with 81
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCORDERMAIN_AUTO_ID
prompt =========================================
prompt
create sequence QXFC.SEQ_FCORDERMAIN_AUTO_ID
minvalue 1000
maxvalue 9999
start with 1500
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_FCORDEROPERATE_AUTO_ID
prompt ============================================
prompt
create sequence QXFC.SEQ_FCORDEROPERATE_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 1101
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCORDERREFUND_AUTO_ID
prompt ===========================================
prompt
create sequence QXFC.SEQ_FCORDERREFUND_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 101
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCPRODUCTTYPE_AUTO_ID
prompt ===========================================
prompt
create sequence QXFC.SEQ_FCPRODUCTTYPE_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 41
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCSYSTEMCITY_AUTO_ID
prompt ==========================================
prompt
create sequence QXFC.SEQ_FCSYSTEMCITY_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCSYSTEMDICTIONARY_AUTO_ID
prompt ================================================
prompt
create sequence QXFC.SEQ_FCSYSTEMDICTIONARY_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 261
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCSYSTEMPROVINCE_AUTO_ID
prompt ==============================================
prompt
create sequence QXFC.SEQ_FCSYSTEMPROVINCE_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCUPCHANNEL_AUTO_ID
prompt =========================================
prompt
create sequence QXFC.SEQ_FCUPCHANNEL_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCUPPRODUCT_AUTO_ID
prompt =========================================
prompt
create sequence QXFC.SEQ_FCUPPRODUCT_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 281
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FCUPSCRIPT_AUTO_ID
prompt ========================================
prompt
create sequence QXFC.SEQ_FCUPSCRIPT_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 81
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FLOW_TASK_ID
prompt ==================================
prompt
create sequence QXFC.SEQ_FLOW_TASK_ID
minvalue 1
maxvalue 999999999
start with 841
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FLOW_TASK_QUERY_ID
prompt ========================================
prompt
create sequence QXFC.SEQ_FLOW_TASK_QUERY_ID
minvalue 1
maxvalue 999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_PHONE_CHARGE_ID
prompt =====================================
prompt
create sequence QXFC.SEQ_PHONE_CHARGE_ID
minvalue 1
maxvalue 9999999999
start with 41
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_PRODUCT_PACKAGE_ID
prompt ========================================
prompt
create sequence QXFC.SEQ_PRODUCT_PACKAGE_ID
minvalue 1
maxvalue 9999999
start with 121
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_SYSTEMLOG_AUTO_ID
prompt =======================================
prompt
create sequence QXFC.SEQ_SYSTEMLOG_AUTO_ID
minvalue 1
maxvalue 999999999
start with 3921
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TRADE_DOWN_ID
prompt ===================================
prompt
create sequence QXFC.SEQ_TRADE_DOWN_ID
minvalue 1
maxvalue 999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_UPACCOUNT_AUTOID
prompt ======================================
prompt
create sequence QXFC.SEQ_UPACCOUNT_AUTOID
minvalue 1
maxvalue 999999999
start with 61
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_WARN_MSGID
prompt ================================
prompt
create sequence QXFC.SEQ_WARN_MSGID
minvalue 1
maxvalue 99999999
start with 2461
increment by 1
cache 20;

prompt
prompt Creating package ACTION_TYPE
prompt ============================
prompt
create or replace package qxfc.action_type is

  /*���̲�������*/

  --��ȡʵ����Ϣ
  get_identity constant varchar2(32) := 'get_identity';

  --д��
  write_card constant varchar2(32) := 'write_card';

  --���ݵ�
  print_express constant varchar2(32) := 'print_express';

  --ƽ̨����
  plat_delivery constant varchar2(32) := 'plat_delivery';

  --�ɷ�
  charge constant varchar2(32) := 'charge';

  --�豸
  device constant varchar2(32) := 'device';

  --ԤԼ��װ
  book_install constant varchar2(32) := 'book_install';

  --��ѯ������Ϣ
  query_express constant varchar2(32) := 'query_mail';
end;
/

prompt
prompt Creating package ACTIVE_STATUS
prompt ==============================
prompt
create or replace package qxfc.active_status is

  /********************
  *����״̬
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
  *��ģʽ
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

  -- ���οۿ�ģʽ

  --�ȿۺ�
  immediate CONSTANT Number(1) := 1;

  --�������
  active CONSTANT Number(1) := 2;
end;
/

prompt
prompt Creating package ENABLE_STATUS
prompt ==============================
prompt
create or replace package qxfc.enable_status is

  /********************
  *״̬��
  *********************/

  --����
  enabled constant number(1) := 0;

  --����
  disabled constant number(1) := 1;

end;
/

prompt
prompt Creating package ERROR_CODE
prompt ===========================
prompt
create or replace package qxfc.error_code is

    /********************
    *������
    *********************/

    --�ɹ�
    suc constant number(3) := 100;

    --�˹����
    manual constant number(3) := 999;

    --����ʧ��
    failure constant number(3) := 200;
end;
/

prompt
prompt Creating package EXPRESS_STATUS
prompt ===============================
prompt
create or replace package qxfc.express_status is

  /********************
  *��ݴ���״̬
  *********************/

  --�ȴ���ӡ��ݵ�
  wait_print constant number(2) := 10;

  --���ڴ�ӡ
  printing constant number := 11;

  --�ȴ�ƽ̨����
  wait_plat_delivery constant number(2) := 20;

  --ƽ̨����������
  delivery constant number := 30;

  --ȫ��ʧ��
  failure constant number(2) := 90;

  --ȫ���ɹ�
  success constant number(2) := 0;
end;
/

prompt
prompt Creating package FEE_TYPE
prompt =========================
prompt
create or replace package qxfc.FEE_TYPE is

  /********************
  *����������
  *********************/

  --�̶�
  fix constant number(1) := 0;

  --������
  rate constant number(1) := 1;

end;
/

prompt
prompt Creating package FLOW_MODE
prompt ==========================
prompt
create or replace package qxfc.flow_mode is

  /********************
  *����������ʽ
  *********************/

  --�Զ�
  auto constant number(1) := 0;

  --����
  manual constant number(1) := 1;
end;
/

prompt
prompt Creating package FUND_CHANGE_TYPE
prompt =================================
prompt
create or replace package qxfc.Fund_Change_Type is

  /********************
  *�ʽ�䶯����
  *********************/

  --�ӿ�
  add CONSTANT Number(1) := 1;

  --�ۿ�
  reduce CONSTANT Number(1) := 2;

  --�˿�
  refund CONSTANT Number(1) := 3;

  --Ӷ��
  reward constant number := 4;

  --��ݷ�
  express constant number := 5;
end;
/

prompt
prompt Creating package OPERATE_TYPE
prompt =============================
prompt
create or replace package qxfc.operate_type is

  /********************
  *��������
  *********************/
  --�˹�
  manual constant number(1) :=1;
  --ϵͳ�Զ�
  system constant number(1) := 2;
end;
/

prompt
prompt Creating package ORDER_STATUS
prompt =============================
prompt
create or replace package qxfc.order_status is

  /********************
  *����״̬
  *********************/

  --�ȴ���ʼ��
  wait_init constant number(2) := 10;

  --�ȴ���ֵ
  wait constant number(2) := 20;

  --���ڳ�ֵ
  process constant number(2) := 30;

  --ȫ��ʧ��
  failure constant number(2) := 90;

  --ȫ���ɹ�
  success constant number(2) := 0;

end;
/

prompt
prompt Creating package PROCESS_STATUS
prompt ===============================
prompt
create or replace package qxfc.process_status is

  /********************
  *����״̬
  *********************/
  no_need constant number := 10;

  --�ȴ�
  wait constant number := 20;

  --���ڴ���
  process constant number := 30;

  --ȫ��ʧ��
  failure constant number := 90;

  --ȫ���ɹ�
  success constant number := 0;
end;
/

prompt
prompt Creating package REFUND_STATUS
prompt ==============================
prompt
create or replace package qxfc.refund_status is

  /********************
  *�˿�״̬
  *********************/

  --�ȴ�ȷ��
  wait_confirm constant number(2) := 10;

  --�ȴ��˿�
  wait constant number(2) := 20;

  --�����˿�
  process constant number(2) := 30;

  --ʧ��
  failure constant number(2) := 90;

  --�ɹ�
  success constant number(2) := 0;

end;
/

prompt
prompt Creating package REFUND_TYPE
prompt ============================
prompt
create or replace package qxfc.refund_type is

  /********************
  *�˿�����
  *********************/

  --�����˿�
  online constant number(2) := 1;

  --�����˿�
  offline constant number := 2;

end;
/

prompt
prompt Creating package SCRIPT_TYPE
prompt ============================
prompt
create or replace package qxfc.script_type is

  /*���νű�����*/

  --���ݵ�
  print_express constant number := 1;

  --�Ա�����
  taobao_delivery constant number := 2;

  --��ѯ
  query constant number := 3;

  --�˿�
  refund constant number := 4;

  --д��
  write_card constant number := 5;

  --�������
  brand_xf constant number := 6;

  --�ſ�����
  card_xf constant number := 7;

  ------------------------���νű�����--------------
  --����֪ͨ
  down_order_notify constant number := 31;

  --�˿�֪ͨ
  down_refund_notify constant number := 32;

  --���¿�ݵ���
  down_plat_delivery constant number := 33;

  --��ȡʵ����Ϣ
  down_get_identity constant number := 34;
end;
/

prompt
prompt Creating package SPECIAL_PRODUCT_TYPE
prompt =====================================
prompt
create or replace package qxfc.special_product_type is

  /*��Ʒ����*/

  --���
  express constant number := 1;

  --�豸
  device constant number := 32;
end;
/

prompt
prompt Creating package WARN_KEYWORDS
prompt ==============================
prompt
create or replace package qxfc.Warn_Keywords is

  recv_exception constant varchar2(32) := '�յ��쳣';

  flow_exception constant varchar2(32) := '�����쳣';

  task_exception constant varchar2(32) := '�����쳣';

end;
/

prompt
prompt Creating package WRITE_CARD_MODE
prompt ================================
prompt
create or replace package qxfc.write_card_mode is

  /********************
  *д����ʽ
  *********************/

  --����д��
  none constant number := 0;

  --�Զ�
  auto constant number(1) := 1;

  --�ֶ�
  manual constant number(1) := 2;

  --���������µ�
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
prompt Creating function F_ASSIGN_ICCNO
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
  ����:����iccno
  ����:jiyi
  ʱ��:2018-04-24
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
    v_ret_msg := 'û�п��õ�ICCNO';
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
  ����:�����������������
  ����:jiyi
  ʱ��:2018-04-09
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
    v_ret_msg := 'û�����ø����͵Ľű�';
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
    --��è���¿�ݵ�����֮ǰ�󶨵�����û�й�ϵ, �����εĽű�����
    l_script_type := script_type.down_plat_delivery;
    select min(t.sid), min(t.script_path), min(t.svc_bus)
      into l_script_id, l_script_path, l_svc_bus
      from fc_down_script t
     where t.script_type = script_type.down_plat_delivery
       and t.channel_no = l_down_channel_no
       and t.status = enable_status.enabled
       and rownum = 1;
  elsif (v_action = action_type.get_identity) then
    --��ȡʵ����Ϣ��֮ǰ�󶨵�����û�й�ϵ, �����εĽű�����
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
    v_ret_msg := 'û���ҵ��ű�';
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
    --��è�����Ϳ�ݹ���һ��Express_Order, ��������è����taskid
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
  ����:�����������
  ����:jiyi
  ʱ��:2018-04-09
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
    v_ret_msg := 'û�����ø����͵Ľű�';
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

  --��ӡ�����֮ǰ�󶨵�����û�й�ϵ
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
    v_ret_msg := 'û���ҵ��ű�';
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
    ����:������ѯ
    ����:jiyi
    ʱ��:2018-04-10
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
  --�ж��Ƿ���Ҫ��ѯ
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
    v_ret_msg := '����Ҫ��ѯ';
    return false;
  end if;

  select t.carrier_no, t.province_no, t.city_no
    into l_carrier_no, l_province_no, l_city_no
    from fc_order_main t
   where t.order_no = l_order_no;

  --��Ӳ�ѯ��¼
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
    v_ret_msg := 'δ���ýű���ű�������';
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

  v_ret_msg := '������ѯ�ɹ�';
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
  ����:�����µ���ѯ������Ϣ
  ����:jiyi
  ʱ��:2018-04-09
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
    v_ret_msg := 'û�����ø����͵Ľű�';
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

  --��ȡ��ѯ�ű�
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
    v_ret_msg := 'û���ҵ��ű�';
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
  ����:����Ʒ���ʹ�������
  ����:jiyi
  ʱ��:2018-04-09
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
prompt Creating procedure SP_WRITE_LOG
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
     ���ܣ���ӱ�����¼
     ���ߣ�jiyi
     ʱ�䣺2016-07-11 11:33:24
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
  pragma autonomous_transaction; --��������
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
  ����:������������ص�����
  ����:jiyi
  ʱ��:2018-04-09
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
    v_ret_msg := 'û�����ø����͵Ľű�';
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

  --��ȡ���β�Ʒ��Ϣ
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
    l_msg := v_action || 'û�п�����������';
    update fc_order_main t
       set t.error_code   = 200,
           t.error_msg    = l_msg,
           t.order_status = order_status.failure
     where t.order_no = l_order_no;
  
    v_ret_msg := l_msg;
    sp_warn_insert(Warn_Keywords.task_exception,
                   '����:' || l_order_no || l_msg,
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
  ����:��������
  ����:jiyi
  ʱ��:2018-04-09
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
    v_ret_msg     := v_action || '�����Ѿ�����';
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
  ����:��ȡ�����¸�����
  ����:jiyi
  ʱ��:2018-04-08
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
  ����:ִ����һ��
  ����:jiyi
  ʱ��:2018-04-09
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
         t.delivery_msg      = '������',
         t.action            = l_next_action
   where t.bind_id = l_bind_id;

  update fc_order_main t
     set t.order_status = l_order_status,
         t.finish_time  = l_end_time,
         t.error_msg    = '������',
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
  ����:�����ʽ���
  ����:jiyi
  ʱ��:2018-04-13
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
  ����:�����ʽ���
  ����:jiyi
  ʱ��:2018-04-13
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
  l_tmp_str := translate(l_tmp_str, chr(13) || chr(10), ','); --�滻���з���
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
  ����:��ȡ�����ʺ�
  ����:jiyi
  ʱ��:2018-05-21
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
     �������ɰ󶨱��
     ����:jiyi
     ʱ��:2018-04-02
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
create or replace function qxfc.f_scan_mail(v_fr         number, --�ü�¼�´ν����ʱ��
                                       v_once_count number, --ÿ������¼����
                                       v_batch_id   out number, --���κ�
                                       v_count      out number --��¼����
                                       ) return number is
  /*
  ����:�����ɿ�ݵ���
  ����:jiyi
  ʱ��:2016-05-30
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
create or replace function qxfc.f_scan_notify(v_fr         number, --�ü�¼�´ν����ʱ��
                                         v_once_count number, --ÿ������¼����
                                         v_batch_id   out number, --���κ�
                                         v_count      out number --��¼����
                                         ) return number is
  /*
  ����:��֪ͨ
  ����:jiyi
  ʱ��:2016-05-30
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
create or replace function qxfc.f_scan_plat_delivery(v_fr         number, --�ü�¼�´ν����ʱ��
                                                v_once_count number, --ÿ������¼����
                                                v_batch_id   out number, --���κ�
                                                v_count      out number --��¼����
                                                ) return number is
  /*
  ����:��ƽ̨����
  ����:jiyi
  ʱ��:2016-05-30
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
create or replace function qxfc.f_scan_task(v_fr         number, --�ü�¼�´ν����ʱ��
                                       v_once_count number, --ÿ������¼����
                                       v_batch_id   out number, --���κ�
                                       v_count      out number --��¼����
                                       ) return number is
  /*
  ����:������
  ����:jiyi
  ʱ��:2016-05-30
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
  ����:���¶�����Ϣ
  ����:jiyi
  ʱ��:2018-04-19
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
create or replace procedure qxfc.acct_sync_get(v_robot_ip    varchar2, --�������
                                          v_sync_type   number, --ͬ������:1-�����ʽ���, 2:�����ʽ���
                                          v_change_type number, --�ʽ�������
                                          v_out_status  out number, --״̬:100��ʾ�ɹ�
                                          v_out_msg     out varchar2, --������Ϣ
                                          v_begin_idx   out number, --��ʼ���(������)
                                          v_end_idx     out number --�������(������)
                                          ) as
  /*
  ����:�ʽ�䶯ͬ��������ϵͳ
  ����:jiyi
  ʱ��:2016-04-13
  */
  l_min_count    number; --��Сͬ������
  l_last_exec_id number; --�ϴ�ִ�б��
  l_begin_time   date := to_date('2016-04-19', 'yyyy-mm-dd'); --ͬ����ʼʱ��
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
      v_out_msg    := '��ȡ��ʧ��';
      return;
  end;

  if (l_last_exec_id is null) then
    --���ζ����ʽ�䶯
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
      v_out_msg    := 'ȡ��ʼ���ʧ��';
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
    v_out_msg    := '��¼��̫С,������ȡ';
    v_begin_idx  := null;
    v_end_idx    := null;
  
    --�м�������ʱ,�����Զ���һ��
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
  
    --�Զ���һ�������ݣ��´δ����￪ʼ
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
  v_out_msg    := '��ȡ�ɹ�';
  commit;
  return;
exception
  when others then
    rollback;
    v_out_status := error_code.failure;
    v_out_msg    := '���ݿ��쳣:' || sqlerrm;
    sp_write_log('acct_sync_get', '����ʧ��:' || v_out_msg);
end;
/

prompt
prompt Creating procedure ACCT_SYNC_SAVE
prompt =================================
prompt
create or replace procedure qxfc.acct_sync_save(v_id           varchar2, --�������
                                           v_channel_type number, --����:1-�����ʽ�䶯,2-�����ʽ�䶯
                                           v_change_type  number,
                                           v_status       number, --״̬:100-�ɹ�,������ʾʧ��
                                           v_msg          varchar2, --������Ϣ
                                           v_out_status   out number, --״̬:100��ʾ�ɹ�
                                           v_out_msg      out varchar2) as
  /*
  ����:�ʽ�䶯ͬ��������ϵͳͬ��
  ������:jiyi
  ʱ��:2016-04-13
  */
  l_error_count number;
  l_rid         number;
begin
  if (v_channel_type <> 1 and v_channel_type <> 2) then
    v_out_status := error_code.failure;
    v_out_msg    := '���������';
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

  --ͬ��ʧ��
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
    v_out_msg    := '����ɹ�';
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
  
    --���ü�¼Ϊʧ��
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
    
      sp_warn_insert('ͬ������ϵͳ',
                     v_id || 'ͬ������ϵͳʧ��,����ϵ����Ա:' || v_msg);
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
  v_out_msg    := '����ɹ�';
  commit;
exception
  when others then
    rollback;
    v_out_status := error_code.suc;
    v_out_msg    := '���ݿ��쳣:' || sqlerrm;
    sp_write_log('acct_sync_save', '����ʧ��:' || v_out_msg);
end;
/

prompt
prompt Creating procedure BARABRABRABRBA
prompt =================================
prompt
create or replace procedure qxfc.barabrabrabrba(v_query_time    varchar2, --��ѯ��ʼ����
                                           v_contrast_time varchar2, --��ѯ�ȶ�����
                                           v_channel       varchar2, --�������
                                           v_carrier       varchar2, -- ��Ӫ��
                                           v_business      number, --ҵ������
                                           v_province      varchar2, --ʡ��
                                           v_face          number, --��ֵ
                                           v_out_errcode   out number,
                                           v_out_msg       out varchar2,
                                           v_out_data      out pkg_cursor.pointer) as
  /*
   0:��ѯ��
   1:������
   2:ͬ����
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
    -- ����ǰһ��
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
    -- ͬ���ϸ��µ���
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
           r0.c "ҵ������",
           r0.d "��Ӫ��",
           r0.e "�յ�����",
           round(r0.e / r1.e * 100, 3) || '%' "�����յ�",
           round(r0.e / r3.e * 100, 3) || '%' "ͬ���յ�",
           r0.f "���۶�(Ԫ)",
           round(r0.f / r1.f * 100, 3) || '%' "��������",
           round(r0.f / r3.f * 100, 3) || '%' "ͬ������",
           r0.g "��ǰ����(Ԫ)",
           round(r0.g / r1.g * 100, 3) || '%' "��������",
           round(r0.g / r3.g * 100, 3) || '%' "ͬ������",
           r0.h "��ǰ����",
           round(r0.h - r1.h) "����������",
           r0.i "��ǰ�ɹ���",
           (r0.i - r1.i) "���ȳɹ���"
      from res0 r0
      left join res1 r1
        on r0.a = r1.a
       and r0.b = r1.b
      left join res2 r3
        on r0.a = r3.a
       and r0.b = r3.b;

  v_out_errcode := error_code.suc;
  v_out_msg     := '�����ɹ�';
exception
  when others then
    v_out_errcode := error_code.failure;
    v_out_msg     := '����ʧ��' || sqlerrm;
    mr_sp_write_log('sp_st_down_trade', v_out_errcode, sqlerrm, '����ʧ��');
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
  pragma autonomous_transaction; --��������
  /*
  ����:��Ӷ���������¼
  ����:jiyi
  ʱ��:2018-04-02
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
  ����:Ϊ�ÿ�����IMSI
  ����:jiyi
  ʱ��:2018-04-24
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
    v_ret_msg  := '������IMSI';
  end if;

  select count(1) into l_cntr from fc_order_ext t where t.iccno = v_imsi;
  if (l_cntr > 0) then
    rollback;
    v_ret_code := error_code.failure;
    v_ret_msg  := '�ѷ���������ÿ�';
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
  ����:�Զ���������
  ����:jiyi
  ʱ��:2018��5��1��
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
  ����:���׷���
  ����:jiyi
  ʱ��:2018-04-20
  */
  l_last_date  date;
  l_order_time date;
  l_end_time   date := sysdate - 1;
begin
  --������ձ���û�����ݣ�Ĭ������15������
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
  ����:���ν��׷���
  ����:jiyi
  ʱ��:2018-04-20
  */
  l_last_date  date;
  l_order_time date;
  l_end_time   date := sysdate - 1;
begin
  --������ձ���û�����ݣ�Ĭ������15������
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
  ����:��װ�������
  ����:jiyi
  ʱ��:2018-05-09
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
    
      --���¼���״̬
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
  ����:�ſ�������Ѷ���
  ����:jiyi
  ʱ��:2018-05-09
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
  ����:���˺ſ�����
  ����:jiyi
  ʱ��:2018-05-09
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
    
      --���¼���״̬
      update fc_order_main m
         set m.active_status = decode(it.active_status,
                                      '����Ч',
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
  ����:�Զ�����
  ����:jiyi
  ʱ��:2018-05-09
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
  ����:���ν��׷���
  ����:jiyi
  ʱ��:2018-04-20
  */
  l_last_date  date;
  l_order_time date;
  l_end_time   date := sysdate - 1;
begin
  --������ձ���û�����ݣ�Ĭ������15������
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
  ����:����ͷѳ�ֵ����
  ����:jiyi
  ʱ��:2018-05-03
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
                         '����ͷѶ���:' || l_order_no || '����',
                         l_task_id,
                         '',
                         v_operator);
      v_ret_code := error_code.suc;
      v_ret_msg  := 'OK';
    exception
      when others then
        rollback;
        sp_write_log('sp_charge_retry',
                     l_task_id || '����ʧ��:' || sqlerrm);
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
  ����:��ȡcookie
  ����:jiyi
  ʱ��:2018-05-21
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
  ����:������ѯ
  ����:jiyi
  ʱ��:2018-04-10
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
    sp_write_log('sp_create_task_query', '������ѯ�쳣:[' || v_task_id || '],' || sqlerrm);
end;
/

prompt
prompt Creating procedure SP_DA_REWARD
prompt ===============================
prompt
create or replace procedure qxfc.sp_da_reward(v_begin_time   varchar2, --��ʼʱ��
                                         v_end_time     varchar2, --����ʱ��
                                         v_up_channel   varchar2, --��������
                                         v_product_type varchar2, --��Ʒ����
                                         v_ret_code     out number,
                                         v_ret_msg      out varchar2,
                                         v_ret_data     out data_cursor.pointer) as
  /*
  ����:Ӷ�𱨱�
  ����:jiyi
  ʱ��:2018-04-28
  */
  l_begin_time date := trunc(to_date(v_begin_time, 'yyyy-mm-dd hh24:mi:ss'));
  l_end_time   date := trunc(to_date(v_end_time, 'yyyy-mm-dd hh24:mi:ss')) + 1;
begin
  open v_ret_data for
    select c.channel_name ��������,
           p.type_name ��Ʒ����,
           sum(t.change_money) Ӷ��,
           to_char(t.change_time, 'yyyy-MM-dd') �տ�ʱ��
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
    select '', '�ܼ�', sum(t.change_money), ''
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
create or replace procedure qxfc.sp_da_trade_channel(v_begin_time   varchar2, --��ʼʱ��
                                                v_end_time     varchar2, --����ʱ��
                                                v_up_channel   varchar2, --��������
                                                v_down_channel varchar2, --��������
                                                v_product_type varchar2, --��Ʒ����                                                
                                                v_ret_code     out number,
                                                v_ret_msg      out varchar2,
                                                v_ret_data     out data_cursor.pointer) as
  /*
  ����:�������׷�������
  ����:jiyi
  ʱ��:2018-04-28
  */
  l_begin_time date := trunc(to_date(v_begin_time, 'yyyy-mm-dd hh24:mi:ss'));
  l_end_time   date := trunc(to_date(v_end_time, 'yyyy-mm-dd hh24:mi:ss')) + 1;
begin
  if (v_down_channel is not null) then
    open v_ret_data for
      select p.type_name ��Ʒ����,
             c.channel_name ��������,
             sum(t.total_cntr) ������,
             sum(t.total_fee) Ӧ�տ�,
             sum(t.trade_fee) ���׷�,
             sum(t.refund_fee) �˿�
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
      select '�ܼ�',
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
      select p.type_name ��Ʒ����,
             c.channel_name ��������,
             sum(t.total_cntr) ������,
             sum(t.cost) �ɱ�,
             sum(t.express_fee) �ʷ�,
             sum(t.reward) Ӷ��,
             sum(t.refund_fee) �˿�
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
      select '�ܼ�',
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
                                            v_ret_msg  out varchar2 --�����Ϣ(json)
                                            ) as
  /*
  ����:��ȡ������Ϣ
  ����:jiyi
  ʱ��:2018-04-02
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

  --1.��ȡ������Ϣ
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

  --2.��ȡ�˻���Ϣ
  select t.account_no, t.account_pwd
    into l_account, l_key
    from fc_up_account t
   where t.id = l_up_account_id;

  select t.notify_url
    into l_notify_url
    from fc_up_channel t
   where t.channel_no = l_up_channel_no;

  --3.��ȡ�ӿ���Ϣ
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

  --����������Ϣ
  update fc_flow_task t
     set t.task_status = process_status.process, t.ip = v_robot_ip
   where t.tid = v_task_id;

  commit;

  v_ret_code := error_code.suc;
  sp_add_operate_log(l_order_no,
                     l_bind_id,
                     operate_type.manual,
                     '����',
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
  ����:��ȡ����key
  ����:jiyi
  ʱ��:2017-01-16
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
  ����:��ȡ�����Ϣ
  ����:jiyi
  ʱ��:2018-04-02
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

  --1.��ȡ�����Ϣ
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

  --2.��ȡ�˻���Ϣ
  select min(t.account_no), min(t.account_pwd)
    into l_account, l_key
    from fc_up_account t
   where t.channel_no = l_up_channel_no
     and rownum = 1;

  select t.notify_url
    into l_notify_url
    from fc_up_channel t
   where t.channel_no = l_up_channel_no;

  --3.��ȡ�ӿ���Ϣ
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
  v_ret_msg := f_json_add(v_ret_msg, 'sender_name', '�Ĵ�ǧ��');
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

  --����������Ϣ
  update fc_flow_task t
     set t.task_status = process_status.process, t.ip = v_robot_ip
   where t.tid = v_task_id;

  --���¿�ݼ�¼״̬
  update fc_order_express t
     set t.express_status = express_status.printing
   where t.id = l_exp_id;

  commit;
  v_ret_code := error_code.suc;
  sp_add_operate_log(l_order_no,
                     l_bind_id,
                     operate_type.system,
                     '��ӡ��ݵ���',
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
  ����:��ȡ���¿�ݵ��ŵ�����ƽ̨
  ����:jiyi
  ʱ��:2018-04-02
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

  --1.��ȡ�����Ϣ,�п�ݼ�¼����ʵ�巢��,�������ⷢ��
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

  --����������Ϣ
  update fc_flow_task t
     set t.task_status = process_status.process, t.ip = v_robot_ip
   where t.tid = v_task_id;

  --���¿�ݼ�¼״̬
  update fc_order_express t
     set t.express_status = express_status.delivery
   where t.id = l_exp_id;

  commit;

  v_ret_code := error_code.suc;
  sp_add_operate_log(l_order_no,
                     l_bind_id,
                     operate_type.system,
                     '���¿�ݵ��ŵ��̼�ƽ̨',
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
  ����:���µ���ƽ̨��ݵ��ű���
  ����:jiyi
  ʱ��:2018-04-12
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
                   l_order_no || 'ƽ̨�����쳣,���˹�����');
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.failure,
                                   '��������˹����');
    return;
  end if;

  --�ƶ�����
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
                 '������̿�������쳣:[' || v_task_id || ',' || v_msg || ']');
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
  ����:�����µ���ݲ�ѯ
  ����:jiyi
  ʱ��:2018-04-02
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

  --2.��ȡ�˻���Ϣ
  select min(t.account_no), min(t.account_pwd)
    into l_account, l_key
    from fc_up_account t
   where t.channel_no = l_up_channel_no
     and rownum = 1;

  --3.��ȡ�ӿ���Ϣ
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

  --����������Ϣ
  update fc_flow_task t
     set t.task_status = process_status.process, t.ip = v_robot_ip
   where t.tid = v_task_id;

  commit;
  v_ret_code := error_code.suc;
  /*sp_add_operate_log(l_order_no,
  l_bind_id,
  operate_type.system,
  '��ѯ�����µ���ݺ�',
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
  ����:������ݲ�ѯ�������
  ����:jiyi
  ʱ��:2018-04-12
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

  --�ƶ�����
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
                 '�����µ���ݲ�ѯ�����쳣:[' || v_task_id || ',' || v_mail_no || ',' ||
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
  ����:��ݽ������
  ����:jiyi
  ʱ��:2018-04-12
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

  --�ж��Ƿ��к�������
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
                   l_order_no || '��ӡ��ݵ��쳣:' || v_msg || ',���˹�����');
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.failure,
                                   '��������˹����');
    return;
  end if;

  select t.cost
    into l_cost
    from fc_up_product t
   where t.pid = l_up_product_id;

  --����ʽ���
  l_ret := f_fund_change_up(l_up_channel_no,
                            l_order_no,
                            l_task_id,
                            fund_change_type.express,
                            l_cost,
                            l_order_no || '������ݷ�');
  if (not l_ret) then
    rollback;
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.failure,
                                   '��ӿ���ʽ���ʧ��');
    return;
  end if;

  --�ƶ�����
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
                 '�����������쳣:[' || v_task_id || ',' || v_mail_no || ',' ||
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
  ����:��ݸ���
  ����:jiyi
  ʱ��:2018-04-12
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
                 '���¿�������쳣:[' || v_task_id || ',' || v_mail_no || ',' ||
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
  ����:��ȡʵ����Ϣ
  ����:jiyi
  ʱ��:2018-04-02
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

  --����������Ϣ
  update fc_flow_task t
     set t.task_status = process_status.process, t.ip = v_robot_ip
   where t.tid = v_task_id;

  commit;

  v_ret_code := error_code.suc;
  sp_add_operate_log(l_order_no,
                     l_bind_id,
                     operate_type.system,
                     '��ȡʵ�������Ϣ',
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
                                                  v_package_phone   varchar2, --�°���ĺ���
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
  ����:����ʵ����Ϣ
  ����:jiyi
  ʱ��:2018-04-12
  */
  l_task_id       number;
  l_flow_id       number;
  l_action        varchar2(32);
  l_order_no      varchar2(32);
  l_bind_id       varchar2(32);
  l_city_no       varchar2(32); --��������
  l_province_no   varchar2(32); --����ʡ��
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
                   l_order_no || '��ȡʵ����Ϣ�쳣:' || v_msg || ',���˹�����');
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.failure,
                                   '��������˹����');
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

  --���ݹ����ظ���ʡ��/����
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

  --�ƶ�����
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
                 '����ʵ����Ϣ�쳣:[' || v_task_id || ',' || v_msg || ']');
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
  ����:�˹�ԤԼ��װ
  ����:jiyi
  ʱ��:2018-04-27
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
                                  '��װʱ��:' || v_install_date,
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
    v_ret_msg  := '�ɹ�';
    commit;
  else
    rollback;
    v_ret_code := error_code.failure;
    v_ret_msg  := '����ԤԼʧ��';
    return;
  end if;

  sp_add_operate_log(l_order_no,
                     l_bind_id,
                     operate_type.manual,
                     '��װʱ��:' || v_install_date,
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
  ����:�ֶ���ӡ���
  ����:jiyi
  ʱ��:2018-04-27
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

  --�ж��Ƿ��к�������
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
         t.task_msg      = '�ֶ�����:' || v_mail_no,
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
                               '�ֶ�����:' || v_mail_no,
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
                     '�ֶ�����:' || v_mail_no,
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
  ����:�ֶ������֤
  ����:jiyi
  ʱ��:2018-04-27
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
         t.task_msg      = '�˹�����ʵ����Ϣ',
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
                               '�˹�����ʵ����Ϣ',
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
                     '����:' || l_order_no || '�˹�����ʵ����ϢOK',
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
                                            v_status    number, --0:�ɹ� 90:ʧ��
                                            v_trans_seq varchar2,
                                            v_remark    varchar2,
                                            v_operator  varchar2,
                                            v_ret_code  out number,
                                            v_ret_msg   out varchar2) as
  /*
  ����:�ֶ�����
  ����:jiyi
  ʱ��:2018-04-27
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
                     '����:' || l_order_no || ',' || l_action || '�ֶ�����',
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
                                                 v_status    number, --0:�ɹ� 90:ʧ��
                                                 v_trans_seq varchar2,
                                                 v_remark    varchar2,
                                                 v_operator  varchar2,
                                                 v_newphone  varchar2 default '',
                                                 v_ret_code  out number,
                                                 v_ret_msg   out varchar2) as
  /*
  ����:�ֶ�д��
  ����:jiyi
  ʱ��:2018-04-27
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

  --�����µ��ֻ���
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
                     '����:' || l_order_no || ',' || l_action || '��Ϊ�ֶ�д��',
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
  ����:��
  ����:jiyi
  ʱ��:2018-04-02
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

  --��ȡ���β�Ʒ��Ϣ
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
    l_msg := 'û�п�����������';
    update fc_order_main t
       set t.error_code   = 200,
           t.error_msg    = l_msg,
           t.order_status = order_status.failure
     where t.order_no = l_order_no;
    commit;
  
    v_ret_msg := f_get_bind_result(l_bind_id, '200', l_msg);
    sp_warn_insert(Warn_Keywords.task_exception,
                   '����' || l_order_no || l_msg,
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
         t.error_msg    = '�󶨳ɹ�'
   where t.order_no = l_order_no;
  commit;

  --��������
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
           t.delivery_msg = '��������ʧ��:' || l_task_msg
     where t.bind_id = l_bind_id;
  
    update fc_order_main t
       set t.order_status = order_status.failure,
           t.error_msg    = '��������ʧ��:' || l_task_msg
     where t.order_no = l_order_no;
  
    sp_warn_insert('�󶨸澯', l_order_no || '��������ʧ��:' || l_task_msg);
  end if;

  commit;
  v_ret_msg := f_get_bind_result(l_bind_id, error_code.suc, 'OK');
  sp_add_operate_log(l_order_no,
                     l_bind_id,
                     operate_type.system,
                     '�󶨳ɹ�');
exception
  when others then
    rollback;
    sp_write_log('sp_order_bind', '���쳣:' || sqlerrm);
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
  ����:������ѯ
  ����:jiyi
  ʱ��:2018-05-11
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
  ����:�ɷ�/���Ѽ�Ȩ����
  ����:jiyi
  ʱ��:2018-05-14
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
  ����:�յ�
  ����:jiyi
  ʱ��:2018-04-01
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
    v_ret_msg := f_get_task_result(l_order_no, '101', '��è����״̬����ȷ');
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
    v_ret_msg := f_get_task_result(l_order_no, '102', '����������');
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
    v_ret_msg := f_get_task_result(l_order_no, '103', '��Ʒ�����ڻ򲻿���');
    sp_warn_insert(warn_keywords.recv_exception,
                   '[' || v_coopOrderNo || ',' || v_productNo || ']�����ڻ򲻿���');
    return;
  end if;

  if (l_product_fee <> v_payFee) then
    v_ret_msg := f_get_task_result(l_order_no, '104', '����ȷ');
    sp_warn_insert(warn_keywords.recv_exception,
                   '[' || v_coopOrderNo || ',' || v_productNo || ']��Ʒ��һ��');
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

  --��������ʽ���
  l_ret := f_fund_change_down(v_coopId,
                              v_coopOrderNo,
                              l_order_no,
                              v_payFee,
                              fund_change_type.add,
                              '�¶����ӿ�',
                              l_trade_fee);
  commit;

  --����iccid
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

  --��������,��������
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
  sp_add_operate_log(l_order_no, '', operate_type.system, '�յ��ɹ�');
exception
  when others then
    rollback;
    l_order_no := '';
    v_ret_msg  := f_get_task_result(l_order_no, error_code.failure, sqlerrm);
    sp_write_log('sp_recv_order', sqlerrm);
    sp_warn_insert(warn_keywords.recv_exception,
                   v_coopOrderNo || '�յ��쳣:' || sqlerrm);
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
  ����:�˿������
  ����:jiyi
  ʱ��:2018-04-09
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
    --�����˿���Ϣ
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
    v_ret_msg := f_get_refund_result('', error_code.failure, '����������');
    return;
  end if;

  select t.buyer_alipay_id
    into l_to
    from fc_order_ext t
   where t.order_no = l_order_no;

  if (l_pay_fee < v_refund_fee) then
    v_ret_msg := f_get_refund_result('',
                                     error_code.failure,
                                     '�˿����ȷ');
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
    v_ret_msg := f_get_refund_result('', 200, '�����˿���쳣');
    sp_write_log('sp_recv_refund',
                 '�����˿���쳣:[' || v_down_order_no || '],' || sqlerrm);
end;
/

prompt
prompt Creating procedure SP_RECV_REFUND_OFFLINE
prompt =========================================
prompt
create or replace procedure qxfc.sp_recv_refund_offline(v_down_channel_no varchar2,
                                                   v_down_order_no   varchar2,
                                                   v_refund_fee      number, --�˿���
                                                   v_refund_from     varchar2, --�����ʺ�
                                                   v_refund_to       varchar2, --�տ��ʺ�
                                                   v_remark          varchar2, --��ע
                                                   v_operator        varchar2,
                                                   v_ret_code        out number,
                                                   v_ret_msg         out varchar2) as
  /*
  ����:�����˿�
  ����:jiyi
  ʱ��:2018-04-09
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
    v_ret_msg  := '���˿�';
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
    v_ret_msg  := '����������';
    return;
  end if;

  if (l_pay_fee < v_refund_fee) then
    v_ret_code := error_code.failure;
    v_ret_msg  := '�˿����ȷ';
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

  --��������ʽ���
  l_ret := f_fund_change_down(v_down_channel_no,
                              v_down_order_no,
                              l_order_no,
                              v_refund_fee,
                              fund_change_type.refund,
                              l_order_no || '�����˿�');

  if (not l_ret) then
    rollback;
    v_ret_code := error_code.failure;
    v_ret_msg  := '�����ʽ���ʧ��';
    return;
  end if;

  --���¶������˿�״̬
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
                     '�����˿�',
                     0,
                     '',
                     v_operator);
  v_ret_code := error_code.suc;
  v_ret_msg  := '�����˿�ɹ�';
exception
  when others then
    rollback;
    v_ret_code := error_code.failure;
    v_ret_msg  := sqlerrm;
    sp_write_log('sp_recv_refund_offline',
                 '�����˿���쳣:[' || v_down_order_no || '],' || sqlerrm);
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
  ����:�˿�ȷ��
  ����:jiyi
  ʱ��:2018-04-24
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
  v_ret_msg  := '�����˿�ȷ�ϳɹ�';
end;
/

prompt
prompt Creating procedure SP_SCAN_DB
prompt =============================
prompt
create or replace procedure qxfc.sp_scan_db(v_scan_name      varchar2, --����,
                                       v_robot_ip       varchar2, --������IP
                                       v_out_error_code out number, --100:�ɹ�;200:ʧ��
                                       v_out_count      out number, --��¼����
                                       v_out_batch_id   out number,
                                       v_out_msg        out varchar2) as
  /*
  ����:��ɨ��
  ����:jiyi
  ʱ��:2016-05-30
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
      v_out_msg        := 'ִ��ʱ��δ��';
      return;
  end;

  if (l_status <> enable_status.enabled) then
    rollback;
    v_out_error_code := error_code.failure;
    v_out_msg        := v_scan_name || '�󲹱���ͣ';
    return;
  end if;

  if (v_scan_name = 'task') then
    --1.����
    v_out_error_code := f_scan_task(l_do_frequency,
                                    l_once_count,
                                    v_out_batch_id,
                                    v_out_count);

  elsif (v_scan_name = 'notify') then
    --2.֪ͨ
    v_out_error_code := f_scan_notify(l_do_frequency,
                                      l_once_count,
                                      v_out_batch_id,
                                      v_out_count);
  elsif (v_scan_name = 'mail') then
    --3.���ɿ�ݵ���
    v_out_error_code := f_scan_mail(l_do_frequency,
                                    l_once_count,
                                    v_out_batch_id,
                                    v_out_count);
  elsif (v_scan_name = 'delivery') then
    --4.ƽ̨����
    v_out_error_code := f_scan_plat_delivery(l_do_frequency,
                                             l_once_count,
                                             v_out_batch_id,
                                             v_out_count);
  else
    --�������쳣
    raise_application_error(-20001, '�����ڵ�����:' || v_scan_name);
  end if;

  update fc_scan_config t
     set t.last_exec_time = sysdate,
         t.next_exec_time = sysdate + t.scan_interval / 24 / 60 / 60,
         t.last_exec_ip   = v_robot_ip
   where t.scan_name = v_scan_name;

  if (v_out_error_code = error_code.suc) then
    v_out_msg := '�����ɹ�';
  else
    v_out_msg := '������';
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
                                               v_status   number, --0:�ɹ�;90:ʧ��
                                               v_remark   varchar2,
                                               v_operator varchar2,
                                               v_ret_code out number,
                                               v_ret_msg  out varchar2) as
  /*
  ����:������˱���
  ����:jiyi
  ʱ��:2018-04-27
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
                     '����:' || l_order_no || ',' || l_action || '���Ϊ:' ||
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
                                        v_ret_msg  out varchar2 --�����Ϣ(json)
                                        ) as
  /*
  ����:��ȡ������Ϣ
  ����:jiyi
  ʱ��:2018-04-02
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

  --1.��ȡ������Ϣ
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

  --2.��ȡ�˻���Ϣ
  select t.account_no, t.account_pwd
    into l_account, l_key
    from fc_up_account t
   where t.id = l_up_account_id;

  select t.notify_url
    into l_notify_url
    from fc_up_channel t
   where t.channel_no = l_up_channel_no;

  --3.��ȡ�ӿ���Ϣ
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

  --����������Ϣ
  update fc_flow_task t
     set t.task_status = process_status.process, t.ip = v_robot_ip
   where t.tid = v_task_id;

  commit;

  v_ret_code := error_code.suc;
  sp_add_operate_log(l_order_no,
                     l_bind_id,
                     operate_type.manual,
                     '����',
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
  ����:��������
  ����:jiyi
  ʱ��:2018-05-03
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
                     '����:' || l_order_no || ',' || l_action || '����',
                     v_task_id,
                     '',
                     v_operator);
  v_ret_code := error_code.suc;
  v_ret_msg  := 'OK';
exception
  when others then
    rollback;
    sp_write_log('sp_task_retry', v_task_id || '����ʧ��:' || sqlerrm);
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
  ����:�������
  ����:jiyi
  ʱ��:2018-04-12
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
                 '���������쳣:[' || v_task_id || ',' || v_transeq || ',' ||
                 v_msg || ']');
end;
/

prompt
prompt Creating procedure SP_WRITE_CARD_GET
prompt ====================================
prompt
create or replace procedure qxfc.sp_write_card_get(v_task_id  varchar2, --������
                                              v_robot_ip varchar2, --IP
                                              v_ret_code out number,
                                              v_ret_msg  out varchar2 --�����Ϣ(json)
                                              ) as
  /*
  ����:��ȡд��������Ϣ
  ����:jiyi
  ʱ��:2018-04-02
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

  --1.��ȡ������Ϣ
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

  --2.��ȡ�˻���Ϣ
  l_ret := f_get_up_account(v_task_id, l_order_no, l_acct_id, l_account, l_key);
  if (not l_ret) then
    v_ret_code := error_code.failure;
    v_ret_msg  := '��ȡ�����ʺŴ���';
    return;
  end if;

  select t.notify_url into l_notify_url from fc_up_channel t where t.channel_no = l_up_channel_no;

  --3.��ȡ�ӿ���Ϣ
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

  --����������Ϣ
  update fc_flow_task t
     set t.task_status = process_status.process, t.ip = v_robot_ip
   where t.tid = v_task_id;

  commit;
  v_ret_code := error_code.suc;
  sp_add_operate_log(l_order_no, l_bind_id, operate_type.system, 'д��', v_task_id, v_robot_ip);
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
  ����:д�ſ�����
  ����:jiyi
  ʱ��:2018-04-08
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

  --�����µ��ֻ���
  if (v_newphone is not null and length(v_newphone) > 0) then
    update fc_order_main t
       set t.active_phone = v_newphone
     where t.order_no = l_order_no;
  end if;

  --����������Ϣ
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
                   l_order_no || 'д���쳣:' || v_msg || ',���˹�����');
    v_ret_msg := f_get_task_result(l_order_no,
                                   error_code.failure,
                                   '��������˹����');
    return;
  end if;

  --����ʽ���
  if (v_status = process_status.success and
     l_debit_mode = debit_mode.immediate) then
    l_ret := f_fund_change_up(l_up_channel_no,
                              l_order_no,
                              l_task_id,
                              fund_change_type.reduce,
                              l_cost,
                              l_order_no || '�����ۿ�');
    if (not l_ret) then
      rollback;
      v_ret_msg := f_get_task_result(l_order_no,
                                     error_code.failure,
                                     '��������ʽ���ʧ��');
      return;
    end if;
  end if;

  --��������
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
  ���ߣ�guowei
  ʱ�䣺2019/7/9
  ������Ͷ�߱��ƿ����
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
