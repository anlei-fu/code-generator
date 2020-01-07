
### ***sytDownProduct***(下游渠道产品表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">pid|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|产品ID|
|<div style="color:steelblue">productNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|产品编码|
|<div style="color:steelblue">productName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|产品名称|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|业务类型 |
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份;Q:全国|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|城市;:全市|
|<div style="color:steelblue">productFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|产品原价|
|<div style="color:steelblue">salePrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|显示售价|
|<div style="color:steelblue">realPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|实际售价|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|状态;:启用;:禁用|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建者|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">editUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|更新人|
|<div style="color:steelblue">editTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|更新时间|

----


### ***sysDictionary***()
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">type|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">short|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(10)||
|<div style="color:steelblue">name|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">value|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">dicid|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||

----


### ***orderMainIi***(订单主表(新))
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|订单号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">productId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|下游产品编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|地市|
|<div style="color:steelblue">phoneNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|手机号码|
|<div style="color:steelblue">faceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|面值|
|<div style="color:steelblue">normalPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(16)|标准价格|
|<div style="color:steelblue">discountPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(16)|折扣价格|
|<div style="color:steelblue">productName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|产品名称|
|<div style="color:steelblue">partnerOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|下游订单号|
|<div style="color:steelblue">orderStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|订单状态|
|<div style="color:steelblue">succFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|成功面值|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">finishTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|完成时间|
|<div style="color:steelblue">needPay|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|是否需要支付(订单支付表)|
|<div style="color:steelblue">statusStep|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|状态步: 0-完成 1-等待支付 2-等待支付回调 3-等待发货 4-等待发货结果 5-等待通知下游 |

----


### ***orderDelivery***(订单发货表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">deliveryId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|发货编号|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|订单号|
|<div style="color:steelblue">robotIp|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|发货ip|
|<div style="color:steelblue">upOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|上游订单号|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|状:20-等待发货30-正在发货90-失败0-成功|
|<div style="color:steelblue">manualStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|人工状:10-无需20-等待人工0-成功|
|<div style="color:steelblue">resultMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|结果消息|
|<div style="color:steelblue">queryStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|查询状态10-无需20-等待查询90-失败0-成功|
|<div style="color:steelblue">queryMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|查询消息|
|<div style="color:steelblue">queryIp|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|查询机器IP|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">finishTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|完成时间|
|<div style="color:steelblue">queryCreateTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|查询创建时间|
|<div style="color:steelblue">nextQueryTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|下次查询时间|
|<div style="color:steelblue">queryCntr|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|查询次数|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游渠道编号|
|<div style="color:steelblue">nextDeliveryTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|下次发货时间|
|<div style="color:steelblue">deliveryCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|发货次数|
|<div style="color:steelblue">errorCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|错误码|
|<div style="color:steelblue">upApiUid|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|上游api_uid|
|<div style="color:steelblue">proof|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|凭证|
|<div style="color:steelblue">upChannelId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|上游渠道编号|
|<div style="color:steelblue">deliveryCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|发货机器人标识|
|<div style="color:steelblue">queryCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|查询机器人标识|

----


### ***orderAccount***(订单用户表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|渠道编号|
|<div style="color:steelblue">accountNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|账户名|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|创建时间|

----


### ***orderRefund***(订单退款)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款编号|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|订单号|
|<div style="color:steelblue">refundFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款金额|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">refundNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|退款单号|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|状态20-等待退款30-正在退款90-失败0-成功|
|<div style="color:steelblue">finishTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|完成时间|
|<div style="color:steelblue">refundMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|上游退款消息|
|<div style="color:steelblue">sendTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|发送上游退款的时间|
|<div style="color:steelblue">robotIp|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|退款机器人|
|<div style="color:steelblue">queryIp|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|查询机器ip|
|<div style="color:steelblue">nextTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|下次查询时间|
|<div style="color:steelblue">notifyState|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|回调状态 10-无需20-等待30-正在90-失败0-成功|
|<div style="color:steelblue">notifyTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|回调时间|
|<div style="color:steelblue">refundDesc|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|退款原因|
|<div style="color:steelblue">needNotify|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|是否需要通知  :需要 :不需要|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游渠道编号|
|<div style="color:steelblue">lossServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|亏损手续费|
|<div style="color:steelblue">startTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|退款开始时间|
|<div style="color:steelblue">refundCntr|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|退款次数|

----


