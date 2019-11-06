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
   ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
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

