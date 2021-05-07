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
 order by r2.time desc ,r2.count desc
 
 