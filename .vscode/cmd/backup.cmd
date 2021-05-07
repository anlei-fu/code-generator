:: 备份 脚本 
:: @date 2020-11-02
:: @author fal
@echo off
set BACKUP_ROOT=C:\Project\deploy\
set DEPLOY_FOLDER=C:\Project\DMsystem
set TIME=%date:~0,4%%date:~5,2%%date:~8,2%-%time:~0,2%-%time:~3,2%
set TARGET_BACKUP=%BACKUP_ROOT%%TIME%
set LOG_FOLDER=%TARGET_BACKUP%\logs
mkdir %TARGET_BACKUP%
xcopy /s /q %DEPLOY_FOLDER% %TARGET_BACKUP% 
rmdir /s /q %LOG_FOLDER%
echo Complete !
pause