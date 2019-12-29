SELECT 
t1.table_name,
t1.column_name,
t1.data_type,
t1.data_precision,
t1.nullable ,
t2.constraint_name,
t3.comments
FROM user_tab_columns t1
left join user_cons_columns t2 on  t1.table_name=t2.table_name and t1.column_name=t2.column_name
left join user_col_comments t3 on  t1.table_name=t3.table_name and t1.column_name=t3.column_name