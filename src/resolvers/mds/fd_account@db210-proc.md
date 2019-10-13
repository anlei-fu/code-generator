
----
### ***czth_p_auto_trade_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***czth_p_trade_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_bill_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_draw_unit|number|false|--||
|v_draw_face|number|false|--||
|v_draw_amount|number|false|--||
|v_service_rate|number|false|--||
|v_subsidy|number|false|--||
|v_order_time|varchar2|false|--||
|v_out_change_time|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_adjust_down_manual_settle***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_adjust_up_manual_settle***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_auto_balance_warn_down***
*   ***description***

----
### ***dk_p_auto_balance_warn_up***
*   ***description***

----
### ***dk_p_auto_commi_profit_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_add_date|varchar2|false|null||

----
### ***dk_p_auto_commi_profit_down***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***dk_p_auto_commi_profit_up***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***dk_p_auto_report_merge***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_merge_date|varchar2|false|null||

----
### ***dk_p_auto_t***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_add_amount|in|false|number||

----
### ***dk_p_auto_zero_down_commi_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***dk_p_auto_zero_down_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***dk_p_auto_zero_up_commi_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***dk_p_auto_zero_up_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***dk_p_bank_commision_settle***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_type|number|false|--||
|v_bank_account_id|number|false|--||
|v_commission|number|false|--||
|v_commi_month|varchar2|false|--||
|v_service_fee|number|false|--||
|v_settle_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_manual_down_commi_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_commi_month|varchar2|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_manual_down_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_manual_down_rv_channel***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_revise_type|number|false|--||
|v_revise_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_manual_down_rv_trade***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_down_draw_amount|number|false|--||
|v_down_real_amount|number|false|--||
|v_business_type|number|false|--||
|v_bill_type|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_manual_down_settle***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_settle_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_manual_up_commi_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_commi_month|varchar2|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_manual_up_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_manual_up_rv_channel***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_revise_type|number|false|--||
|v_revise_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_manual_up_rv_trade***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_up_draw_amount|number|false|--||
|v_up_real_amount|number|false|--||
|v_business_type|number|false|--||
|v_bill_type|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_manual_up_settle***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_settle_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_trade_down_order_fee_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_source_name|varchar2|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_deduct_account|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_total_face|number|false|--||
|v_deduct_unit|number|false|--||
|v_order_time|varchar2|false|--||
|v_settle_amount|number|false|--||
|v_service_pay|number|false|--||
|v_memo|varchar2|false|--||
|v_deduct_times|number|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***dk_p_trade_down_order_fee_ref***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_source_name|varchar2|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_refund_unit|number|false|--||
|v_refund_face|number|false|--||
|v_refund_amount|number|false|--||
|v_real_refund|number|false|--||
|v_order_date|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_sys_paid_amount|number|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_trade_down_order_loss_ref***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_source_name|varchar2|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_refund_unit|number|false|--||
|v_refund_face|number|false|--||
|v_refund_amount|number|false|--||
|v_real_refund|number|false|--||
|v_order_date|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_sys_paid_amount|number|false|--||
|v_calc_profit|number|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_trade_time_differ_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_add_debit_amount|number|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_trade_up_order_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_source_name|varchar2|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_deduct_account|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_down_order_unit|number|false|--||
|v_down_order_face|number|false|--||
|v_down_draw_unit|number|false|--||
|v_down_draw_face|number|false|--||
|v_down_draw_amount|number|false|--||
|v_down_real_amount|number|false|--||
|v_up_draw_unit|number|false|--||
|v_up_draw_face|number|false|--||
|v_up_draw_amount|number|false|--||
|v_up_real_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_deduct_times|number|false|--||
|v_result|varchar2|true|--||

----
### ***dk_p_trade_up_order_refund***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_source_name|varchar2|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_up_refund_unit|number|false|--||
|v_up_refund_face|number|false|--||
|v_up_refund_amount|number|false|--||
|v_up_refund_real_amount|number|false|--||
|v_down_refund_unit|number|false|--||
|v_down_refund_face|number|false|--||
|v_down_refund_amount|number|false|--||
|v_down_refund_real_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dsup_p_adjust_down_after***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_report_id|number|false|--||
|v_adjust_days|number|false|--||
|v_adjust_user|varchar2|false|--||
|v_adjust_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dsup_p_adjust_down_pre***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_settle_id|number|false|--||
|v_adjust_days|number|false|--||
|v_adjust_user|varchar2|false|--||
|v_adjust_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dsup_p_adjust_up_after***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_report_id|number|false|--||
|v_adjust_days|number|false|--||
|v_adjust_user|varchar2|false|--||
|v_adjust_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dsup_p_adjust_up_pre***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_settle_id|number|false|--||
|v_adjust_days|number|false|--||
|v_adjust_user|varchar2|false|--||
|v_adjust_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dsup_p_auto_channel_settle***
*   ***description***