### ***orderNotify***(订单通知)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">notifyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|通知编号|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|订单号|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|回调状态1:无需处理2:等待处理3:正在处理:处理成功9:处理失败|
|<div style="color:steelblue">notifyUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|通知地址|
|<div style="color:steelblue">limitNotify|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|限制回调次数|
|<div style="color:steelblue">robotIp|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|机器IP|
|<div style="color:steelblue">notifyCntr|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|回调次数|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">nextTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|下次通知时间|
|<div style="color:steelblue">finishTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|完成时间|
|<div style="color:steelblue">notifyType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|通知类:1.支付,2.退款,3.充值|
|<div style="color:steelblue">resultMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|结果消息|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游渠道编号|

----


### ***orderMainHs***(订单主表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">partnerOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|中大订单号|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|订单号|
|<div style="color:steelblue">payType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|支付类型1.支付宝2微信3龙支付|
|<div style="color:steelblue">productName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|产品名称|
|<div style="color:steelblue">mobile|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|充值账号|
|<div style="color:steelblue">account|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|中大用户名/建行用户编号+手机类型(1 iphone,2 安卓)|
|<div style="color:steelblue">productId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|产品编号|
|<div style="color:steelblue">face|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|充值面值|
|<div style="color:steelblue">price|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|产品金额(总卖价)|
|<div style="color:steelblue">zdOrderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|中大订单时间|
|<div style="color:steelblue">cardType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|充值类型1-话费2-流量3-宽带续费|
|<div style="color:steelblue">flowType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|流量类型|
|<div style="color:steelblue">payStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|支付状: 30-正在支付90-失败0-成功|
|<div style="color:steelblue">orderStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|订单状:10-无需 20-等待充值30-正在充值90-失败0-成功|
|<div style="color:steelblue">refundState|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|退款状态10-无需20-等待退款30-正在退款90-失败0-成功|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">refundTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|退款时间|
|<div style="color:steelblue">payTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|支付完成时间|
|<div style="color:steelblue">finishTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单完成时间|
|<div style="color:steelblue">sucFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|成功面值|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|业务类型|
|<div style="color:steelblue">couponprice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|优惠券金额|
|<div style="color:steelblue">couponid|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|优惠券ID|
|<div style="color:steelblue">couponch|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|优惠券渠道|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|支付手续费|
|<div style="color:steelblue">userPayed|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|用户支付金额|
|<div style="color:steelblue">payNotifyState|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|支付结果回调状态 10-无需20-等待30-正在90-失败0-成功|
|<div style="color:steelblue">orderNotifyState|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|订单状态回调状态 10-无需20-等待30-正在90-失败0-成功|
|<div style="color:steelblue">payNotifyTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|支付结果回调时间|
|<div style="color:steelblue">orderNotifyTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单结果回调时间|
|<div style="color:steelblue">receiptAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|收款账户编号|
|<div style="color:steelblue">errorMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|错误消息|
|<div style="color:steelblue">userIp|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|真实ip|
|<div style="color:steelblue">payFlowOrder|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|支付方流水号|
|<div style="color:steelblue">payUserId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|支付用户编号|
|<div style="color:steelblue">costPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|实际充值成本|
|<div style="color:steelblue">needRecharge|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|是否需要充值话费流量|
|<div style="color:steelblue">manualStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|人工状:10-无需20-等待人工0-成功|
|<div style="color:steelblue">esalesCostPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|18系统成本金额|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游渠道编号|
|<div style="color:steelblue">rechargeMode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|充值类型 :快充 :普通慢充|
|<div style="color:steelblue">deviceType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|终端 :直充APP :直充H5 :慢充APP :慢充H5|
|<div style="color:steelblue">isNewUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|是否新用户 :是 :否|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|城市|
|<div style="color:steelblue">activityId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|活动ID|
|<div style="color:steelblue">serverIp|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|收单IP|
|<div style="color:steelblue">contactPhone|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|联系电话|
|<div style="color:steelblue">realName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|姓名|
|<div style="color:steelblue">sfzNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|身份证编号|

----


### ***orderVcode***(验证码请求记录)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|订单号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downProductId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|下游产品编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商编码|
|<div style="color:steelblue">phoneNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|手机号|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份编码|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|地市编码|
|<div style="color:steelblue">sendCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|发送次数|
|<div style="color:steelblue">sendStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|短信状: 0-发送成功 20-等待发送 30-发送中 90-发送失败  99-发送未知|
|<div style="color:steelblue">nextSendTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|下次发送时间|
|<div style="color:steelblue">resultMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|发送结果消息|
|<div style="color:steelblue">userIp|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|用户IP|
|<div style="color:steelblue">vcode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|用户验证码|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">finishTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|完成时间|
|<div style="color:steelblue">upChannelId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|上游渠道ID|
|<div style="color:steelblue">upProductId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|上游产品ID|
|<div style="color:steelblue">shareUid|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|推荐人UID|

----


