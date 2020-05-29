
if [ ! -e "/usr/pcre" ]; then 
   mkdir /usr/pcre
fi

echo "begin install pcre "

if [ ! -e "/usr/pcre/pcre-8.40.tar.gz" ];then
   echo "download pcre"
   wget  -P /usr/pcre  https://netix.dl.sourceforge.net/project/pcre/pcre/8.40/pcre-8.40.tar.gz --no-check-certificate 
fi

if [ ! -e "/usr/pcre/pcre-8.40.tar.gz" ];then
   echo "download pcre failed"
   exit 1
fi

echo "inatll gcc"
yum install -y gcc gcc-c++ > /dev/null

if [ ! -e "/usr/pcre/pcre-8.40" ]; then
   echo "tar file"
   tar xzvf  /usr/pcre/pcre-8.40.tar.gz -C /usr/pcre 
fi

if [ ! -e "/usr/pcre/pcre-8.40/Makefile" ]; then
    echo "configure"
   /usr/pcre/pcre-8.40/configure  --prefix=/usr/pcre/pcre-8.40 > /dev/null
fi

if [ ! -e "/usr/pcre/pcre-8.40/Makefile" ]; then
   echo "configure failed"
   exit 1
fi

make & make install /usr/pcre/pcre-8.40/Makefile

echo "pcre installed"