----
### ***dsup_p_manu_down_settle_after***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_settle_record_id|number|false|--||
|v_service_fee|number|false|--||
|v_partner_account|varchar2|false|--||
|v_settle_user|varchar2|false|--||
|v_settle_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dsup_p_manu_down_settle_pre***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_settle_amount|number|false|--||
|v_service_fee|number|false|--||
|v_partner_account|varchar2|false|--||
|v_settle_user|varchar2|false|--||
|v_settle_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dsup_p_manu_down_settle_pre_t***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_record_no|varchar2|false|--||
|v_settle_amount|number|false|--||
|v_service_fee|number|false|--||
|v_partner_account|varchar2|false|--||
|v_settle_user|varchar2|false|--||
|v_settle_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dsup_p_manu_up_settle_after***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_settle_record_id|number|false|--||
|v_partner_account|varchar2|false|--||
|v_settle_user|varchar2|false|--||
|v_settle_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dsup_p_manu_up_settle_pre***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_settle_amount|number|false|--||
|v_partner_account|varchar2|false|--||
|v_settle_user|varchar2|false|--||
|v_settle_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dsup_p_manu_up_settle_pre_t***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_record_no|varchar2|false|--||
|v_settle_amount|number|false|--||
|v_partner_account|varchar2|false|--||
|v_settle_user|varchar2|false|--||
|v_settle_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dsup_p_trade_down_order_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_source_name|varchar2|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_fund_no|varchar2|false|--||
|v_is_adjust|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_deduct_account|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_total_face|number|false|--||
|v_deduct_unit|number|false|--||
|v_order_time|varchar2|false|--||
|v_trade_time|varchar2|false|--||
|v_settle_amount|number|false|--||
|v_service_pay|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***dsup_p_trade_down_order_ref***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_source_name|varchar2|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_refund_unit|number|false|--||
|v_refund_face|number|false|--||
|v_refund_amount|number|false|--||
|v_real_refund|number|false|--||
|v_order_date|varchar2|false|--||
|v_trade_time|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dsup_p_trade_up_order_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_source_name|varchar2|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_deduct_account|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_down_order_unit|number|false|--||
|v_down_order_face|number|false|--||
|v_down_draw_unit|number|false|--||
|v_down_draw_face|number|false|--||
|v_down_draw_amount|number|false|--||
|v_down_real_amount|number|false|--||
|v_up_draw_unit|number|false|--||
|v_up_draw_face|number|false|--||
|v_up_draw_amount|number|false|--||
|v_up_real_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_trade_time|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***dsup_p_trade_up_order_refund***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_source_name|varchar2|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_up_refund_unit|number|false|--||
|v_up_refund_face|number|false|--||
|v_up_refund_amount|number|false|--||
|v_up_refund_real_amount|number|false|--||
|v_down_refund_unit|number|false|--||
|v_down_refund_face|number|false|--||
|v_down_refund_amount|number|false|--||
|v_down_refund_real_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_trade_time|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_activity_prepay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_activity_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_trade_record_no|varchar2|false|--||
|v_prepay_amount|number|false|--||
|v_service_fee|number|false|--||
|v_handle_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_activity_profit_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_activity_id|number|false|--||
|v_trade_record_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_bill_type|number|false|--||
|v_add_profit_amount|number|false|--||
|v_handle_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_activity_profit_minus***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_activity_id|number|false|--||
|v_trade_record_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_bill_type|number|false|--||
|v_minus_profit_amount|number|false|--||
|v_handle_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_adjust_capital_hander***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_hander_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_adjust_commision_settle***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_adjust_company_settle***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_co_settle_fund_id|number|false|--||
|v_adjust_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_adjust_down_borrow_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_adjust_down_deposit_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_adjust_down_manual_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_adjust_down_manual_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_adjust_down_refund***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_adjust_no|varchar2|false|--||
|v_adjust_unit|number|false|--||
|v_adjust_face|number|false|--||
|v_adjust_amount|number|false|--||
|v_adjust_refund|number|false|--||
|v_adjust_time|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_adjust_profit_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_draw_record_id|number|false|--||
|v_adjust_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_adjust_service_hander***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_hander_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_adjust_transfer_hander***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_hander_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_adjust_up_borrow_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_adjust_up_deposit_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_adjust_up_manual_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_adjust_up_manual_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_apply_rv_complete***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_apply_id|number|false|--||
|v_channel_no|varchar2|false|--||
|v_account_id|number|false|--||
|v_deal_rv_type|number|false|--||
|v_deal_business_type|number|false|--||
|v_deal_bill_type|number|false|--||
|v_deal_trade_amount|number|false|--||
|v_deal_real_amount|number|false|--||
|v_deal_user|varchar2|false|--||
|v_deal_flow_id|number|false|--||
|v_deal_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_apply_rv_del***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_apply_id|number|false|--||
|v_channel_no|varchar2|false|--||
|v_account_id|number|false|--||
|v_deal_user|varchar2|false|--||
|v_deal_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_auto_al_down_up_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_add_date|varchar2|false|null||

----
### ***fd_p_auto_b2e_down_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_add_date|varchar2|false|null||

----
### ***fd_p_auto_b2e_warn***
*   ***description***

----
### ***fd_p_auto_balance_add_warn***
*   ***description***

----
### ***fd_p_auto_balance_warn_down***
*   ***description***

----
### ***fd_p_auto_balance_warn_down_ms***
*   ***description***

----
### ***fd_p_auto_balance_warn_up***
*   ***description***

----
### ***fd_p_auto_bank_daily_collect***
*   ***description***

----
### ***fd_p_auto_capital_use_rate***
*   ***description***

----
### ***fd_p_auto_co_recv_update***
*   ***description***

----
### ***fd_p_auto_co_settle_update***
*   ***description***

----
### ***fd_p_auto_commi_profit_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_add_date|varchar2|false|null||

----
### ***fd_p_auto_commi_profit_collect***
*   ***description***

----
### ***fd_p_auto_commi_profit_down***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***fd_p_auto_commi_profit_settle***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***fd_p_auto_commi_profit_up***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***fd_p_auto_daily_add_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***fd_p_auto_differ_collect***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***fd_p_auto_down_add_apply_del***
*   ***description***

----
### ***fd_p_auto_down_profit_split***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_start_time|varchar2|false|null||
|v_end_time|varchar2|false|null||

----
### ***fd_p_auto_down_profit_splitadd***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_add_date|varchar2|false|null||

----
### ***fd_p_auto_fuelcard_fee_coll_hs***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***fd_p_auto_fuelcard_fee_collect***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***fd_p_auto_recv_balance_offset***
*   ***description***

----
### ***fd_p_auto_service_fee_collect***
*   ***description***

----
### ***fd_p_auto_sync_zero2mr***
*   ***description***

----
### ***fd_p_auto_sync2user_system***
*   ***description***

----
### ***fd_p_auto_system_log_del***
*   ***description***

----
### ***fd_p_auto_system_warn_del***
*   ***description***

----
### ***fd_p_auto_use_warn_down***
*   ***description***

----
### ***fd_p_auto_use_warn_up***
*   ***description***

----
### ***fd_p_auto_zero_bank_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***fd_p_auto_zero_cap_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***fd_p_auto_zero_down_commi_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***fd_p_auto_zero_down_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***fd_p_auto_zero_imp_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***fd_p_auto_zero_profit_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***fd_p_auto_zero_recv_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***fd_p_auto_zero_self_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***fd_p_auto_zero_up_commi_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***fd_p_auto_zero_up_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***fd_p_auxiliary_cs2user_system***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_warn_level|number|false|--||
|v_title|varchar2|false|--||
|v_content|varchar2|false|--||
|v_key_word|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_auxiliary_down_add_sync***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_company_id|number|false|--||
|v_order_source|number|false|--||
|v_channel_no|varchar2|false|--||
|v_channel_name|varchar2|false|--||
|v_account_id|number|false|--||
|v_account_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_auxiliary_up_add_sync***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_company_id|number|false|--||
|v_order_source|number|false|--||
|v_channel_no|varchar2|false|--||
|v_channel_name|varchar2|false|--||
|v_account_id|number|false|--||
|v_account_name|varchar2|false|--||
|v_classification|number|false|--||
|v_capital_class|number|false|--||
|v_account_back_type|number|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_auto_bank_balance***
*   ***description***

