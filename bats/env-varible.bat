@echo off
echo msbuild
setx MS_BUILD C:\Windows\Microsoft.NET\Framework\v4.0.30319\MSBuild.exe

echo dev server
setx DEV_SERVER "C:\Program Files (x86)\Common Files\microsoft shared\DevServer\10.0\WebDev.WebServer40.EXE"

echo dev server name
setx DEV_SERVER_NAME WebDev.WebServer40.EXE

echo fc git
setx FC_GIT   业务开发项目_研发一\非充系统\qxfc

echo  fc solution
setx FC_SOLUTION F:\业务开发项目_研发一\非充系统\qxfc\Web\QXFC.sln

echo fc Web
setx FC_WEB   "F:\业务开发项目_研发一\非充系统\qxfc\Web\User Layer\QXFC.UserWeb"

echo fc pub
setx FC_PUB   E:\guoweicode\非充发布

echo dm git
setx DM_GIT   业务开发项目_研发一\短信营销平台\dm_system_web

echo dm solution
setx DM_SOLUTION  "F:\业务开发项目_研发一\短信营销平台\dm_system_web\DMSystem.sln""

echo dm Web
setx DM_WEB      "F:\业务开发项目_研发一\短信营销平台\dm_system_web\User Layer\DMSystem.UserWeb"

echo dm pub
setx DM_PUB

echo VS
setx VS

echo port
setx DEBUG_PORT 9000

pause