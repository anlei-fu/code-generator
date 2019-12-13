### 
# @Descripttion: 
 # @version: 
 # @Author: fuanlei
 # @Date: 2019-12-13 10:22:48
 # @LastEditors: fuanlei
 # @LastEditTime: 2019-12-13 10:24:12
 ###
#!/bin/bash
#这里可替换为你自己的执行程序，其他代码无需更改
APP_NAME=admin-api-1.0.jar

#使用说明，用来提示输入参数
usage() {
 echo "Usage: sh 脚本名.sh [start|stop|restart|status]"
 exit 1
}

#检查程序是否在运行
is_exist(){
pid=`ps -ef|grep $APP_NAME|grep -v grep|awk '{print $2}' `
#如果不存在返回1，存在返回0     
if [ -z "${pid}" ]; then
return 1
else
 return 0
fi
}

#启动方法
start(){
is_exist
if [ $? -eq "0" ]; then
#!/bin/bash
#这里可替换为你自己的执行程序，其他代码无需更改
APP_NAME=admin-api-1.0.jar

#使用说明，用来提示输入参数
usage() {
 echo "Usage: sh 脚本名.sh [start|stop|restart|status]"
 exit 1
}

#检查程序是否在运行
is_exist(){
pid=`ps -ef|grep $APP_NAME|grep -v grep|awk '{print $2}' `
#如果不存在返回1，存在返回0     
if [ -z "${pid}" ]; then
return 1
else
 return 0
fi
}

#启动方法
start(){
is_exist
if [ $? -eq "0" ]; then
 echo "${APP_NAME} is already running. pid=${pid} ."
else
 #nohup java -jar $APP_NAME > /dev/null 2>&1 &
 nohup java -jar $APP_NAME &
 echo "${APP_NAME} start success"
fi
}

#停止方法
stop(){
is_exist
if [ $? -eq "0" ]; then
 kill -9 $pid
else
 echo "${APP_NAME} is not running"
fi
}

#输出运行状态
status(){
is_exist
if [ $? -eq "0" ]; then
 echo "${APP_NAME} is running. Pid is ${pid}"
else
 echo "${APP_NAME} is NOT running."
fi
}

