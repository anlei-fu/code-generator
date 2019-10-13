
----
### ***dmBackupConfig***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|backupName|varchar2|false||--|后补名称|
|backupTitle|varchar2|false||--|后补标题|
|scanMax|number|false||500|扫描最大笔数|
|scanInterval|number|false||10|扫描间隔(秒)|
|nextInterval|number|false||60|下次间隔(秒)|
|status|number|false||--|状态: 0-启用 1-禁用|
|lastExec|date|false||sysdate|最近执行时间|
|nextExec|date|false||sysdate|下次执行时间|
|robotIp|varchar2|false||--|机器人ip|

----
### ***dmOperateDetail***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|batchNo|number|false||--|操作批次|
|serialNo|varchar2|false||--|系统流水号(order_no/bind_id/product_id/record_id)|
|createTime|date|false||sysdate|创建时间|

----
### ***dmOperateLog***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|userId|varchar2|false||--|用户编号|
|batchNo|number|false||--|操作批次|
|operateLog|varchar2|false||--|操作日志|
|createTime|date|false||sysdate|创建时间|

----
### ***dmOrderBind***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|bindId|varchar2|false|yes|--|绑定编号|
|orderNo|varchar2|false||--|订单编号|
|termNo|varchar2|false||--|终端编号|
|termProductNo|varchar2|false||--|终端产品编号|
|termPrice|number|false||--|终端价格|
|phoneNo|varchar2|false||--|手机号|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份编码|
|cityNo|varchar2|false||--|地市编码|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upProductNo|varchar2|false||--|上游产品编号|
|upPrice|number|false||--|上游价格|
|bindStatus|number|false||20|绑定状态: 0-成功 20-等待处理 30-正在绑定 90-绑定失败|
|manualStatus|number|false||10|人工状态: 0-成功 10-无需处理 20-等待处理 90-失败|
|scriptId|number|false||--|发货脚本id|
|serviceCode|varchar2|false||--|服务编码(队列名/机器人code)|
|deliveryStartTime|date|false||--|发货开始时间|
|deliveryFinishTime|date|false||--|发货结束时间|
|robotIp|varchar2|false||--|发货ip|
|resultMsg|varchar2|false||--|结果消息|
|upOrderNo|varchar2|false||--|上游订单号|
|allowBind|number|false||1|允许绑定: 0-允许 1-不允许|
|nextBindTime|date|false||--|下次绑定时间|
|batchNo|number|false||--|后补批次|
|createTime|date|false||sysdate|创建时间|
|finishTime|date|false||--|结束时间|
|closeTime|date|false||sysdate+5/24/60|自动关闭时间|
|pictureMode|number|false||--|照片提交模式: 0-无需照片 1-重新提交照片 2-重新提交订单|

----
### ***dmOrderBindExt***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|bindId|varchar2|false|yes|--|绑定编号|
|phoneNo2|varchar2|false||--|新手机号|
|activateStatus|number|false||--|激活状态: 0-已激活 1-待激活|
|activateTime|date|false||--|激活时间|
|rechargeStatus|number|false||--|首充状态: 0-已首充 1-未首充|
|rechargeTime|date|false||--|首充时间|
|expressName|varchar2|false||--|快递名称|
|expressNo|varchar2|false||--|快递单号|
|createTime|date|false||sysdate|创建时间|

