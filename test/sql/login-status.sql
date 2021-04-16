select 
t.account_id,
t.login_uid,
t.extend_1,
t.extend_2,
t.status,
t.login_status,
t1.user_name
from Put_Account_Info t
left join dm_promoter_info t1 on t.promoter_id = t1.promoter_id
where t.status = 0
and t.login_status = 1
