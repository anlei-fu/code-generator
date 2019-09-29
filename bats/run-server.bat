:: end process
@echo off
taskkill /f /im WebDev.WebServer40.EXE
echo kill previos process done!
echo fc or dm ?
set /p  sln=
set web= "";
if %sln% == dm (
set   sln=%FC_SOLUTION%
set  %web%=%FC_WEB%
) else (
set   sln=%DM_SOLUTION%  
set  %web% = %DM_WEB%
)
:: clear solution
start %MS_BUILD% %sln% -t:clear
:: rebuild  solution
start %MS_BUILD% %sln% -t:rebuild
pause
cd %DEV_SERVER_PATH%
start %DEV_SERVER_NAME% /port:%DEBUG_PORT% /path:"%web%"
:: open browser
start http://localhost:9000