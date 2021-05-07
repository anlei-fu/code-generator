
with r1 as(
select count(1) total,
       sum(decode(t.order_status, 0, 1, 0)) valid,
       t.product_type,
       trunc(t.create_time,'mm') time
  from dm_order_main t
 where t.create_time >= trunc(sysdate - 0)
   and t.create_time < trunc(sysdate + 1)
 group by t.product_type,trunc(t.create_time,'mm')
 order by count(1) desc)
 select 
 r1.time,
 t1.name,
 r1.product_type,
 r1.total,
 r1.valid,
 f_divide_to_percent_str(r1.valid,r1.total) rate
 from r1
 left join dm_system_dictionary t1 on r1.product_type = t1.value and t1.type='ProductType'
