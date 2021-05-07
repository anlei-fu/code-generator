with r1 as
 (select count(1) count
    from dm_order_notify t
   inner join dm_order_main t1
      on t.order_no = t1.order_no
   inner join dm_term_promote t2
      on t1.promote_id = t2.promote_id
   where t1.business_type = 4
     and t.status = 0
     and t1.create_time >= trunc(sysdate)
     and t1.create_time < sysdate
     and t2.activate_type = 2),
r2 as
 (select count(1) count
    from dm_order_main t1
   inner join dm_term_promote t2
      on t1.promote_id = t2.promote_id
   where t1.order_status = 0
     and t1.business_type = 4
     and t1.create_time >= trunc(sysdate)
     and t1.create_time < sysdate
     and t2.activate_type = 1),
r3 as
 (select count(1) count
    from dm_order_main t
   where t.business_type = 4
     and t.order_status = 0
     and t.create_time >= trunc(sysdate)
     and t.create_time < sysdate
     ),
     
r4 as
 (select sum(t1.convert) count
    from ad_main_hour_report t1
    left join put_account_info t2
      on t1.account_id = t2.account_id
   where t1.report_time >= trunc(sysdate)
   and t1.report_time < sysdate
  
  )

select 'api-notify' name, r1.count "type"
  from r1
union all
select 'js-notify', r2.count
  from r2
union all
select 'js+api',
       (select max(r1.count) from r1) + (select max(r2.count) from r2)
  from dual
union all
select 'all-order', r3.count
  from r3
  union all
select 'notify-differ',   (select max(r3.count) from r3)-  (select max(r1.count) from r1)-  (select max(r2.count) from r2)
  from dual
union all
select 'covert', r4.count
  from r4
union all
select 'covert-differ',
       (select max(r3.count) from r3) - (select max(r4.count) from r4)
  from dual