----
### ***fd_p_b2e_auto_expire_close***
*   ***description***

----
### ***fd_p_b2e_auto_halfhour_trade***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_start_date|varchar2|false|null||

----
### ***fd_p_b2e_auto_payment_qry_task***
*   ***description***

----
### ***fd_p_b2e_auto_payment_remedy***
*   ***description***

----
### ***fd_p_b2e_auto_recv_task***
*   ***description***

----
### ***fd_p_b2e_auto_up_main_add***
*   ***description***

----
### ***fd_p_b2e_bank_balance_save***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bank_account_id|number|false|--||
|v_card_no|varchar2|false|--||
|v_bank_acc_name|varchar2|false|--||
|v_bank_type|number|false|--||
|v_query_balance|number|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_co_service_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_recv_record_id|number|false|--||
|v_adjust_days|number|false|--||
|v_hander_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_co_service_charge***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_recv_record_id|number|false|--||
|v_hander_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_down_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_apply_id|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_pay_time|date|false|--||
|v_apply_account_no|varchar2|false|--||
|v_add_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_user_id|varchar2|false|--||
|v_auto_add_on_time|date|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_down_manual_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_apply_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_tran_no|varchar2|false|--||
|v_create_user|varchar2|false|--||
|v_receive_time|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_error_msg|varchar2|true|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_manual_recv_task***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bank_account_id|number|false|--||
|v_start_time|varchar2|false|--||
|v_end_time|varchar2|false|--||
|v_create_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_manual_up_main_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_up_card_no|varchar2|false|--||
|v_up_add_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_add_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_manual_up_main_edit***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_main_record_id|number|false|--||
|v_up_channel_no|varchar2|false|--||
|v_account_id|number|false|--||
|v_up_card_no|varchar2|false|--||
|v_add_type_id|number|false|--||
|v_up_add_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_payment_edit_audit***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_main_record_id|number|false|--||
|v_audit_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_payment_query_save***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_sub_record_id|number|false|--||
|v_error_code|varchar2|false|--||
|v_query_error_msg|varchar2|false|--||
|v_manual_msg|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_payment_record_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_main_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_payment_result_save***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_sub_record_id|number|false|--||
|v_error_code|varchar2|false|--||
|v_error_msg|varchar2|false|--||
|v_server_id|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_payment_up_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_main_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_recv_down_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_recv_record_id|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_recv_record_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_recv_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_up_amount_forecast***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_start_time|date|false|--||
|v_duration_hour|number|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_warn_info_set***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_warn_uniq|varchar2|false|--||
|v_warn_type|number|false|--||
|v_title|varchar2|false|--||
|v_content|varchar2|false|--||
|v_key_word|varchar2|false|--||

----
### ***fd_p_b2e_whitelist_up_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_account_id|number|false|--||
|v_bank_holder_name|varchar2|false|--||
|v_holder_card_no|varchar2|false|--||
|v_main_bank_code|varchar2|false|--||
|v_branch_bank_code|varchar2|false|--||
|v_bank_type|number|false|--||
|v_rcv_card_type|varchar2|false|--||
|v_account_bank_name|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_create_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_whitelist_up_edit***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_account_id|number|false|--||
|v_bank_holder_name|varchar2|false|--||
|v_holder_card_no|varchar2|false|--||
|v_main_bank_code|varchar2|false|--||
|v_branch_bank_code|varchar2|false|--||
|v_bank_type|number|false|--||
|v_rcv_card_type|varchar2|false|--||
|v_account_bank_name|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_create_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_b2e_write_fail_log***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_account_id|number|false|--||
|v_fail_reason|varchar2|false|--||

----
### ***fd_p_bak_down_fund***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|p_delete_time|date|false|null||

----
### ***fd_p_bak_order_main***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|p_delete_time|date|false|null||

----
### ***fd_p_bak_up_fund***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|p_delete_time|date|false|null||

----
### ***fd_p_bank_activity_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_act_account_id|number|false|--||
|v_amount|number|false|--||
|v_hander_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_bank_activity_settle***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bank_account_id|number|false|--||
|v_act_account_id|number|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_hander_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_bank_capital_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bank_account_id|number|false|--||
|v_cap_account_id|number|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_hander_user|varchar2|false|--||
|v_link_channel_name|varchar2|false|--||
|v_link_account_name|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_bank_capital_minus***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bank_account_id|number|false|--||
|v_cap_account_id|number|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_hander_user|varchar2|false|--||
|v_link_channel_name|varchar2|false|--||
|v_link_account_name|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_bank_capital_pre_minus***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_cap_account_id|number|false|--||
|v_amount|number|false|--||
|v_hander_user|varchar2|false|--||
|v_record_no|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_bank_commision_settle***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_type|number|false|--||
|v_bank_account_id|number|false|--||
|v_commission|number|false|--||
|v_commi_month|varchar2|false|--||
|v_service_fee|number|false|--||
|v_settle_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_bank_company_settle***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_co_account_id|number|false|--||
|v_out_bank_account_id|number|false|--||
|v_in_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_handle_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_remark_name_in|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_bank_fund_t***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_change_type|number|false|--||
|v_use_type|number|false|--||
|create_user|varchar2|false|--||
|create_time|varchar2|false|--||
|link_channel_no|varchar2|false|--||
|link_account_id|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_record_no|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_bank_profit_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_cap_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_profit|number|false|--||
|v_service_fee|number|false|--||
|v_draw_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_bank_service_fee_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_hander_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_bank_service_fee_minus***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_hander_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_bank_transfer_hander***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_out_bank_account_id|number|false|--||
|v_in_bank_account_id|number|false|--||
|v_transfer_amount|number|false|--||
|v_out_service_fee|number|false|--||
|v_hander_user|varchar2|false|--||
|v_link_channel_name|varchar2|false|--||
|v_link_account_name|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_cap_jfb_settle***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_co_cap_fund_id|number|false|--||
|v_settle_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_down_add_apply_del***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_apply_id|number|false|--||
|v_memo|varchar2|false|--||
|v_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_down_auto_add_on***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_auto_add|number|false|--||
|v_edit_user|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_handle_channel_delete***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_type|number|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_handle_co_account_create***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_company_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_handle_co_settle_manual***
*   ***description***

