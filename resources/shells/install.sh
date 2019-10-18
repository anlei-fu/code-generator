### 
# @Descripttion: 
 # @version: 
 # @Author: fuanlei
 # @Date: 2019-10-18 11:14:20
 # @LastEditors: fuanlei
 # @LastEditTime: 2019-10-18 11:47:02
 ###
cd /home/fuanlei
mkdir  /usr/java   /usr/redis /usr/hadoop /usr/mongodb /usr/kafka /usr/mysql /usr/erlang /usr/spark /usr/docker /usr/kubernate /usr/zookeeper
mv  jdk-11.0.4_linux-x64_bin.tar.gz  /usr/java
mv  kafka_2.12-2.2.1.tgz  /usr/kafka
mv  redis-5.0.5.tar.gz  /usr/redis
mv  zookeeper-3.4.14.tar.gz  /usr/zookeeper
mv  spark-2.4.4-bin-hadoop2.7.tgz  /usr/spark

echo "install java"
cd /usr/java/
tar /xzvf  /usr/java
echo  "set enviriments"
JAVA_HOME=/usr/java/jdk-11.0.4
JRE_HOME=/usr/java/jdk-11.0.4/jre
PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib
export JAVA_HOME JRE_HOME PATH CLASSPATH
source /etc/profile
echo "test"
java --version

