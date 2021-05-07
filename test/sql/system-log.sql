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
 order by r1.time desc ,r1.count desc