create or replace procedure SP_PROVINCE_ORDER_REPORT1(v_start_time  varchar2, --起始时间
                                                     v_end_time    varchar2, --结束时间
                                                     v_time_type   number, --时间类型 0 --小时 1 --天 2 --月
                                                     v_province_no varchar2, --省份(多个)
                                                     v_plat_no     varchar2, -- 推广平台
                                                     v_agent_no    varchar2, -- 代理商
                                                     v_promoter_id number, -- 推广人
                                                     v_out_status  out number, --状态,100表示成功,其他失败
                                                     v_out_msg     out varchar2, --结果消息
                                                     v_out_data    out pkg_cursor.pointer --数据集合
                                                     ) as
  -----------------------------------------
  -- 用途: 地域分析-号卡-省份报表
  -- 创建: mouchao 2020-09-27
  -- 修改  fual  2020-10-21
  -----------------------------------------
  --noformat start
  l_date_format varchar2(128) := case when v_time_type = 2 then 'yyyy-mm'else 'yyyy-mm-dd' end;
  l_date_trunc_pattern varchar2(128) :=case when v_time_type = 2 then 'mm'else 'dd' end;

begin

  open v_out_data for
    with res as(
    select
       to_char(r.order_date,l_date_format) order_date,
       r.province_name,
       r.business_name,
       nvl(r.total_order_count,0) total_order_count, --总订单数
       nvl(r.valid_order_count,0) valid_order_count, --有效订单
       nvl(r.delivery_count,0) delivery_count, --发货量
       nvl(r.activate_count,0) activate_count, --激活订单数
       nvl(r.t3_activate_count,0) t3_activate_count,--T+3激活数
       nvl(r.t7_activate_count,0) t7_activate_count --T+7激活数
     from(select
               trunc(t.create_time,l_date_trunc_pattern) order_date,
               dic1.name business_name,
               ext.contact_province province_name,
               count(1) as total_order_count,
               sum(case when t.order_status = 0 then 1 else 0 end) valid_order_count,
               sum(case when ext.express_no is not null then 1 else 0 end)  delivery_count ,
               sum(case when ext.activate_status = 0 then 1 else 0 end) activate_count,
               sum(case when ext.activate_status = 0 and ext.activate_time <= (t.create_time + 3) then 1 else 0 end)  t3_activate_count,
               sum(case when ext.activate_status = 0 and ext.activate_time <= (t.create_time + 7) then 1 else 0 end)  t7_activate_count
          from dm_order_main t
          left join dm_order_main_ext ext on t.order_no = ext.order_no
          left join dm_system_dictionary dic1 on t.business_type = dic1.value and dic1.type = 'BusinessType'
          where
               (v_start_time is null or t.create_time >= to_date(v_start_time,'yyyy-MM-dd'))
               and (v_end_time is null or t.create_time < to_date(v_end_time,'yyyy-MM-dd'))
               and (t.business_type = 1) --号卡
               and ( v_province_no is null or
                   ext.contact_province in (select * from table(f_string_split(v_province_no)))
               )
               and (v_plat_no is null or t.plat_no = v_plat_no)
               and (v_agent_no is null or t.agent_no = v_agent_no)
               and (v_promoter_id is null or t.promoter_id = v_promoter_id)
          group by
             trunc(t.create_time,l_date_trunc_pattern),
             dic1.name,
             ext.contact_province
          order by trunc(t.create_time,l_date_trunc_pattern) desc
          )r
     )

     select
       t.order_date 订单时间,
       t.business_name 业务类型,
       t.province_name 省份,
       t.total_order_count 订单总量,
       t.valid_order_count 有效订单量,
       f_divide_to_percent_str(t.valid_order_count,t.total_order_count) 有效订单率,
       t.delivery_count 发货量,
       f_divide_to_percent_str(t.delivery_count,t.total_order_count) 发货率,
       t.activate_count 激活数,
       f_divide_to_percent_str(t.activate_count,t.total_order_count) 激活率,
       f_divide_to_percent_str(t.activate_count,t.valid_order_count) 有效订单激活率,
       t.t3_activate_count "t+3激活数",
       f_divide_to_percent_str(t.t3_activate_count,t.total_order_count) "t+3激活率",
       t.t7_activate_count "t+7激活数",
       f_divide_to_percent_str(t.t7_activate_count,t.total_order_count) "t+7激活率"
     from res t
     union all
     select
       '合计',
       null,
       null,
       sum(t.total_order_count),
       sum(t.valid_order_count),
       f_divide_to_percent_str(sum(t.valid_order_count),sum(t.total_order_count)),
       sum(t.delivery_count),
       f_divide_to_percent_str(sum(t.delivery_count),sum(t.total_order_count)),
       sum(t.activate_count),
       f_divide_to_percent_str(sum(t.activate_count),sum(t.total_order_count)),
       f_divide_to_percent_str(sum(t.activate_count),sum(t.valid_order_count)),
       sum(t.t3_activate_count),
       f_divide_to_percent_str(sum(t3_activate_count),sum(t.total_order_count)),
       sum(t.t7_activate_count),
       f_divide_to_percent_str(sum(t7_activate_count),sum(t.total_order_count))
     from res t;
      --noformat end
  v_out_status := error_code.success;
  v_out_msg    := '查询成功';
  commit;
exception
  when others then
    v_out_status := error_code.failed;
    v_out_msg    := '查询失败';
    rollback;

end;
