
----
### ***acctSyncConfig***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelType|number|false|yes|--|渠道类型 1:上游 2:下游|
|title|varchar2|false||--|标题|
|changeType|number|false||--|资金变更类型|
|lastExecId|number|false||--|上次执行编号|
|lastExecTime|date|false||sysdate|上次执行时间|
|minCount|number|false||100|最小笔数同步数|
|robotIp|varchar2|false||--|最后执行机器ip|
|nextTime|date|false||sysdate|下次后补时间|
|frequency|number|false||60|执行频率(秒)|

----
### ***acctSyncError***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|recordId|number|false||--|记录编号|
|channelType|number|false||--|类型|
|changeType|number|false||--|变更类型|
|errorCount|number|false||1|错误次数|
|createdTime|date|false||--|创建时间|
|resultMsg|varchar2|false||--|错误消息|
|hasWarn|number|false||1|是否报警|

----
### ***fcActiveRecord***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false||--|--|
|taskId|varchar2|false||--|--|
|phone|varchar2|false||--|--|
|idno|varchar2|false||--|--|
|activeStatus|number|false||--|--|
|activeTime|date|false||--|--|
|firstChargeStatus|number|false||--|--|
|firstChargeTime|date|false||--|--|
|dealStatus|number|false||20|--|
|dealMsg|varchar2|false||--|--|
|createTime|date|false||--|--|

----
### ***fcCheckCharge***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|downChannelNo|varchar2|false||--|下游渠道|
|downOrderNo|varchar2|false||--|下游订单号|
|idno|varchar2|false||--|身份证号|
|brandNo|varchar2|false||--|宽带帐号|
|phone|varchar2|false||--|手机号|
|bizType|varchar2|false||--|类型 2:固话, 3:宽带|
|carrierNo|varchar2|false||--|运营商|
|status|number|false||20|状态 20:等待; 30:正在处理 90:失败 0:成功|
|result|varchar2|false||--|结果|
|scriptPath|varchar2|false||--|脚本路径|
|busSvc|varchar2|false||--|总线服务|
|ip|varchar2|false||--|ip|
|createTime|date|false||sysdate|创建时间|
|finishTime|date|false||--|完成时间|

----
### ***fcDownChannel***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelNo|varchar2|false|yes|--|下游渠道编号|
|channelName|varchar2|false||--|下游渠道名称|
|channelAccount|varchar2|false||--|渠道帐号|
|channelKey|varchar2|false||--|渠道key|
|channelToken|varchar2|false||--|渠道token|
|status|number|false||--|状态|
|balance|number|false||--|余额|
|needNotify|number|false||1|是否通知;0:通知;1:不通知|
|remark|varchar2|false||--|备注|
|syncStatus|number|false||20|同步记账系统状态|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||sysdate|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|
|fdChannelNo|varchar2|false||--|记账系统渠道编号|

----
### ***fcDownExcludeUp***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downGroupNo|varchar2|false||--|下游产品分组|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upGroupNo|varchar2|false||--|上游产品分组|
|status|number|false||--|状态|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||sysdate|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|

----
### ***fcDownProduct***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|pid|number|false|yes|--|产品id|
|channelNo|varchar2|false||--|渠道编号|
|productNo|varchar2|false||--|产品编码|
|productName|varchar2|false||--|产品名称|
|sku|varchar2|false||--|skuid|
|productType|number|false||--|产品类型|
|packageId|number|false||--|套餐编号|
|carrierNo|varchar2|false||--|运营商;*:所有|
|provinceNo|varchar2|false||--|省份;qg:全国|
|cityNo|varchar2|false||--|城市;*:全市|
|salePrice|number|false||--|售价|
|tradeFee|number|false||--|交易手续费|
|canTrial|number|false||1|允许试用;0:允许;1:不允许|
|trialDay|number|false||--|试用期,单位天|
|autoActive|number|false||1|超过试用期是否自动激活/转正1:自动;2:手动|
|groupNo|varchar2|false||--|分组编号|
|bindMode|number|false||--|绑定模式 0:不限; 1:强制|
|status|number|false||--|状态;0:启用;1:禁用|
|remark|varchar2|false||--|备注|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||sysdate|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|
|iccType|number|false||--|卡类型 1:本地写卡; 2:空中入网卡 0:不写卡|
|flowId|number|false||--|处理流程|
|writeCardMode|number|false||--|写卡方式 0:不写卡 1:自动; 2:手动; 3:代客下单|
|feeType|number|false||--|手续费类型 0:定额 1:按比例|
|reward|number|false||--|佣金|
|rewardCntr|number|false||--|分期次数|

