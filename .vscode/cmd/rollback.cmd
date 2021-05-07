:: 回滚脚本
:: @date 2020-11-02
:: @author fal
@echo off
set BACKUP_ROOT=C:\Project\deploy\
echo Input backup version
set /P VERSION=
set TARGET_BACKUP=%BACKUP_ROOT%%VERSION%
set IIS=%systemroot%\system32\inetsrv\APPCMD
set SITE_NAME="分销后台"
set DEPLOY_FOLDER=C:\Project\DMsystem
if exist %TARGET_BACKUP% (
xcopy /s /y %TARGET_BACKUP% %DEPLOY_FOLDER%
echo restart site
%IIS% stop site %SITE_NAME%
%IIS% start site %SITE_NAME%
) else (
 echo backup not exists!
)
echo Complete!
pause