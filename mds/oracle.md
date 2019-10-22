<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-01 16:53:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-16 14:22:28
 -->
# Oracle
---
###  
``` plsql
------------------------------------------------
-- @description  throw an eception
-- @para in {number} error_number_in ,容许从 -20000 到 -20999 之间
-- @para in {varchar2} error_msg_in ,
-------------------------------------------------
RAISE_APPLICATION_ERROR( error_number_in IN NUMBER, error_msg_in IN VARCHAR2);
```
***DBMS_UTILITY.FORMAT_ERROR_BACKTRACE***
- 说明：这是在Oracle 10g数据库引入的，DBMS_UTILITY.FORMAT_ERROR_BACKTRACE内置函数返回一个格式化的字符串堆栈，堆栈中的程序及其行号可以回溯到错误被最先抛出的那一行。
- 范例：ORA-06512: at "DB.TEST", line 22

***DBMS_UTILITY.FORMAT_ERROR_STACK***
- 说明：这是在Oracle7中引入的，DBMS_UTILITY.FORMAT_ERROR_STACK 这个内置函数和SQLERRM一样，返回的是和当前错误（SQLCODE返回的值）所关联的错误信息。
- 范例：ORA-01476: divisor is equal to zero

***DBMS_UTILITY.FORMAT_CALL_STACK***
- 说明：这是在Oracle7中引入的，DBMS_UTILITY.FORMAT_CALL_STACK这个内置函数返回一个格式化的字符串，它显示了执行调用堆栈：直至此函数的调用点处的所有过程或者函数的调用顺序。换句话说，这个函数回答了这个问题：“我是怎么来到这里的？”

### ***1.table 结合数组使用示例***
``` sql
create or replace type t_test as
object(
id integer,rq date,mc varchar2(60));


create or replace type t_test_table as
table of t_test;

create or replace function f_test_array(n in number default null) return t_test_table as
v_test t_test_table:=t_test_table();
begin
for i in 1..nvl(n,100) loop
v_test.extend();
v_test(v_test.count):=t_test(i,sysdate,'MC'||i);
end loop;
return v_test;
end f_test_array;

select * from table(f_test_array(10));
```

### ***table结合PIPELINED函数***
``` sql
create or replace function f_test_pipe(n in number default null)
RETURN t_test_table pipelined
as
v_test t_test_table:=t_test_table();
begin
  for i in 1..nvl(n,100) loop
    pipe row (t_test(i,sysdate,'mc'||i));
  end loop;
  return ;
end f_test_pipe;

select * from table(f_test_pipe(20));

select * from the(select f_test_pipe(20) from dual);
```
-------
## ***functions***

- ***trunc***
``` plsql
trunc(sysdate,'yyyy') -- 2019/1/1
trunc(sysdate,'mm') -- 2019/10/1
trunc(sysdate,'dd') -- 2019/10/16
trunc(sysdate,'hh') -- 2019/10/16 14:00:00
trunc(sysdate,'mi') -- 2019/10/16 14:22:00
```
