with r1 as
 (select trunc(t.create_time, 'hh') time,
         t.result_msg,
         count(1) count,
         t.up_product_no
    from dm_order_vcode t
   where t.create_time >= trunc(sysdate - 0)
     and t.create_time < trunc(sysdate + 1)
   group by trunc(t.create_time, 'hh'), t.result_msg, t.up_product_no),
r2 as
 (select r1.time,
         r1.result_msg,
         t1.product_name,
         t2.channel_name,
         r1.count,
         f_divide_to_percent_str(r1.count,
                                 (select sum(t.count)
                                    from r1 t
                                   where r1.time = t.time
                                     and r1.up_product_no = t.up_product_no)) rate
    from r1
    left join dm_up_product t1
      on t1.product_no = r1.up_product_no
    left join dm_up_channel t2
      on t1.channel_no = t2.channel_no
   order by r1.time desc, r1.up_product_no, r1.count desc)

select *
  from r2
union all
select null, null, null, null, sum(r2.count), null from r2;
