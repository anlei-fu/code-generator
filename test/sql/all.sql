with r1 as
 (select count(1) count
    from dm_order_notify t
   inner join dm_order_main t1
      on t.order_no = t1.order_no
   inner join dm_term_promote t2
      on t1.promote_id = t2.promote_id
   where t1.business_type = 4
     and t.status = 0
     and t1.create_time >= trunc(sysdate)
     and t1.create_time < sysdate
     and t2.activate_type = 2),
r2 as
 (select count(1) count
    from dm_order_main t1
   inner join dm_term_promote t2
      on t1.promote_id = t2.promote_id
   where t1.order_status = 0
     and t1.business_type = 4
     and t1.create_time >= trunc(sysdate)
     and t1.create_time < sysdate
     and t2.activate_type = 1),
r3 as
 (select count(1) count
    from dm_order_main t
   where t.business_type = 4
     and t.order_status = 0
     and t.create_time >= trunc(sysdate)
     and t.create_time < sysdate
     ),
     
r4 as
 (select sum(t1.convert) count
    from ad_main_hour_report t1
    left join put_account_info t2
      on t1.account_id = t2.account_id
   where t1.report_time >= trunc(sysdate)
   and t1.report_time < sysdate
  
  )

select 'api-notify' name, r1.count "type"
  from r1
union all
select 'js-notify', r2.count
  from r2
union all
select 'js+api',
       (select max(r1.count) from r1) + (select max(r2.count) from r2)
  from dual
union all
select 'all-order', r3.count
  from r3
  union all
select 'notify-differ',   (select max(r3.count) from r3)-  (select max(r1.count) from r1)-  (select max(r2.count) from r2)
  from dual
union all
select 'covert', r4.count
  from r4
union all
select 'covert-differ',
       (select max(r3.count) from r3) - (select max(r4.count) from r4)
  from dual;
  with r1 as (select 
 t.operate_type,
 t.arg1,
 t.arg2,
 substr(t.msg,1,least(length(t.msg),60)) msg,
 trunc(t.create_time,'hh') time,
 count(1) count
 from  dm_task_info t
 where 
 t.deal_status = 90
 and 
  t.create_time >= trunc(sysdate-0)
  and t.create_time < trunc(sysdate +1)
 group by
  t.operate_type,
  t.arg1,
  t.arg2,
  substr(t.msg,1,least(length(t.msg),60)),
  trunc(t.create_time,'hh')
 order by t.arg2  ,trunc(t.create_time,'hh')),
 r2 as (
 select 
 r1.time,
 r1.count,
 r1.msg,
 r1.arg2 account_id,
 t3.plat_name,
 t2.agent_name,
 t5.user_name,
 t4.name,
 t1.extend_1,
 t1.login_uid
 from r1
 left join put_account_info t1 on r1.arg2 = t1.account_id
 left join put_agent_info t2 on t1.agent_no = t2.agent_no
 left join put_plat_info t3 on t1.plat_no = t3.plat_no
 left join dm_system_dictionary t4 on r1.operate_type = t4.value and t4.type='OperateType'
 left join dm_promoter_info t5 on t1.promoter_id = t5.promoter_id
 )
 
 select * from r2
 order by r2.time desc ,r2.count desc;
 with r1 as (
select trunc(t.create_time, 'hh') time,
       count(1) count,
       t.req_url url,
       substr(t.keywords, 1, least(length(t.keywords), 25)) keywords,
       substr(t.req_data, 1, least(length(t.req_data), 30)) resp,
       substr(t.message, 1, least(length(t.message), 12)) msg,
       t.term_no
  from DM_API_FAILED_LOG t
 where 
     t.create_time >= trunc(sysdate-0)
  and t.create_time < trunc(sysdate +1)
 group by t.term_no,
          t.req_url,
          substr(t.keywords, 1, least(length(t.keywords), 25)),
          substr(t.req_data, 1, least(length(t.req_data), 30)),
          substr(t.message, 1, least(length(t.message), 12)),
          trunc(t.create_time, 'hh')
 order by trunc(t.create_time, 'hh') desc, count(1) desc)
 
 select 
 r1.time,
 r1.count,
 r1.url,
 r1.keywords,
 r1.resp,
 r1.msg,
 r1.term_no,
 t1.term_name
 from r1 
 left join  dm_term_info t1 on r1.term_no = t1.term_no;
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
   order by r3.time desc ;

