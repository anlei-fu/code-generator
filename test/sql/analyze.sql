
with r1 as
 (select trunc(t.report_time) time,
         t.account_id,
         sum(t.cost) cost,
         f_divide(sum(t.cost), 1 + avg(t1.rebate_rate)) real_cost,
         sum(t.show) show,
         sum(t.click) click,
         sum(t.convert) convert
    from ad_main_hour_report t
    left join put_account_info t1
      on t.account_id = t1.account_id
   where t.report_time >= trunc(sysdate, 'mm')
     and t.report_time < trunc(sysdate + 1)
   group by trunc(t.report_time), t.account_id
  having sum(t.cost) > 0),
r2 as
 (select r1.time,
         r1.account_id,
         r1.cost,
         r1.real_cost,
         r1.show,
         f_divide(r1.real_cost, r1.show) show_cost,
         r1.click,
         f_divide(r1.click, r1.show) click_rate,
         f_divide(r1.real_cost, r1.click) click_cost,
         r1.convert,
         f_divide(r1.convert, r1.click) convert_rate,
         f_divide(r1.real_cost, r1.convert) convert_cost
    from r1)

select r2.time,
       max(r2.show_cost) "max(show)",
       min(r2.show_cost) "min(show)",
       (max(r2.show_cost) - min(r2.show_cost)) "ext(show)",
       f_divide(sum(r2.real_cost), sum(r2.show)) "avg(show)",
       round(stddev(r2.show_cost), 3) "std_dev(show)",
       round(var_pop(r2.show_cost), 3) "var(show)",
       max(r2.click_cost) "max(click)",
       min(r2.click_cost) "min(click)",
       (max(r2.click_cost) - min(r2.click_cost)) "ext(click)",
       f_divide(sum(r2.real_cost), sum(r2.click)) "avg(click)",
       round(stddev(r2.click_cost), 3) "std_dev(click)",
       round(var_pop(r2.click_cost), 3) "var(click)",
       max(r2.convert_cost) "max(convert)",
       min(r2.convert_cost) "min(convert)",
       (max(r2.convert_cost) - min(r2.convert_cost)) "ext(show)",
       f_divide(sum(r2.real_cost), sum(r2.convert)) "avg(convert)",
       round(stddev(r2.convert_cost), 3) "std_dev(convert)",
       round(var_pop(r2.convert_cost), 3) "var(convert)"
  from r2
 group by r2.time