----
### ***fd_p_handle_order_face_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_trade_order_no|varchar2|false|--||
|v_order_face|number|false|--||
|v_order_unit|number|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_handle_profit_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_company_id|number|false|--||
|v_profit|number|false|--||
|v_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_imp_down_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_imp_account_id|number|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_imp_down_add_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_create_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_imp_manual_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_account_id|number|false|--||
|v_amount|number|false|--||
|v_use_type|number|false|--||
|v_user|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_imp_manual_add_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_change_id|number|false|--||
|v_user|varchar2|false|--||
|v_adjust_days|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_balance_clear***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_account_id|number|false|--||
|v_channel_type|number|false|--||
|v_channel_no|varchar2|false|--||
|v_create_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_business_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_source_system_id|number|false|--||
|v_outer_business_type|number|false|--||
|v_outer_business_name|varchar2|false|--||
|v_statistics_type|number|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_business_edit***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_business_map_id|number|false|--||
|v_source_system_id|number|false|--||
|v_outer_business_type|number|false|--||
|v_outer_business_name|varchar2|false|--||
|v_statistics_type|number|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_down_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_down_borrow_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_borrow_account_id|number|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_down_commi_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_commi_month|varchar2|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_down_deposit_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_cap_account_id|number|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_down_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_down_fee_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_fee_month|varchar2|false|--||
|v_service_fee|number|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_down_inner_tsfer***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_out_channel_no|varchar2|false|--||
|v_out_account_id|number|false|--||
|v_in_channel_no|varchar2|false|--||
|v_in_account_id|number|false|--||
|v_amount|number|false|--||
|v_hander_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_down_rv_channel***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_revise_type|number|false|--||
|v_revise_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_down_rv_trade***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_down_draw_amount|number|false|--||
|v_down_real_amount|number|false|--||
|v_business_type|number|false|--||
|v_bill_type|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_recv_rv_balance***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_account_id_1|number|false|--||
|v_account_id_2|number|false|--||
|v_amount|number|false|--||
|v_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_relate_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_relate_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_rv_apply_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_type|number|false|--||
|v_business_type|number|false|--||
|v_bill_type|number|false|--||
|v_differ_amount|number|false|--||
|v_differ_reason|varchar2|false|--||
|v_differ_detail|varchar2|false|--||
|v_apply_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_rv_apply_edit***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_apply_id|number|false|--||
|v_channel_no|varchar2|false|--||
|v_channel_type|number|false|--||
|v_business_type|number|false|--||
|v_bill_type|number|false|--||
|v_differ_amount|number|false|--||
|v_differ_reason|varchar2|false|--||
|v_differ_detail|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_short_msg_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_self_account_id|number|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_trans_service_fee***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_trans_account_id|number|false|--||
|v_trans_service_fee|number|false|--||
|v_add_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_up_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_up_add_amount_calc***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_result|varchar2|true|--||
|v_calc_amount|number|true|--||

----
### ***fd_p_manual_up_add_sync***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_bank_card_no|varchar2|false|--||
|v_sync_add_no|number|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_up_borrow_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_cap_account_id|number|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_up_commi_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_commi_month|varchar2|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_up_deposit_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_cap_account_id|number|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_up_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_up_inner_transfer***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_out_channel_no|varchar2|false|--||
|v_out_account_id|number|false|--||
|v_in_channel_no|varchar2|false|--||
|v_in_account_id|number|false|--||
|v_amount|number|false|--||
|v_hander_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_up_rv_channel***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_revise_type|number|false|--||
|v_revise_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_manual_up_rv_trade***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_up_draw_amount|number|false|--||
|v_up_real_amount|number|false|--||
|v_business_type|number|false|--||
|v_bill_type|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_operate_daily_face_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_start_time|varchar2|false|--||
|v_end_time|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_operate_daily_prof_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_start_time|varchar2|false|--||
|v_end_time|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_operate_settle_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_bill_type|number|false|--||
|v_settle_amount|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_proc_log***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|p_proc_name|varchar2|false|--||
|p_start_time|date|false|--||
|p_status|varchar2|false|--||
|p_user_mark|varchar2|false|--||

----
### ***fd_p_query_channel_balance***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_type|number|false|--||
|v_query_balance|number|true|--||
|v_inner_balance|number|true|--||
|v_credit_money|number|true|--||
|v_result|varchar2|true|--||

----
### ***fd_p_report_zero_query_balance***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_type|number|false|--||
|v_query_date|varchar2|false|--||
|v_query_balance|number|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_sync_outsys_profit***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_system_name|varchar2|false|--||
|v_profit_date|varchar2|false|--||
|v_profit|number|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_sync_query_balance***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_type|number|false|--||
|v_query_balance|number|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_trade_all_order_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_up_bill_channel_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_trade_order_no|varchar2|false|--||
|v_total_face|number|false|--||
|v_order_amount|number|false|--||
|v_up_amount|number|false|--||
|v_bill_up_amount|number|false|--||
|v_down_commision|number|false|--||
|v_up_commision|number|false|--||
|v_bill_up_commision|number|false|--||
|v_service_pay|number|false|--||
|v_order_time|varchar2|false|--||
|v_user_id|varchar2|false|--||
|v_phone_no|varchar2|false|--||
|v_user_name|varchar2|false|--||
|v_id_card_no|varchar2|false|--||
|v_rec_address|varchar2|false|--||
|v_sale_user|varchar2|false|--||
|v_has_invoice|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_trade_all_order_refund***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_up_bill_channel_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_refund_face|number|false|--||
|v_down_refund_amount|number|false|--||
|v_up_refund_amount|number|false|--||
|v_bill_refund_amount|number|false|--||
|v_down_commision|number|false|--||
|v_up_commision|number|false|--||
|v_bill_up_commision|number|false|--||
|v_service_refund|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_trade_down_add_apply***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_add_amount|number|false|--||
|v_add_count|number|false|--||
|v_kh_account_id|number|false|--||
|v_qx_account_id|number|false|--||
|v_pay_time|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_apply_user|varchar2|false|--||
|v_out_code|varchar2|true|--||
|v_out_msg|varchar2|true|--||

----
### ***fd_p_trade_down_apply_reset***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_apply_id|number|false|--||
|v_edit_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_trade_down_manu_ac_add_t***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_record_no|varchar2|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_pay_time|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_trade_down_manual_add_t***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_record_no|varchar2|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_pay_time|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_trade_down_order_fee_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_total_face|number|false|--||
|v_recharge_unit|number|false|--||
|v_order_time|varchar2|false|--||
|v_order_amount|number|false|--||
|v_service_pay|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_trade_down_order_fee_ref***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_refund_unit|number|false|--||
|v_refund_face|number|false|--||
|v_refund_amount|number|false|--||
|v_real_refund|number|false|--||
|v_order_date|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_trade_down_order_ms_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_total_face|number|false|--||
|v_recharge_unit|number|false|--||
|v_order_time|varchar2|false|--||
|v_order_amount|number|false|--||
|v_service_pay|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_trade_down_order_ms_ref***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_refund_unit|number|false|--||
|v_refund_face|number|false|--||
|v_refund_amount|number|false|--||
|v_real_refund|number|false|--||
|v_order_date|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_trade_down_order_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_total_face|number|false|--||
|v_recharge_unit|number|false|--||
|v_order_time|varchar2|false|--||
|v_order_amount|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_trade_down_order_pay_t***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_total_face|number|false|--||
|v_recharge_unit|number|false|--||
|v_order_time|varchar2|false|--||
|v_order_amount|number|false|--||
|v_pay_time|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_trade_down_order_refund***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_refund_unit|number|false|--||
|v_refund_face|number|false|--||
|v_refund_amount|number|false|--||
|v_real_refund|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_trade_down_order_refund_t***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_refund_unit|number|false|--||
|v_refund_face|number|false|--||
|v_refund_amount|number|false|--||
|v_real_refund|number|false|--||
|v_ext_order_no|varchar2|false|--||
|v_refund_time|varchar2|false|--||
|v_order_time|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_trade_down_trans_refund***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_refund_account_id|number|false|--||
|v_refund_unit|number|false|--||
|v_refund_face|number|false|--||
|v_refund_amount|number|false|--||
|v_real_refund|number|false|--||
|v_service_fee|number|false|--||
|v_refund_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_trade_up_ac_order_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_down_order_unit|number|false|--||
|v_down_order_face|number|false|--||
|v_down_draw_unit|number|false|--||
|v_down_draw_face|number|false|--||
|v_down_draw_amount|number|false|--||
|v_down_real_amount|number|false|--||
|v_up_draw_unit|number|false|--||
|v_up_draw_face|number|false|--||
|v_up_draw_amount|number|false|--||
|v_up_real_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_trade_up_auto_down_refund***
*   ***description***

----
### ***fd_p_trade_up_manu_ac_add_t***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_record_no|varchar2|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_pay_time|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_trade_up_manual_add_t***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_record_no|varchar2|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_create_user|varchar2|false|--||
|v_pay_time|varchar2|false|--||
|v_partner_account|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_trade_up_order_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_down_order_unit|number|false|--||
|v_down_order_face|number|false|--||
|v_down_draw_unit|number|false|--||
|v_down_draw_face|number|false|--||
|v_down_draw_amount|number|false|--||
|v_down_real_amount|number|false|--||
|v_up_draw_unit|number|false|--||
|v_up_draw_face|number|false|--||
|v_up_draw_amount|number|false|--||
|v_up_real_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_trade_up_order_pay_ms***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_down_order_unit|number|false|--||
|v_down_order_face|number|false|--||
|v_down_draw_unit|number|false|--||
|v_down_draw_face|number|false|--||
|v_down_draw_amount|number|false|--||
|v_down_real_amount|number|false|--||
|v_up_draw_unit|number|false|--||
|v_up_draw_face|number|false|--||
|v_up_draw_amount|number|false|--||
|v_up_real_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_out_change_time|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_trade_up_order_pay_t***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_down_order_unit|number|false|--||
|v_down_order_face|number|false|--||
|v_down_draw_unit|number|false|--||
|v_down_draw_face|number|false|--||
|v_down_draw_amount|number|false|--||
|v_down_real_amount|number|false|--||
|v_up_draw_unit|number|false|--||
|v_up_draw_face|number|false|--||
|v_up_draw_amount|number|false|--||
|v_up_real_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_pay_time|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_trade_up_order_pay2***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_down_order_unit|number|false|--||
|v_down_order_face|number|false|--||
|v_down_draw_unit|number|false|--||
|v_down_draw_face|number|false|--||
|v_down_draw_amount|number|false|--||
|v_down_real_amount|number|false|--||
|v_up_draw_unit|number|false|--||
|v_up_draw_face|number|false|--||
|v_up_draw_amount|number|false|--||
|v_up_real_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_out_change_time|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_trade_up_order_refund***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_up_refund_unit|number|false|--||
|v_up_refund_face|number|false|--||
|v_up_refund_amount|number|false|--||
|v_up_refund_real_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_trade_up_order_refund_ms***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_up_refund_unit|number|false|--||
|v_up_refund_face|number|false|--||
|v_up_refund_amount|number|false|--||
|v_up_refund_real_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_out_change_time|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_trade_up_order_refund_t***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_down_draw_unit|number|false|--||
|v_down_draw_face|number|false|--||
|v_down_draw_amount|number|false|--||
|v_down_real_amount|number|false|--||
|v_up_refund_unit|number|false|--||
|v_up_refund_face|number|false|--||
|v_up_refund_amount|number|false|--||
|v_up_refund_real_amount|number|false|--||
|v_refund_time|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***fd_p_trade_up_order_refund2***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_up_refund_unit|number|false|--||
|v_up_refund_face|number|false|--||
|v_up_refund_amount|number|false|--||
|v_up_refund_real_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_out_change_time|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***fd_p_write_handle_log***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_handle_module|varchar2|false|--||
|v_handle_user|varchar2|false|--||
|v_handle_params|varchar2|false|--||

----
### ***fd_p_write_log***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|p_obj_name|varchar2|false|--||
|p_sql_err|varchar2|false|--||
|p_err_lev|varchar2|false|error||

----
### ***income_p_auto_down_pft_bth***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_start_date|varchar2|false|--||
|v_end_date|varchar2|false|--||

----
### ***income_p_auto_down_pft_bth_hs***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_start_date|varchar2|false|--||
|v_end_date|varchar2|false|--||

----
### ***income_p_auto_down_profit_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_get_date|varchar2|false|null||

----
### ***income_p_auto_down_profit_hs***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_get_date|varchar2|false|null||

----
### ***income_p_auto_down_up_pft_bth***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_start_date|varchar2|false|--||
|v_end_date|varchar2|false|--||

----
### ***income_p_auto_down_up_pft_hs***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_get_date|varchar2|false|null||

----
### ***income_p_auto_down_up_pftbthhs***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_start_date|varchar2|false|--||
|v_end_date|varchar2|false|--||

----
### ***income_p_auto_down_up_profit***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_get_date|varchar2|false|null||

----
### ***income_p_auto_up_profit_batch***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_start_date|varchar2|false|--||
|v_end_date|varchar2|false|--||

----
### ***income_p_auto_up_profit_bth_hs***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_start_date|varchar2|false|--||
|v_end_date|varchar2|false|--||

