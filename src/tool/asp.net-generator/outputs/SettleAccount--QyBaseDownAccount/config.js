exports.config = {
	delete: true,
	add: true,
	exportExcel:true,
	project: "ZDSystem",
	table: {
		name: "orderDiff",
		rawName: "Order",
		columns: {
			accountId: {
				nullable: false,
				isPk: false,
				description: "账户编号",
				name: "AccountId",
				rawName: "ACCOUNT_ID",
				type: "int"
			},
			accountName: {
				nullable: false,
				isPk: false,
				description: "账号名称",
				name: "AccountName",
				rawName: "ACCOUNT_NAME",
				type: "string"
			},
			queryBalance: {
				nullable: false,
				isPk: false,
				description: "查询余额",
				name: "QueryBalance",
				rawName: "QUERY_BALANCE",
				type: "int"
			},
			innerBalance: {
				nullable: false,
				isPk: false,
				description: "理论余额",
				name: "InnerBalance",
				rawName: "INNER_BALANCE",
				type: "int"
			},
			creditMoney: {
				nullable: false,
				isPk: false,
				description: "授信金额",
				name: "CreditMoney",
				rawName: "CREDIT_MONEY",
				type: "int"
			},
			createdUser: {
				nullable: false,
				isPk: false,
				description: "创建人",
				name: "CreatedUser",
				rawName: "CREATED_USER",
				type: "string"
			},
			createdTime: {
				nullable: false,
				isPk: false,
				description: "创建时间",
				name: "CreatedTime",
				rawName: "CREATED_TIME",
				type: "DateTime"
			},
			lastEditUser: {
				nullable: false,
				isPk: false,
				description: "最后更新人",
				name: "LastEditUser",
				rawName: "LAST_EDIT_USER",
				type: "string"
			},
			lastEditTime: {
				nullable: false,
				isPk: false,
				description: "最后更新时间",
				name: "LastEditTime",
				rawName: "LAST_EDIT_TIME",
				type: "DateTime"
			}
		}
	},
	name: "QyBaseDownAccount",
	prefix: "M",
	operations: [],
	defaultValues: {
		updates: [],
		creates: []
	},
	selectConfig: {
		selects: [
		],
		texts: [],
		getListSql: {
			columns: [
			],
			joins: [
				"LEFT JOIN ACCOUNT t1 ON t.ACCOUNT_ID = t1.Id"
			],
			conditions: [
				"1=1",
				"{&@t.CreatedTime < to_date($ET,'YYYY-MM-DD')}",
				"{&@t.CreatedTime >= to_date($ST,'YYYY-MM-DD')}"
			],
			orderBy: "ORDER BY t.CREATED_TIME DESC"
		},
		getCountSql: {
			conditions: [
				"1=1",
				"{&@t.CreatedTime < to_date($ET,'YYYY-MM-DD')}",
				"{&@t.CreatedTime >= to_date($ST,'YYYY-MM-DD')}"
			]
		}
	},
	tableConfig: {
		items: [
			{
				header: "账户编号",
				content: "@item.GetDataValue(\"AccountIdName\")"
			},
			{
				header: "账号名称",
				content: "@item.AccountName"
			},
			{
				header: "查询余额",
				content: "@item.QueryBalance"
			},
			{
				header: "理论余额",
				content: "@item.InnerBalance"
			},
			{
				header: "授信金额",
				content: "@item.CreditMoney"
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
				service: "Account",
				defaultText: "--请选择--",
				text: "AccountName",
				value: "AccountId",
				lable: "账户编号",
				name: "AccountId"
			}
		],
		texts: [
			{
				lable: "账号名称",
				name: "AccountName",
				textArea: false
			},
			{
				lable: "查询余额",
				name: "QueryBalance",
				textArea: false
			},
			{
				lable: "理论余额",
				name: "InnerBalance",
				textArea: false
			},
			{
				lable: "授信金额",
				name: "CreditMoney",
				textArea: false
			}
		],
		required: []
	}
};

