
### ***fdTradeOrderMainDiffer***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">downFirstFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异面值(上下游扣款有时间差异时造成，下扣、下退、上扣、上退)|
|<div style="color:steelblue">downFirstAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异金额|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游渠道支付账户编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">differId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|记录生成日期|
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|

----


### ***zTest***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">a10|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">a7|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">a8|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">a2|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">a11|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">a14|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">a5|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">a15|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">a4|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">a6|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">a1|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">a12|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">a9|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">a3|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">a13|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||

----


### ***fdB2eBankReceiveRecord***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记录编号|
|<div style="color:steelblue">bankAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|银行账户|
|<div style="color:steelblue">taskId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|任务编号|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">receiveTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|收款时间|
|<div style="color:steelblue">receiveNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行外部收款编号|
|<div style="color:steelblue">bankSvrSeq|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行交易流水号|
|<div style="color:steelblue">bankCertNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行凭证号|
|<div style="color:steelblue">receiveAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|银行收款金额|
|<div style="color:steelblue">tradeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|交易类型 :支 2：收|
|<div style="color:steelblue">clientCardNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|客户银行账号|
|<div style="color:steelblue">clientCompanyName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|客户公司名称|
|<div style="color:steelblue">clientBankName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|客户开户银行|
|<div style="color:steelblue">clientAreaCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|客户地区编码|
|<div style="color:steelblue">clientBankAddress|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|客户开户银行地址|
|<div style="color:steelblue">matchType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|匹配渠道方式,1系统自动匹配，2人工匹配|
|<div style="color:steelblue">dealStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|交易处理状态：0完成，1未开始，2等待，3正在， 9无需处理|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|渠道账户编号|
|<div style="color:steelblue">channalType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|渠道类型,1上游渠道、2下游渠道 、9无|
|<div style="color:steelblue">receiveType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|交易处理类:1.下游渠道加款，2.上游渠道返佣，3.收取押金，4.收取保证金，5.收取手续费 99无需处理|
|<div style="color:steelblue">sysFundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|内部资金变动编号|
|<div style="color:steelblue">bankRemark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|银行摘要|
|<div style="color:steelblue">dealUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|处理人|
|<div style="color:steelblue">dealTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|处理时间|
|<div style="color:steelblue">dealMemo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|处理备注|
|<div style="color:steelblue">sysFlowId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|系统流水号|
|<div style="color:steelblue">applyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游加款申请id编号（处理结束后添加）|

----


### ***fdB2ePaymentRecordMain***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记录编号|
|<div style="color:steelblue">bankId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|出账银行编号（fd_b2e_bank_payment_account.bank_account_id）|
|<div style="color:steelblue">bankAddTypeId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|银行卡转账(fd_b2e_bank_payment_account.id)|
|<div style="color:steelblue">paymentType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|转账类:1.上游渠道加款，2.下游渠道返佣，3.支付押金，4.支付保证金|
|<div style="color:steelblue">bankCardNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|付款银行账户|
|<div style="color:steelblue">bankCardName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|付款账户名称|
|<div style="color:steelblue">recvType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|收款方类型,1上游、2下游、3其它|
|<div style="color:steelblue">channalNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|渠道账户编号|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">totalAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|总付款金额|
|<div style="color:steelblue">totalServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|总需支付的手续费|
|<div style="color:steelblue">whiteListId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|白名单编号|
|<div style="color:steelblue">clientReceiveCardNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|客户收款银行卡编号|
|<div style="color:steelblue">subRecordCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|子记录总条数|
|<div style="color:steelblue">intSubAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|前N-1笔转账金额的单笔金额（(SUB_RECORD_COUNT-1)*INT_SUB_AMOUNT+LAST_SUB_AMOUNT）=TOTAL_AMOUNT|
|<div style="color:steelblue">lastSubAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|最后一笔金额（余数）|
|<div style="color:steelblue">intSubServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|前N-1笔手续费的单笔手续费|
|<div style="color:steelblue">lastSubServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|最后一笔的手续费|
|<div style="color:steelblue">submitSuccessAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|提交成功金额|
|<div style="color:steelblue">arrivalSuccessAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|成功到账金额|
|<div style="color:steelblue">arrivalServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|成功到账的手续费|
|<div style="color:steelblue">expireTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|过期时间|
|<div style="color:steelblue">paymentAuditType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|转账金额审核类型 :运营审核  2：财务审核|
|<div style="color:steelblue">paymentAuditStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|转账金额审核状态，1未开始,2等待执行,3正在执行,0执行完成 9取消|
|<div style="color:steelblue">paymentAuditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|转账金额审核操作人|
|<div style="color:steelblue">paymentAuditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|转账金额审核操作时间|
|<div style="color:steelblue">receivedAuditStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|到账审核状态1未开始,2等待执行,3正在执行,0执行完成 9无需处理|
|<div style="color:steelblue">receivedAuditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|到账审核人|
|<div style="color:steelblue">receivedAuditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|到账审核时间|
|<div style="color:steelblue">receivedAuditMemo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|到账审核备注|
|<div style="color:steelblue">receivedSuccessAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|已录入系统的支付金额|
|<div style="color:steelblue">receivedSuccessServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|已录入系统的支付手续费|
|<div style="color:steelblue">createType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|1.系统自动创建，2.操作员手工添加|
|<div style="color:steelblue">addMemo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|添加转账记录备注|

----


### ***fdB2eBankPaymentAccount***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">bankAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|加款银行账户|
|<div style="color:steelblue">bankType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|银行类型（民生，中信）|
|<div style="color:steelblue">bankPaymentType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|付款方式，1代付，2、工作日小额网银，3大额网银|
|<div style="color:steelblue">workDayType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|工作日分类(工作日，非工作日，所有)|
|<div style="color:steelblue">arrivalSuccessTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|到账时间（分钟），0分钟、30分钟......|
|<div style="color:steelblue">useStartTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|开始使用时间hh24miss|
|<div style="color:steelblue">useEndTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|结束使用时间hh24miss|
|<div style="color:steelblue">maxAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|单笔最大金额|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态，0启用，1禁用|
|<div style="color:steelblue">sortId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|使用顺序编号|
|<div style="color:steelblue">rcvCardType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|收款账户类型：0通用,:对公；:对私|
|<div style="color:steelblue">isSameBank|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否跨行：0通用,1同行,2跨行|

----


### ***fdReportChannelHalfhour***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记录编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道类型（1.上游，2下游）|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|系统编号|
|<div style="color:steelblue">tradeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易条数|
|<div style="color:steelblue">tradeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易金额|
|<div style="color:steelblue">collectTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|半小时统计开始时间|

----


### ***fdB2eUpForecast***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">startTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|预测开始时间|
|<div style="color:steelblue">endTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|预测结束时间|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道|
|<div style="color:steelblue">forecastAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|预测交易量|
|<div style="color:steelblue">realAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际交易量|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|备注|

----


### ***fdB2eDownWhiteList***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道|
|<div style="color:steelblue">channelAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|渠道账户编号|
|<div style="color:steelblue">bankHolderName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|持卡人姓名|
|<div style="color:steelblue">downHolderCardNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行卡卡号|
|<div style="color:steelblue">accountBankName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|开户行名称|
|<div style="color:steelblue">accountBankAddress|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|开户行地址|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">auditStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|审核状态|
|<div style="color:steelblue">auditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|审核时间|
|<div style="color:steelblue">bankType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(10)|银行类型|

----


### ***fdReportCapitalUseRate***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记录编号|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|记录日期|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|渠道所属公司|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|支付账户|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账户名称|
|<div style="color:steelblue">channelStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道状态|
|<div style="color:steelblue">capitalClass|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道资金分类：1.普通话费、2.普通流量、3.特殊话费、4.特殊流量、0.其他渠道|
|<div style="color:steelblue">accountBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计时账户余额，早上8点统计|
|<div style="color:steelblue">yesterdayDraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|昨天交易量|
|<div style="color:steelblue">befYesterdayDraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|前天交易量|
|<div style="color:steelblue">threeDaysAgoDraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|大前天交易量|
|<div style="color:steelblue">averageDraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|最近三天平均交易量|
|<div style="color:steelblue">noDrawDays|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|累计无交易天数（余额小于1000且无交易的清零）|
|<div style="color:steelblue">syncStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|同步状态，0、同步完成，1等待同步，2正在同步|
|<div style="color:steelblue">syncBatch|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|同步批次号|

----


### ***fdB2eBankErrorCode***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|银行子账户|
|<div style="color:steelblue">bankType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|银行类型|
|<div style="color:steelblue">errCodeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|错误码类型|
|<div style="color:steelblue">errCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|错误码|
|<div style="color:steelblue">dealCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|处理码，success、fail、unkown|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态，0启用，1禁用|

----


### ***fdB2eBankPaymentService***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">bankType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|银行类型|
|<div style="color:steelblue">paymentType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|加款方式|
|<div style="color:steelblue">minAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|收取下限金额|
|<div style="color:steelblue">maxAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|收取上限金额|
|<div style="color:steelblue">singleAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|单笔收取手续费金额（和折扣配合使用）|
|<div style="color:steelblue">discount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|单笔收取手续费折扣（和金额配合使用）|
|<div style="color:steelblue">maxServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|最大手续费(计算的手续费不能超过该值)|

----


### ***fdB2eBankWorkDate***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">configId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|配置编号|
|<div style="color:steelblue">workDayType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|时间类型|
|<div style="color:steelblue">configDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|配置日期|

----


### ***fdB2eBankAccountApiConfig***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">configId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|配置编号|
|<div style="color:steelblue">bankAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|银行账户编号|
|<div style="color:steelblue">tokenKey|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|签名key|
|<div style="color:steelblue">receiveQueryMq|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游收款查询mq|
|<div style="color:steelblue">addMq|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游加款mq|
|<div style="color:steelblue">addQueryMq|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游加款查询mq|
|<div style="color:steelblue">bankBalanceMq|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行余额查询mq|
|<div style="color:steelblue">merchantNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|客户账户编号,对应client_id|
|<div style="color:steelblue">merchantPassword|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|客户账户密码|
|<div style="color:steelblue">userNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|用户登录账户,对应user_id|
|<div style="color:steelblue">userPassword|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|登录密码,对应user_pswd|
|<div style="color:steelblue">currencyCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易货币种类|
|<div style="color:steelblue">language|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|接口编码语言|
|<div style="color:steelblue">appId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|应用程序编码|
|<div style="color:steelblue">appVer|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|应用程序版本|
|<div style="color:steelblue">bankAddMq|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游银企直连加款mq|
|<div style="color:steelblue">bankAddQueryMq|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游银企直联加款查询mq|
|<div style="color:steelblue">proxyMerchantNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|代付商户编号|
|<div style="color:steelblue">proxyMerchantPwd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|代付商户密码|
|<div style="color:steelblue">proxyPriMerchantNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|代付对私商户编号|
|<div style="color:steelblue">proxyPriMerchantPwd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|代付对私商户密码|

----


### ***fdB2eBankQueryRecord***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">bankAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|银行账户编号|
|<div style="color:steelblue">cardNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行卡号|
|<div style="color:steelblue">bankAccName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行账户名称|
|<div style="color:steelblue">bankType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|银行类型|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|查询余额|
|<div style="color:steelblue">queryTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|查询时间|

----


### ***fdTradeOrderMainUn***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款账号|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游公司编号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展订单号交易系统供|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单添加时间|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">totalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(18)|总面值|
|<div style="color:steelblue">downOrderAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游销售金额|
|<div style="color:steelblue">upPhoneAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游手机成本|
|<div style="color:steelblue">upBillAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游预存话费成本|
|<div style="color:steelblue">downOrderRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游销售退款|
|<div style="color:steelblue">upPhoneRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游手机成本退款|
|<div style="color:steelblue">upBillRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游预存话费成本退款|
|<div style="color:steelblue">userId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|用户id|
|<div style="color:steelblue">phoneNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|合约机号码|
|<div style="color:steelblue">userName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|用户姓名|
|<div style="color:steelblue">idCardNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|用户身份证号|
|<div style="color:steelblue">recAddress|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|用户收货地址|
|<div style="color:steelblue">saleUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|销售客服|
|<div style="color:steelblue">hasInvoice|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|是否开票，0.已开，1未开|

----


### ***fdTradeDownFundHs***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款退款时产生的手续费|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变更类型   :加款 2：交易扣款 3：交易退款|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游支付账号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|扩展订单号交易系统供|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动创建时间|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|

----


### ***fdTradeOrderMainHs***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款账号|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游公司编号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展订单号交易系统供|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单添加时间|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|城市|
|<div style="color:steelblue">totalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(18)|总面值|
|<div style="color:steelblue">rechargeUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(18)|充值总量|
|<div style="color:steelblue">rechargeAccountNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|充值号码|
|<div style="color:steelblue">hasUpTrade|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|是否产生上游扣款 0.已产生 1.未产生|
|<div style="color:steelblue">downOrderAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游扣款金额|

----


### ***fdTradeUpFundHs***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|订单来源（系统编号）|
|<div style="color:steelblue">tradeDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统发货号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游所属公司|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">upAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游账户|
|<div style="color:steelblue">upCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游所属公司|
|<div style="color:steelblue">downDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游充值量|
|<div style="color:steelblue">downDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款面值|
|<div style="color:steelblue">downDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款金额|
|<div style="color:steelblue">downRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游实际金额|
|<div style="color:steelblue">upDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游充值量|
|<div style="color:steelblue">upDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游成功面值|
|<div style="color:steelblue">upDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款金额|
|<div style="color:steelblue">upRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游实际金额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变更类型 :加款 2：交易扣款 3：交易退款|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|利润类:前向2-后向|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">profits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润|
|<div style="color:steelblue">downCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游后返佣金|
|<div style="color:steelblue">upCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游后返佣金|
|<div style="color:steelblue">settleAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|结算金额|
|<div style="color:steelblue">settleBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|结算批次号|
|<div style="color:steelblue">settleStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(10)|结算状:20-等待结算,0-结算成功,10-无需结算|
|<div style="color:steelblue">settleTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|结算时间|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">downServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游手续费|
|<div style="color:steelblue">upServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游手续费|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|
|<div style="color:steelblue">splitProfitStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|是否分配利润，0已分配|
|<div style="color:steelblue">outChangeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|外部系统资金变动时间|

----


