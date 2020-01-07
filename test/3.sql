create or replace procedure sp_order_diff_report(v_start_time   varchar2, --查询日期开始
                                                 v_end_time     varchar2, --查询日期结束
                                                 v_channel_no   varchar2, --渠道编号
                                                 v_out_errcode  out number, --错误码
                                                 v_out_msg      out varchar2) --消息

 is
  l_start_time date;
  l_end_time   date;
begin
  l_start_time := to_date(v_start_time, 'yyyy-mm-dd');
  l_end_time   := to_date(v_end_time, 'yyyy-mm-dd');
  
  with pay as
   (select count(1) pay_count,
           to_date(t1.pay_time, 'yyyy-mm-dd') time,
           t1.down_channel_no channel_no,
           sum(t1.user_payed) pay_sum,
           sum(t1.user_payed - service_fee) mechant_pay_sum,
           sum(decode(nvl(t2.order_no, 1), 1, 0, t2.price - t2.real_fee)) order_diff_sum,
           sum(decode(nvl(t2.order_no, 1),
                      1,
                      0,
                      t2.sys_price - t2.sys_real_face)) system_diff_sum,
           
           sum(decode(nvl(t2.order_no, 1),
                      1,
                      0,
                      (t2.price - t2.real_fee) +
                      (t2.sys_price - t2.sys_real_face))) diff_sum
      from order_main t1
      left join bill_match_difference t2
        on t2.order_no = t1.order_no
     where t1.pay_time > l_start_time
       and t1.pay_time < l_end_time
       and t1.pay_status = 0
       and (v_channel_no is null or t1.down_channel_no = v_channel_no)
     group by t1.pay_time, t1.down_channel_no),

  refund as
   (select count(1) refund_count,
           to_date(t.refund_time, 'yyyy-mm-dd') time,
           t.down_channel_no channel_no,
           sum((t.user_payed - t.service_fee) *
               ((t.user_payed - t.suc_face) / t.face)) refund_sum,
           sum((t.user_payed - t.service_fee) *
               ((t.user_payed - t.suc_face) / t.face) - service_fee) mechant_refund_sum
      from order_main t
     where t.refund_time > l_start_time
       and t.refund_time < l_end_time
       and t.refund_state = 0
       and (v_channel_no is null or t.down_channel_no = v_channel_no)
     group by t.refund_time, t.down_channel_no)
     
  -- 输出
  select (t1.pay_count - nvl(t2.refund_count, 0)) total_count,
         (t1.pay_sum - nvl(t2.refund_sum, 0)) sum,
         (t1.mechant_pay_sum - nvl(t2.mechant_refund_sum, 0)) mechant_sum,
         to_date(t1.time, 'yyyy-mm-dd') time,
         t1.channel_no,
         t1.order_diff_sum,
         t1.system_diff_sum,
         t1.diff_sum
    from pay t1
    left join refund t2
      on t2.time = t1.time
     and t1.channel_no = t2.channel_no
   group by t1.time, t1.channel_no;

  v_out_errcode := error_code.succ;
  v_out_msg     := '查询成功';
exception
  when others then
     v_out_errcode:=100;
     v_out_msg:='操作失败';
end 

