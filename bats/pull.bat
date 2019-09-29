/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-29 09:07:57
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-29 16:33:01
 */
@echo off
F:
echo " input project name 'dm' or 'fc' "
set /p proj=
:: choose diffirent project folder 
if %proj% == dm ( 
cd %DM_GIT%
echo "pull dm ..."
git pull --progress -v --no-rebase "origin"
) else ( 
cd %FC_GIT%
echo " pull fc ..."
)
:: pull from master 
git pull --progress -v --no-rebase "origin"
pause


