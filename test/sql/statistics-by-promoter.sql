
with r1 as
 (select count(1) total,
         sum(decode(t.order_status, 0, 1, 0)) valid,
         t.product_type,
         t.promote_id,
         trunc(t.create_time,'mm') time
    from dm_order_main t
   where t.create_time >= trunc(sysdate - 0)
     and t.create_time < trunc(sysdate + 1)
   group by t.product_type, trunc(t.create_time,'mm'), promote_id
   order by t.product_type, count(1) desc , t.promote_id)

select r1.time,
 t1.name,
  r1.product_type,
   t3.user_name,
   r1.total, 
   r1.valid,
   f_divide_to_percent_str(r1.valid,r1.total) rate,
   t2.promote_url,
   t4.login_uid,
   t4.account_id,
   t5.agent_name
  from r1
  left join dm_system_dictionary t1
    on r1.product_type = t1.value
   and t1.type = 'ProductType'
  left join dm_term_promote t2
    on r1.promote_id = t2.promote_id
  left join dm_promoter_info t3
    on t2.promoter_id = t3.promoter_id
  left join put_account_info t4 on t3.promoter_id = t4.promoter_id
  left join put_agent_info t5 on t4.agent_no = t5.agent_no