----
### ***income_p_auto_up_profit_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_get_date|varchar2|false|null||

----
### ***income_p_auto_up_profit_get_hs***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_get_date|varchar2|false|null||

----
### ***income_p_auto_up_rv_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_get_date|varchar2|false|null||

----
### ***income_p_down_channel_grouping***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_group_id|number|false|--||
|v_down_group_name|varchar2|false|--||
|v_down_channel_no|varchar2|false|--||
|v_down_channel_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***income_p_up_exclude_sync***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_need_exclude|number|false|--||
|v_result|varchar2|true|--||

----
### ***income_p_up_province_grouping***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_group_id|number|false|--||
|v_up_group_name|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***rpt_p_auto_unit_down_dk_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***rpt_p_auto_unit_down_trade_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***rpt_p_auto_unit_down_trade_hs***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***rpt_p_auto_unit_up_dk_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***rpt_p_auto_unit_up_trade_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***rpt_p_auto_unit_up_trade_hs***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***sp_sync_channel_info***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_name|varchar2|false|--||
|v_channel_type|number|false|--||
|v_company_id|number|false|--||
|v_status|number|false|--||
|v_is_back|number|false|--||
|v_bus_type|number|false|--||
|v_capital_class|number|false|--||
|v_bill_type|number|false|--||
|v_manage_user|varchar2|false|--||
|v_system_no|number|false|--||
|v_up_exclude|number|false|--||
|v_down_group_id|number|false|--||
|v_down_group_name|varchar2|false|--||
|v_channel_create_date|varchar2|false|--||
|v_channel_create_user|varchar2|false|--||
|v_channel_company|varchar2|false|--||
|v_out_status|number|true|--||

----
### ***sp_sync_channel_status***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_type|number|false|--||
|v_status|number|false|--||
|v_out_status|number|true|--||

----
### ***sp_sync_dk_channel***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_name|varchar2|false|--||
|v_company_no|varchar2|false|--||
|v_system_no|varchar2|false|--||
|v_channel_type|number|false|--||
|v_ret_code|number|true|--||

----
### ***sup_p_auto_down_daily_manual***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***sup_p_auto_down_daily_trade***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***sup_p_auto_down_zero_balance***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***sup_p_auto_up_daily_manual***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***sup_p_auto_up_daily_trade***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***sup_p_auto_up_zero_balance***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***sup_p_manual_add_up***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_bank_account_id|number|false|--||
|v_add_count|number|false|--||
|v_add_face|number|false|--||
|v_add_amount|number|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_create_user|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***sup_p_manual_add_up_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_add_record_id|number|false|--||
|v_memo|varchar2|false|--||
|v_create_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***sup_p_manual_down_rv_balance***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_rv_amount|number|false|--||
|v_memo|varchar2|false|--||
|v_create_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***sup_p_manual_down_rv_trade***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_rv_count|number|false|--||
|v_rv_face|number|false|--||
|v_rv_amount|number|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_memo|varchar2|false|--||
|v_create_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***sup_p_manual_draw_up***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_bank_account_id|number|false|--||
|v_draw_type|number|false|--||
|v_draw_count|number|false|--||
|v_draw_face|number|false|--||
|v_draw_amount|number|false|--||
|v_memo|varchar2|false|--||
|v_create_user|varchar2|false|--||
|v_remark_name|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***sup_p_manual_draw_up_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_draw_record_id|number|false|--||
|v_memo|varchar2|false|--||
|v_create_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***sup_p_manual_up_rv_balance***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_rv_type|number|false|--||
|v_rv_count|number|false|--||
|v_rv_face|number|false|--||
|v_rv_amount|number|false|--||
|v_memo|varchar2|false|--||
|v_create_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***sup_p_manual_up_rv_trade***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_rv_count|number|false|--||
|v_rv_face|number|false|--||
|v_rv_amount|number|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_memo|varchar2|false|--||
|v_create_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***sup_p_relate_add_map***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_sup_up_channel_no|varchar2|false|--||
|v_sup_down_channel_no|varchar2|false|--||
|v_pro_up_channel_no|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***sup_p_sync_channel_info***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_name|varchar2|false|--||
|v_company_id|number|false|--||
|v_system_id|number|false|--||
|v_statistics_type|number|false|--||
|v_channel_type|number|false|--||
|v_status|number|false|--||
|v_operate_user|varchar2|false|--||
|v_operate_time|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***sup_p_sync_up_capital_transfer***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_transfer_type|number|false|--||
|v_card_count|number|false|--||
|v_card_face|number|false|--||
|v_card_amount|number|false|--||
|v_change_time|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_create_by|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***sup_p_trade_down_order_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_order_unit|number|false|--||
|v_order_face|number|false|--||
|v_order_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_change_time|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***sup_p_trade_down_order_refund***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_refund_face|number|false|--||
|v_refund_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_change_time|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***sup_p_trade_up_order_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_order_unit|number|false|--||
|v_order_face|number|false|--||
|v_order_amount|number|false|--||
|v_up_draw_count|number|false|--||
|v_up_draw_unit|number|false|--||
|v_up_draw_face|number|false|--||
|v_up_draw_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_change_time|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***sup_p_trade_up_order_refund***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_up_refund_count|number|false|--||
|v_up_refund_unit|number|false|--||
|v_up_refund_face|number|false|--||
|v_up_refund_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_change_time|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||
|v_msg|varchar2|true|--||

----
### ***yx_create_business_type***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_out_business_type|number|false|--||
|v_business_name|varchar2|false|--||
|v_industry_type|number|false|--||
|v_system_no|number|false|--||
|v_out_status|number|true|--||

----
### ***yx_p_adjust_agent_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_adjust_days|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_adjust_down_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_adjust_days|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_adjust_down_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_adjust_days|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_adjust_up_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_adjust_days|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_adjust_up_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_adjust_days|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_adjust_up_service_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|number|false|--||
|v_adjust_days|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_auto_agent_fund_daily***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***yx_p_auto_differ_collect***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***yx_p_auto_down_fund_daily***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***yx_p_auto_expense_add_cap***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_add_date|varchar2|false|null||

----
### ***yx_p_auto_income_add_cap***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_add_date|varchar2|false|null||

----
### ***yx_p_auto_report_daiyl***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***yx_p_auto_up_fund_daily***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***yx_p_auto_zero_agent***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***yx_p_auto_zero_down***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***yx_p_auto_zero_down_send***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***yx_p_auto_zero_service***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***yx_p_auto_zero_up***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***yx_p_auto_zero_up_send***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_report_date|varchar2|false|null||

