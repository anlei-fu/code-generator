<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-10-12 10:38:35
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-14 10:47:10
 -->
### 名词简写
----
|符号|中文|
|----|---|
|czth|充值特惠|
|move|移库|
|hs||history|
|draw|退款|
|rv|平账|
|handle|操作|
|settle|结算|
|commi|佣金|
|act|activity|
|result|当前状态描述|

``` flow
st=>start: 开始
op=>operation: bind
op2=>operation: 结果页
op3=>operation: 查询本地
i1=>inputoutput: bid入库
i2=>inputoutput: 填写个人信息
c1=>condition: 检查登录
c2=>condition: 登录
c3=>condition: 查询本地记录
c4=>condition: 检测状态
c5=>operation: 风控审核
e=>end

st->op->c1()
c1(no)->c2(yes)->op()
c1(yes)->c3(no)->i1(right)->i2(right)->c5()->op2->e
c1(yes)->c3(yes)->c4(no)->i2
c1(yes)->c3(yes)->c4(yes)->op3->op2
c3()->e
```

|table|function|
|---|---|