with r1 as
 (select count(1) total,
         sum(decode(t.order_status, 0, 1, 0)) valid,
         t.product_type,
         t.promote_id,
         trunc(t.create_time,'mm') time
    from dm_order_main t
   where t.create_time >= trunc(sysdate - 0)
     and t.create_time < trunc(sysdate + 1)
   group by t.product_type, trunc(t.create_time,'mm'), promote_id
   order by t.product_type, count(1) desc , t.promote_id)

select r1.time,
 t1.name,
  r1.product_type,
   t3.user_name,
   r1.total, 
   r1.valid,
   f_divide_to_percent_str(r1.valid,r1.total) rate,
   t2.promote_url,
   t4.login_uid,
   t4.account_id,
   t5.agent_name
  from r1
  left join dm_system_dictionary t1
    on r1.product_type = t1.value
   and t1.type = 'ProductType'
  left join dm_term_promote t2
    on r1.promote_id = t2.promote_id
  left join dm_promoter_info t3
    on t2.promoter_id = t3.promoter_id
  left join put_account_info t4 on t3.promoter_id = t4.promoter_id
  left join put_agent_info t5 on t4.agent_no = t5.agent_no;
  with r1 as(
select 
  trunc(t.create_time,'hh') time,
  t.object_name,
  count(1) count,
  substr(t.error_desc, 1, least(length(t.error_desc), 40)) msg
  from dm_system_log t
  where
   t.create_time >= trunc(sysdate-0)
   and t.create_time < trunc(sysdate +1)
 group by t.object_name,
          substr(t.error_desc, 1, least(length(t.error_desc), 40)),
          trunc(t.create_time,'hh'))
          
 select * from r1 
 order by r1.time desc ,r1.count desc;
 with r1 as
 (select trunc(t.create_time, 'hh') time,
         t.result_msg,
         count(1) count,
         t.up_product_no
    from dm_order_vcode t
   where t.create_time >= trunc(sysdate - 0)
     and t.create_time < trunc(sysdate + 1)
   group by trunc(t.create_time, 'hh'), t.result_msg, t.up_product_no),
r2 as
 (select r1.time,
         r1.result_msg,
         t1.product_name,
         t2.channel_name,
         r1.count,
         f_divide_to_percent_str(r1.count,
                                 (select sum(t.count)
                                    from r1 t
                                   where r1.time = t.time
                                     and r1.up_product_no = t.up_product_no)) rate
    from r1
    left join dm_up_product t1
      on t1.product_no = r1.up_product_no
    left join dm_up_channel t2
      on t1.channel_no = t2.channel_no
   order by r1.time desc, r1.up_product_no, r1.count desc)

select *
  from r2
union all
select null, null, null, null, sum(r2.count), null from r2;
with r1 as(
select 
trunc(t.create_time,'hh') time,
t.result_msg,
t.product_no,
count(1) count
from dm_order_main t
where t.create_time >= trunc(sysdate -0)
and t.create_time < trunc(sysdate+1)
group by 
trunc(t.create_time,'hh'),
t.result_msg,
t.product_no
)

select 
r1.time,
r1.result_msg,
t1.product_name,
r1.count,
f_divide_to_percent_str(r1.count,(select sum(t.count) from r1 t where t.product_no = r1.product_no and t.time =r1.time)) rate
from r1
left join dm_down_product t1 on r1.product_no = t1.product_no
order by r1.time desc ,r1.product_no, r1.count desc;

 

 
 
