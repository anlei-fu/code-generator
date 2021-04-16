with r1 as
 (select trunc(t.report_time, 'dd') time,
         sum(t.convert) convert,
         t1.promoter_id
    from ad_main_hour_report t
    left join put_account_info t1
      on t.account_id = t1.account_id
   where t.report_time >= trunc(sysdate - 0)
   and t.report_time < trunc(sysdate+1)
   group by trunc(t.report_time, 'dd'), t1.promoter_id),
r2 as
 (select trunc(t.create_time, 'dd') time,
         sum(decode(t.order_status, 0, 1, 0)) valid,
         t.promoter_id
    from dm_order_main t
    where t.create_time >= trunc(sysdate-0)
          and t.create_time < trunc(sysdate+1)
   group by trunc(t.create_time, 'dd'), t.promoter_id),
r3 as
 (select r1.time, r1.promoter_id, r1.convert, r2.valid
    from r1
    left join r2
      on r1.time = r2.time
     and r1.promoter_id = r2.promoter_id
   where r1.convert != r2.valid)

select r3.time,
       t2.agent_name,
       r3.promoter_id,
       t3.user_name,
       t4.name,
       r3.convert,
       r3.valid,
       r3.valid-r3.convert differ
  from r3
  left join Put_Account_Info t1
    on t1.promoter_id = r3.promoter_id
  left join put_agent_info t2
    on t2.agent_no = t1.agent_no
  left join dm_promoter_info t3
    on t1.promoter_id = t3.promoter_id
  left join dm_system_dictionary t4
    on t4.value = t1.product_type
   and t4.type = 'ProductType'
   order by r3.time desc 