### ***fdBaseCompanyAccountImp***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账号名称|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司账户|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额(手续费为负债)|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|

----


### ***fdBaseDownImpMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">mapId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|倒款账号编号|

----


### ***fdTradeCoImpFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">changeId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司资产账户编号|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类型1加款2减款3红冲（负值）|
|<div style="color:steelblue">useType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|使用类型1.下游加款2.支付宝倒款3.财富通倒款99其他|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">bankBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|实体卡变动批次号处理号（记录转账的出账、入账、手续费）|
|<div style="color:steelblue">partnerAccount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|倒款的来源账号或加款的渠道编号|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***fdReportServiceFee***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">reportMonth|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|手续费月份|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|手续费|
|<div style="color:steelblue">lastMonth|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|补录月份|
|<div style="color:steelblue">lastMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|补录说明|
|<div style="color:steelblue">lastServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|补录金额|

----


### ***fdBaseUpAccountSync***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">needSyncAdd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否需要同步加款、提款到18系统|

----


### ***fdBaseCompanySettleNew***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">configId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|配置编号|
|<div style="color:steelblue">profitCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|获取利润公司编号|
|<div style="color:steelblue">relatedCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|对应公司编号|
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|统计类型，1.流量数据包，2前向流量充值，3话费、固话，4.加油卡充值，5.Q币、游戏币|
|<div style="color:steelblue">profitCost|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润折扣|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">lastUpdateTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">lastUpdateUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|

----


### ***fdBankAccountInfo***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">isB2e|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否为银企直联账户|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账户省份编号|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账户城市编号|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|查询余额|
|<div style="color:steelblue">queryTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|余额查询时间|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">title|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|标题|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账号名称|
|<div style="color:steelblue">cardNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账户卡号|
|<div style="color:steelblue">bankType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|银行类型-1.其它0.财付通1.支付宝2.移动钱包3.19E钱包4.银行账户5.北京银行6.建设银行7.京东8.民生银行9.联通迷你10.交通银行11.财付通企业|
|<div style="color:steelblue">assetType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|1.银行卡 0. 三方平台|
|<div style="color:steelblue">bankAddress|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|开户行|
|<div style="color:steelblue">isUseAddAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否用于加款|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***fdBankCashFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账号编号|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|时间|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|1-加款,2-减款,3-红冲|
|<div style="color:steelblue">useType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|用途1.上游加款2.下游加款3.转账4.上游佣金结算5.下游佣金结算6.利润提取7.收卡结算,8-手续费,9运营投入,10押金,11保证金,12短期借债99.其他|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否冲正过|
|<div style="color:steelblue">linkChannelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|关联渠道|
|<div style="color:steelblue">linkAccountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|关联账号|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">serviceId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|流水号记录编号(标记同一操作的几条数据)|
|<div style="color:steelblue">recordNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|外部记录编号，同步时避免重复|
|<div style="color:steelblue">remarkName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|收（付）款账户名称|

----


### ***fdBankReportSnap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">snapId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|银行卡账户|
|<div style="color:steelblue">useType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|用途编号|
|<div style="color:steelblue">startBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|期初余额|
|<div style="color:steelblue">endBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|期末余额|
|<div style="color:steelblue">collectionFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|本日代收|
|<div style="color:steelblue">payFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|本日代付|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|快照时间|

----


### ***fdBankZeroBalance***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">reportTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|报表时间|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡编号|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|理论余额|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|查询余额|

----


### ***fdBaseBusinessLine***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">businessId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">businessName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|业务线名称|

----


### ***fdBaseChannelBusinessMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">mapId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">businessId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|业务线|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|

----


### ***fdBaseCompanyAccountRecv***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账户名称|
|<div style="color:steelblue">oweCompany|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|欠款公司|
|<div style="color:steelblue">recvCompany|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|收款公司|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|描述|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态:启用:禁用|
|<div style="color:steelblue">lastUpdateTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">lastUpdateUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|最后更新人|

----


### ***fdBaseCompanyInfo***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">companyName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|公司名称|
|<div style="color:steelblue">initInputAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|初始投入资金|
|<div style="color:steelblue">sortName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|简称|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|:有效，1无效|

----


### ***fdBaseDownAccountMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">mapId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账号编号|
|<div style="color:steelblue">isMainChannel|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否主关系|

----


### ***fdBaseDownChannel***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(10)|手续费率|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">commiBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金余额|
|<div style="color:steelblue">warnBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|报警余额|
|<div style="color:steelblue">warnType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|报警类:1.单个支付账户不足   2.合计支付账户不足|
|<div style="color:steelblue">commiRule|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|佣金规则|
|<div style="color:steelblue">needCommi|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否需要后返佣金0需要，1不需要|
|<div style="color:steelblue">manageUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|开发/商务/运营|
|<div style="color:steelblue">channelCompany|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|渠道公司名称|
|<div style="color:steelblue">autoAdd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|自动加款，0：开启，1：关闭|
|<div style="color:steelblue">autoAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|自动加款金额|
|<div style="color:steelblue">autoAddOnTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|自动加款开启时间|

----


### ***fdBaseDownSystemMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">mapId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|

----


### ***fdBaseSourceSystem***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">sourceSystemName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|系统名称|
|<div style="color:steelblue">text|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|显示名称|

----


### ***fdBaseUpAccount***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账号名称|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|账户类型（1.系统账户2.支付账户）|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|查询余额|
|<div style="color:steelblue">innerBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|理论余额|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">isAutoAdd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否自动加款|

----


### ***fdBaseUpAccountMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">mapId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|支付账号编号|
|<div style="color:steelblue">isMainChannel|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否主关系|

----


### ***fdBaseUpChannel***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(10)|手续费率|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">commiBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金余额|
|<div style="color:steelblue">warnBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|报警余额|
|<div style="color:steelblue">warnType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|报警类:1.单个支付账户不足   2.合计支付账户不足|
|<div style="color:steelblue">maxAdd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|加款上限提示值|
|<div style="color:steelblue">minAdd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|加款下限提示值|
|<div style="color:steelblue">commiRule|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|佣金规则|
|<div style="color:steelblue">needCommi|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否需要后返佣金0需要，1不需要|
|<div style="color:steelblue">classification|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道分类--对应业务类型|
|<div style="color:steelblue">capitalClass|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道资金分类：1.普通话费、2.普通流量、3.特殊话费、4.特殊流量、0.其他渠道|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|开票类:1前向2-后向|
|<div style="color:steelblue">manageUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|开发/商务/运营|
|<div style="color:steelblue">canAdd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|允许加款（0允许，1禁止）|
|<div style="color:steelblue">channelCompany|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|渠道公司名称|

----


### ***fdBaseUpSystemMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">mapId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|

----


### ***fdReportDownDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">reportTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|报表时间|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|利润类:1-前向2-后向|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">orderCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单数量|
|<div style="color:steelblue">tradeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易面值|
|<div style="color:steelblue">tradeUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易数量|
|<div style="color:steelblue">costFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|扣款金额|
|<div style="color:steelblue">realFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际扣款|
|<div style="color:steelblue">refundFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款面值|
|<div style="color:steelblue">refundUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款数量(M)|
|<div style="color:steelblue">refundFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款金额|
|<div style="color:steelblue">refundReal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际退款|

----


### ***fdReportUpDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">reportTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|报表时间|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|利润类:1-前向2-后向|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">orderCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单数量|
|<div style="color:steelblue">tradeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易面值|
|<div style="color:steelblue">tradeUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易数量|
|<div style="color:steelblue">costFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|成本金额|
|<div style="color:steelblue">realFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际扣款|
|<div style="color:steelblue">refundFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款面值|
|<div style="color:steelblue">refundUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款数量(M)|
|<div style="color:steelblue">refundFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款金额|
|<div style="color:steelblue">refundReal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际退款|

----


### ***fdReprotChannelSnap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">snapId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道类型|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|利润类:1-前向2-后向|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">realCostFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际账户扣款|
|<div style="color:steelblue">orderCostFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下单扣款|
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|加款金额|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|渠道余额|
|<div style="color:steelblue">snapDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|快照日期|

----


### ***fdTradeCoRecvFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">changeId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司资金账户编号|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类型1加款2扣款3退款|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">bankBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|实体卡变动批次号处理号（记录转账的出账、入账、手续费）|
|<div style="color:steelblue">handleUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|操作人（结算加款时记录）|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***fdTradeDownFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游支付账号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展订单号交易系统供|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动创建时间|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变更类型  :加款 2：交易扣款 3：交易退款  : 提款|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款退款时产生的手续费|

----


### ***fdTradeDownRefund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户编号|
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">tradeRefundNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统退款号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">refundTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|退款创建时间|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">refundUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款总量|
|<div style="color:steelblue">refundFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款面值|
|<div style="color:steelblue">refundAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款金额|
|<div style="color:steelblue">realRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际金额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">hasSynUp|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|是否同步上游 0.已同步 1.未同步|

----


### ***fdTradeOrderMain***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款账号|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游公司编号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展订单号交易系统供|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单添加时间|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|城市|
|<div style="color:steelblue">totalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(18)|总面值|
|<div style="color:steelblue">rechargeUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(18)|充值总量|
|<div style="color:steelblue">rechargeAccountNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|充值号码|
|<div style="color:steelblue">hasUpTrade|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|是否产生上游扣款 0.已产生 1.未产生|
|<div style="color:steelblue">downOrderAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游扣款金额|

----


### ***fdTradeUpRefund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统订单号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">tradeDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统发货编号|
|<div style="color:steelblue">tradeRefundNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统退款编号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|订单来源（系统编号）|
|<div style="color:steelblue">refundTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|退款时间|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|利润类:1-前向2-后向|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">refundUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款总量|
|<div style="color:steelblue">refundFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款面值|
|<div style="color:steelblue">refundAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款金额|
|<div style="color:steelblue">realRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际金额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***fdTradeUpManual***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号(如果add_type为3,该列不允许为空)|
|<div style="color:steelblue">manualChangeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类:11-加款+ 12-红冲-  21-扣款平帐加+  22-扣款平帐减-   31-退款平帐加+  32-退款平帐减- 41-余额平帐加+  42-余额平帐减-|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">partnerAccount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|合作方银行账户|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">bankFundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|实体卡资金变动编号id,方便红冲|
|<div style="color:steelblue">serviceId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|收取手续费的记录的编号|
|<div style="color:steelblue">extRecordNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|上游加款外部订单号|
|<div style="color:steelblue">realAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|交易平账真实金额|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额,只有红冲的时候为负数|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">upSyncAddNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|上游同步加款加款记录编号|

----


### ***fdSystemLog***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">logId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|日志流水号|
|<div style="color:steelblue">objectName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|对象名称|
|<div style="color:steelblue">errorCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|错误码|
|<div style="color:steelblue">errorDesc|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|错误信息|
|<div style="color:steelblue">manualDesc|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|人工描述|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|发生时间|
|<div style="color:steelblue">trace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|异常跟踪|
|<div style="color:steelblue">errorLevel|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|错误级别|

----


### ***fdSystemDictionary***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">value|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|枚举项的值|
|<div style="color:steelblue">description|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|枚举项的描述[即显示信息]|
|<div style="color:steelblue">belongEnum|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|所属枚举|
|<div style="color:steelblue">sortId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|枚举内的排序|
|<div style="color:steelblue">groupId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|分组|
|<div style="color:steelblue">belongSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|所属系统|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态0启用1禁用|

----


### ***fdSystemCantonInfo***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">cantonCode|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|区域编号|
|<div style="color:steelblue">chineseName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|中文名称|
|<div style="color:steelblue">spell|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|英文或全拼|
|<div style="color:steelblue">grade|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|行政级别|
|<div style="color:steelblue">parent|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|父级|
|<div style="color:steelblue">simpleSpell|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|简拼|
|<div style="color:steelblue">areaCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|区号|
|<div style="color:steelblue">standardCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(6)|标准行政编码|

----


### ***fdBaseDownAccount***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账号名称|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|查询余额|
|<div style="color:steelblue">innerBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|理论余额|
|<div style="color:steelblue">creditMoney|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|授信金额|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">isAutoAdd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否自动加款|

----


### ***fdBaseCompanySettleConfig***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">configId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|配置编号|
|<div style="color:steelblue">oweCompany|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|欠款公司|
|<div style="color:steelblue">recvCompany|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|收款公司|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|地市|
|<div style="color:steelblue">settleCost|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|结算折扣|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">lastUpdateTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">lastUpdateUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|

----


### ***fdTradeUpFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|订单来源（系统编号）|
|<div style="color:steelblue">tradeDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统发货号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游所属公司|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">upAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游账户|
|<div style="color:steelblue">upCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游所属公司|
|<div style="color:steelblue">downDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游充值量|
|<div style="color:steelblue">downDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款面值|
|<div style="color:steelblue">downDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款金额|
|<div style="color:steelblue">downRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游实际金额|
|<div style="color:steelblue">upDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游充值量|
|<div style="color:steelblue">upDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游成功面值|
|<div style="color:steelblue">upDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款金额|
|<div style="color:steelblue">upRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游实际金额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变更类型 :加款 2：交易扣款 3：交易退款|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|利润类:前向2-后向|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">profits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润|
|<div style="color:steelblue">downCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游后返佣金|
|<div style="color:steelblue">upCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游后返佣金|
|<div style="color:steelblue">settleAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|结算金额|
|<div style="color:steelblue">settleBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|结算批次号|
|<div style="color:steelblue">settleStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(10)|结算状:20-等待结算,0-结算成功,10-无需结算,90-结算失败|
|<div style="color:steelblue">settleTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|结算时间|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|
|<div style="color:steelblue">splitProfitStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|是否分配利润，0已分配,1正在分配|
|<div style="color:steelblue">outChangeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|外部系统资金变动时间|

----


### ***fdTradeDownManual***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">addType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类:11-加款+ 12-红冲-  21-扣款平帐加+  22-扣款平帐减-  31-退款平帐加+  32-退款平帐减- 41-余额平帐加+ 42-余额平帐减-|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额,只有红冲的时候为负数|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">bankFundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|银行资金变动编号(红冲时用)|
|<div style="color:steelblue">partnerAccount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|合作方银行账户|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">extRecordNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|外部加款记录编号|
|<div style="color:steelblue">serviceId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|收取手续费的记录的编号(渠道手续费)|
|<div style="color:steelblue">realAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|交易平账真实金额|

----


