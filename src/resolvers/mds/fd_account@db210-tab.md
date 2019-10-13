
----
### ***courses***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|cno|varchar2|false||--|--|
|cname|varchar2|false||--|--|
|tno|varchar2|false||--|--|

----
### ***czthTradeOrder***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|充值特惠交易订单表|
|fdOrderId|number|false||--|订单编号|
|tradeOrderNo|varchar2|false||--|生产系统订单号|
|tradeDeliveryNo|varchar2|false||--|生产系统发货号|
|orderSource|number|false||--|系统编号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游账户编号|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upAccountId|number|false||--|上游账户编号|
|companyId|number|false||--|平台公司编号|
|drawUnit|number|false||--|扣款规格|
|drawFace|number|false||--|扣款面值|
|drawAmount|number|false||--|扣款金额|
|serviceRate|number|false||--|服务费率（针对上游收取）|
|subsidy|number|false||--|补贴金额|
|changeTime|date|false||sysdate|变动时间|
|changeType|number|false||--|变动类型|
|billType|number|false||--|前后项信息（1-前项，2后项）|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||-|运营商|
|provinceNo|varchar2|false||-|省份|
|memo|varchar2|false||--|备注信息|

----
### ***czthTradeOrderHs***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|充值特惠交易订单表|
|fdOrderId|number|false||--|订单编号|
|tradeOrderNo|varchar2|false||--|生产系统订单号|
|tradeDeliveryNo|varchar2|false||--|生产系统发货号|
|orderSource|number|false||--|系统编号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游账户编号|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upAccountId|number|false||--|上游账户编号|
|companyId|number|false||--|平台公司编号|
|drawUnit|number|false||--|扣款规格|
|drawFace|number|false||--|扣款面值|
|drawAmount|number|false||--|扣款金额|
|serviceRate|number|false||--|服务费率（针对上游收取）|
|subsidy|number|false||--|--|
|changeTime|date|false||sysdate|变动时间|
|changeType|number|false||--|变动类型|
|billType|number|false||--|前后项信息（1-前项，2后项）|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||-|运营商|
|provinceNo|varchar2|false||-|省份|
|memo|varchar2|false||--|备注信息|

----
### ***czthTradeReport***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|交易报表数据编号|
|snapTime|date|false||--|报表数据日期|
|sourceSystem|number|false||--|渠道所属系统编号|
|downCompanyId|number|false||--|下游公司编号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游账户编号|
|upCompanyId|number|false||--|上游公司编号|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upAccountId|number|false||--|上游账户编号|
|statisticsType|number|false||--|业务分类|
|businessType|number|false||--|业务类型|
|billType|number|false||--|前后项信息|
|serviceRate|number|false||--|服务费率|
|totalUnit|number|false||--|扣款总规格|
|totalFace|number|false||--|扣款总面值|
|totalDrawAmount|number|false||--|扣款总金额|
|refundUnit|number|false||--|退款总规格|
|refundFace|number|false||--|退款面值|
|refundDrawAmount|number|false||--|退款金额|
|totalSubsidy|number|false||--|总补贴金额|
|refundSubsidy|number|false||--|总退回补贴金额|

----
### ***czthTradeServiceFee***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|monthDate|date|false||--|月份时间|
|serviceFee|number|false||--|手续费|

----
### ***dkBaseDownAccount***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|主键|
|accountName|varchar2|false||--|账号名称|
|queryBalance|number|false||--|查询余额|
|innerBalance|number|false||--|理论余额|
|status|number|false||--|状态|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|

----
### ***dkBaseDownAccountMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|mapId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|结算账号编号|
|isMainChannel|number|false||--|是否主关系|

----
### ***dkBaseDownChannel***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelNo|varchar2|false|yes|--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|serviceFee|number|false||--|手续费率|
|companyId|number|false||--|所属公司|
|status|number|false||--|状态|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|
|commiBalance|number|false||--|佣金余额|
|commiRule|varchar2|false||--|佣金规则|
|needCommi|number|false||1|是否需要后返佣金0需要，1不需要|
|classification|number|false||--|渠道分类--对应业务类型|
|paymentType|number|false||1|支付分类--1.预付，2.后付|
|warnBalance|number|false||--|报警余额|
|warnType|number|false||1|报警类型:1.单个支付账户不足   2.合计支付账户不足|

----
### ***dkBaseDownSystemMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|mapId|number|false|yes|--|主键|
|sourceSystemId|number|false||--|系统编号|
|channelNo|varchar2|false||--|渠道编号|

----
### ***dkBaseUpAccount***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|主键|
|accountName|varchar2|false||--|账号名称|
|accountType|number|false||--|账户类型（1.收款账户）|
|queryBalance|number|false||--|查询余额|
|innerBalance|number|false||--|理论余额|
|status|number|false||--|状态|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|

----
### ***dkBaseUpAccountMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|mapId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|结算账号编号|
|isMainChannel|number|false||--|是否主关系|

----
### ***dkBaseUpChannel***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelNo|varchar2|false|yes|--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|status|number|false||--|状态|
|serviceFee|number|false||--|手续费率|
|companyId|number|false||--|所属公司|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|
|commiBalance|number|false||--|佣金余额|
|maxAdd|number|false||--|结算上限提示值|
|minAdd|number|false||--|结算下限提示值|
|commiRule|varchar2|false||--|佣金规则|
|needCommi|number|false||1|是否需要后返佣金0需要，1不需要|
|classification|number|false||--|渠道分类--对应业务类型,1.sp代扣系统，2.sup收卡系统|
|paymentType|number|false||1|支付分类--1.预付，2.后付|
|warnBalance|number|false||--|报警余额|
|warnType|number|false||1|报警类型:1.单个支付账户不足   2.合计支付账户不足|

----
### ***dkBaseUpSystemMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|mapId|number|false|yes|--|主键|
|sourceSystemId|number|false||--|系统编号|
|channelNo|varchar2|false||--|渠道编号|

----
### ***dkReportCommiProfitDaily***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|companyId|number|false||--|公司编号|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|支付账户编号|
|channelType|number|false||--|渠道类型1.上游2．下游|
|businessType|number|false||--|业务类型|
|billType|number|false||1|利润类型，1.前向，2后向|
|totalUnit|number|false||--|代扣规格|
|totalFace|number|false||--|代扣面值|
|drawAmount|number|false||--|结算金额 负：千行欠下游/上游欠千行 金额|
|realAmount|number|false||--|实际结算的金额 负：欠下游金额|
|commission|number|false||--|佣金|
|profits|number|false||--|利润|
|serviceFee|number|false||--|实时扣除佣金(手续费)|
|refundTotalUnit|number|false||--|退款规格|
|refundTotalFace|number|false||--|退款面值|
|refundDrawAmount|number|false||--|退款金额|
|refundRealAmount|number|false||--|实际退款金额|
|refundCommission|number|false||--|退回佣金|
|refundProfits|number|false||--|退回利润|
|refundServiceFee|number|false||--|退回实时扣除佣金（手续费）|
|snapTime|date|false||--|快照时间(交易数据日期)|
|addStatus|number|false||1|账户加款状态 1.未开始，2.正在加款，0.加款完成，9.加款失败|
|statisticsType|number|false||--|统计类型，7.代扣业务|
|sysCost|number|false||--|系统垫付金额(垫付部分是作为系统成本计入的)|
|syncStatus|number|false||1|同步财务报表状态，0同步完成，1未进行同步，2正在同步，9同步失败|
|channelName|varchar2|false||--|渠道名称|
|accountName|varchar2|false||--|支付账户名称|
|channelSourceSystem|number|false||--|渠道所属系统编号|

----
### ***dkReportZeroBalance***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|recordDate|date|false||--|报表时间|
|createdTime|date|false||sysdate|创建时间|
|accountType|number|false||--|账户类型1:上游渠道2:下游渠道3:银行账户4:收款账户5:资产账户6:非资产账户7:倒款账户|
|accountId|number|false||--|账户编号|
|channelNo|varchar2|false||-|渠道编号|
|balance|number|false||--|理论余额|
|accountName|varchar2|false||-|账户名称|
|channelName|varchar2|false||-|渠道名称|
|queryBalance|number|false||--|查询余额|
|channelStatus|number|false||--|渠道状态|
|accountStatus|number|false||--|账户状态|
|companyId|number|false||--|所属公司|
|downFirstFace|number|false||--|下游与上游代扣的时间差造成的差异面值（只有下游渠道记录）|
|downFirstAmount|number|false||--|下游与上游代扣的时间差造成的差异金额（只有下游渠道记录）|
|syncStatus|number|false||1|同步财务报表状态，0同步完成，1未进行同步，2正在同步，9同步失败|
|channelSourceSystem|number|false||--|渠道所属系统编号|
|channelClassif|number|false||--|渠道分类（主要用于上游渠道）|

----
### ***dkReprotChannelSettle***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|记录编号|
|channelNo|varchar2|false||--|渠道编号|
|channelType|number|false||--|渠道类型，1上游渠道，2下游渠道|
|settleDataTime|date|false||--|结算数据日期|
|settleBatchId|number|false||--|结算批次号|
|settleAmount|number|false||--|结算金额|
|settleStatus|number|false||1|结算状态，0完成，1等待，2正在，9无需结算|
|settleDealId|number|false||--|结算处理编号，红冲用|
|settleUser|varchar2|false||--|结算人|
|settleTime|date|false||--|结算时间|
|settleMemo|varchar2|false||--|结算备注|

----
### ***dkTradeCommissionSettle***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|reportId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|channelType|number|false||--|渠道类型|
|commission|number|false||--|佣金|
|settleMonth|date|false||--|佣金的月份|
|settleStatus|number|false||--|结算状态|
|settleUser|varchar2|false||--|结算人|
|settleTime|date|false||--|结算时间|
|hasAdjust|number|false||1|是否红冲过|
|adjustId|number|false||--|红冲编号|
|bankBatchId|number|false||--|红冲对应实体卡变动记录编号|
|settleType|number|false||--|结算类型：1佣金结算，2转渠道余额  3.佣金加款|
|commiBalance|number|false||--|佣金余额|
|memo|varchar2|false||--|备注|

----
### ***dkTradeDownFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|dkOrderId|number|false||--|记账系统订单号|
|channelNo|varchar2|false||--|下游渠道编号|
|accountId|number|false||--|下游支付账号|
|tradeOrderNo|varchar2|false||-|交易系统订单号|
|extOrderNo|varchar2|false||-|扩展订单号交易系统供|
|orderSource|number|false||--|订单来源（系统编号）|
|createTime|date|false||sysdate|变动创建时间|
|orderTime|date|false||--|订单日期(交易系统下单日期)|
|changeType|number|false||--|变更类型 1-结算2-交易代扣3-交易撤销（old=> 1:加款 2：交易扣款 3：交易退款  4: 提款)|
|changeAmount|number|false||--|变动金额|
|balance|number|false||--|账户余额|
|memo|varchar2|false||--|备注|
|serviceFee|number|false||--|下游代扣或交易撤销时产生的手续费|
|tradeTime|date|false||--|交易系统变动时间|
|tradeFundNo|varchar2|false||--|交易系统资金变动编号（收卡用）|
|isSkAdjust|number|false||--|是否为收卡二次结算数据|
|channelSettleStatus|number|false||99|渠道结算状态，0.成功，1.等待，2.正在，99.无需结算|
|channelSettleBatchId|number|false||--|渠道结算批次号|
|channelSettleTime|date|false||--|渠道结算时间|

----
### ***dkTradeDownFundHs***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|dkOrderId|number|false||--|记账系统订单号|
|channelNo|varchar2|false||--|下游渠道编号|
|accountId|number|false||--|下游支付账号|
|tradeOrderNo|varchar2|false||-|交易系统订单号|
|extOrderNo|varchar2|false||-|扩展订单号交易系统供|
|orderSource|number|false||--|订单来源（系统编号）|
|createTime|date|false||sysdate|变动创建时间|
|orderTime|date|false||--|订单日期(交易系统下单日期)|
|changeType|number|false||--|变更类型 1-结算2-交易代扣3-交易撤销（old=> 1:加款 2：交易扣款 3：交易退款  4: 提款)|
|changeAmount|number|false||--|变动金额|
|balance|number|false||--|账户余额|
|memo|varchar2|false||--|备注|
|serviceFee|number|false||--|下游代扣或交易撤销时产生的手续费|
|tradeTime|date|false||--|交易系统变动时间|

----
### ***dkTradeDownRefund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|下游渠道编号|
|accountId|number|false||--|下游账户编号|
|dkOrderId|number|false||--|记账系统订单号|
|tradeOrderNo|varchar2|false||-|交易系统订单号|
|tradeRefundNo|varchar2|false||--|交易系统退款号|
|orderSource|number|false||--|订单来源（系统编号）|
|refundTime|date|false||sysdate|退款创建时间|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份|
|refundUnit|number|false||--|退款总量|
|refundFace|number|false||--|退款面值|
|refundAmount|number|false||--|退款金额|
|realRefund|number|false||--|实际金额|
|memo|varchar2|false||--|备注|

----
### ***dkTradeDownSettle***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|账户编号|
|adjustId|number|false||--|红冲编号|
|hasAdjust|number|false||1|是否红冲过|
|addType|number|false||--|变动类型:11-结算+ 12-红冲- 21-代扣平帐加+  22-代扣平帐减-  31-退款平帐加+  32-退款平帐减- 41-余额平帐加+ 42-余额平帐减-|
|changeAmount|number|false||--|变动金额,只有红冲的时候为负数|
|changeTime|date|false||sysdate|变动时间|
|balance|number|false||--|余额|
|createUser|varchar2|false||--|创建人|
|bankFundId|number|false||--|银行资金变动编号(红冲时用)|
|partnerAccount|varchar2|false||--|合作方银行账户|
|memo|varchar2|false||--|备注|
|extRecordNo|varchar2|false||--|外部加款记录编号|
|serviceId|number|false||--|收取手续费的记录的编号(渠道手续费)|
|realAmount|number|false||--|交易平账真实金额|

----
### ***dkTradeOrderMain***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|dkOrderId|number|false|yes|--|主键|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游结算账号|
|downCompanyId|number|false||--|下游公司编号|
|tradeOrderNo|varchar2|false||--|交易系统订单号|
|extOrderNo|varchar2|false||--|扩展订单号交易系统供|
|orderSource|number|false||--|订单来源（系统编号）|
|createTime|date|false||sysdate|订单添加时间|
|orderTime|date|false||--|订单日期(交易系统下单日期)|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份|
|cityNo|varchar2|false||--|城市|
|totalFace|number|false||--|代扣总面值|
|rechargeUnit|number|false||--|代扣总量|
|rechargeAccountNo|varchar2|false||--|代扣号码|
|hasUpTrade|number|false||1|是否已产生上游结算 0.已产生 1.未产生|
|downOrderAmount|number|false||--|下游结算金额|
|rechargeTimes|number|false||1|代扣次数|

----
### ***dkTradeOrderMainDiffer***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|differId|number|false|yes|--|主键|
|recordDate|date|false||--|记录生成日期|
|dkOrderId|number|false||--|记账系统订单号|
|channelNo|varchar2|false||--|下游渠道编号|
|accountId|number|false||--|下游渠道支付账户编号|
|businessType|number|false||--|业务类型|
|downFirstFace|number|false||--|下游与上游扣款的时间差造成的差异面值(上下游扣款有时间差异时造成，下扣、下退、上扣、上退)|
|downFirstAmount|number|false||--|下游与上游扣款的时间差造成的差异金额|

----
### ***dkTradeOrderMainHs***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|dkOrderId|number|false|yes|--|主键|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游扣款账号|
|downCompanyId|number|false||--|下游公司编号|
|tradeOrderNo|varchar2|false||--|交易系统订单号|
|extOrderNo|varchar2|false||--|扩展订单号交易系统供|
|orderSource|number|false||--|订单来源（系统编号）|
|createTime|date|false||sysdate|订单添加时间|
|orderTime|date|false||--|订单日期(交易系统下单日期)|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份|
|cityNo|varchar2|false||--|城市|
|totalFace|number|false||--|代扣总面值|
|rechargeUnit|number|false||--|代扣总量|
|rechargeAccountNo|varchar2|false||--|代扣号码|
|downOrderAmount|number|false||--|下游结算金额|
|rechargeTimes|number|false||1|代扣次数|

----
### ***dkTradeRefundSysCost***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|主键|
|recordDate|date|false||--|记录创建的日期|
|dkOrderId|number|false||--|记账系统订单号|
|channelNo|varchar2|false||--|下游渠道编号|
|accountId|number|false||--|下游渠道支付账户编号|
|businessType|number|false||--|业务类型|
|sysCost|number|false||--|垫付金额(元)|
|tradeOrderNo|varchar2|false||--|交易订单号|
|tradeRefundNo|varchar2|false||--|退款单号|
|billType|number|false||1|--|

