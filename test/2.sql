/**
 系统结算金额和笔数 就是 当天支付成功时间内的订单 
 支付成功订单的金额 加上 -1 * 当天退款时间内的订单退款金额 。笔数类比(结算笔数-退款笔数)
*/
create or replace procedure  sp_order_diff_report(v_start_time    varchar2, --查询日期开始
                                                  v_end_time      varchar2, --查询日期结束
                                                  v_channel_no    varchar2, --渠道编号
                                                  v_display_type  number, --显示类型
                                                  v_out_errcode   out number, --错误码
                                                  v_out_msg       out varchar2, --消息
                                                  v_out_data      out sys_refcursor) --输出游标
as
  l_start_time date;
  l_end_time   date;

begin
  l_start_time := to_date(v_start_time, 'yyyy-mm-dd');
  l_end_time   := to_date(v_end_time, 'yyyy-mm-dd');

  if(v_display_type=1) then
        select 
                to_date(t1.create_time,'yyyy-mm-dd') Time,
                t4.channel_name ChannelName,

                /*
                 * 笔数(结算笔数-退款笔数)
                 */
                sum(decode(nvl(t2.status,90),
                                90,
                                1,
                                0)
                            ) OrderCount,

                /*
                 * 系统金额,
                 * 退款金额 = （支付金额-手续费）乘以 失败面值/总面值
                 * 失败面值= 充值面值-成功面值
                 */
                sum(decode(nvl(t2.status,90),
                                0,
                                t1.face-(t1.face-t1.service_fee)*((t1.face-t1.suc_Face)/t1.face),
                                t1.face) 
                    ) SystemFundSum,

                /*
                 * 商户总金额 ：（订单支付金额-手续费） +（订单退款金额-手续费）
                 */
                sum(decode(nvl(t2.status,90),
                                0,
                               (t1.face-t1.service_fee) -(t1.face-t1.service_fee)*((t1.face-t1.suc_face)/t1.face),
                                t1.face-t1.service_fee
                             )
                    ) MechantFundSum,

                /*
                 * 订单差异
                 */
                sum(decode(nvl(t3.order_no,1),
                                1,
                                0,
                                 t3.price-t3.real_fee
                           )
                     ) OrderDiffSum,

                /*
                 * 系统差异
                 */
                sum(decode(nvl(t3.order_no,1),
                               1,
                               0,
                                t3.sys_price-t3.sys_real_face
                           )
                    ) SystemDiffSum

                /*
                 * 总差异
                 */
                sum(decode(nvl(t3.order_no,1),
                                 1,
                                 0,
                                 (t3.price-t3.real_fee)+(t3.sys_price-t3.sys_real_face)
                           )
                    ) DiffSum
        from order_main t1
        left join order_refund t2 on t2.order_no=t1.order_no
        left join bill_match_difference t3 on t3.order_no=t1.order_no
        left join down_channel t4 on t4.down_channel_no=t1.down_channel_no      
        group by 
                t1.down_channel_no, 
                t1.create_time,
                t4.channel_name
  else
         select 
                to_date(t1.create_time,'yyyy-mm-dd') Time,
                t4.channel_name ChannelName,

                /*
                 * 笔数(结算笔数-退款笔数)
                 */
                sum(decode(nvl(t2.status,90),
                                90,
                                1,
                                0)
                            ) OrderCount,

                /*
                 * 系统金额,
                 * 退款金额 = （支付金额-手续费）乘以 失败面值/总面值
                 * 失败面值= 充值面值-成功面值
                 */
                sum(decode(nvl(t2.status,90),
                                0,
                                t1.face-(t1.face-t1.service_fee)*((t1.face-t1.suc_Face)/t1.face),
                                t1.face) 
                    ) SystemFundSum,

                /*
                 * 商户总金额 ：（订单支付金额-手续费） +（订单退款金额-手续费）
                 */
                sum(decode(nvl(t2.status,90),
                                0,
                               (t1.face-t1.service_fee) -(t1.face-t1.service_fee)*((t1.face-t1.suc_face)/t1.face),
                                t1.face-t1.service_fee
                             )
                    ) MechantFundSum,

                /*
                 * 订单差异
                 */
                sum(decode(nvl(t3.order_no,1),
                                1,
                                0,
                                 t3.price-t3.real_fee
                           )
                     ) OrderDiffSum,

                /*
                 * 系统差异
                 */
                sum(decode(nvl(t3.order_no,1),
                               1,
                               0,
                                t3.sys_price-t3.sys_real_face
                           )
                    ) SystemDiffSum

                /*
                 * 总差异
                 */
                sum(decode(nvl(t3.order_no,1),
                                 1,
                                 0,
                                 (t3.price-t3.real_fee)+(t3.sys_price-t3.sys_real_face)
                           )
                    ) DiffSum
        from order_main t1
        left join order_refund t2 on t2.order_no=t1.order_no
        left join bill_match_difference t3 on t3.order_no=t1.order_no
        left join down_channel t4 on t4.down_channel_no=t1.down_channel_no      
        group by 
                t1.down_channel_no, 
                t1.create_time,
                t4.channel_name
  end if

end