### ***fdBaseUpAccountBank***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键(对应上游账户主键)|
|<div style="color:steelblue">title|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|标题(区分银行卡用途)|
|<div style="color:steelblue">cardNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行卡卡号|
|<div style="color:steelblue">cardPwd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行卡密码|
|<div style="color:steelblue">cardHolder|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行卡持有人|
|<div style="color:steelblue">bankType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|银行类型|
|<div style="color:steelblue">bankName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行卡所属银行|
|<div style="color:steelblue">bankAddress|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|开户行|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">createBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|

----


### ***fdBaseCompanyAccountSelf***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账号名称|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司账户|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|账户类:1.汇款手续费账户2.下游已付佣金账户,3.上游已收佣金4.毛利已提账户|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额(手续费为负债)|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|

----


### ***fdTradeCoSelfFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">changeId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司独立资金账户编号|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类型1加款2减款3红冲|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额(手续费为负债)|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">bankBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|实体卡变动批次号处理号（记录转账的出账、入账、手续费）|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|

----


### ***fdBaseCompanyAccountCap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账号名称|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司账户|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|账户类:1.运营投入,2.押金账户,3.保证金账户4.预付费5.短期借贷6.个人借支7毛利账户8.转账退款账户,9.活动专用账户10.手工退款账户12.费用账户|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额(手续费为负债)|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">useType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|使用类型：1.投入账户（借支、短期为减），2.运营账户|

----


### ***fdTradeCoCapFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">changeId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司资产账户编号|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类型1加款2减款3红冲（负值）|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">bankBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|实体卡变动批次号处理号（记录转账的出账、入账、手续费）|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">recordNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|预付款同步编号,转账退款18退款编号|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|转账退款订单号|
|<div style="color:steelblue">transferRefundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|转账退款退款编号|
|<div style="color:steelblue">transferDrawId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|转账退款退款提款编号|

----


### ***fdReportCommissionDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道类型1.上游2．下游|
|<div style="color:steelblue">commission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|快照时间|

----


### ***fdReportCommissionMonthly***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道类型1.上游2．下游|
|<div style="color:steelblue">totalCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金|
|<div style="color:steelblue">drawCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|提取或支付佣金|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|月份|

----


### ***fdReportProfitDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|利润类:1-前向2-后向|
|<div style="color:steelblue">rechargeFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|充值金额|
|<div style="color:steelblue">downRefundFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游退款|
|<div style="color:steelblue">upCostFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款|
|<div style="color:steelblue">upRefundFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游退款|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|手续费|
|<div style="color:steelblue">profits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|快照时间|

----


### ***fdReportProfitMonthly***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|利润类:1-前向2-后向|
|<div style="color:steelblue">rechargeFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|充值金额|
|<div style="color:steelblue">downRefundFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游退款|
|<div style="color:steelblue">upCostFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款|
|<div style="color:steelblue">upRefundFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游退款|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|手续费|
|<div style="color:steelblue">totalProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|总利润|
|<div style="color:steelblue">drawProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|已提取利润|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|月份|

----


### ***fdTradeProfitDraw***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">reportId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">profit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|提取利润|
|<div style="color:steelblue">drawMonth|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|利润的月份|
|<div style="color:steelblue">drawBillType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|利润类:1-前向2-后向|
|<div style="color:steelblue">drawStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|提取状态|
|<div style="color:steelblue">drawUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|提取人|
|<div style="color:steelblue">drawTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|提取时间|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">bankFundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|红冲对应实体卡变动记录编号|

----


### ***fdTradeCommissionSettle***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">reportId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道类型|
|<div style="color:steelblue">commission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金|
|<div style="color:steelblue">settleMonth|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|佣金的月份|
|<div style="color:steelblue">settleStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|结算状态|
|<div style="color:steelblue">settleUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|结算人|
|<div style="color:steelblue">settleTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|结算时间|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|是否红冲过|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">bankBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|红冲对应实体卡变动记录编号|
|<div style="color:steelblue">settleType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|结算类型：1佣金结算，2转渠道余额  3.佣金加款|
|<div style="color:steelblue">commiBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***fdTradeProfitFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">fundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键（利润任务相同）|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|月报表编号|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|利润类:1-前向2-后向|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|月份|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|变动类型（11总利润加款12总利润平账加款13总利润平账减款21提取利润加款22提取利润红冲）|
|<div style="color:steelblue">dealCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(10)|总利润加款统计条数|
|<div style="color:steelblue">totalProfitsFund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|总利润变动金额|
|<div style="color:steelblue">drawProfitsFund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|已提取利润变动金额|
|<div style="color:steelblue">totalProfitsBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|总利润余额|
|<div style="color:steelblue">drawProfitsBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|已提取利润余额|
|<div style="color:steelblue">coProfitsBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司利润余额|
|<div style="color:steelblue">changeDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|

----


### ***fdReportBankDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡账号编号|
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|加款金额|
|<div style="color:steelblue">minusAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|减款金额|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|日期|

----


### ***fdSystemHandleLog***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">logId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">handleModule|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|操作功能模块|
|<div style="color:steelblue">handleUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|操作人|
|<div style="color:steelblue">handleTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|操作时间|
|<div style="color:steelblue">handleParams|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|参数|

----


### ***fdTradeBaseJoin***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">joinCode1|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|关联字段1|
|<div style="color:steelblue">joinCode2|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|关联字段2|
|<div style="color:steelblue">joinMemo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|关联备注信息|
|<div style="color:steelblue">joinType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|关联类型 1.上游佣金关联，2下游佣金关联|

----


### ***fdReportCommiProfitDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|支付账户编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道类型1.上游2．下游|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|利润类型，1.前向，2后向|
|<div style="color:steelblue">totalUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|充值规格|
|<div style="color:steelblue">totalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|充值面值|
|<div style="color:steelblue">drawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|扣款金额|
|<div style="color:steelblue">realAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际金额|
|<div style="color:steelblue">commission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金|
|<div style="color:steelblue">profits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实时扣除佣金(手续费)|
|<div style="color:steelblue">refundTotalUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款规格|
|<div style="color:steelblue">refundTotalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款面值|
|<div style="color:steelblue">refundDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款金额|
|<div style="color:steelblue">refundRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际退款金额|
|<div style="color:steelblue">refundCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退回佣金|
|<div style="color:steelblue">refundProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退回利润|
|<div style="color:steelblue">refundServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退回实时扣除佣金（手续费）|
|<div style="color:steelblue">upManyFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游多冲的面值|
|<div style="color:steelblue">upManyAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游多冲的金额|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|快照时间(交易数据日期)|
|<div style="color:steelblue">addStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|账户加款状态 1.未开始，2.正在扣款，0.扣款完成，9.加款失败|
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|统计类型，1.流量数据包，2前向流量充值，3话费、固话，4.加油卡充值，5.Q币、游戏币|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|支付账户名称|
|<div style="color:steelblue">syncStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|同步诚实系统状态，0同步完成，1未进行同步，2正在同步，9同步失败|
|<div style="color:steelblue">syncBatch|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|数据同步批次号|
|<div style="color:steelblue">channelSourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|渠道所属系统编号|

----


### ***fdTradeDifferSummary***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|记录时间|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游支付账户编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">downFirstFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异面值(上下游扣款有时间差异时造成，下扣、下退、上扣、上退)|
|<div style="color:steelblue">downFirstAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异金额|

----


### ***fdTradeUpFundDiffer***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">differId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|记录创建的日期|
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游渠道支付账户编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|利润类型，1.前向，2后向|
|<div style="color:steelblue">downAdjustFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需调整的面值(下游退款造成上游面值比下游多时产生，下退)|
|<div style="color:steelblue">downAdjustUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需调整的规格|
|<div style="color:steelblue">downAdjustAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需调整的金额|
|<div style="color:steelblue">downAdjustReal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需调整的真实扣款|
|<div style="color:steelblue">upManyFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游多冲的面值(上游面值比下游面值多时产生，上扣、下退、上退)|
|<div style="color:steelblue">upManyAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游多冲的金额|
|<div style="color:steelblue">toFrontFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|需要由后向转前向的面值(上游退款时，退的多冲数据且与多冲前后向不一致时，后退前为正)|
|<div style="color:steelblue">toFrontUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|需要由后向转前向的规格|
|<div style="color:steelblue">toFrontAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|需要由后向转前向的金额|
|<div style="color:steelblue">toFrontReal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|需要由后向转前向的真实扣款|

----


### ***fdB2eBankMainCode***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">bankType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|银行类型(民生银行，中信银行)|
|<div style="color:steelblue">interfaceType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|接口分类|
|<div style="color:steelblue">recvBankType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|收款银行类型|
|<div style="color:steelblue">recvBankCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|收款银行对应主行号|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注信息|

----


### ***fdSystemDownProfitMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道|
|<div style="color:steelblue">profitRatio|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润分配给下游的比例|

----


### ***fdReportCapOffsetChannel***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|配置编号|
|<div style="color:steelblue">channelSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|渠道系统编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道类型，1上游渠道，2下游渠道|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|

----


### ***fdB2eBankZxyjCode***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">bankType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|银行类型|
|<div style="color:steelblue">bankGrade|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|银行等级，0总行，1省分行，2市分行|
|<div style="color:steelblue">cantonCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|地区编码|
|<div style="color:steelblue">bankCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行编码|
|<div style="color:steelblue">bankName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行名称|

----


### ***fdReportAddWarn***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">warnDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|报警时间|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">eightBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|八点余额|
|<div style="color:steelblue">yesterdayAdd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|昨日加款|
|<div style="color:steelblue">balanceRatio|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额占比|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|

----


### ***fdTradeDownManualYc***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">addType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类:11-加款+ 12-红冲-  21-扣款平帐加+  22-扣款平帐减-  31-退款平帐加+  32-退款平帐减- 41-余额平帐加+ 42-余额平帐减-|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额,只有红冲的时候为负数|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">bankFundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|银行资金变动编号(红冲时用)|
|<div style="color:steelblue">partnerAccount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|合作方银行账户|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">extRecordNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|外部加款记录编号|
|<div style="color:steelblue">serviceId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|收取手续费的记录的编号(渠道手续费)|
|<div style="color:steelblue">realAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|交易平账真实金额|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|云充记录业务类型|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|云充记录开票类型|
|<div style="color:steelblue">dealStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|合并平账状态，0已处理，1未处理，2正在处理|

----


### ***fdSystemBusinessStatisMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">localBusinessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统业务类型编号|
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|财务渠道分类|

----


### ***fdSystemWarn***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">warnId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|报警编号|
|<div style="color:steelblue">uniqId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|唯一标识|
|<div style="color:steelblue">warnLevel|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|等级|
|<div style="color:steelblue">warnType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|类型|
|<div style="color:steelblue">title|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|标题|
|<div style="color:steelblue">warnDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|报警时间|
|<div style="color:steelblue">content|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|报警内容|
|<div style="color:steelblue">syncStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|同步状态 0同步完成  1未同步 2正在同步|
|<div style="color:steelblue">keyWord|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|关键字|
|<div style="color:steelblue">syncBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|批次号|
|<div style="color:steelblue">systemNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||

----


### ***fdSystemBusinessInfo***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型编码|
|<div style="color:steelblue">businessTypeName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|业务类型名称|

----


### ***fdReportZeroBalance***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|报表时间|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|账户类型:上游渠道:下游渠道:银行账户:收款账户:资产账户:非资产账户:倒款账户|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|理论余额|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账户名称|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|查询余额|
|<div style="color:steelblue">channelStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道状态|
|<div style="color:steelblue">accountStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|账户状态|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司|
|<div style="color:steelblue">downFirstFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异面值（只有下游渠道记录）|
|<div style="color:steelblue">downFirstAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异金额（只有下游渠道记录）|
|<div style="color:steelblue">coAccountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|资产账户与非资产账户对应的账户类型|
|<div style="color:steelblue">syncStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|同步诚实系统状态，0同步完成，1未进行同步，2正在同步，9同步失败|
|<div style="color:steelblue">syncBatch|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|数据同步批次号|
|<div style="color:steelblue">channelSourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|渠道所属系统编号|
|<div style="color:steelblue">channelClassif|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|渠道分类（主要用于上游渠道）|
|<div style="color:steelblue">warnBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|上游渠道预警余额/下游渠道授信余额|

----


### ***fdBaseDownUpMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">mapId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道|

----


### ***fdB2eBankTask***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">taskId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|任务编号|
|<div style="color:steelblue">taskType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|任务类型|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记录编号（上游加款、上游加款查询）|
|<div style="color:steelblue">mqName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|任务mq标识|
|<div style="color:steelblue">taskStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|任务状态|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">content|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|任务参数|
|<div style="color:steelblue">batchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|批次号|
|<div style="color:steelblue">timeoutTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|超时时间|

----


### ***fdB2eBankPaymentCodeMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">bankPaymentType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|银行支付方式|
|<div style="color:steelblue">codeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|编码类型1.付款类，2付款结果查询|
|<div style="color:steelblue">code|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行接口编码|
|<div style="color:steelblue">remark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注说明|

----


### ***fdReportCommiProfitRedo***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|支付账户编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道类型1.上游2．下游|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|利润类型，1.前向，2后向|
|<div style="color:steelblue">totalUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|充值规格|
|<div style="color:steelblue">totalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|充值面值|
|<div style="color:steelblue">drawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|扣款金额|
|<div style="color:steelblue">realAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际金额|
|<div style="color:steelblue">commission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金|
|<div style="color:steelblue">profits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实时扣除佣金(手续费)|
|<div style="color:steelblue">refundTotalUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款规格|
|<div style="color:steelblue">refundTotalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款面值|
|<div style="color:steelblue">refundDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款金额|
|<div style="color:steelblue">refundRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际退款金额|
|<div style="color:steelblue">refundCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退回佣金|
|<div style="color:steelblue">refundProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退回利润|
|<div style="color:steelblue">refundServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退回实时扣除佣金（手续费）|
|<div style="color:steelblue">upManyFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游多冲的面值|
|<div style="color:steelblue">upManyAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游多冲的金额|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|快照时间(交易数据日期)|
|<div style="color:steelblue">addStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|账户加款状态 1.未开始，2.正在扣款，0.扣款完成，9.加款失败|
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|统计类型，1.流量数据包，2前向流量充值，3话费、固话，4.加油卡充值，5.Q币、游戏币|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|支付账户名称|
|<div style="color:steelblue">syncStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|同步诚实系统状态，0同步完成，1未进行同步，2正在同步，9同步失败|
|<div style="color:steelblue">syncBatch|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|数据同步批次号|
|<div style="color:steelblue">channelSourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|渠道所属系统编号|

