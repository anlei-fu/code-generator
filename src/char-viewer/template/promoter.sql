with r1 as
 (select t.account_id,
         sum(t.cost) cost,
         sum(t.show) show,
         sum(t.click) click,
         sum(t.convert) convert
    from ad_main_hour_report t
    left join put_account_info t1 on t.account_id = t1.account_id
   where t.report_time >= trunc(sysdate - @startTime)
     and t.report_time < trunc(sysdate- @endTime)
     @where
   group by t.account_id),
r2 as
 (select
  t2.user_name,
  r1.cost,
  f_divide(r1.cost,(select sum(t1.cost) from r1 t1)) cost_percent,
  r1.show,
  f_divide(r1.show,(select sum(t1.show) from r1 t1)) show_percent,
  f_divide(r1.cost, r1.show) show_price,
  r1.click,
  f_divide(r1.click,(select sum(t1.click) from r1 t1)) clcik_percent,
  f_divide(r1.cost, r1.click) click_price,
  f_divide(r1.click, r1.show) click_rate,
  r1.convert,
  f_divide(r1.convert,(select sum(t1.convert) from r1 t1)) convert_percent,
  f_divide(r1.cost, r1.convert) convert_price,
  f_divide(r1.convert, r1.click) convert_rate
  from r1
  left join put_account_info t1 on r1.account_id = t1.account_id
  left join dm_promoter_info t2 on t1.promoter_id = t2.promoter_id
  )
  
  select r2.* from r2
