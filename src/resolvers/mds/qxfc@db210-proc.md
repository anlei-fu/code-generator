
----
### ***acct_sync_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_robot_ip|varchar2|false|--||
|v_sync_type|number|false|--||
|v_change_type|number|false|--||
|v_out_status|number|true|--||
|v_out_msg|varchar2|true|--||
|v_begin_idx|number|true|--||
|v_end_idx|number|true|--||

----
### ***acct_sync_save***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_id|varchar2|false|--||
|v_channel_type|number|false|--||
|v_change_type|number|false|--||
|v_status|number|false|--||
|v_msg|varchar2|false|--||
|v_out_status|number|true|--||
|v_out_msg|varchar2|true|--||

----
### ***barabrabrabrba***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_query_time|varchar2|false|--||
|v_contrast_time|varchar2|false|--||
|v_channel|varchar2|false|--||
|v_carrier|varchar2|false|--||
|v_business|number|false|--||
|v_province|varchar2|false|--||
|v_face|number|false|--||
|v_out_errcode|number|true|--||
|v_out_msg|varchar2|true|--||
|v_out_data|pkg_cursor.pointer|true|--||

----
### ***sp_add_operate_log***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_no|varchar2|false|--||
|v_bind_id|varchar2|false|--||
|v_operate_type|number|false|--||
|v_remark|varchar2|false|--||
|v_taskid|number|false|--||
|v_ip|varchar2|false|--||
|v_operator|varchar2|false|system||

----
### ***sp_assign_imsi***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_no|varchar2|false|--||
|v_imsi|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_auto_flow_execute***
*   ***description***

----
### ***sp_auto_flow_vo_execute***
*   ***description***

----
### ***sp_auto_trade_analyse***
*   ***description***

----
### ***sp_auto_trade_down***
*   ***description***

----
### ***sp_auto_trade_dz***
*   ***description***

----
### ***sp_auto_trade_up***
*   ***description***

----
### ***sp_charge_retry***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_id|varchar|false|--||
|v_operator|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_cookie_get_by_city***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_carrier_no|varchar2|false|--||
|v_city_no|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_create_query***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_da_reward***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_begin_time|varchar2|false|--||
|v_end_time|varchar2|false|--||
|v_up_channel|varchar2|false|--||
|v_product_type|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||
|v_ret_data|data_cursor.pointer|true|--||

----
### ***sp_da_trade_channel***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_begin_time|varchar2|false|--||
|v_end_time|varchar2|false|--||
|v_up_channel|varchar2|false|--||
|v_down_channel|varchar2|false|--||
|v_product_type|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||
|v_ret_data|data_cursor.pointer|true|--||

----
### ***sp_delivery_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_robot_ip|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_down_channel_key_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_channel_no|varchar2|false|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_dz_brand_new***
*   ***description***

----
### ***sp_dz_order_renew***
*   ***description***

----
### ***sp_dz_phone_active***
*   ***description***