----
### ***dmOrderMain***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|orderNo|varchar2|false|yes|--|订单号|
|termNo|varchar2|false||--|终端编号|
|productNo|varchar2|false||--|产品编号|
|businessType|number|false||--|业务类型: 1-电话号卡 2-手机话费 3-手机流量 4-手机套餐|
|phoneNo|varchar2|false||--|办理账号|
|carrierNo|varchar2|false||--|运营商编码|
|provinceNo|varchar2|false||--|省份编码|
|cityNo|varchar2|false||--|地市编码|
|userIp|varchar2|false||--|用户ip|
|promoteId|number|false||--|推广编号|
|accountId|number|false||--|收款账号id|
|needVcode|number|false||1|需要验证码: 0-需要 1-不需要|
|orderFace|number|false||--|订单面值|
|payPrice|number|false||--|支付价格|
|costPrice|number|false||--|成本价格|
|serviceFee|number|false||--|手续费|
|succMoney|number|false||--|成功金额|
|payStatus|number|false||--|支付状态: 0-成功 10-无需处理 20-等待支付 30-支付中 90-失败|
|orderStatus|number|false||--|订单状态: 0-成功 10-无需处理 20-等待处理 30-处理中 90-失败|
|refundStatus|number|false||10|退款状态: 0-成功 10-无需处理 20-等待退款 30-退款中 90-失败|
|manualStatus|number|false||10|人工状态: 0-成功 10-无需处理 20-等待审核 90-审核成功|
|payFinishTime|date|false||--|支付完成时间|
|platTradeNo|varchar2|false||--|支付平台流水号|
|platTradeMsg|varchar2|false||--|平台支付消息|
|resultMsg|varchar2|false||--|结果消息|
|errorCode|number|false||--|终端错误码|
|errorDesc|varchar2|false||--|终端错误描述|
|serverIp|varchar2|false||--|收单服务器ip|
|createTime|date|false||sysdate|创建时间|
|finishTime|date|false||--|完成时间|
|closeTime|date|false||sysdate+5/24/60|自动关闭时间|
|promoterId|number|false||--|推广人编号|
|labelId|number|false||--|推广人标签编号|
|bindNextTime|date|false||--|下次绑定时间|
|bindTimes|number|false||--|绑定次数|
|bindBatchNo|number|false||--|绑定批次号|

----
### ***dmOrderMainExt***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|orderNo|varchar2|false|yes|--|订单号|
|contactName|varchar2|false||--|联系人姓名|
|contactAddr|varchar2|false||--|联系人地址|
|cardUserId|varchar2|false||--|身份证号码|
|cardUserName|varchar2|false||--|身份证姓名|
|cardPicFront|varchar2|false||--|身份证照地址(正面)|
|cardPicBack|varchar2|false||--|身份证照地址(反面)|
|cardPicHand|varchar2|false||--|身份证照地址(手持)|
|newPhoneNo|varchar2|false||--|新手机号|
|activateStatus|number|false||--|激活状态: 0-已激活 1-待激活|
|activateTime|date|false||--|激活时间|
|rechargeStatus|number|false||--|首充状态: 0-已首充 1-未首充|
|rechargeTime|date|false||--|首充时间|
|expressName|varchar2|false||--|快递名称|
|expressNo|varchar2|false||--|快递单号|
|createTime|date|false||sysdate|创建时间|
|updateTime|date|false||--|更新时间|
|rechargeFace|number|false||--|首充面值|

----
### ***dmOrderNotify***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|通知编号|
|promoteId|number|false||--|推广编号|
|orderNo|varchar2|false||--|订单编号|
|notifyType|number|false||--|通知类型|
|notifyTimes|number|false||--|通知次数|
|notifyMaxTimes|number|false||--|通知最大次数|
|status|number|false||20|通知状态: 0-成功 20-等待处理 30-处理中 90-处理失败|
|scriptId|number|false||--|脚本编号|
|serviceCode|varchar2|false||--|服务编码|
|robotIp|varchar2|false||--|机器人ip|
|resultMsg|varchar2|false||--|结果消息|
|createTime|date|false||sysdate|创建时间|
|lastTime|date|false||--|上次通知时间|
|nextTime|date|false||sysdate|下次通知时间|
|finishTime|date|false||--|完成时间|

