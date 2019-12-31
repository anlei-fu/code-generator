exports.config = {
	add: true,
	project: "SettleAccount",
	exportExcel:true,
	table: {
		name: "qyBaseDownChannel",
		rawName: "QY_BASE_DOWN_CHANNEL",
		columns: {
			CHANNEL_NO: {
				nullable: "N",
				isPk: false,
				description: "渠道编号",
				name: "ChannelNo",
				rawName: "CHANNEL_NO",
				type: "int"
			},
			CHANNEL_NAME: {
				nullable: "N",
				isPk: false,
				description: "渠道名称",
				name: "ChannelName",
				rawName: "CHANNEL_NAME",
				type: "int"
			},
			COMPANY_ID: {
				nullable: "N",
				isPk: false,
				description: "所属公司",
				name: "CompanyId",
				rawName: "COMPANY_ID",
				type: "int"
			},
			SOURCE_SYSTEM_ID: {
				nullable: "N",
				isPk: false,
				description: "所属系统编号",
				name: "SourceSystemId",
				rawName: "SOURCE_SYSTEM_ID",
				type: "int"
			},
			STATUS: {
				nullable: "N",
				isPk: false,
				description: "状态",
				name: "Status",
				rawName: "STATUS",
				type: "int"
			},
			COMMI_BALANCE: {
				nullable: "N",
				isPk: false,
				description: "佣金余额",
				name: "CommiBalance",
				rawName: "COMMI_BALANCE",
				type: "int"
			},
			WARN_BALANCE: {
				nullable: "N",
				isPk: false,
				description: "报警余额",
				name: "WarnBalance",
				rawName: "WARN_BALANCE",
				type: "int"
			},
			ACCOUNT_ID: {
				nullable: "N",
				isPk: false,
				description: "下游账户id",
				name: "AccountId",
				rawName: "ACCOUNT_ID",
				type: "int"
			},
			CREATED_USER: {
				nullable: "N",
				isPk: false,
				description: "创建人",
				name: "CreatedUser",
				rawName: "CREATED_USER",
				type: "int"
			},
			CREATED_TIME: {
				nullable: "N",
				isPk: false,
				description: "创建时间",
				name: "CreatedTime",
				rawName: "CREATED_TIME",
				type: "int"
			},
			LAST_EDIT_USER: {
				nullable: "Y",
				isPk: false,
				description: "最后更新人",
				name: "LastEditUser",
				rawName: "LAST_EDIT_USER",
				type: "int"
			},
			LAST_EDIT_TIME: {
				nullable: "Y",
				isPk: false,
				description: "最后更新时间",
				name: "LastEditTime",
				rawName: "LAST_EDIT_TIME",
				type: "int"
			}
		}
	},
	name: "QyBaseDownChannel",
	prefix: "M",
	operations: [],
	defaultValues: {
		updates: [],
		creates: []
	},
	selectConfig: {
		selects: [
			{
				text: "Name",
				service: "SystemDictionary",
				value: "Value",
				defaultText: "--请选择--",
				lable: "状态",
				name: "Status"
			},
			{
				service: "QyBaseDownAccount",
				defaultText: "--请选择--",
				text: "AccountName",
				value: "AccountId",
				lable: "下游支付账户",
				name: "AccountId"
			}
		],
		texts: [],
		getListSql: {
			columns: [
				"t1.NAME StatusName",
				"t2.NAME AccountIdName"
			],
			joins: [
				"LEFT JOIN SYSTEM_DICTIONARY t1 ON t.STATUS = t1.VALUE AND t1.TYPE = 'Status'",
				"LEFT JOIN ACCOUNT t2 ON t.ACCOUNT_ID = t2.ACCOUNT_Id"
			],
			conditions: [
				"1=1",
				"{&@t.AccountId}",
				"{&@t.Status}"
			],
			orderBy: ""
		},
		getCountSql: {
			conditions: [
				"1=1",
				"{&@t.AccountId}",
				"{&@t.Status}"
			]
		}
	},
	tableConfig: {
		items: [
			{
				header: "渠道编号",
				content: "@item.ChannelNo"
			},
			{
				header: "渠道名称",
				content: "@item.ChannelName"
			},
			{
				header: "所属公司",
				content: "@item.CompanyId"
			},
			{
				header: "所属系统编号",
				content: "@item.SourceSystemId"
			},
			{
				header: "状态",
				content: "@item.GetDataValue(\"StatusName\")"
			},
			{
				header: "佣金余额",
				content: "@item.CommiBalance"
			},
			{
				header: "报警余额",
				content: "@item.WarnBalance"
			},
			{
				header: "下游账户id",
				content: "@item.GetDataValue(\"AccountName\")"
			},
			{
				header: "创建人",
				content: "@item.CreatedUser"
			},
			{
				header: "创建时间",
				content: "@item.CreatedTime"
			},
			{
				header: "最后更新人",
				content: "@item.LastEditUser"
			},
			{
				header: "最后更新时间",
				content: "@item.LastEditTime"
			}
		]
	},
	addConfig: {
		selects: [
			{
				text: "Name",
				service: "SystemDictionary",
				value: "Value",
				defaultText: "--请选择--",
				lable: "状态",
				name: "Status"
			},
			{
				service: "QyBaseDownAccount",
				defaultText: "--请选择--",
				text: "AccountName",
				value: "AccountId",
				lable: "下游支付账户",
				name: "AccountId"
			}
		],
		texts: [
			{
				lable: "渠道编号",
				name: "ChannelNo",
				textArea: false
			},
			{
				lable: "渠道名称",
				name: "ChannelName",
				textArea: false
			},
			{
				lable: "所属公司",
				name: "CompanyId",
				textArea: false
			},
			{
				lable: "所属系统编号",
				name: "SourceSystemId",
				textArea: false
			},
			{
				lable: "佣金余额",
				name: "CommiBalance",
				textArea: false
			},
			{
				lable: "报警余额",
				name: "WarnBalance",
				textArea: false
			},
			{
				lable: "创建人",
				name: "CreatedUser",
				textArea: false
			},
			{
				lable: "创建时间",
				name: "CreatedTime",
				textArea: false
			},
			{
				lable: "最后更新人",
				name: "LastEditUser",
				textArea: false
			},
			{
				lable: "最后更新时间",
				name: "LastEditTime",
				textArea: false
			}
		],
		required: []
	}
};

