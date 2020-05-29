echo "install zlib"
if [ ! -e "/usr/zlib" ]; then
    mkdir /usr/zlib
fi

if [ ! -e "/usr/zlib/zlib-1.2.11.tar.gz" ]; then
   echo "downloading zlib"
   wget -P /usr/zlib http://www.zlib.net/zlib-1.2.11.tar.gz
fi

if [ ! -e "/usr/zlib/zlib-1.2.11.tar.gz" ]; then
  echo "download zlib failed"
  exit 1
fi

if [ ! -e "/usr/zlib/zlib-1.2.11" ]; then
  echo "tar file "
  tar xzvf /usr/zlib/zlib-1.2.11.tar.gz -C /usr/zlib > /dev/null
fi 

if [ ! -e "/usr/zlib/zlib-1.2.11/Makefile" ]; then
   /usr/zlib/zlib-1.2.11/configure  --prefix=/usr/zlib/zlib-1.2.11 > /dev/null
fi

if [ ! -e "/usr/zlib/zlib-1.2.11/Makefile" ]; then
   echo "configure failed"
fi

make & make install /usr/zlib/zlib-1.2.11/Makefile 

echo "zlib installed"