----


### ***fdB2ePaymentRecordDetails***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记录编号|
|<div style="color:steelblue">mainRecordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|转账指令|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">clientCardNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|客户账户|
|<div style="color:steelblue">clientHolderName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|客户姓名|
|<div style="color:steelblue">isSameBank|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否跨行，0同行,1跨行|
|<div style="color:steelblue">totalAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|转账金额|
|<div style="color:steelblue">totalServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|总手续费|
|<div style="color:steelblue">clientCardType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|收款账户类型：:对公；:对私|
|<div style="color:steelblue">clientBankName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|收款人开户行名称|
|<div style="color:steelblue">clientBankAddr|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|收款人开户行地址|
|<div style="color:steelblue">clientBankCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|开户行行号|
|<div style="color:steelblue">clientAreaCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|收款行地区编号|
|<div style="color:steelblue">submitAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|提交金额|
|<div style="color:steelblue">arrivalAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|到账金额|
|<div style="color:steelblue">submitRemark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|提交摘要|
|<div style="color:steelblue">submitStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|加款状态1未开始,2等待执行,3正在执行 4 执行完成,0执行成功|
|<div style="color:steelblue">submitErrorCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|响应结果码|
|<div style="color:steelblue">submitDealCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|本地响应结果码|
|<div style="color:steelblue">submitErrorMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|提交返回信息|
|<div style="color:steelblue">bankServerId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|服务器响应成功返回的交易标识|
|<div style="color:steelblue">bankAccountBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|银行账户余额|
|<div style="color:steelblue">queryStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|查询状态1未开始,2等待执行,3正在执行,0执行完成|
|<div style="color:steelblue">queryTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|查询时间|
|<div style="color:steelblue">nextQueryTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|下次查询时间|
|<div style="color:steelblue">queryErrorCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|查询状态码|
|<div style="color:steelblue">queryDealCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|本地状态码|
|<div style="color:steelblue">queryErrorMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|查询结果信息|
|<div style="color:steelblue">manualMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|人工审核消息|
|<div style="color:steelblue">submitTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|提交时间|

----


### ***fdB2eUpWhiteList***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道|
|<div style="color:steelblue">channelAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|渠道账户编号|
|<div style="color:steelblue">bankHolderName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|持卡人姓名|
|<div style="color:steelblue">holderCardNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行账户(卡号)|
|<div style="color:steelblue">mainBankCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|开户行主行行号（网银互联用）|
|<div style="color:steelblue">branchBankCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|开户行支行行号（大小额用）|
|<div style="color:steelblue">bankType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|银行类型(民生银行，中信银行)|
|<div style="color:steelblue">rcvCardType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|收款账户类型：:对公；:对私|
|<div style="color:steelblue">accountBankName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|开户行名称(xxxx支行)|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账户省份编号|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|城市编号|
|<div style="color:steelblue">areaCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|收款行地区编号(?)|
|<div style="color:steelblue">auditStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|审核状态|
|<div style="color:steelblue">auditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|审核时间|
|<div style="color:steelblue">sortId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|白名单优先等级，越大越优先|
|<div style="color:steelblue">companyBank|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|白名单支持的银行（建行/中信/民生）|

----


### ***fdTradeRvApply***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">applyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|申请记录编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账户编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道类型，1上游，2下游|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|前后项信息|
|<div style="color:steelblue">differAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|差异金额|
|<div style="color:steelblue">differReason|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|差异原因|
|<div style="color:steelblue">differDetail|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|差异详情|
|<div style="color:steelblue">applyTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|申请时间|
|<div style="color:steelblue">applyUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|申请人|
|<div style="color:steelblue">applyStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|申请所处状态 1提交申请，9作废，0处理完成|
|<div style="color:steelblue">dealRvType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|处理平账类型，1交易平账，2余额平账|
|<div style="color:steelblue">dealBusinessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|处理业务类型|
|<div style="color:steelblue">dealBillType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|处理前后项信息|
|<div style="color:steelblue">dealTradeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|处理平账交易金额|
|<div style="color:steelblue">dealRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|处理平账真实金额|
|<div style="color:steelblue">dealTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|处理时间|
|<div style="color:steelblue">dealUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|处理人|
|<div style="color:steelblue">dealFlowId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|关联平账流水号|
|<div style="color:steelblue">dealMemo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|处理备注|

----


### ***fdB2eUpChannelConfig***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">typeId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|规则编号|
|<div style="color:steelblue">dateRangeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|时间范围类型0.高峰期，1正常时期|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道|
|<div style="color:steelblue">amountCalcType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|转账计算方法|
|<div style="color:steelblue">calcTypeMemo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|方法备注|
|<div style="color:steelblue">warnBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|预警余额|
|<div style="color:steelblue">maxChannelBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|最大渠道余额(加款后余额不能超过此余额)|
|<div style="color:steelblue">minAddAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|最小加款金额|
|<div style="color:steelblue">maxDayAddAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|最大单日加款金额|
|<div style="color:steelblue">addDurationHour|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|加款金额能持续扣款的小时数|
|<div style="color:steelblue">auditStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|审核状态|
|<div style="color:steelblue">channelAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|渠道账户|

----


### ***fdB2eSystemLog***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户名称|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账户名称|
|<div style="color:steelblue">lastFailTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|上次执行失败时间|
|<div style="color:steelblue">failReason|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|失败原因|

----


### ***fdSystemBusinessMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统id|
|<div style="color:steelblue">outerBusinessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|外部系统业务类型编号|
|<div style="color:steelblue">localBusinessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统业务类型编号|

----


### ***fdTradeActivityMain***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">channelAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游渠道账户编号|
|<div style="color:steelblue">activityName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|活动名称|
|<div style="color:steelblue">activityContent|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|活动内容|
|<div style="color:steelblue">activityInputAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|活动初始投入金额|
|<div style="color:steelblue">hasClosed|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|活动已近结束，0已经结束，1还未结束|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|活动创建时间|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|活动创建人|
|<div style="color:steelblue">closeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|活动结束时间|
|<div style="color:steelblue">closeUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|活动结束人|
|<div style="color:steelblue">activityType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|活动类型，1.预付活动，2.垫付活动|
|<div style="color:steelblue">activityReturnAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|活动回笼资金|

----


### ***fdTradeActivityDetails***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">activityId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|活动编号|
|<div style="color:steelblue">tradeRecordNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统记录编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统业务类型|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易类型，1前向，2后向|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|活动变动类型，1预付款，2增加后返利润，3减少后返利润|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">changeUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|变动人|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注信息|

----


### ***fdReportBalanceDiffer***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|账户类型：1、上游渠道账户，2、下游渠道账户|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">balanceDifference|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额差异|
|<div style="color:steelblue">noteTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|记录时间|
|<div style="color:steelblue">noteUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|记录人|

----


### ***fdTradeCoCapFundJfb***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">changeId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动编号，和fd_trade_co_cap_fund对应|
|<div style="color:steelblue">tradeMonth|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|积分交易月份|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易下游渠道|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易下游渠道账户|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">settleStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|开票结算状态 0.已结算，1等待结算，9无需结算|

----


### ***fdReportOutsysProfit***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|外部系统编号|
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|记录时间|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">profit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润数据|

----


### ***fdBaseCoAccountName***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|渠道账户编号|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">coAccountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|收付款账户名称|
|<div style="color:steelblue">coAccountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|账户类型：1：上游，2：下游,:公司间结算账户,:押金账户,:手续费账户,:佣金账户,:SUP上游,:sp账户，:收卡业务，10：权益管理|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|

----


### ***fdBankStreamFull***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">bankAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|银行账户编号|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|流水编号|
|<div style="color:steelblue">cardNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|己方银行账户|
|<div style="color:steelblue">bankType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|银行类型-1.其它0.财付通1.支付宝2.移动钱包3.19E钱包4.银行账户5.北京银行6.建设银行7.京东8.民生银行9.联通迷你10.交通银行11.财付通企业|
|<div style="color:steelblue">tranDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|交易时间|
|<div style="color:steelblue">tranNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|柜员交易号|
|<div style="color:steelblue">sumTranNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|总交易流水号|
|<div style="color:steelblue">tranAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易金额|
|<div style="color:steelblue">creditDebitFlag|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|借贷标识:借，C：贷|
|<div style="color:steelblue">oppAccountNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|对方账号|
|<div style="color:steelblue">oppAccountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|对方账户名称|
|<div style="color:steelblue">oppOpenBankName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|对方开户行名称|
|<div style="color:steelblue">abstract|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|附言|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">hostTranCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|主机交易码|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">cashTransferFlag|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|现转标识 0：现金；1：转帐|

----


### ***fdTradeDownAddApply***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">applyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|申请编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|渠道账户编号|
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|申请加款金额|
|<div style="color:steelblue">applyAccountNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|客户打款账号|
|<div style="color:steelblue">bankType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|银行类型-1.其它0.财付通1.支付宝2.移动钱包3.19E钱包4.银行账户5.北京银行6.建设银行7.京东8.民生银行9.联通迷你10.交通银行11.财付通企业|
|<div style="color:steelblue">applyAccountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|客户账户名称|
|<div style="color:steelblue">applyOpenBankName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|客户开户行名称|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|处理状态0：处理完成，10：未处理，20：处理中，90：处理失败|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|申请时间|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|申请人|
|<div style="color:steelblue">payTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|付款时间|
|<div style="color:steelblue">tranNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|柜员交易号（处理成功添加）|
|<div style="color:steelblue">handleTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|处理时间（处理后添加）|
|<div style="color:steelblue">errorMsg|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|错误消息（处理失败后添加）|
|<div style="color:steelblue">auditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|处理人|
|<div style="color:steelblue">flowStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|流水状态修改  0：已修改，10：未修改 ，20：修改中，90：失败|
|<div style="color:steelblue">auditMemo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|处理备注|
|<div style="color:steelblue">bankAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|收款银行id|
|<div style="color:steelblue">reciveTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|收款时间|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|加款申请备注|

----


### ***fdVReportSummaryMonth***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">realFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">refundDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upManyAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">refundTotalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">oneWaySeatProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">drawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">realDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">oneWayProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">totalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">realRechargeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelSourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">upManyFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||
|<div style="color:steelblue">endCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">totalUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">lastServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***fdVReportDownchannelDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">allAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downPay|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downIncomeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">allDown|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downPayAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downIncome|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">channelStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||

----


### ***fdVReportUpchannelDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelClassif|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">allUp|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upIncomeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upPay|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">allAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upPayAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||
|<div style="color:steelblue">upIncome|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||

----


### ***fdVReportProfitDaily2***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">platServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">profit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downDraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">lastProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upDraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***fdVReportProfitDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">platServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">profit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upDraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">downFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">lastProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downDraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***fdVReportSettleSummary***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">lastProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">oneWaySeatProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">realFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">refundDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">drawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upManyFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">totalUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">lastServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">realDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">totalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">oneWayProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelSourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">realRechargeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">endCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">refundTotalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upManyAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***fdVBaseBankChange***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">minusAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||

----


### ***fdVReportProfitMonth***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">upRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">downRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">platServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upDraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downDraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">profit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">lastProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">downFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***fdVReportTradeSummary***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">refundFistCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">faceAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">totalUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">realFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">drawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">lastDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||
|<div style="color:steelblue">refundTotalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">refundDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">lastProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">lastFirstCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">lastFaceAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">totalCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">lastServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">fistCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">refundFaceAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">endCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">totalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">upManyFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||

----


### ***fdVReportOperatingRate***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">upFeePay|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downAllPay|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">drawAll|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upAll|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upAllPay|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upFlowPay|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">upFlow|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">bankBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">drawFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downAllRate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">todayTradeRate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">upDownAllPay|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">opeBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">addAll|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">addFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upOtherPay|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">addFlow|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">addOther|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downAll|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">time|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">upFeeRate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">drawFlow|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upFlowRate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">companyid|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upOther|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">drawOther|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upOtherRate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">upDownAll|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***fdVReportBankDaily1***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">minusAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">startBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">endBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||

----


### ***fdVReportChannelDaily1***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">balanceDifference|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">beginBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">endBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">drawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***fdTradeTimeDiffer***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">downFirstFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">differId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">downFirstAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||

----


### ***fdVReportBankDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">endBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">minusAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">startBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***fdVReportProfitCompare***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">rvAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">systemName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">profitDiffer|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">jzProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">outProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||

----


### ***fdVReportChannelDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">balanceDifference|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">beginBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">drawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">warnBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">endBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***fdVReportSystemCap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">bond|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">profitUndraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">recvBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">deposit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">bankBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">shortBorrow|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">companyName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">initInputAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">borrow|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***fdReportZeroBalanceCs***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">downFirstFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">syncStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||
|<div style="color:steelblue">syncBatch|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">downFirstAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">channelStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">accountStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||

----


### ***fdVBaseChannelAdd***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||

----


### ***dkReportCommiProfitDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">refundTotalUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款规格|
|<div style="color:steelblue">refundTotalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款面值|
|<div style="color:steelblue">refundDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款金额|
|<div style="color:steelblue">refundRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际退款金额|
|<div style="color:steelblue">profits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实时扣除佣金(手续费)|
|<div style="color:steelblue">refundCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退回佣金|
|<div style="color:steelblue">refundProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退回利润|
|<div style="color:steelblue">refundServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退回实时扣除佣金（手续费）|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|快照时间(交易数据日期)|
|<div style="color:steelblue">addStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|账户加款状态 1.未开始，2.正在加款，0.加款完成，9.加款失败|
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|统计类型，7.代扣业务|
|<div style="color:steelblue">sysCost|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|系统垫付金额(垫付部分是作为系统成本计入的)|
|<div style="color:steelblue">syncStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|同步财务报表状态，0同步完成，1未进行同步，2正在同步，9同步失败|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|支付账户名称|
|<div style="color:steelblue">channelSourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|渠道所属系统编号|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|支付账户编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道类型1.上游2．下游|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|利润类型，1.前向，2后向|
|<div style="color:steelblue">totalUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|代扣规格|
|<div style="color:steelblue">totalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|代扣面值|
|<div style="color:steelblue">drawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|结算金额 负：千行欠下游/上游欠千行 金额|
|<div style="color:steelblue">realAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际结算的金额 负：欠下游金额|
|<div style="color:steelblue">commission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金|