----
### ***dmOrderQuery***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|bindId|varchar2|false|yes|--|绑定编号|
|orderNo|varchar2|false||--|订单编号|
|status|number|false||20|查询状态: 0-成功 10-无需处理 20-等待查询 30-正在查询 90-查询失败|
|scriptId|number|false||--|脚本id|
|serviceCode|varchar2|false||--|服务编码(队列名/机器人code)|
|robotIp|varchar2|false||--|查询机器ip|
|resultMsg|varchar2|false||--|结果消息(最近一次)|
|queryTimes|number|false||--|查询次数|
|batchNo|number|false||--|后补批次|
|nextTime|date|false||--|下次查询时间|
|createTime|date|false||sysdate|创建时间|
|finishTime|date|false||--|完成时间|
|maxTimes|number|false||--|查询最大次数: 0-不限次数|

----
### ***dmOrderRefund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|accountId|number|false||--|账号编号|
|accountType|number|false||--|账户类型: 1-支付宝 2-微信|
|termNo|varchar2|false||--|终端编号|
|orderNo|varchar2|false||--|订单号|
|refundFee|number|false||--|退款金额|
|refundReason|varchar2|false||--|退款原因|
|serviceFee|number|false||--|手续费|
|platTradeNo|varchar2|false||--|支付平台交易编号|
|platRefundNo|varchar2|false||--|支付平台退款编号|
|status|number|false||20|退款状态: 0-成功 20-等待 30-处理中 90-失败|
|serviceCode|varchar2|false||--|服务编码(机器人编码)|
|robotIp|varchar2|false||--|机器人ip|
|resultMsg|varchar2|false||--|结果消息|
|createTime|date|false||sysdate|创建时间|
|finishTime|date|false||--|完成时间|
|startTime|date|false||--|开始时间|

----
### ***dmOrderVcode***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|orderNo|varchar2|false|yes|--|订单号|
|termNo|varchar2|false||--|终端编号|
|termProductNo|varchar2|false||--|终端产品编码|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upProductNo|varchar2|false||--|上游产品编号|
|phoneNo|varchar2|false||--|手机号|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||--|运营商编码|
|provinceNo|varchar2|false||--|省份编码|
|cityNo|varchar2|false||--|地市编码|
|promoteId|number|false||--|推广编号|
|scriptId|number|false||--|脚本编号|
|sendTimes|number|false||1|发送次数|
|sendStatus|number|false||20|短信状态: 0-发送成功 20-等待发送 30-发送中 90-发送失败  99-发送未知|
|retryTimes|number|false||--|重试次数|
|nextSendTime|date|false||sysdate + 1/24/60|下次发送时间|
|resultMsg|varchar2|false||--|发送结果消息|
|userIp|varchar2|false||--|用户ip|
|vcode|varchar2|false||--|用户验证码|
|createTime|date|false||sysdate|创建时间|
|finishTime|date|false||--|完成时间|
|promoterId|number|false||--|推广人编号|
|labelId|number|false||--|推广人标签编号|
|templateId|varchar2|false||--|短信模板id(暂存短信内容)|
|verifyState|number|false||--|验证状态: 0-验证通过 20-等待验证  90-验证未通过|
|serialNo|number|false||--|发送流水号|

----
### ***dmPayAccount***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|支付账号编号|
|accountType|number|false||--|账号类型: 1-支付宝 2-微信|
|appId|varchar2|false||--|开放平台appid|
|appSecret|varchar2|false||--|开放平台appsecret|
|merchantId|varchar2|false||--|商户编号|
|signKey|varchar2|false||--|签名key|
|certPath|varchar2|false||--|证书路径|
|certPwd|varchar2|false||--|证书密码|
|publicKey|varchar2|false||--|加密公钥|
|privateKey|varchar2|false||--|解密/验签私钥|
|balance|number|false||--|账户余额|
|authRedirectUrl|varchar2|false||--|api授权跳转地址|
|payRedirectUrl|varchar2|false||--|支付完跳转地址|
|payNotifyUrl|varchar2|false||--|支付结果回调地址|
|refundNotifyUrl|varchar2|false||--|退款回调地址|
|status|number|false||--|状态: 0-启用 1-禁用|
|remark|varchar2|false||--|备注|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|
|updateUser|varchar2|false||--|更新人|
|updateTime|date|false||sysdate|更新时间|
|accountName|varchar2|false||--|账号名称|