### ***orderMainExt***(订单扩张表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|订单号|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|记录编号|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|帐号类型|
|<div style="color:steelblue">payType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|支付类型|
|<div style="color:steelblue">payMoney|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(15)|支付金额|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(15)|手续费|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|

----


### ***bannerList***(滚动头列表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">titId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|id|
|<div style="color:steelblue">titMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|banner信息|
|<div style="color:steelblue">imgUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|图片地址|
|<div style="color:steelblue">state|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">scrUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|图片链接|
|<div style="color:steelblue">sort|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|排序|
|<div style="color:steelblue">pageNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|页面编号|

----


### ***fcSystemProvince***(省份表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省编号|
|<div style="color:steelblue">provinceName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|名称|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">short|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|排序|

----


### ***fcSystemCity***(城市表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|市编号|
|<div style="color:steelblue">cityName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|名称|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|省id|
|<div style="color:steelblue">code|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||

----


### ***couponUseRule***(优惠券使用规则)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">ruleId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|规则编号|
|<div style="color:steelblue">activityId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|活动编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(5)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">minFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(5)|订单最低金额(无用)|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">updatedUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|更新人|
|<div style="color:steelblue">updatedTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|更新时间|
|<div style="color:steelblue">rechargeMode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|充值类型 快慢充|

----


### ***couponRecord***(优惠券记录表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">couponId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|券编号|
|<div style="color:steelblue">activityId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|活动编号|
|<div style="color:steelblue">couponFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|券金额|
|<div style="color:steelblue">effectiveTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|生效时间|
|<div style="color:steelblue">expireTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|过期时间|
|<div style="color:steelblue">usedTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|使用时间|
|<div style="color:steelblue">usedOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|使用订单号|
|<div style="color:steelblue">orderFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|订单金额|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">couponState|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态:未使用:已使用 :已过期|
|<div style="color:steelblue">getedTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|领取时间|
|<div style="color:steelblue">userName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|用户名|
|<div style="color:steelblue">couponType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|券类型:流量券:话费券|
|<div style="color:steelblue">getType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|领取方式:领券:充送|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|下游渠道编号|
|<div style="color:steelblue">getOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|获取订单号(领取方式的为空)|

----


### ***activityInfo***(活动信息表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">activityId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|活动编号|
|<div style="color:steelblue">activityName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|活动名称|
|<div style="color:steelblue">couponType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|券类型:流量券:话费券|
|<div style="color:steelblue">getType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|领取方式:领券:充送|
|<div style="color:steelblue">validPeriod|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(5)|有效天数|
|<div style="color:steelblue">minFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(5)|最小金额|
|<div style="color:steelblue">maxFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(5)|最大金额|
|<div style="color:steelblue">startTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|开始时间|
|<div style="color:steelblue">endTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|结束时间|
|<div style="color:steelblue">promoteTitle|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|推荐标题|
|<div style="color:steelblue">getRemark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|领取说明|
|<div style="color:steelblue">useRemark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|使用说明|
|<div style="color:steelblue">getedCntr|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|已领取数量|
|<div style="color:steelblue">usedCntr|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|已使用数量|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">updatedUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|更新人|
|<div style="color:steelblue">updatedTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|更新时间|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|下游渠道编号|
|<div style="color:steelblue">payMinFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|最小支付金额(基本限定)|

----


### ***operateLog***(操作日志)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">logId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|订单号|
|<div style="color:steelblue">content|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">operator|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|操作人|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|

----


### ***upChannelConfigOld***(上游配置表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">rechargeUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|充值地址|
|<div style="color:steelblue">queryUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|查询地址|
|<div style="color:steelblue">notifyUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|通知地址|
|<div style="color:steelblue">rechargeScript|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|充值脚本|
|<div style="color:steelblue">queryScript|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|查询脚本|
|<div style="color:steelblue">apiUid|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|接口id|
|<div style="color:steelblue">apiKey|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|接口Key|
|<div style="color:steelblue">productQueryUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|产品查询地址|
|<div style="color:steelblue">mobileQueryUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|号段查询地址|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游渠道编号|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|主键编号|
|<div style="color:steelblue">notifyScript|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|通知脚本|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">deliveryCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|发货机器人标识|
|<div style="color:steelblue">queryCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|查询机器人标识|
|<div style="color:steelblue">updateUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">updateTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||

----


