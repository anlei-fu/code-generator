create or replace procedure zd_merchants_day_report(v_start_time    varchar2, --查询日期开始
                                                    v_end_time      varchar2, --查询日期结束
                                                    v_channel       varchar2, --渠道编号
                                                    v_pay_type      number, -- 支付方式
                                                    v_business      varchar2, --业务类型
                                                    v_carrier       varchar2, -- 运营商
                                                    v_terminal_type number, -- 终端类型
                                                    v_province      varchar2, --省份
                                                    v_face          varchar2, --面值
                                                    v_card_type     varchar2, --卡类型
                                                    v_view_type     number, --显示类型 0 混合 1 分省 2 分面值
                                                    v_out_errcode   out number,
                                                    v_out_msg       out varchar2,
                                                    v_out_data      out sys_refcursor) as
  /*
   2018-05-28
  */
  l_start_time date;
  l_end_time   date;
begin
  l_start_time := to_date(v_start_time, 'yyyy-mm-dd');
  l_end_time   := to_date(v_end_time, 'yyyy-mm-dd');
  -- 分面值
  if v_view_type = 2 then
    open v_out_data for
      with res as
       (select t.create_time CreateTime,
               t.down_channel_no Channel,
               t.card_type CardType,
               t.pay_type PayType,
               t.business_type Business,
               t.device_type DeviceType,
               t.product_face Face,
               sum(t.all_price) SumAllPrice,
               sum(t.all_order_cntr) allOrdCntr,
               sum(t.success_money) SucMoney,
               sum(t.success_order_cntr) sucOrderCntr,
               sum(t.success_coupon) SucCoupon,
               sum(t.service_fee) SumSerFee,
               sum(t.refund_money) SumRefMoney,
               sum(t.refund_order_cntr) SumRefOrdCntr,
               sum(t.loss_service) SumLossSer
          from Daily_Account_Snapshot t
         where t.create_time >= l_start_time
           and t.create_time < l_end_time
           and (t.down_channel_no = v_channel or v_channel is null)
           and (t.pay_type = v_pay_type or v_pay_type is null)
           and (t.carrier_no = v_carrier or v_carrier is null)
           and (t.business_type in
               (select column_value from table(zd_f_split(v_business))) or
               v_business is null)
           and (t.province_no in
               (select column_value from table(zd_f_split(v_province))) or
               v_province is null)
           and (t.product_face in
               (select column_value from table(zd_f_split(v_face))) or
               v_face is null)
           and (t.device_type = v_terminal_type or v_terminal_type is null)
           and (t.card_type = v_card_type or v_card_type is null)
         group by t.create_time,
                  t.down_channel_no,
                  t.card_type,
                  t.pay_type,
                  t.business_type,
                  t.device_type,
                  t.product_face)
      select to_char(td.CreateTime, 'yyyy-mm-dd') "时间",
             dc.channel_name "下游渠道",
             t1.name "卡类型",
             t2.name "支付类型",
             t3.name "业务类型",
             t4.name "终端类型",
             to_char(td.Face) "面值",
             --td.SumProductFace "订单面值",
             td.SumAllPrice "订单金额",
             td.allOrdCntr "订单笔数",
             td.SucMoney "支付金额",
             td.sucOrderCntr "支付笔数",
             td.SucCoupon "优惠券金额",
             td.SumSerFee "手续费",
             td.SumRefMoney "退款金额",
             td.SumRefOrdCntr "退款笔数",
             td.SumLossSer "退款亏损服务费",
             decode(td.allOrdCntr,
                    0,
                    0,
                    round(td.sucOrderCntr / td.allOrdCntr, 5) * 100) || '%' "支付率",
             decode(td.sucOrderCntr,
                    0,
                    0,
                    round(td.SumRefOrdCntr / td.sucOrderCntr, 5) * 100) || '%' "退款率"
        from res td
        left join sys_dictionary t1
          on td.CardType = t1.value
         and t1.type = 'CardType'
        left join sys_dictionary t2
          on t2.value = td.PayType
         and t2.type = 'PayType'
        left join sys_dictionary t3
          on t3.value = td.Business
         and t3.type = 'BusinessType'
        left join sys_dictionary t4
          on t4.value = td.DeviceType
         and t4.type = 'DeviceType'
        left join down_channel dc
          on td.Channel = dc.down_channel_no

      union all

      select '总计',
             '',
             '',
             '',
             '',
             '',
             '',
             sum(td.SumAllPrice) "订单金额",
             sum(td.allOrdCntr) "订单笔数",
             sum(td.SucMoney) "支付金额",
             sum(td.sucOrderCntr) "支付笔数",
             sum(td.SucCoupon) "优惠券金额",
             sum(td.SumSerFee) "手续费",
             sum(td.SumRefMoney) "退款金额",
             sum(td.SumRefOrdCntr) "退款笔数",
             sum(td.SumLossSer) "退款亏损服务费",
             decode(sum(td.allOrdCntr),
                    0,
                    0,
                    round(sum(td.sucOrderCntr) / sum(td.allOrdCntr), 5) * 100) || '%' "支付率",
             decode(sum(td.sucOrderCntr),
                    0,
                    0,
                    round(sum(td.SumRefOrdCntr) / sum(td.sucOrderCntr), 5) * 100) || '%' "退款率"
        from res td;

    -- 分省
  elsif v_view_type = 1 then
    open v_out_data for
      with res as
       (select t.create_time CreateTime,
               t.down_channel_no Channel,
               t.card_type CardType,
               t.pay_type PayType,
               t.business_type Business,
               t.device_type DeviceType,
               t.province_no Province,
               sum(t.all_price) SumAllPrice,
               sum(t.all_order_cntr) allOrdCntr,
               sum(t.success_money) SucMoney,
               sum(t.success_order_cntr) sucOrderCntr,
               sum(t.success_coupon) SucCoupon,
               sum(t.service_fee) SumSerFee,
               sum(t.refund_money) SumRefMoney,
               sum(t.refund_order_cntr) SumRefOrdCntr,
               sum(t.loss_service) SumLossSer
          from Daily_Account_Snapshot t
         where t.create_time >= l_start_time
           and t.create_time < l_end_time
           and (t.down_channel_no = v_channel or v_channel is null)
           and (t.pay_type = v_pay_type or v_pay_type is null)
           and (t.carrier_no = v_carrier or v_carrier is null)
           and (t.business_type in
               (select column_value from table(zd_f_split(v_business))) or
               v_business is null)
           and (t.province_no in
               (select column_value from table(zd_f_split(v_province))) or
               v_province is null)
           and (t.product_face in
               (select column_value from table(zd_f_split(v_face))) or
               v_face is null)
           and (t.device_type = v_terminal_type or v_terminal_type is null)
           and (t.card_type = v_card_type or v_card_type is null)
         group by t.create_time,
                  t.down_channel_no,
                  t.card_type,
                  t.pay_type,
                  t.business_type,
                  t.device_type,
                  t.province_no)
      select to_char(td.CreateTime, 'yyyy-mm-dd') "时间",
             dc.channel_name "下游渠道",
             t1.name "卡类型",
             t2.name "支付类型",
             t3.name "业务类型",
             t4.name "终端类型",
             sp.province_name "省份",
             td.SumAllPrice "订单金额",
             td.allOrdCntr "订单笔数",
             td.SucMoney "支付金额",
             td.sucOrderCntr "支付笔数",
             td.SucCoupon "优惠券金额",
             td.SumSerFee "手续费",
             td.SumRefMoney "退款金额",
             td.SumRefOrdCntr "退款笔数",
             td.SumLossSer "退款亏损服务费",
             decode(td.allOrdCntr,
                    0,
                    0,
                    round(td.sucOrderCntr / td.allOrdCntr, 5) * 100) || '%' "支付率",
             decode(td.sucOrderCntr,
                    0,
                    0,
                    round(td.SumRefOrdCntr / td.sucOrderCntr, 5) * 100) || '%' "退款率"
        from res td
        left join sys_dictionary t1
          on td.CardType = t1.value
         and t1.type = 'CardType'
        left join sys_dictionary t2
          on t2.value = td.PayType
         and t2.type = 'PayType'
        left join sys_dictionary t3
          on t3.value = td.Business
         and t3.type = 'BusinessType'
        left join sys_dictionary t4
          on t4.value = td.DeviceType
         and t4.type = 'DeviceType'
        left join down_channel dc
          on td.Channel = dc.down_channel_no
        left join fc_system_province sp
          on td.Province = sp.province_no

      union all

      select '总计',
             '',
             '',
             '',
             '',
             '',
             '',
             sum(td.SumAllPrice) "订单金额",
             sum(td.allOrdCntr) "订单笔数",
             sum(td.SucMoney) "支付金额",
             sum(td.sucOrderCntr) "支付笔数",
             sum(td.SucCoupon) "优惠券金额",
             sum(td.SumSerFee) "手续费",
             sum(td.SumRefMoney) "退款金额",
             sum(td.SumRefOrdCntr) "退款笔数",
             sum(td.SumLossSer) "退款亏损服务费",
             decode(sum(td.allOrdCntr),
                    0,
                    0,
                    round(sum(td.sucOrderCntr) / sum(td.allOrdCntr), 5) * 100) || '%' "支付率",
             decode(sum(td.sucOrderCntr),
                    0,
                    0,
                    round(sum(td.SumRefOrdCntr) / sum(td.sucOrderCntr), 5) * 100) || '%' "退款率"
        from res td;

    -- 混合
  else
    open v_out_data for
      with res as
       (select t.create_time CreateTime,
               t.down_channel_no Channel,
               t.card_type CardType,
               t.pay_type PayType,
               t.business_type Business,
               t.device_type DeviceType,
               sum(t.product_face) SumProductFace,
               sum(t.all_price) SumAllPrice,
               sum(t.all_order_cntr) allOrdCntr,
               sum(t.success_money) SucMoney,
               sum(t.success_order_cntr) sucOrderCntr,
               sum(t.success_coupon) SucCoupon,
               sum(t.service_fee) SumSerFee,
               sum(t.refund_money) SumRefMoney,
               sum(t.refund_order_cntr) SumRefOrdCntr,
               sum(t.loss_service) SumLossSer
          from Daily_Account_Snapshot t
         where t.create_time >= l_start_time
           and t.create_time < l_end_time
           and (t.down_channel_no = v_channel or v_channel is null)
           and (t.pay_type = v_pay_type or v_pay_type is null)
           and (t.carrier_no = v_carrier or v_carrier is null)
           and (t.business_type in
               (select column_value from table(zd_f_split(v_business))) or
               v_business is null)
           and (t.province_no in
               (select column_value from table(zd_f_split(v_province))) or
               v_province is null)
           and (t.product_face in
               (select column_value from table(zd_f_split(v_face))) or
               v_face is null)
           and (t.device_type = v_terminal_type or v_terminal_type is null)
           and (t.card_type = v_card_type or v_card_type is null)
         group by t.create_time,
                  t.down_channel_no,
                  t.card_type,
                  t.pay_type,
                  t.business_type,
                  t.device_type)
      select to_char(td.CreateTime, 'yyyy-mm-dd') "时间",
             dc.channel_name "下游渠道",
             t1.name "卡类型",
             t2.name "支付类型",
             t3.name "业务类型",
             t4.name "终端类型",
             td.SumProductFace "订单面值",
             td.SumAllPrice "订单金额",
             td.allOrdCntr "订单笔数",
             td.SucMoney "支付金额",
             td.sucOrderCntr "支付笔数",
             td.SucCoupon "优惠券金额",
             td.SumSerFee "手续费",
             td.SumRefMoney "退款金额",
             td.SumRefOrdCntr "退款笔数",
             td.SumLossSer "退款亏损服务费",
             decode(td.allOrdCntr,
                    0,
                    0,
                    round(td.sucOrderCntr / td.allOrdCntr, 5) * 100) || '%' "支付率",
             decode(td.sucOrderCntr,
                    0,
                    0,
                    round(td.SumRefOrdCntr / td.sucOrderCntr, 5) * 100) || '%' "退款率"
        from res td
        left join sys_dictionary t1
          on td.CardType = t1.value
         and t1.type = 'CardType'
        left join sys_dictionary t2
          on t2.value = td.PayType
         and t2.type = 'PayType'
        left join sys_dictionary t3
          on t3.value = td.Business
         and t3.type = 'BusinessType'
        left join sys_dictionary t4
          on t4.value = td.DeviceType
         and t4.type = 'DeviceType'
        left join down_channel dc
          on td.Channel = dc.down_channel_no

      union all

      select '总计',
             '',
             '',
             '',
             '',
             '',
             sum(td.SumProductFace) "订单面值",
             sum(td.SumAllPrice) "订单金额",
             sum(td.allOrdCntr) "订单笔数",
             sum(td.SucMoney) "支付金额",
             sum(td.sucOrderCntr) "支付笔数",
             sum(td.SucCoupon) "优惠券金额",
             sum(td.SumSerFee) "手续费",
             sum(td.SumRefMoney) "退款金额",
             sum(td.SumRefOrdCntr) "退款笔数",
             sum(td.SumLossSer) "退款亏损服务费",
             decode(sum(td.allOrdCntr),
                    0,
                    0,
                    round(sum(td.sucOrderCntr) / sum(td.allOrdCntr), 5) * 100) || '%' "支付率",
             decode(sum(td.sucOrderCntr),
                    0,
                    0,
                    round(sum(td.SumRefOrdCntr) / sum(td.sucOrderCntr), 5) * 100) || '%' "退款率"
        from res td;
  end if;

  v_out_errcode := error_code.succ;
  v_out_msg     := '查询成功';
exception
  when others then
    v_out_errcode := error_code.fail;
    v_out_msg     := '操作失败' || sqlerrm;

    sp_write_log('zd_merchants_day_report', v_out_errcode || sqlerrm);
end;
