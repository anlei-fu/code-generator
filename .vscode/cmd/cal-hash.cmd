@echo off
echo Input file to calculate
set /P FILE=
certutil -hashfile "%FILE%" MD5
pause