### ***upChannelDayStatDiff***(上游每日交易差异统计)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">statId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|统计编号|
|<div style="color:steelblue">statisDay|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|统计日期|
|<div style="color:steelblue">countTotal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|总笔数|
|<div style="color:steelblue">countSucc|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|成功笔数|
|<div style="color:steelblue">countFail|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|失败笔数|
|<div style="color:steelblue">countDealing|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|处理中笔数|
|<div style="color:steelblue">faceTotal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|总面值|
|<div style="color:steelblue">faceSucc|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|成功面值|
|<div style="color:steelblue">faceFail|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|失败面值|
|<div style="color:steelblue">faceDealing|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|处理中面值|
|<div style="color:steelblue">esCountTotal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|18总笔数|
|<div style="color:steelblue">esCountSucc|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|18成功笔数|
|<div style="color:steelblue">esCountFail|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|18失败笔数|
|<div style="color:steelblue">esCountDealing|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|18处理中笔数|
|<div style="color:steelblue">esFaceTotal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|18总面值|
|<div style="color:steelblue">esFaceSucc|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|18成功面值|
|<div style="color:steelblue">esFaceFail|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|18失败面值|
|<div style="color:steelblue">esFaceDealing|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|18处理中面值|
|<div style="color:steelblue">diffCountSucc|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|差异成功笔数|
|<div style="color:steelblue">diffFaceSucc|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|差异成功面值|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|业务类型|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|下游渠道|

----


### ***upProduct***(上游产品表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">productId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|产品编号|
|<div style="color:steelblue">upChannelId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|渠道ID|
|<div style="color:steelblue">productNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|产品编码|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|业务类型 |
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省: QG-全国|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|城: *-全省|
|<div style="color:steelblue">faceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|面值|
|<div style="color:steelblue">deductPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|扣款价格|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|状: 0-启用 1-禁用|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">updateUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|更新人|
|<div style="color:steelblue">updateTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|更新时间|
|<div style="color:steelblue">realPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|实际价格|
|<div style="color:steelblue">normalPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|标准价格|

----


### ***upChannelConfig***(上游配置表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">rechargeUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|充值地址|
|<div style="color:steelblue">queryUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|查询地址|
|<div style="color:steelblue">notifyUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|通知地址|
|<div style="color:steelblue">rechargeScript|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|充值脚本|
|<div style="color:steelblue">queryScript|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|查询脚本|
|<div style="color:steelblue">apiUid|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|接口id|
|<div style="color:steelblue">apiKey|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|接口Key|
|<div style="color:steelblue">productQueryUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|产品查询地址|
|<div style="color:steelblue">mobileQueryUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|号段查询地址|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游渠道编号|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|主键编号|
|<div style="color:steelblue">notifyScript|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|通知脚本|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">deliveryCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|发货机器人标识|
|<div style="color:steelblue">queryCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|查询机器人标识|
|<div style="color:steelblue">noOrderRetry|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|订单不存在重: 0-重试 1-不重试|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">updateUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">updateTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||

----


### ***upChannelStatDiffDetail***(18对账差异明细)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">statId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|直接对账统计主键|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|订单号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|渠道|
|<div style="color:steelblue">diffType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|差异类型 |
|<div style="color:steelblue">price|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|18订单金额|
|<div style="color:steelblue">realFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|18实际金额|
|<div style="color:steelblue">diffMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|差异信息|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|生成时间|
|<div style="color:steelblue">sysPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|收银台金额|
|<div style="color:steelblue">sysRealFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|收银台实际金额|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单时间|
|<div style="color:steelblue">payType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|支付类型|
|<div style="color:steelblue">statisDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|统计日期|

----


### ***upChannelDayQxstatDiff***()
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">faceSucc|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">faceTotal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">countSucc|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">countTotal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">statisDay|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||

----


### ***zdCouponUsed***(使用过的中大优惠券)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">couponId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|优惠券id|
|<div style="color:steelblue">couponChannel|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|优惠渠道|
|<div style="color:steelblue">couponPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|优惠金额|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|使用订单编号|
|<div style="color:steelblue">useTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|使用时间|
|<div style="color:steelblue">downOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|下游订单号|

----


### ***receiptAccountInfo***(收款账户信息表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(2)|账户类型 :支付宝 :微信 :优惠券 :微信扫码 :优途 1:微信公众号 1:京东支付 1:中行支付|
|<div style="color:steelblue">appid|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|收款账号ID|
|<div style="color:steelblue">mchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|商户号|
|<div style="color:steelblue">pubKey|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|支付宝公钥,微信秘钥|
|<div style="color:steelblue">priKey|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|私钥|
|<div style="color:steelblue">certificatePath|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|证书路径|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|余额|
|<div style="color:steelblue">serviceRadio|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|手续费率|
|<div style="color:steelblue">ext1|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|扩展1|
|<div style="color:steelblue">ext2|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|扩展2(公众号支付:为appsecret)|
|<div style="color:steelblue">ext3|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|扩展3|
|<div style="color:steelblue">ext4|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|扩展4|
|<div style="color:steelblue">ext5|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|扩展5|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(2)|状态 0有效 1无效|
|<div style="color:steelblue">syncNotifyUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|同步通知地址|
|<div style="color:steelblue">nonsyncNotifyUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|异步通知地址|
|<div style="color:steelblue">refundScriptPath|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|退款lua脚本名称|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游渠道编号|
|<div style="color:steelblue">serviceLoss|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|退款亏损|
|<div style="color:steelblue">serviceFeeMode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|手续费模: 0-无 1-支付前 2-支付后|
|<div style="color:steelblue">serviceFeeRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|退款是否退手续: 0-是 1-否|
|<div style="color:steelblue">version|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|版: 1-开发 2-测试 3-预生产 4-生产|

