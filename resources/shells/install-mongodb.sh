### 
# @Descripttion: 
 # @version: 
 # @Author: fuanlei
 # @Date: 2019-11-22 13:02:34
 # @LastEditors: fuanlei
 # @LastEditTime: 2019-11-22 14:07:08
 ###
cat <<EOF > /etc/yum.repos.d/mongodb-org-4.2.repo
[mongodb-org-4.2]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.2/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc
EOF

yum install -y mongodb-org