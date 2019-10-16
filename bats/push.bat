@echo off
F:
echo " input project name 'dm' or 'fc' "
set /p proj=
echo "commit msg"
set /p msg=
:: choose project
if %proj% == dm ( 
cd %DM_GIT%
echo "push dm ..."
) else ( 
cd %FC_GIT%
echo " push fc ..."
)
:: add all file
git add -A .
:: commit
git commit -a  -m %msg%
:: push to master
git.exe push --progress "origin" master:master
pause