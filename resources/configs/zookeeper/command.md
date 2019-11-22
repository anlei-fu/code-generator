<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-21 17:30:06
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-21 15:35:37
 -->
### command
----
1. server
-  ***./zkServer.sh start***
-  ***./zkServer.sh stop***
-  ***./zkServer.sh status***
-  ***./zkServer.sh restarts***

2. client
- ***create -s***
- ***zkCli.sh  -timeout 0  -r  -server  ip:port***
- ***stat path***
- ***ls path***
- ***get path***
- ***create path***  -s[serial] -e[temp]
- ***set path data***
- ***delete path version***
- ***rmr path***
- ***close***
- ***quite***
- ***printwatches on|off***
- ***sync path***