----
### ***dmPayAccountRate***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|accountType|number|false||--|账号类型: 1-支付宝 2-微信 3-京东|
|payType|varchar2|false||*|支付类型: *-所有|
|serviceRate|number|false||--|手续费率|
|payName|varchar2|false||--|支付名称|
|refundService|number|false||--|退手续费: 0-退 1-不退|

----
### ***dmPayFundChange***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|termNo|varchar2|false||--|终端编号|
|orderNo|varchar2|false||--|订单号|
|accountId|number|false||--|账户编号|
|changeType|number|false||--|变动类型: 1-收款 2-扣款 3-退款 4-提现|
|changeMoney|number|false||--|变动金额|
|beforeBalance|number|false||--|变动前余额|
|afterBalance|number|false||--|变动后余额|
|serviceFee|number|false||--|手续费(亏损)|
|changeTime|date|false||sysdate|变动时间|
|operator|varchar2|false||--|操作人|
|remark|varchar2|false||--|备注|

----
### ***dmPayScript***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|accountType|number|false||--|账号类型: 1-支付宝 2-微信|
|scriptType|number|false||--|脚本类型: 1-订单提交 2-订单查询 3-余额查询 4-退款申请 5-验证码发送 6-验证码提交|
|scriptPath|varchar2|false||--|脚本路径|
|requestUrl|varchar2|false||--|请求地址|
|serviceCode|varchar2|false||--|服务编码(机器人code)|
|status|number|false||--|状态: 0-启用 1-禁用|
|remark|varchar2|false||--|备注|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|
|updateUser|varchar2|false||--|更新人|
|updateTime|date|false||sysdate|更新时间|

----
### ***dmProductGroup***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|groupNo|varchar2|false|yes|--|分组编号|
|groupName|varchar2|false||--|分组名称|
|remark|varchar2|false||--|备注|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|

----
### ***dmPromoterInfo***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|promoterId|number|false|yes|--|推广人编号|
|userName|varchar2|false||--|用户姓名|
|loginUid|varchar2|false||--|登录账号|
|loginPwd|varchar2|false||--|登录密码|
|phoneNo|varchar2|false||--|手机号|
|wechat|varchar2|false||--|微信号|
|email|varchar2|false||--|邮件地址|
|settleAccount|varchar2|false||--|结算账号|
|accountName|varchar2|false||--|账号名称|
|accountType|number|false||--|账号类型: 1-支付宝 2-微信 3-京东 4-银行卡|
|accountDesc|varchar2|false||--|账号说明|
|companyName|varchar2|false||--|公司名称|
|companyAddr|varchar2|false||--|公司地址|
|licensePic|varchar2|false||--|营业执照|
|status|number|false||--|状态: 0-启用 1-禁用|
|remark|varchar2|false||--|备注|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|
|updateUser|varchar2|false||--|更新人|
|updateTime|date|false||--|更新时间|

----
### ***dmPromoterLabel***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|labelId|number|false|yes|--|标签编号|
|promoterId|number|false||--|推广人编号|
|labelName|varchar2|false||--|标签名称|
|remark|varchar2|false||--|备注|
|createTime|date|false||sysdate|创建时间|
|updateTime|date|false||--|更新时间|
|createUser|varchar2|false||--|创建人|

----
### ***dmSystemCarrier***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|carrierNo|varchar2|false|yes|--|运营商编号|
|carrierName|varchar2|false||--|运营商名称|
|enable|number|false||--|状态: 0-启用 1-禁用|

