# systemctl start  mysqld.service
# systemctl status mysqld.service
# grep "password" /var/log/mysqld.log
 



### password
1. 输入语句 “ SHOW VARIABLES LIKE 'validate_password%'; ” 进行查看.
2. set global validate_password_policy=LOW; ” 进行设值
3. ALTER USER 'root'@'localhost' IDENTIFIED BY 'new password';
4. select  User,authentication_string,Host from user;
5. flush privileges; 
