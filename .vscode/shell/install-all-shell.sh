install(){
        if [ -e /usr/local/bin/$1 ]; then
           rm -f $1
        fi

        wget -P /usr/local/bin http://gateway/$1  --no-check-certificate 
        chmod 777 /usr/local/bin/$1
}

install update-hosts.sh
install int-java-spring-project.sh
install install-git.sh
install install-docker.sh
install install-gitlab.sh
install install-java.sh
install install-kafka.sh
install install-redis.sh
install install-node.sh
install init-nginx-proxy.sh
install init-nginx-static-folder.sh