----
### ***yx_p_create_channel_info***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_name|varchar2|false|--||
|v_channel_type|number|false|--||
|v_isupdate|number|false|--||
|v_company_id|number|false|--||
|v_status|number|false|--||
|v_system_no|number|false|--||
|v_warn_balance|number|false|--||
|v_commi_balance|number|false|--||
|v_channel_class|number|false|--||
|v_user|varchar2|false|--||
|v_msg|varchar2|true|--||

----
### ***yx_p_manual_add_credit***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_credit_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_agent_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_agent_id|varchar2|false|--||
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_create_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_agent_rv_fee***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_agent_id|varchar2|false|--||
|v_agent_fee|number|false|--||
|v_business_type|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_down_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_down_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_bank_account_id|number|false|--||
|v_service_fee|number|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_down_inner_tsfer***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_out_channel_no|varchar2|false|--||
|v_in_channel_no|varchar2|false|--||
|v_amount|number|false|--||
|v_hander_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_down_issue_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_down_rv_channel***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_revise_type|number|false|--||
|v_revise_amount|number|false|--||
|v_issue|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_down_rv_trade***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_draw_amount|number|false|--||
|v_real_amount|number|false|--||
|v_business_type|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_rv_trade***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_up_channel_no|varchar2|false|--||
|v_up_draw_face|number|false|--||
|v_up_draw_amount|number|false|--||
|v_up_real_amount|number|false|--||
|v_up_service_fee|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_down_draw_face|number|false|--||
|v_down_draw_amount|number|false|--||
|v_down_real_amount|number|false|--||
|v_down_hand_fee|number|false|--||
|v_down_coupon|number|false|--||
|v_agent_id|varchar2|false|--||
|v_agency_fee|number|false|--||
|v_business_type|number|false|--||
|v_create_user|varchar2|false|--||
|v_issue|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_up_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_bank_account_id|number|false|--||
|v_service_fee|number|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_up_draw***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_up_inner_tsfer***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_out_channel_no|varchar2|false|--||
|v_in_channel_no|varchar2|false|--||
|v_amount|number|false|--||
|v_hander_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_up_issue_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_bank_account_id|number|false|--||
|v_service_fee|number|false|--||
|v_amount|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_up_rv_channel***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_revise_type|number|false|--||
|v_revise_amount|number|false|--||
|v_issue|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_up_rv_service***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_service_fee|number|false|--||
|v_business_type|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_manual_up_rv_trade***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_up_channel_no|varchar2|false|--||
|v_up_draw_amount|number|false|--||
|v_up_real_amount|number|false|--||
|v_business_type|number|false|--||
|v_create_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_trade_agent_fund***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_agent_id|number|false|--||
|v_business_type|number|false|--||
|v_change_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_change_type|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_trade_down_order_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_agent_id|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_total_face|number|false|--||
|v_recharge_unit|number|false|--||
|v_order_time|varchar2|false|--||
|v_pay_amount|number|false|--||
|v_change_amount|number|false|--||
|v_income_amount|number|false|--||
|v_agency_fee|number|false|--||
|v_handling_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_trade_down_order_pay1***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_agent_count|number|false|--||
|v_agent_id_list|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_total_face|number|false|--||
|v_recharge_unit|number|false|--||
|v_order_time|varchar2|false|--||
|v_pay_amount|number|false|--||
|v_change_amount|number|false|--||
|v_income_amount|number|false|--||
|v_agency_fee_list|varchar2|false|--||
|v_handling_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_trade_down_order_ref***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_refund_unit|number|false|--||
|v_refund_face|number|false|--||
|v_refund_amount|number|false|--||
|v_order_date|varchar2|false|--||
|v_handling_fee|number|false|--||
|v_refund_income|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_trade_down_pay_coupon***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_agent_id|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_total_face|number|false|--||
|v_recharge_unit|number|false|--||
|v_order_time|varchar2|false|--||
|v_pay_amount|number|false|--||
|v_change_amount|number|false|--||
|v_income_amount|number|false|--||
|v_coupon_amount|number|false|--||
|v_agency_fee|number|false|--||
|v_handling_fee|number|false|--||
|v_issue_type|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_trade_down_ref_coupon***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_refund_unit|number|false|--||
|v_refund_face|number|false|--||
|v_refund_amount|number|false|--||
|v_order_date|varchar2|false|--||
|v_handling_fee|number|false|--||
|v_refund_income|number|false|--||
|v_coupon_amount|number|false|--||
|v_issue_type|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_trade_expense***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_company_id|number|false|--||
|v_agent_id|number|false|--||
|v_business_type|number|false|--||
|v_expense_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_out_change_time|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_expense_no|varchar2|false|--||
|v_expense_type|number|false|--||
|v_income_type|number|false|--||
|v_channel_type|number|false|--||
|v_order_amount|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_trade_up_order_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_agent_id|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_down_order_unit|number|false|--||
|v_down_order_face|number|false|--||
|v_down_draw_unit|number|false|--||
|v_down_draw_face|number|false|--||
|v_down_draw_amount|number|false|--||
|v_down_real_amount|number|false|--||
|v_down_income_amount|number|false|--||
|v_up_draw_unit|number|false|--||
|v_up_draw_face|number|false|--||
|v_up_draw_amount|number|false|--||
|v_up_real_amount|number|false|--||
|v_success_face|number|false|--||
|v_order_time|varchar2|false|--||
|v_handling_fee|number|false|--||
|v_agency_fee|number|false|--||
|v_service_fee|number|false|--||
|v_expense_fee|number|false|--||
|v_expense_type|number|false|--||
|v_memo|varchar2|false|--||
|v_out_change_time|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_trade_up_order_pay1***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_agent_count|number|false|--||
|v_agent_id_list|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_down_order_unit|number|false|--||
|v_down_order_face|number|false|--||
|v_down_draw_unit|number|false|--||
|v_down_draw_face|number|false|--||
|v_down_draw_amount|number|false|--||
|v_down_real_amount|number|false|--||
|v_down_income_amount|number|false|--||
|v_up_draw_unit|number|false|--||
|v_up_draw_face|number|false|--||
|v_up_draw_amount|number|false|--||
|v_up_real_amount|number|false|--||
|v_success_face|number|false|--||
|v_order_time|varchar2|false|--||
|v_handling_fee|number|false|--||
|v_agency_fee_list|varchar2|false|--||
|v_service_fee|number|false|--||
|v_expense_fee|number|false|--||
|v_expense_type|number|false|--||
|v_memo|varchar2|false|--||
|v_out_change_time|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_trade_up_order_ref***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_ext_delivery_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_up_refund_unit|number|false|--||
|v_up_refund_face|number|false|--||
|v_up_refund_amount|number|false|--||
|v_up_refund_real_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_service_fee|number|false|--||
|v_memo|varchar2|false|--||
|v_out_change_time|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_trade_up_pay_coupon***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_ext_order_no|varchar2|false|--||
|v_agent_id|varchar2|false|--||
|v_recharge_account_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_down_order_unit|number|false|--||
|v_down_order_face|number|false|--||
|v_down_draw_unit|number|false|--||
|v_down_draw_face|number|false|--||
|v_down_draw_amount|number|false|--||
|v_down_real_amount|number|false|--||
|v_down_income_amount|number|false|--||
|v_up_draw_unit|number|false|--||
|v_up_draw_face|number|false|--||
|v_up_draw_amount|number|false|--||
|v_up_real_amount|number|false|--||
|v_success_face|number|false|--||
|v_order_time|varchar2|false|--||
|v_handling_fee|number|false|--||
|v_agency_fee|number|false|--||
|v_service_fee|number|false|--||
|v_expense_fee|number|false|--||
|v_expense_type|number|false|--||
|v_coupon_amount|number|false|--||
|v_issue_type|number|false|--||
|v_memo|varchar2|false|--||
|v_out_change_time|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_trade_up_ref_coupon***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_source|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_trade_order_no|varchar2|false|--||
|v_trade_delivery_no|varchar2|false|--||
|v_ext_delivery_no|varchar2|false|--||
|v_trade_refund_no|varchar2|false|--||
|v_business_type|number|false|--||
|v_carrier_no|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_up_refund_unit|number|false|--||
|v_up_refund_face|number|false|--||
|v_up_refund_amount|number|false|--||
|v_up_refund_real_amount|number|false|--||
|v_order_time|varchar2|false|--||
|v_service_fee|number|false|--||
|v_coupon_amount|number|false|--||
|v_issue_type|number|false|--||
|v_memo|varchar2|false|--||
|v_out_change_time|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_up_draw_service***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_handler_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_p_up_service_tsfer_balance***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_amount|number|false|--||
|v_handl_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***yx_sync_agent_group***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_agent_id|varchar2|false|--||
|v_agent_name|varchar2|false|--||
|v_agent_type|number|false|--||
|v_group_agent|number|false|--||
|v_group_count|number|false|--||
|v_certificate_no|varchar2|false|--||
|v_mobile|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_company_nature|number|false|--||
|v_taxpayer_size|number|false|--||
|v_status|number|false|--||
|v_channel_no|varchar2|false|--||
|v_out_status|number|true|--||
|v_out_id|number|true|--||