----


### ***receiptFundRecord***(收款账户资金变动表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记录编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(2)|变动类型 :支付 :退款 :提现|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|变动金额|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|当前余额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">operator|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|操作人|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">productType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|产品类型 :话费 :流量|
|<div style="color:steelblue">serviceLoss|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|亏损的手续费|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|订单号|

----


### ***receiptAccountConfig***(收款账户额外配置)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">version|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|版本 :开发 :测试 :预生产 :生产|
|<div style="color:steelblue">syncNotifyUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|同步通知地址|
|<div style="color:steelblue">nonsyncNotifyUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|异步通知地址|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|状态 0有效 1无效|
|<div style="color:steelblue">updatedUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|更新用户|
|<div style="color:steelblue">updatedTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|更新时间|
|<div style="color:steelblue">configId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|配置ID|
|<div style="color:steelblue">deviceType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|终端 :直充APP :直充H5 :慢充APP :慢充H5|

----


### ***orderMain***(订单主表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">sfzNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|身份证编号|
|<div style="color:steelblue">realName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|姓名|
|<div style="color:steelblue">contactPhone|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|联系电话|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游渠道编号|
|<div style="color:steelblue">rechargeMode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|充值类型 :快充 :普通慢充|
|<div style="color:steelblue">deviceType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|终端 :直充APP :直充H5 :慢充APP :慢充H5|
|<div style="color:steelblue">isNewUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|是否新用户 :是 :否|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|城市|
|<div style="color:steelblue">activityId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|活动ID|
|<div style="color:steelblue">serverIp|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|收单IP|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|订单号|
|<div style="color:steelblue">partnerOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|中大订单号|
|<div style="color:steelblue">payType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|支付类: 0-无需支付 1-支付宝 2-微信 3-龙支付|
|<div style="color:steelblue">productName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|产品名称|
|<div style="color:steelblue">mobile|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|充值账号|
|<div style="color:steelblue">account|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|中大用户名/建行用户编号+手机类型(1 iphone,2 安卓)|
|<div style="color:steelblue">productId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|产品编号|
|<div style="color:steelblue">face|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|充值面值|
|<div style="color:steelblue">price|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|产品金额(总卖价)|
|<div style="color:steelblue">zdOrderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|中大订单时间|
|<div style="color:steelblue">cardType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|充值类型1-话费2-流量3-宽带续费|
|<div style="color:steelblue">flowType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|流量类型|
|<div style="color:steelblue">payStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|支付状: 30-正在支付90-失败0-成功|
|<div style="color:steelblue">orderStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|订单状:10-无需 20-等待充值30-正在充值90-失败0-成功|
|<div style="color:steelblue">refundState|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|退款状态10-无需20-等待退款30-正在退款90-失败0-成功|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">refundTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|退款时间|
|<div style="color:steelblue">payTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|支付完成时间|
|<div style="color:steelblue">finishTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单完成时间|
|<div style="color:steelblue">sucFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|成功面值|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|业务类型|
|<div style="color:steelblue">couponprice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|优惠券金额|
|<div style="color:steelblue">couponid|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|优惠券ID|
|<div style="color:steelblue">couponch|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|优惠券渠道|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|支付手续费|
|<div style="color:steelblue">userPayed|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|用户支付金额|
|<div style="color:steelblue">payNotifyState|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|支付结果回调状态 10-无需20-等待30-正在90-失败0-成功|
|<div style="color:steelblue">orderNotifyState|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|订单状态回调状态 10-无需20-等待30-正在90-失败0-成功|
|<div style="color:steelblue">payNotifyTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|支付结果回调时间|
|<div style="color:steelblue">orderNotifyTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单结果回调时间|
|<div style="color:steelblue">receiptAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|收款账户编号|
|<div style="color:steelblue">errorMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|错误消息|
|<div style="color:steelblue">userIp|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|真实ip|
|<div style="color:steelblue">payFlowOrder|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|支付方流水号|
|<div style="color:steelblue">payUserId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|支付用户编号|
|<div style="color:steelblue">costPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|实际充值成本|
|<div style="color:steelblue">needRecharge|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|是否需要充值话费流量|
|<div style="color:steelblue">manualStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|人工状:10-无需20-等待人工0-成功|
|<div style="color:steelblue">esalesCostPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|18系统成本金额|
|<div style="color:steelblue">userPayIp|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|用户支付IP|
|<div style="color:steelblue">version|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|版本号|
|<div style="color:steelblue">deliveryRepeat|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|订单不存在是否重复发货|
|<div style="color:steelblue">proof|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|凭证|
|<div style="color:steelblue">needVcode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|是否需要验证码|
|<div style="color:steelblue">shareUid|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|推荐人UID|
|<div style="color:steelblue">tradeMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|支付详情|
|<div style="color:steelblue">blackUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|是否黑名单用户|
|<div style="color:steelblue">extend1|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|扩展字段1|
|<div style="color:steelblue">closeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|超时关闭时间|
|<div style="color:steelblue">payNewUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|支付平台新用户：0-yes,1-no|
|<div style="color:steelblue">shelfId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|下游产品Id|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||

