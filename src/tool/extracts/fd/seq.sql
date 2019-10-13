Creating sequence SEQ_ASSETSDATAMONITOR_AUTO_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_ASSETSDATAMONITOR_AUTO_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_B2E_BANK_QUERY_ID
prompt =======================================
prompt
create sequence FD_ACCOUNT.SEQ_B2E_BANK_QUERY_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 20180
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_B2E_BATCH_NO
prompt ==================================
prompt
create sequence FD_ACCOUNT.SEQ_B2E_BATCH_NO
minvalue 0
maxvalue 9999999999999999999999999999
start with 217727
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_B2E_RCV_CERT_NO
prompt =====================================
prompt
create sequence FD_ACCOUNT.SEQ_B2E_RCV_CERT_NO
minvalue 9800000005914
maxvalue 9999999999999
start with 9800000006934
increment by 3
cache 20;

prompt
prompt Creating sequence SEQ_B2E_SYSTEM_LOG_ID
prompt =======================================
prompt
create sequence FD_ACCOUNT.SEQ_B2E_SYSTEM_LOG_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 740
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_B2E_UP_CHANNEL_CONFIG_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_B2E_UP_CHANNEL_CONFIG_ID
minvalue 1
maxvalue 9999999999999999999999999
start with 1120
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_B2E_UP_WHITE_LIST_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_B2E_UP_WHITE_LIST_ID
minvalue 1
maxvalue 999999999999999999999999
start with 101
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_BANK_ACCOUNT_INFO_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_BANK_ACCOUNT_INFO_ID
minvalue 1
maxvalue 99999999999999999999
start with 5000180
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BANK_CASH_FUND_ID
prompt =======================================
prompt
create sequence FD_ACCOUNT.SEQ_BANK_CASH_FUND_ID
minvalue 1
maxvalue 99999999999999999999
start with 5681
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BANK_REPORT_SNAP_ID
prompt =========================================
prompt
create sequence FD_ACCOUNT.SEQ_BANK_REPORT_SNAP_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BANK_SERVICE_ID
prompt =====================================
prompt
create sequence FD_ACCOUNT.SEQ_BANK_SERVICE_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 8380
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_BANK_ZERO_BALANCE_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_BANK_ZERO_BALANCE_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BASE_BUSINESS_LINE_ID
prompt ===========================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_BUSINESS_LINE_ID
minvalue 1
maxvalue 99999999999999999999
start with 101
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BASE_CHAN_BUSINESS_MA_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_CHAN_BUSINESS_MA_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BASE_COMPANY_ACCOUNT_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_COMPANY_ACCOUNT_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 6000040
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BASE_COMPANY_INFO_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_COMPANY_INFO_ID
minvalue 1
maxvalue 99999999999999999999
start with 221
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BASE_CO_ACCOUNT_CAP_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_CO_ACCOUNT_CAP_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 7000000
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_BASE_CO_ACCOUNT_IMP_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_CO_ACCOUNT_IMP_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 9000001
increment by 1
nocache;

prompt
prompt Creating sequence SEQ_BASE_CO_ACCOUNT_SELF_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_CO_ACCOUNT_SELF_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 8000100
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_BASE_DOWN_ACCOUNT_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_DOWN_ACCOUNT_ID
minvalue 1
maxvalue 99999999999999999999
start with 1101400
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BASE_DOWN_ACCOUNT_MAP_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_DOWN_ACCOUNT_MAP_ID
minvalue 1
maxvalue 99999999999999999999
start with 1241
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BASE_DOWN_CHANNEL_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_DOWN_CHANNEL_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BASE_DOWN_IMP_MAP_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_DOWN_IMP_MAP_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 900014
increment by 1
nocache;

prompt
prompt Creating sequence SEQ_BASE_DOWN_SYSTEM_MAP_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_DOWN_SYSTEM_MAP_ID
minvalue 1
maxvalue 99999999999999999999
start with 1881
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BASE_DOWN_UP_MAP_ID
prompt =========================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_DOWN_UP_MAP_ID
minvalue 10
maxvalue 999999999999999
start with 30
increment by 1
cache 10;

prompt
prompt Creating sequence SEQ_BASE_SOURCE_SYSTEM_ID
prompt ===========================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_SOURCE_SYSTEM_ID
minvalue 1
maxvalue 99999999999999999999
start with 121
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BASE_UP_ACCOUNT_ID
prompt ========================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_UP_ACCOUNT_ID
minvalue 1
maxvalue 99999999999999999999
start with 1201880
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_BASE_UP_ACCOUNT_MAP_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_UP_ACCOUNT_MAP_ID
minvalue 1
maxvalue 99999999999999999999
start with 3941
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BASE_UP_ACCOUNT_SYNC_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_UP_ACCOUNT_SYNC_ID
minvalue 1
maxvalue 99999999999999999999
start with 1200780
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_BASE_UP_CHANNEL_ID
prompt ========================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_UP_CHANNEL_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BASE_UP_SYSTEM_MAP_ID
prompt ===========================================
prompt
create sequence FD_ACCOUNT.SEQ_BASE_UP_SYSTEM_MAP_ID
minvalue 1
maxvalue 99999999999999999999
start with 2461
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_BATCH_UP_FUND_NO
prompt ======================================
prompt
create sequence FD_ACCOUNT.SEQ_BATCH_UP_FUND_NO
minvalue 0
maxvalue 9999999999999999999999999999
start with 584435
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_COACCOUNTNAME_AUTO_ID
prompt ===========================================
prompt
create sequence FD_ACCOUNT.SEQ_COACCOUNTNAME_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 121
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_CZTH_TRADE_ORDERRECORD_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_CZTH_TRADE_ORDERRECORD_ID
minvalue 1
maxvalue 9999999999999999999999
start with 1001
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_CZTH_TRADE_REPORTRECORD_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_CZTH_TRADE_REPORTRECORD_ID
minvalue 1
maxvalue 9999999999999999999999
start with 401
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_CZTH_TRADE_SERVICEFEE_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_CZTH_TRADE_SERVICEFEE_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 41
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_DKTRADEREFUNDSYSCOST_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_DKTRADEREFUNDSYSCOST_ID
minvalue 0
maxvalue 9999999999999999999999999999
start with 584495
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_DK_BASE_DOWN_ACCOUNT_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_DK_BASE_DOWN_ACCOUNT_ID
minvalue 1
maxvalue 9999999999
start with 141
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_DK_CHANNEL_SETTLE_BATCH_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_DK_CHANNEL_SETTLE_BATCH_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 62300
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_DK_CHENNEL_SETTLE_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_DK_CHENNEL_SETTLE_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 60100
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_DK_DOWN_ACCOUNT_MAP_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_DK_DOWN_ACCOUNT_MAP_ID
minvalue 1
maxvalue 9999999999
start with 161
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_DK_UP_ACCOUNT_ID
prompt ======================================
prompt
create sequence FD_ACCOUNT.SEQ_DK_UP_ACCOUNT_ID
minvalue 1
maxvalue 9999999999
start with 161
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_DOWNADDAPPLY_AUTO_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_DOWNADDAPPLY_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 221
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDB2EBANKADDTYPE_AUTO_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EBANKADDTYPE_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 261
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDB2EBANKCONFIG_AUTO_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EBANKCONFIG_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 182
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDB2EBANKERRCODECONFIG_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EBANKERRCODECONFIG_ID
minvalue 1
maxvalue 99999999999999999999
start with 161
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDB2EBANKSERVICEFEETYPE_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EBANKSERVICEFEETYPE_ID
minvalue 1
maxvalue 99999999999999999999
start with 101
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDB2EBANKSUBACCOUNT_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EBANKSUBACCOUNT_ID
minvalue 1
maxvalue 99999999999999999999
start with 61
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDB2EBANKTASK_AUTO_ID
prompt ===========================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EBANKTASK_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 4158
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDB2EBANKWORKDATECONFIG_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EBANKWORKDATECONFIG_ID
minvalue 1
maxvalue 99999999999999999999
start with 221
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDB2EBANKWORKDATECO_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EBANKWORKDATECO_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_FDB2EDOWNRECEIVERECORD_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EDOWNRECEIVERECORD_ID
minvalue 1
maxvalue 99999999999999999999
start with 1381
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDB2EDOWNWHITELIST_ID
prompt ===========================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EDOWNWHITELIST_ID
minvalue 1
maxvalue 99999999999999999999
start with 241
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDB2EUPADDAMOUNTCALC_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EUPADDAMOUNTCALC_ID
minvalue 1
maxvalue 99999999999999999999
start with 161
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDB2EUPADDMAINRECORD_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EUPADDMAINRECORD_ID
minvalue 1
maxvalue 99999999999999999999
start with 861
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDB2EUPADDSUBRECORD_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EUPADDSUBRECORD_ID
minvalue 1
maxvalue 99999999999999999999
start with 621
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDB2EUPDATEADDTYPEMAP_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EUPDATEADDTYPEMAP_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDB2EUPRECEIVEBANKCARD_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_FDB2EUPRECEIVEBANKCARD_ID
minvalue 1
maxvalue 99999999999999999999
start with 141
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FDBANKSTREAMFULL_AUTO_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_FDBANKSTREAMFULL_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_FD_BASE_COMPANY_SETTLE_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_FD_BASE_COMPANY_SETTLE_ID
minvalue 1
maxvalue 99999999999999999999
start with 221
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_INCOME_CHANNEL_MTH_SUMID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_CHANNEL_MTH_SUMID
minvalue 1
maxvalue 9999999999999999999999
start with 1
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_INCOME_CHANNEL_MTH_TRADEID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_CHANNEL_MTH_TRADEID
minvalue 1
maxvalue 9999999999999999999999
start with 1601
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_INCOME_DOWN_GROUP_MAPID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_DOWN_GROUP_MAPID
minvalue 1
maxvalue 9999999999999999999999
start with 4601
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_INCOME_DOWN_TRADEID
prompt =========================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_DOWN_TRADEID
minvalue 1
maxvalue 9999999999999999999999
start with 1200
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_INCOME_DOWN_UP_CONFIGID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_DOWN_UP_CONFIGID
minvalue 1
maxvalue 9999999999999999999999
start with 1
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_INCOME_DOWN_UP_MONTHID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_DOWN_UP_MONTHID
minvalue 1
maxvalue 9999999999999999999999
start with 1401
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_INCOME_DOWN_UP_TRADEID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_DOWN_UP_TRADEID
minvalue 1
maxvalue 9999999999999999999999
start with 1
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_INCOME_EXCLUDE_UPID
prompt =========================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_EXCLUDE_UPID
minvalue 1
maxvalue 9999999999999999999999
start with 601
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_INCOME_FLOW_BATCHID
prompt =========================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_FLOW_BATCHID
minvalue 1
maxvalue 99999999999999999999999
start with 401
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_INCOME_FLOW_CONFIGID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_FLOW_CONFIGID
minvalue 1
maxvalue 9999999999999999999999
start with 1
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_INCOME_FLOW_TASKID
prompt ========================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_FLOW_TASKID
minvalue 1
maxvalue 9999999999999999999999
start with 401
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_INCOME_MONTH_SUM_TRADEID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_MONTH_SUM_TRADEID
minvalue 1
maxvalue 9999999999999999999999
start with 1
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_INCOME_MONTH_TRADEID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_MONTH_TRADEID
minvalue 1
maxvalue 9999999999999999999999
start with 601
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_INCOME_UP_GROUP_MAPID
prompt ===========================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_UP_GROUP_MAPID
minvalue 1
maxvalue 9999999999999999999999
start with 401
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_INCOME_UP_TRADEID
prompt =======================================
prompt
create sequence FD_ACCOUNT.SEQ_INCOME_UP_TRADEID
minvalue 1
maxvalue 9999999999999999999999
start with 1
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_REPORT_BALANCE_DIFFER_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_BALANCE_DIFFER_ID
minvalue 1
maxvalue 999999999999999
start with 21
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_REPORT_BANK_DAILY_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_BANK_DAILY_ID
minvalue 1
maxvalue 99999999999999999999
start with 161
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_REPORT_CAPITAL_USE_RATE_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_CAPITAL_USE_RATE_ID
minvalue 1
maxvalue 99999999999999999999
start with 69000
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_REPORT_CHANNEL_HALFHOUR_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_CHANNEL_HALFHOUR_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 12720
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_REPORT_CHAN_ZERO_BALA_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_CHAN_ZERO_BALA_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_REPORT_COMMISSION_DAILY_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_COMMISSION_DAILY_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_REPORT_COMMISSION_MONTH_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_COMMISSION_MONTH_ID
minvalue 1
maxvalue 99999999999999999999
start with 21
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_REPORT_COMMI_PROFIT_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_COMMI_PROFIT_ID
minvalue 1
maxvalue 99999999999999999999
start with 20830
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_REPORT_DOWN_DAILY_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_DOWN_DAILY_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_REPORT_OUTSYS_PROFIT_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_OUTSYS_PROFIT_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 62140
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_REPORT_PROFIT_DAILY_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_PROFIT_DAILY_ID
minvalue 1
maxvalue 99999999999999999999
start with 441
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_REPORT_PROFIT_MONTHLY_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_PROFIT_MONTHLY_ID
minvalue 1
maxvalue 99999999999999999999
start with 421
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_REPORT_SERVICE_FEE_ID
prompt ===========================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_SERVICE_FEE_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 630120
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_REPORT_UP_DAILY_ID
prompt ========================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_UP_DAILY_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_REPORT_ZERO_BALANCE_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_REPORT_ZERO_BALANCE_ID
minvalue 1
maxvalue 99999999999999999999
start with 27480
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_REPROT_CHANNEL_SNAP_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_REPROT_CHANNEL_SNAP_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_RPT_MERGE_CHANNEL_MAP_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_RPT_MERGE_CHANNEL_MAP_ID
minvalue 1
maxvalue 99999999999999999999
start with 41
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_RPT_MERGE_TRADE_ADD_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_RPT_MERGE_TRADE_ADD_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 64080
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_RPT_REPORT_TRADE_ID
prompt =========================================
prompt
create sequence FD_ACCOUNT.SEQ_RPT_REPORT_TRADE_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 350020
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_RPT_REPORT_TRADE_SPLIT_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_RPT_REPORT_TRADE_SPLIT_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 50060
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_RPT_UNIT_CHANNEL_MAP_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_RPT_UNIT_CHANNEL_MAP_ID
minvalue 1
maxvalue 99999999999999999999
start with 10060
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_SUP_BASE_DOWN_ACCOUNT_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_SUP_BASE_DOWN_ACCOUNT_ID
minvalue 1
maxvalue 9999999999999999999999
start with 201
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_SUP_BASE_RELATE_ADD_MAP_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_SUP_BASE_RELATE_ADD_MAP_ID
minvalue 1
maxvalue 9999999999999999999999
start with 1401
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_SUP_BASE_UP_ACCOUNT_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_SUP_BASE_UP_ACCOUNT_ID
minvalue 1
maxvalue 9999999999999999999999
start with 201
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_SUP_REPORT_DAILY_MANUAL_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_SUP_REPORT_DAILY_MANUAL_ID
minvalue 1
maxvalue 9999999999999999999999
start with 401
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_SUP_REPORT_DAILY_TRADE_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_SUP_REPORT_DAILY_TRADE_ID
minvalue 1
maxvalue 9999999999999999999999
start with 201
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_SUP_REPORT_ZERO_BALANCE_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_SUP_REPORT_ZERO_BALANCE_ID
minvalue 1
maxvalue 9999999999999999999999
start with 201
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_SUP_TRADE_DOWN_FUND_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_SUP_TRADE_DOWN_FUND_ID
minvalue 1
maxvalue 9999999999999999999999
start with 15401
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_SUP_TRADE_ORDER_MAIN_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_SUP_TRADE_ORDER_MAIN_ID
minvalue 1
maxvalue 9999999999999999999999
start with 10601
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_SUP_TRADE_UP_FUND_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_SUP_TRADE_UP_FUND_ID
minvalue 1
maxvalue 9999999999999999999999
start with 16001
increment by 1
cache 200;

prompt
prompt Creating sequence SEQ_SYSTEM_BUSINESS_INFO_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_SYSTEM_BUSINESS_INFO_ID
minvalue 1
maxvalue 9999999999999999999999999
start with 460
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_SYSTEM_BUSINESS_MAP_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_SYSTEM_BUSINESS_MAP_ID
minvalue 1
maxvalue 9999999999999999999999999
start with 12060
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_SYSTEM_BUSINESS_STATIS_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_SYSTEM_BUSINESS_STATIS_ID
minvalue 1
maxvalue 9999999999999999999999999
start with 240
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_SYSTEM_DICTIONARY_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_SYSTEM_DICTIONARY_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 20140
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_SYSTEM_HANDLE_LOG_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_SYSTEM_HANDLE_LOG_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 7778
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_SYSTEM_LOG_ID
prompt ===================================
prompt
create sequence FD_ACCOUNT.SEQ_SYSTEM_LOG_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 4752941
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_SYSTEM_WARN_ID
prompt ====================================
prompt
create sequence FD_ACCOUNT.SEQ_SYSTEM_WARN_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 35000880
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_SYS_BUSINESS_INFO_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_SYS_BUSINESS_INFO_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 241
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_SYS_BUSINESS_MAP_ID
prompt =========================================
prompt
create sequence FD_ACCOUNT.SEQ_SYS_BUSINESS_MAP_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 10240
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_SYS_BUSINESS_STATIC_MAP_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_SYS_BUSINESS_STATIC_MAP_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 200
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TRADE_ACTIVITY_DETAILS_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_ACTIVITY_DETAILS_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 60101
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_TRADE_ACTIVITY_MAIN_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_ACTIVITY_MAIN_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 50710
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_TRADE_BASE_JOIN_ID
prompt ========================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_BASE_JOIN_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 200060
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TRADE_CAPITAL_HANDER_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_CAPITAL_HANDER_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_TRADE_COMMISSION_FUND_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_COMMISSION_FUND_ID
minvalue 1
maxvalue 99999999999999999999
start with 41
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_TRADE_COMMISSION_SETTLE_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_COMMISSION_SETTLE_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 301260
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TRADE_CO_CAP_FUND_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_CO_CAP_FUND_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 81780
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TRADE_CO_IMP_FUND_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_CO_IMP_FUND_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 665604
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TRADE_CO_RECV_FUND_ID
prompt ===========================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_CO_RECV_FUND_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 32700
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TRADE_CO_SELF_FUND_ID
prompt ===========================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_CO_SELF_FUND_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 50260
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TRADE_DIFFER_SUMMARY_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_DIFFER_SUMMARY_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 3020
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TRADE_DOWN_FUND_ID
prompt ========================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_DOWN_FUND_ID
minvalue 1
maxvalue 99999999999999999999
start with 445328
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_TRADE_DOWN_MANUAL_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_DOWN_MANUAL_ID
minvalue 1
maxvalue 99999999999999999999
start with 65255
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_TRADE_DOWN_MANUAL_YC_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_DOWN_MANUAL_YC_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 4020
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TRADE_DOWN_REFUND_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_DOWN_REFUND_ID
minvalue 1
maxvalue 99999999999999999999
start with 35467
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_TRADE_ORDER_MAIN_DIFFER_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_ORDER_MAIN_DIFFER_ID
minvalue 1
maxvalue 9999999999999999999999999999
start with 208347
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_TRADE_ORDER_MAIN_ID
prompt =========================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_ORDER_MAIN_ID
minvalue 1
maxvalue 99999999999999999999
start with 85444421
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_TRADE_PROFIT_FUND_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_PROFIT_FUND_ID
minvalue 1
maxvalue 99999999999999999999
start with 81
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_TRADE_RV_APPLY_ID
prompt =======================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_RV_APPLY_ID
minvalue 1
maxvalue 99999999999999999999999999
start with 41
increment by 1
cache 10;

