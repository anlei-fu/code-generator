with r1 as
 (select trunc(t.create_time, 'mm') time,
         t.province_no,
         t.result_msg,
         count(1) total_order_count
    from dm_order_main t
   where t.create_time > trunc(sysdate, 'mm')
   group by trunc(t.create_time, 'mm'), t.province_no, t.result_msg)

select r1.time,
       t1.province_name,
        r1.result_msg,
       r1.total_order_count,
       f_divide_to_percent_str(r1.total_order_count,
                               (select sum(t.total_order_count)
                                  from r1 t
                                 where t.province_no = r1.province_no)) rate
      

  from r1
  left join dm_system_province t1
    on r1.province_no = t1.province_no
  order by r1.province_no