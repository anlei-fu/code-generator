### 执行计划
----
执行计划是一条查询语句在Oracle中的执行过程或访问路径的描述
通常一条SQL有多个执行计划，那我们如何选择？那种执行开销更低，就意味着性能更好，速度更快，我们就选哪一种，这个过程叫做Oracle的解析过程，然后Oracle会把更好的执行计划放到SGA的Shared Pool里，后续再执行同样的SQL只需在Shared Pool里获取就行了，不需要再去分析.根据统计信息来选择执行计划.动态采样,Oracle正常情况下会在每天的某段时间收集统计信息。

**动态采样**
 1. Oracle会选择在一个特定的时间段收集表和索引的统计信息（默认周一至周五：22：00，周六周日：06：00），用户可自行调整，主要为了避开高峰期；

 2. 表与索引的分析有阈值限制，超过阈值才会自动进行分析。如果数据变化量不大，Oracle是不会去分析的；

 3. 收集方式灵活。可针对分区表的某个分区进行，可采用并行机制来收集表和索引的信息；

Oracle提供了6种执行计划获取方法，各种方法侧重点不同：

**选择时一般遵循以下规则:**
1. 如果sql执行很长时间才出结果或返回不了结果，用方法1：explain plan for
2. 跟踪某条sql最简单的方法是方法1：explain plan for，其次是方法2：set autotrace on
3. 如果相关察某个sql多个执行计划的情况，只能用方法4：dbms_xplan.display_cursor或方法6：awrsqrpt.sql
4. 如果sql中含有函数，函数中有含有sql，即存在多层调用，想准确分析只能用方法5：10046追踪
5. 想法看到真实的执行计划，不能用方法1：explain plan for和方法2：set autotrace on
6. 想要获取表被访问的次数，只能用方法3：statistics_level = all

**查看执行计划的方法**

1. 设置autotrace

    set autotrace off: 此为默认值，即关闭autotrace

    set autotrace on explain: 只显示执行计划

    set autotrace on statistics: 只显示执行的统计信息

    set autotrace on: 既显示执行计划，又显示执行的统计信息

    set autotrace traceonly: 与on相似，但不显示语句的执行结果

2. 使用SQL
``` sql
 执行：explain plan for <sql语句>
     查看：SELECT plan_table_output FROM TABLE(DBMS_XPLAN.DISPLAY('PLAN_TABLE'));
             或 select * from table(dbms_xplan.display);
    示例：
    
        explain plan for select 1 from dual;
 ```

 