----
### ***fcDownScript***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|sid|number|false|yes|--|脚本id|
|channelNo|varchar2|false||--|渠道编号|
|scriptType|number|false||--|脚本类型1:业务办理结果通知;2:退款|
|packageId|number|false||--|套餐编号 0:所有|
|productType|number|false||--|产品类型;0:所有|
|carrierNo|varchar2|false||--|运营商;*:所有|
|provinceNo|varchar2|false||--|省份;qg:全国|
|scriptPath|varchar2|false||--|脚本路径|
|notifyUrl|varchar2|false||--|通知地址|
|svcBus|varchar2|false||--|通知服务|
|notifyLimit|number|false||5|通知次数限制|
|interval|number|false||60|通知间隔,单位s|
|status|number|false||--|状态|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||sysdate|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|

----
### ***fcDownSpecifyUp***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downGroupNo|varchar2|false||--|下游产品分组|
|upChannelNo|varchar2|false||--|上游渠道编号|
|upGroupNo|varchar2|false||--|上游产品分组|
|status|number|false||--|状态|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||sysdate|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|
|percent|number|false||100|分流比|

----
### ***fcDzPhoneActive***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|phone|varchar2|false||--|手机号|
|transSeq|varchar2|false||--|上游流水|
|activeDate|date|false||--|激活时间|
|activeStatus|varchar2|false||--|激活状态|
|iccid|varchar2|false||--|iccid|
|status|number|false||20|状态 20:等待对账; 30:对账中 0:对账完成|
|createTime|date|false||sysdate|创建时间|

----
### ***fcDzRenewCost***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|account|varchar2|false||--|手里号码|
|tansSeq|varchar2|false||--|流水|
|cost|number|false||--|成本|
|billDate|varchar2|false||--|账单日期|
|status|number|false||20|状态|
|createTime|date|false||sysdate|创建时间|

----
### ***fcDzRewardBrandNew***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|transSeq|varchar2|false||--|业务流水号|
|reward|number|false||--|佣金|
|billDate|varchar2|false||--|账单月|
|status|number|false||20|状态 20:等待 30:处理中 0:成功|
|createTime|date|false||sysdate|创建时间|

----
### ***fcDzRewardRenew***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|account|varchar2|false||--|帐号|
|reward|number|false||--|佣金|
|rewardType|number|false||--|类型 1:宽带 2:号卡|
|billDate|varchar2|false||--|账单月|
|status|number|false||20|状态 20:等待 30:处理中 0:成功|
|createTime|date|false||sysdate|创建时间|

----
### ***fcDzTradeDetail***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|billDate|varchar2|false||--|账单时间|
|orderNo|varchar2|false||--|订单号|
|type|number|false||--|类型 1:宽带 2:号卡|
|account|varchar2|false||--|用户帐号 手机号/宽带帐号|
|upSeq|varchar2|false||--|上游流水|
|cost|number|false||--|成本|
|reward|number|false||--|佣金|
|orderDate|date|false||--|订单时间|
|createDate|date|false||sysdate|创建时间|
|status|number|false||10|状态 20:等待关联订单 30:等待结算; 0:成功; 90:失败|
|msg|varchar2|false||--|消息|

----
### ***fcErrorCode***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|cid|number|false||--|主键|
|channelNo|varchar2|false||--|渠道编号|
|productType|varchar2|false||--|产品类型|
|actionType|varchar2|false||--|操作类型|
|keyWord1|varchar2|false||--|关键词1|
|keyWord2|varchar2|false||--|关键词2|
|dealType|number|false||--|处理类型|
|status|number|false||--|状态(禁用/启用)|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||--|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|
|dealMsg|varchar2|false||--|错误消息|
|isWarn|number|false||1|是否告警 0;告警 1:不告警|

----
### ***fcFlow***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|fid|number|false||--|流程编号|
|flowName|varchar2|false||1|流程名称|
|remark|varchar2|false||--|备注|
|status|number|false||--|状态|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||sysdate|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|
|flowType|number|false||--|流程类型 1下游 2上游|

----
### ***fcFlowStep***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|action|varchar2|false||--|操作|
|fid|number|false||--|流程编号|
|sno|number|false||1|步骤编号|
|scriptType|number|false||--|关联的脚本类型|
|stepName|varchar2|false||--|步骤名称|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||sysdate|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|
|stepId|number|false|yes|--|唯一标识|
|face|number|false||--|面值|
|dealMode|number|false||--|处理方式(0自动1自动)|

----
### ***fcFlowTask***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|tid|number|false|yes|--|任务编号|
|flowId|number|false||--|流程编号|
|orderNo|varchar2|false||--|订单号|
|bindId|varchar2|false||--|绑定编号|
|action|varchar2|false||--|当前操作|
|scriptType|number|false||--|脚本类型|
|upChannelNo|varchar2|false||--|上游渠道编号|
|scriptId|number|false||--|脚本id|
|scriptPath|varchar2|false||--|脚本路径|
|svcBus|varchar2|false||--|总线服务|
|ip|varchar2|false||--|发货ip|
|uptranseq|varchar2|false||--|上游流水|
|taskMsg|varchar2|false||--|结果消息|
|queryMsg|varchar2|false||--|查询消息|
|scanId|number|false||--|后补扫描id|
|nextTime|date|false||--|下次时间|
|taskStatus|number|false||20|任务状态|
|manualStatus|number|false||10|人工审核状态|
|taskStartTime|date|false||sysdate|创建时间|
|taskEndTime|date|false||--|发货结束时间|
|upProductId|number|false||--|上游产品id|
|flowMode|number|false||--|步骤驱动模式 0:自动; 1:手动|
|channelName|varchar2|false||--|渠道名称|
|downPrice|number|false||--|下游售价|
|tradeFee|number|false||--|手续费|
|upCost|number|false||--|上游成本|
|upReward|number|false||--|上游佣金|
|writeCardMode|number|false||--|写卡方式|
|face|number|false||--|面值|

----
### ***fcFlowTaskQuery***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|qid|number|false|yes|--|查询编号|
|taskId|number|false||--|任务编号|
|orderNo|varchar2|false||--|订单号|
|scriptId|number|false||--|脚本编号|
|scriptPath|varchar2|false||--|脚本路径|
|svcBus|varchar2|false||--|总线服务|
|ip|varchar2|false||--|查询ip|
|queryCntr|number|false||--|查询次数|
|queryMsg|varchar2|false||--|查询消息|
|status|number|false||20|查询状态|
|firstInterval|number|false||--|查询间隔|
|nextInterval|number|false||--|下次间隔|
|nextTime|date|false||--|下次查询时间|
|scanId|number|false||--|扫描批次|
|startTime|date|false||sysdate|开始时间|
|finishTime|date|false||--|完成时间|

----
### ***fcFundChangeDown***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|orderNo|varchar2|false||--|订单号|
|channelNo|varchar2|false||--|下游渠道编号|
|downOrderNo|varchar2|false||--|下游订单号|
|changeType|number|false||--|变更类型1:扣款;2:加款;3:退款|
|changeMoney|number|false||--|变更金额|
|oldBalance|number|false||--|变动前余额|
|afterBalance|number|false||--|变动后余额|
|changeTime|date|false||sysdate|变更时间|
|isAdjust|number|false||1|是否矫正0:矫正;1:不矫正|
|operateUser|varchar2|false||--|操作人|
|operateType|number|false||1|操作类型1:系统;2:人工|
|remark|varchar2|false||--|备注|
|syncStatus|number|false||20|同步状态20:等待同步;30:正在同步;90:同步失败;0:同步成功|
|syncEndTime|date|false||--|同步完成时间|
|tradeFee|number|false||--|手续费|

----
### ***fcFundChangeUp***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|orderNo|varchar2|false||--|订单号|
|channelNo|varchar2|false||--|上游渠道编号|
|bindId|varchar2|false||--|绑定编号|
|changeType|number|false||--|变更类型1:扣款;2:加款;3:退款|
|changeMoney|number|false||--|变更金额|
|oldBalance|number|false||--|变动前余额|
|afterBalance|number|false||--|变动后余额|
|changeTime|date|false||sysdate|变更时间|
|isAdjust|number|false||1|是否矫正0:矫正;1:不矫正|
|operateUser|varchar2|false||--|操作人|
|operateType|number|false||1|操作类型1:系统;2:人工|
|remark|varchar2|false||--|备注|
|syncStatus|number|false||20|同步状态20:等待同步;30:正在同步;90:同步失败;0:同步成功|
|syncTime|date|false||--|同步时间(适用于不立即同步的订单)|
|syncEndTime|date|false||--|同步完成时间|

----
### ***fcIccid***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|iccid|varchar2|false|yes|--|iccid|
|carrierNo|varchar2|false||*|运营商|
|provinceNo|varchar2|false||qg|省份|
|cityNo|varchar2|false||*|城市|
|iccType|number|false||1|卡类型 1:本地写卡; 2:空中入网卡|
|status|number|false||--|状态 0:可用; 1:禁用 2:已使用|
|createTime|date|false||sysdate|创建时间|
|sectionType|varchar2|false||1|号段类型|

----
### ***fcNotifyRecord***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|通知记录id|
|orderNo|varchar2|false||--|订单号|
|downOrderNo|varchar2|false||--|下游订单号|
|notifyType|number|false||1|通知类型;1:业务成功通知;2:退款|
|scriptPath|varchar2|false||--|脚本路径|
|notifyUrl|varchar2|false||--|通知url|
|svcBus|varchar2|false||--|服务名|
|notifyCntr|number|false||--|通知次数|
|notifyLimit|number|false||5|通知次数限制|
|interval|number|false||60|通知间隔,单位s|
|ip|varchar2|false||--|通知ip|
|status|number|false||--|状态;20:等待;30:正在通知;90:通知失败;0:通知成功|
|scanId|number|false||--|后补批次|
|createdTime|date|false||sysdate|创建时间|
|nextTime|date|false||--|下次时间|
|finishTime|date|false||--|完成时间|

----
### ***fcOperation***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|opId|number|false||--|主键编号|
|keyId|varchar2|false||--|数据主键id|
|operateType|varchar2|false||--|操作类型|
|details|varchar2|false||--|操作详情|
|operator|varchar2|false||--|操作人|
|operateTime|date|false||sysdate|操作时间|
|menuPath|varchar2|false||--|菜单路径|

----
### ***fcOrderBind***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|bindId|varchar2|false|yes|--|编号|
|orderNo|varchar2|false||--|订单号|
|downOrderNo|varchar2|false||--|下游订单号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|upChannelNo|varchar2|false||--|上游渠道|
|upProductId|number|false||--|上游产品id|
|upAccountId|number|false||--|上游帐号|
|upOrderNo|varchar2|false||--|上游订单号|
|face|number|false||--|面值|
|downPrice|number|false||--|下游售价|
|downTradeFee|number|false||--|下游交易手续费|
|upCost|number|false||--|上游成本|
|upReward|number|false||--|上游佣金|
|phoneNo|varchar2|false||--|手机号|
|packageId|number|false||--|套餐编号|
|productType|number|false||--|产品类型|
|scriptId|number|false||--|脚本id|
|scriptPath|varchar2|false||--|脚本路径|
|svcBus|varchar2|false||--|总线服务|
|ip|varchar2|false||--|发货ip|
|bindTime|date|false||sysdate|绑定时间|
|endTime|date|false||--|绑定结束时间|
|deliveryStartTime|date|false||--|发货开始时间|
|deliveryEndTime|date|false||--|发货结束时间|
|deliveryMsg|varchar2|false||--|发货消息|
|queryMsg|varchar2|false||--|查询消息|
|scanId|number|false||--|后补扫描id|
|nextTime|date|false||--|下次时间|
|bindStatus|number|false||20|绑定状态;20:等待;30:正在绑定;90:失败;0:成功|
|manualStatus|number|false||10|人工审核状态;10:无需处理;20:等待;30:正在处理;90:失败;0:成功|
|refundStatus|number|false||10|退款状态;10:无需处理;20:等待;30:正在退款;90:失败;0:成功|
|refundStartTime|date|false||--|退款申请时间|
|refundEndTime|date|false||--|退款结束时间|
|action|varchar2|false||--|当前操作|
|flowId|number|false||--|流程编号|

----
### ***fcOrderExpress***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|taskid|number|false||--|任务编号|
|orderNo|varchar2|false||--|订单号|
|downOrderNo|varchar2|false||--|下游订单号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|orderTime|date|false||--|下单时间|
|targetName|varchar2|false||--|收件人|
|targetPhone|varchar2|false||--|收件人手机号|
|targetAddress|varchar2|false||--|收货地址|
|expressNo|varchar2|false||--|快递单号|
|expressName|varchar2|false||--|快递公司名称|
|expressFee|number|false||--|快递费|
|createTime|date|false||sysdate|创建时间|
|expressStatus|number|false||10|快递状态 20:等待打印单号; 30:打印; 40:等待天猫发货; 90:发货失败; 0:成功|
|resultMsg|varchar2|false||--|消息|
|operateUser|varchar2|false||--|寄件人|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|
|finishTime|date|false||--|完成时间|

