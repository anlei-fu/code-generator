### 
# @Descripttion: 
 # @version: 
 # @Author: fuanlei
 # @Date: 2019-11-05 15:59:52
 # @LastEditors: fuanlei
 # @LastEditTime: 2019-11-05 16:02:27
 ###
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm 

 rpm -ivh mysql-community-release-el7-5.noarch.rpm

 yum -y install mysql-server

sudo chown -R openscanner:openscanner /var/lib/mysql

service mysqld restart
mysql -u root　
use mysql;
update user set password=password('new password') where user='root';
flush privileges;