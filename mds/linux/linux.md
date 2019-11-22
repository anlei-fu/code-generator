<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-21 16:56:59
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-22 12:54:21
 -->
# command
----
|name|parameter|description|example|
|---|---|---|--|
|hostnamectl|||hostnamectl set-hostname centos77.magedu.com   

----
#  symbol

|name|description|
|---|---|
|-z|zero|
|-f|file|
|-d|directory|
|-r|read|
|-w|write|
|-x|excutable|
|-o|or|
|$1|first parameter|
|$#|length|
|$0|selfname|
|$$|current pid|
|$*|all parameter|
|$@|all parameter|
|$?|last command return code|
|shift| move parameter position|

----

# Grammer

- while done

- cat<<EOF  text EOF
- echo {msg}|cat >{file}

### config

 - /etc/hosts  ip hostname

### .sh permission
 chmod u+x *.sh

### rpm
``` shell
rpm -i example.rpm 安装 example.rpm 包；
rpm -iv example.rpm 安装 example.rpm 包并在安装过程中显示正在安装的文件信息；
rpm -ivh example.rpm 安装 example.rpm 包并在安装过程中显示正在安装的文件信息及安装进度
rpm -e example

```

### yum
``` shell
yum list installed
```

### system ctl
systemctl list-units