----
### ***fcOrderExt***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|orderNo|varchar2|false|yes|--|订单号|
|activeRealName|varchar2|false||--|号卡实名人|
|activeIdno|varchar2|false||--|号卡实名身份证号|
|brandNo|varchar2|false||--|买家宽带帐号|
|buyerNick|varchar2|false||--|买家旺旺|
|buyerAlipayId|varchar2|false||--|买家支付宝帐号|
|payOrderNo|varchar2|false||--|支付订单号|
|buyerName|varchar2|false||--|买家姓名|
|buyerPhone|varchar2|false||--|收件人手机号|
|buyerAddress|varchar2|false||--|买家地址|
|buyerMessage|varchar2|false||--|买家留言|
|iccno|varchar2|false||--|icc序列号|
|writeCard|number|false||--|是否是自动写卡 0:自动 1:人工|
|tmallStatus|varchar2|false||--|天猫订单状态|
|tmallOrderDate|date|false||--|天猫订单时间|
|installAddress|varchar2|false||--|安装地址|
|buyerProvince|varchar2|false||--|买家省份|
|buyerCity|varchar2|false||--|城市|
|iccType|number|false||--|卡类型 同下游产品表的icctype|
|installDate|date|false||--|安装时间|
|extInfo|varchar2|false||--|扩展信息|
|isWuliu|number|false||--|是否需要物流, 0:需要 1:不需要|

----
### ***fcOrderMain***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|orderNo|varchar2|false|yes|--|订单号|
|downOrderNo|varchar2|false||--|下游订单号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downProductNo|varchar2|false||--|下游产品编码|
|downProductId|number|false||--|下游产品id|
|productName|varchar2|false||--|产品名称|
|packageId|number|false||--|套餐编号|
|productType|number|false||--|产品类型|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份;qg:全国|
|cityNo|varchar2|false||--|城市:*:全市|
|activePhone|varchar2|false||--|激活手机号|
|oldPhone|varchar2|false||--|未办理成功的手机号|
|face|number|false||--|面值|
|payFee|number|false||--|支付金额|
|tradeFee|number|false||--|交易手续费|
|buyCntr|number|false||1|数量|
|trialDay|number|false||--|试用期|
|autoActive|number|false||--|是否自动激活|
|requestTime|date|false||--|请求时间|
|orderTimeout|date|false||--|订单超时时间|
|orderStatus|number|false||10|订单状态|
|refundStatus|number|false||--|退款状态|
|refundTime|date|false||--|退款时间|
|activeStatus|number|false||90|激活状态0:转正/激活90:未转正/未激活|
|activeTime|date|false||--|激活时间|
|activeTimeout|date|false||--|激活超时时间|
|notifyStatus|number|false||10|通知状态|
|errorCode|number|false||--|错误码|
|errorMsg|varchar2|false||--|错误消息|
|scanId|number|false||--|扫描批次|
|bindIp|varchar2|false||--|绑定ip|
|nextBindTime|date|false||--|下次绑定时间|
|finishTime|date|false||--|订单完成时间|
|remark|varchar2|false||--|备注|
|ext1|varchar2|false||--|扩展1|
|ext2|varchar2|false||--|扩展2|
|action|varchar2|false||--|当前操作|
|flowId|number|false||--|流程编号|
|actionNo|number|false||--|流程步骤 action对应的序号|

----
### ***fcOrderOperate***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|orderNo|varchar2|false||--|订单号|
|bindId|varchar2|false||--|绑定编号|
|taskId|number|false||--|任务编号|
|operateUser|varchar2|false||--|操作人|
|operateType|number|false||1|操作类型1:系统;2:人工|
|ip|varchar2|false||--|ip|
|remark|varchar2|false||--|备注|
|createdTime|date|false||sysdate|操作时间|

----
### ***fcOrderRefund***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false|yes|--|编号|
|orderNo|varchar2|false||--|订单号|
|downOrderNo|varchar2|false||--|下游订单号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downProductNo|varchar2|false||--|下游产品编号|
|productName|varchar2|false||--|产品名称|
|buyerNick|varchar2|false||--|买家旺旺|
|tmallRefundId|varchar2|false||--|天猫退款订单号|
|tmallRefundDate|date|false||--|天猫退款时间|
|tmallRefundStatus|varchar2|false||--|天猫退款订单号|
|reason|varchar2|false||--|退款原因|
|message|varchar2|false||--|消息|
|tmallGoodsStatus|varchar2|false||--|货物状态|
|tmallOrderStatus|varchar2|false||--|天猫订单状态|
|refundFee|number|false||--|金额|
|payOrderNo|varchar2|false||--|支付订单号|
|fromAccount|varchar2|false||--|退款账户|
|toAccount|varchar2|false||--|收款账户|
|refundStatus|number|false||10|退款状态0:成功;10:等待核实;20:等待;30:正在退款90:退款失败|
|resultMsg|varchar2|false||--|结果消息|
|refundType|number|false||1|退款类型1:线上退款;2:线下退款|
|finishTime|date|false||--|结束时间|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||sysdate|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|
|confirmUser|varchar2|false||--|确认人|

