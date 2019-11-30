<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-20 15:50:51
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-25 12:47:50
 -->
<link rel="stylesheet" herf="1.css"/>

<style>
     .header {
        color:#17233E;
        font-style: italic ;
        font-weight: bold;
        font-size: 13px;
        line-height: 24px;
        white-space: normal;
        margin: 0;
        letter-spacing: 0.05em;
}

.row{
        color: #515a6e;
        font-size: 11px;
        min-height: 24px;
        line-height: 24px;
        white-space: normal;
        margin: 0;
        letter-spacing: 0.05em
}

.success{
        color: #19be6b;
        font-size: 12px;
        min-height: 24px;
        line-height: 24px;
        white-space: normal;
        margin: 0;
        letter-spacing: 0.05em
}
.fail{
        color: #ed4014;
        font-size: 12px;
        min-height: 24px;
        line-height: 24px;
        white-space: normal;
        margin: 0;
        letter-spacing: 0.05em
}

.code{
        font-size: 10px;
        background-color: rgb(222,222,222);
        border-radius: 2;
        padding:5px;
}

.method{
        color: #aa66cc;
        font-size: 15px;
        min-height: 24px;
        line-height: 24px;
        white-space: normal;
        margin: 0;
        letter-spacing: 0.05em
}

a {
        font-size: 13px;
}

</style>

### template
-----------
###### 2019-11-25 12:51:7
###### baseUrl:http://localhost:1024/sysTemplate

|<p class="header">name</p>|<p class="header">url</p>|<p class="header">method</p>|<p class="header">params</p>|<p class="header">data</p>|<p class="header">elapse</p>|<p class="header">status</p>|<p class="header">response</p>|<p class="header">success</p>|
|----|----------|---|------|------|----|------|------|--------|-------|
|<p class="row">删除模板/{模板id}</p>|<a href="/2">/2</a>|<p class="method">delete</p>|||<p class="row">39</p>|<p class="row">200</p>|<div class="code">{</br>  "code": 200,</br>  "message": "删除失败"</br>}</div>|<p class="fail">失败</p>|
|<p class="row">查询模板详情/{模板id}</p>|<a href="/5">/5</a>|<p class="method">get</p>|<div class="code">{}</div>|<div class="code">{}</div>|<p class="row">39</p>|<p class="row">200</p>|<div class="code">{</br>  "code": 100,</br>  "message": "操作成功",</br>  "data": {</br>    "id": 5,</br>    "contractType": 7,</br>    "contractName": "测试模板1",</br>    "contractFile": "123.pdf",</br>    "createTime": "2019-11-25T03:32:50.000+0000"</br>  }</br>}</div>|<p class="success">成功</p>|
|<p class="row">更新模板</p>|<a href=""></a>|<p class="method">put</p>||<div class="code">{</br>  "id": 5,</br>  "contractName": "测试模板1",</br>  "contracFile": "456.pdf",</br>  "contractType": 7</br>}</div>|<p class="row">40</p>|<p class="row">200</p>|<div class="code">{</br>  "code": 100,</br>  "message": "操作成功"</br>}</div>|<p class="success">成功</p>|
|<p class="row">查询系统模板分页数据</p>|<a href=""></a>|<p class="method">get</p>|<div class="code">{</br>  "pageSize": 1,</br>  "pageIndex": 1</br>}</div>||<p class="row">40</p>|<p class="row">200</p>|<div class="code">{</br>  "code": 100,</br>  "message": "操作成功",</br>  "data": {</br>    "total": 27,</br>    "list": [</br>      {</br>        "id": 3,</br>        "contractType": 1,</br>        "contractName": "测试模板",</br>        "contractFile": "123.pdf",</br>        "createTime": "2019-11-25T03:27:46.000+0000"</br>      }</br>    ],</br>    "pageNum": 1,</br>    "pageSize": 1,</br>    "size": 1,</br>    "startRow": 1,</br>    "endRow": 1,</br>    "pages": 27,</br>    "prePage": 0,</br>    "nextPage": 2,</br>    "isFirstPage": true,</br>    "isLastPage": false,</br>    "hasPreviousPage": false,</br>    "hasNextPage": true,</br>    "navigatePages": 8,</br>    "navigatepageNums": [</br>      1,</br>      2,</br>      3,</br>      4,</br>      5,</br>      6,</br>      7,</br>      8</br>    ],</br>    "navigateFirstPage": 1,</br>    "navigateLastPage": 8</br>  }</br>}</div>|<p class="success">成功</p>|
|<p class="row">新增模板 </p>|<a href=""></a>|<p class="method">post</p>||<div class="code">{</br>  "contractName": "测试模板",</br>  "contractFile": "123.pdf",</br>  "contractType": 1</br>}</div>|<p class="row">61</p>|<p class="row">200</p>|<div class="code">{</br>  "code": 100,</br>  "message": "操作成功"</br>}</div>|<p class="success">成功</p>|
