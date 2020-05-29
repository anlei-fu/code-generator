#!/bin/bash
#----------------------------------------------------------------
# vue-admin 部署工具  需要上传 dist.zip 到 /tmp folder 
# 1. deploy    解压文件并覆盖老文件
# 2. backup    拷贝当前文件到一个备份目录
# 3. rollback  回滚到某个版本
#----------------------------------------------------------------

deploy(){
      if [ ! -f "/tmp/dist.zip" ]; then
         echo "/tmp/dist.zip can not be found"
         echo "deploy --------------------------- failed"
         return
      fi

      cp -rf /tmp/dist.zip  ./
      unzip -o dist.zip > /dev/null 2>&1
      refreshNginx
      rm -f dist.zip
      cp -f ./dist/index.html ./
      cp -rf ./dist/static  ./
      rm -rf dist
      echo "deploy --------------------------- finished"
}

refreshNginx(){
               rm -rf static
               rm -f index.html
               curl http://182.140.244.55:9024/signAdmin
               echo "nginx refreshed!"
}

backup(){
        if test -z "$1"; then
           usage
        else
            if [ ! -d "./backup" ]; then
               mkdir ./backup 
            fi

            if [ ! -d "./backup/$1" ]; then
               mkdir ./backup/$1 
            fi

            if [ ! -f "./index.html" ]; then
               echo " 'index.html' can not be found"
               echo "backup $1 ------------------------------ failed!"
               return
            else
               cp -f  index.html  ./backup/$1/
            fi
            
            if [ ! -d "./static" ]; then
               echo " 'static' folder can not be found"
               echo "backup $1 -------------------------- failed!"
               return
            else
               cp -rf  static  ./backup/$1/
            fi

             echo "backup to $1 ---------------------------------- finished!"
        fi
}

rollback(){
       if test -z "$1"; then
           usage
       else
            if [ ! -d "./backup/$1" ]; then
               echo  
               echo "./backup/$1 can not be found"
               echo "rollback to $1 ---------------------------------- failed!"   
               return
            fi
            
            if [ ! -f "./backup/$1/index.html" -o ! -d "./backup/$1/static" ]; then
               echo "./backup/$1/index.html or ./backup/$1/static can not be found!"
               echo "rollback to $1 ------------------------------------- failed!"
               return
            fi

            refreshNginx
            cp  -f ./backup/$1/index.html ./
            cp  -rf ./backup/$1/static   ./
            echo "rollback to $1 ----------------------------- finished"
        fi
}

usage(){
echo "Usage
-d                       --------------------- deploy ,require /tmp/dist.zip existed
-b  name(e.g 2020-05-14) --------------------- backup 
-r  name(e.g 2020-05-14) --------------------- rollback
-?                       --------------------- usage"
}

case "$1" in
   "-b")
      backup $2
   ;;
   "-d")
      deploy 
   ;;
   "-r")
      rollback $2
   ;;
   "-?")
      usage
   ;;
   *)
      usage
   ;;
esac

