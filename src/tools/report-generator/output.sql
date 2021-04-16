update  report 
set  
   title = '20210101日报',
   start_time = '2021-01-01 00:00:00',
   end_time = '2021-01-01 23:59:59',
   create_time = '2021-01-01 19:35:00'
where
  id = 54808;

update reply
      set  reply_time = '2021-01-01 19:35:00'
where
  report_id = 54808;