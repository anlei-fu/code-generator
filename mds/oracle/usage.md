<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-10 16:49:53
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-12-10 16:53:42
 -->

1. ***remove repeat datas***
``` sql
create table stu_tmp as select distinct* from stu;
truncate table sut;                                                   //清空表记录
insert into stu select * from stu_tmp;                        //将临时表中的数据添加回原表
```

2. ***all jobs***
``` sql
select * from dba_jobs;
select * from all_jobs;
select * fromu ser_jobs;
select * from dba_jobs_running;
```

3. grammer

```sql
   bulk collect into
   is table of
   
--在select into语句中使用bulk collect
 
DECLARE
TYPE SalList IS TABLE OF emp.sal%TYPE;
sals SalList;
BEGIN
-- Limit the number of rows to 100.
SELECT sal BULK COLLECT INTO sals FROM emp
WHERE ROWNUM <= 100;
-- Retrieve 10% (approximately) of the rows in the table.
SELECT sal BULK COLLECT INTO sals FROM emp SAMPLE 10;
 
END;

 for i in 1 .. v_out_getted_count

```