----
### ***fcPhoneCharge***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false||--|--|
|phone|varchar2|false|yes|--|--|
|face|number|false||--|--|
|remark|varchar2|false||--|备注|
|createTime|date|false||sysdate|--|
|creator|varchar2|false||--|创建人|
|status|number|false|yes|20|同process_status|
|orderNo|varchar2|false||--|--|
|chargeTime|date|false||--|--|
|resultMsg|varchar2|false||--|--|
|activateTime|date|false||--|激活时间|

----
### ***fcPreCharge***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false||--|--|
|phone|varchar2|false||--|--|
|preFace|number|false||--|预存面值|
|preChargeTime|date|false||sysdate|预存充值时间|
|preChargeStatus|number|false||20|预存状态|
|chargeFace|number|false||--|每月充值面值|
|chargeStartTime|date|false||--|开始时间|
|chargeEndTime|date|false||--|结束时间|
|limitCntr|number|false||--|充值次数|
|chargeCntr|number|false||--|以充值次数|
|chargeStatus|number|false||10|充值状态|
|creator|varchar2|false||--|--|
|createTime|date|false||sysdate|--|
|hkOrderNo|varchar2|false||--|号卡订单号|
|nextTime|date|false||--|--|

----
### ***fcProductPackage***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|pkgId|number|false||--|规则编号|
|pkgName|varchar2|false||--|规则名称|
|predeposit|number|false||--|预存金额|
|monthRent|number|false||1|月租|
|status|number|false||--|状态 0:启用; 1:禁用|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||sysdate|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|

----
### ***fcProductType***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|typeId|number|false|yes|--|类型id|
|typeName|varchar2|false||--|类型名称|
|status|number|false||--|状态0:启用;1:禁用|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||sysdate|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|

----
### ***fcScanConfig***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|scanName|varchar2|false||--|名称|
|scanTitle|varchar2|false||--|标题|
|scanInterval|number|false||20|后补扫描间隔(秒)|
|onceCount|number|false||1000|后补一次多少条数据|
|doInterval|number|false||60|后补间隔(秒),下次再入队列时间|
|status|number|false||--|状态|
|lastExecTime|date|false||sysdate|最近执行时间|
|nextExecTime|date|false||sysdate|下次执行时间|
|lastExecIp|varchar2|false||--|执行ip|

----
### ***fcSmsRecord***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|smsNo|varchar2|false||--|编号|
|downChannelNo|varchar2|false||--|下游渠道编号|
|downOrderNo|varchar2|false||--|下游订单号|
|productNo|varchar2|false||--|产品编号|
|phone|varchar2|false||--|手机号|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份|
|cityNo|varchar2|false||--|城市|
|upChannelNo|varchar2|false||--|上游渠道|
|upProductNo|varchar2|false||--|上游产品编号|
|upAccountId|number|false||--|上游帐号id|
|upProductId|number|false||--|上游产品id|
|scriptId|number|false||--|脚本id|
|apiUrl|varchar2|false||--|接口地址|
|status|number|false||20|状态|
|msg|varchar2|false||--|结果消息|
|createTime|date|false||sysdate|创建时间|
|cookie|varchar2|false||--|cookie|
|ip|varchar2|false||--|ip|

----
### ***fcSystemCity***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|cityNo|varchar2|false||--|市编号|
|cityName|varchar2|false||--|名称|
|status|number|false||--|状态|
|provinceNo|varchar2|false||--|省id|
|code|varchar2|false||--|--|

----
### ***fcSystemDictionary***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|dicId|number|false||--|字典编号|
|name|varchar2|false||--|字典名称|
|value|varchar2|false||--|字典值|
|short|number|false||--|排序|
|type|varchar2|false||--|类型|

----
### ***fcSystemLog***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false||--|编号|
|objectName|varchar2|false||--|名称|
|errorLevel|number|false||3|错误级别|
|errorDesc|varchar2|false||--|错误消息|
|traceInfo|varchar2|false||--|堆栈信息|
|createdTime|date|false||sysdate|创建时间|

----
### ***fcSystemProvince***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|provinceNo|varchar2|false||--|省编号|
|provinceName|varchar2|false||--|名称|
|status|number|false||--|状态|
|short|number|false||--|排序|