----


### ***downChannel***()
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|状态 0-启用 1-禁用|
|<div style="color:steelblue">notifyScript|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|通知脚本|
|<div style="color:steelblue">notifyUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|通知地址|
|<div style="color:steelblue">cpName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|cp名称|
|<div style="color:steelblue">productLine|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|产品线|
|<div style="color:steelblue">deailUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|订单详情页面|
|<div style="color:steelblue">needRechargeTel|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|是否需要充值话费  0-需要 1-不需要(其他业务类型)|
|<div style="color:steelblue">needRechagreFlow|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|是否需要充值流量  0-需要 1-不需要|
|<div style="color:steelblue">needNotity|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|是否需要通知  0-需要 1-不需要|
|<div style="color:steelblue">needDetailFile|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|生成对账文件  0-需要 1-不需要|
|<div style="color:steelblue">supportCoupon|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|支持优惠: 0-是 1-否|
|<div style="color:steelblue">supportActivity|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|支持活: 0-是 1-否|
|<div style="color:steelblue">closeExpire|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|关闭超时(分钟)|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">updateTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">updateUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||

----


### ***downSpecifiedUp***(下游指定上游渠道配置)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|编号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|下游渠道|
|<div style="color:steelblue">upChannelId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|上游渠道|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|运营商(*所有)|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|省份(QG所有)|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|地市(*所有)|
|<div style="color:steelblue">face|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|面值(0表示所有)|
|<div style="color:steelblue">priority|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|优先级|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|状:0-启用,1-禁用|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">updateUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|更新人|
|<div style="color:steelblue">updateTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|更新时间|

----


### ***downProduct***(下游产品表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">productId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|产品编号|
|<div style="color:steelblue">productNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|产品编码|
|<div style="color:steelblue">productName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|产品名称(运营使用)|
|<div style="color:steelblue">productTitle|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|产品标题(可HTML)|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|业务类型 |
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省: QG-全国|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|城: *-全省|
|<div style="color:steelblue">faceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|面值|
|<div style="color:steelblue">normalPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|标准价格(话费和面值相当,流量1024=30元)|
|<div style="color:steelblue">actualPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|支付价格|
|<div style="color:steelblue">needPay|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|需要支: 0-需要 1-不需要|
|<div style="color:steelblue">hasActivity|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|是否有活: 0-是 1-否|
|<div style="color:steelblue">activityId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|活动ID|
|<div style="color:steelblue">needVcode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|需要验证: 0-需要 1-不需要|
|<div style="color:steelblue">needRepeat|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|订单不存在是否重复发货|
|<div style="color:steelblue">priority|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|权: 0-不显示(前端显示用, 值越大,优先级越高,显示越靠前)|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|状: 0-启用 1-禁用|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">updateUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|更新人|
|<div style="color:steelblue">updateTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|更新时间|
|<div style="color:steelblue">productType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|业务分: 1-话费 2-流量 3-视频会员 4-加油卡 5-固话(前端显示用,区分Tab)|
|<div style="color:steelblue">productSummary|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|产品简要说明(可HTML)|
|<div style="color:steelblue">productDetail|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|产品详细说明(可HTML)|
|<div style="color:steelblue">productTip|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|产品提示|
|<div style="color:steelblue">flowType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|流量类: 1-直充 2-个性|
|<div style="color:steelblue">rechargeMode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|充值模: 0-快充 1-8点慢充 3-普通慢充|
|<div style="color:steelblue">needRecharge|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|是否需要充值|
|<div style="color:steelblue">isRecommend|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|是否推: 0-是 1-否|

