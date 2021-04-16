-- cost 表 
with r1 as
 (select trunc(t.report_time, 'dd') time,
         nvl(sum(t.total_show), 0) show_count,
         nvl(sum(t.total_click), 0) click_count,
         nvl(sum(t.total_convert), 0) convert_count,
         nvl(sum(t.real_cost), 0) real_cost,
         nvl(sum(t.total_cost), 0) cost,
         t.advertiser_uid,
         advertiser.account_id,
         nvl(t.rebate_rate, 0) rebate_rate
    FROM os_agent_advertiser_cost t
    LEFT JOIN os_agent_advertiser advertiser
      ON t.advertiser_uid = advertiser.advertiser_uid
   WHERE  advertiser.product_type = 1
   group by t.rebate_rate,
            t.advertiser_uid,
            advertiser.account_id,
            trunc(t.report_time, 'dd')),
-- 订单表 
r2 as
 (select trunc(t.create_time, 'dd') time,
         t.account_id,
         count(1) total_order_count,
         sum(decode(t.order_status, 0, 1, 0)) valid_order_count,
         1 expected_income,
         sum(decode(ext.activate_status, 0, 1, 0)) activate_count,
         sum(decode(ext.recharge_status, 0, 1, 0)) recharge_count
    FROM os_order_main t
    LEFT JOIN os_order_extend ext
      ON t.order_no = ext.order_no
   WHERE t.product_type = 1
   group by t.account_id, trunc(t.create_time, 'dd')),
r3 as
 (select to_char(r1.time, 'yyyy-mm-dd hh24:mi:ss') report_time, -- 日期 
         r1.cost, -- 消耗 
         r1.real_cost, -- 真是消耗
         r1.rebate_rate, -- 返点比例 
         r1.show_count, -- 展示数 
         r1.click_count, -- 点击数 
         f_divide_to_percent_str(r1.click_count, r1.show_count) click_rate, -- 点击率 
         r1.convert_count, -- 转化数 
         f_divide_to_percent_str(r1.convert_count, r1.click_count) convert_rate, -- 转化率 
         f_divide(r1.real_cost, r1.convert_count) convert_price, -- 转化成本 
         nvl(r2.total_order_count, 0) total_order_count, -- 总订单
         nvl(r2.valid_order_count, 0) valid_order_count, -- 有效订单 
         f_divide_to_percent_str(r2.valid_order_count, r2.total_order_count) valid_order_rate, -- 有效订单率 
         f_divide(r1.real_cost, r2.valid_order_count) valid_order_price, -- 有效订单成本 
         nvl(r2.activate_count, 0) activate_count, -- 激活数
         f_divide_to_percent_str(r2.activate_count, r2.valid_order_count) valid_activate_rate, -- 有效订单激活率
         nvl(r2.recharge_count, 0) recharge_count, -- 首充数 
         f_divide_to_percent_str(r2.recharge_count, r2.valid_order_count) valid_recharge_rate, -- 有效订单首充率 
         nvl(r2.expected_income, 0) expected_income, -- 预估收益 
         1 expected_profit, -- 预估利润
         advertiser.advertiser_id, -- 广告主编号 
         account.plat_no, -- 平台编号 
         account.agent_no, -- 代理商编号
         agent.carrier_license, -- 代理商资质 
         account.principal, -- 负责人 
         account.operate_mode, -- 运营类型 
         advertiser.product_type, -- 产品类型 
         advertiser.business_type -- 业务类型
    FROM r1
    LEFT JOIN r2
      ON r1.account_id = r2.account_id
     and r1.time = r2.time
    LEFT JOIN os_agent_advertiser advertiser
      ON advertiser.advertiser_uid = r1.advertiser_uid
    LEFT JOIN os_agent_account account
      ON account.account_id = r1.account_id
    LEFT JOIN os_agent_info agent
      ON account.agent_no = agent.agent_no
   order by r1.time desc,
            advertiser.business_type,
            advertiser.product_type,
            account.principal)
SELECT r3.*
  FROM r3
UNION all
SELECT '合计',
       nvl(sum(r3.cost), 0),
       nvl(sum(r3.real_cost), 0),
       null,
       nvl(sum(r3.show_count), 0),
       nvl(sum(r3.click_count), 0),
       f_divide_to_percent_str(sum(r3.click_count), sum(r3.show_count)),
       nvl(sum(r3.convert_count), 0),
       f_divide_to_percent_str(sum(r3.convert_count), sum(r3.click_count)),
       f_divide(sum(r3.real_cost), sum(r3.convert_count)),
       nvl(sum(r3.total_order_count), 0),
       nvl(sum(r3.valid_order_count), 0),
       f_divide_to_percent_str(sum(r3.valid_order_count),
                               sum(r3.total_order_count)),
       f_divide(sum(r3.real_cost), sum(r3.valid_order_count)),
       nvl(sum(r3.activate_count), 0),
       f_divide_to_percent_str(sum(r3.activate_count),
                               sum(r3.valid_order_count)),
       nvl(sum(r3.recharge_count), 0),
       f_divide_to_percent_str(sum(r3.recharge_count),
                               sum(r3.valid_order_count)),
       nvl(sum(r3.expected_income), 0),
       nvl(sum(r3.expected_profit), 0),
       null,
       null,
       null,
       null,
       null,
       null,
       null,
       null
  FROM r3;
