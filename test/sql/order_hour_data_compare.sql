with r1 as
 (
  
  select to_char(t.create_time, 'hh24') time,
          count(1) total_order_count,
          sum(decode(t.order_status, 0, 1, 0)) valid_order_count,
          f_divide_to_percent_str(sum(decode(t.order_status, 0, 1, 0)),count(1))valid_order_rate
    from dm_order_main t
   where t.create_time >= trunc(sysdate-180, 'mm')
         and t.create_time < trunc(sysdate, 'mm')
   group by to_char(t.create_time, 'hh24')
   order by total_order_count desc),
r1_2 as
 (select r1.time,
         r1.total_order_count,
         r1.valid_order_count,
         r1.valid_order_rate,
         f_divide_to_percent_str(r1.total_order_count,
                                 (select sum(t1.total_order_count) from r1 t1)) order_percent
    from r1)

select r1_2.* from r1_2
