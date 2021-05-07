create or replace procedure SP_PROVINCE_FLOW_REPORT1(v_start_time  varchar2, --起始时间
                                                v_end_time    varchar2, --结束时间
                                                v_time_type   number, --时间类型 1 --天 2 --月
                                                v_province_no    varchar2, --省份 汉字名字
                                                v_plat_no     varchar2, -- 推广平台
                                                v_agent_no    varchar2, -- 代理商
                                                v_promoter_id number, -- 推广人
                                                v_out_status  out number, --状态,100表示成功,其他失败
                                                v_out_msg     out varchar2, --结果消息
                                                v_out_data    out pkg_cursor.pointer --数据集合
                                                ) as
   -----------------------------------------
   -- 用途: 地域分析-流量-省份报表
   -- 创建: mouchao 2020-09-27
   -- 修改  fual  2020-10-21
   -----------------------------------------
    --noformat start
    l_date_format varchar2(128) := case when v_time_type = 2 then 'yyyy-mm' else 'yyyy-mm-dd' end;
    l_date_trunc_pattern varchar2(128) := case when v_time_type = 2 then 'mm' else 'dd' end;
  begin
    open v_out_data for
      with tmp_result as
       (
         --处理 NULL值
         select  to_char(r.order_date,l_date_format) order_date, --统计时间
                 r.business_name,--业务类型
                 r.province_name,--省份
                 nvl(r.total,0) total_order_count, --总订单数
                 nvl(r.valid,0) valid_order_count,--有效订单
                 nvl(r.complain_count,0) complain_count,--投诉量
                 nvl(r.unknown_complain_count,0) unknown_complain_count, --不知情投诉量
                 nvl(r.promotion_complain_count,0) promotion_complain_count --营销宣传投诉量
         from(
              select
                trunc(t.create_time,l_date_trunc_pattern) order_date,
                dic1.name business_name,
                province.province_name,
                count(1) total,
                sum(case when zcd.record_id is not null then 1 else 0 end) complain_count,
                -- 是否需要判断订单状态？
                sum(case when zcd.complain_type = 2 then 1 else 0 end) unknown_complain_count,
                sum(case when zcd.complain_type = 5 then 1 else 0 end) promotion_complain_count,
                sum(case when t.order_status = 0 then 1 else 0 end)  valid
             from dm_order_main t
             left join zy_complain_detail zcd on t.order_no = zcd.order_no and zcd.match_status = 0
             left join dm_system_dictionary dic1 on t.business_type = dic1.value and dic1.type = 'BusinessType'
             left join dm_system_province province on t.province_no = province.province_no
             where
                   (v_start_time is null or t.create_time >= to_date(v_start_time,'yyyy-MM-dd'))
               and (v_end_time is null or t.create_time < to_date(v_end_time,'yyyy-MM-dd'))
               and t.business_type = 4
               and (
                   v_province_no is null
                   or t.province_no in((select * from table(f_string_split(v_province_no))))
               )
               and (v_plat_no is null or t.plat_no = v_plat_no)
               and (v_agent_no is null or t.agent_no = v_agent_no)
               and (v_promoter_id is null or t.promoter_id = v_promoter_id)
             group by
               trunc(t.create_time,l_date_trunc_pattern), --统计时间
               dic1.name,                                                                         --业务类型
               province.province_name
             order by trunc(t.create_time,l_date_trunc_pattern) desc                                                                  --省份
            )r
         )

      select t.order_date 订单日期,
             t.business_name 业务类型,
             t.province_name 省份,
             t.total_order_count 订单量,
             t.valid_order_count 有效订单量,
             f_divide_to_percent_str(t.valid_order_count,t.total_order_count) 有效订单率,
             f_divide_to_percent_str(t.valid_order_count,(select sum(valid_order_count) from tmp_result)) 订单占比,
             t.complain_count 投诉量,
             f_divide_to_percent_str(t.complain_count,t.valid_order_count) 投诉率,
             f_divide_to_percent_str(t.unknown_complain_count,t.valid_order_count) 不知情投诉率,
             f_divide_to_percent_str(t.promotion_complain_count,t.valid_order_count) 营销宣传投诉率
        from tmp_result t
      union all
      select '合计',
             null,
             null,
             sum(t.total_order_count),
             sum(t.valid_order_count),
             f_divide_to_percent_str(sum(t.valid_order_count), sum(t.total_order_count)),
             '100%',
             sum(t.complain_count),
             f_divide_to_percent_str(sum(t.complain_count),sum(t.valid_order_count)),
             f_divide_to_percent_str(sum(t.unknown_complain_count),sum(t.valid_order_count)),
             f_divide_to_percent_str(sum(t.promotion_complain_count),sum(t.valid_order_count))
        from tmp_result t;
   --noformat end
  v_out_status := error_code.success;
  v_out_msg    := '查询成功';
  commit      ;
  exception    when others then v_out_status := error_code.failed;
  v_out_msg    := '查询失败';
  rollback    ;

end;
