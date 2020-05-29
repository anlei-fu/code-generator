#----------------------------------------------------------------------------------------
#  To isnatll node.js
#  $1 node-xxxx.tar, required
#  $2 folder to install , not required,default is /usr/node
#----------------------------------------------------------------------------------------

install(){
        if [ ! -e "$1" ]; then
          failed 0 "$1 can not be found"
        fi
        
        if [ -z "$2" ]; then 
           if [ -d "/usr/node"]; then
              mkdir -rf /usr/node
           fi
           install_folder=/usr/node 
        else
           if [ ! -d "$2" ]; then
              mkdir -rf $2
           fi
           install_folder=$2
        fi

        mv -rf $1 ${install_folder}
        tar xzvf ${install_folder}/$1

        ### link to /usr/local/bin
        ln  ${install_folder}/$1/bin.sh /usr/local/bin
        ln  ${install_folder}/$1/bin/npm.sh /usr/local/bin

        test
        if [ $? -eq 0 ]; then
           failed 0 "node not found"
        fi

        echo "node.js -version $?----------------------------------installed"
}

uninstall(){

}

failed(){
        echo $2
        if [ $1 -eq 0 ]; then
           echo "node.js-----------------------------------------install failed"
        else
           echo "node.js-----------------------------------------uninstall failed"
        fi
        exit 1 
}

usage(){
echo "Usage
-i install-package[required] install-folder[optional,default is /usr/node], install node.js
-u install-folder[required],uninstall node.js
-? help"
}

test(){
     version=`node --version`
     if [[ ${version}==v.* ]]; then
        return ${version}
     else
        return 0
     fi
}

case $1 in 
"-i")
   install $2 $3
;;
"-u")
   uninstall $2
;;
"-?")
   usage
;;
*)
   usage
;;
esac