----


### ***fdB2eBankReceiveAccount***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">cardNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|银行卡号[来:FD_BANK_ACCOUNT_INFO]|
|<div style="color:steelblue">cardName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|账户名称[来:FD_BANK_ACCOUNT_INFO]|
|<div style="color:steelblue">queryIntervalTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|查询间隔时间|
|<div style="color:steelblue">useType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|用途，下游收款 等|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|账户状态|
|<div style="color:steelblue">lastQueryTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|最后查询成功时间|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|银行账户编号[FD_BANK_ACCOUNT_INFO.account_id]|

----


### ***dkTradeDownFundHs***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">dkOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游支付账号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|扩展订单号交易系统供|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动创建时间|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变更类型 1-结算2-交易代扣3-交易撤销（old=> :加款 2：交易扣款 3：交易退款  : 提款)|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游代扣或交易撤销时产生的手续费|
|<div style="color:steelblue">tradeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|交易系统变动时间|

----


### ***dkTradeUpFundHs***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">dkOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|订单来源（系统编号）|
|<div style="color:steelblue">tradeDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统发货号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游所属公司|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">upAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游账户|
|<div style="color:steelblue">upCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游所属公司|
|<div style="color:steelblue">downDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游代扣规格|
|<div style="color:steelblue">downDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游代扣面值|
|<div style="color:steelblue">downDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游结算金额|
|<div style="color:steelblue">downRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游实际结算金额|
|<div style="color:steelblue">upDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游代扣规格|
|<div style="color:steelblue">upDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游成功代扣面值|
|<div style="color:steelblue">upDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游结算金额（结算给我们）|
|<div style="color:steelblue">upRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游实际结算金额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变更类型 :结算 2：交易代扣 3：交易撤销|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|利润类:前向2-后向|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">profits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润|
|<div style="color:steelblue">downCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游后返佣金|
|<div style="color:steelblue">upCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游后返佣金|
|<div style="color:steelblue">settleAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|结算金额|
|<div style="color:steelblue">settleBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|结算批次号|
|<div style="color:steelblue">settleStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(10)|结算状:20-等待结算,0-结算成功,10-无需结算|
|<div style="color:steelblue">settleTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|结算时间|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">downServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游手续费|
|<div style="color:steelblue">upServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游手续费|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|
|<div style="color:steelblue">tradeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|交易系统变动时间|
|<div style="color:steelblue">channelSettleStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道结算状态，0.成功，1.等待，2.正在，99.无需结算（sp数据）|
|<div style="color:steelblue">channelSettleBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|渠道结算批次号|
|<div style="color:steelblue">channelSettleTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|渠道结算时间|

----


### ***dkBaseDownSystemMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">mapId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|

----


### ***dkBaseUpSystemMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">mapId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|

----


### ***dkTradeOrderMainDiffer***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">differId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|记录生成日期|
|<div style="color:steelblue">dkOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游渠道支付账户编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">downFirstFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异面值(上下游扣款有时间差异时造成，下扣、下退、上扣、上退)|
|<div style="color:steelblue">downFirstAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异金额|

----


### ***dkTradeUpFundDiffer***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">differId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|记录创建的日期|
|<div style="color:steelblue">dkOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游渠道支付账户编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|利润类型，1.前向，2后向|
|<div style="color:steelblue">downAdjustFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需调整的面值(下游退款造成上游面值比下游多时产生，下退)|
|<div style="color:steelblue">downAdjustUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需调整的规格|
|<div style="color:steelblue">downAdjustAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需调整的金额|
|<div style="color:steelblue">downAdjustReal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需调整的真实扣款|
|<div style="color:steelblue">upManyFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游多冲的面值(上游面值比下游面值多时产生，上扣、下退、上退)|
|<div style="color:steelblue">upManyAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游多冲的金额|
|<div style="color:steelblue">toFrontFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|需要由后向转前向的面值(上游退款时，退的多冲数据且与多冲前后向不一致时，后退前为正)|
|<div style="color:steelblue">toFrontUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|需要由后向转前向的规格|
|<div style="color:steelblue">toFrontAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|需要由后向转前向的金额|
|<div style="color:steelblue">toFrontReal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|需要由后向转前向的真实扣款|

----


### ***dkTradeRefundSysCost***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|记录创建的日期|
|<div style="color:steelblue">dkOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游渠道支付账户编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">sysCost|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|垫付金额(元)|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|交易订单号|
|<div style="color:steelblue">tradeRefundNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|退款单号|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)||

----


### ***dkBaseDownChannel***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(10)|手续费率|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">commiBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金余额|
|<div style="color:steelblue">commiRule|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|佣金规则|
|<div style="color:steelblue">needCommi|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否需要后返佣金0需要，1不需要|
|<div style="color:steelblue">classification|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道分类--对应业务类型|
|<div style="color:steelblue">paymentType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|支付分类--1.预付，2.后付|
|<div style="color:steelblue">warnBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|报警余额|
|<div style="color:steelblue">warnType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|报警类:1.单个支付账户不足   2.合计支付账户不足|

----


### ***dkBaseUpChannel***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(10)|手续费率|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">commiBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金余额|
|<div style="color:steelblue">maxAdd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|结算上限提示值|
|<div style="color:steelblue">minAdd|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|结算下限提示值|
|<div style="color:steelblue">commiRule|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|佣金规则|
|<div style="color:steelblue">needCommi|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否需要后返佣金0需要，1不需要|
|<div style="color:steelblue">classification|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道分类--对应业务类型,1.sp代扣系统，2.sup收卡系统|
|<div style="color:steelblue">paymentType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|支付分类--1.预付，2.后付|
|<div style="color:steelblue">warnBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|报警余额|
|<div style="color:steelblue">warnType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|报警类:1.单个支付账户不足   2.合计支付账户不足|

----


### ***dkTradeDownFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">dkOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游支付账号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展订单号交易系统供|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动创建时间|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变更类型 1-结算2-交易代扣3-交易撤销（old=> :加款 2：交易扣款 3：交易退款  : 提款)|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游代扣或交易撤销时产生的手续费|
|<div style="color:steelblue">tradeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|交易系统变动时间|
|<div style="color:steelblue">tradeFundNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|交易系统资金变动编号（收卡用）|
|<div style="color:steelblue">isSkAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|是否为收卡二次结算数据|
|<div style="color:steelblue">channelSettleStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|渠道结算状态，0.成功，1.等待，2.正在，99.无需结算|
|<div style="color:steelblue">channelSettleBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|渠道结算批次号|
|<div style="color:steelblue">channelSettleTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|渠道结算时间|

----


### ***dkTradeUpFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">dkOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|订单来源（系统编号）|
|<div style="color:steelblue">tradeDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统发货号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游所属公司|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">upAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游账户|
|<div style="color:steelblue">upCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游所属公司|
|<div style="color:steelblue">downDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游代扣规格|
|<div style="color:steelblue">downDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游代扣面值|
|<div style="color:steelblue">downDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游结算金额|
|<div style="color:steelblue">downRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游实际结算金额|
|<div style="color:steelblue">upDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游代扣规格|
|<div style="color:steelblue">upDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游成功代扣面值|
|<div style="color:steelblue">upDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游结算金额（结算给我们）|
|<div style="color:steelblue">upRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游实际结算金额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变更类型 :结算 2：交易代扣 3：交易撤销|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|利润类:前向2-后向|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">profits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润|
|<div style="color:steelblue">downCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游后返佣金|
|<div style="color:steelblue">upCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游后返佣金|
|<div style="color:steelblue">settleAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|结算金额|
|<div style="color:steelblue">settleBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|结算批次号|
|<div style="color:steelblue">settleStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(10)|结算状:20-等待结算,0-结算成功,10-无需结算,90-结算失败|
|<div style="color:steelblue">settleTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|结算时间|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|
|<div style="color:steelblue">tradeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|交易系统变动时间|
|<div style="color:steelblue">channelSettleStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道结算状态，0.成功，1.等待，2.正在，99.无需结算|
|<div style="color:steelblue">channelSettleBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|渠道结算批次号|
|<div style="color:steelblue">channelSettleTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|渠道结算时间|

----


### ***dkBaseDownAccount***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账号名称|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|查询余额|
|<div style="color:steelblue">innerBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|理论余额|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|

----


### ***dkBaseUpAccount***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账号名称|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|账户类型（1.收款账户）|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|查询余额|
|<div style="color:steelblue">innerBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|理论余额|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|

----


### ***dkBaseDownAccountMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">mapId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|结算账号编号|
|<div style="color:steelblue">isMainChannel|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否主关系|

----


### ***dkBaseUpAccountMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">mapId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|结算账号编号|
|<div style="color:steelblue">isMainChannel|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否主关系|

----


### ***dkTradeDownRefund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户编号|
|<div style="color:steelblue">dkOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">tradeRefundNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统退款号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">refundTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|退款创建时间|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">refundUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款总量|
|<div style="color:steelblue">refundFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款面值|
|<div style="color:steelblue">refundAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款金额|
|<div style="color:steelblue">realRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际金额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***dkTradeUpRefund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">dkOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统订单号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">tradeDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统发货编号|
|<div style="color:steelblue">tradeRefundNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统退款编号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|订单来源（系统编号）|
|<div style="color:steelblue">refundTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|退款时间|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|利润类:1-前向2-后向|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">refundUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款总量|
|<div style="color:steelblue">refundFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款面值|
|<div style="color:steelblue">refundAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款金额|
|<div style="color:steelblue">realRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实际金额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***dkTradeDownSettle***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">addType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类:11-结算+ 12-红冲- 21-代扣平帐加+  22-代扣平帐减-  31-退款平帐加+  32-退款平帐减- 41-余额平帐加+ 42-余额平帐减-|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额,只有红冲的时候为负数|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">bankFundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|银行资金变动编号(红冲时用)|
|<div style="color:steelblue">partnerAccount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|合作方银行账户|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">extRecordNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|外部加款记录编号|
|<div style="color:steelblue">serviceId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|收取手续费的记录的编号(渠道手续费)|
|<div style="color:steelblue">realAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|交易平账真实金额|

----


### ***dkTradeUpSettle***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号(如果add_type为3,该列不允许为空|
|<div style="color:steelblue">manualChangeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类:11-结算+ 12-红冲-  21-代扣平帐加+  22-代扣平帐减- 31-退款平帐加+ 32-退款平帐减- 41-余额平帐加+  42-余额平帐减-|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额,只有红冲的时候为负数|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">partnerAccount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|合作方银行账户|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">bankFundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|实体卡资金变动编号id,方便红冲|
|<div style="color:steelblue">serviceId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|收取手续费的记录的编号|
|<div style="color:steelblue">extRecordNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|上游加款外部订单号|
|<div style="color:steelblue">realAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|交易平账真实金额|

----


### ***dkTradeOrderMain***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">dkOrderId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游结算账号|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游公司编号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展订单号交易系统供|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单添加时间|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|城市|
|<div style="color:steelblue">totalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(18)|代扣总面值|
|<div style="color:steelblue">rechargeUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(18)|代扣总量|
|<div style="color:steelblue">rechargeAccountNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|代扣号码|
|<div style="color:steelblue">hasUpTrade|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)|是否已产生上游结算 0.已产生 1.未产生|
|<div style="color:steelblue">downOrderAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游结算金额|
|<div style="color:steelblue">rechargeTimes|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|代扣次数|

----


### ***dkReportZeroBalance***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|报表时间|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|账户类型:上游渠道:下游渠道:银行账户:收款账户:资产账户:非资产账户:倒款账户|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|理论余额|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账户名称|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|查询余额|
|<div style="color:steelblue">channelStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道状态|
|<div style="color:steelblue">accountStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|账户状态|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司|
|<div style="color:steelblue">downFirstFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游与上游代扣的时间差造成的差异面值（只有下游渠道记录）|
|<div style="color:steelblue">downFirstAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游与上游代扣的时间差造成的差异金额（只有下游渠道记录）|
|<div style="color:steelblue">syncStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|同步财务报表状态，0同步完成，1未进行同步，2正在同步，9同步失败|
|<div style="color:steelblue">channelSourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|渠道所属系统编号|
|<div style="color:steelblue">channelClassif|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|渠道分类（主要用于上游渠道）|

----


### ***dkReprotChannelSettle***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记录编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道类型，1上游渠道，2下游渠道|
|<div style="color:steelblue">settleDataTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|结算数据日期|
|<div style="color:steelblue">settleBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|结算批次号|
|<div style="color:steelblue">settleAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|结算金额|
|<div style="color:steelblue">settleStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|结算状态，0完成，1等待，2正在，9无需结算|
|<div style="color:steelblue">settleDealId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|结算处理编号，红冲用|
|<div style="color:steelblue">settleUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|结算人|
|<div style="color:steelblue">settleTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|结算时间|
|<div style="color:steelblue">settleMemo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|结算备注|

----


### ***dkTradeCommissionSettle***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">reportId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道类型|
|<div style="color:steelblue">commission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金|
|<div style="color:steelblue">settleMonth|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|佣金的月份|
|<div style="color:steelblue">settleStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|结算状态|
|<div style="color:steelblue">settleUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|结算人|
|<div style="color:steelblue">settleTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|结算时间|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|是否红冲过|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">bankBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|红冲对应实体卡变动记录编号|
|<div style="color:steelblue">settleType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|结算类型：1佣金结算，2转渠道余额  3.佣金加款|
|<div style="color:steelblue">commiBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***dkVReportChannelDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">endBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">balanceDifference|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelSourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">beginBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">drawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||

----


### ***dkVReportProfitDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">downFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">profit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">sysCost|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">channelSourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">upDraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">platServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downDraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">lastProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***dkVReportSettleSummary***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">realDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">realFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelSourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">oneWaySeatProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">lastProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">realRechargeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">oneWayProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">refundDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">refundTotalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">endCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">lastServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">totalUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">totalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">drawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||

----


