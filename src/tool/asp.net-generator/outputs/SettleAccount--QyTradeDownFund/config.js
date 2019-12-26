exports.config = {
	delete: true,
	add: true,
	exportExcel:true,
	project: "SettleAccount",
	table: {
		name: "qyTradeDownFund",
		rawName: "QY_TRADE_DOWN_FUND",
		columns: {
			recordId: {
				nullable: false,
				isPk: false,
				description: "下游变动编号",
				name: "RecordId",
				rawName: "RECORD_ID",
				type: "int"
			},
			qyOrderId: {
				nullable: false,
				isPk: false,
				description: "记账系统订单号",
				name: "QyOrderId",
				rawName: "QY_ORDER_ID",
				type: "int"
			},
			tradeOrderNo: {
				nullable: false,
				isPk: false,
				description: "交易系统订单号(激活编号)",
				name: "TradeOrderNo",
				rawName: "TRADE_ORDER_NO",
				type: "string"
			},
			extOrderNo: {
				nullable: false,
				isPk: false,
				description: "扩展订单号交易(权益卡号)",
				name: "ExtOrderNo",
				rawName: "EXT_ORDER_NO",
				type: "string"
			},
			extContractNo: {
				nullable: false,
				isPk: false,
				description: "扩展号(合同编号)",
				name: "ExtContractNo",
				rawName: "EXT_CONTRACT_NO",
				type: "string"
			},
			productName: {
				nullable: false,
				isPk: false,
				description: "权益包名称",
				name: "ProductName",
				rawName: "PRODUCT_NAME",
				type: "string"
			},
			orderSource: {
				nullable: false,
				isPk: false,
				description: "订单来源（系统编号）",
				name: "OrderSource",
				rawName: "ORDER_SOURCE",
				type: "int"
			},
			downChannelNo: {
				nullable: false,
				isPk: false,
				description: "下游渠道编号",
				name: "DownChannelNo",
				rawName: "DOWN_CHANNEL_NO",
				type: "string"
			},
			downAccountId: {
				nullable: false,
				isPk: false,
				description: "下游支付账号",
				name: "DownAccountId",
				rawName: "DOWN_ACCOUNT_ID",
				type: "int"
			},
			changeTime: {
				nullable: false,
				isPk: false,
				description: "变动创建时间",
				name: "ChangeTime",
				rawName: "CHANGE_TIME",
				type: "DateTime"
			},
			orderTime: {
				nullable: false,
				isPk: false,
				description: "订单日期(激活时间)",
				name: "OrderTime",
				rawName: "ORDER_TIME",
				type: "DateTime"
			},
			changeType: {
				nullable: false,
				isPk: false,
				description: "变更类型",
				name: "ChangeType",
				rawName: "CHANGE_TYPE",
				type: "int"
			},
			orderAmount: {
				nullable: false,
				isPk: false,
				description: "订单金额",
				name: "OrderAmount",
				rawName: "ORDER_AMOUNT",
				type: "int"
			},
			changeAmount: {
				nullable: false,
				isPk: false,
				description: "变动金额(销售金额)",
				name: "ChangeAmount",
				rawName: "CHANGE_AMOUNT",
				type: "int"
			},
			orderFace: {
				nullable: false,
				isPk: false,
				description: "订单面值(权益包价值)",
				name: "OrderFace",
				rawName: "ORDER_FACE",
				type: "int"
			},
			changeFace: {
				nullable: false,
				isPk: false,
				description: "变动面值",
				name: "ChangeFace",
				rawName: "CHANGE_FACE",
				type: "int"
			},
			balance: {
				nullable: false,
				isPk: false,
				description: "账户余额",
				name: "Balance",
				rawName: "BALANCE",
				type: "int"
			},
			memo: {
				nullable: false,
				isPk: false,
				description: "备注",
				name: "Memo",
				rawName: "MEMO",
				type: "string"
			}
		}
	},
	name: "QyTradeDownFund",
	prefix: "M",
	operations: [],
	defaultValues: {
		updates: [],
		creates: []
	},
	selectConfig: {
		selects: [
			{
				service: "DownChannel",
				defaultText: "--请选择--",
				text: "DownChannelName",
				value: "No",
				lable: "下游渠道编号",
				name: "DownChannelNo"
			},
			{
				service: "DownAccount",
				defaultText: "--请选择--",
				text: "DownAccountName",
				value: "DownAccountId",
				lable: "下游支付账号",
				name: "DownAccountId"
			},
			{
				text: "Name",
				service: "SystemDictionary",
				value: "Value",
				defaultText: "--请选择--",
				lable: "变更类型",
				name: "ChangeType"
			}
		],
		texts: [
			{
				lable: "交易系统订单号(激活编号)",
				name: "TradeOrderNo",
				textArea: false
			},
			{
				lable: "扩展订单号交易(权益卡号)",
				name: "ExtOrderNo",
				textArea: false
			},
			{
				lable: "扩展号(合同编号)",
				name: "ExtContractNo",
				textArea: false
			}
		],
		getListSql: {
			columns: [
				"t1.CHANNEL_NAME DownChannelNoName",
				"t2.ACCOUNT_NAME DownAccountIdName",
				"t3.NAME ChangeTypeName"
			],
			joins: [
				"LEFT JOIN QY_BASE_DOWN_CHANNEL t1 ON t.DOWN_CHANNEL_NO = t1.CHANNEL_NO",
				"LEFT JOIN QY_BASE_DOWN_ACCOUNT t2 ON t.DOWN_ACCOUNT_ID = t2.ACCOUNT_ID",
				"LEFT JOIN SYSTEM_DICTIONARY t3 ON t.CHANGE_TYPE = t3.VALUE AND t3.TYPE = 'ChangeType'"
			],
			conditions: [
				"1=1",
				"{&@t.ChangeType}",
				"{&@t.DownAccountId}",
				"{&@t.DownChannelNo}",
				"{&@t.ExtContractNo}",
				"{&@t.ExtOrderNo}",
				"{&@t.TradeOrderNo}"
			],
			orderBy: ""
		},
		getCountSql: {
			conditions: [
				"1=1",
				"{&@t.ChangeType}",
				"{&@t.DownAccountId}",
				"{&@t.DownChannelNo}",
				"{&@t.ExtContractNo}",
				"{&@t.ExtOrderNo}",
				"{&@t.TradeOrderNo}"
			]
		}
	},
	tableConfig: {
		items: [
			{
				header: "下游变动编号",
				content: "@item.RecordId"
			},
			{
				header: "记账系统订单号",
				content: "@item.QyOrderId"
			},
			{
				header: "交易系统订单号(激活编号)",
				content: "@item.TradeOrderNo"
			},
			{
				header: "扩展订单号交易(权益卡号)",
				content: "@item.ExtOrderNo"
			},
			{
				header: "扩展号(合同编号)",
				content: "@item.ExtContractNo"
			},
			{
				header: "权益包名称",
				content: "@item.ProductName"
			},
			{
				header: "订单来源（系统编号）",
				content: "@item.OrderSource"
			},
			{
				header: "下游渠道编号",
				content: "@item.GetDataValue(\"DownChannelNoName\")"
			},
			{
				header: "下游支付账号",
				content: "@item.GetDataValue(\"DownAccountIdName\")"
			},
			{
				header: "变动创建时间",
				content: "@item.ChangeTime"
			},
			{
				header: "订单日期(激活时间)",
				content: "@item.OrderTime"
			},
			{
				header: "变更类型",
				content: "@item.GetDataValue(\"ChangeTypeName\")"
			},
			{
				header: "订单金额",
				content: "@item.OrderAmount"
			},
			{
				header: "变动金额(销售金额)",
				content: "@item.ChangeAmount"
			},
			{
				header: "订单面值(权益包价值)",
				content: "@item.OrderFace"
			},
			{
				header: "变动面值",
				content: "@item.ChangeFace"
			},
			{
				header: "账户余额",
				content: "@item.Balance"
			},
			{
				header: "备注",
				content: "@item.Memo"
			}
		]
	},
	addConfig: {
		selects: [
			{
				service: "DownChannel",
				defaultText: "--请选择--",
				text: "DownChannelName",
				value: "No",
				lable: "下游渠道编号",
				name: "DownChannelNo"
			},
			{
				service: "DownAccount",
				defaultText: "--请选择--",
				text: "DownAccountName",
				value: "DownAccountId",
				lable: "下游支付账号",
				name: "DownAccountId"
			},
			{
				text: "Name",
				service: "SystemDictionary",
				value: "Value",
				defaultText: "--请选择--",
				lable: "变更类型",
				name: "ChangeType"
			}
		],
		texts: [
			{
				lable: "下游变动编号",
				name: "RecordId",
				textArea: false
			},
			{
				lable: "记账系统订单号",
				name: "QyOrderId",
				textArea: false
			},
			{
				lable: "交易系统订单号(激活编号)",
				name: "TradeOrderNo",
				textArea: false
			},
			{
				lable: "扩展订单号交易(权益卡号)",
				name: "ExtOrderNo",
				textArea: false
			},
			{
				lable: "扩展号(合同编号)",
				name: "ExtContractNo",
				textArea: false
			},
			{
				lable: "权益包名称",
				name: "ProductName",
				textArea: false
			},
			{
				lable: "订单来源（系统编号）",
				name: "OrderSource",
				textArea: false
			},
			{
				lable: "订单金额",
				name: "OrderAmount",
				textArea: false
			},
			{
				lable: "变动金额(销售金额)",
				name: "ChangeAmount",
				textArea: false
			},
			{
				lable: "订单面值(权益包价值)",
				name: "OrderFace",
				textArea: false
			},
			{
				lable: "变动面值",
				name: "ChangeFace",
				textArea: false
			},
			{
				lable: "账户余额",
				name: "Balance",
				textArea: false
			},
			{
				lable: "备注",
				name: "Memo",
				textArea: true
			}
		],
		required: []
	}
};

