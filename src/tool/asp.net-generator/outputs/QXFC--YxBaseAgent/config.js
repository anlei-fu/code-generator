exports.config = {
	delete: true,
	add: true,
	project: "QXFC",
	table: {
		name: "yxBaseAgent",
		description: "",
		columns: {
			agentId: {
				name: "AgentId",
				description: "代理人编号",
				type: "string",
				nullable: false,
				defaltValue: null,
				chineseName: "代理人编号",
				rawName: "AGENT_ID",
				isPk: true
			},
			agentName: {
				name: "AgentName",
				description: "代理人名称",
				type: "string",
				nullable: false,
				defaltValue: null,
				chineseName: "代理人名称",
				rawName: "AGENT_NAME"
			},
			agentType: {
				name: "AgentType",
				description: "代理人类型0",
				type: "int",
				nullable: false,
				defaltValue: null,
				chineseName: "代理人类型0",
				rawName: "AGENT_TYPE"
			},
			certificateNo: {
				name: "CertificateNo",
				description: "身份证/纳税识别号",
				type: "string",
				nullable: false,
				defaltValue: null,
				chineseName: "身份证/纳税识别号",
				rawName: "CERTIFICATE_NO"
			},
			mobile: {
				name: "Mobile",
				description: "手机号码",
				type: "string",
				nullable: false,
				defaltValue: "_",
				chineseName: "手机号码",
				rawName: "MOBILE"
			},
			provinceNo: {
				name: "ProvinceNo",
				description: "省份",
				type: "string",
				nullable: false,
				defaltValue: "_",
				chineseName: "省份",
				rawName: "PROVINCE_NO"
			},
			companyNature: {
				name: "CompanyNature",
				description: "公司性质1",
				type: "int",
				nullable: false,
				defaltValue: 0,
				chineseName: "公司性质1",
				rawName: "COMPANY_NATURE"
			},
			companyId: {
				name: "CompanyId",
				description: "公司编号",
				type: "int",
				nullable: false,
				defaltValue: null,
				chineseName: "公司编号",
				rawName: "COMPANY_ID"
			},
			taxpayerSize: {
				name: "TaxpayerSize",
				description: "纳税人规模1",
				type: "int",
				nullable: false,
				defaltValue: 0,
				chineseName: "纳税人规模1",
				rawName: "TAXPAYER_SIZE"
			},
			balance: {
				name: "Balance",
				description: "余额",
				type: "int",
				nullable: false,
				defaltValue: 0,
				chineseName: "余额",
				rawName: "BALANCE"
			},
			status: {
				name: "Status",
				description: "状态",
				type: "int",
				nullable: false,
				defaltValue: null,
				chineseName: "状态",
				rawName: "STATUS"
			},
			createdUser: {
				name: "CreatedUser",
				description: "创建人",
				type: "string",
				nullable: false,
				defaltValue: null,
				chineseName: "创建人",
				rawName: "CREATED_USER"
			},
			createdTime: {
				name: "CreatedTime",
				description: "创建时间",
				type: "DateTime",
				nullable: false,
				defaltValue: "sysdate",
				chineseName: "创建时间",
				rawName: "CREATED_TIME"
			},
			lastEditUser: {
				name: "LastEditUser",
				description: "最后更新人",
				type: "string",
				nullable: false,
				defaltValue: null,
				chineseName: "最后更新人",
				rawName: "LAST_EDIT_USER"
			},
			lastEditTime: {
				name: "LastEditTime",
				description: "最后更新时间",
				type: "DateTime",
				nullable: false,
				defaltValue: null,
				chineseName: "最后更新时间",
				rawName: "LAST_EDIT_TIME"
			},
			downChannelNo: {
				name: "DownChannelNo",
				description: "下游渠道",
				type: "string",
				nullable: false,
				defaltValue: null,
				chineseName: "下游渠道",
				rawName: "DOWN_CHANNEL_NO"
			},
			outAgentId: {
				name: "OutAgentId",
				description: "交易系统代理人编号",
				type: "string",
				nullable: false,
				defaltValue: null,
				chineseName: "交易系统代理人编号",
				rawName: "OUT_AGENT_ID"
			},
			groupAgent: {
				name: "GroupAgent",
				description: "0",
				type: "int",
				nullable: false,
				defaltValue: 1,
				chineseName: "0",
				rawName: "GROUP_AGENT"
			},
			groupCount: {
				name: "GroupCount",
				description: "组合数量",
				type: "int",
				nullable: false,
				defaltValue: 0,
				chineseName: "组合数量",
				rawName: "GROUP_COUNT"
			}
		},
		rawName: "YX_BASE_AGENT",
		constraints: {
			pkAgentId: {
				name: "pkAgentId",
				columns: [
					"agentId"
				]
			}
		}
	},
	name: "YxBaseAgent",
	prefix: "M",
	operations: [],
	addConfig: {
		selects: [
			{
				service: "Agent",
				defaultText: "--请选择--",
				text: "AgentName",
				value: "Id",
				lable: "代理人编号"
			},
			{
				text: "Name",
				service: "SystemDictionary",
				value: "Value",
				defaultText: "--请选择--",
				lable: "代理人类型0"
			},
			{
				service: "Province",
				defaultText: "--请选择--",
				text: "ProvinceName",
				value: "No",
				lable: "省份"
			},
			{
				text: "Name",
				service: "SystemDictionary",
				value: "Value",
				defaultText: "--请选择--",
				lable: "公司性质1"
			},
			{
				service: "Company",
				defaultText: "--请选择--",
				text: "CompanyName",
				value: "CompanyId",
				lable: "公司编号"
			},
			{
				text: "Name",
				service: "SystemDictionary",
				value: "Value",
				defaultText: "--请选择--",
				lable: "纳税人规模1"
			},
			{
				text: "Name",
				service: "SystemDictionary",
				value: "Value",
				defaultText: "--请选择--",
				lable: "状态"
			},
			{
				service: "DownChannel",
				defaultText: "--请选择--",
				text: "DownChannelName",
				value: "No",
				lable: "下游渠道"
			},
			{
				service: "OutAgent",
				defaultText: "--请选择--",
				text: "OutAgentName",
				value: "Id",
				lable: "交易系统代理人编号"
			}
		],
		texts: [
			{
				lable: "代理人名称",
				name: "AgentName",
				textArea: false
			},
			{
				lable: "身份证/纳税识别号",
				name: "CertificateNo",
				textArea: false
			},
			{
				lable: "手机号码",
				name: "Mobile",
				textArea: false
			},
			{
				lable: "余额",
				name: "Balance",
				textArea: false
			},
			{
				lable: "0",
				name: "GroupAgent",
				textArea: false
			},
			{
				lable: "组合数量",
				name: "GroupCount",
				textArea: false
			}
		],
		required: []
	},
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
				lable: "代理人类型0"
			},
			{
				service: "Province",
				defaultText: "--请选择--",
				text: "ProvinceName",
				value: "No",
				lable: "省份"
			},
			{
				text: "Name",
				service: "SystemDictionary",
				value: "Value",
				defaultText: "--请选择--",
				lable: "公司性质1"
			},
			{
				service: "Company",
				defaultText: "--请选择--",
				text: "CompanyName",
				value: "CompanyId",
				lable: "公司编号"
			},
			{
				text: "Name",
				service: "SystemDictionary",
				value: "Value",
				defaultText: "--请选择--",
				lable: "纳税人规模1"
			},
			{
				text: "Name",
				service: "SystemDictionary",
				value: "Value",
				defaultText: "--请选择--",
				lable: "状态"
			},
			{
				service: "DownChannel",
				defaultText: "--请选择--",
				text: "DownChannelName",
				value: "No",
				lable: "下游渠道"
			}
		],
		texts: [
			{
				lable: "身份证/纳税识别号",
				name: "CertificateNo",
				textArea: false
			},
			{
				lable: "手机号码",
				name: "Mobile",
				textArea: false
			},
			{
				lable: "0",
				name: "GroupAgent",
				textArea: false
			}
		],
		getListSql: {
			columns: [
				"t.CERTIFICATE_NO",
				"t.GROUP_AGENT",
				"t.MOBILE",
				"t1.NAME AgentTypeName",
				"t2.NAME ProvinceNoName",
				"t3.NAME CompanyNatureName",
				"t4.NAME CompanyIdName",
				"t5.NAME TaxpayerSizeName",
				"t6.NAME StatusName",
				"t7.NAME DownChannelNoName"
			],
			joins: [
				"LEFT JOIN SYSTEM_DICTIONARY t1 ON t.AGENT_TYPE = t1.VALUE AND t1.TYPE = 'AGENTTYPE'",
				"LEFT JOIN PROVINCE t2 ON t.PROVINCE_NO = t2.No",
				"LEFT JOIN SYSTEM_DICTIONARY t3 ON t.COMPANY_NATURE = t3.VALUE AND t3.TYPE = 'COMPANYNATURE'",
				"LEFT JOIN COMPANY t4 ON t.COMPANY_ID = t4.Id",
				"LEFT JOIN SYSTEM_DICTIONARY t5 ON t.TAXPAYER_SIZE = t5.VALUE AND t5.TYPE = 'TAXPAYERSIZE'",
				"LEFT JOIN SYSTEM_DICTIONARY t6 ON t.STATUS = t6.VALUE AND t6.TYPE = 'STATUS'",
				"LEFT JOIN DOWN_CHANNEL t7 ON t.DOWN_CHANNEL_NO = t7.No"
			],
			conditions: [
				"1=1",
				"@&t.AgentType",
				"@&t.CertificateNo",
				"@&t.CompanyId",
				"@&t.CompanyNature",
				"@&t.DownChannelNo",
				"@&t.GroupAgent",
				"@&t.Mobile",
				"@&t.ProvinceNo",
				"@&t.Status",
				"@&t.TaxpayerSize",
				"{&@t.CreatedTime < to_date($ET,'YYYY-MM-DD')}",
				"{&@t.CreatedTime >= to_date($ST,'YYYY-MM-DD')}"
			],
			orderBy: "ORDER BY t.CREATED_TIME DESC"
		},
		getCountSql: {
			conditions: [
				"1=1",
				"@&t.AgentType",
				"@&t.CertificateNo",
				"@&t.CompanyId",
				"@&t.CompanyNature",
				"@&t.DownChannelNo",
				"@&t.GroupAgent",
				"@&t.Mobile",
				"@&t.ProvinceNo",
				"@&t.Status",
				"@&t.TaxpayerSize",
				"{&@t.CreatedTime < to_date($ET,'YYYY-MM-DD')}",
				"{&@t.CreatedTime >= to_date($ST,'YYYY-MM-DD')}"
			]
		}
	},
	tableConfig: {
		items: [
			{
				header: "代理人编号",
				content: "@item.GetDataValue(\"AgentIdName\")"
			},
			{
				header: "代理人名称",
				content: "@item.AgentName"
			},
			{
				header: "代理人类型0",
				content: "@item.GetDataValue(\"AgentTypeName\")"
			},
			{
				header: "身份证/纳税识别号",
				content: "@item.CertificateNo"
			},
			{
				header: "手机号码",
				content: "@item.Mobile"
			},
			{
				header: "省份",
				content: "@item.GetDataValue(\"ProvinceNoName\")"
			},
			{
				header: "公司性质1",
				content: "@item.GetDataValue(\"CompanyNatureName\")"
			},
			{
				header: "公司编号",
				content: "@item.GetDataValue(\"CompanyIdName\")"
			},
			{
				header: "纳税人规模1",
				content: "@item.GetDataValue(\"TaxpayerSizeName\")"
			},
			{
				header: "余额",
				content: "@item.Balance"
			},
			{
				header: "状态",
				content: "@item.GetDataValue(\"StatusName\")"
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
			},
			{
				header: "下游渠道",
				content: "@item.GetDataValue(\"DownChannelNoName\")"
			},
			{
				header: "交易系统代理人编号",
				content: "@item.GetDataValue(\"OutAgentIdName\")"
			},
			{
				header: "0",
				content: "@item.GroupAgent"
			},
			{
				header: "组合数量",
				content: "@item.GroupCount"
			}
		]
	}
};

