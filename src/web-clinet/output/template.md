<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-11-20 15:50:51
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-11-21 13:24:01
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
        color: pink;
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
###### 2019-11-22 9:58:24
###### fuanlei
###### baseUrl:http://localhost:1024/template

|<p class="header">name</p>|<p class="header">url</p>|<p class="header">method</p>|<p class="header">params</p>|<p class="header">data</p>|<p class="header">elapse</p>|<p class="header">status</p>|<p class="header">response</p>|<p class="header">success</p>|
|----|----------|---|------|------|----|------|------|--------|-------|
|<p class="row">updateContractName</p>|<a href="/1/8/contractName">/1/8/contractName</a>|<p class="method">put</p>|<div class="code">{</br>  "contractName": "new contract"</br>}</div>|<div class="code">{}</div>|<p class="row">39</p>|<p class="row">200</p>|<div class="code">{</br>  "code": 200,</br>  "message": "操作失败"</br>}</div>|<p class="fail">失败</p>|
|<p class="row">getById</p>|<a href="/1/3/">/1/3/</a>|<p class="method">get</p>|<div class="code">{}</div>|<div class="code">{}</div>|<p class="row">39</p>|<p class="row">200</p>|<div class="code">{</br>  "code": 100,</br>  "message": "操作成功",</br>  "data": {</br>    "id": 3,</br>    "userId": 1,</br>    "belongType": 1,</br>    "belongId": 1,</br>    "contractName": "new contract",</br>    "contractFile": "123.pdf",</br>    "createTime": "2019-11-20T06:47:15.000+0000"</br>  }</br>}</div>|<p class="success">成功</p>|
|<p class="row">getByUser</p>|<a href="/1">/1</a>|<p class="method">get</p>|<div class="code">{</br>  "pageSize": 1,</br>  "pageIndex": 1</br>}</div>|<div class="code">{}</div>|<p class="row">40</p>|<p class="row">200</p>|<div class="code">{</br>  "code": 100,</br>  "message": "操作成功",</br>  "data": {</br>    "total": 1,</br>    "list": [</br>      {</br>        "id": 3,</br>        "userId": 1,</br>        "belongType": 1,</br>        "belongId": 1,</br>        "contractName": "new contract",</br>        "contractFile": "123.pdf",</br>        "createTime": "2019-11-20T06:47:15.000+0000"</br>      }</br>    ],</br>    "pageNum": 1,</br>    "pageSize": 1,</br>    "size": 1,</br>    "startRow": 1,</br>    "endRow": 1,</br>    "pages": 1,</br>    "prePage": 0,</br>    "nextPage": 0,</br>    "isFirstPage": true,</br>    "isLastPage": true,</br>    "hasPreviousPage": false,</br>    "hasNextPage": false,</br>    "navigatePages": 8,</br>    "navigatepageNums": [</br>      1</br>    ],</br>    "navigateFirstPage": 1,</br>    "navigateLastPage": 1</br>  }</br>}</div>|<p class="success">成功</p>|
