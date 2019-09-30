:: OPEN DIFIRENT PROJECT
@echo off
echo dm or fc ?
set /p proj=

if %proj% ==fc (
start %VS% %FC_SOLUTION%
) else (
start %VS% %DM_SOLUTION%
)