----
### ***dmSystemCity***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|cityNo|varchar2|false||--|城市编码|
|cityName|varchar2|false||--|城市名称|
|status|number|false||--|状态|
|provinceNo|varchar2|false||--|省份编码|
|code|varchar2|false||--|编号|

----
### ***dmSystemDealCode***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|errorCode|number|false|yes|--|错误码|
|dealCode|number|false||--|处理码: 0-处理成功 1-处理失败 9-未知|
|allowRebind|number|false||1|允许再次绑定: 0-允许 1-不允许|
|allowRetry|number|false||1|订单失败重试: 0-允许 1-不允许|
|toManual|number|false||1|进入人工审核: 0-是 1-否|
|delayFailed|number|false||1|是否延迟失败: 0-是 1-否|
|delayMinute|number|false||--|延迟失败分钟|
|orderCode|varchar2|false||--|订单错误码|
|orderDesc|varchar2|false||--|订单错误消息|
|errorMsg|varchar2|false||--|错误消息|
|status|number|false||--|状态|

----
### ***dmSystemDictionary***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|dicId|number|false|yes|--|字典编号|
|type|varchar2|false||--|字典类型|
|name|varchar2|false||--|字典名称|
|value|varchar2|false||--|字典值|

----
### ***dmSystemLog***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|logId|number|false|yes|--|日志编号|
|objectName|varchar2|false||--|对象名称|
|errorLevel|number|false||--|错误等级|
|errorDesc|varchar2|false||--|错误信息|
|traceInfo|varchar2|false||--|堆栈信息|
|createTime|date|false||sysdate|创建时间|

----
### ***dmSystemNumSection***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|section|varchar2|false|yes|--|号段|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份|
|cityNo|varchar2|false||--|城市|
|enable|number|false||--|启用状态: 0-启用 1-禁用|

----
### ***dmSystemProvince***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|provinceNo|varchar2|false|yes|--|省份编号|
|provinceName|varchar2|false||--|省份名称|
|enable|number|false||--|状态: 0-启用 1-禁用|
|sortId|number|false||--|排序编号|

----
### ***dmTermAssignUp***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|termNo|varchar2|false||--|终端编号|
|termGroupNo|varchar2|false||--|终端分组编号|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upGroupNo|varchar2|false||--|上游分组编号|
|divisionMode|number|false||1|分流模式: 1-按优先级 2-按分流比|
|divisionValue|number|false||--|分流值(division_mode=1时值越大优先级越高)|
|status|number|false||--|状态: 0-启用 1-禁用|
|remark|varchar2|false||--|备注|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|
|updateUser|varchar2|false||--|更新人|
|updateTime|date|false||--|更新时间|

----
### ***dmTermFundChange***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|termNo|varchar2|false||--|终端编号|
|orderNo|varchar2|false||--|订单号|
|changeType|number|false||--|变动类型: 1-收款 2-扣款 3-退款|
|changeMoney|number|false||--|变动金额|
|beforeBalance|number|false||--|变动前余额|
|afterBalance|number|false||--|变动后余额|
|changeTime|date|false||sysdate|变动时间|
|operator|varchar2|false||--|操作人|
|remark|varchar2|false||--|备注|

----
### ***dmTermInfo***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|termNo|varchar2|false|yes|--|终端编号|
|termName|varchar2|false||--|终端名称|
|balance|number|false||--|终端余额|
|status|number|false||--|状态: 0-启用 1-禁用|
|entryUrl|varchar2|false||--|入口地址|
|canPromote|number|false||1|可否推广: 0-是 1-否|
|remark|varchar2|false||--|终端说明|
|createTime|date|false||sysdate|创建时间|
|createUser|varchar2|false||--|创建人|
|updateTime|date|false||sysdate|更新时间|
|updateUser|varchar2|false||--|更新人|
|imageUrl|varchar2|false||--|推广图片|

