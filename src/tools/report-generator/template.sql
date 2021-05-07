update  report 
set  
   title = '@title日报',
   start_time = '@start_time',
   end_time = '@end_time',
   create_time = '@create_time'
where
  id = @id;

update reply
      set  reply_time = '@create_time'
where
  report_id = @id;