----
### ***dkTradeUpFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|dkOrderId|number|false||--|记账系统订单号|
|tradeOrderNo|varchar2|false||-|交易系统订单号|
|orderSource|number|false||--|订单来源（系统编号）|
|tradeDeliveryNo|varchar2|false||--|交易系统发货号|
|downChannelNo|varchar2|false||-|下游渠道编号|
|downAccountId|number|false||--|下游账户|
|downCompanyId|number|false||--|下游所属公司|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upAccountId|number|false||--|上游账户|
|upCompanyId|number|false||--|上游所属公司|
|downDrawUnit|number|false||--|下游代扣规格|
|downDrawFace|number|false||--|下游代扣面值|
|downDrawAmount|number|false||--|下游结算金额|
|downRealAmount|number|false||--|下游实际结算金额|
|upDrawUnit|number|false||--|上游代扣规格|
|upDrawFace|number|false||--|上游成功代扣面值|
|upDrawAmount|number|false||--|上游结算金额（结算给我们）|
|upRealAmount|number|false||--|上游实际结算金额|
|changeTime|date|false||sysdate|变动时间|
|changeType|number|false||--|变更类型 1:结算 2：交易代扣 3：交易撤销|
|billType|number|false||1|利润类型:前向2-后向|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||-|运营商|
|provinceNo|varchar2|false||-|省份|
|balance|number|false||--|余额|
|profits|number|false||--|利润|
|downCommission|number|false||--|下游后返佣金|
|upCommission|number|false||--|上游后返佣金|
|settleAmount|number|false||--|结算金额|
|settleBatchId|number|false||--|结算批次号|
|settleStatus|number|false||10|结算状态:20-等待结算,0-结算成功,10-无需结算,90-结算失败|
|settleTime|date|false||--|结算时间|
|memo|varchar2|false||--|备注|
|orderTime|date|false||sysdate|订单日期(交易系统下单日期)|
|tradeTime|date|false||--|交易系统变动时间|
|channelSettleStatus|number|false||99|渠道结算状态，0.成功，1.等待，2.正在，99.无需结算|
|channelSettleBatchId|number|false||--|渠道结算批次号|
|channelSettleTime|date|false||--|渠道结算时间|

----
### ***dkTradeUpFundDiffer***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|differId|number|false|yes|--|主键|
|recordDate|date|false||--|记录创建的日期|
|dkOrderId|number|false||--|记账系统订单号|
|channelNo|varchar2|false||--|下游渠道编号|
|accountId|number|false||--|下游渠道支付账户编号|
|businessType|number|false||--|业务类型|
|billType|number|false||1|利润类型，1.前向，2后向|
|downAdjustFace|number|false||--|统计下游扣款需调整的面值(下游退款造成上游面值比下游多时产生，下退)|
|downAdjustUnit|number|false||--|统计下游扣款需调整的规格|
|downAdjustAmount|number|false||--|统计下游扣款需调整的金额|
|downAdjustReal|number|false||--|统计下游扣款需调整的真实扣款|
|upManyFace|number|false||--|上游多冲的面值(上游面值比下游面值多时产生，上扣、下退、上退)|
|upManyAmount|number|false||--|上游多冲的金额|
|toFrontFace|number|false||--|需要由后向转前向的面值(上游退款时，退的多冲数据且与多冲前后向不一致时，后退前为正)|
|toFrontUnit|number|false||--|需要由后向转前向的规格|
|toFrontAmount|number|false||--|需要由后向转前向的金额|
|toFrontReal|number|false||--|需要由后向转前向的真实扣款|

----
### ***dkTradeUpFundHs***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|dkOrderId|number|false||--|记账系统订单号|
|tradeOrderNo|varchar2|false||-|交易系统订单号|
|orderSource|number|false||--|订单来源（系统编号）|
|tradeDeliveryNo|varchar2|false||--|交易系统发货号|
|downChannelNo|varchar2|false||-|下游渠道编号|
|downAccountId|number|false||--|下游账户|
|downCompanyId|number|false||--|下游所属公司|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upAccountId|number|false||--|上游账户|
|upCompanyId|number|false||--|上游所属公司|
|downDrawUnit|number|false||--|下游代扣规格|
|downDrawFace|number|false||--|下游代扣面值|
|downDrawAmount|number|false||--|下游结算金额|
|downRealAmount|number|false||--|下游实际结算金额|
|upDrawUnit|number|false||--|上游代扣规格|
|upDrawFace|number|false||--|上游成功代扣面值|
|upDrawAmount|number|false||--|上游结算金额（结算给我们）|
|upRealAmount|number|false||--|上游实际结算金额|
|changeTime|date|false||sysdate|变动时间|
|changeType|number|false||--|变更类型 1:结算 2：交易代扣 3：交易撤销|
|billType|number|false||--|利润类型:前向2-后向|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||-|运营商|
|provinceNo|varchar2|false||-|省份|
|balance|number|false||--|余额|
|profits|number|false||--|利润|
|downCommission|number|false||--|下游后返佣金|
|upCommission|number|false||--|上游后返佣金|
|settleAmount|number|false||--|结算金额|
|settleBatchId|number|false||--|结算批次号|
|settleStatus|number|false||10|结算状态:20-等待结算,0-结算成功,10-无需结算|
|settleTime|date|false||--|结算时间|
|memo|varchar2|false||--|备注|
|downServiceFee|number|false||--|下游手续费|
|upServiceFee|number|false||--|上游手续费|
|orderTime|date|false||--|订单日期(交易系统下单日期)|
|tradeTime|date|false||--|交易系统变动时间|
|channelSettleStatus|number|false||99|渠道结算状态，0.成功，1.等待，2.正在，99.无需结算（sp数据）|
|channelSettleBatchId|number|false||--|渠道结算批次号|
|channelSettleTime|date|false||--|渠道结算时间|

----
### ***dkTradeUpRefund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|账户编号|
|dkOrderId|number|false||--|系统订单号|
|tradeOrderNo|varchar2|false||--|交易系统订单号|
|tradeDeliveryNo|varchar2|false||--|交易系统发货编号|
|tradeRefundNo|varchar2|false||--|交易系统退款编号|
|orderSource|number|false||--|订单来源（系统编号）|
|refundTime|date|false||sysdate|退款时间|
|billType|number|false||--|利润类型:1-前向2-后向|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份|
|refundUnit|number|false||--|退款总量|
|refundFace|number|false||--|退款面值|
|refundAmount|number|false||--|退款金额|
|realRefund|number|false||--|实际金额|
|memo|varchar2|false||--|备注|