prompt
prompt Creating sequence SEQ_TRADE_UP_FUND_DIFFER_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_UP_FUND_DIFFER_ID
minvalue 1
maxvalue 99999999999999999999
start with 361
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_TRADE_UP_FUND_ID
prompt ======================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_UP_FUND_ID
minvalue 1
maxvalue 99999999999999999999
start with 369041
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_TRADE_UP_MANUAL_ID
prompt ========================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_UP_MANUAL_ID
minvalue 1
maxvalue 99999999999999999999
start with 65314
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_TRADE_UP_REFUND_ID
prompt ========================================
prompt
create sequence FD_ACCOUNT.SEQ_TRADE_UP_REFUND_ID
minvalue 1
maxvalue 99999999999999999999
start with 62432
increment by 1
cache 20
cycle;

prompt
prompt Creating sequence SEQ_YXBASEAGENT_AUTO_ID
prompt =========================================
prompt
create sequence FD_ACCOUNT.SEQ_YXBASEAGENT_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 241
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXBASEBUSINESSMAP_AUTO_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXBASEBUSINESSMAP_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 121
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXBASEDOWNACCOUNT_AUTO_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXBASEDOWNACCOUNT_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 341
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXBASEDOWNCHANNEL_AUTO_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXBASEDOWNCHANNEL_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXBASEUPACCOUNT_AUTO_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXBASEUPACCOUNT_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 341
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXBASEUPCHANNEL_AUTO_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXBASEUPCHANNEL_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXREPORTDAILY_AUTO_ID
prompt ===========================================
prompt
create sequence FD_ACCOUNT.SEQ_YXREPORTDAILY_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 101
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXREPORTFUNDDAILY_AUTO_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXREPORTFUNDDAILY_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 41
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXTHPARTYACC_AUTO_ID
prompt ==========================================
prompt
create sequence FD_ACCOUNT.SEQ_YXTHPARTYACC_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 21
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXTRADEAGENCYASSIGNED_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXTRADEAGENCYASSIGNED_ID
minvalue 1
maxvalue 99999999999999999999
start with 41
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXTRADEAGENTFUND_AUTO_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXTRADEAGENTFUND_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 2901
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXTRADEAGENTMANUAL_AUTO_ID
prompt ================================================
prompt
create sequence FD_ACCOUNT.SEQ_YXTRADEAGENTMANUAL_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXTRADEDOWNFUND_AUTO_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXTRADEDOWNFUND_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 12281
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXTRADEDOWNMANUAL_AUTO_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXTRADEDOWNMANUAL_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXTRADEEXPENSE_AUTO_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXTRADEEXPENSE_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 121
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXTRADEORDERMAINDIFFER_ID
prompt ===============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXTRADEORDERMAINDIFFER_ID
minvalue 1
maxvalue 99999999999999999999
start with 12721
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXTRADEORDERMAIN_AUTO_ID
prompt ==============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXTRADEORDERMAIN_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 13041
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXTRADEUPFUNDDIFFER_ID
prompt ============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXTRADEUPFUNDDIFFER_ID
minvalue 1
maxvalue 99999999999999999999
start with 221
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXTRADEUPFUND_AUTO_ID
prompt ===========================================
prompt
create sequence FD_ACCOUNT.SEQ_YXTRADEUPFUND_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 4041
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXTRADEUPMANUAL_AUTO_ID
prompt =============================================
prompt
create sequence FD_ACCOUNT.SEQ_YXTRADEUPMANUAL_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 1
increment by 1
cache 20;

prompt
prompt Creating sequence SEQ_YXZEROBALANCE_AUTO_ID
prompt ===========================================
prompt
create sequence FD_ACCOUNT.SEQ_YXZEROBALANCE_AUTO_ID
minvalue 1
maxvalue 99999999999999999999
start with 701
increment by 1
cache 20;

prompt
prompt 