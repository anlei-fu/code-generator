
REDIS_VERSION=""
INSTALL_FOLDER="/usr/redis"
if [ ! -e $INSTALL_FOLDER ]; then
   mkdir $INSTALL_FOLDER
fi

install(){
        if [ ! -e $INSTALL_FOLDER/$REDIS_VERSION ];then
           wget -P /$INSTALL_FOLDER  http://gateway/$REDIS_VERSION
        fi

        

}