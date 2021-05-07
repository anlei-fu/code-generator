with r1 as(
select
t.city_no,
count(1) total_order_count,
sum(decode(t.order_status,0,1,0)) valid_order_count
from dm_order_main t
where t.create_time >=trunc(sysdate -@startTime)
  and t.create_time <trunc(sysdate -@endTime)
@where
group by 
t.city_no
)

select 
t1.city_name,
r1.total_order_count,
r1.valid_order_count,
f_divide(r1.valid_order_count,r1.total_order_count) valid_order_rate,
f_divide(r1.total_order_count,(select sum(t1.total_order_count) from r1 t1)) order_rate
from r1
left join dm_system_city t1 on r1.city_no = t1.city_no
order by r1.total_order_count desc