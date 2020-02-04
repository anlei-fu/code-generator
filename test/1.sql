create or replace procedure sp_auth_fake_suceess_report(v_query_time  varchar2,
                                                         v_out_errcode out number,
                                                         v_out_msg     out varchar2,
                                                         v_out_data    out pkg_cursor.pointer) is

  l_start_time date;
  l_end_time   date;
begin
  l_start_time := to_date(v_query_time, 'yyyy-mm-dd');
  l_end_time   := to_date(v_query_time, 'yyyy-mm-dd') + 1;

  open v_out_data for
select 
 t.order_no as '订单编号',
 t1.authentication_channel as '鉴权渠道',
 t2.carrier_name as '运营商',
 t3.ProvinceName as '省份',


 ft mr_recharge_order_main t
left join mr_recharge_order_main_ex t1  on t.order_no = t1.order_no
left join mr_carrier_info t2
left join st_system_province t3
where t.order_request_time >= l_start_time
   and t.order_request_time < l_end_time
   and t1.created_time >= l_start_time
   and t1.created_time < l_end_time
   and ((t.authentication_status=0 and t.order_status=0) or(t.order_status=90 and t.aunthentication_status=0));
  v_out_errcode := error_code.suc;
  v_out_msg     := '操作成功';
exception
  when others then
    v_out_errcode := error_code.failure;
    v_out_msg     := '操作失败' || sqlerrm;
    mr_sp_write_log('sp_auth_fake_suceess_report',
                    v_out_errcode,
                    sqlerrm,
                    '操作失败');
end;

 