----
### ***dmTermPayAccount***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|mapId|number|false|yes|--|关系编号|
|termNo|varchar2|false||--|终端编号|
|accountId|number|false||--|支付账号编号|
|priority|number|false||1|优先级(用于值越大优先级越大)|
|status|number|false||--|状态: 0-启用 1-禁用|

----
### ***dmTermProduct***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|productNo|varchar2|false|yes|--|终端产品编码|
|termNo|varchar2|false||--|终端编号|
|productName|varchar2|false||--|产品名称(运营使用)|
|productTitle|varchar2|false||--|产品标题(可html)|
|productSummary|varchar2|false||--|产品简要说明(可html)|
|productDetail|varchar2|false||--|产品详细说明(可html)|
|productTip|varchar2|false||--|产品提示(温馨提示)|
|productType|number|false||1|业务分类: 1-话费 2-流量(前端显示用,区分tab)|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||qg|省份: qg-全国|
|cityNo|varchar2|false||*|城市: *-全省|
|faceFee|number|false||--|面值|
|normalPrice|number|false||--|标准价格|
|payPrice|number|false||--|支付价格|
|costPrice|number|false||--|成本价格|
|deductMode|number|false||--|扣费模式: 0-不扣费 1-先扣费 2-后扣费|
|needVcode|number|false||--|发送验证码: 1-不需要 2-平台发送 3-上游发送|
|needPay|number|false||--|需要支付: 0-需要 1-不需要|
|needCardUid|number|false||1|需要身份证号: 0-需要 1-不需要|
|needCardPic|number|false||1|需要身份证照: 0-需要 1-不需要|
|groupNo|varchar2|false||--|分组编号|
|priority|number|false||--|权重: 0-不显示(前端显示用, 值越大,优先级越高,显示越靠前)|
|sortNum|number|false||--|排序编号|
|status|number|false||--|状态: 0-启用 1-禁用|
|remark|varchar2|false||--|备注|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|
|updateUser|varchar2|false||--|更新人|
|updateTime|date|false||sysdate|更新时间|

----
### ***dmTermProductRule***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|termNo|varchar2|false||--|终端编号|
|productNo|varchar2|false||--|产品编号|
|ruleType|number|false||--|规则类型: 1-ip 2-手机号 3-年龄 4-身份证 5-地址|
|ruleCondition|number|false||--|规则条件: 1-范围 2-等于 3-不等于 4-包含 5-不包含 6-不超过(时间段内)|
|ruleValueA|varchar2|false||--|规则取值a|
|ruleValueB|varchar2|false||--|规则取值b|
|priority|number|false||1|优先级|
|status|number|false||--|状态: 0-启用 1-禁用|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|
|updateUser|varchar2|false||--|更新人|
|updateTime|date|false||sysdate|更新时间|

----
### ***dmTermPromote***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|promoteId|number|false|yes|--|推广编号|
|termNo|varchar2|false||--|终端编号|
|promoterId|varchar2|false||--|推广人编号|
|labelId|number|false||--|推广人标签编号|
|promoteGuid|varchar2|false||--|推广编码|
|promoteUrl|varchar2|false||--|推广地址|
|status|number|false||--|状态: 0-启用 1-禁用|
|remark|varchar2|false||--|备注|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|
|updateUser|varchar2|false||--|更新人|
|updateTime|date|false||--|更新时间|
|needNotify|number|false||1|需要通知: 0-需要 1-不需要|

----
### ***dmTermScript***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|termNo|varchar2|false||--|终端编号|
|promoterId|number|false||--|推广人编号|
|promoteId|number|false||--|推广编号|
|businessType|number|false||--|业务类型: 0-所有|
|notifyType|number|false||--|通知类型: 1-订单状态|
|notifyUrl|varchar2|false||--|通知地址|
|notifyMaxTimes|number|false||5|通知最大次数|
|scriptPath|varchar2|false||--|脚本路径|
|serviceCode|varchar2|false||--|服务编码|
|status|number|false||--|状态: 0-启用 1-禁用|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|
|updateUser|varchar2|false||--|更新人|
|updateTime|date|false||sysdate|更新时间|