----
### ***sp_express_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_robot_ip|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_express_plat_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_robot_ip|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_express_plat_save***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_status|number|false|--||
|v_msg|varchar2|false|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_express_query_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_robot_ip|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_express_query_save***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_status|number|false|--||
|v_mail_name|varchar2|false|--||
|v_mail_no|varchar2|false|--||
|v_msg|varchar2|false|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_express_save***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_status|number|false|--||
|v_mail_no|varchar2|false|--||
|v_msg|varchar2|false|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_express_update***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_mail_no|varchar2|false|--||
|v_msg|varchar2|false|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_identity_info_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_robot_ip|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_identity_info_save***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_status|number|false|--||
|v_msg|varchar2|false|--||
|v_package_phone|varchar2|false|--||
|v_idno|varchar2|false|--||
|v_real_name|varchar2|false|--||
|v_install_address|varchar2|false|--||
|v_belong_area|varchar2|false|--||
|v_recv_province|varchar2|false|--||
|v_recv_city|varchar2|false|--||
|v_recv_address|varchar2|false|--||
|v_memo|varchar2|false|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_manual_book_install***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_status|number|false|--||
|v_msg|varchar2|false|--||
|v_install_date|varchar2|false|--||
|v_brand_no|varchar2|false|--||
|v_itv_no|varchar2|false|--||
|v_operator|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_manual_express***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_mail_no|varchar2|false|--||
|v_channel_no|varchar2|false|--||
|v_operator|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_manual_identity_auth***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_real_name|varchar2|false|--||
|v_idno|varchar2|false|--||
|v_card_province|varchar2|false|--||
|v_card_city|varchar2|false|--||
|v_operator|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_manual_renew***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_status|number|false|--||
|v_trans_seq|varchar2|false|--||
|v_remark|varchar2|false|--||
|v_operator|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_manual_write_card***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_status|number|false|--||
|v_trans_seq|varchar2|false|--||
|v_remark|varchar2|false|--||
|v_operator|varchar2|false|--||
|v_newphone|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_order_bind***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_no|varchar2|false|--||
|v_robot_ip|varchar2|false|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_order_query***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_coopid|varchar2|false|--||
|v_cooporder|varchar2|false|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_recv_check_charge***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_order_no|varchar2|false|--||
|v_idno|varchar2|false|--||
|v_brand_no|varchar2|false|--||
|v_phone|varchar2|false|--||
|v_biz_type|varchar2|false|--||
|v_carrier_no|varchar2|false|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_recv_order***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_coopid|varchar2|false|--||
|v_cooporderno|varchar2|false|--||
|v_payorderno|varchar2|false|--||
|v_productno|varchar2|false|--||
|v_sku_id|varchar2|false|--||
|v_payfee|number|false|--||
|v_pay_account|varchar2|false|--||
|v_newphone|varchar2|false|--||
|v_buyeridno|varchar2|false|--||
|v_buyerbrandno|varchar2|false|--||
|v_buyernick|varchar2|false|--||
|v_buyername|varchar2|false|--||
|v_buyerphone|varchar2|false|--||
|v_buyeraddress|varchar2|false|--||
|v_installadress|varchar2|false|--||
|v_buyermessage|varchar2|false|--||
|v_tmall_status|varchar2|false|--||
|v_tmall_orderdate|varchar2|false|--||
|v_remark|varchar2|false|--||
|v_ext1|varchar2|false|--||
|v_ext2|varchar2|false|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_recv_refund***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_order_no|varchar2|false|--||
|v_refund_no|varchar2|false|--||
|v_pay_order_no|varchar2|false|--||
|v_refund_fee|number|false|--||
|v_reason|varchar2|false|--||
|v_tmall_refund_date|varchar2|false|--||
|v_tmall_refund_status|varchar2|false|--||
|v_tmall_order_status|varchar2|false|--||
|v_tmall_goods_status|varchar2|false|--||
|v_buyernick|varchar2|false|--||
|v_attribute|varchar2|false|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_recv_refund_offline***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_down_channel_no|varchar2|false|--||
|v_down_order_no|varchar2|false|--||
|v_refund_fee|number|false|--||
|v_refund_from|varchar2|false|--||
|v_refund_to|varchar2|false|--||
|v_remark|varchar2|false|--||
|v_operator|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_refund_confirm***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_refund_ids|varchar2|false|--||
|v_status|number|false|--||
|v_msg|varchar2|false|--||
|v_operator|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_scan_db***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_scan_name|varchar2|false|--||
|v_robot_ip|varchar2|false|--||
|v_out_error_code|number|true|--||
|v_out_count|number|true|--||
|v_out_batch_id|number|true|--||
|v_out_msg|varchar2|true|--||

----
### ***sp_task_audit_save***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_status|number|false|--||
|v_remark|varchar2|false|--||
|v_operator|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_task_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_robot_ip|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_task_retry***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_operator|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_task_update***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|--||
|v_transeq|varchar2|false|--||
|v_msg|varchar2|false|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_warn_insert***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_key_words|varchar2|false|--||
|v_content|varchar2|false|--||
|v_level|number|false|3||

----
### ***sp_write_card_get***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|varchar2|false|--||
|v_robot_ip|varchar2|false|--||
|v_ret_code|number|true|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_write_card_save***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|varchar2|false|--||
|v_status|number|false|--||
|v_up_seq|varchar2|false|--||
|v_msg|varchar2|false|--||
|v_newphone|varchar2|false|--||
|v_ret_msg|varchar2|true|--||

----
### ***sp_write_log***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_object_name|varchar2|false|--||
|v_error_detail|varchar2|false|--||
|v_error_code|varchar2|false|200||

----
### ***st_sp_remove_complaints***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_id|varchar2|false|--||
|v_out_error_code|number|true|--||

----
### ***test***
*   ***description***

*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_1|number|true|--||
|v_2|number|true|--||
|v_3|number|true|--||
