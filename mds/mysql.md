<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-06 15:27:13
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-06 17:35:05
 -->
### sqls
------

***mysql cli*** excute with end ";"

1. get all tables
  ``` sql
     select * from information_schema.tables where table_schema='database';
  ```

2. get all columns
  ``` sql
     select * from INFORMATION_SCHEMA.Columns where table_name ="damage_repository"
  ```

3. change auth mode
  ``` sql
   use mysql;
   select host,user,plugin from user \G;
   ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '2011801243';
   flush privileges;
  ```
4. create user
  ``` sql
     insert into mysql.user(Host,User,Password) values("localhost","test",password("1234"));
  ```

5. update password
  ``` sql
     update mysql.user set password=password('xxxx') where user='username';
  ```

6. drop user
  ``` sql
     drop user 'username'
  ```

#### privilages
'%' match any host
[see mysql site](https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html)
password encrypting
* mysql_native_password
* caching_sha2_password
* sha256_password

----
7. show privilages
  ``` sql
     show grants for 'username';
  ```

8. grant/revoke  privilages
  ``` sql
     grant select on 'dbname'.* to 'username'@"localhost";
     grant insert on 'dbname'.* to 'username'@"localhost";
     grant update on 'dbname'.* to 'username'@"localhost";
     grant delete on 'dbname'.* to 'username'@"localhost";
     revoke select on 'dbname'.* from 'username'@"localhost";
     revoke insert on 'dbname'.* from 'username'@"localhost";
     revoke update on 'dbname'.* from 'username'@"localhost";
     revoke delete on 'dbname'.* from 'username'@"localhost";
  ```

9. grant all
  ``` sql
     grant all on 'dbname'.* to 'username'@"localhost";
  ```
10. revoke all
  ``` sql
     revoke all on 'dbname'.* from 'username'@"localhost";
  ```

-----

### Command

``` shell
    mysql --user=finley --password db_name
    mysql -u finley -p db_name
    mysql -v # show version
    mysql -uroot -p #root login
    mysqld --verbose --help #list of all mysqld options and configurable system variables
    mysql> SHOW VARIABLES; # the same
    mysqld --validate-config # validate config file
```

### mysql explain
----

- ***select_type***
  1. simple：简单查询
  2. primary：复杂查询中最外层的 select
  3. subquery：包含在 select 中的子查询（不在 from 子句中）
  4. derived：包含在 from 子句中的子查询
  5. union：在 union 中的第二个和随后的 select
  6. union result：从 union 临时表检索结果的 select

- ***type列***
依次从最优到最差分别为：system > const > eq_ref > ref > fulltext > ref_or_null > index_merge > unique_subquery > index_subquery > range > index > ALL

1. NULL：mysql能够在优化阶段分解查询语句，在执行阶段用不着再访问表或索引
2. const, system：mysql能对查询的某部分进行优化并将其转化成一个常量（可以看show warnings 的结果）。
3. eq_ref：primary key 或 unique key 索引的所有部分被连接使用 ，最多只会返回一条符合条件的记录
4. ref：相比 eq_ref，不使用唯一索引，而是使用普通索引或者唯一性索引的部分前缀，索引要和某个值相比较，可能会找到多个符合条件的行。
5. ref_or_null：类似ref，但是可以搜索值为NULL的行。
6. index_merge：表示使用了索引合并的优化方法
7. range：范围扫描通常出现在 in(), between ,> ,<, >= 等操作中。
8. index：和ALL一样，不同就是mysql只需扫描索引树，这通常比ALL快一些。
9. ALL：即全表扫描，意味着mysql需要从头到尾去查找所需要的行。通常情况下这需要增加索引来进行优化了

Using index 
1. 查询的列被索引覆盖，并且where筛选条件是索引的是前导列，Extra中为Using index
2. 查询的列被索引覆盖，并且where筛选条件是索引列前导列的一个范围，同样意味着无法直接通过索引查找查询到符合条件的数据
3. NULL（既没有Using index，也没有Using where Using index，也没有using where）

 Using index condition

1. 查询的列不全在索引中，where条件中是一个前导列的范围

1,Extra中的为Using index的情况
　　　　where筛选列是索引的前导列 &&查询列被索引覆盖 && where筛选条件是一个基于索引前导列的查询，意味着通过索引超找就能直接找到符合条件的数据，并且无须回表

　　2,Extra中的为空的情况
　　　　查询列存在未被索引覆盖&&where筛选列是索引的前导列，意味着通过索引超找并且通过“回表”来找到未被索引覆盖的字段，

3,Extra中的为Using where Using index： 
　　出现Using where Using index意味着是通过索引扫描（或者表扫描）来实现sql语句执行的，即便是索引前导列的索引范围查找也有一点范围扫描的动作，不管是前非索引前导列引起的，还是非索引列查询引起的。

  1. join_buffer_size变量决定buffer大小。

  2. 只有在join类型为all, index, range的时候才可以使用join buffer。

  3. 能够被buffer的每一个join都会分配一个buffer, 也就是说一个query最终可能会使用多个join buffer。

  4. 第一个nonconst table不会分配join buffer, 即便其扫描类型是all或者index。

  5. 在join之前就会分配join buffer, 在query执行完毕即释放。

  6. join buffer中只会保存参与join的列, 并非整个数据行。
