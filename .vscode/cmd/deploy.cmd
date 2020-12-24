:: 部署脚本
:: @date 2020-11-02
:: @author fal
set file=分销后台.zip
set RAR="C:\Program Files\WinRAR\WinRAR.exe"
set DEPLOY_FOLDER=C:\Project\DMsystem
set IIS =%systemroot%\system32\inetsrv\APPCMD
set SITE_NAME="分销后台"

if exist %file% (
%RAR% xu %file%
xcopy /s /q deploy %DEPLOY_FOLDER%
%IIS% stop site %SITE_NAME%
%IIS% start site %SITE_NAME%
echo Deploy successfully
) else (
echo file not exists
)
pause

