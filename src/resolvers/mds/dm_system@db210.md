
----
### ***auto_scan_to_close***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|

----
### ***auto_scan_to_manual***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|

----
### ***auto_scan_to_query_tmp***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|

----
### ***sp_backup_scan***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_backup_name|varchar2|false|undefined|undefined|
|v_robot_ip|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_count|number|true|undefined|undefined|
|v_out_batch_no|number|true|undefined|undefined|

----
### ***sp_bind_create***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_no|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_bind_retry1***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bind_id|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_bind_retry2***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bind_id|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_card_detail_get***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_task_id|number|false|undefined|undefined|
|v_out_count|number|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_card_detail_save***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|varchar2|false|undefined|undefined|
|v_status|varchar2|false|undefined|undefined|
|v_result_msg|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_card_task_get_bat***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_robot_ip|varchar2|false|undefined|undefined|
|v_robot_code|varchar2|false|undefined|undefined|
|v_get_count|number|false|undefined|undefined|
|v_out_count|number|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_delivery_get***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bind_id|varchar2|false|undefined|undefined|
|v_robot_ip|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_delivery_save***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bind_id|varchar2|false|undefined|undefined|
|v_error_code|number|false|undefined|undefined|
|v_result_msg|varchar2|false|undefined|undefined|
|v_up_order_no|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_manual_bind_bat***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bind_ids|varchar2|false|undefined|undefined|
|v_error_code|number|false|undefined|undefined|
|v_result_msg|varchar2|false|undefined|undefined|
|v_order_msg|varchar2|false|undefined|undefined|
|v_operator|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_manual_task***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_batch_no|number|false|undefined|undefined|

----
### ***sp_manual_task_run***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_batch_no|number|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_notify_get_bat***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_robot_ip|varchar2|false|undefined|undefined|
|v_robot_code|varchar2|false|undefined|undefined|
|v_get_count|number|false|undefined|undefined|
|v_out_count|number|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_notify_save***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_notify_id|varchar2|false|undefined|undefined|
|v_status|number|false|undefined|undefined|
|v_result_msg|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_operate_log_add***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_user_id|varchar2|false|undefined|undefined|
|v_serial_nos|varchar2|false|undefined|undefined|
|v_operate_log|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_order_add***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_product_no|varchar2|false|undefined|undefined|
|v_promote_guid|varchar2|false|undefined|undefined|
|v_phone_no|varchar2|false|undefined|undefined|
|v_contact_name|varchar2|false|undefined|undefined|
|v_contact_addr|varchar2|false|undefined|undefined|
|v_card_user_name|varchar2|false|undefined|undefined|
|v_card_user_id|varchar2|false|undefined|undefined|
|v_card_pic_front|varchar2|false|undefined|undefined|
|v_card_pic_back|varchar2|false|undefined|undefined|
|v_card_pic_hand|varchar2|false|undefined|undefined|
|v_user_ip|varchar2|false|undefined|undefined|
|v_server_ip|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_order_add_vcode1***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_no|varchar2|false|undefined|undefined|
|v_product_no|varchar2|false|undefined|undefined|
|v_account_no|varchar2|false|undefined|undefined|
|v_server_ip|varchar2|false|undefined|undefined|
|v_user_ip|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_order_add_vcode2***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_no|varchar2|false|undefined|undefined|
|v_vcode|varchar2|false|undefined|undefined|
|v_server_ip|varchar2|false|undefined|undefined|
|v_user_ip|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_order_ext_update***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_no|varchar2|false|undefined|undefined|
|v_new_phone_no|varchar2|false|undefined|undefined|
|v_activate_status|number|false|undefined|undefined|
|v_activate_time|varchar2|false|undefined|undefined|
|v_recharge_status|number|false|undefined|undefined|
|v_recharge_time|varchar2|false|undefined|undefined|
|v_recharge_face|number|false|undefined|undefined|
|v_express_name|varchar2|false|undefined|undefined|
|v_express_no|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_order_pic_update***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_no|varchar2|false|undefined|undefined|
|v_card_pic_front|varchar2|false|undefined|undefined|
|v_card_pic_back|varchar2|false|undefined|undefined|
|v_card_pic_hand|varchar2|false|undefined|undefined|
|v_user_ip|varchar2|false|undefined|undefined|
|v_server_ip|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_pay_info_get***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_no|varchar2|false|undefined|undefined|
|v_account_type|number|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_pay_result_save***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_no|varchar2|false|undefined|undefined|
|v_pay_status|varchar2|false|undefined|undefined|
|v_suc_money|number|false|undefined|undefined|
|v_service_fee|number|false|undefined|undefined|
|v_trade_msg|varchar2|false|undefined|undefined|
|v_trade_no|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_query_create***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bind_id|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_query_create_tmp***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bind_id|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_query_get_bat***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_robot_ip|varchar2|false|undefined|undefined|
|v_robot_code|varchar2|false|undefined|undefined|
|v_get_count|number|false|undefined|undefined|
|v_out_count|number|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_query_save***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_bind_id|varchar2|false|undefined|undefined|
|v_status|number|false|undefined|undefined|
|v_result_msg|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_refund_get_bat***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_robot_ip|varchar2|false|undefined|undefined|
|v_robot_code|varchar2|false|undefined|undefined|
|v_get_count|number|false|undefined|undefined|
|v_out_count|number|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_refund_save***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_record_id|varchar2|false|undefined|undefined|
|v_status|varchar2|false|undefined|undefined|
|v_result_msg|varchar2|false|undefined|undefined|
|v_refund_no|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_statics_diagram***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_pid|varchar2|false|undefined|undefined|
|v_begin_time|varchar2|false|undefined|undefined|
|v_end_time|varchar2|false|undefined|undefined|
|v_out_errcode|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_data|pkg_cursor.pointer|true|undefined|undefined|

----
### ***sp_system_log_add***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_object_name|varchar2|false|undefined|undefined|
|v_error_level|number|false|undefined|undefined|
|v_error_desc|varchar2|false|undefined|undefined|

----
### ***sp_test***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_product_no|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_vcode1_create***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_phone_no|varchar2|false|undefined|undefined|
|v_promote_guid|varchar2|false|undefined|undefined|
|v_user_ip|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_vcode1_retry***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_no|varchar2|false|undefined|undefined|
|v_user_ip|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_vcode1_verify***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_no|varchar2|false|undefined|undefined|
|v_vcode|varchar2|false|undefined|undefined|
|v_user_ip|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|

----
### ***sp_vcode2_create***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_product_no|varchar2|false|undefined|undefined|
|v_phone_no|varchar2|false|undefined|undefined|
|v_promote_guid|varchar2|false|undefined|undefined|
|v_user_ip|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_vcode2_get***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_no|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***sp_vcode2_retry***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
|v_order_no|varchar2|false|undefined|undefined|
|v_user_ip|varchar2|false|undefined|undefined|
|v_out_code|number|true|undefined|undefined|
|v_out_msg|varchar2|true|undefined|undefined|
|v_out_json|varchar2|true|undefined|undefined|

----
### ***t_sp_test_zhu***
*   ***description***
 
*  ***params***

|名称| 类型 | out |默认值| 备注 |
|---|----|-----|---|----|
