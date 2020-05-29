
#--------------------------------------------------------
# update hosts file
#--------------------------------------------------------


delete(){
        if [ -e $1 ]; then
           rm -f $1
        fi
}

delete /etc/hosts
wget -P /etc -c http://192.168.117.1/hosts  --no-check-certificate 
/etc/init.d/network restart
echo "hosts updated"
