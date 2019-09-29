<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-27 13:16:53
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-29 16:53:36
 -->
# Cmd
------
### string operation
``` shell
1. %ifo:~0,5%
2. %ifo:~0,-5%
3. %ifo:~0,-5%
4. set "aa=%aa:中国=中华人民共和国%"
set /p %变量名%=显示内容
``` 
``` shell
"%time%"             #"11:04:23.03" (完整的时间"hh:mm:ss.tt")
"%time:~0,5%"        #显示"hh:mm"(即"11:04")，
"%time:~0,8%"        #显示标准时间格式"hh:mm:ss"(即"11:04:23"，前8个字符串)
"%time:~3,-3%"       #显示"mm:ss"(即从第4个开始,截去最后3个的字符串)
"%time:~3%"          #显示"04:23.03"(即去掉前4个字符串)
"%time:~-3%"         #显示".tt"(即最后3个字符串)
set a="abcd1234"
echo %a%            #显示："abcd1234"
set a=%a:1=kk%      #替换“1”为“kk”
echo %a%            #显示："abcdkk234"
set str1=%str1%%str2%    #(合并 str1 和 str2)
```
没有现成的函数。如下程序利用 goto形成循环，不断将字符串截短1，并记录截短的次数，到字符串变成空时的次数即长度。
``` shell
 set testStr=This is a test string #将 testStr 复制到str，str 是个临时字符串
       
       set str=%testStr% :: 标签，用于goto跳转  :: 判断str是不是空，如果不是则执行下边的语句
       
       :next1
      
       if not "%str%"=="" (
       :: 算术运算，使num的值自增1，相当于num++或者++num语句
       set /a num+=1
       :: 截取字符串，每次截短1
       set "str=%str:~1%"
       :: 跳转到next1标签: 这里利用goto和标签，构成循环结构
       goto next1
       )
       :: 当以上循环结构执行完毕时，会执行下边的语句
       echo testStr=%testStr%
       echo testStr的长度为：%num%
```


### equels
``` shell
* if exist d:\test.txt (echo D盘下有test.txt存在) else (echo D盘下不存在test.txt)
* if "abc"=="xyz" (echo 字符串abc等于字符串xyz) else (echo 字符串abc不等于字符串xyz)
* if 1 equ 2 (echo 1等于2) else (echo 1不等于2)
* if defined str (echo 变量str已经被赋值，其值为%str%) else (echo 变量str的值为空)
```
### for example 
1.  print all files in current folder endwith ".txt" & ".bat"
``` shell
for %%c in (*.bat *.txt) do (echo %%c)
pause
```
2. print folders
``` shell
for /D %%a in (*e* *i*) do echo %%a
pause
```
3. split
``` shell
for /f "delims=" %%a in (zhidian.txt) do echo.%%a
```


