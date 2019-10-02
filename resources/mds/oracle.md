<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-01 16:53:22
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-01 17:07:53
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