----
### ***yx_sync_agent_info***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_agent_id|varchar2|false|--||
|v_agent_name|varchar2|false|--||
|v_agent_type|number|false|--||
|v_certificate_no|varchar2|false|--||
|v_mobile|varchar2|false|--||
|v_province_no|varchar2|false|--||
|v_company_nature|number|false|--||
|v_taxpayer_size|number|false|--||
|v_status|number|false|--||
|v_channel_no|varchar2|false|--||
|v_out_status|number|true|--||
|v_out_id|number|true|--||

----
### ***yx_sync_channel_info***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_channel_name|varchar2|false|--||
|v_channel_type|number|false|--||
|v_company_id|number|false|--||
|v_status|number|false|--||
|v_system_no|number|false|--||
|v_warn_balance|number|false|--||
|v_commi_balance|number|false|--||
|v_channel_class|number|false|--||
|v_out_status|number|true|--||

----
### ***zhelep_cap_amount_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_cap_account_id|number|false|--||
|v_amount|number|false|--||
|v_edit_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zhelep_self_amount_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_self_account_id|number|false|--||
|v_amount|number|false|--||
|v_edit_user|varchar2|false|--||
|v_edit_time|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zhelp_bank_amount_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bank_account_id|number|false|--||
|v_amount|number|false|--||
|v_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zhelp_bond_pay***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_account_id|number|false|--||
|v_amount|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zhelp_co_recv_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_account_id|number|false|--||
|v_amount|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zhelp_co_recv_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_account_id_1|number|false|--||
|v_account_id_2|number|false|--||
|v_amount|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zhelp_commi_profit_all***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_start_date|varchar2|false|--||
|v_end_date|varchar2|false|--||

----
### ***zhelp_dk_down_channel_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_add_amount|number|false|--||
|v_user|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zhelp_dk_down_commi_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_add_amount|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zhelp_down_commi_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_add_amount|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zhelp_down_commi_start_set***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_set_start_balance|number|false|--||
|v_sys_start_balance|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zhelp_manual_up_rv_settle***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_company_id|number|false|--||
|v_up_company_id|number|false|--||
|v_up_channel_no|varchar2|false|--||
|v_up_account_id|number|false|--||
|v_down_channel_no|varchar2|false|--||
|v_down_account_id|number|false|--||
|v_business_type|number|false|--||
|v_bill_type|number|false|--||
|v_settle_amount|number|false|--||
|v_memo|varchar2|false|--||
|v_change_time|varchar2|false|null||
|v_result|varchar2|true|--||

----
### ***zhelp_trade_time_all_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_up_channel_no|varchar2|false|--||
|v_down_draw|number|false|--||
|v_down_real|number|false|--||
|v_up_draw|number|false|--||
|v_up_real|number|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_memo|varchar2|false|--||
|v_user|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zhelp_trade_time_differ_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_add_debit_amount|number|false|--||
|v_bill_type|number|false|--||
|v_business_type|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zhelp_transfer_refund_adjust***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_account_id|number|false|--||
|v_right_balance|number|false|--||
|v_sys_balance|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zhelp_up_commi_add***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_add_amount|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zhelp_up_commi_start_set***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_set_start_balance|number|false|--||
|v_sys_start_balance|number|false|--||
|v_memo|varchar2|false|--||
|v_result|varchar2|true|--||

----
### ***zreport_commi_profit_all***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_start_date|varchar2|false|--||
|v_end_date|varchar2|false|--||

----
### ***zreport_commi_profit_down***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***zreport_commi_profit_down_ab***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***zreport_commi_profit_down_hs***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***zreport_commi_profit_down_ji***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***zreport_commi_profit_settle***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***zreport_commi_profit_st_ab***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***zreport_commi_profit_st_hs***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***zreport_commi_profit_st_ji***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***zreport_commi_profit_up***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***zreport_commi_profit_up_ab***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***zreport_commi_profit_up_hs***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||

----
### ***zreport_commi_profit_up_ji***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_collect_date|varchar2|false|null||