----
### ***fcTradeAnalyse***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|tradeDate|date|false||--|交易时间|
|downChannelNo|varchar2|false||--|下游渠道编号|
|upChannelNo|varchar2|false||--|上游渠道编号|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份|
|cityNo|varchar2|false||--|地市|
|productType|number|false||--|产品类型|
|packageType|number|false||--|套餐|
|productNo|varchar2|false||--|产品编码|
|totalCntr|number|false||--|订单笔数|
|totalFee|number|false||--|成功金额|
|tradeFee|number|false||--|成功面值|
|refundFee|number|false||--|退款金额|
|expressFee|number|false||--|快递费|
|upCost|number|false||--|上游成本|
|upReward|number|false||--|上游返佣|

----
### ***fcTradeDown***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|tradeDate|date|false||--|交易时间|
|downChannelNo|varchar2|false||--|下游渠道编号|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份|
|cityNo|varchar2|false||--|地市|
|productType|number|false||--|产品类型|
|packageType|number|false||--|套餐|
|productNo|varchar2|false||--|产品编码|
|totalCntr|number|false||--|订单笔数|
|totalFee|number|false||--|成功金额|
|tradeFee|number|false||--|成功面值|
|refundFee|number|false||--|退款金额|

----
### ***fcTradeUp***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|tradeDate|date|false||--|交易时间|
|upChannelNo|varchar2|false||--|上游渠道编号|
|carrierNo|varchar2|false||--|运营商|
|provinceNo|varchar2|false||--|省份|
|cityNo|varchar2|false||--|地市|
|productType|number|false||--|产品类型|
|packageType|number|false||--|套餐|
|productNo|varchar2|false||--|产品编码|
|totalCntr|number|false||--|订单笔数|
|cost|number|false||--|成本|
|reward|number|false||--|佣金|
|expressFee|number|false||--|快递费|
|refundFee|number|false||--|退款金额|

----
### ***fcUpAccount***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false||--|帐号编号|
|channelNo|varchar2|false||--|上游渠道编号|
|accountNo|varchar2|false||--|帐号名|
|accountPwd|varchar2|false||--|帐号密码|
|balance|number|false||--|余额|
|carrierNo|varchar2|false||--|运营商; *:所有|
|provinceNo|varchar2|false||--|省份; qg:全国|
|cityNo|varchar2|false||--|城市; *:全市|
|status|number|false||--|状态|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||sysdate|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|
|cookie|varchar2|false||--|网站cookie|
|bindPhone|varchar2|false||--|绑定手机|
|isUsing|number|false||--|是否正在使用 0正在使用 1空闲|
|productType|number|false||--|产品类型|

----
### ***fcUpAccountEx***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelNo|varchar2|false||--|上游渠道编号|
|channelPwd|varchar2|false||--|登录密码|
|status|number|false||--|状态0-启用1-禁用|
|createTime|date|false||sysdate|创建时间|
|createUser|varchar2|false||--|创建者|
|channelUser|varchar2|false||--|账户名|

----
### ***fcUpChannel***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelNo|varchar2|false|yes|--|下游渠道编号|
|channelName|varchar2|false||--|下游渠道名称|
|notifyUrl|varchar2|false||--|回调地址|
|needQuery|number|false||1|是否查询;0:查询;1:不查询|
|firstInterval|number|false||--|初次查询时间|
|nextInterval|number|false||20|查询间隔|
|status|number|false||--|状态|
|balance|number|false||--|余额|
|remark|varchar2|false||--|备注|
|syncStatus|number|false||20|同步记账系统状态|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||sysdate|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|
|fdChannelNo|varchar2|false||--|记账系统渠道编号|

----
### ***fcUpManualOrder***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|orderNo|varchar2|false||--|订单号|
|productNo|varchar2|false||--|产品编号|
|productName|varchar2|false||--|产品名称|
|upChannelNo|varchar2|false||--|上游渠道编号|
|taskId|number|false||--|任务编号|
|userName|varchar2|false||--|用户姓名|
|phoneNo|varchar2|false||--|号码|
|idno|varchar2|false||--|身份证|
|installAddress|varchar2|false||--|安装地址|
|remark|varchar2|false||--|备注|
|status|number|false||--|状态|
|brandNo|varchar2|false||--|宽带账号|
|installDate|date|false||--|安装时间|
|createTime|date|false||--|创建时间|
|endTime|date|false||--|结束时间|
|resultMsg|varchar2|false||--|结果消息|