----


### ***downChannelActivity***(下游渠道活动配置)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|记录编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">activityTotal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|活动总数量|
|<div style="color:steelblue">activityRest|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|活动剩余数量|
|<div style="color:steelblue">activityStart|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|活动开始时间|
|<div style="color:steelblue">activityEnd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|活动结束时间|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">dayStart|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|每日开始时间|
|<div style="color:steelblue">dayEnd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|每日结束时间|
|<div style="color:steelblue">updateTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|更新时间|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|

----


### ***warningConfig***(告警配置)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">prcName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|执行存储过程名称|
|<div style="color:steelblue">title|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|标题|
|<div style="color:steelblue">intervalSecond|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(10)|执行间隔时间(秒)|
|<div style="color:steelblue">lastExecTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|上次执行时间|
|<div style="color:steelblue">nextExecTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|下次执行时间|
|<div style="color:steelblue">execTimeLong|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|总执行时间(秒)|
|<div style="color:steelblue">execTimeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|执行总次数|
|<div style="color:steelblue">execLastExpendTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|上次执行消耗时间(秒)|
|<div style="color:steelblue">execErrorCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|执行错误次数|
|<div style="color:steelblue">lastWarnTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|上一次发生报警时间(如果上一次出现报警,下次执行时,就不再统计已经报警的数据)|
|<div style="color:steelblue">keyWords|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|关键字|
|<div style="color:steelblue">warningLevel|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(5)|告警级别|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|是否可:0-可用,1不可用|
|<div style="color:steelblue">pauseTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|暂停时间|

----


### ***warningMessage***(警告消息)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">messageId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|消息编号|
|<div style="color:steelblue">titile|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|标题|
|<div style="color:steelblue">keyWords|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|关键字|
|<div style="color:steelblue">warningLevel|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(5)|告警级别|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">isSync|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(2)|是否被同:1-未同步,0-被同步|
|<div style="color:steelblue">content|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|内容|
|<div style="color:steelblue">syncStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|同步状:2:等待同步,3:同步中,:同步完成|

----


### ***dailyAccountSnapshot***()
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|快照时间|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|下游渠道编号|
|<div style="color:steelblue">cardType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|业务类型|
|<div style="color:steelblue">payType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|支付方式|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|业务类型|
|<div style="color:steelblue">productFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|订单面值|
|<div style="color:steelblue">allPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|订单总金额|
|<div style="color:steelblue">allOrderCntr|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|订单总笔数|
|<div style="color:steelblue">successMoney|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|成功支付金额|
|<div style="color:steelblue">successOrderCntr|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|成功支付笔数|
|<div style="color:steelblue">successCoupon|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|成功优惠券金额|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|服务费|
|<div style="color:steelblue">refundMoney|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|退款金额|
|<div style="color:steelblue">refundOrderCntr|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|退款笔数|
|<div style="color:steelblue">lossService|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|退款亏损服务费|
|<div style="color:steelblue">deviceType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|终端类型|
|<div style="color:steelblue">allUserCnt|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|总用户数|
|<div style="color:steelblue">newUserCnt|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|新用户数|
|<div style="color:steelblue">oldUserCnt|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|老用户数|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">rechargeMode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***channelPaymentConfig***()
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游渠道编号|
|<div style="color:steelblue">paymentType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|支付方式|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|状态|
|<div style="color:steelblue">version|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||

----


### ***linkProductInfo***(链接产品信息)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">linkId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|链接编号|
|<div style="color:steelblue">name|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|名称|
|<div style="color:steelblue">title|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|标题|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">linkUrl|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|链接路径|
|<div style="color:steelblue">linkType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(2)|链接位置 :话费 :流量|
|<div style="color:steelblue">carrierName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">cityName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|城市|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|状态|

----


### ***linkOrderInfo***(链接请求记录)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">requestId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|请求编号|
|<div style="color:steelblue">linkId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|链接ID|
|<div style="color:steelblue">phoneNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|手机号码|
|<div style="color:steelblue">requestTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|请求时间|

----


### ***systemLog***(错误日志)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">logId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">objectName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|对象名称|
|<div style="color:steelblue">content|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|内容|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">traceInfo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|堆栈信息|

----


### ***paymentConfig***()
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">name|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|名字|
|<div style="color:steelblue">img|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|图片路径|
|<div style="color:steelblue">sortVal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|排序|
|<div style="color:steelblue">imgFont|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|图片字体|

----