### ***dkVReportSummaryMonth***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">realDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">realRechargeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">totalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||
|<div style="color:steelblue">endCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">refundTotalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">drawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">oneWayProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">realFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">refundDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelSourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">oneWaySeatProfits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">totalUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***dkVReportBankDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">minusAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">startBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">endBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***dkVReportProfitMonth***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">platServiceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">downRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">profit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downDraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelSourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">lastProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">sysCost|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upRefund|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">upDraw|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***dkVReportDownchannelDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">allDown|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downPayAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">accountStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||
|<div style="color:steelblue">allAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downPay|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">downIncome|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">downIncomeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***dkVReportUpchannelDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE||
|<div style="color:steelblue">allAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">allUp|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upPay|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upPayAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">upIncome|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">accountStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||
|<div style="color:steelblue">upIncomeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***dkVBaseChannelAdd***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||

----


### ***czthTradeOrder***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|充值特惠交易订单表|
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单编号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|生产系统订单号|
|<div style="color:steelblue">tradeDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|生产系统发货号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|系统编号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户编号|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">upAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游账户编号|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|平台公司编号|
|<div style="color:steelblue">drawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|扣款规格|
|<div style="color:steelblue">drawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|扣款面值|
|<div style="color:steelblue">drawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|扣款金额|
|<div style="color:steelblue">serviceRate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|服务费率（针对上游收取）|
|<div style="color:steelblue">subsidy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|补贴金额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类型|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|前后项信息（1-前项，2后项）|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注信息|

----


### ***czthTradeOrderHs***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|充值特惠交易订单表|
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单编号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|生产系统订单号|
|<div style="color:steelblue">tradeDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|生产系统发货号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|系统编号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户编号|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">upAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游账户编号|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|平台公司编号|
|<div style="color:steelblue">drawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|扣款规格|
|<div style="color:steelblue">drawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|扣款面值|
|<div style="color:steelblue">drawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|扣款金额|
|<div style="color:steelblue">serviceRate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|服务费率（针对上游收取）|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类型|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|前后项信息（1-前项，2后项）|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注信息|
|<div style="color:steelblue">subsidy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||

----


### ***czthTradeReport***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易报表数据编号|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|报表数据日期|
|<div style="color:steelblue">sourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|渠道所属系统编号|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游公司编号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户编号|
|<div style="color:steelblue">upCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游公司编号|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">upAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游账户编号|
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务分类|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|前后项信息|
|<div style="color:steelblue">serviceRate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|服务费率|
|<div style="color:steelblue">totalUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|扣款总规格|
|<div style="color:steelblue">totalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|扣款总面值|
|<div style="color:steelblue">totalDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|扣款总金额|
|<div style="color:steelblue">refundUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款总规格|
|<div style="color:steelblue">refundFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款面值|
|<div style="color:steelblue">refundDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|退款金额|
|<div style="color:steelblue">totalSubsidy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|总补贴金额|
|<div style="color:steelblue">refundSubsidy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|总退回补贴金额|

----


### ***czthTradeServiceFee***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">monthDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|月份时间|
|<div style="color:steelblue">serviceFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|手续费|

----


### ***supBaseDownChannel***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属系统|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|状态|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|

----


### ***supBaseDownAccount***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账户名称|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">creditAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|授信金额|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|

----


### ***supTradeOrderMain***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">supOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户编号|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游公司编号|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|生产系统订单号|
|<div style="color:steelblue">tradeOrderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|生产系统订单时间|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">proviceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份编号|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|城市编号|
|<div style="color:steelblue">orderUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单规格|
|<div style="color:steelblue">orderFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单面值|
|<div style="color:steelblue">orderAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单金额|
|<div style="color:steelblue">completeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|完成面值|
|<div style="color:steelblue">completeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|完成金额|

----


### ***supTradeDownFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|资金变动编号|
|<div style="color:steelblue">supOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户编号|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游公司编号|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|生产系统订单号|
|<div style="color:steelblue">tradeRefundNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|生产系统退款编号|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类型（加款、扣款、退款、提款）|
|<div style="color:steelblue">changeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动面值|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|资金变动时间|
|<div style="color:steelblue">tradeOrderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|生产系统订单时间|
|<div style="color:steelblue">tradeChangeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|生产系统资金变动时间|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***supBaseRelateAddMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">mapId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|关联编号|
|<div style="color:steelblue">supUpChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|sup上游渠道|
|<div style="color:steelblue">supDownChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|sup下游渠道|
|<div style="color:steelblue">proUpChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|生产系统上游渠道（需为千行）|

----


### ***supTradeDownFundHs***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|资金变动编号|
|<div style="color:steelblue">supOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户编号|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游公司编号|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|生产系统订单号|
|<div style="color:steelblue">tradeRefundNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|生产系统退款编号|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类型（加款、扣款、退款、提款）|
|<div style="color:steelblue">changeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动面值|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|资金变动时间|
|<div style="color:steelblue">tradeOrderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|生产系统订单时间|
|<div style="color:steelblue">tradeChangeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|生产系统资金变动时间|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***supTradeUpManual***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记录编号|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">upAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游渠道账户|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|是否已红冲过|
|<div style="color:steelblue">adjustRecordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲的记录编号|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类型（加款、加款红冲、提款、提款红冲、实体卡收货、电子卡密收货、实体卡转电子卡密、余额平账、交易平账）|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">wayChangeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途变动张数|
|<div style="color:steelblue">wayChangeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途变动面值|
|<div style="color:steelblue">wayChangeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途变动金额|
|<div style="color:steelblue">physicalChangeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡变动条数|
|<div style="color:steelblue">physicalChangeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡变动面值|
|<div style="color:steelblue">physicalChangeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡变动金额|
|<div style="color:steelblue">electronicChangeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密变动条数|
|<div style="color:steelblue">electronicChangeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密变动面值|
|<div style="color:steelblue">electronicChangeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密变动金额|
|<div style="color:steelblue">wayCountBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途卡余额|
|<div style="color:steelblue">wayFaceBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途面值余额|
|<div style="color:steelblue">wayCardBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途账户余额|
|<div style="color:steelblue">physicalCountBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡张数余额|
|<div style="color:steelblue">physicalFaceBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡面值余额|
|<div style="color:steelblue">physicalCardBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡账户余额|
|<div style="color:steelblue">electronicCountBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密张数余额|
|<div style="color:steelblue">electronicFaceBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密面值余额|
|<div style="color:steelblue">electronicCardBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密账户余额|
|<div style="color:steelblue">tradeChangeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|实体卡收货、电子卡密收货、实体卡转电子卡密交易系统时间|
|<div style="color:steelblue">bankCardNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|加款/提款对应银行账户|
|<div style="color:steelblue">bankRecordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|加款/提款银行资金变动编号|
|<div style="color:steelblue">bankServiceId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|加款银行收取手续费编号|
|<div style="color:steelblue">bankRelateId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|可红冲记录和银行相关记录关联编号|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|

----


### ***supTradeDownManual***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记录编号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户编号|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|是否已红冲过|
|<div style="color:steelblue">adjustRecordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲的记录编号|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类型（加款、加款红冲、提款、提款红冲，余额平账、交易平账）|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">bankCardNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|加款/提款对应银行账户|
|<div style="color:steelblue">bankRecordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|加款/提款银行资金变动编号|
|<div style="color:steelblue">bankServiceId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|提款银行收取手续费编号|
|<div style="color:steelblue">bankRelateId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|可红冲记录和银行相关记录关联编号|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|

----


### ***supReportDailyManual***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记录编号|
|<div style="color:steelblue">reportDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|数据日期|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">systemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道类型,1：上游渠道，2：下游渠道|
|<div style="color:steelblue">wayChangeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途张数增加数|
|<div style="color:steelblue">wayChangeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途面值增加数|
|<div style="color:steelblue">wayChangeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途金额增加数|
|<div style="color:steelblue">physicalChangeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡张数增加数|
|<div style="color:steelblue">physicalChangeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡面值增加数|
|<div style="color:steelblue">physicalChangeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡金额增加数|
|<div style="color:steelblue">electronicChangeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡张数增加数|
|<div style="color:steelblue">electronicChangeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡面值增加数|
|<div style="color:steelblue">electronicChangeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡金额增加数|

----


### ***supReportDailyTrade***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记录编号|
|<div style="color:steelblue">reportDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|数据日期|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">systemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道类型|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|前后项信息|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|财务分类|
|<div style="color:steelblue">tradeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|销卡张数|
|<div style="color:steelblue">tradeUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易规格|
|<div style="color:steelblue">tradeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易面值|
|<div style="color:steelblue">tradeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易金额|

----


### ***supReportZeroBalance***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记录编号|
|<div style="color:steelblue">zeroDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|零点日期|
|<div style="color:steelblue">createDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|收集时间|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">systemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道类型|
|<div style="color:steelblue">onWayCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途张数|
|<div style="color:steelblue">onWayFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途面值|
|<div style="color:steelblue">onWayBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途余额|
|<div style="color:steelblue">physicalCardCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡张数|
|<div style="color:steelblue">physicalCardFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡面值|
|<div style="color:steelblue">physicalCardBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡余额|
|<div style="color:steelblue">electronicCardCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密张数|
|<div style="color:steelblue">electronicCardFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密面值|
|<div style="color:steelblue">electronicCardBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密余额|

----


### ***supTradeOrderMainHs***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">supOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户编号|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游公司编号|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|生产系统订单号|
|<div style="color:steelblue">tradeOrderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|生产系统订单时间|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">proviceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份编号|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|城市编号|
|<div style="color:steelblue">orderUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单规格|
|<div style="color:steelblue">orderFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单面值|
|<div style="color:steelblue">orderAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单金额|
|<div style="color:steelblue">completeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|完成面值|
|<div style="color:steelblue">completeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|完成金额|

----


### ***supBaseUpChannel***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属系统|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|状态|
|<div style="color:steelblue">warnBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(32)|报警余额|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">statisticsType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|财务分类|

----


### ***supBaseUpAccount***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账户名称|
|<div style="color:steelblue">onWayCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途张数|
|<div style="color:steelblue">onWayFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途面值|
|<div style="color:steelblue">onWayBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途余额|
|<div style="color:steelblue">physicalCardCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡张数|
|<div style="color:steelblue">physicalCardFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡面值|
|<div style="color:steelblue">physicalCardBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡余额|
|<div style="color:steelblue">electronicCardCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密张数|
|<div style="color:steelblue">electronicCardFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密面值|
|<div style="color:steelblue">electronicCardBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密余额|
|<div style="color:steelblue">createdBy|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|

----


### ***supTradeUpFundHs***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|资金变动编号|
|<div style="color:steelblue">supOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">tradeDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统发货编号|
|<div style="color:steelblue">tradeRefundNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|生产系统退款编号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户编号|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游公司编号|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">upAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游账户编号|
|<div style="color:steelblue">upCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游公司编号|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类型（加款、扣款、退款、提款、号卡转移）|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|资金变动时间|
|<div style="color:steelblue">tradeOrderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|生产系统订单时间|
|<div style="color:steelblue">tradeChangeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|生产系统资金变动时间|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|前后项信息|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|城市|
|<div style="color:steelblue">downDrawCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款销卡张数|
|<div style="color:steelblue">downDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款规格|
|<div style="color:steelblue">downDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款面值|
|<div style="color:steelblue">downDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款金额|
|<div style="color:steelblue">upDrawCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款销卡张数|
|<div style="color:steelblue">upDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款规格|
|<div style="color:steelblue">upDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款面值|
|<div style="color:steelblue">upDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款金额|
|<div style="color:steelblue">wayChangeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途变动张数|
|<div style="color:steelblue">wayChangeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途面值|
|<div style="color:steelblue">wayChangeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途变动金额|
|<div style="color:steelblue">physicalChangeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡张数|
|<div style="color:steelblue">physicalChangeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡面值|
|<div style="color:steelblue">physicalChangeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡变动金额|
|<div style="color:steelblue">wayCountBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途卡余额|
|<div style="color:steelblue">wayFaceBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途面值余额|
|<div style="color:steelblue">wayCardBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途余额|
|<div style="color:steelblue">physicalCountBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡张数余额|
|<div style="color:steelblue">physicalFaceBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡面值余额|
|<div style="color:steelblue">physicalCardBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡余额|
|<div style="color:steelblue">electronicCountBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密张数余额|
|<div style="color:steelblue">electronicFaceBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密面值余额|
|<div style="color:steelblue">electronicCardBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***supTradeUpFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|资金变动编号|
|<div style="color:steelblue">supOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">tradeDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统发货编号|
|<div style="color:steelblue">tradeRefundNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|生产系统退款编号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户编号|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游公司编号|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">upAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游账户编号|
|<div style="color:steelblue">upCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游公司编号|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类型（加款、扣款、退款、提款、号卡转移）|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|资金变动时间|
|<div style="color:steelblue">tradeOrderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|生产系统订单时间|
|<div style="color:steelblue">tradeChangeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|生产系统资金变动时间|
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|前后项信息|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|城市|
|<div style="color:steelblue">downDrawCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款销卡张数|
|<div style="color:steelblue">downDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款规格|
|<div style="color:steelblue">downDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款面值|
|<div style="color:steelblue">downDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款金额|
|<div style="color:steelblue">upDrawCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款销卡张数|
|<div style="color:steelblue">upDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款规格|
|<div style="color:steelblue">upDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款面值|
|<div style="color:steelblue">upDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款金额|
|<div style="color:steelblue">wayChangeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途变动张数|
|<div style="color:steelblue">wayChangeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途面值|
|<div style="color:steelblue">wayChangeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途变动金额|
|<div style="color:steelblue">physicalChangeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡张数|
|<div style="color:steelblue">physicalChangeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡面值|
|<div style="color:steelblue">physicalChangeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡变动金额|
|<div style="color:steelblue">wayCountBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途卡余额|
|<div style="color:steelblue">wayFaceBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途面值余额|
|<div style="color:steelblue">wayCardBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|在途余额|
|<div style="color:steelblue">physicalCountBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡张数余额|
|<div style="color:steelblue">physicalFaceBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡面值余额|
|<div style="color:steelblue">physicalCardBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|实体卡余额|
|<div style="color:steelblue">electronicCountBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密张数余额|
|<div style="color:steelblue">electronicFaceBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密面值余额|
|<div style="color:steelblue">electronicCardBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|电子卡密余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***supBaseProUpScope***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|限定编号|
|<div style="color:steelblue">proUpChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|生产系统限定上游渠道|

----


### ***supZoreBalanceDiffer***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|调整金额|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|

----


### ***rptMergeInnerChannelMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道类型|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">addUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|添加人|
|<div style="color:steelblue">addTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|添加时间|