----
### ***dmTermWhiteList***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|temNo|varchar2|false||--|终端编号|
|whiteType|number|false||1|白名单类型: 1-ip白名单 2-号码白名单|
|whiteValue|varchar2|false||--|白名单值|
|status|number|false||--|状态: 0-启用 1-禁用|
|createTime|date|false||sysdate|创建时间|
|createUser|varchar2|false||--|创建人|
|updateTime|date|false||sysdate|更新时间|
|updateUser|varchar2|false||--|更新人|

----
### ***dmUpChannel***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelNo|varchar2|false|yes|--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|apiId|varchar2|false||--|接口id|
|apiKey|varchar2|false||--|接口key|
|notifyUrl|varchar2|false||--|回调地址|
|loginId|varchar2|false||--|登录id|
|loginPwd|varchar2|false||--|登录密码|
|balance|number|false||--|余额|
|supportQuery|number|false||1|是否支持查询|
|queryDelay|number|false||120|首次查询延迟(秒)|
|queryInterval|number|false||60|查询时间间隔(秒)|
|syncStatus|number|false||1|同步记账状态|
|principal|varchar2|false||--|负责人|
|status|number|false||--|状态: 0-启用 1-禁用|
|remark|varchar2|false||--|渠道备注|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|
|updateUser|varchar2|false||--|更新人|
|updateTime|date|false||sysdate|更新时间|
|queryMaxTimes|number|false||--|查询最大次数: 0-不限次数|

----
### ***dmUpErrorMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|channelNo|varchar2|false||--|渠道编号|
|msgType|number|false||--|消息类型: 1-发货 2-查询 3-回调|
|condition1|varchar2|false||--|条件1|
|condition2|varchar2|false||--|条件2|
|condition3|varchar2|false||--|条件3|
|condition4|varchar2|false||--|条件4|
|condition5|varchar2|false||--|条件5|
|errorCode|number|false||--|错误处理码|
|status|number|false||--|状态: 0-启用 1-禁用 2-人工暂停 3-系统暂停|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|
|updateUser|varchar2|false||--|更新人|
|updateTime|date|false||sysdate|更新时间|

----
### ***dmUpFundChange***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|bindId|varchar2|false||--|绑定编号|
|orderNo|varchar2|false||--|订单号|
|channelNo|varchar2|false||--|渠道编号|
|changeType|number|false||--|变动类型: 1-收款 2-扣款 3-退款|
|changeMoney|number|false||--|变动金额|
|beforeBalance|number|false||--|变动前余额|
|afterBalance|number|false||--|变动后余额|
|changeTime|date|false||sysdate|变动时间|
|operator|varchar2|false||--|操作人|
|remark|varchar2|false||--|备注|

----
### ***dmUpProduct***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|productNo|varchar2|false|yes|--|产品编号|
|productName|varchar2|false||--|产品名称|
|channelNo|varchar2|false||--|渠道编号|
|upProductNo|varchar2|false||--|上游产品编码|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||qg|省份: qg-全国|
|cityNo|varchar2|false||*|城市: *-全省|
|faceFee|number|false||--|面值|
|normalPrice|number|false||--|标准价格|
|deductPrice|number|false||--|扣款价格|
|realPrice|number|false||--|实际价格|
|needVcode|number|false||1|需要验证码: 0-需要 1-不需要|
|needDelivery|number|false||--|需要发货: 0-需要 1-不需要|
|needCardUid|number|false||1|需要身份证号: 0-需要 1-不需要|
|pictureMode|number|false||--|身份证照模式: 0-无需照片 1-重提照片 2-重提订单|
|groupNo|varchar2|false||--|分组编号|
|status|number|false||--|状态: 0-启用 1-禁用|
|remark|varchar2|false||--|备注|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|
|updateUser|varchar2|false||--|更新人|
|updateTime|date|false||sysdate|更新时间|

