with r1 as(
select
  to_char(t.report_time,'day') time,
  sum(t.cost) cost,
  sum(t.show) show,
  f_divide(sum(t.cost), sum(t.show)) show_price,
  sum(t.click) click,
  f_divide(sum(t.click), sum(t.show)) click_rate,
  f_divide(sum(t.cost), sum(t.click)) click_price,
  sum(t.convert) convert,
  f_divide(sum(t.cost), sum(t.convert)) convert_price,
  f_divide(sum(t.convert), sum(t.click)) convert_rate
 from ad_main_hour_report t
 where 
 t.report_time >= trunc(sysdate-30,'mm')
 and t.report_time < trunc(sysdate,'mm')
 group by
 to_char(t.report_time,'day')
),
r1_2 as (
select
 r1.time,
 r1.cost,
 f_divide(r1.cost,(select sum(t1.cost) from r1 t1)) cost_percent,
 r1.show,
 f_divide(r1.show,(select sum(t1.show) from r1 t1)) show_percent,
 r1.show_price,
 r1.click,
 f_divide(r1.click,(select sum(t1.click) from r1 t1)) click_percent,
 r1.click_price,
 r1.click_rate,
 r1.convert,
 f_divide(r1.convert,(select sum(t1.convert) from r1 t1)) convert_percent,
 r1.convert_price,
 r1.convert_rate
 from  r1
 order by r1.cost desc
)

select  
r1_2.*
from  r1_2