-- 今日消耗
with r1 as
 (select t.advertiser_uid,
         trunc(t.report_time) time,
         sum(t.total_cost) cost, --消耗
         f_divide(sum(t.total_cost), sum(t.total_convert)) convert_cost --转化成本
    from os_agent_advertiser_cost t
   where t.report_time >= to_date('2021-05-01 00:00:00', 'yyyy-mm-dd hh24:mi:ss')
   t.report_time < to_date('2021-05-02 00:00:00', 'yyyy-mm-dd hh24:mi:ss')
   group by t.advertiser_uid, trunc(t.report_time)),
-- 昨日消耗
r2 as
 (select t.advertiser_uid,
         trunc(t.report_time) time,
         sum(t.total_cost) cost, --消耗
         f_divide(sum(t.total_cost), sum(t.total_convert)) convert_cost --转化成本
    from os_agent_advertiser_cost t
   where t.report_time >=
         to_date('2021-05-01 00:00:00', 'yyyy-mm-dd hh24:mi:ss') - 1
   t.report_time < to_date('2021-05-02 00:00:00', 'yyyy-mm-dd hh24:mi:ss') - 1
   group by t.advertiser_uid, trunc(t.report_time)),
-- 上周消耗
r3 as
 (select t.advertiser_uid,
         trunc(t.report_time) time,
         sum(t.total_cost) cost, --消耗
         f_divide(sum(t.total_cost), sum(t.total_convert)) convert_cost --转化成本
    from os_agent_advertiser_cost t
   where t.report_time >=
         to_date('2021-05-01 00:00:00', 'yyyy-mm-dd hh24:mi:ss') - 7
   t.report_time < to_date('2021-05-02 00:00:00', 'yyyy-mm-dd hh24:mi:ss') - 7
   group by t.advertiser_uid, trunc(t.report_time)),
-- 今日订单
t1 as
 (select t.advertiser_uid,
         trunc(t.create_time) time,
         sum(decode(t.order_status, 0, 1, 0)) valid_order_count, --有效订单数
         sum(decode(t.order_status,
                    0,
                    f_get_reward_money(t.order_no,
                                       t.business_type,
                                       t.product_type,
                                       1),
                    0)) expected_income --预估收益
    from os_order_main t
   where t.create_time >= to_date('2021-05-01 00:00:00', 'yyyy-mm-dd hh24:mi:ss')
   t.create_time < to_date('2021-05-02 00:00:00', 'yyyy-mm-dd hh24:mi:ss')
   group by t.advertiser_uid, trunc(t.create_time)),
-- 昨日订单
t2 as
 (select t.advertiser_uid,
         +   
         trunc(t.create_time) time,
         sum(decode(t.order_status, 0, 1, 0)) valid_order_count, --有效订单数
         sum(decode(t.order_status,
                    0,
                    f_get_reward_money(t.order_no,
                                       t.business_type,
                                       t.product_type,
                                       1),
                    0)) expected_income --预估收益
    from os_order_main t
   where t.create_time >=
         to_date('2021-05-01 00:00:00', 'yyyy-mm-dd hh24:mi:ss') - 1
   t.create_time < to_date('2021-05-02 00:00:00', 'yyyy-mm-dd hh24:mi:ss') - 1
   group by t.advertiser_uid, trunc(t.create_time)),
-- 上周订单
t3 as
 (select t.advertiser_uid,
         trunc(t.create_time) time,
         sum(decode(t.order_status, 0, 1, 0)) valid_order_count, --有效订单数
         sum(decode(t.order_status,
                    0,
                    f_get_reward_money(t.order_no,
                                       t.business_type,
                                       t.product_type,
                                       1),
                    0)) expected_income --预估收益
    from os_order_main t
   where t.create_time >=
         to_date('2021-05-01 00:00:00', 'yyyy-mm-dd hh24:mi:ss') - 7
   t.create_time < to_date('2021-05-02 00:00:00', 'yyyy-mm-dd hh24:mi:ss') - 7
   group by t.advertiser_uid, trunc(t.create_time)),

k1 as
 (select r1.advertiser_uid,
         r1.cost,
         r1.convert_cost,
         t1.valid_order_count count,
         (t1.expected_income - r1.cost) profit
    from r1
    left join t1
      on r1.time = t1.time
     and r1.advertiser_uid = t1.advertiser_uid),
k2 as
 (select r2.advertiser_uid,
         r2.cost,
         r2.convert_cost,
         t2.valid_order_count count,
         (t2.expected_income - r2.cost) profit
    from r2
    left join t2
      on r2.time = t2.time
     and r2.advertiser_uid = t2.advertiser_uid),
k3 as
 (select r3.advertiser_uid,
         r3.cost,
         r3.convert_cost,
         t3.valid_order_count count,
         (t3.expected_income - r3.cost) profit
    from r3
    left join t3
      on r3.time = t3.time
     and r3.advertiser_uid = t3.advertiser_uid)

select k1.advertiser_uid,
       -- 今日
       k1.cost         today_cost,
       k1.count        today_count,
       k1.convert_cost today_convert_cost,
       k1.profit       today_profit,
       
       -- 昨日
       k2.cost         yesterday_cost,
       k2.convert_cost yesterday_convert_cost,
       k2.count        yesterday_count,
       k2.profit       yesterday_profit,
       
       -- 上周
       k3.cost         last_week_cost,
       k3.convert_cost last_week_convert_cost,
       k3.count        last_week_count,
       k3.profit       last_weeky_profit,
       
       --- 同比
       (k1.cost - k2.cost) yesterday_cost_growth,
       f_divide_to_percent_str((k1.cost - k2.cost), k2.cost) yesterday_cost_growth_rate,
       
       (k1.count - k2.count) yesterday_count_growth,
       f_divide_to_percent_str((k1.count - k2.count), k2.count) yesterday_count_growth_rate,
       
       (k1.convert_cost - k2.convert_cost) yesterday_convert_cost_growth,
       f_divide_to_percent_str((k1.convert_cost - k2.convert_cost),
                               k2.convert_cost) yesterday_convert_cost_grate,
       
       (k1.profit - k2.profit) yesterday_profit_growth,
       f_divide_to_percent_str((k1.profit - k2.profit), k2.profit) yesterday_profit_growth_rate,
       
       -- 环比
       (k1.cost - k3.cost) last_week_cost_growth,
       f_divide_to_percent_str((k1.cost - k3.cost), k3.cost) last_week_cost_growth_rate,
       
       (k1.count - k3.count) yesterday_count_growth,
       f_divide_to_percent_str((k1.count - k3.count), k3.count) last_week_count_growth_rate,
       
       (k1.convert_cost - k3.convert_cost) last_week_convert_cost_growth,
       f_divide_to_percent_str((k1.convert_cost - k3.convert_cost),
                               k3.convert_cost) last_week_convert_cost_g_rate,
       
       (k1.profit - k3.profit) last_week_profit_growth,
       f_divide_to_percent_str((k1.profit - k3.profit), k3.profit) last_week_profit_growth_rate,
       t1.advertiser_name

  from k1
  left join k2
    on k1.advertiser_uid = k2.advertiser_uid
  left join k3
    on k1.advertiser_uid = k3.advertiser_uid
  left join os_agent_advertiser t1
    on k1.advertiser_uid = t1.advertiser_uid
