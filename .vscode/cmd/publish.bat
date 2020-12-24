set PUBLISH_FOLDER=""
set DEPLOY_FILE="E:\发布\分销系统.zip"
set RAR="C:\Program Files\WinRAR\WinRAR.exe"
set PUBLISH_SCRIPT="C:\Users\Administrator\Desktop\Projects\code-generator\src\tools\dm-publish.js"
echo Hours to publish
set /P HOUR=
node %PUBLISH_SCRIPT% %HOUR%
rmdir /s /q %DEPLOY_FILE%
%RAR% a -y %DEPLOY_FILE% %PUBLISH_FOLDER%  
pause