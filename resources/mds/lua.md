<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-01 09:27:26
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-01 09:57:25
 -->
# 元表的元方法
-----
|函数|	描述|
|-----|--------------|
|__add|	运算符 +|
|__sub |	运算符 -|
|__mul |	运算符 * |
|__ div	|运算符 / |
|__mod	|运算符 %|
|__unm	|运算符 -（取反）|
|__concat|	运算符 ..|
|__eq	|运算符 ==|
|__lt	|运算符 <|
|__le	|运算符 <=|
|__call	|当函数调用|
|__tostring|	转化为字符串|
|__index|	调用一个索引|
|__newindex|	给一个索引赋值|


``` ClassDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
```

$\color{red}{红色jkjk}$
$\color{#FF0000}{红色字}$或$\color{rgb(255,255,0)}{黄色字}$