----


### ***rptMergeReportTradeAdd***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|账户类型:上游渠道:下游渠道:银行账户|
|<div style="color:steelblue">addSysNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|加款数据所属系统，存储过程中写死|
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|加款金额|
|<div style="color:steelblue">minusAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|加款金额|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|加款统计时间|
|<div style="color:steelblue">syncStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|同步状态，0、同步完成，1等待同步，2正在同步|
|<div style="color:steelblue">syncBatch|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|同步批次号|

----


### ***rptMergeReportTradeAddCs***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|账户类型:上游渠道:下游渠道:银行账户|
|<div style="color:steelblue">addSysNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|加款数据所属系统，存储过程中写死|
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|加款金额|
|<div style="color:steelblue">minusAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|加款金额|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|加款统计时间|
|<div style="color:steelblue">syncStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|同步状态，0、同步完成，1等待同步，2正在同步|
|<div style="color:steelblue">syncBatch|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|同步批次号|

----


### ***rptUnitChannelMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道类型，1、上游渠道，2下游渠道|
|<div style="color:steelblue">incomeUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|收入单元,1.天猫，2.腾讯，3.运营商资源，4.四川，5.陕西，6.云南，7.运营商（非冲），8.自有平台，9代收费业务|
|<div style="color:steelblue">billSplitType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|分账方式，1、不分账，2、比例分账，3、双计分账|
|<div style="color:steelblue">billSplitRatio|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|分账比例|
|<div style="color:steelblue">sysNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|渠道分类：fd直充，dk代扣|

----


### ***rptUnitReportTrade***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道分类，1、上游渠道，2、下游渠道|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">tradeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易笔数|
|<div style="color:steelblue">tradeDebitAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易扣款金额|
|<div style="color:steelblue">tradeProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易利润|
|<div style="color:steelblue">rvAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易平账影响利润的金额|
|<div style="color:steelblue">sysNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|系统编号，fd、直冲，dk、代扣系统|
|<div style="color:steelblue">isHistoryData|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否为历史库生成的数据（用来加入唯一索引）|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|数据快照日期|
|<div style="color:steelblue">syncStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|同步状态，0、同步完成，1等待同步，2正在同步|
|<div style="color:steelblue">syncBatch|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|同步批次号|

----


### ***rptUnitReportTradeSplit***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道分类，1、上游渠道，2、下游渠道|
|<div style="color:steelblue">incomeUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|收入单元，对应枚举|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|系统编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">billSplitType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|分账方式，1、不分账，2、比例分账，3、双计分账|
|<div style="color:steelblue">billSplitRatio|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|分账比例|
|<div style="color:steelblue">tradeCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易笔数|
|<div style="color:steelblue">tradeDebitAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易扣款金额|
|<div style="color:steelblue">tradeProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易利润|
|<div style="color:steelblue">rvAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易平账影响利润的金额|
|<div style="color:steelblue">snapTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|数据快照日期|

----


### ***rptTest***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">profit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||

----


### ***incomeChannelMonthTrade***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">tradeMonth|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|交易日期|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|所属省份(下游为‘-’)|
|<div style="color:steelblue">tradeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务分类|
|<div style="color:steelblue">groupId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|分组|
|<div style="color:steelblue">groupType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|分组类型|
|<div style="color:steelblue">tradeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易量|
|<div style="color:steelblue">tradeRvAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易平账金额|
|<div style="color:steelblue">tradeProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润(包含平账）|

----


### ***incomeChannelMonthSum***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">tradeMonth|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|交易日期|
|<div style="color:steelblue">systemNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|所属系统编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|所属省份(下游为‘-’)|
|<div style="color:steelblue">tradeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务分类|
|<div style="color:steelblue">groupId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|分组|
|<div style="color:steelblue">groupType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|分组类型|
|<div style="color:steelblue">tradeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易量|
|<div style="color:steelblue">tradeRvAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易平账金额|
|<div style="color:steelblue">tradeProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润(包含平账）|

----


### ***incomeDownUpConfig***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|

----


### ***incomeDownUpMonth***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">tradeMonth|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|交易月份|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downChannelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道名称|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">upChannelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道名称|
|<div style="color:steelblue">downGroupId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游分组|
|<div style="color:steelblue">tradeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易金额|
|<div style="color:steelblue">tradeProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易利润|

----


### ***incomeDownUpTrade***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">tradeDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|交易日期|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">tradeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易金额|
|<div style="color:steelblue">tradeProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易利润|

----


### ***incomeDownTrade***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">tradeDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|交易日期|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">tradeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|交易分类|
|<div style="color:steelblue">tradeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易量|
|<div style="color:steelblue">tradeRvProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易平账利润|
|<div style="color:steelblue">tradeProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润（包含平账）|

----


### ***incomeUpTrade***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">tradeDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|交易日期|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|所属省份|
|<div style="color:steelblue">tradeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务分类|
|<div style="color:steelblue">tradeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易量|
|<div style="color:steelblue">tradeRvProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|交易平账利润|
|<div style="color:steelblue">tradeProfit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|利润（包含平账）|

----


### ***incomeUpGroupMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份编号|
|<div style="color:steelblue">upGroupId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属上游收入分组|

----


### ***incomeFlowTask***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|任务编号|
|<div style="color:steelblue">flowName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|流程名称|
|<div style="color:steelblue">flowMq|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|流程mq|
|<div style="color:steelblue">flowSort|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|流程排序|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|任务创建时间|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|任务状态，1未开始，2正在执行，0执行成功，9执行失败|
|<div style="color:steelblue">flowLink|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|流程环节，1中间环节，0终结环节|
|<div style="color:steelblue">flowBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|流程批次号|
|<div style="color:steelblue">completeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|流程完成时间|

----


### ***incomeFlowConfig***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|配置编号|
|<div style="color:steelblue">flowName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|流程名称|
|<div style="color:steelblue">flowMq|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|流程mq|
|<div style="color:steelblue">flowSort|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|流程排序|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|状态，0启用，1禁用|
|<div style="color:steelblue">flowParams|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|流程固定参数，a=1,b=2|

----


### ***incomeExcludeUp***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|

----


### ***incomeDownGroupMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">id|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">downGroupId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属下游收入分组|
|<div style="color:steelblue">syncStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|同步状态，0已同步，1未同步|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|

----


### ***yxBaseBusinessMap***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">outerBusinessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|外部系统业务类型编号|
|<div style="color:steelblue">businessMapId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|业务类型映射编号|
|<div style="color:steelblue">localBusinessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统业务类型编号|
|<div style="color:steelblue">industryType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|行业类型|
|<div style="color:steelblue">outerSystemNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|外部系统编号|

----


### ***yxBaseAgent***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">agentId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|代理人编号|
|<div style="color:steelblue">agentName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|代理人名称|
|<div style="color:steelblue">agentType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|代理人类型:个人代理人,:企业代理人|
|<div style="color:steelblue">certificateNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|身份证/纳税识别号|
|<div style="color:steelblue">mobile|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|手机号码|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">companyNature|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(10)|公司性质:有限责任公司,:股份有限公司,:个体商户,:合伙企业|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|公司编号|
|<div style="color:steelblue">taxpayerSize|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|纳税人规模:一般纳税人,2小规模纳税人|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道|
|<div style="color:steelblue">outAgentId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统代理人编号|
|<div style="color:steelblue">groupAgent|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|:是组合代理人，1：普通代理人|
|<div style="color:steelblue">groupCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|组合数量|

----


### ***yxTradeExpense***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">yxOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">tradeExpenseNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统费用编号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|订单来源（系统编号）|
|<div style="color:steelblue">expenseType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|费用类型1：快递费，21：销券收益|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道|
|<div style="color:steelblue">agentId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|代理人编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|费用金额|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|交易系统订单时间|
|<div style="color:steelblue">outChangeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|交易系统变动时间|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|费用账号id|
|<div style="color:steelblue">orderAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单金额|
|<div style="color:steelblue">incomeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|收入类型：1：支出，2：收入|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***yxTradeAgentFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">upFundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游资金变动编号，退款时为下游资金变动编号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|订单来源（系统编号）|
|<div style="color:steelblue">agentId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|代理人编号|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变更类型:加款2：交易扣款3：交易退款4：提款,12：发行扣款，13：发行退款|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">yxTradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|外部系统订单编号|
|<div style="color:steelblue">yxOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|订单编号|

----


### ***yxTradeUpManual***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(30)|账户编号|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">addType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类:1: 加款+;1: 红冲加款-;1: 提款+;1: 红冲提款-;2: 扣款平账加+;2: 扣款平账减-;3: 退款平账加+;3: 退款平账减-;4: 余额平账加+;4: 余额平账减-;5: 手续费加+;5: 手续费红冲+;6: 交易平账;|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">realAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|交易平账真实金额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">bankFundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|银行资金变动编号（红冲是使用）|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">extRecordNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|外部加款记录编号|
|<div style="color:steelblue">handlingFeeId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|收取手续费的记录编号|

----


### ***yxTradeUpFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游变动编号|
|<div style="color:steelblue">yxOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">tradeDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统发货号|
|<div style="color:steelblue">extDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展发货编号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|订单来源（系统编号）|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游所属公司|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">upAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游账户|
|<div style="color:steelblue">upCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游所属公司|
|<div style="color:steelblue">agentId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|代理人编号|
|<div style="color:steelblue">downDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游充值量（计算值）|
|<div style="color:steelblue">downDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款面值（计算值）|
|<div style="color:steelblue">downDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款金额（计算值）(用户支付金额)|
|<div style="color:steelblue">downRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游实际金额（计算值）|
|<div style="color:steelblue">dowmHandlingFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游手续费（计算值）|
|<div style="color:steelblue">downAgencyFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游代理费（计算值）|
|<div style="color:steelblue">upDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游充值量|
|<div style="color:steelblue">upDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款面值|
|<div style="color:steelblue">upDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款金额|
|<div style="color:steelblue">upRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游实际金额|
|<div style="color:steelblue">upServieFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游服务费|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变更类型:加款2：交易扣款3：交易退款4：提款:服务费转余额:服务费结算,1:发行加款,12：发行扣款，13：发行退款|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|
|<div style="color:steelblue">outChangeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|资金变动时间（交易系统）|
|<div style="color:steelblue">refundOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|退款编号|
|<div style="color:steelblue">incomeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|收益金额|
|<div style="color:steelblue">couponAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|优惠券金额|

----


### ***yxTradeOrderMain***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">yxOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款账号|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游公司编号|
|<div style="color:steelblue">agentId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|代理人编号|
|<div style="color:steelblue">agentType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|代理人类型|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展订单号交易系统供|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单添加时间|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单日期（交易系统下单日期）|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">orderFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|成交面值|
|<div style="color:steelblue">orderAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|代收金额（用户支付金额）|
|<div style="color:steelblue">agencyFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|代理人酬金（代理费）|
|<div style="color:steelblue">handlingFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|三方平台手续费|
|<div style="color:steelblue">successFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|成功面值|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后修改时间|
|<div style="color:steelblue">incomeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|收益金额|
|<div style="color:steelblue">realAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|实际扣款金额|
|<div style="color:steelblue">couponAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|优惠券金额|

----


### ***yxTradeDownManual***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(30)|账户编号|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">addType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类:1: 加款+;1: 红冲加款-;1: 提款+;1: 红冲提款-;2: 扣款平账加+;2: 扣款平账减-;3: 退款平账加+;3: 退款平账减-;4: 余额平账加+;4: 余额平账减-;5: 手续费加+;5: 手续费红冲+;6: 交易平账;71：发行加款|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">realAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|交易平账真实金额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">bankFundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|银行资金变动编号（红冲是使用）|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">extRecordNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|外部加款记录编号|
|<div style="color:steelblue">handlingFeeId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|收取手续费的记录编号|

----


### ***yxTradeDownFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游变动编号|
|<div style="color:steelblue">yxOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展订单号交易系统供|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游支付账号|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动创建时间|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变更类型:加款2：交易扣款3：交易退款:提款,11：发行加款，12：发行扣款，13：发行退款|
|<div style="color:steelblue">payAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|用户支付金额|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">handlingFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|手续费（handling_fee=pay_Amount-Change_amount-INCOME_AMOUNT）|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">changeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动面值|
|<div style="color:steelblue">orderFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单面值|
|<div style="color:steelblue">refundOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|退款编号|
|<div style="color:steelblue">incomeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|收益金额|
|<div style="color:steelblue">couponAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|优惠券金额|

----


### ***yxTradeAgentManual***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">agentId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|代理人编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(30)|账户编号|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">addType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类:1: 加款+;1: 红冲加款-;1: 提款+;1: 红冲提款-;2: 扣款平账加+;2: 扣款平账减-;3: 退款平账加+;3: 退款平账减-;4: 余额平账加+;4: 余额平账减-;5: 手续费加+;5: 手续费红冲+;6: 交易平账;|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">bankFundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|银行资金变动编号（红冲是使用）|
|<div style="color:steelblue">extRecordNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|外部加款记录编号|
|<div style="color:steelblue">handlingFeeId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|收取手续费的记录编号|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***yxReportZeroBalance***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">reportTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|报表时间|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|账户类型1：上游渠道2：下游渠道3：银行账户4：服务费账户5：代理人账户，6：发行成本账户，7：发行收入账户|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道（代理人）编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道（代理人）名称|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|理论余额|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|查询余额|
|<div style="color:steelblue">channelStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道状态|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司|
|<div style="color:steelblue">channelSourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|渠道所属系统编号|
|<div style="color:steelblue">downFirstFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异面值（只有下游渠道记录）|
|<div style="color:steelblue">downFirstAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异金额（只有下游渠道记录）|

----


### ***yxReportDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">reportTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|报表时间|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号（商家）|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号（营销渠道）|
|<div style="color:steelblue">agentId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|代理人编号|
|<div style="color:steelblue">upDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款面值|
|<div style="color:steelblue">upDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款金额|
|<div style="color:steelblue">orderCount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单数量|
|<div style="color:steelblue">servieFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|应结算商家服务费|
|<div style="color:steelblue">agencyFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|代理人酬金（代理费）|
|<div style="color:steelblue">handlingFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|三方平台手续费|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">downDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款面值|
|<div style="color:steelblue">downDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款金额|
|<div style="color:steelblue">incomeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|收益金额|
|<div style="color:steelblue">downRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游实际金额|
|<div style="color:steelblue">upRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游实际金额|
|<div style="color:steelblue">downCouponAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|优惠券金额|
|<div style="color:steelblue">issue|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)|发行扣款标志：0：普通扣款，1：发行扣款|

----


### ***yxBaseUpChannel***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属系统编号|
|<div style="color:steelblue">warnBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|报警余额|
|<div style="color:steelblue">commiBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金余额|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">serviceBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|服务费余额|
|<div style="color:steelblue">issueBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|发行成本余额|

----


### ***yxBaseUpAccount***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账号名称|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|查询余额|
|<div style="color:steelblue">innerBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|理论余额|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|

----


### ***yxBaseDownChannel***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|所属公司|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属系统编号|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">channelClass|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道类型1：自有渠道2：银行渠道3：行业渠道|
|<div style="color:steelblue">commiBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金余额|
|<div style="color:steelblue">warnBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|报警余额|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户id|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|
|<div style="color:steelblue">issueBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|发行收入余额|

----


### ***yxBaseDownAccount***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> true</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账号名称|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|查询余额|
|<div style="color:steelblue">innerBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|理论余额|
|<div style="color:steelblue">creditMoney|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|授信金额|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|

----


### ***yxReportFundDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">reportTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|报表时间|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道类:1上游渠道,2下游渠道,3代理商|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变更类型:加款,2：交易扣款,3：交易退款,4：提款,:服务费转余额,:服务费结算,1:发行加款,12：发行扣款，13：发行退款|
|<div style="color:steelblue">dailySumAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额合计|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|业务类型|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|公司编号|

----


### ***yxTradeUpFundDiffer***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|记录生成日期|
|<div style="color:steelblue">differId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">yxOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|记账系统订单编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游渠道支付账号编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">downAdjustFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需要调整的面值（下游退款造成上游面值比下游多时产生，下退）|
|<div style="color:steelblue">downAdjustUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需要调整的规格|
|<div style="color:steelblue">downAdjustAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需要调整的金额|
|<div style="color:steelblue">downAdjustReal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需要调整的真实扣款|
|<div style="color:steelblue">upManyFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游多充的面值（上游面值比下游面值多时产生，上扣、下退、上退）|
|<div style="color:steelblue">upManyAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游多充的金额|
|<div style="color:steelblue">downAdjustIncome|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游收入需要调整的金额|

----


### ***yxTradeOrderMainDiffer***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">differId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|记录生成日期|
|<div style="color:steelblue">yxOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|记账系统订单编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游渠道支付账号编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">downFirstFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异面值（上下游扣款有时间差异造成，下扣、下退、上扣、上退）|
|<div style="color:steelblue">downFirstAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异金额|
|<div style="color:steelblue">downFirstIncome|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间造差成的收入差异|

----


### ***yxThreePartyAccount***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账户名称|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|三方账户编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">agentId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|代理商编号|
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|渠道类型:上游;:下游|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|账户类:1支出;:收入|
|<div style="color:steelblue">creditAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|授信金额|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(2)|状态0-启用1-禁用|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">updateTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|修改时间|
|<div style="color:steelblue">updateUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|更新人|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER|公司编号|
|<div style="color:steelblue">systemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER|系统编号|

----


### ***yxTradeAgencyAssigned***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|编号|
|<div style="color:steelblue">yxOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">agentId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|单代理人编号|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|订单来源（系统编号）|
|<div style="color:steelblue">agentFee|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|单代理人代理费|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|2：扣款，3：退款|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">settleStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|结算状态|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|备注|

----


### ***qyTradeUpManual***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(30)|账户编号|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">addType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类:10-加款11-提款12-红冲21-余额平帐22-交易平帐|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">realAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|交易平账真实金额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">bankFundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|银行资金变动编号（红冲是使用）|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">extRecordNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|外部加款记录编号|
|<div style="color:steelblue">handlingFeeId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|收取手续费的记录编号|

----


### ***qyTradeUpFundDiffer***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">differId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|记录生成日期|
|<div style="color:steelblue">qyOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|记账系统订单编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游渠道支付账号编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">downAdjustFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需要调整的面值（下游退款造成上游面值比下游多时产生，下退）|
|<div style="color:steelblue">downAdjustUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需要调整的规格|
|<div style="color:steelblue">downAdjustAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需要调整的金额|
|<div style="color:steelblue">downAdjustReal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|统计下游扣款需要调整的真实扣款|
|<div style="color:steelblue">upManyFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游多充的面值（上游面值比下游面值多时产生，上扣、下退、上退）|
|<div style="color:steelblue">upManyAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游多充的金额|

----


### ***qyTradeUpFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游变动编号|
|<div style="color:steelblue">qyOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号(激活编号)|
|<div style="color:steelblue">tradeDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统发货号(上游发货编号)|
|<div style="color:steelblue">extDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展发货编号(下游订单号)|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展订单号交易(权益卡号)|
|<div style="color:steelblue">extContractNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展号(合同编号)|
|<div style="color:steelblue">extUseNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展号(权益卡使用编号)|
|<div style="color:steelblue">productName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|权益包名称|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|订单来源（系统编号）|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游所属公司|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">upAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游账户|
|<div style="color:steelblue">upCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游所属公司|
|<div style="color:steelblue">orderFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单面值(权益包价值)|
|<div style="color:steelblue">orderAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单金额(权益包销售金额)|
|<div style="color:steelblue">downDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游充值量（权益扣除价值量）|
|<div style="color:steelblue">downDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款面值（产品面值）|
|<div style="color:steelblue">downDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款金额（权益销售金额）,上下游比例相等|
|<div style="color:steelblue">downRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游实际金额（权益销售金额）|
|<div style="color:steelblue">outPutTax|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|销项税|
|<div style="color:steelblue">upDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游充值量|
|<div style="color:steelblue">upDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款面值|
|<div style="color:steelblue">upDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款金额|
|<div style="color:steelblue">upRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游实际金额|
|<div style="color:steelblue">inPutTax|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|进项税|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变更类型:加款2：交易扣款3：交易退款4：提款|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单日期(激活时间)|
|<div style="color:steelblue">outChangeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|资金变动时间（发货完成时间）|

----


### ***qyTradeOrderMainDiffer***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">differId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|记录生成日期|
|<div style="color:steelblue">qyOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|记账系统订单编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游渠道支付账号编号|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">downFirstFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异面值（上下游扣款有时间差异造成，下扣、下退、上扣、上退）|
|<div style="color:steelblue">downFirstAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异金额|

----


### ***qyTradeOrderMain***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">qyOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款账号|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游公司编号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号(激活编号)|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展订单号交易(权益卡号)|
|<div style="color:steelblue">extContractNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展号(合同编号)|
|<div style="color:steelblue">productName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|权益包名称|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单添加时间|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单日期（激活时间）|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">orderFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单面值(权益包价值)|
|<div style="color:steelblue">orderAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单金额(权益包销售金额)|

----


### ***qyTradeDownManual***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(30)|账户编号|
|<div style="color:steelblue">adjustId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|红冲编号|
|<div style="color:steelblue">hasAdjust|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|是否红冲过|
|<div style="color:steelblue">addType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变动类:10-加款11-提款12-红冲21-余额平帐22-交易平帐|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额|
|<div style="color:steelblue">realAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|交易平账真实金额|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动时间|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|余额|
|<div style="color:steelblue">createUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">bankFundId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|银行资金变动编号（红冲是使用）|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|
|<div style="color:steelblue">extRecordNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|外部加款记录编号|
|<div style="color:steelblue">handlingFeeId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|收取手续费的记录编号|

----


### ***qyTradeDownFund***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游变动编号|
|<div style="color:steelblue">qyOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|记账系统订单号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号(激活编号)|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展订单号交易(权益卡号)|
|<div style="color:steelblue">extContractNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展号(合同编号)|
|<div style="color:steelblue">productName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|权益包名称|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游支付账号|
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|变动创建时间|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单日期(激活时间)|
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|变更类型:加款2：交易扣款3：交易退款:提款|
|<div style="color:steelblue">orderAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单金额|
|<div style="color:steelblue">changeAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动金额(销售金额)|
|<div style="color:steelblue">orderFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单面值(权益包价值)|
|<div style="color:steelblue">changeFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|变动面值|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户余额|
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|备注|

----


### ***qyReportZeroBalance***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">reportTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|报表时间|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|账户类型1：上游渠道2：下游渠道3：银行账户4：服务费账户5：代理人账户|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道（代理人）编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道（代理人）名称|
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|理论余额|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|查询余额|
|<div style="color:steelblue">channelStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|渠道状态|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司|
|<div style="color:steelblue">channelSourceSystem|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|渠道所属系统编号|
|<div style="color:steelblue">downFirstAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异金额（只有下游渠道记录）|
|<div style="color:steelblue">warnBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|告警余额|
|<div style="color:steelblue">downFirstFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游与上游扣款的时间差造成的差异面值（只有下游渠道记录）|

----


### ***qyReportDaily***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">reportTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|报表时间|
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|上游渠道编号|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">orderFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|成交面值(权益包价值)|
|<div style="color:steelblue">orderAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|代收金额(权益包销售额)|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|权益卡号|
|<div style="color:steelblue">productName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|权益包名称|
|<div style="color:steelblue">downDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款没面值(领取权益)|
|<div style="color:steelblue">downDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款金额(领取权益)|
|<div style="color:steelblue">upDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款没面值(领取权益)|
|<div style="color:steelblue">upDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|上游扣款金额(领取权益)|
|<div style="color:steelblue">outPutTax|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|销项税|
|<div style="color:steelblue">inPutTax|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|进项税|

----


### ***qyBaseUpChannel***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属公司|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属系统编号|
|<div style="color:steelblue">warnBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|报警余额|
|<div style="color:steelblue">commiBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金余额|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|

----


### ***qyBaseUpAccount***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账号名称|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|查询余额|
|<div style="color:steelblue">innerBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|理论余额|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|

----


### ***qyBaseDownChannel***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道编号|
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|渠道名称|
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|所属公司|
|<div style="color:steelblue">sourceSystemId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|所属系统编号|
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)|状态|
|<div style="color:steelblue">commiBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|佣金余额|
|<div style="color:steelblue">warnBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|报警余额|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游账户id|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|

