VERSION=1.17.4
FULL_NAME="nginx-${VERSION}.tar.gz"
SOURCE_FILE=/tmp/${FULL_NAME}
INSTALL_FOLDER=/usr/nginx
UNZIP_FOLDER="nginx-${VERSION}"

echo "begin install nginx"
echo $SOURCE_FILE

if [ ! -e ${SOURCE_FILE} ]; then
   echo "$SOURCE_FILE not exist"
   exit 1
fi

if [ ! -e "$INSTALL_FOLDER" ]; then
   mkdir  $INSTALL_FOLDER
fi
cp -f $SOURCE_FILE $INSTALL_FOLDER

if [ ! -e "$INSTALL_FOLDER/$UNZIP_FOLDER" ]; then
     echo "tar file"
     tar xzvf  $INSTALL_FOLDER/$FULL_NAME -C $INSTALL_FOLDER 
fi 
 
./install-prce.sh
./install-zlib.sh

if [ ! -e "$INSTALL_FOLDER/$UNZIP_FOLDER/Makefile" ]; then
   echo "configure"
   $INSTALL_FOLDER/$UNZIP_FOLDER/configure
fi

if [ ! -e "$INSTALL_FOLDER/$UNZIP_FOLDER/Makefile" ]; then
   echo "configure failed"
   exit 1
fi

make & make install $INSTALL_FOLDER/$UNZIP_FOLDER/Makefile

echo "nginx installed"