### ***paymentBillMatch***(支付对账表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|编号|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|订单号 (交易与退款)|
|<div style="color:steelblue">appid|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|商户账号|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单时间|
|<div style="color:steelblue">orderPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|订单金额|
|<div style="color:steelblue">receipt|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|实际收款|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|订单状态|
|<div style="color:steelblue">serverFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|手续费|
|<div style="color:steelblue">finishTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|完成时间|
|<div style="color:steelblue">taskId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|下载任务id|
|<div style="color:steelblue">billDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|账单日期|
|<div style="color:steelblue">payType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|支付类型|
|<div style="color:steelblue">statusLab|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||

----


### ***tempOrder***()
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">type|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|: 输入订单, :差异订单|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||

----


### ***tempOrder2***()
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||

----


### ***matchBillTask***()
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">appid|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|账户|
|<div style="color:steelblue">timing|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|定时|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|渠道|
|<div style="color:steelblue">retry|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|重试|
|<div style="color:steelblue">beginTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|起始|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|账户类型|
|<div style="color:steelblue">taskId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|id|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|状态|

----


### ***billMatchDifference***(对账差异)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|订单号|
|<div style="color:steelblue">diffId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|id|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|渠道|
|<div style="color:steelblue">diffType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|差异类型 |
|<div style="color:steelblue">price|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|订单金额|
|<div style="color:steelblue">realFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|实际金额|
|<div style="color:steelblue">diffMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|差异信息|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|生成时间|
|<div style="color:steelblue">sysPrice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|系统金额|
|<div style="color:steelblue">sysRealFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|系统实际金额|
|<div style="color:steelblue">taskId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|任务id|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单时间|
|<div style="color:steelblue">payType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|支付类型|
|<div style="color:steelblue">billDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|账单日期 (yyyy-mm-dd)|

----


### ***userIpExclude***(IP黑名单)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">type|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|:黑名单 :白名单|
|<div style="color:steelblue">ipAddress|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||

----


### ***userMessageRecord***(用户消息表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|业务类型|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|记录编号|
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|订单号|
|<div style="color:steelblue">receiver|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|接收人|
|<div style="color:steelblue">msgTitle|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|消息标题|
|<div style="color:steelblue">msgLevel|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|消息级别|
|<div style="color:steelblue">content|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|消息内容|
|<div style="color:steelblue">syncStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|同步状: 0-成功 20-等待同步 30-正在同步 90-同步失败|
|<div style="color:steelblue">syncTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|同步时间|
|<div style="color:steelblue">syncMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|同步消息|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|

----


### ***userMessageConfig***(用户消息配置表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">configId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|配置编号|
|<div style="color:steelblue">msgType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|业务类: 3-短信 6-微信|
|<div style="color:steelblue">msgTitle|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|消息标题|
|<div style="color:steelblue">msgLevel|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|消息级别|
|<div style="color:steelblue">template|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|消息模板|
|<div style="color:steelblue">msgHeader|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|消息头|

----


### ***terminalInfo***(终端信息表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">termName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|终端名称|
|<div style="color:steelblue">termId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|终端编号|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|状: 0-启用 1-禁用|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|终端说明|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">updateTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|更新时间|
|<div style="color:steelblue">updateUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|更新人|

----


### ***terminalDownMap***(终端下游关系表)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">mapId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|编号|
|<div style="color:steelblue">terminalId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|终端编号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|

----


### ***jdDayReport***(京东日报统计)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|报表生成时间|
|<div style="color:steelblue">statisticsTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|统计日期|
|<div style="color:steelblue">payType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|京东支付的子类型|
|<div style="color:steelblue">payCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|支付总笔数|
|<div style="color:steelblue">payFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|支付总金额|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|总手续费|
|<div style="color:steelblue">refundCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|退款笔数|
|<div style="color:steelblue">couponFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|优惠券金额|
|<div style="color:steelblue">newUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|新用户统计|
|<div style="color:steelblue">nuserRefundCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|新用户退款笔数|
|<div style="color:steelblue">refundFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|退款金额|
|<div style="color:steelblue">refundServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|退款亏损手续费|
|<div style="color:steelblue">downChannel|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***failMessageOrder***()
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">sendOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">phone|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">dealStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">orderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">message|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||

----


### ***blackMobile***()
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">mobile|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||

----


### ***blackUser***()
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">zfbAccount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||

----


### ***receiptAccountRate***(收款帐户手续费率)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|记录编号|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|帐户类: :支付宝 :微信 :优惠券 11-京东|
|<div style="color:steelblue">subType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|子类型(京: 01-借记卡 02-信用卡 1-白条 2-余额 5-小金库 8-白条分期)|
|<div style="color:steelblue">serviceRate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(15)|手续费率|
|<div style="color:steelblue">payName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|支付名称|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|状态|
|<div style="color:steelblue">truncType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|小数位保留方:1-trunc,2-round|

----

