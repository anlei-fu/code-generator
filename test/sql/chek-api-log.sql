with r1 as (
select trunc(t.create_time, 'hh') time,
       count(1) count,
       t.req_url url,
       substr(t.keywords, 1, least(length(t.keywords), 25)) keywords,
       substr(t.req_data, 1, least(length(t.req_data), 30)) resp,
       substr(t.message, 1, least(length(t.message), 12)) msg,
       t.term_no
  from DM_API_FAILED_LOG t
 where 
     t.create_time >= trunc(sysdate-0)
  and t.create_time < trunc(sysdate +1)
 group by t.term_no,
          t.req_url,
          substr(t.keywords, 1, least(length(t.keywords), 25)),
          substr(t.req_data, 1, least(length(t.req_data), 30)),
          substr(t.message, 1, least(length(t.message), 12)),
          trunc(t.create_time, 'hh')
 order by trunc(t.create_time, 'hh') desc, count(1) desc)
 
 select 
 r1.time,
 r1.count,
 r1.url,
 r1.keywords,
 r1.resp,
 r1.msg,
 r1.term_no,
 t1.term_name
 from r1 
 left join  dm_term_info t1 on r1.term_no = t1.term_no
 
