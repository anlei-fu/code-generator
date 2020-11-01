create or replace procedure SP_PROVINCE_FLOW_REPORT(v_start_time  varchar2, --起始时间
                                                    v_end_time    varchar2, --结束时间
                                                    v_time_type   number, --时间类型 0 --小时 1 --天 2 --月
                                                    v_province_no varchar2, --省份
                                                    v_out_status  out number, --状态,100表示成功,其他失败
                                                    v_out_msg     out varchar2, --结果消息
                                                    v_out_data    out pkg_cursor.pointer --数据集合
                                                    ) as
  /*
   -- 用途: 省份订单统计报表
  -- 创建: mouchao 2020-09-27
  */
  l_start_time date := to_date(v_start_time, 'yyyy-mm-dd hh24:mi:ss');
  l_end_time   date := to_date(v_end_time, 'yyyy-mm-dd hh24:mi:ss');
  l_count number; --有效订单量合计 订单占比 = 有效订单量 / 有效订单量合计

begin

  select count(1)
    into l_count
    from dm_order_main t
   where t.order_status = 0
     and (t.create_time >= l_start_time or l_start_time is null)
     and (t.create_time < l_end_time or l_end_time is null)
     and (t.business_type = 4); --流量包
   open v_out_data
     for with resultOrder as (select case
                                       when v_time_type = 2 then
                                        to_char(r.ordertime, 'yyyy-mm') --月
                                       else
                                        to_char(r.ordertime, 'yyyy-mm-dd') --天
                                     end as "日期",
                                     dsd1.name "业务类型",
                                     dsp.province_name "省份",
                                     nvl(r.total, 0) "订单量", --订单量
                                     nvl(r.valid, 0) "有效订单量", --有效订单量
                                     nvl(round(r.valid /
                                               decode(r.total,
                                                      0,
                                                      null,
                                                      r.total),
                                               4) * 100,
                                         0) || '%' as "有效订单率",
                                     nvl(detail.complainCount, 0) "投诉量", --投诉量
                                     nvl(round(detail.complainCount /
                                               decode(r.valid,
                                                      0,
                                                      null,
                                                      r.valid),
                                               5) * 100,
                                         0) || '%' as "投诉率",
                                     nvl(round(detail.dontKonwCount /
                                               decode(r.valid,
                                                      0,
                                                      null,
                                                      r.valid),
                                               5) * 100,
                                         0) || '%' as "不知情投诉率",
                                     nvl(round(detail.marketingCount /
                                               decode(r.valid,
                                                      0,
                                                      null,
                                                      r.valid),
                                               5) * 100,
                                         0) || '%' as "营销宣传投诉率",
                                     nvl(detail.dontKonwCount, 0) 不知情投诉量,
                                     nvl(detail.marketingCount, 0) 营销宣传投诉量,
                                      nvl(round(r.valid /
                                               decode(l_count,
                                                      0,
                                                      null,
                                                      l_count),
                                               5) * 100,
                                         0) || '%' as 订单占比

                                from (select case
                                               when v_time_type = 2 then
                                                trunc(t.create_time, 'mm')
                                               else
                                                trunc(t.create_time)
                                             end as orderTime,
                                             t.business_type,
                                             t.province_no,
                                             count(1) as total, --总订单数
                                         --noformat start
                                        sum(case when t.order_status = 0 then 1 else 0 end) as valid, --有效订单
                                        sum(case when ext.activate_status = 0 then 1 else 0 end) as activateCount, --激活订单数
                                        sum(case when ext.activate_status = 0 and ext.activate_time <= (t.create_time + 3) then 1 else 0 end) as activeT3, --T+3激活数
                                        sum(case when ext.activate_status = 0 and ext.activate_time <= (t.create_time + 7) then 1 else 0 end) as activeT7, --T+7激活数
                                        sum(case when ext.express_no is not null then 1 else 0 end) as delivaryCount --发货量
                                        --sum(case when detail.order_date = trunc(t.create_time) then 1 else 0 end) as complainCount,
                                        --sum(case when detail.complain_type = 2 then 1 else 0 end) as dontKonwCount ,--不知情投诉量
                                        --sum(case when detail.complain_type = 5 then 1 else 0 end) as marketingCount--营销宣传投诉量
                                          --noformat end
                                        from DM_ORDER_MAIN t
                                        left join dm_order_main_ext ext
                                          on t.order_no = ext.order_no
                                        left join dm_order_bind ob
                                          on ob.order_no = t.order_no
                                        left join put_account_info pai
                                          on pai.promoter_id = t.promoter_id

                                       where t.order_no in
                                             (select order_no
                                                from dm_order_main t
                                               where (t.create_time >=
                                                     l_start_time or
                                                     l_start_time is null)
                                                 and (t.create_time <
                                                     l_end_time or
                                                     l_end_time is null)
                                                 and (t.business_type = 4) --流量包
                                                 and (t.province_no =
                                                     v_province_no or
                                                     v_province_no is null))
                                       group by (case
                                                  when v_time_type = 2 then
                                                   trunc(t.create_time, 'mm')
                                                  else
                                                   trunc(t.create_time)
                                                end, t.business_type,
                                                 t.province_no)
                                       order by case
                                                  when v_time_type = 2 then
                                                   trunc(t.create_time, 'mm')
                                                  else
                                                   trunc(t.create_time)
                                                end) r
                                left join dm_system_dictionary dsd1
                                  on R.Business_Type = dsd1.value
                                 and dsd1.type = 'BusinessType'
                                left join dm_system_province dsp
                                  on R.province_no = dsp.province_no
                                left join (select case
                                                   when v_time_type = 2 then
                                                    trunc(t.order_date, 'mm') --月
                                                   else
                                                    trunc(t.order_date) --天
                                                 end as order_date,
                                                 t.province_no,
                                                 count(1) as complainCount, --投诉量
                                                 sum(case
                                                       when t.complain_type = 2 then
                                                        1
                                                       else
                                                        0
                                                     end) as dontKonwCount, --不知情投诉量
                                                 sum(case
                                                       when t.complain_type = 5 then
                                                        1
                                                       else
                                                        0
                                                     end) as marketingCount --营销宣传投诉量
                                            from zy_complain_detail t
                                           where t.match_status = 0
                                           group by case
                                                      when v_time_type = 2 then
                                                       trunc(t.order_date,
                                                             'mm') --月
                                                      else
                                                       trunc(t.order_date) --天
                                                    end,
                                                    t.province_no) detail
                                  on detail.order_date = r.orderTime
                                 and detail.province_no = r.province_no
                                 order by r.orderTime
                                 )
  select k.日期,
         k.业务类型,
         k.省份,
         k.订单量,
         k.有效订单量,
         k.有效订单率,
         decode(substr(k.订单占比, 1, 1), '.', '0' || k.订单占比, k.订单占比) as 订单占比,
         k.投诉量,
         decode(substr(k.投诉率, 1, 1), '.', '0' || k.投诉率, k.投诉率) as 投诉率,
         decode(substr(k.不知情投诉率, 1, 1),
                '.',
                '0' || k.不知情投诉率,
                k.不知情投诉率) as 不知情投诉率,
         decode(substr(k.营销宣传投诉率, 1, 1),
                '.',
                '0' || k.营销宣传投诉率,
                k.营销宣传投诉率) as 营销宣传投诉率
  -- k.不知情投诉率,
  --k.营销宣传投诉率
  -- select to_char(0.25,'fm99999990.999999') from dual
  -- rtrim(to_char(k.营销宣传投诉率 * 100, 'fm9990.99'), '.') || '%'  营销宣传投诉率
    from resultOrder k

  union all
  select '合计',
         null,
         null,
         sum(k.订单量),
         sum(k.有效订单量),
         nvl(round(sum(k.有效订单量) /
                   decode(sum(k.订单量), 0, null, sum(k.订单量)),
                   5) * 100,
             0) || '%',
         '1',
         sum(k.投诉量),
         decode(substr(nvl(round(sum(k.投诉量) /
                                 decode(sum(k.有效订单量),
                                        0,
                                        null,
                                        sum(k.有效订单量)),
                                 5) * 100,
                           0) || '%',
                       1,
                       1),
                '.',
                '0' ||
                nvl(round(sum(k.投诉量) / decode(sum(k.有效订单量),
                                              0,
                                              null,
                                              sum(k.有效订单量)),
                          5) * 100,
                    0) || '%',
                nvl(round(sum(k.投诉量) / decode(sum(k.有效订单量),
                                              0,
                                              null,
                                              sum(k.有效订单量)),
                          5) * 100,
                    0) || '%'),
         decode(substr(nvl(round(sum(k.不知情投诉量) /
                                 decode(sum(k.有效订单量),
                                        0,
                                        null,
                                        sum(k.有效订单量)),
                                 5) * 100,
                           0) || '%',
                       1,
                       1),
                '.',
                '0' || nvl(round(sum(k.不知情投诉量) /
                                 decode(sum(k.有效订单量),
                                        0,
                                        null,
                                        sum(k.有效订单量)),
                                 5) * 100,
                           0) || '%',
                nvl(round(sum(k.不知情投诉量) /
                          decode(sum(k.有效订单量),
                                 0,
                                 null,
                                 sum(k.有效订单量)),
                          5) * 100,
                    0) || '%'),
         decode(substr(nvl(round(sum(k.营销宣传投诉量) /
                                 decode(sum(k.有效订单量),
                                        0,
                                        null,
                                        sum(k.有效订单量)),
                                 5) * 100,
                           0) || '%',
                       1,
                       1),
                '.',
                '0' || nvl(round(sum(k.营销宣传投诉量) /
                                 decode(sum(k.有效订单量),
                                        0,
                                        null,
                                        sum(k.有效订单量)),
                                 5) * 100,
                           0) || '%',
                nvl(round(sum(k.营销宣传投诉量) /
                          decode(sum(k.有效订单量),
                                 0,
                                 null,
                                 sum(k.有效订单量)),
                          5) * 100,
                    0) || '%')

    from resultOrder k;

  v_out_status := error_code.success;
  v_out_msg    := '查询成功';
  commit;
exception
  when others then
    v_out_status := error_code.failed;
    v_out_msg    := '查询失败';
    rollback;

end SP_PROVINCE_FLOW_REPORT;