----


### ***qyBaseDownAccount***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|账户编号|
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|账号名称|
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|查询余额|
|<div style="color:steelblue">innerBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|理论余额|
|<div style="color:steelblue">creditMoney|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|授信金额|
|<div style="color:steelblue">createdUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|创建人|
|<div style="color:steelblue">createdTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|创建时间|
|<div style="color:steelblue">lastEditUser|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2|最后更新人|
|<div style="color:steelblue">lastEditTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE|最后更新时间|

----


### ***newVMonthStartZbalance***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">queryBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">accountStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">warnBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">recordDate|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">accountName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">channelStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)||

----


### ***newVMonthAdd***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">accountType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">sumAddAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">minusAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">snapMonth|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">addAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***newVMonthDraw***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">drawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">snapMonth|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||

----


### ***newVChannelRunDate***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">tradeRange|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">companyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">accountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">channelType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(1)||

----


### ***zreportUpFundJoinHs***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">downDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">upDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">changeType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">settleStatus|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(10)||
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">fdOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">changeTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">upChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">downRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">downDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">upCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">tradeDeliveryNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">downCommission|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">memo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">downDrawUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">balance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(3)||
|<div style="color:steelblue">upDrawFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">settleTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">profits|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">upAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">settleBatchId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">billType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(1)||
|<div style="color:steelblue">upRealAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">upDrawAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">recordId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">upCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">settleAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||

----


### ***adviceAmountWorkEnd***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">halfAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">twoDiff|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">twoAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">twelveDiff|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">twelveAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">adviceTwelve|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">innerBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">adviceTwo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***adviceAmountWorkMiddle***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">twelveAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">twoDiff|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">twoAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">twelveDiff|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">innerBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">adviceTwelve|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">adviceTwo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">halfAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***adviceAmountWorkHead***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">twelveDiff|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">halfAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">adviceTwo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">twoDiff|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">channelName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">twoAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">innerBalance|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)||
|<div style="color:steelblue">twelveAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||
|<div style="color:steelblue">adviceTwelve|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER||

----


### ***tblGlobalParam***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">timeVal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">numberVal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(10)||
|<div style="color:steelblue">paramDesc|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">stringVal|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">paramName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||

----


### ***tblProcLog***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">errCode|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">errTrace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">status|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">startTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">procName|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">logTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">userMark|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">errDesc|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||

----


### ***courses***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">cno|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">tno|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">cname|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||

----


### ***students***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">sname|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">class|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">sno|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">sbirthday|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">DATE||
|<div style="color:steelblue">ssex|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||

----


### ***scores***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">degree|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(10)||
|<div style="color:steelblue">cno|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||
|<div style="color:steelblue">sno|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2||

----


### ***dkTradeOrderMainHs***(undefined)
|column|isPk|nullable|type|description|
|------|----|--------|----|-----------|
|<div style="color:steelblue">dkOrderId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|主键|
|<div style="color:steelblue">downChannelNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|下游渠道编号|
|<div style="color:steelblue">downAccountId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游扣款账号|
|<div style="color:steelblue">downCompanyId|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|下游公司编号|
|<div style="color:steelblue">tradeOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|交易系统订单号|
|<div style="color:steelblue">extOrderNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|扩展订单号交易系统供|
|<div style="color:steelblue">orderSource|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(20)|订单来源（系统编号）|
|<div style="color:steelblue">createTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单添加时间|
|<div style="color:steelblue">orderTime|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">DATE|订单日期(交易系统下单日期)|
|<div style="color:steelblue">businessType|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(3)|业务类型|
|<div style="color:steelblue">carrierNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|运营商|
|<div style="color:steelblue">provinceNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|省份|
|<div style="color:steelblue">cityNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|城市|
|<div style="color:steelblue">totalFace|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(18)|代扣总面值|
|<div style="color:steelblue">rechargeUnit|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">NUMBER(18)|代扣总量|
|<div style="color:steelblue">rechargeAccountNo|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">false|<div style="color: slateblue">VARCHAR2|代扣号码|
|<div style="color:steelblue">downOrderAmount|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|下游结算金额|
|<div style="color:steelblue">rechargeTimes|<div style="color: mediumvioletred"> false</a>|<div style="color: mediumvioletred">true|<div style="color: slateblue">NUMBER(20)|代扣次数|

----

