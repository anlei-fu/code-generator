#!/bin/bash
#------------------------------------------------------------------------------
# springboot 部署工具
# 1、deploy -l  ，上传app.jar 到/tmp, 带 '-l'参数 还需上传libs文件夹到/tmp,
# 2、backup 备份当前app.jar 和 libs 文件夹
# 3、rollback 回滚到某个版本
# 4、start 启动程序
# 5、stop
# 6、restart
# 7、status 查看程序运行状态
#------------------------------------------------------------------------------

APP_NAME=consul
PWD=`pwd -P`
APP_FULL_NAME="${PWD}/${APP_NAME}"

usage() {
        echo "Usage: 
        start                              -------- start app
        stop                               -------- stop app
        status                             -------- show app status
        restart                            -------- restart app
        deploy -l[optional]                -------- require libs(if with '-l' argument) and app.jar exists in /tmp
        backup version(e.g 2020-05-15)     -------- backup current libs and app.jar with given version
        rollback version(e.g 2020-05-15)   -------- rollbak to target version "
        exit 1
}

#检查程序是否在运行
isRunning(){
        pid=`ps -ef|grep $APP_FULL_NAME|grep -v grep|awk '{print $2}'`
        #如果不存在返回1，存在返回0
        if [ -z "${pid}" ]; then
                return 1
        else
                return 0
        fi
}

#启动方法
start(){
        isRunning
        if [ $? -eq 0 ]; then
                echo "${APP_FULL_NAME} is already running. pid=${pid}"
        else
                echo "starting ${APP_FULL_NAME}"
                nohup ./consul agent -server -bootstrap-expect=3 -join=192.168.117.146 -data-dir=/tmp/consul -node=node2 -bind=192.168.117.149 -client=0.0.0.0 -datacenter=shenzhen  >event.log 2>&1 & 
                echo "started"
        fi
}

#停止方法
stop(){
        isRunning
        if [ $? -eq "0" ]; then
                kill -9 $pid
                echo "stopped"
        else
                echo "${APP_FULL_NAME} is not running"
        fi
}

#输出运行状态
status(){
        isRunning
        if [ $? -eq "0" ]; then
                echo "${APP_FULL_NAME} is running. Pid is ${pid}"
        else
                echo "${APP_FULL_NAME} is not running."
        fi
}

#重启
restart(){
        stop
        sleep 5
        start
}



#根据输入参数，选择执行对应方法，不输入则执行使用说明
case "$1" in
        "start")
                 start
        ;;
        "stop")
                stop
        ;;
        "status")
                status
        ;;
        "restart")
                restart
        ;;
        *)
                usage
        ;;
esac