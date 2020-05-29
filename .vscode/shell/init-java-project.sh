#----------------------------------------------------------------------------------------
# init java spring-boot project
# $1 project name
# $2 projet folder
# $3 api prefix
# $4 port to proxy
#--------------------------------------------------------------------------------------
init(){
        if [ ! -e "/home/$2" ]; then
           mkdir /home/$2
        fi

        if [ ! -e /home/$2/java-deploy-tool.sh ]; then
           echo "install deploy tool"
           wget -P /home/$2 http://java-deploy-tool.sh
           chmod 777 /home/$2/java-deploy-tool.sh
        fi

        if [ ! -e /home/$2/backup ]; then
            mkdir /home/$2/backup
        fi
         
        /usr/local/install/init-nginx-proxy.sh  $1  $3 localhost:$4
        echo "project $1 init finished"
}

usage(){
        echo " ./init-java-project @appName @deployFolder @apiPrefix @port"
}

if [ $# lt 4 ]; then
   echo usage
if

init $1 $2 $3 $4
