@echo off
echo Input port to analyze
set /P PORT=
netstat -ano|findstr "%PORT%"
pause