----
### ***dkTradeUpSettle***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|账户编号|
|adjustId|number|false||--|红冲编号(如果add_type为3,该列不允许为空|
|manualChangeType|number|false||--|变动类型:11-结算+ 12-红冲-  21-代扣平帐加+  22-代扣平帐减- 31-退款平帐加+ 32-退款平帐减- 41-余额平帐加+  42-余额平帐减-|
|changeAmount|number|false||--|变动金额,只有红冲的时候为负数|
|changeTime|date|false||sysdate|变动时间|
|balance|number|false||--|余额|
|memo|varchar2|false||--|备注|
|createUser|varchar2|false||--|创建人|
|partnerAccount|varchar2|false||--|合作方银行账户|
|hasAdjust|number|false||1|是否红冲过|
|bankFundId|number|false||--|实体卡资金变动编号id,方便红冲|
|serviceId|number|false||--|收取手续费的记录的编号|
|extRecordNo|varchar2|false||--|上游加款外部订单号|
|realAmount|number|false||--|交易平账真实金额|

----
### ***fdB2eBankAccountApiConfig***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|configId|number|false|yes|--|配置编号|
|bankAccountId|number|false||--|银行账户编号|
|tokenKey|varchar2|false||--|签名key|
|receiveQueryMq|varchar2|false||--|下游收款查询mq|
|addMq|varchar2|false||--|上游加款mq|
|addQueryMq|varchar2|false||--|上游加款查询mq|
|bankBalanceMq|varchar2|false||--|银行余额查询mq|
|merchantNo|varchar2|false||--|客户账户编号,对应client_id|
|merchantPassword|varchar2|false||--|客户账户密码|
|userNo|varchar2|false||--|用户登录账户,对应user_id|
|userPassword|varchar2|false||--|登录密码,对应user_pswd|
|currencyCode|varchar2|false||-|交易货币种类|
|language|varchar2|false||--|接口编码语言|
|appId|varchar2|false||--|应用程序编码|
|appVer|varchar2|false||--|应用程序版本|
|bankAddMq|varchar2|false||--|上游银企直连加款mq|
|bankAddQueryMq|varchar2|false||--|上游银企直联加款查询mq|
|proxyMerchantNo|varchar2|false||--|代付商户编号|
|proxyMerchantPwd|varchar2|false||--|代付商户密码|
|proxyPriMerchantNo|varchar2|false||--|代付对私商户编号|
|proxyPriMerchantPwd|varchar2|false||--|代付对私商户密码|

----
### ***fdB2eBankErrorCode***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false||--|银行子账户|
|bankType|number|false||--|银行类型|
|errCodeType|varchar2|false||--|错误码类型|
|errCode|varchar2|false||--|错误码|
|dealCode|varchar2|false||--|处理码，success、fail、unkown|
|status|number|false||--|状态，0启用，1禁用|

----
### ***fdB2eBankMainCode***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|主键|
|bankType|number|false||--|银行类型(民生银行，中信银行)|
|interfaceType|varchar2|false||--|接口分类|
|recvBankType|number|false||--|收款银行类型|
|recvBankCode|varchar2|false||--|收款银行对应主行号|
|memo|varchar2|false||--|备注信息|

----
### ***fdB2eBankPaymentAccount***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|bankAccountId|number|false||--|加款银行账户|
|bankType|number|false||--|银行类型（民生，中信）|
|bankPaymentType|number|false||--|付款方式，1代付，2、工作日小额网银，3大额网银|
|workDayType|number|false||--|工作日分类(工作日，非工作日，所有)|
|arrivalSuccessTime|number|false||--|到账时间（分钟），0分钟、30分钟......|
|useStartTime|varchar2|false||--|开始使用时间hh24miss|
|useEndTime|varchar2|false||--|结束使用时间hh24miss|
|maxAmount|number|false||--|单笔最大金额|
|status|number|false||--|状态，0启用，1禁用|
|sortId|number|false||--|使用顺序编号|
|rcvCardType|varchar2|false||--|收款账户类型：0通用,1:对公；2:对私|
|isSameBank|number|false||1|是否跨行：0通用,1同行,2跨行|

----
### ***fdB2eBankPaymentCodeMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|主键|
|bankPaymentType|number|false||--|银行支付方式|
|codeType|number|false||--|编码类型1.付款类，2付款结果查询|
|code|varchar2|false||--|银行接口编码|
|remark|varchar2|false||--|备注说明|

----
### ***fdB2eBankPaymentService***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|bankType|number|false||--|银行类型|
|paymentType|number|false||--|加款方式|
|minAmount|number|false||--|收取下限金额|
|maxAmount|number|false||--|收取上限金额|
|singleAmount|number|false||--|单笔收取手续费金额（和折扣配合使用）|
|discount|number|false||--|单笔收取手续费折扣（和金额配合使用）|
|maxServiceFee|number|false||--|最大手续费(计算的手续费不能超过该值)|

----
### ***fdB2eBankQueryRecord***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|bankAccountId|number|false||--|银行账户编号|
|cardNo|varchar2|false||--|银行卡号|
|bankAccName|varchar2|false||--|银行账户名称|
|bankType|number|false||--|银行类型|
|queryBalance|number|false||--|查询余额|
|queryTime|date|false||--|查询时间|

----
### ***fdB2eBankReceiveAccount***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|银行账户编号[fd_bank_account_info.account_id]|
|cardNo|varchar2|false||--|银行卡号[来源:fd_bank_account_info]|
|cardName|varchar2|false||--|账户名称[来源:fd_bank_account_info]|
|queryIntervalTime|number|false||--|查询间隔时间|
|useType|number|false||1|用途，下游收款 等|
|status|number|false||--|账户状态|
|lastQueryTime|date|false||sysdate|最后查询成功时间|

----
### ***fdB2eBankReceiveRecord***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|bankAccountId|number|false||--|银行账户|
|taskId|number|false||--|任务编号|
|createTime|date|false||--|创建时间|
|receiveTime|date|false||--|收款时间|
|receiveNo|varchar2|false||--|银行外部收款编号|
|bankSvrSeq|varchar2|false||-|银行交易流水号|
|bankCertNo|varchar2|false||--|银行凭证号|
|receiveAmount|number|false||--|银行收款金额|
|tradeType|number|false||--|交易类型 1:支 2：收|
|clientCardNo|varchar2|false||-|客户银行账号|
|clientCompanyName|varchar2|false||-|客户公司名称|
|clientBankName|varchar2|false||-|客户开户银行|
|clientAreaCode|varchar2|false||000000|客户地区编码|
|clientBankAddress|varchar2|false||-|客户开户银行地址|
|matchType|number|false||2|匹配渠道方式,1系统自动匹配，2人工匹配|
|dealStatus|number|false||1|交易处理状态：0完成，1未开始，2等待，3正在， 9无需处理|
|channelNo|varchar2|false||--|渠道编号|
|channelAccountId|number|false||--|渠道账户编号|
|channalType|number|false||--|渠道类型,1上游渠道、2下游渠道 、9无|
|receiveType|number|false||--|交易处理类型:1.下游渠道加款，2.上游渠道返佣，3.收取押金，4.收取保证金，5.收取手续费 99无需处理|
|sysFundId|number|false||--|内部资金变动编号|
|bankRemark|varchar2|false||--|银行摘要|
|dealUser|varchar2|false||--|处理人|
|dealTime|date|false||--|处理时间|
|dealMemo|varchar2|false||--|处理备注|
|sysFlowId|varchar2|false||--|系统流水号|
|applyId|number|false||--|下游加款申请id编号（处理结束后添加）|

----
### ***fdB2eBankTask***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|taskId|number|false|yes|--|任务编号|
|taskType|number|false||--|任务类型|
|recordId|number|false||--|记录编号（上游加款、上游加款查询）|
|mqName|varchar2|false||--|任务mq标识|
|taskStatus|number|false||--|任务状态|
|createTime|date|false||sysdate|创建时间|
|content|varchar2|false||--|任务参数|
|batchId|number|false||--|批次号|
|timeoutTime|date|false||sysdate|超时时间|

----
### ***fdB2eBankWorkDate***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|configId|number|false|yes|--|配置编号|
|workDayType|number|false||--|时间类型|
|configDate|date|false||--|配置日期|

----
### ***fdB2eBankZxyjCode***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|主键|
|bankType|number|false||--|银行类型|
|bankGrade|number|false||--|银行等级，0总行，1省分行，2市分行|
|cantonCode|varchar2|false||--|地区编码|
|bankCode|varchar2|false||--|银行编码|
|bankName|varchar2|false||--|银行名称|

----
### ***fdB2eDownWhiteList***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|downChannelNo|varchar2|false||--|下游渠道|
|channelAccountId|number|false||--|渠道账户编号|
|bankHolderName|varchar2|false||--|持卡人姓名|
|downHolderCardNo|varchar2|false||--|银行卡卡号|
|accountBankName|varchar2|false||--|开户行名称|
|accountBankAddress|varchar2|false||--|开户行地址|
|createTime|date|false||sysdate|创建时间|
|auditStatus|number|false||--|审核状态|
|auditTime|date|false||--|审核时间|
|bankType|number|false||--|银行类型|

----
### ***fdB2ePaymentRecordDetails***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|mainRecordId|number|false||--|转账指令|
|createTime|date|false||--|创建时间|
|clientCardNo|varchar2|false||--|客户账户|
|clientHolderName|varchar2|false||--|客户姓名|
|isSameBank|number|false||--|是否跨行，0同行,1跨行|
|totalAmount|number|false||--|转账金额|
|totalServiceFee|number|false||--|总手续费|
|clientCardType|number|false||--|收款账户类型：1:对公；2:对私|
|clientBankName|varchar2|false||--|收款人开户行名称|
|clientBankAddr|varchar2|false||--|收款人开户行地址|
|clientBankCode|varchar2|false||--|开户行行号|
|clientAreaCode|varchar2|false||--|收款行地区编号|
|submitAmount|number|false||--|提交金额|
|arrivalAmount|number|false||--|到账金额|
|submitRemark|varchar2|false||--|提交摘要|
|submitStatus|number|false||1|加款状态1未开始,2等待执行,3正在执行 4 执行完成,0执行成功|
|submitErrorCode|varchar2|false||--|响应结果码|
|submitDealCode|varchar2|false||--|本地响应结果码|
|submitErrorMsg|varchar2|false||--|提交返回信息|
|bankServerId|varchar2|false||--|服务器响应成功返回的交易标识|
|bankAccountBalance|number|false||--|银行账户余额|
|queryStatus|number|false||1|查询状态1未开始,2等待执行,3正在执行,0执行完成|
|queryTime|date|false||--|查询时间|
|nextQueryTime|date|false||sysdate|下次查询时间|
|queryErrorCode|varchar2|false||--|查询状态码|
|queryDealCode|varchar2|false||--|本地状态码|
|queryErrorMsg|varchar2|false||--|查询结果信息|
|manualMsg|varchar2|false||--|人工审核消息|
|submitTime|date|false||--|提交时间|

----
### ***fdB2ePaymentRecordMain***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|bankId|number|false||--|出账银行编号（fd_b2e_bank_payment_account.bank_account_id）|
|bankAddTypeId|number|false||--|银行卡转账(fd_b2e_bank_payment_account.id)|
|paymentType|number|false||--|转账类型:1.上游渠道加款，2.下游渠道返佣，3.支付押金，4.支付保证金|
|bankCardNo|varchar2|false||--|付款银行账户|
|bankCardName|varchar2|false||--|付款账户名称|
|recvType|number|false||--|收款方类型,1上游、2下游、3其它|
|channalNo|varchar2|false||--|渠道编号|
|channelAccountId|number|false||--|渠道账户编号|
|createTime|date|false||--|创建时间|
|totalAmount|number|false||--|总付款金额|
|totalServiceFee|number|false||--|总需支付的手续费|
|whiteListId|number|false||--|白名单编号|
|clientReceiveCardNo|varchar2|false||--|客户收款银行卡编号|
|subRecordCount|number|false||--|子记录总条数|
|intSubAmount|number|false||--|前n-1笔转账金额的单笔金额（(sub_record_count-1)*int_sub_amount+last_sub_amount）=total_amount|
|lastSubAmount|number|false||--|最后一笔金额（余数）|
|intSubServiceFee|number|false||--|前n-1笔手续费的单笔手续费|
|lastSubServiceFee|number|false||--|最后一笔的手续费|
|submitSuccessAmount|number|false||--|提交成功金额|
|arrivalSuccessAmount|number|false||--|成功到账金额|
|arrivalServiceFee|number|false||--|成功到账的手续费|
|expireTime|date|false||--|过期时间|
|paymentAuditType|number|false||1|转账金额审核类型 1:运营审核  2：财务审核|
|paymentAuditStatus|number|false||1|转账金额审核状态，1未开始,2等待执行,3正在执行,0执行完成 9取消|
|paymentAuditUser|varchar2|false||--|转账金额审核操作人|
|paymentAuditTime|date|false||--|转账金额审核操作时间|
|receivedAuditStatus|number|false||1|到账审核状态1未开始,2等待执行,3正在执行,0执行完成 9无需处理|
|receivedAuditUser|varchar2|false||--|到账审核人|
|receivedAuditTime|date|false||--|到账审核时间|
|receivedAuditMemo|varchar2|false||--|到账审核备注|
|receivedSuccessAmount|number|false||--|已录入系统的支付金额|
|receivedSuccessServiceFee|number|false||--|已录入系统的支付手续费|
|createType|number|false||1|1.系统自动创建，2.操作员手工添加|
|addMemo|varchar2|false||-|添加转账记录备注|

----
### ***fdB2eSystemLog***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|主键|
|accountId|number|false||--|账户名称|
|accountName|varchar2|false||--|账户名称|
|lastFailTime|date|false||--|上次执行失败时间|
|failReason|varchar2|false||--|失败原因|

----
### ***fdB2eUpChannelConfig***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|typeId|number|false|yes|--|规则编号|
|dateRangeType|number|false||--|时间范围类型0.高峰期，1正常时期|
|upChannelNo|varchar2|false||--|上游渠道|
|amountCalcType|varchar2|false||--|转账计算方法|
|calcTypeMemo|varchar2|false||--|方法备注|
|warnBalance|number|false||--|预警余额|
|maxChannelBalance|number|false||--|最大渠道余额(加款后余额不能超过此余额)|
|minAddAmount|number|false||--|最小加款金额|
|maxDayAddAmount|number|false||--|最大单日加款金额|
|addDurationHour|number|false||--|加款金额能持续扣款的小时数|
|auditStatus|number|false||--|审核状态|
|channelAccountId|number|false||--|渠道账户|

----
### ***fdB2eUpForecast***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|startTime|date|false||--|预测开始时间|
|endTime|date|false||--|预测结束时间|
|upChannelNo|varchar2|false||--|上游渠道|
|forecastAmount|number|false||--|预测交易量|
|realAmount|number|false||--|实际交易量|
|memo|varchar2|false||--|备注|

----
### ***fdB2eUpWhiteList***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|channelNo|varchar2|false||--|上游渠道|
|channelAccountId|number|false||--|渠道账户编号|
|bankHolderName|varchar2|false||--|持卡人姓名|
|holderCardNo|varchar2|false||--|银行账户(卡号)|
|mainBankCode|varchar2|false||--|开户行主行行号（网银互联用）|
|branchBankCode|varchar2|false||--|开户行支行行号（大小额用）|
|bankType|number|false||--|银行类型(民生银行，中信银行)|
|rcvCardType|varchar2|false||--|收款账户类型：1:对公；2:对私|
|accountBankName|varchar2|false||--|开户行名称(xxxx支行)|
|provinceNo|varchar2|false||-|账户省份编号|
|cityNo|varchar2|false||--|城市编号|
|areaCode|varchar2|false||--|收款行地区编号(?)|
|auditStatus|number|false||--|审核状态|
|auditTime|date|false||--|审核时间|
|sortId|number|false||--|白名单优先等级，越大越优先|
|companyBank|varchar2|false||-|白名单支持的银行（建行/中信/民生）|

----
### ***fdBankAccountInfo***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|主键|
|title|varchar2|false||--|标题|
|accountName|varchar2|false||--|账号名称|
|cardNo|varchar2|false||--|账户卡号|
|bankType|number|false||--|银行类型-1.其它0.财付通1.支付宝2.移动钱包3.19e钱包4.银行账户5.北京银行6.建设银行7.京东8.民生银行9.联通迷你10.交通银行11.财付通企业|
|assetType|number|false||--|1.银行卡 0. 三方平台|
|bankAddress|varchar2|false||--|开户行|
|isUseAddAmount|number|false||--|是否用于加款|
|balance|number|false||--|余额|
|companyId|number|false||--|所属公司|
|remark|varchar2|false||--|备注|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|
|isB2e|number|false||--|是否为银企直联账户|
|provinceNo|varchar2|false||-|账户省份编号|
|cityNo|varchar2|false||-|账户城市编号|
|queryBalance|number|false||--|查询余额|
|queryTime|date|false||sysdate|余额查询时间|

----
### ***fdBankCashFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|accountId|number|false||--|账号编号|
|adjustId|number|false||--|红冲编号|
|companyId|number|false||--|所属公司|
|changeAmount|number|false||--|变动金额|
|balance|number|false||--|余额|
|changeTime|date|false||sysdate|时间|
|createdUser|varchar2|false||--|创建人|
|changeType|number|false||--|1-加款,2-减款,3-红冲|
|useType|number|false||--|用途1.上游加款2.下游加款3.转账4.上游佣金结算5.下游佣金结算6.利润提取7.收卡结算,8-手续费,9运营投入,10押金,11保证金,12短期借债99.其他|
|hasAdjust|number|false||1|是否冲正过|
|linkChannelName|varchar2|false||--|关联渠道|
|linkAccountName|varchar2|false||--|关联账号|
|remark|varchar2|false||--|备注|
|serviceId|number|false||--|流水号记录编号(标记同一操作的几条数据)|
|recordNo|varchar2|false||--|外部记录编号，同步时避免重复|
|remarkName|varchar2|false||--|收（付）款账户名称|

----
### ***fdBankReportSnap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|snapId|number|false|yes|--|主键|
|accountId|number|false||--|银行卡账户|
|useType|number|false||--|用途编号|
|startBalance|number|false||--|期初余额|
|endBalance|number|false||--|期末余额|
|collectionFee|number|false||--|本日代收|
|payFee|number|false||--|本日代付|
|snapTime|date|false||--|快照时间|

----
### ***fdBankStreamFull***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false||--|流水编号|
|bankAccountId|number|false||--|银行账户编号|
|cardNo|varchar2|false||--|己方银行账户|
|bankType|number|false||--|银行类型-1.其它0.财付通1.支付宝2.移动钱包3.19e钱包4.银行账户5.北京银行6.建设银行7.京东8.民生银行9.联通迷你10.交通银行11.财付通企业|
|tranDate|date|false||--|交易时间|
|tranNo|varchar2|false||--|柜员交易号|
|sumTranNo|varchar2|false||--|总交易流水号|
|tranAmount|number|false||--|交易金额|
|creditDebitFlag|varchar2|false||--|借贷标识d:借，c：贷|
|oppAccountNo|varchar2|false||--|对方账号|
|oppAccountName|varchar2|false||--|对方账户名称|
|oppOpenBankName|varchar2|false||--|对方开户行名称|
|abstract|varchar2|false||--|附言|
|balance|number|false||--|账户余额|
|hostTranCode|varchar2|false||--|主机交易码|
|createTime|date|false||--|创建时间|
|cashTransferFlag|number|false||--|现转标识 0：现金；1：转帐|

----
### ***fdBankZeroBalance***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|reportTime|date|false||--|报表时间|
|createdTime|date|false||sysdate|创建时间|
|accountId|number|false||--|实体卡编号|
|balance|number|false||--|理论余额|
|queryBalance|number|false||--|查询余额|

----
### ***fdBaseBusinessLine***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|businessId|number|false|yes|--|主键|
|businessName|varchar2|false||--|业务线名称|

----
### ***fdBaseChannelBusinessMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|mapId|number|false|yes|--|主键|
|businessId|number|false||--|业务线|
|channelNo|varchar2|false||--|渠道编号|

----
### ***fdBaseCoAccountName***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|accountId|number|false|yes|--|渠道账户编号|
|coAccountName|varchar2|false||--|收付款账户名称|
|coAccountType|number|false||--|账户类型：1：上游，2：下游,3:公司间结算账户,4:押金账户,5:手续费账户,6:佣金账户,7:sup上游,8:sp账户|
|createdUser|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|

----
### ***fdBaseCompanyAccountCap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|主键|
|accountName|varchar2|false||--|账号名称|
|companyId|number|false||--|所属公司账户|
|accountType|number|false||--|账户类型:1.运营投入,2.押金账户,3.保证金账户4.预付费5.短期借贷6.个人借支7毛利账户8.转账退款账户,9.活动专用账户10.手工退款账户12.费用账户|
|balance|number|false||--|余额(手续费为负债)|
|status|number|false||--|状态|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|
|useType|number|false||1|使用类型：1.投入账户（借支、短期为减），2.运营账户|

----
### ***fdBaseCompanyAccountImp***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|主键|
|accountName|varchar2|false||--|账号名称|
|companyId|number|false||--|所属公司账户|
|balance|number|false||--|余额(手续费为负债)|
|status|number|false||--|状态|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|

----
### ***fdBaseCompanyAccountRecv***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|账户编号|
|accountName|varchar2|false||--|账户名称|
|oweCompany|number|false||--|欠款公司|
|recvCompany|number|false||--|收款公司|
|balance|number|false||--|账户余额|
|remark|varchar2|false||--|描述|
|status|number|false||--|状态0:启用1:禁用|
|lastUpdateTime|date|false||sysdate|最后更新时间|
|lastUpdateUser|varchar2|false||--|最后更新人|

----
### ***fdBaseCompanyAccountSelf***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|主键|
|accountName|varchar2|false||--|账号名称|
|companyId|number|false||--|所属公司账户|
|accountType|number|false||--|账户类型:1.汇款手续费账户2.下游已付佣金账户,3.上游已收佣金4.毛利已提账户|
|balance|number|false||--|余额(手续费为负债)|
|status|number|false||--|状态|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|

----
### ***fdBaseCompanyInfo***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|companyId|number|false|yes|--|公司编号|
|companyName|varchar2|false||--|公司名称|
|initInputAmount|number|false||--|初始投入资金|
|sortName|varchar2|false||--|简称|
|status|number|false||--|0:有效，1无效|

----
### ***fdBaseCompanySettleConfig***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|configId|number|false|yes|--|配置编号|
|oweCompany|number|false||--|欠款公司|
|recvCompany|number|false||--|收款公司|
|upChannelNo|varchar2|false||*|上游渠道编号|
|downChannelNo|varchar2|false||*|下游渠道编号|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||*|运营商|
|provinceNo|varchar2|false||*|省份|
|cityNo|varchar2|false||*|地市|
|settleCost|number|false||--|结算折扣|
|status|number|false||--|状态|
|lastUpdateTime|date|false||sysdate|最后更新时间|
|lastUpdateUser|varchar2|false||--|最后更新人|

----
### ***fdBaseCompanySettleNew***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|configId|number|false|yes|--|配置编号|
|profitCompanyId|number|false||--|获取利润公司编号|
|relatedCompanyId|number|false||--|对应公司编号|
|statisticsType|number|false||--|统计类型，1.流量数据包，2前向流量充值，3话费、固话，4.加油卡充值，5.q币、游戏币|
|profitCost|number|false||--|利润折扣|
|status|number|false||--|状态|
|lastUpdateTime|date|false||sysdate|最后更新时间|
|lastUpdateUser|varchar2|false||--|最后更新人|

----
### ***fdBaseDownAccount***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|主键|
|accountName|varchar2|false||--|账号名称|
|queryBalance|number|false||--|查询余额|
|innerBalance|number|false||--|理论余额|
|creditMoney|number|false||--|授信金额|
|status|number|false||--|状态|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|
|isAutoAdd|number|false||1|是否自动加款|

----
### ***fdBaseDownAccountMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|mapId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|账号编号|
|isMainChannel|number|false||--|是否主关系|

----
### ***fdBaseDownChannel***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelNo|varchar2|false|yes|--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|serviceFee|number|false||--|手续费率|
|companyId|number|false||--|所属公司|
|status|number|false||--|状态|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|
|commiBalance|number|false||--|佣金余额|
|warnBalance|number|false||--|报警余额|
|warnType|number|false||1|报警类型:1.单个支付账户不足   2.合计支付账户不足|
|commiRule|varchar2|false||--|佣金规则|
|needCommi|number|false||1|是否需要后返佣金0需要，1不需要|
|manageUser|varchar2|false||--|开发/商务/运营|
|channelCompany|varchar2|false||--|渠道公司名称|
|autoAdd|number|false||1|自动加款，0：开启，1：关闭|
|autoAmount|number|false||--|自动加款金额|
|autoAddOnTime|date|false||--|自动加款开启时间|

----
### ***fdBaseDownImpMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|mapId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|倒款账号编号|

----
### ***fdBaseDownSystemMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|mapId|number|false|yes|--|主键|
|sourceSystemId|number|false||--|系统编号|
|channelNo|varchar2|false||--|渠道编号|

----
### ***fdBaseDownUpMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|mapId|number|false|yes|--|主键|
|downChannelNo|varchar2|false||--|下游渠道|
|upChannelNo|varchar2|false||--|上游渠道|

----
### ***fdBaseSourceSystem***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|sourceSystemId|number|false|yes|--|主键|
|sourceSystemName|varchar2|false||--|系统名称|
|text|varchar2|false||--|显示名称|

----
### ***fdBaseUpAccount***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|主键|
|accountName|varchar2|false||--|账号名称|
|accountType|number|false||--|账户类型（1.系统账户2.支付账户）|
|queryBalance|number|false||--|查询余额|
|innerBalance|number|false||--|理论余额|
|status|number|false||--|状态|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|
|isAutoAdd|number|false||1|是否自动加款|

----
### ***fdBaseUpAccountBank***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false||--|主键(对应上游账户主键)|
|title|varchar2|false||--|标题(区分银行卡用途)|
|cardNo|varchar2|false||--|银行卡卡号|
|cardPwd|varchar2|false||--|银行卡密码|
|cardHolder|varchar2|false||--|银行卡持有人|
|bankType|number|false||--|银行类型|
|bankName|varchar2|false||--|银行卡所属银行|
|bankAddress|varchar2|false||--|开户行|
|remark|varchar2|false||--|备注|
|createBy|varchar2|false||--|创建人|
|createTime|date|false||sysdate|创建时间|

----
### ***fdBaseUpAccountMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|mapId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|支付账号编号|
|isMainChannel|number|false||--|是否主关系|

----
### ***fdBaseUpAccountSync***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|主键|
|accountId|number|false||--|账户编号|
|needSyncAdd|number|false||1|是否需要同步加款、提款到18系统|

----
### ***fdBaseUpChannel***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelNo|varchar2|false|yes|--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|status|number|false||--|状态|
|serviceFee|number|false||--|手续费率|
|companyId|number|false||--|所属公司|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|
|commiBalance|number|false||--|佣金余额|
|warnBalance|number|false||--|报警余额|
|warnType|number|false||1|报警类型:1.单个支付账户不足   2.合计支付账户不足|
|maxAdd|number|false||--|加款上限提示值|
|minAdd|number|false||--|加款下限提示值|
|commiRule|varchar2|false||--|佣金规则|
|needCommi|number|false||1|是否需要后返佣金0需要，1不需要|
|classification|number|false||--|渠道分类--对应业务类型|
|capitalClass|number|false||--|渠道资金分类：1.普通话费、2.普通流量、3.特殊话费、4.特殊流量、0.其他渠道|
|billType|number|false||1|开票类型:1前向2-后向|
|manageUser|varchar2|false||--|开发/商务/运营|
|canAdd|number|false||--|允许加款（0允许，1禁止）|
|channelCompany|varchar2|false||--|渠道公司名称|

----
### ***fdBaseUpSystemMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|mapId|number|false|yes|--|主键|
|sourceSystemId|number|false||--|系统编号|
|channelNo|varchar2|false||--|渠道编号|

----
### ***fdReportAddWarn***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|warnDate|date|false||sysdate|报警时间|
|channelName|varchar2|false||--|渠道名称|
|eightBalance|number|false||--|八点余额|
|yesterdayAdd|number|false||--|昨日加款|
|balanceRatio|number|false||--|余额占比|
|channelNo|varchar2|false||--|渠道编号|

----
### ***fdReportBalanceDiffer***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|主键|
|accountType|number|false||--|账户类型：1、上游渠道账户，2、下游渠道账户|
|accountId|number|false||--|账户编号|
|balanceDifference|number|false||--|余额差异|
|noteTime|date|false||sysdate|记录时间|
|noteUser|varchar2|false||--|记录人|

----
### ***fdReportBankDaily***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|accountId|number|false||--|实体卡账号编号|
|addAmount|number|false||--|加款金额|
|minusAmount|number|false||--|减款金额|
|balance|number|false||--|账户余额|
|snapTime|date|false||--|日期|

----
### ***fdReportCapOffsetChannel***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|配置编号|
|channelSystemId|number|false||--|渠道系统编号|
|channelType|number|false||--|渠道类型，1上游渠道，2下游渠道|
|channelNo|varchar2|false||--|渠道编号|

----
### ***fdReportCapitalUseRate***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|snapTime|date|false||--|记录日期|
|createTime|date|false||sysdate|创建时间|
|companyId|number|false||--|渠道所属公司|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|支付账户|
|channelName|varchar2|false||--|渠道名称|
|accountName|varchar2|false||--|账户名称|
|channelStatus|number|false||--|渠道状态|
|capitalClass|number|false||--|渠道资金分类：1.普通话费、2.普通流量、3.特殊话费、4.特殊流量、0.其他渠道|
|accountBalance|number|false||--|统计时账户余额，早上8点统计|
|yesterdayDraw|number|false||--|昨天交易量|
|befYesterdayDraw|number|false||--|前天交易量|
|threeDaysAgoDraw|number|false||--|大前天交易量|
|averageDraw|number|false||--|最近三天平均交易量|
|noDrawDays|number|false||--|累计无交易天数（余额小于1000且无交易的清零）|
|syncStatus|number|false||1|同步状态，0、同步完成，1等待同步，2正在同步|
|syncBatch|number|false||--|同步批次号|

----
### ***fdReportChannelHalfhour***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|channelType|number|false||--|渠道类型（1.上游，2下游）|
|channelNo|varchar2|false||--|渠道编号|
|orderSource|number|false||--|系统编号|
|tradeCount|number|false||--|交易条数|
|tradeAmount|number|false||--|交易金额|
|collectTime|date|false||--|半小时统计开始时间|

----
### ***fdReportCommiProfitDaily***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|companyId|number|false||--|公司编号|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|支付账户编号|
|channelType|number|false||--|渠道类型1.上游2．下游|
|businessType|number|false||--|业务类型|
|billType|number|false||1|利润类型，1.前向，2后向|
|totalUnit|number|false||--|充值规格|
|totalFace|number|false||--|充值面值|
|drawAmount|number|false||--|扣款金额|
|realAmount|number|false||--|实际金额|
|commission|number|false||--|佣金|
|profits|number|false||--|利润|
|serviceFee|number|false||--|实时扣除佣金(手续费)|
|refundTotalUnit|number|false||--|退款规格|
|refundTotalFace|number|false||--|退款面值|
|refundDrawAmount|number|false||--|退款金额|
|refundRealAmount|number|false||--|实际退款金额|
|refundCommission|number|false||--|退回佣金|
|refundProfits|number|false||--|退回利润|
|refundServiceFee|number|false||--|退回实时扣除佣金（手续费）|
|upManyFace|number|false||--|上游多冲的面值|
|upManyAmount|number|false||--|上游多冲的金额|
|snapTime|date|false||--|快照时间(交易数据日期)|
|addStatus|number|false||1|账户加款状态 1.未开始，2.正在扣款，0.扣款完成，9.加款失败|
|statisticsType|number|false||--|统计类型，1.流量数据包，2前向流量充值，3话费、固话，4.加油卡充值，5.q币、游戏币|
|channelName|varchar2|false||--|渠道名称|
|accountName|varchar2|false||--|支付账户名称|
|syncStatus|number|false||1|同步诚实系统状态，0同步完成，1未进行同步，2正在同步，9同步失败|
|syncBatch|number|false||--|数据同步批次号|
|channelSourceSystem|number|false||--|渠道所属系统编号|

----
### ***fdReportCommiProfitRedo***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|companyId|number|false||--|公司编号|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|支付账户编号|
|channelType|number|false||--|渠道类型1.上游2．下游|
|businessType|number|false||--|业务类型|
|billType|number|false||1|利润类型，1.前向，2后向|
|totalUnit|number|false||--|充值规格|
|totalFace|number|false||--|充值面值|
|drawAmount|number|false||--|扣款金额|
|realAmount|number|false||--|实际金额|
|commission|number|false||--|佣金|
|profits|number|false||--|利润|
|serviceFee|number|false||--|实时扣除佣金(手续费)|
|refundTotalUnit|number|false||--|退款规格|
|refundTotalFace|number|false||--|退款面值|
|refundDrawAmount|number|false||--|退款金额|
|refundRealAmount|number|false||--|实际退款金额|
|refundCommission|number|false||--|退回佣金|
|refundProfits|number|false||--|退回利润|
|refundServiceFee|number|false||--|退回实时扣除佣金（手续费）|
|upManyFace|number|false||--|上游多冲的面值|
|upManyAmount|number|false||--|上游多冲的金额|
|snapTime|date|false||--|快照时间(交易数据日期)|
|addStatus|number|false||1|账户加款状态 1.未开始，2.正在扣款，0.扣款完成，9.加款失败|
|statisticsType|number|false||--|统计类型，1.流量数据包，2前向流量充值，3话费、固话，4.加油卡充值，5.q币、游戏币|
|channelName|varchar2|false||--|渠道名称|
|accountName|varchar2|false||--|支付账户名称|
|syncStatus|number|false||1|同步诚实系统状态，0同步完成，1未进行同步，2正在同步，9同步失败|
|syncBatch|number|false||--|数据同步批次号|
|channelSourceSystem|number|false||--|渠道所属系统编号|

----
### ***fdReportCommissionDaily***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|channelType|number|false||--|渠道类型1.上游2．下游|
|commission|number|false||--|佣金|
|snapTime|date|false||--|快照时间|

----
### ***fdReportCommissionMonthly***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|channelType|number|false||--|渠道类型1.上游2．下游|
|totalCommission|number|false||--|佣金|
|drawCommission|number|false||--|提取或支付佣金|
|snapTime|date|false||--|月份|

----
### ***fdReportDownDaily***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|reportTime|date|false||--|报表时间|
|billType|number|false||--|利润类型:1-前向2-后向|
|businessType|number|false||--|业务类型|
|channelNo|varchar2|false||--|渠道编号|
|orderCount|number|false||--|订单数量|
|tradeFace|number|false||--|交易面值|
|tradeUnit|number|false||--|交易数量|
|costFee|number|false||--|扣款金额|
|realFee|number|false||--|实际扣款|
|refundFace|number|false||--|退款面值|
|refundUnit|number|false||--|退款数量(m)|
|refundFee|number|false||--|退款金额|
|refundReal|number|false||--|实际退款|

----
### ***fdReportOutsysProfit***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|sourceSystemId|number|false||--|外部系统编号|
|recordDate|date|false||--|记录时间|
|createTime|date|false||--|创建时间|
|profit|number|false||--|利润数据|

----
### ***fdReportProfitDaily***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|companyId|number|false||--|公司编号|
|billType|number|false||--|利润类型:1-前向2-后向|
|rechargeFee|number|false||--|充值金额|
|downRefundFee|number|false||--|下游退款|
|upCostFee|number|false||--|上游扣款|
|upRefundFee|number|false||--|上游退款|
|serviceFee|number|false||--|手续费|
|profits|number|false||--|利润|
|snapTime|date|false||--|快照时间|

----
### ***fdReportProfitMonthly***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|companyId|number|false||--|公司编号|
|billType|number|false||--|利润类型:1-前向2-后向|
|rechargeFee|number|false||--|充值金额|
|downRefundFee|number|false||--|下游退款|
|upCostFee|number|false||--|上游扣款|
|upRefundFee|number|false||--|上游退款|
|serviceFee|number|false||--|手续费|
|totalProfits|number|false||--|总利润|
|drawProfits|number|false||--|已提取利润|
|snapTime|date|false||--|月份|

----
### ***fdReportServiceFee***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|reportMonth|date|false||--|手续费月份|
|companyId|number|false||--|公司编号|
|channelNo|varchar2|false||--|下游渠道编号|
|serviceFee|number|false||--|手续费|

----
### ***fdReportUpDaily***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|reportTime|date|false||--|报表时间|
|billType|number|false||--|利润类型:1-前向2-后向|
|businessType|number|false||--|业务类型|
|channelNo|varchar2|false||--|渠道编号|
|orderCount|number|false||--|订单数量|
|tradeFace|number|false||--|交易面值|
|tradeUnit|number|false||--|交易数量|
|costFee|number|false||--|成本金额|
|realFee|number|false||--|实际扣款|
|refundFace|number|false||--|退款面值|
|refundUnit|number|false||--|退款数量(m)|
|refundFee|number|false||--|退款金额|
|refundReal|number|false||--|实际退款|

----
### ***fdReportZeroBalance***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|recordDate|date|false||--|报表时间|
|createdTime|date|false||sysdate|创建时间|
|accountType|number|false||--|账户类型1:上游渠道2:下游渠道3:银行账户4:收款账户5:资产账户6:非资产账户7:倒款账户|
|accountId|number|false||--|账户编号|
|channelNo|varchar2|false||-|渠道编号|
|balance|number|false||--|理论余额|
|accountName|varchar2|false||-|账户名称|
|channelName|varchar2|false||-|渠道名称|
|queryBalance|number|false||--|查询余额|
|channelStatus|number|false||--|渠道状态|
|accountStatus|number|false||--|账户状态|
|companyId|number|false||--|所属公司|
|downFirstFace|number|false||--|下游与上游扣款的时间差造成的差异面值（只有下游渠道记录）|
|downFirstAmount|number|false||--|下游与上游扣款的时间差造成的差异金额（只有下游渠道记录）|
|coAccountType|number|false||--|资产账户与非资产账户对应的账户类型|
|syncStatus|number|false||1|同步诚实系统状态，0同步完成，1未进行同步，2正在同步，9同步失败|
|syncBatch|number|false||--|数据同步批次号|
|channelSourceSystem|number|false||--|渠道所属系统编号|
|channelClassif|number|false||--|渠道分类（主要用于上游渠道）|
|warnBalance|number|false||--|上游渠道预警余额/下游渠道授信余额|

----
### ***fdReportZeroBalanceCs***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|--|
|recordDate|date|false||--|--|
|createdTime|date|false||sysdate|--|
|accountType|number|false||--|--|
|accountId|number|false||--|--|
|channelNo|varchar2|false||-|--|
|balance|number|false||--|--|
|accountName|varchar2|false||-|--|
|channelName|varchar2|false||-|--|
|queryBalance|number|false||--|--|
|channelStatus|number|false||--|--|
|accountStatus|number|false||--|--|
|companyId|number|false||--|--|
|downFirstFace|number|false||--|--|
|downFirstAmount|number|false||--|--|
|syncStatus|number|false||1|--|
|syncBatch|number|false||--|--|

----
### ***fdReprotChannelSnap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|snapId|number|false|yes|--|主键|
|channelType|number|false||--|渠道类型|
|channelNo|varchar2|false||--|渠道编号|
|billType|number|false||--|利润类型:1-前向2-后向|
|businessType|number|false||--|业务类型|
|realCostFee|number|false||--|实际账户扣款|
|orderCostFee|number|false||--|下单扣款|
|addAmount|number|false||--|加款金额|
|balance|number|false||--|渠道余额|
|snapDate|date|false||--|快照日期|

----
### ***fdSystemBusinessInfo***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|businessType|number|false||--|业务类型编码|
|businessTypeName|varchar2|false||--|业务类型名称|

----
### ***fdSystemBusinessMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|主键|
|sourceSystemId|number|false||--|系统id|
|outerBusinessType|number|false||--|外部系统业务类型编号|
|localBusinessType|number|false||--|记账系统业务类型编号|

----
### ***fdSystemBusinessStatisMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|主键|
|localBusinessType|number|false||--|记账系统业务类型编号|
|statisticsType|number|false||--|财务渠道分类|

----
### ***fdSystemCantonInfo***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|cantonCode|varchar2|false|yes|--|区域编号|
|chineseName|varchar2|false||--|中文名称|
|spell|varchar2|false||--|英文或全拼|
|grade|number|false||--|行政级别|
|parent|varchar2|false||--|父级|
|simpleSpell|varchar2|false||--|简拼|
|areaCode|varchar2|false||--|区号|
|standardCode|number|false||--|标准行政编码|

----
### ***fdSystemDictionary***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|value|varchar2|false||--|枚举项的值|
|description|varchar2|false||--|枚举项的描述[即显示信息]|
|belongEnum|varchar2|false||--|所属枚举|
|sortId|number|false||--|枚举内的排序|
|groupId|varchar2|false||*|分组|
|belongSystem|varchar2|false||--|所属系统|
|status|number|false||--|状态0启用1禁用|

----
### ***fdSystemDownProfitMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|channelNo|varchar2|false||--|渠道|
|profitRatio|number|false||--|利润分配给下游的比例|

----
### ***fdSystemHandleLog***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|logId|number|false|yes|--|主键|
|handleModule|varchar2|false||--|操作功能模块|
|handleUser|varchar2|false||--|操作人|
|handleTime|date|false||sysdate|操作时间|
|handleParams|varchar2|false||--|参数|

----
### ***fdSystemLog***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|logId|number|false|yes|--|日志流水号|
|objectName|varchar2|false||--|对象名称|
|errorCode|number|false||200|错误码|
|errorDesc|varchar2|false||--|错误信息|
|manualDesc|varchar2|false||--|人工描述|
|createdTime|date|false||sysdate|发生时间|
|trace|varchar2|false||--|异常跟踪|
|errorLevel|varchar2|false||error|错误级别|

----
### ***fdSystemWarn***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|warnId|number|false|yes|--|报警编号|
|uniqId|varchar2|false||--|唯一标识|
|warnLevel|number|false||--|等级|
|warnType|number|false||--|类型|
|title|varchar2|false||--|标题|
|warnDate|date|false||sysdate|报警时间|
|content|varchar2|false||--|报警内容|
|syncStatus|number|false||1|同步状态 0同步完成  1未同步 2正在同步|
|keyWord|varchar2|false||--|关键字|
|syncBatchId|number|false||--|批次号|
|systemNo|varchar2|false||sa|--|

----
### ***fdTradeActivityDetails***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|主键|
|activityId|number|false||--|活动编号|
|tradeRecordNo|varchar2|false||--|交易系统记录编号|
|businessType|number|false||--|记账系统业务类型|
|billType|number|false||--|交易类型，1前向，2后向|
|changeType|number|false||--|活动变动类型，1预付款，2增加后返利润，3减少后返利润|
|changeAmount|number|false||--|变动金额|
|changeTime|date|false||--|变动时间|
|changeUser|varchar2|false||--|变动人|
|memo|varchar2|false||--|备注信息|

----
### ***fdTradeActivityMain***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|主键|
|channelNo|varchar2|false||--|下游渠道编号|
|channelAccountId|number|false||--|下游渠道账户编号|
|activityName|varchar2|false||--|活动名称|
|activityContent|varchar2|false||--|活动内容|
|activityInputAmount|number|false||--|活动初始投入金额|
|hasClosed|number|false||--|活动已近结束，0已经结束，1还未结束|
|createTime|date|false||--|活动创建时间|
|createUser|varchar2|false||--|活动创建人|
|closeTime|date|false||--|活动结束时间|
|closeUser|varchar2|false||--|活动结束人|
|activityType|number|false||1|活动类型，1.预付活动，2.垫付活动|
|activityReturnAmount|number|false||--|活动回笼资金|

----
### ***fdTradeBaseJoin***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|joinCode1|varchar2|false||-|关联字段1|
|joinCode2|varchar2|false||-|关联字段2|
|joinMemo|varchar2|false||--|关联备注信息|
|joinType|varchar2|false||-|关联类型 1.上游佣金关联，2下游佣金关联|

----
### ***fdTradeCoCapFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|changeId|number|false|yes|--|变动编号|
|accountId|number|false||--|公司资产账户编号|
|changeAmount|number|false||--|变动金额|
|changeType|number|false||--|变动类型1加款2减款3红冲（负值）|
|balance|number|false||--|账户余额|
|changeTime|date|false||sysdate|变动时间|
|adjustId|number|false||--|红冲编号|
|hasAdjust|number|false||1|是否红冲过|
|bankBatchId|number|false||--|实体卡变动批次号处理号（记录转账的出账、入账、手续费）|
|memo|varchar2|false||--|备注|
|recordNo|varchar2|false||-|预付款同步编号,转账退款18退款编号|
|createUser|varchar2|false||--|创建人|
|fdOrderId|number|false||--|转账退款订单号|
|transferRefundId|number|false||--|转账退款退款编号|
|transferDrawId|number|false||--|转账退款退款提款编号|

----
### ***fdTradeCoCapFundJfb***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|changeId|number|false|yes|--|变动编号，和fd_trade_co_cap_fund对应|
|tradeMonth|date|false||--|积分交易月份|
|downChannelNo|varchar2|false||--|交易下游渠道|
|downAccountId|number|false||--|交易下游渠道账户|
|businessType|number|false||--|业务类型|
|settleStatus|number|false||--|开票结算状态 0.已结算，1等待结算，9无需结算|

----
### ***fdTradeCoImpFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|changeId|number|false|yes|--|变动编号|
|accountId|number|false||--|公司资产账户编号|
|changeAmount|number|false||--|变动金额|
|changeType|number|false||--|变动类型1加款2减款3红冲（负值）|
|useType|number|false||--|使用类型1.下游加款2.支付宝倒款3.财富通倒款99其他|
|balance|number|false||--|账户余额|
|changeTime|date|false||sysdate|变动时间|
|adjustId|number|false||--|红冲编号|
|hasAdjust|number|false||1|是否红冲过|
|bankBatchId|number|false||--|实体卡变动批次号处理号（记录转账的出账、入账、手续费）|
|partnerAccount|varchar2|false||--|倒款的来源账号或加款的渠道编号|
|createUser|varchar2|false||--|创建人|
|remark|varchar2|false||--|备注|

----
### ***fdTradeCoRecvFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|changeId|number|false|yes|--|变动编号|
|accountId|number|false||--|公司资金账户编号|
|changeAmount|number|false||--|变动金额|
|changeType|number|false||--|变动类型1加款2扣款3退款|
|balance|number|false||--|账户余额|
|changeTime|date|false||sysdate|变动时间|
|hasAdjust|number|false||1|是否红冲过|
|adjustId|number|false||--|红冲编号|
|bankBatchId|number|false||--|实体卡变动批次号处理号（记录转账的出账、入账、手续费）|
|handleUser|varchar2|false||--|操作人（结算加款时记录）|
|remark|varchar2|false||--|备注|

----
### ***fdTradeCoSelfFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|changeId|number|false|yes|--|变动编号|
|accountId|number|false||--|公司独立资金账户编号|
|changeAmount|number|false||--|变动金额|
|changeType|number|false||--|变动类型1加款2减款3红冲|
|balance|number|false||--|账户余额(手续费为负债)|
|changeTime|date|false||sysdate|变动时间|
|adjustId|number|false||--|红冲编号|
|hasAdjust|number|false||1|是否红冲过|
|bankBatchId|number|false||--|实体卡变动批次号处理号（记录转账的出账、入账、手续费）|
|memo|varchar2|false||--|备注|
|createUser|varchar2|false||--|创建人|

----
### ***fdTradeCommissionSettle***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|reportId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|channelType|number|false||--|渠道类型|
|commission|number|false||--|佣金|
|settleMonth|date|false||--|佣金的月份|
|settleStatus|number|false||--|结算状态|
|settleUser|varchar2|false||--|结算人|
|settleTime|date|false||--|结算时间|
|hasAdjust|number|false||1|是否红冲过|
|adjustId|number|false||--|红冲编号|
|bankBatchId|number|false||--|红冲对应实体卡变动记录编号|
|settleType|number|false||--|结算类型：1佣金结算，2转渠道余额  3.佣金加款|
|commiBalance|number|false||--|佣金余额|
|memo|varchar2|false||--|备注|

----
### ***fdTradeDifferSummary***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|adjustId|number|false|yes|--|主键|
|recordDate|date|false||--|记录时间|
|companyId|number|false||--|公司编号|
|channelNo|varchar2|false||--|下游渠道编号|
|accountId|number|false||--|下游支付账户编号|
|businessType|number|false||--|业务类型|
|downFirstFace|number|false||--|下游与上游扣款的时间差造成的差异面值(上下游扣款有时间差异时造成，下扣、下退、上扣、上退)|
|downFirstAmount|number|false||--|下游与上游扣款的时间差造成的差异金额|

----
### ***fdTradeDownAddApply***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|applyId|number|false|yes|--|申请编号|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|渠道账户编号|
|addAmount|number|false||--|申请加款金额|
|applyAccountNo|varchar2|false||--|客户打款账号|
|bankType|number|false||--|银行类型-1.其它0.财付通1.支付宝2.移动钱包3.19e钱包4.银行账户5.北京银行6.建设银行7.京东8.民生银行9.联通迷你10.交通银行11.财付通企业|
|applyAccountName|varchar2|false||--|客户账户名称|
|applyOpenBankName|varchar2|false||--|客户开户行名称|
|status|number|false||--|处理状态0：处理完成，10：未处理，20：处理中，90：处理失败|
|createTime|date|false||--|申请时间|
|createUser|varchar2|false||--|申请人|
|payTime|date|false||--|付款时间|
|tranNo|varchar2|false||--|柜员交易号（处理成功添加）|
|handleTime|date|false||--|处理时间（处理后添加）|
|errorMsg|varchar2|false||--|错误消息（处理失败后添加）|
|flowStatus|number|false||10|流水状态修改  0：已修改，10：未修改 ，20：修改中，90：失败|
|auditUser|varchar2|false||--|处理人|
|auditMemo|varchar2|false||--|处理备注|
|bankAccountId|number|false||--|收款银行id|
|reciveTime|date|false||--|收款时间|
|memo|varchar2|false||--|加款申请备注|

----
### ***fdTradeDownFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|fdOrderId|number|false||--|记账系统订单号|
|channelNo|varchar2|false||--|下游渠道编号|
|accountId|number|false||--|下游支付账号|
|tradeOrderNo|varchar2|false||-|交易系统订单号|
|extOrderNo|varchar2|false||-|扩展订单号交易系统供|
|orderSource|number|false||--|订单来源（系统编号）|
|createTime|date|false||sysdate|变动创建时间|
|orderTime|date|false||--|订单日期(交易系统下单日期)|
|changeType|number|false||--|变更类型  1:加款 2：交易扣款 3：交易退款  4: 提款|
|changeAmount|number|false||--|变动金额|
|balance|number|false||--|账户余额|
|memo|varchar2|false||--|备注|
|serviceFee|number|false||--|下游扣款退款时产生的手续费|

----
### ***fdTradeDownFundHs***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|fdOrderId|number|false||--|记账系统订单号|
|channelNo|varchar2|false||--|下游渠道编号|
|accountId|number|false||--|下游支付账号|
|tradeOrderNo|varchar2|false||-|交易系统订单号|
|extOrderNo|varchar2|false||-|扩展订单号交易系统供|
|orderSource|number|false||--|订单来源（系统编号）|
|createTime|date|false||sysdate|变动创建时间|
|orderTime|date|false||--|订单日期(交易系统下单日期)|
|changeType|number|false||--|变更类型   1:加款 2：交易扣款 3：交易退款|
|changeAmount|number|false||--|变动金额|
|balance|number|false||--|账户余额|
|memo|varchar2|false||--|备注|
|serviceFee|number|false||--|下游扣款退款时产生的手续费|

----
### ***fdTradeDownManual***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|账户编号|
|adjustId|number|false||--|红冲编号|
|hasAdjust|number|false||1|是否红冲过|
|addType|number|false||--|变动类型:11-加款+ 12-红冲-  21-扣款平帐加+  22-扣款平帐减-  31-退款平帐加+  32-退款平帐减- 41-余额平帐加+ 42-余额平帐减-|
|changeAmount|number|false||--|变动金额,只有红冲的时候为负数|
|changeTime|date|false||sysdate|变动时间|
|balance|number|false||--|余额|
|createUser|varchar2|false||--|创建人|
|bankFundId|number|false||--|银行资金变动编号(红冲时用)|
|partnerAccount|varchar2|false||--|合作方银行账户|
|memo|varchar2|false||--|备注|
|extRecordNo|varchar2|false||--|外部加款记录编号|
|serviceId|number|false||--|收取手续费的记录的编号(渠道手续费)|
|realAmount|number|false||--|交易平账真实金额|

----
### ***fdTradeDownManualYc***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|账户编号|
|adjustId|number|false||--|红冲编号|
|hasAdjust|number|false||1|是否红冲过|
|addType|number|false||--|变动类型:11-加款+ 12-红冲-  21-扣款平帐加+  22-扣款平帐减-  31-退款平帐加+  32-退款平帐减- 41-余额平帐加+ 42-余额平帐减-|
|changeAmount|number|false||--|变动金额,只有红冲的时候为负数|
|changeTime|date|false||sysdate|变动时间|
|balance|number|false||--|余额|
|createUser|varchar2|false||--|创建人|
|bankFundId|number|false||--|银行资金变动编号(红冲时用)|
|partnerAccount|varchar2|false||--|合作方银行账户|
|memo|varchar2|false||--|备注|
|extRecordNo|varchar2|false||--|外部加款记录编号|
|serviceId|number|false||--|收取手续费的记录的编号(渠道手续费)|
|realAmount|number|false||--|交易平账真实金额|
|businessType|number|false||--|云充记录业务类型|
|billType|number|false||--|云充记录开票类型|
|dealStatus|number|false||--|合并平账状态，0已处理，1未处理，2正在处理|

----
### ***fdTradeDownRefund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|下游渠道编号|
|accountId|number|false||--|下游账户编号|
|fdOrderId|number|false||--|记账系统订单号|
|tradeOrderNo|varchar2|false||-|交易系统订单号|
|tradeRefundNo|varchar2|false||--|交易系统退款号|
|orderSource|number|false||--|订单来源（系统编号）|
|refundTime|date|false||sysdate|退款创建时间|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份|
|refundUnit|number|false||--|退款总量|
|refundFace|number|false||--|退款面值|
|refundAmount|number|false||--|退款金额|
|realRefund|number|false||--|实际金额|
|memo|varchar2|false||--|备注|
|hasSynUp|number|false||1|是否同步上游 0.已同步 1.未同步|

----
### ***fdTradeOrderMain***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|fdOrderId|number|false|yes|--|主键|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游扣款账号|
|downCompanyId|number|false||--|下游公司编号|
|tradeOrderNo|varchar2|false||--|交易系统订单号|
|extOrderNo|varchar2|false||--|扩展订单号交易系统供|
|orderSource|number|false||--|订单来源（系统编号）|
|createTime|date|false||sysdate|订单添加时间|
|orderTime|date|false||--|订单日期(交易系统下单日期)|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份|
|cityNo|varchar2|false||--|城市|
|totalFace|number|false||--|总面值|
|rechargeUnit|number|false||--|充值总量|
|rechargeAccountNo|varchar2|false||--|充值号码|
|hasUpTrade|number|false||--|是否产生上游扣款 0.已产生 1.未产生|
|downOrderAmount|number|false||--|下游扣款金额|

----
### ***fdTradeOrderMainDiffer***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|differId|number|false|yes|--|主键|
|recordDate|date|false||--|记录生成日期|
|fdOrderId|number|false||--|记账系统订单号|
|channelNo|varchar2|false||--|下游渠道编号|
|accountId|number|false||--|下游渠道支付账户编号|
|businessType|number|false||--|业务类型|
|downFirstFace|number|false||--|下游与上游扣款的时间差造成的差异面值(上下游扣款有时间差异时造成，下扣、下退、上扣、上退)|
|downFirstAmount|number|false||--|下游与上游扣款的时间差造成的差异金额|

----
### ***fdTradeOrderMainHs***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|fdOrderId|number|false|yes|--|主键|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游扣款账号|
|downCompanyId|number|false||--|下游公司编号|
|tradeOrderNo|varchar2|false||--|交易系统订单号|
|extOrderNo|varchar2|false||--|扩展订单号交易系统供|
|orderSource|number|false||--|订单来源（系统编号）|
|createTime|date|false||sysdate|订单添加时间|
|orderTime|date|false||--|订单日期(交易系统下单日期)|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份|
|cityNo|varchar2|false||--|城市|
|totalFace|number|false||--|总面值|
|rechargeUnit|number|false||--|充值总量|
|rechargeAccountNo|varchar2|false||--|充值号码|
|hasUpTrade|number|false||--|是否产生上游扣款 0.已产生 1.未产生|
|downOrderAmount|number|false||--|下游扣款金额|

----
### ***fdTradeOrderMainUn***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|fdOrderId|number|false|yes|--|主键|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游扣款账号|
|downCompanyId|number|false||--|下游公司编号|
|tradeOrderNo|varchar2|false||--|交易系统订单号|
|extOrderNo|varchar2|false||--|扩展订单号交易系统供|
|orderSource|number|false||--|订单来源（系统编号）|
|createTime|date|false||sysdate|订单添加时间|
|orderTime|date|false||--|订单日期(交易系统下单日期)|
|businessType|number|false||--|业务类型|
|totalFace|number|false||--|总面值|
|downOrderAmount|number|false||--|下游销售金额|
|upPhoneAmount|number|false||--|上游手机成本|
|upBillAmount|number|false||--|上游预存话费成本|
|downOrderRefund|number|false||--|下游销售退款|
|upPhoneRefund|number|false||--|上游手机成本退款|
|upBillRefund|number|false||--|上游预存话费成本退款|
|userId|varchar2|false||-|用户id|
|phoneNo|varchar2|false||-|合约机号码|
|userName|varchar2|false||-|用户姓名|
|idCardNo|varchar2|false||-|用户身份证号|
|recAddress|varchar2|false||-|用户收货地址|
|saleUser|varchar2|false||-|销售客服|
|hasInvoice|number|false||1|是否开票，0.已开，1未开|

----
### ***fdTradeProfitDraw***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|reportId|number|false|yes|--|主键|
|companyId|number|false||--|公司编号|
|profit|number|false||--|提取利润|
|drawMonth|date|false||--|利润的月份|
|drawBillType|number|false||--|利润类型:1-前向2-后向|
|drawStatus|number|false||--|提取状态|
|drawUser|varchar2|false||--|提取人|
|drawTime|date|false||--|提取时间|
|hasAdjust|number|false||1|是否红冲过|
|adjustId|number|false||--|红冲编号|
|bankFundId|number|false||--|红冲对应实体卡变动记录编号|

----
### ***fdTradeProfitFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|fundId|number|false|yes|--|主键（利润任务相同）|
|recordId|number|false||--|月报表编号|
|companyId|number|false||--|公司编号|
|billType|number|false||--|利润类型:1-前向2-后向|
|snapTime|date|false||--|月份|
|changeType|number|false||--|变动类型（11总利润加款12总利润平账加款13总利润平账减款21提取利润加款22提取利润红冲）|
|dealCount|number|false||--|总利润加款统计条数|
|totalProfitsFund|number|false||--|总利润变动金额|
|drawProfitsFund|number|false||--|已提取利润变动金额|
|totalProfitsBalance|number|false||--|总利润余额|
|drawProfitsBalance|number|false||--|已提取利润余额|
|coProfitsBalance|number|false||--|公司利润余额|
|changeDate|date|false||sysdate|变动时间|

----
### ***fdTradeRvApply***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|applyId|number|false|yes|--|申请记录编号|
|channelNo|varchar2|false||--|渠道编号|
|accountId|varchar2|false||--|账户编号|
|channelType|number|false||--|渠道类型，1上游，2下游|
|businessType|number|false||--|业务类型|
|billType|number|false||--|前后项信息|
|differAmount|number|false||--|差异金额|
|differReason|varchar2|false||--|差异原因|
|differDetail|varchar2|false||--|差异详情|
|applyTime|date|false||--|申请时间|
|applyUser|varchar2|false||--|申请人|
|applyStatus|number|false||--|申请所处状态 1提交申请，9作废，0处理完成|
|dealRvType|number|false||--|处理平账类型，1交易平账，2余额平账|
|dealBusinessType|number|false||--|处理业务类型|
|dealBillType|number|false||--|处理前后项信息|
|dealTradeAmount|number|false||--|处理平账交易金额|
|dealRealAmount|number|false||--|处理平账真实金额|
|dealTime|date|false||--|处理时间|
|dealUser|varchar2|false||--|处理人|
|dealFlowId|number|false||--|关联平账流水号|
|dealMemo|varchar2|false||--|处理备注|

----
### ***fdTradeTimeDiffer***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|differId|number|false||--|--|
|recordDate|date|false||--|--|
|fdOrderId|number|false||--|--|
|channelNo|varchar2|false||--|--|
|accountId|number|false||--|--|
|businessType|number|false||--|--|
|downFirstFace|number|false||--|--|
|downFirstAmount|number|false||--|--|

----
### ***fdTradeUpFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|fdOrderId|number|false||--|记账系统订单号|
|tradeOrderNo|varchar2|false||-|交易系统订单号|
|orderSource|number|false||--|订单来源（系统编号）|
|tradeDeliveryNo|varchar2|false||--|交易系统发货号|
|downChannelNo|varchar2|false||-|下游渠道编号|
|downAccountId|number|false||--|下游账户|
|downCompanyId|number|false||--|下游所属公司|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upAccountId|number|false||--|上游账户|
|upCompanyId|number|false||--|上游所属公司|
|downDrawUnit|number|false||--|下游充值量|
|downDrawFace|number|false||--|下游扣款面值|
|downDrawAmount|number|false||--|下游扣款金额|
|downRealAmount|number|false||--|下游实际金额|
|upDrawUnit|number|false||--|上游充值量|
|upDrawFace|number|false||--|上游成功面值|
|upDrawAmount|number|false||--|上游扣款金额|
|upRealAmount|number|false||--|上游实际金额|
|changeTime|date|false||sysdate|变动时间|
|changeType|number|false||--|变更类型 1:加款 2：交易扣款 3：交易退款|
|billType|number|false||1|利润类型:前向2-后向|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||-|运营商|
|provinceNo|varchar2|false||-|省份|
|balance|number|false||--|余额|
|profits|number|false||--|利润|
|downCommission|number|false||--|下游后返佣金|
|upCommission|number|false||--|上游后返佣金|
|settleAmount|number|false||--|结算金额|
|settleBatchId|number|false||--|结算批次号|
|settleStatus|number|false||10|结算状态:20-等待结算,0-结算成功,10-无需结算,90-结算失败|
|settleTime|date|false||--|结算时间|
|memo|varchar2|false||--|备注|
|orderTime|date|false||sysdate|订单日期(交易系统下单日期)|
|splitProfitStatus|number|false||--|是否分配利润，0已分配,1正在分配|
|outChangeTime|date|false||--|外部系统资金变动时间|

----
### ***fdTradeUpFundDiffer***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|differId|number|false|yes|--|主键|
|recordDate|date|false||--|记录创建的日期|
|fdOrderId|number|false||--|记账系统订单号|
|channelNo|varchar2|false||--|下游渠道编号|
|accountId|number|false||--|下游渠道支付账户编号|
|businessType|number|false||--|业务类型|
|billType|number|false||1|利润类型，1.前向，2后向|
|downAdjustFace|number|false||--|统计下游扣款需调整的面值(下游退款造成上游面值比下游多时产生，下退)|
|downAdjustUnit|number|false||--|统计下游扣款需调整的规格|
|downAdjustAmount|number|false||--|统计下游扣款需调整的金额|
|downAdjustReal|number|false||--|统计下游扣款需调整的真实扣款|
|upManyFace|number|false||--|上游多冲的面值(上游面值比下游面值多时产生，上扣、下退、上退)|
|upManyAmount|number|false||--|上游多冲的金额|
|toFrontFace|number|false||--|需要由后向转前向的面值(上游退款时，退的多冲数据且与多冲前后向不一致时，后退前为正)|
|toFrontUnit|number|false||--|需要由后向转前向的规格|
|toFrontAmount|number|false||--|需要由后向转前向的金额|
|toFrontReal|number|false||--|需要由后向转前向的真实扣款|

----
### ***fdTradeUpFundHs***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|fdOrderId|number|false||--|记账系统订单号|
|tradeOrderNo|varchar2|false||-|交易系统订单号|
|orderSource|number|false||--|订单来源（系统编号）|
|tradeDeliveryNo|varchar2|false||--|交易系统发货号|
|downChannelNo|varchar2|false||-|下游渠道编号|
|downAccountId|number|false||--|下游账户|
|downCompanyId|number|false||--|下游所属公司|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upAccountId|number|false||--|上游账户|
|upCompanyId|number|false||--|上游所属公司|
|downDrawUnit|number|false||--|下游充值量|
|downDrawFace|number|false||--|下游扣款面值|
|downDrawAmount|number|false||--|下游扣款金额|
|downRealAmount|number|false||--|下游实际金额|
|upDrawUnit|number|false||--|上游充值量|
|upDrawFace|number|false||--|上游成功面值|
|upDrawAmount|number|false||--|上游扣款金额|
|upRealAmount|number|false||--|上游实际金额|
|changeTime|date|false||sysdate|变动时间|
|changeType|number|false||--|变更类型 1:加款 2：交易扣款 3：交易退款|
|billType|number|false||--|利润类型:前向2-后向|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||-|运营商|
|provinceNo|varchar2|false||-|省份|
|balance|number|false||--|余额|
|profits|number|false||--|利润|
|downCommission|number|false||--|下游后返佣金|
|upCommission|number|false||--|上游后返佣金|
|settleAmount|number|false||--|结算金额|
|settleBatchId|number|false||--|结算批次号|
|settleStatus|number|false||10|结算状态:20-等待结算,0-结算成功,10-无需结算|
|settleTime|date|false||--|结算时间|
|memo|varchar2|false||--|备注|
|downServiceFee|number|false||--|下游手续费|
|upServiceFee|number|false||--|上游手续费|
|orderTime|date|false||--|订单日期(交易系统下单日期)|
|splitProfitStatus|number|false||--|是否分配利润，0已分配|
|outChangeTime|date|false||--|外部系统资金变动时间|

----
### ***fdTradeUpManual***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|账户编号|
|adjustId|number|false||--|红冲编号(如果add_type为3,该列不允许为空)|
|manualChangeType|number|false||--|变动类型:11-加款+ 12-红冲-  21-扣款平帐加+  22-扣款平帐减-   31-退款平帐加+  32-退款平帐减- 41-余额平帐加+  42-余额平帐减-|
|changeAmount|number|false||--|变动金额,只有红冲的时候为负数|
|changeTime|date|false||sysdate|变动时间|
|balance|number|false||--|余额|
|memo|varchar2|false||--|备注|
|createUser|varchar2|false||--|创建人|
|partnerAccount|varchar2|false||--|合作方银行账户|
|hasAdjust|number|false||1|是否红冲过|
|bankFundId|number|false||--|实体卡资金变动编号id,方便红冲|
|serviceId|number|false||--|收取手续费的记录的编号|
|extRecordNo|varchar2|false||--|上游加款外部订单号|
|realAmount|number|false||--|交易平账真实金额|
|upSyncAddNo|number|false||--|上游同步加款加款记录编号|

----
### ***fdTradeUpRefund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|账户编号|
|fdOrderId|number|false||--|系统订单号|
|tradeOrderNo|varchar2|false||--|交易系统订单号|
|tradeDeliveryNo|varchar2|false||--|交易系统发货编号|
|tradeRefundNo|varchar2|false||--|交易系统退款编号|
|orderSource|number|false||--|订单来源（系统编号）|
|refundTime|date|false||sysdate|退款时间|
|billType|number|false||--|利润类型:1-前向2-后向|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份|
|refundUnit|number|false||--|退款总量|
|refundFace|number|false||--|退款面值|
|refundAmount|number|false||--|退款金额|
|realRefund|number|false||--|实际金额|
|memo|varchar2|false||--|备注|

----
### ***incomeChannelMonthSum***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|tradeMonth|date|false||--|交易日期|
|systemNo|varchar2|false||--|所属系统编号|
|channelNo|varchar2|false||--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|provinceNo|varchar2|false||--|所属省份(下游为‘-’)|
|tradeType|number|false||--|业务分类|
|groupId|number|false||--|分组|
|groupType|number|false||--|分组类型|
|tradeAmount|number|false||--|交易量|
|tradeRvAmount|number|false||--|交易平账金额|
|tradeProfit|number|false||--|利润(包含平账）|

----
### ***incomeChannelMonthTrade***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|tradeMonth|date|false||--|交易日期|
|channelNo|varchar2|false||--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|provinceNo|varchar2|false||--|所属省份(下游为‘-’)|
|tradeType|number|false||--|业务分类|
|groupId|number|false||--|分组|
|groupType|number|false||--|分组类型|
|tradeAmount|number|false||--|交易量|
|tradeRvAmount|number|false||--|交易平账金额|
|tradeProfit|number|false||--|利润(包含平账）|

----
### ***incomeDownGroupMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|channelNo|varchar2|false||--|渠道编号|
|downGroupId|number|false||--|所属下游收入分组|
|syncStatus|number|false||1|同步状态，0已同步，1未同步|
|channelName|varchar2|false||-|渠道名称|

----
### ***incomeDownTrade***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|tradeDate|date|false||--|交易日期|
|channelNo|varchar2|false||--|渠道编号|
|tradeType|number|false||--|交易分类|
|tradeAmount|number|false||--|交易量|
|tradeRvProfit|number|false||--|交易平账利润|
|tradeProfit|number|false||--|利润（包含平账）|

----
### ***incomeDownUpConfig***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|upChannelNo|varchar2|false||--|上游渠道编号|

----
### ***incomeDownUpMonth***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|tradeMonth|date|false||--|交易月份|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downChannelName|varchar2|false||--|下游渠道名称|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upChannelName|varchar2|false||--|上游渠道名称|
|downGroupId|number|false||--|下游分组|
|tradeAmount|number|false||--|交易金额|
|tradeProfit|number|false||--|交易利润|

----
### ***incomeDownUpTrade***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|tradeDate|date|false||--|交易日期|
|downChannelNo|varchar2|false||--|下游渠道编号|
|upChannelNo|varchar2|false||--|上游渠道编号|
|tradeAmount|number|false||--|交易金额|
|tradeProfit|number|false||--|交易利润|

----
### ***incomeExcludeUp***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|channelNo|varchar2|false||--|渠道编号|

----
### ***incomeFlowConfig***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|配置编号|
|flowName|varchar2|false||--|流程名称|
|flowMq|varchar2|false||--|流程mq|
|flowSort|number|false||--|流程排序|
|status|number|false||--|状态，0启用，1禁用|
|flowParams|varchar2|false||--|流程固定参数，a=1,b=2|

----
### ***incomeFlowTask***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|任务编号|
|flowName|varchar2|false||--|流程名称|
|flowMq|varchar2|false||--|流程mq|
|flowSort|number|false||--|流程排序|
|createTime|date|false||--|任务创建时间|
|status|number|false||--|任务状态，1未开始，2正在执行，0执行成功，9执行失败|
|flowLink|number|false||--|流程环节，1中间环节，0终结环节|
|flowBatchId|number|false||--|流程批次号|
|completeTime|date|false||--|流程完成时间|

----
### ***incomeUpGroupMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|provinceNo|varchar2|false||--|省份编号|
|upGroupId|number|false||--|所属上游收入分组|

----
### ***incomeUpTrade***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|tradeDate|date|false||--|交易日期|
|channelNo|varchar2|false||--|渠道编号|
|provinceNo|varchar2|false||--|所属省份|
|tradeType|number|false||--|业务分类|
|tradeAmount|number|false||--|交易量|
|tradeRvProfit|number|false||--|交易平账利润|
|tradeProfit|number|false||--|利润（包含平账）|

----
### ***rptMergeInnerChannelMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|channelNo|varchar2|false||--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|channelType|number|false||--|渠道类型|
|companyId|number|false||--|公司编号|
|addUser|varchar2|false||--|添加人|
|addTime|date|false||sysdate|添加时间|

----
### ***rptMergeReportTradeAdd***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|channelNo|varchar2|false||-|渠道编号|
|accountId|number|false||--|账户编号|
|accountType|number|false||--|账户类型1:上游渠道2:下游渠道3:银行账户|
|addSysNo|varchar2|false||--|加款数据所属系统，存储过程中写死|
|addAmount|number|false||--|加款金额|
|minusAmount|number|false||--|加款金额|
|snapTime|date|false||--|加款统计时间|
|syncStatus|number|false||1|同步状态，0、同步完成，1等待同步，2正在同步|
|syncBatch|number|false||--|同步批次号|

----
### ***rptMergeReportTradeAddCs***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|channelNo|varchar2|false||-|渠道编号|
|accountId|number|false||--|账户编号|
|accountType|number|false||--|账户类型1:上游渠道2:下游渠道3:银行账户|
|addSysNo|varchar2|false||--|加款数据所属系统，存储过程中写死|
|addAmount|number|false||--|加款金额|
|minusAmount|number|false||--|加款金额|
|snapTime|date|false||--|加款统计时间|
|syncStatus|number|false||1|同步状态，0、同步完成，1等待同步，2正在同步|
|syncBatch|number|false||--|同步批次号|

----
### ***rptTest***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelNo|varchar2|false||--|--|
|profit|number|false||--|--|

----
### ***rptUnitChannelMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|channelNo|varchar2|false||--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|channelType|number|false||--|渠道类型，1、上游渠道，2下游渠道|
|incomeUnit|number|false||--|收入单元,1.天猫，2.腾讯，3.运营商资源，4.四川，5.陕西，6.云南，7.运营商（非冲），8.自有平台，9代收费业务|
|billSplitType|number|false||1|分账方式，1、不分账，2、比例分账，3、双计分账|
|billSplitRatio|number|false||1|分账比例|
|sysNo|varchar2|false||--|渠道分类：fd直充，dk代扣|

----
### ***rptUnitReportTrade***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|channelNo|varchar2|false||--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|channelType|number|false||--|渠道分类，1、上游渠道，2、下游渠道|
|companyId|number|false||--|公司编号|
|sourceSystemId|number|false||--|系统编号|
|businessType|number|false||--|业务类型|
|tradeCount|number|false||--|交易笔数|
|tradeDebitAmount|number|false||--|交易扣款金额|
|tradeProfit|number|false||--|交易利润|
|rvAmount|number|false||--|交易平账影响利润的金额|
|sysNo|varchar2|false||--|系统编号，fd、直冲，dk、代扣系统|
|isHistoryData|number|false||1|是否为历史库生成的数据（用来加入唯一索引）|
|snapTime|date|false||--|数据快照日期|
|syncStatus|number|false||1|同步状态，0、同步完成，1等待同步，2正在同步|
|syncBatch|number|false||--|同步批次号|

----
### ***rptUnitReportTradeSplit***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|channelNo|varchar2|false||--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|channelType|number|false||--|渠道分类，1、上游渠道，2、下游渠道|
|incomeUnit|number|false||--|收入单元，对应枚举|
|companyId|number|false||--|公司编号|
|sourceSystemId|number|false||--|系统编号|
|businessType|number|false||--|业务类型|
|billSplitType|number|false||1|分账方式，1、不分账，2、比例分账，3、双计分账|
|billSplitRatio|number|false||1|分账比例|
|tradeCount|number|false||--|交易笔数|
|tradeDebitAmount|number|false||--|交易扣款金额|
|tradeProfit|number|false||--|交易利润|
|rvAmount|number|false||--|交易平账影响利润的金额|
|snapTime|date|false||--|数据快照日期|

----
### ***scores***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|sno|varchar2|false||--|--|
|cno|varchar2|false||--|--|
|degree|number|false||--|--|

----
### ***students***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|sno|varchar2|false||--|--|
|sname|varchar2|false||--|--|
|ssex|varchar2|false||--|--|
|sbirthday|date|false||--|--|
|class|varchar2|false||--|--|

----
### ***supBaseDownAccount***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|账户编号|
|accountName|varchar2|false||--|账户名称|
|balance|number|false||--|账户余额|
|creditAmount|number|false||--|授信金额|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||--|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|

----
### ***supBaseDownChannel***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelNo|varchar2|false|yes|--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|companyId|number|false||--|所属公司|
|sourceSystemId|number|false||--|所属系统|
|accountId|number|false||--|账户编号|
|status|number|false||--|状态|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||--|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|

----
### ***supBaseProUpScope***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|限定编号|
|proUpChannelNo|varchar2|false||--|生产系统限定上游渠道|

----
### ***supBaseRelateAddMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|mapId|number|false|yes|--|关联编号|
|supUpChannelNo|varchar2|false||--|sup上游渠道|
|supDownChannelNo|varchar2|false||--|sup下游渠道|
|proUpChannelNo|varchar2|false||--|生产系统上游渠道（需为千行）|

----
### ***supBaseUpAccount***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|账户编号|
|accountName|varchar2|false||--|账户名称|
|onWayCount|number|false||--|在途张数|
|onWayFace|number|false||--|在途面值|
|onWayBalance|number|false||--|在途余额|
|physicalCardCount|number|false||--|实体卡张数|
|physicalCardFace|number|false||--|实体卡面值|
|physicalCardBalance|number|false||--|实体卡余额|
|electronicCardCount|number|false||--|电子卡密张数|
|electronicCardFace|number|false||--|电子卡密面值|
|electronicCardBalance|number|false||--|电子卡密余额|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||--|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|

----
### ***supBaseUpChannel***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelNo|varchar2|false|yes|--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|companyId|number|false||--|所属公司|
|sourceSystemId|number|false||--|所属系统|
|accountId|number|false||--|账户编号|
|status|number|false||--|状态|
|warnBalance|number|false||--|报警余额|
|createdBy|varchar2|false||--|创建人|
|createdTime|date|false||--|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|
|statisticsType|number|false||--|财务分类|

----
### ***supReportDailyManual***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|reportDate|date|false||--|数据日期|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|账户编号|
|companyId|number|false||--|公司编号|
|systemId|number|false||--|系统编号|
|channelType|number|false||--|渠道类型,1：上游渠道，2：下游渠道|
|wayChangeCount|number|false||--|在途张数增加数|
|wayChangeFace|number|false||--|在途面值增加数|
|wayChangeAmount|number|false||--|在途金额增加数|
|physicalChangeCount|number|false||--|实体卡张数增加数|
|physicalChangeFace|number|false||--|实体卡面值增加数|
|physicalChangeAmount|number|false||--|实体卡金额增加数|
|electronicChangeCount|number|false||--|电子卡张数增加数|
|electronicChangeFace|number|false||--|电子卡面值增加数|
|electronicChangeAmount|number|false||--|电子卡金额增加数|

----
### ***supReportDailyTrade***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|reportDate|date|false||--|数据日期|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|账户编号|
|companyId|number|false||--|公司编号|
|systemId|number|false||--|系统编号|
|channelType|number|false||--|渠道类型|
|billType|number|false||--|前后项信息|
|businessType|number|false||--|业务类型|
|statisticsType|number|false||--|财务分类|
|tradeCount|number|false||--|销卡张数|
|tradeUnit|number|false||--|交易规格|
|tradeFace|number|false||--|交易面值|
|tradeAmount|number|false||--|交易金额|

----
### ***supReportZeroBalance***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|zeroDate|date|false||--|零点日期|
|createDate|date|false||--|收集时间|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|账户编号|
|companyId|number|false||--|公司编号|
|systemId|number|false||--|系统编号|
|channelType|number|false||--|渠道类型|
|onWayCount|number|false||--|在途张数|
|onWayFace|number|false||--|在途面值|
|onWayBalance|number|false||--|在途余额|
|physicalCardCount|number|false||--|实体卡张数|
|physicalCardFace|number|false||--|实体卡面值|
|physicalCardBalance|number|false||--|实体卡余额|
|electronicCardCount|number|false||--|电子卡密张数|
|electronicCardFace|number|false||--|电子卡密面值|
|electronicCardBalance|number|false||--|电子卡密余额|

----
### ***supTradeDownFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|资金变动编号|
|supOrderId|number|false||--|记账系统订单号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游账户编号|
|downCompanyId|number|false||--|下游公司编号|
|sourceSystemId|number|false||--|系统编号|
|tradeOrderNo|varchar2|false||-|生产系统订单号|
|tradeRefundNo|varchar2|false||-|生产系统退款编号|
|changeType|number|false||--|变动类型（加款、扣款、退款、提款）|
|changeFace|number|false||--|变动面值|
|changeAmount|number|false||--|变动金额|
|changeTime|date|false||sysdate|资金变动时间|
|tradeOrderTime|date|false||sysdate|生产系统订单时间|
|tradeChangeTime|date|false||sysdate|生产系统资金变动时间|
|balance|number|false||--|账户余额|
|memo|varchar2|false||--|备注|

----
### ***supTradeDownFundHs***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|资金变动编号|
|supOrderId|number|false||--|记账系统订单号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游账户编号|
|downCompanyId|number|false||--|下游公司编号|
|sourceSystemId|number|false||--|系统编号|
|tradeOrderNo|varchar2|false||--|生产系统订单号|
|tradeRefundNo|varchar2|false||-|生产系统退款编号|
|changeType|number|false||--|变动类型（加款、扣款、退款、提款）|
|changeFace|number|false||--|变动面值|
|changeAmount|number|false||--|变动金额|
|changeTime|date|false||sysdate|资金变动时间|
|tradeOrderTime|date|false||--|生产系统订单时间|
|tradeChangeTime|date|false||--|生产系统资金变动时间|
|balance|number|false||--|账户余额|
|memo|varchar2|false||--|备注|

----
### ***supTradeDownManual***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游账户编号|
|hasAdjust|number|false||--|是否已红冲过|
|adjustRecordId|number|false||--|红冲的记录编号|
|changeType|number|false||--|变动类型（加款、加款红冲、提款、提款红冲，余额平账、交易平账）|
|changeTime|date|false||sysdate|变动时间|
|changeAmount|number|false||--|变动金额|
|balance|number|false||--|账户余额|
|bankCardNo|varchar2|false||--|加款/提款对应银行账户|
|bankRecordId|number|false||--|加款/提款银行资金变动编号|
|bankServiceId|number|false||--|提款银行收取手续费编号|
|bankRelateId|number|false||--|可红冲记录和银行相关记录关联编号|
|memo|varchar2|false||--|备注|
|createdBy|varchar2|false||--|创建人|

----
### ***supTradeOrderMain***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|supOrderId|number|false|yes|--|记账系统订单号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游账户编号|
|downCompanyId|number|false||--|下游公司编号|
|sourceSystemId|number|false||--|系统编号|
|createTime|date|false||--|创建时间|
|tradeOrderNo|varchar2|false||--|生产系统订单号|
|tradeOrderTime|date|false||--|生产系统订单时间|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||-|运营商|
|proviceNo|varchar2|false||-|省份编号|
|cityNo|varchar2|false||-|城市编号|
|orderUnit|number|false||--|订单规格|
|orderFace|number|false||--|订单面值|
|orderAmount|number|false||--|订单金额|
|completeFace|number|false||--|完成面值|
|completeAmount|number|false||--|完成金额|

----
### ***supTradeOrderMainHs***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|supOrderId|number|false|yes|--|记账系统订单号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游账户编号|
|downCompanyId|number|false||--|下游公司编号|
|sourceSystemId|number|false||--|系统编号|
|createTime|date|false||--|创建时间|
|tradeOrderNo|varchar2|false||--|生产系统订单号|
|tradeOrderTime|date|false||--|生产系统订单时间|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||-|运营商|
|proviceNo|varchar2|false||-|省份编号|
|cityNo|varchar2|false||-|城市编号|
|orderUnit|number|false||--|订单规格|
|orderFace|number|false||--|订单面值|
|orderAmount|number|false||--|订单金额|
|completeFace|number|false||--|完成面值|
|completeAmount|number|false||--|完成金额|

----
### ***supTradeUpFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|资金变动编号|
|supOrderId|number|false||--|记账系统订单号|
|sourceSystemId|number|false||--|系统编号|
|tradeOrderNo|varchar2|false||-|交易系统订单号|
|tradeDeliveryNo|varchar2|false||-|交易系统发货编号|
|tradeRefundNo|varchar2|false||-|生产系统退款编号|
|downChannelNo|varchar2|false||-|下游渠道编号|
|downAccountId|number|false||--|下游账户编号|
|downCompanyId|number|false||--|下游公司编号|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upAccountId|number|false||--|上游账户编号|
|upCompanyId|number|false||--|上游公司编号|
|changeType|number|false||--|变动类型（加款、扣款、退款、提款、号卡转移）|
|changeTime|date|false||sysdate|资金变动时间|
|tradeOrderTime|date|false||sysdate|生产系统订单时间|
|tradeChangeTime|date|false||sysdate|生产系统资金变动时间|
|billType|number|false||--|前后项信息|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||-|运营商|
|provinceNo|varchar2|false||-|省份|
|cityNo|varchar2|false||-|城市|
|downDrawCount|number|false||--|下游扣款销卡张数|
|downDrawUnit|number|false||--|下游扣款规格|
|downDrawFace|number|false||--|下游扣款面值|
|downDrawAmount|number|false||--|下游扣款金额|
|upDrawCount|number|false||--|上游扣款销卡张数|
|upDrawUnit|number|false||--|上游扣款规格|
|upDrawFace|number|false||--|上游扣款面值|
|upDrawAmount|number|false||--|上游扣款金额|
|wayChangeCount|number|false||--|在途变动张数|
|wayChangeFace|number|false||--|在途面值|
|wayChangeAmount|number|false||--|在途变动金额|
|physicalChangeCount|number|false||--|实体卡张数|
|physicalChangeFace|number|false||--|实体卡面值|
|physicalChangeAmount|number|false||--|实体卡变动金额|
|wayCountBalance|number|false||--|在途卡余额|
|wayFaceBalance|number|false||--|在途面值余额|
|wayCardBalance|number|false||--|在途余额|
|physicalCountBalance|number|false||--|实体卡张数余额|
|physicalFaceBalance|number|false||--|实体卡面值余额|
|physicalCardBalance|number|false||--|实体卡余额|
|electronicCountBalance|number|false||--|电子卡密张数余额|
|electronicFaceBalance|number|false||--|电子卡密面值余额|
|electronicCardBalance|number|false||--|电子卡密余额|
|memo|varchar2|false||--|备注|

----
### ***supTradeUpFundHs***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|资金变动编号|
|supOrderId|number|false||--|记账系统订单号|
|sourceSystemId|number|false||--|系统编号|
|tradeOrderNo|varchar2|false||-|交易系统订单号|
|tradeDeliveryNo|varchar2|false||-|交易系统发货编号|
|tradeRefundNo|varchar2|false||-|生产系统退款编号|
|downChannelNo|varchar2|false||-|下游渠道编号|
|downAccountId|number|false||--|下游账户编号|
|downCompanyId|number|false||--|下游公司编号|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upAccountId|number|false||--|上游账户编号|
|upCompanyId|number|false||--|上游公司编号|
|changeType|number|false||--|变动类型（加款、扣款、退款、提款、号卡转移）|
|changeTime|date|false||sysdate|资金变动时间|
|tradeOrderTime|date|false||--|生产系统订单时间|
|tradeChangeTime|date|false||--|生产系统资金变动时间|
|billType|number|false||--|前后项信息|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||-|运营商|
|provinceNo|varchar2|false||-|省份|
|cityNo|varchar2|false||-|城市|
|downDrawCount|number|false||--|下游扣款销卡张数|
|downDrawUnit|number|false||--|下游扣款规格|
|downDrawFace|number|false||--|下游扣款面值|
|downDrawAmount|number|false||--|下游扣款金额|
|upDrawCount|number|false||--|上游扣款销卡张数|
|upDrawUnit|number|false||--|上游扣款规格|
|upDrawFace|number|false||--|上游扣款面值|
|upDrawAmount|number|false||--|上游扣款金额|
|wayChangeCount|number|false||--|在途变动张数|
|wayChangeFace|number|false||--|在途面值|
|wayChangeAmount|number|false||--|在途变动金额|
|physicalChangeCount|number|false||--|实体卡张数|
|physicalChangeFace|number|false||--|实体卡面值|
|physicalChangeAmount|number|false||--|实体卡变动金额|
|wayCountBalance|number|false||--|在途卡余额|
|wayFaceBalance|number|false||--|在途面值余额|
|wayCardBalance|number|false||--|在途余额|
|physicalCountBalance|number|false||--|实体卡张数余额|
|physicalFaceBalance|number|false||--|实体卡面值余额|
|physicalCardBalance|number|false||--|实体卡余额|
|electronicCountBalance|number|false||--|电子卡密张数余额|
|electronicFaceBalance|number|false||--|电子卡密面值余额|
|electronicCardBalance|number|false||--|电子卡密余额|
|memo|varchar2|false||--|备注|

----
### ***supTradeUpManual***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|记录编号|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upAccountId|number|false||--|上游渠道账户|
|hasAdjust|number|false||--|是否已红冲过|
|adjustRecordId|number|false||--|红冲的记录编号|
|changeType|number|false||--|变动类型（加款、加款红冲、提款、提款红冲、实体卡收货、电子卡密收货、实体卡转电子卡密、余额平账、交易平账）|
|changeTime|date|false||sysdate|变动时间|
|wayChangeCount|number|false||--|在途变动张数|
|wayChangeFace|number|false||--|在途变动面值|
|wayChangeAmount|number|false||--|在途变动金额|
|physicalChangeCount|number|false||--|实体卡变动条数|
|physicalChangeFace|number|false||--|实体卡变动面值|
|physicalChangeAmount|number|false||--|实体卡变动金额|
|electronicChangeCount|number|false||--|电子卡密变动条数|
|electronicChangeFace|number|false||--|电子卡密变动面值|
|electronicChangeAmount|number|false||--|电子卡密变动金额|
|wayCountBalance|number|false||--|在途卡余额|
|wayFaceBalance|number|false||--|在途面值余额|
|wayCardBalance|number|false||--|在途账户余额|
|physicalCountBalance|number|false||--|实体卡张数余额|
|physicalFaceBalance|number|false||--|实体卡面值余额|
|physicalCardBalance|number|false||--|实体卡账户余额|
|electronicCountBalance|number|false||--|电子卡密张数余额|
|electronicFaceBalance|number|false||--|电子卡密面值余额|
|electronicCardBalance|number|false||--|电子卡密账户余额|
|tradeChangeTime|date|false||--|实体卡收货、电子卡密收货、实体卡转电子卡密交易系统时间|
|bankCardNo|varchar2|false||--|加款/提款对应银行账户|
|bankRecordId|number|false||--|加款/提款银行资金变动编号|
|bankServiceId|number|false||--|加款银行收取手续费编号|
|bankRelateId|number|false||--|可红冲记录和银行相关记录关联编号|
|memo|varchar2|false||--|备注|
|createdBy|varchar2|false||--|创建人|

----
### ***tblGlobalParam***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|paramName|varchar2|false||--|--|
|numberVal|number|false||--|--|
|stringVal|varchar2|false||--|--|
|timeVal|date|false||--|--|
|paramDesc|varchar2|false||--|--|

----
### ***tblProcLog***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|procName|varchar2|false||--|--|
|logTime|date|false||--|--|
|startTime|date|false||--|--|
|status|varchar2|false||--|--|
|userMark|varchar2|false||--|--|
|errCode|varchar2|false||--|--|
|errDesc|varchar2|false||--|--|
|errTrace|varchar2|false||--|--|

----
### ***yxBaseAgent***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|agentId|varchar2|false|yes|--|代理人编号|
|agentName|varchar2|false||--|代理人名称|
|agentType|number|false||--|代理人类型0:个人代理人,1:企业代理人|
|certificateNo|varchar2|false||--|身份证/纳税识别号|
|mobile|varchar2|false||_|手机号码|
|provinceNo|varchar2|false||_|省份|
|companyNature|number|false||--|公司性质1:有限责任公司,2:股份有限公司,3:个体商户,4:合伙企业|
|companyId|number|false||--|公司编号|
|taxpayerSize|number|false||--|纳税人规模1:一般纳税人,2小规模纳税人|
|balance|number|false||--|余额|
|status|number|false||--|状态|
|createdUser|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|
|downChannelNo|varchar2|false||--|下游渠道|
|outAgentId|varchar2|false||--|交易系统代理人编号|
|groupAgent|number|false||1|0:是组合代理人，1：普通代理人|
|groupCount|number|false||--|组合数量|

----
### ***yxBaseBusinessMap***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|businessMapId|number|false|yes|--|业务类型映射编号|
|outerBusinessType|number|false||--|外部系统业务类型编号|
|localBusinessType|number|false||--|记账系统业务类型编号|
|industryType|number|false||--|行业类型|
|outerSystemNo|number|false||--|外部系统编号|

----
### ***yxBaseDownAccount***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|账户编号|
|accountName|varchar2|false||--|账号名称|
|queryBalance|number|false||--|查询余额|
|innerBalance|number|false||--|理论余额|
|creditMoney|number|false||--|授信金额|
|createdUser|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|

----
### ***yxBaseDownChannel***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelNo|varchar2|false|yes|--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|companyId|number|false||--|所属公司|
|sourceSystemId|number|false||--|所属系统编号|
|status|number|false||--|状态|
|channelClass|number|false||--|渠道类型1：自有渠道2：银行渠道3：行业渠道|
|commiBalance|number|false||--|佣金余额|
|warnBalance|number|false||--|报警余额|
|accountId|number|false||--|下游账户id|
|createdUser|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|
|issueBalance|number|false||--|发行收入余额|

----
### ***yxBaseUpAccount***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|账户编号|
|accountName|varchar2|false||--|账号名称|
|queryBalance|number|false||--|查询余额|
|innerBalance|number|false||--|理论余额|
|createdUser|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|

----
### ***yxBaseUpChannel***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelNo|varchar2|false|yes|--|渠道编号|
|channelName|varchar2|false||--|渠道名称|
|companyId|number|false||--|所属公司|
|sourceSystemId|number|false||--|所属系统编号|
|warnBalance|number|false||--|报警余额|
|commiBalance|number|false||--|佣金余额|
|accountId|number|false||--|账户编号|
|status|number|false||--|状态|
|createdUser|varchar2|false||--|创建人|
|createdTime|date|false||sysdate|创建时间|
|lastEditUser|varchar2|false||--|最后更新人|
|lastEditTime|date|false||--|最后更新时间|
|serviceBalance|number|false||--|服务费余额|
|issueBalance|number|false||--|发行成本余额|

----
### ***yxReportDaily***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|reportTime|date|false||--|报表时间|
|upChannelNo|varchar2|false||--|上游渠道编号（商家）|
|downChannelNo|varchar2|false||--|下游渠道编号（营销渠道）|
|agentId|varchar2|false||--|代理人编号|
|businessType|number|false||--|业务类型|
|upDrawFace|number|false||--|上游扣款面值|
|upDrawAmount|number|false||--|上游扣款金额|
|orderCount|number|false||--|订单数量|
|servieFee|number|false||--|应结算商家服务费|
|agencyFee|number|false||--|代理人酬金（代理费）|
|handlingFee|number|false||--|三方平台手续费|
|downDrawFace|number|false||--|下游扣款面值|
|downDrawAmount|number|false||--|下游扣款金额|
|incomeAmount|number|false||--|收益金额|
|downRealAmount|number|false||--|下游实际金额|
|upRealAmount|number|false||--|上游实际金额|
|downCouponAmount|number|false||--|优惠券金额|
|issue|number|false||--|发行扣款标志：0：普通扣款，1：发行扣款|

----
### ***yxReportFundDaily***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|reportTime|date|false||--|报表时间|
|channelType|number|false||--|渠道类型:1上游渠道,2下游渠道,3代理商|
|channelNo|varchar2|false||--|渠道编号|
|changeType|number|false||--|变更类型1:加款,2：交易扣款,3：交易退款,4：提款,5:服务费转余额,6:服务费结算,11:发行加款,12：发行扣款，13：发行退款|
|dailySumAmount|number|false||--|变动金额合计|
|businessType|number|false||--|业务类型|
|companyId|number|false||--|公司编号|

----
### ***yxReportZeroBalance***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|reportTime|date|false||--|报表时间|
|createTime|date|false||sysdate|创建时间|
|accountType|number|false||--|账户类型1：上游渠道2：下游渠道3：银行账户4：服务费账户5：代理人账户，6：发行成本账户，7：发行收入账户|
|accountId|number|false||--|账户编号|
|channelNo|varchar2|false||--|渠道（代理人）编号|
|channelName|varchar2|false||--|渠道（代理人）名称|
|balance|number|false||--|理论余额|
|queryBalance|number|false||--|查询余额|
|channelStatus|number|false||--|渠道状态|
|companyId|number|false||--|所属公司|
|channelSourceSystem|number|false||--|渠道所属系统编号|
|downFirstFace|number|false||--|下游与上游扣款的时间差造成的差异面值（只有下游渠道记录）|
|downFirstAmount|number|false||--|下游与上游扣款的时间差造成的差异金额（只有下游渠道记录）|

----
### ***yxThreePartyAccount***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|accountId|number|false|yes|--|三方账户编号|
|accountName|varchar2|false||--|账户名称|
|channelNo|varchar2|false||--|渠道编号|
|agentId|varchar2|false||--|代理商编号|
|channelType|number|false||--|渠道类型1:上游;2:下游|
|balance|number|false||--|余额|
|accountType|number|false||--|账户类型:1支出;2:收入|
|creditAmount|number|false||--|授信金额|
|status|number|false||--|状态0-启用1-禁用|
|createTime|date|false||--|创建时间|
|createUser|varchar2|false||--|创建人|
|updateTime|date|false||--|修改时间|
|updateUser|varchar2|false||--|更新人|
|companyId|number|false||--|公司编号|
|systemId|number|false||--|系统编号|

----
### ***yxTradeAgencyAssigned***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|编号|
|yxOrderId|number|false||--|记账系统订单号|
|agentId|number|false||--|单代理人编号|
|orderSource|number|false||--|订单来源（系统编号）|
|agentFee|number|false||--|单代理人代理费|
|changeType|number|false||2|2：扣款，3：退款|
|changeTime|date|false||sysdate|变动时间|
|settleStatus|number|false||1|结算状态|
|memo|varchar2|false||--|备注|

----
### ***yxTradeAgentFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|upFundId|number|false||--|上游资金变动编号，退款时为下游资金变动编号|
|downChannelNo|varchar2|false||_|下游渠道编号|
|upChannelNo|varchar2|false||--|上游渠道编号|
|orderSource|number|false||--|订单来源（系统编号）|
|agentId|varchar2|false||_|代理人编号|
|changeAmount|number|false||--|变动金额|
|balance|number|false||--|余额|
|changeType|number|false||1|变更类型1:加款2：交易扣款3：交易退款4：提款,12：发行扣款，13：发行退款|
|changeTime|date|false||sysdate|变动时间|
|businessType|number|false||--|业务类型|
|yxOrderId|number|false||--|订单编号|
|yxTradeOrderNo|varchar2|false||_|外部系统订单编号|

----
### ***yxTradeAgentManual***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|agentId|varchar2|false||--|代理人编号|
|accountId|number|false||--|账户编号|
|adjustId|number|false||--|红冲编号|
|hasAdjust|number|false||1|是否红冲过|
|addType|number|false||--|变动类型:11: 加款+;12: 红冲加款-;13: 提款+;14: 红冲提款-;21: 扣款平账加+;22: 扣款平账减-;31: 退款平账加+;32: 退款平账减-;41: 余额平账加+;42: 余额平账减-;51: 手续费加+;52: 手续费红冲+;60: 交易平账;|
|changeAmount|number|false||--|变动金额|
|changeTime|date|false||sysdate|变动时间|
|balance|number|false||--|余额|
|bankFundId|number|false||--|银行资金变动编号（红冲是使用）|
|extRecordNo|varchar2|false||--|外部加款记录编号|
|handlingFeeId|number|false||--|收取手续费的记录编号|
|createUser|varchar2|false||--|创建人|
|memo|varchar2|false||--|备注|

----
### ***yxTradeDownFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|下游变动编号|
|yxOrderId|number|false||--|记账系统订单号|
|tradeOrderNo|varchar2|false||_|交易系统订单号|
|extOrderNo|varchar2|false||_|扩展订单号交易系统供|
|orderSource|number|false||--|订单来源（系统编号）|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游支付账号|
|changeTime|date|false||sysdate|变动创建时间|
|orderTime|date|false||--|订单日期(交易系统下单日期)|
|changeType|number|false||--|变更类型1:加款2：交易扣款3：交易退款4:提款,11：发行加款，12：发行扣款，13：发行退款|
|payAmount|number|false||--|用户支付金额|
|changeAmount|number|false||--|变动金额|
|balance|number|false||--|账户余额|
|handlingFee|number|false||--|手续费（handling_fee=pay_amount-change_amount-income_amount）|
|memo|varchar2|false||--|备注|
|orderFace|number|false||--|订单面值|
|changeFace|number|false||--|变动面值|
|refundOrderId|varchar2|false||_|退款编号|
|incomeAmount|number|false||--|收益金额|
|couponAmount|number|false||--|优惠券金额|

----
### ***yxTradeDownManual***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|账户编号|
|adjustId|number|false||--|红冲编号|
|hasAdjust|number|false||1|是否红冲过|
|addType|number|false||--|变动类型:11: 加款+;12: 红冲加款-;13: 提款+;14: 红冲提款-;21: 扣款平账加+;22: 扣款平账减-;31: 退款平账加+;32: 退款平账减-;41: 余额平账加+;42: 余额平账减-;51: 手续费加+;52: 手续费红冲+;60: 交易平账;71：发行加款|
|changeAmount|number|false||--|变动金额|
|realAmount|number|false||--|交易平账真实金额|
|changeTime|date|false||sysdate|变动时间|
|balance|number|false||--|余额|
|createUser|varchar2|false||--|创建人|
|bankFundId|number|false||--|银行资金变动编号（红冲是使用）|
|memo|varchar2|false||--|备注|
|extRecordNo|varchar2|false||--|外部加款记录编号|
|handlingFeeId|number|false||--|收取手续费的记录编号|

----
### ***yxTradeExpense***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|yxOrderId|number|false||--|记账系统订单号|
|tradeOrderNo|varchar2|false||_|交易系统订单号|
|tradeExpenseNo|varchar2|false||_|交易系统费用编号|
|orderSource|number|false||--|订单来源（系统编号）|
|expenseType|number|false||--|费用类型1：快递费，21：销券收益|
|downChannelNo|varchar2|false||_|下游渠道|
|upChannelNo|varchar2|false||--|上游渠道|
|agentId|varchar2|false||--|代理人编号|
|businessType|number|false||--|业务类型|
|changeAmount|number|false||--|费用金额|
|balance|number|false||--|余额|
|changeTime|date|false||sysdate|变动时间|
|orderTime|date|false||sysdate|交易系统订单时间|
|outChangeTime|date|false||--|交易系统变动时间|
|accountId|number|false||--|费用账号id|
|incomeType|number|false||1|收入类型：1：支出，2：收入|
|orderAmount|number|false||--|订单金额|
|memo|varchar2|false||--|备注|

----
### ***yxTradeOrderMain***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|yxOrderId|number|false|yes|--|主键|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downAccountId|number|false||--|下游扣款账号|
|downCompanyId|number|false||--|下游公司编号|
|agentId|varchar2|false||--|代理人编号|
|agentType|number|false||--|代理人类型|
|tradeOrderNo|varchar2|false||--|交易系统订单号|
|extOrderNo|varchar2|false||--|扩展订单号交易系统供|
|orderSource|number|false||--|订单来源（系统编号）|
|createTime|date|false||sysdate|订单添加时间|
|orderTime|date|false||--|订单日期（交易系统下单日期）|
|businessType|number|false||--|业务类型|
|orderFace|number|false||--|成交面值|
|orderAmount|number|false||--|代收金额（用户支付金额）|
|agencyFee|number|false||--|代理人酬金（代理费）|
|handlingFee|number|false||--|三方平台手续费|
|successFace|number|false||--|成功面值|
|lastEditTime|date|false||--|最后修改时间|
|incomeAmount|number|false||--|收益金额|
|realAmount|number|false||--|实际扣款金额|
|couponAmount|number|false||--|优惠券金额|

----
### ***yxTradeOrderMainDiffer***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|differId|number|false|yes|--|主键|
|recordDate|date|false||--|记录生成日期|
|yxOrderId|varchar2|false||--|记账系统订单编号|
|channelNo|varchar2|false||--|下游渠道编号|
|accountId|number|false||--|下游渠道支付账号编号|
|businessType|number|false||--|业务类型|
|downFirstFace|number|false||--|下游与上游扣款的时间差造成的差异面值（上下游扣款有时间差异造成，下扣、下退、上扣、上退）|
|downFirstAmount|number|false||--|下游与上游扣款的时间差造成的差异金额|
|downFirstIncome|number|false||--|下游与上游扣款的时间造差成的收入差异|

----
### ***yxTradeUpFund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|上游变动编号|
|yxOrderId|number|false||--|记账系统订单号|
|tradeOrderNo|varchar2|false||_|交易系统订单号|
|tradeDeliveryNo|varchar2|false||--|交易系统发货号|
|extDeliveryNo|varchar2|false||_|扩展发货编号|
|orderSource|number|false||--|订单来源（系统编号）|
|downChannelNo|varchar2|false||_|下游渠道编号|
|downAccountId|number|false||--|下游账户|
|downCompanyId|number|false||--|下游所属公司|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upAccountId|number|false||--|上游账户|
|upCompanyId|number|false||--|上游所属公司|
|agentId|varchar2|false||_|代理人编号|
|downDrawUnit|number|false||--|下游充值量（计算值）|
|downDrawFace|number|false||--|下游扣款面值（计算值）|
|downDrawAmount|number|false||--|下游扣款金额（计算值）(用户支付金额)|
|downRealAmount|number|false||--|下游实际金额（计算值）|
|dowmHandlingFee|number|false||--|下游手续费（计算值）|
|downAgencyFee|number|false||--|下游代理费（计算值）|
|upDrawUnit|number|false||--|上游充值量|
|upDrawFace|number|false||--|上游扣款面值|
|upDrawAmount|number|false||--|上游扣款金额|
|upRealAmount|number|false||--|上游实际金额|
|upServieFee|number|false||--|上游服务费|
|changeTime|date|false||sysdate|变动时间|
|changeType|number|false||1|变更类型1:加款2：交易扣款3：交易退款4：提款5:服务费转余额6:服务费结算,11:发行加款,12：发行扣款，13：发行退款|
|businessType|number|false||--|业务类型|
|carrierNo|varchar2|false||_|运营商|
|provinceNo|varchar2|false||_|省份|
|balance|number|false||--|余额|
|memo|varchar2|false||--|备注|
|orderTime|date|false||sysdate|订单日期(交易系统下单日期)|
|outChangeTime|date|false||sysdate|资金变动时间（交易系统）|
|refundOrderNo|varchar2|false||_|退款编号|
|incomeAmount|number|false||--|收益金额|
|couponAmount|number|false||--|优惠券金额|

----
### ***yxTradeUpFundDiffer***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|differId|number|false|yes|--|主键|
|recordDate|date|false||--|记录生成日期|
|yxOrderId|varchar2|false||--|记账系统订单编号|
|channelNo|varchar2|false||--|下游渠道编号|
|accountId|number|false||--|下游渠道支付账号编号|
|businessType|number|false||--|业务类型|
|downAdjustFace|number|false||--|统计下游扣款需要调整的面值（下游退款造成上游面值比下游多时产生，下退）|
|downAdjustUnit|number|false||--|统计下游扣款需要调整的规格|
|downAdjustAmount|number|false||--|统计下游扣款需要调整的金额|
|downAdjustReal|number|false||--|统计下游扣款需要调整的真实扣款|
|upManyFace|number|false||--|上游多充的面值（上游面值比下游面值多时产生，上扣、下退、上退）|
|upManyAmount|number|false||--|上游多充的金额|
|downAdjustIncome|number|false||--|统计下游收入需要调整的金额|

----
### ***yxTradeUpManual***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false|yes|--|主键|
|channelNo|varchar2|false||--|渠道编号|
|accountId|number|false||--|账户编号|
|adjustId|number|false||--|红冲编号|
|hasAdjust|number|false||1|是否红冲过|
|addType|number|false||--|变动类型:11: 加款+;12: 红冲加款-;13: 提款+;14: 红冲提款-;21: 扣款平账加+;22: 扣款平账减-;31: 退款平账加+;32: 退款平账减-;41: 余额平账加+;42: 余额平账减-;51: 手续费加+;52: 手续费红冲+;60: 交易平账;|
|changeAmount|number|false||--|变动金额|
|realAmount|number|false||--|交易平账真实金额|
|changeTime|date|false||sysdate|变动时间|
|balance|number|false||--|余额|
|createUser|varchar2|false||--|创建人|
|bankFundId|number|false||--|银行资金变动编号（红冲是使用）|
|memo|varchar2|false||--|备注|
|extRecordNo|varchar2|false||--|外部加款记录编号|
|handlingFeeId|number|false||--|收取手续费的记录编号|

----
### ***zTest***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|a1|varchar2|false||--|--|
|a2|varchar2|false||--|--|
|a3|varchar2|false||--|--|
|a4|varchar2|false||--|--|
|a5|varchar2|false||--|--|
|a6|varchar2|false||--|--|
|a7|varchar2|false||--|--|
|a8|varchar2|false||--|--|
|a9|varchar2|false||--|--|
|a10|varchar2|false||--|--|
|a11|varchar2|false||--|--|
|a12|varchar2|false||--|--|
|a13|varchar2|false||--|--|
|a14|varchar2|false||--|--|
|a15|varchar2|false||--|--|
