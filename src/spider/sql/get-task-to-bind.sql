select
ct.down_site_id
from crawl_task ct
join down_system_site dss on dss.id = ct.down_site_id
join down_system ds on ds.id =dss.down_system_id
where 
ct.bind_status in (1,3)
and dss.enable_status=1
and ds.enable_status=1
and ct.bind_fail_count<5
order by 
ds.priority*dss.priority
*(1/dss.current_running_task_count/dss.max_running_task_count)
*(1/ds.current_running_task_count/ds.max_running_task_count)