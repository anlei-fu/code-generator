<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-29 11:08:48
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-29 14:26:06
 -->
### Dev Server[C:\Windows\Microsoft.NET]
---
1. to run asp.net 2.0 webdev server, copy the following command in a .bat file

```
C:\Windows\Microsoft.NET\Framework\v2.0.50727\Webdev.WebServer.exe /port:8080 /path:"{web-project-folder}"
```

2. to run asp.net 4.0 webdev server, replace the location of webdev server
```
“C:\Program Files\Common Files\Microsoft Shared\DevServer\10.0\Webdev.WebServer40.exe” /port:[PORT NUMBER]/path:[PATH TO ROOT]
```
### Ms-Build  
1. rebuild: <kbd>MSBuild.exe</kbd> MyProject.proj -t:rebuild
2. clear:
3. publish: