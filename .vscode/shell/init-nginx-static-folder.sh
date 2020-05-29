#!/bin/bash
#----------------------------------------------------------------------------------------------------------------------------
# Nginx proxy tool
# $1 config-name
# $2 location
# $3 host
# $4 proxy folder http|https
#------------------------------------------------------------------------------------------------------------------------------

NGINX_HTTP_CONF_FOLDER="/usr/local/nginx/conf/http"
NGINX_HTTPS_CONF_FOLDER="/usr/local/nginx/conf/https"
TEMPLATE_FOLDER="/usr/local/template"
STATIC_TEMPLATE_FILE="static.conf"
NGINX="/usr/local/nginx/sbin/nginx"

TARGET_FOLDER=$NGINX_HTTP_CONF_FOLDER

if [ $# -lt 3 ]; then
   echo "./init-nginx-config.sh @configName @location @host @type(http|https,defualt is http) "
   exit 0
fi


if [ $# -gt 3 ] && [ $4 -eq "https" ]; then
    TARGET_FOLDER=$NGINX_HTTPS_CONF_FOLDER
fi

if [ ! -e /$TARGET_FOLDER/$1.conf ]; then
               echo "config nginx proxy"
               FILE=`cat $TEMPLATE_FOLDER/$STATIC_TEMPLATE_FILE`
               FILE=${FILE/@location/$2}
               FILE=${FILE/@root/$3} 
               echo   > /$TARGET_FOLDER/$1.conf
               $NGINX -s reload
               echo "nginx reloaded"
               echo " from $2 proxy to $3"
fi