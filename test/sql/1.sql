 
     with t as (select
           --noformat start 
            r1.report_time report_time, -- 报表时间
            r4.extend_1 advertiser_id, -- 广告主编号
            r5.plat_name plat_name, -- 平台名称
            r4.agent_no, -- 代理商编号             
            r6.agent_name agent_name, -- 代理商名称
            r3.user_name promoter, -- 推广人
            nvl(r7.name,r8.name) business_name, -- 业务类型
            r4.rebate_rate rebate_rate, -- 返点比例
            r1.cost_count total_cost, -- 总消耗
            round(r1.cost_count / (1 + r4.rebate_rate), 2) real_cost, -- 实际消耗=总消耗/(1+返点比例)
            r1.show_count show_count, -- 展示数
            r1.click_count click_count, -- 点击数
            round(r1.click_count / decode(r1.show_count, 0, null, r1.show_count), 4) click_rate, -- 点击率=点击数/展示数       
            r1.convert_count convert_count, -- 转化数
            round(r1.convert_count / decode(r1.click_count, 0, null, r1.click_count), 4) convert_rate, -- 转化率=转化数/点击数
            nvl(round(r1.cost_count / decode(r1.convert_count, 0, null, r1.convert_count), 2), 0) convert_cost, -- 转化成本=总消耗/转化数
            nvl(r2.total,0) total_order, -- 订单总数
            nvl(r2.valid,0 ) valid_order, -- 有效订单数
            round(nvl(r2.valid / round(decode(r2.total, 0, null, r2.total), 4), 0), 4) valid_rate, -- 有效订单率=有效订单数/总订单数
            nvl(round(round(r1.cost_count / (1 + r4.rebate_rate), 2) / decode(r2.valid, 0, null, r2.valid), 2), 0) valid_cost, -- 有效订单成本=实际消耗/有效订单数
            nvl(r2.income,0) expect_income, -- 预估收益
            nvl(round(r2.income - round(r1.cost_count / (1 + r4.rebate_rate), 2), 2), 0) expect_profit, -- 预估利润=预估收益-实际消耗
            round(nvl(r2.income, 0) / round(decode(r1.cost_count,0,null,r1.cost_count) / (1 + r4.rebate_rate), 2), 2) in_out_rate, -- 投产比=预估收益/实际消耗
            nvl(r2.activate_count,0) activate_count, -- 激活数
            nvl(round(r1.cost_count / (1 + r4.rebate_rate) / decode(r2.activate_count, 0, null, r2.activate_count), 2), 0) activate_cost, -- 激活成本=实际消耗/激活数
            round(r2.activate_count / decode(r2.total, 0, null, r2.total), 4) activate_rate, -- 激活率=激活数/订单数
            round(r2.activate_count / decode(r2.valid, 0, null, r2.valid), 4) valid_activate_rate, -- 有效激活率=激活数/有效订单数
            nvl(r2.recharge_count,0) recharge_count, -- 首充数
            nvl(round(r2.recharge_count / decode(r2.activate_count, 0, null, r2.activate_count), 4), 0) recharge_rate, -- 首充率=首充数/激活数
            nvl(r2.on_net_count,0) on_net_count, -- 本网数
            nvl(round(r2.on_net_count / decode(r2.activate_count, 0, null, r2.activate_count), 4), 0) on_net_rate -- 本网率=本网数/激活数
            --noformat end
           from (select t2.account_id,
                        t2.promoter_id,
                        t1.advertiser_id advertiser_id, --账户id,
                        trunc(t1.report_time,'hh') report_time,
                        nvl(sum(t1.show), 0) show_count, --展示数,
                        nvl(sum(t1.click), 0) click_count, --点击数,
                        nvl(sum(t1.convert), 0) convert_count, --转化数,
                        nvl(sum(t1.cost), 0) cost_count, --总消耗 ,
                        nvl(sum(t1.total_play), 0) total_play_count, --播放数,
                        nvl(sum(t1.over_play), 0) over_play_count --完播数
                   from ad_main_hour_report t1
                   left join put_account_info t2
                     --on t2.extend_1 = t1.advertiser_id
					  on t2.account_id = t1.account_id
                  group by t2.account_id,
                           t2.promoter_id,
                           t1.advertiser_id,
                           trunc(t1.report_time,'hh')) r1
           left join (select trunc(t1.create_time, 'hh') order_time,
                            t1.promoter_id,
                            t1.business_type,
                            count(1) as total, --总订单数                    
                       --noformat start               
                       sum(case when t1.order_status = 0 then case when t1.business_type =1 then -28.01 when t1.business_type =4 then -21.4 else  t3.up_price end else 0 end) * -1 as income, --预估收益
                       sum(case when t1.order_status = 0 then 1 else 0 end) as valid, --有效订单
                       sum(case when t2.activate_status = 0 then 1 else 0 end) as activate_count, --激活订单数
                       sum(case when t2.recharge_status = 0 then 1 else 0 end) as recharge_count, --首充订单数
                       sum(case when t2.activate_status = 0 and t2.net_range = 1 then 1 else 0 end) as on_net_count, --本网订单数
                       sum(case when t2.activate_status = 0 and t2.net_range = 2 then 1 else 0 end) as other_net_count  --异网订单数
                       --noformat end
                       from dm_order_main t1
                       left join dm_order_main_ext t2
                         on t1.order_no = t2.order_no
                       left join dm_order_bind t3
                         on t3.order_no = t1.order_no
                      group by t1.promoter_id,
                               t1.business_type,
                               trunc(t1.create_time, 'hh')) r2
             on r2.promoter_id = r1.promoter_id
            and r2.order_time = r1.report_time
          inner join dm_promoter_info r3
             on r3.promoter_id = r1.promoter_id
          inner join put_account_info r4
             on r4.account_id = r1.account_id
          inner join put_plat_info r5
             on r5.plat_no = r4.plat_no
          inner join put_agent_info r6
             on r6.agent_no = r4.agent_no
          left join dm_system_dictionary r7
             on r2.Business_Type = r7.value
            and r7.type = 'BusinessType'
          left join dm_system_dictionary r8
          on r4.business_type = r8.value and r8.type='BusinessType'
          where 1 = 1
            and 1=1
            and 1=1
            and (r2.business_type ='4' or(r2.business_type is null and r4.business_type='4'))
            and 1=1
            and 1=1
            and r1.report_time>=to_date('2020/11/2 0:00:00','yyyy-mm-dd  hh24:mi:ss')
            and r1.report_time<to_date('2020/11/2 23:00:00','yyyy-mm-dd  hh24:mi:ss')
            ) 
 
 select to_char(t.report_time, 'yyyy-mm-dd hh24:mi:ss') reporttime,
        t.advertiser_id advertiserid,
        t.plat_name platname,
        t.agent_no agentno,        
        t.agent_name agentname,
        t.promoter username,
        t.business_name businesstype,
        t.rebate_rate rebaterate,
        t.total_cost costcount,
        t.real_cost realcost,
        t.show_count showcount,
        t.click_count clickcount,
        t.click_rate * 100 || '%' clickrate,
        t.convert_count convertcount,
        t.convert_rate * 100 || '%' convertrate,
        t.convert_cost convertcost,
        t.total_order total,
        t.valid_order valid,
        nvl(t.valid_rate,0) * 100 || '%' validrate,
        t.valid_cost validordercost,
        t.expect_income forecastearn,
        t.expect_profit forecastincome,
        t.in_out_rate putgetrate,
        t.activate_count activatecount,
        t.activate_cost activatecost,
        nvl(t.activate_rate,0) * 100 || '%' activaterate,
        nvl(t.valid_activate_rate,0) * 100 || '%' validactivaterate,
        t. recharge_count rechargecount,
        t.recharge_rate * 100 || '%' rechargerate,
        t.on_net_count onnetcount,
        t.on_net_rate * 100 || '%' onnetrate
   from t
   union all
        select
        '合计' reporttime,
        null advertiserid,
        null platname,
        null agentno,        
        null agentname,
        null username,
        null businesstype,
        round(avg(t.rebate_rate),2) rebaterate, -- 返点比例
        sum(t.total_cost) costcount,
        sum(t.real_cost) realcost,
        sum(t.show_count) showcount,
        sum(t.click_count) clickcount,
        decode(sum(t.show_count),0,0,round(sum(t.click_count)/sum(t.show_count),4))  * 100 || '%' clickrate, --点击率
        sum(t.convert_count) convertcount,
        decode(sum(t.click_count),0,0,round(sum(t.convert_count)/sum(t.click_count),4))* 100 || '%' convertrate, -- 转换率
        decode (sum(t.convert_count),0,0,round(sum(t.total_cost)/sum(t.convert_count),2))convertcost, --- 转化成本
        sum(t.total_order) total,
        sum(t.valid_order) valid,
        decode(sum(t.total_order),0,0,round(sum(t.valid_order)/sum(t.total_order),2)) * 100 || '%' validrate,
        decode(sum(t.valid_order),0,0, round(sum(t.real_cost)/sum(t.valid_order),2))  validordercost, -- 有效订单成本
        round(sum(t.expect_income),4) forecastearn,
        sum(t.expect_profit) forecastincome,
        decode(sum(t.real_cost),0,0,round(sum(t.expect_income)/sum(t.real_cost),4)) putgetrate, -- 投产比
        sum(t.activate_count) activatecount,
        decode(sum(t.activate_count),0,0,round(sum(t.real_cost)/sum(t.activate_count),2))   activatecost,--激活成本
        decode(sum(t.total_order),0,0,round(sum(t.activate_count)/sum(t.total_order),4)) * 100 || '%' activaterate,
        decode(sum(t.valid_order),0,0,round(sum(t.activate_count)/sum(t.valid_order),4)) * 100 || '%' validactivaterate,
        sum(t.recharge_count) rechargecount,
        decode(sum(t.activate_count),0,0,round(sum(t.recharge_count)/sum(t.activate_count),4)) * 100 || '%' rechargerate,
        sum(t.on_net_count) onnetcount,
        decode(sum(t.activate_count),0,0,round(sum(t.on_net_count)/sum(t.activate_count),4)) * 100 || '%' onnetrate
        from t
        