----
### ***fcUpProduct***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|pid|number|false|yes|--|产品id|
|channelNo|varchar2|false||--|渠道编号|
|productNo|varchar2|false||--|产品编码|
|productName|varchar2|false||--|产品名称|
|packageId|number|false||--|套餐编号|
|productType|number|false||--|产品类型|
|carrierNo|varchar2|false||--|运营商;*:所有|
|provinceNo|varchar2|false||--|省份;qg:全国|
|cityNo|varchar2|false||--|城市;*:全市|
|cost|number|false||--|成本|
|reward|number|false||--|佣金|
|groupNo|varchar2|false||--|分组编号|
|status|number|false||--|状态;0:启用;1:禁用|
|remark|varchar2|false||--|备注|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||sysdate|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|
|debitMode|number|false||1|扣款模式 1:先扣后退;2:激活后再扣|
|rewardCntr|number|false||--|--|
|activeExpire|number|false||--|激活超时(天)|
|face|number|false||--|面值|
|flowId|number|false||--|处理流程|

----
### ***fcUpScript***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|sid|number|false|yes|--|脚本id|
|channelNo|varchar2|false||--|渠道编号|
|scriptType|number|false||--|脚本类型|
|productType|number|false||--|产品类型;0:所有|
|packageId|number|false||--|套餐编号|
|carrierNo|varchar2|false||--|运营商;*:所有|
|provinceNo|varchar2|false||qg|省份;qg:全国|
|cityNo|varchar2|false||*|城市|
|scriptPath|varchar2|false||--|脚本路径|
|upUrl|varchar2|false||--|上游服务地址|
|svcBus|varchar2|false||--|总线服务|
|status|number|false||--|状态|
|createdUser|varchar2|false||--|创建者|
|createdTime|date|false||sysdate|创建时间|
|editUser|varchar2|false||--|更新人|
|editTime|date|false||--|更新时间|

----
### ***fcWarnMsg***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|id|number|false||--|消息编号|
|title|varchar2|false||--|标题|
|keywords|varchar2|false||--|关键字|
|content|varchar2|false||--|内容|
|warnLevel|number|false||--|告警级别|
|createdTime|date|false||sysdate|创建时间|
|isSync|number|false||1|是否被同步:1-未同步,0-被同步|
|syncStatus|number|false||20|同步状态:20:等待同步,30:同步中,0:同步完成|

----
### ***fcYxhdPhone***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|channelNo|varchar2|false||--|渠道编号|
|phone|varchar2|false|yes|--|手机号|
|pkgType|varchar2|false||--|套餐|
|limitCntr|number|false||1|限制次数|
|limitType|number|false||1|限制类型 1:按月 2:按天|
|expireDate|date|false||--|失效时间|
|chargeCntr|number|false||--|当前限制周期内充值次数|
|totalCntr|number|false||--|累计充值次数|
|lastChargeTime|date|false||--|最后充值时间|
|status|number|false||--|状态 0:启用; 1:禁用|
|createTime|date|false||sysdate|创建时间|
|activeTime|date|false||--|激活时间|
|hdType|number|false||1|活动类型 1:5折活动 2:8折活动 3:视频会员|

----
### ***tAddr***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|addrCode1|varchar2|false||--|--|
|district|varchar2|false||--|--|
|addrDetail|varchar2|false||--|--|
|districtCode1|varchar2|false||--|--|
|districtCode2|varchar2|false||--|--|
|addrCode2|varchar2|false||--|--|
|addrLevel|number|false||--|--|
|scenes|varchar2|false||--|--|
|areaType|varchar2|false||--|--|
|businessAreaCode|varchar2|false||--|--|

----
### ***tbTemp***
*   ***description***
 
*  ***params***

|名称| 类型 |是否可空 |主键 |默认值| 备注 |
|---|----|---|--|---|----|
|downChannelNo|varchar2|false||--|--|
|carrierNo|varchar2|false||--|--|
|province|varchar2|false||--|--|
|city|varchar2|false||--|--|
|type|varchar2|false||--|--|
|rent|number|false||--|--|
|deposit|number|false||--|--|
|price|number|false||--|--|
|iccType|number|false||--|--|
|fee|number|false||--|--|
|cost|number|false||--|--|
|reward|number|false||--|--|
|productNo|varchar2|false||--|--|
|trial|number|false||--|--|
|debitMode|number|false||--|--|
|upChannel|varchar2|false||--|--|
|groupNo|varchar2|false||--|--|
|flow|varchar2|false||--|--|
|createDate|date|false||sysdate|--|
