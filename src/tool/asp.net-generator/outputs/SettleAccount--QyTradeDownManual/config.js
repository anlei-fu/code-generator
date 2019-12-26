exports.config = {
	delete: true,
	add: true,
	exportExcel:true,
	project: "SettleAccount",
	table: {
		name: "qyTradeDownManual",
		rawName: "QY_TRADE_DOWN_MANUAL",
		columns: {
			recordId: {
				nullable: false,
				isPk: false,
				description: "编号",
				name: "RecordId",
				rawName: "RECORD_ID",
				type: "int"
			},
			channelNo: {
				nullable: false,
				isPk: false,
				description: "渠道编号",
				name: "ChannelNo",
				rawName: "CHANNEL_NO",
				type: "string"
			},
			accountId: {
				nullable: false,
				isPk: false,
				description: "账户编号",
				name: "AccountId",
				rawName: "ACCOUNT_ID",
				type: "decimal"
			},
			adjustId: {
				nullable: false,
				isPk: false,
				description: "红冲编号",
				name: "AdjustId",
				rawName: "ADJUST_ID",
				type: "int"
			},
			hasAdjust: {
				nullable: false,
				isPk: false,
				description: "是否红冲过",
				name: "HasAdjust",
				rawName: "HAS_ADJUST",
				type: "int"
			},
			addType: {
				nullable: false,
				isPk: false,
				description: "变动类型",
				name: "AddType",
				rawName: "ADD_TYPE",
				type: "int"
			},
			changeAmount: {
				nullable: false,
				isPk: false,
				description: "变动金额",
				name: "ChangeAmount",
				rawName: "CHANGE_AMOUNT",
				type: "int"
			},
			realAmount: {
				nullable: false,
				isPk: false,
				description: "交易平账真实金额",
				name: "RealAmount",
				rawName: "REAL_AMOUNT",
				type: "int"
			},
			changeTime: {
				nullable: false,
				isPk: false,
				description: "变动时间",
				name: "ChangeTime",
				rawName: "CHANGE_TIME",
				type: "DateTime"
			},
			balance: {
				nullable: false,
				isPk: false,
				description: "余额",
				name: "Balance",
				rawName: "BALANCE",
				type: "int"
			},
			createUser: {
				nullable: false,
				isPk: false,
				description: "创建人",
				name: "CreateUser",
				rawName: "CREATE_USER",
				type: "string"
			},
			bankFundId: {
				nullable: false,
				isPk: false,
				description: "银行资金变动编号（红冲是使用）",
				name: "BankFundId",
				rawName: "BANK_FUND_ID",
				type: "int"
			},
			memo: {
				nullable: false,
				isPk: false,
				description: "备注",
				name: "Memo",
				rawName: "MEMO",
				type: "string"
			},
			extRecordNo: {
				nullable: false,
				isPk: false,
				description: "外部加款记录编号",
				name: "ExtRecordNo",
				rawName: "EXT_RECORD_NO",
				type: "string"
			},
			handlingFeeId: {
				nullable: false,
				isPk: false,
				description: "收取手续费的记录编号",
				name: "HandlingFeeId",
				rawName: "HANDLING_FEE_ID",
				type: "int"
			}
		}
	},
	name: "QyTradeDownManual",
	prefix: "M",
	operations: [],
	defaultValues: {
		updates: [],
		creates: []
	},
	selectConfig: {
		selects: [
			{
				service: "Channel",
				defaultText: "--请选择--",
				text: "ChannelName",
				value: "No",
				lable: "渠道编号",
				name: "ChannelNo"
			},
			{
				text: "Name",
				value: "Value",
				defaultText: "--请选择--",
				service: "SystemDictionary",
				lable: "是否红冲过",
				name: "HasAdjust"
			},
			{
				text: "Name",
				service: "SystemDictionary",
				value: "Value",
				defaultText: "--请选择--",
				lable: "变动类型",
				name: "AddType"
			}
		],
		texts: [
			{
				lable: "外部加款记录编号",
				name: "ExtRecordNo",
				textArea: false
			}
		],
		getListSql: {
			columns: [
				"t1.NAME ChannelNoName",
				"t2.NAME HasAdjustName",
				"t3.NAME AddTypeName"
			],
			joins: [
				"LEFT JOIN CHANNEL t1 ON t.CHANNEL_NO = t1.No",
				"LEFT JOIN SYSTEM_DICTIONARY t2 ON t.HAS_ADJUST = t2.VALUE AND t2.TYPE = 'HasAdjust'",
				"LEFT JOIN SYSTEM_DICTIONARY t3 ON t.ADD_TYPE = t3.VALUE AND t3.TYPE = 'AddType'"
			],
			conditions: [
				"1=1",
				"{&@t.AddType}",
				"{&@t.ChannelNo}",
				"{&@t.ExtRecordNo}",
				"{&@t.HasAdjust}"
			],
			orderBy: ""
		},
		getCountSql: {
			conditions: [
				"1=1",
				"{&@t.AddType}",
				"{&@t.ChannelNo}",
				"{&@t.ExtRecordNo}",
				"{&@t.HasAdjust}"
			]
		}
	},
	tableConfig: {
		items: [
			{
				header: "编号",
				content: "@item.RecordId"
			},
			{
				header: "渠道编号",
				content: "@item.GetDataValue(\"ChannelNoName\")"
			},
			{
				header: "账户编号",
				content: "@item.AccountId"
			},
			{
				header: "红冲编号",
				content: "@item.AdjustId"
			},
			{
				header: "是否红冲过",
				content: "@item.GetDataValue(\"HasAdjustName\")"
			},
			{
				header: "变动类型",
				content: "@item.GetDataValue(\"AddTypeName\")"
			},
			{
				header: "变动金额",
				content: "@item.ChangeAmount"
			},
			{
				header: "交易平账真实金额",
				content: "@item.RealAmount"
			},
			{
				header: "变动时间",
				content: "@item.ChangeTime"
			},
			{
				header: "余额",
				content: "@item.Balance"
			},
			{
				header: "创建人",
				content: "@item.CreateUser"
			},
			{
				header: "银行资金变动编号（红冲是使用）",
				content: "@item.BankFundId"
			},
			{
				header: "备注",
				content: "@item.Memo"
			},
			{
				header: "外部加款记录编号",
				content: "@item.ExtRecordNo"
			},
			{
				header: "收取手续费的记录编号",
				content: "@item.HandlingFeeId"
			}
		]
	},
	addConfig: {
		selects: [
			{
				service: "Channel",
				defaultText: "--请选择--",
				text: "ChannelName",
				value: "No",
				lable: "渠道编号",
				name: "ChannelNo"
			},
			{
				text: "Name",
				value: "Value",
				defaultText: "--请选择--",
				service: "SystemDictionary",
				lable: "是否红冲过",
				name: "HasAdjust"
			},
			{
				text: "Name",
				service: "SystemDictionary",
				value: "Value",
				defaultText: "--请选择--",
				lable: "变动类型",
				name: "AddType"
			}
		],
		texts: [
			{
				lable: "编号",
				name: "RecordId",
				textArea: false
			},
			{
				lable: "账户编号",
				name: "AccountId",
				textArea: false
			},
			{
				lable: "红冲编号",
				name: "AdjustId",
				textArea: false
			},
			{
				lable: "变动金额",
				name: "ChangeAmount",
				textArea: false
			},
			{
				lable: "交易平账真实金额",
				name: "RealAmount",
				textArea: false
			},
			{
				lable: "余额",
				name: "Balance",
				textArea: false
			},
			{
				lable: "银行资金变动编号（红冲是使用）",
				name: "BankFundId",
				textArea: false
			},
			{
				lable: "备注",
				name: "Memo",
				textArea: false
			},
			{
				lable: "外部加款记录编号",
				name: "ExtRecordNo",
				textArea: false
			},
			{
				lable: "收取手续费的记录编号",
				name: "HandlingFeeId",
				textArea: false
			}
		],
		required: []
	}
};

