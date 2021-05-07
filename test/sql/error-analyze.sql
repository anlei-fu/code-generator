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
