Creating sequence SEQ_BACKUP_BATCH_NO
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
prompt 