----
### ***dmUpScript***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|scriptId|number|false|yes|--|脚本编号|
|channelNo|varchar2|false||--|渠道编号|
|businessType|number|false||--|业务类型:  0-所有|
|carrierNo|varchar2|false||--|运营商: *-所有|
|scriptType|number|false||--|脚本类型: 1-订单提交 2-订单查询 3-余额查询 4-退款申请 5-验证码发送 6-验证码提交|
|scriptPath|varchar2|false||--|脚本路径|
|serviceCode|varchar2|false||--|服务编码(队列名/机器人code)|
|apiUrl|varchar2|false||--|接口地址|
|status|number|false||--|状态: 0-启用 1-禁用|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|
|updateUser|varchar2|false||--|更新人|
|updateTime|date|false||sysdate|更新时间|

----
### ***tmpTermCardDetail***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|编号|
|taskId|number|false||--|任务编号|
|contactPhone|varchar2|false||--|联系电话|
|contactName|varchar2|false||--|联系人|
|contactAddr|varchar2|false||--|联系地址|
|cardUserId|varchar2|false||--|办理人身份证号|
|cardUserName|varchar2|false||--|办理人姓名|
|cardPicFront|varchar2|false||--|办理人身份证照(正面)|
|cardPicBack|varchar2|false||--|办理人身份证照(反面)|
|cardPicHand|varchar2|false||--|办理人身份证照(手持)|
|dealStatus|number|false||20|处理状态: 0-成功 20-等待处理 30-处理中 90-处理失败|
|dealMsg|varchar2|false||--|处理结果消息|
|createTime|date|false||sysdate|创建时间|
|startTime|date|false||--|开始时间|
|finishTime|date|false||--|结束时间|

----
### ***tmpTermCardTask***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|taskId|number|false|yes|--|任务编号|
|termNo|varchar2|false||--|终端编号|
|productNo|varchar2|false||--|终端产品编号|
|promoterId|number|false||--|推广人编号|
|promoteId|number|false||--|推广编号|
|cardPicZip|varchar2|false||--|身份证照片压缩包|
|status|number|false||20|处理状态: 0-成功 20-等待处理 30-处理中 90-处理失败|
|totalRows|number|false||--|总条数|
|succRows|number|false||--|成功条数|
|failRows|number|false||--|失败条数|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|
|startTime|date|false||--|任务开始时间|
|finishTime|date|false||--|任务结束时间|

----
### ***tmpUpCardDetail***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|upProductNo|varchar2|false||--|上游产品编号|
|bindId|varchar2|false||--|绑定编号|
|phoneNo|varchar2|false||--|联系方式|
|cardNo|varchar2|false||--|身份证号|
|userName|varchar2|false||--|办理人|
|newPhoneNo|varchar2|false||--|新手机号|
|orderStatus|number|false||--|订单状态: 0-成功 90-失败|
|orderMsg|varchar2|false||--|订单消息|
|activateStatus|number|false||--|激活状态: 0-已激活 1-待激活|
|activateTime|varchar2|false||--|激活时间(格式: yyyy-mm-dd hh24:mi:ss)|
|rechargeStatus|number|false||--|首充状态: 0-已首充 1-未首充|
|rechargeTime|varchar2|false||--|首充时间(格式: yyyy-mm-dd hh24:mi:ss)|
|expressName|varchar2|false||--|快递名称|
|expressNo|varchar2|false||--|快递单号|
|dealStatus|number|false||20|处理状态: 0-处理成功 20-等待处理 90-处理失败|
|dealMsg|varchar2|false||--|处理结果|
|batchNo|number|false||--|操作批次|
|createUser|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|
|finishTime|date|false||--|完成时间|
|rechargeFace|number|false||--|首充面值|
