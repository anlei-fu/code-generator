with r1 as(
select
t.province_no,
count(1) total_order_count,
sum(decode(t.order_status,0,1,0)) valid_order_count
from dm_order_main t
where t.create_time >sysdate -30
group by 
t.province_no
)

select 
t1.province_name,
r1.total_order_count,
r1.valid_order_count,
f_divide(r1.valid_order_count,r1.total_order_count),
f_divide(r1.total_order_count,(select sum(t1.total_order_count) from r1 t1)) order_rate
from r1
left join dm_system_province t1 on r1.province_no = t1.province_no
order by r1.total_order_count