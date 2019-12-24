let test = {
	delete: true,
	add: true,
	addConfig: {
		selects: [],
		texts: [
			{
				name: "agentId",
				lable: "代理人编号"
			},
			{
				name: "agentName",
				lable: "代理人名称"
			},
			{
				name: "agentType",
				lable: "代理人类型:个人代理人,:企业代理人"
			},
			{
				name: "certificateNo",
				lable: "身份证/纳税识别号"
			},
			{
				name: "mobile",
				lable: "手机号码"
			},
			{
				name: "provinceNo",
				lable: "省份"
			},
			{
				name: "companyNature",
				lable: "公司性质:有限责任公司,:股份有限公司,:个体商户,:合伙企业"
			},
			{
				name: "companyId",
				lable: "公司编号"
			},
			{
				name: "taxpayerSize",
				lable: "纳税人规模:一般纳税人,2小规模纳税人"
			},
			{
				name: "balance",
				lable: "余额"
			},
			{
				name: "status",
				lable: "状态"
			},
			{
				name: "createdUser",
				lable: "创建人"
			},
			{
				name: "createdTime",
				lable: "创建时间"
			},
			{
				name: "downChannelNo",
				lable: "下游渠道"
			},
			{
				name: "outAgentId",
				lable: "交易系统代理人编号"
			},
			{
				name: "groupAgent",
				lable: ":是组合代理人，1：普通代理人"
			},
			{
				name: "groupCount",
				lable: "组合数量"
			}
		],
		required: []
	},
	selectConfig: {
		selects: [],
		texts: [
			{
				name: "agentId",
				lable: "代理人编号"
			},
			{
				name: "agentType",
				lable: "代理人类型:个人代理人,:企业代理人"
			},
			{
				name: "certificateNo",
				lable: "身份证/纳税识别号"
			},
			{
				name: "provinceNo",
				lable: "省份"
			},
			{
				name: "companyNature",
				lable: "公司性质:有限责任公司,:股份有限公司,:个体商户,:合伙企业"
			},
			{
				name: "companyId",
				lable: "公司编号"
			},
			{
				name: "taxpayerSize",
				lable: "纳税人规模:一般纳税人,2小规模纳税人"
			},
			{
				name: "balance",
				lable: "余额"
			},
			{
				name: "status",
				lable: "状态"
			},
			{
				name: "downChannelNo",
				lable: "下游渠道"
			},
			{
				name: "outAgentId",
				lable: "交易系统代理人编号"
			},
			{
				name: "groupAgent",
				lable: ":是组合代理人，1：普通代理人"
			},
			{
				name: "groupCount",
				lable: "组合数量"
			}
		]
	},
	tableConfig: {
		items: [
			{
				hearder: "代理人编号",
				content: "@item.agentId"
			},
			{
				hearder: "代理人名称",
				content: "@item.agentName"
			},
			{
				hearder: "代理人类型:个人代理人,:企业代理人",
				content: "@item.agentType"
			},
			{
				hearder: "身份证/纳税识别号",
				content: "@item.certificateNo"
			},
			{
				hearder: "手机号码",
				content: "@item.mobile"
			},
			{
				hearder: "省份",
				content: "@item.provinceNo"
			},
			{
				hearder: "公司性质:有限责任公司,:股份有限公司,:个体商户,:合伙企业",
				content: "@item.companyNature"
			},
			{
				hearder: "公司编号",
				content: "@item.companyId"
			},
			{
				hearder: "纳税人规模:一般纳税人,2小规模纳税人",
				content: "@item.taxpayerSize"
			},
			{
				hearder: "余额",
				content: "@item.balance"
			},
			{
				hearder: "状态",
				content: "@item.status"
			},
			{
				hearder: "创建人",
				content: "@item.createdUser"
			},
			{
				hearder: "创建时间",
				content: "@item.createdTime"
			},
			{
				hearder: "最后更新人",
				content: "@item.lastEditUser"
			},
			{
				hearder: "最后更新时间",
				content: "@item.lastEditTime"
			},
			{
				hearder: "下游渠道",
				content: "@item.downChannelNo"
			},
			{
				hearder: "交易系统代理人编号",
				content: "@item.outAgentId"
			},
			{
				hearder: ":是组合代理人，1：普通代理人",
				content: "@item.groupAgent"
			},
			{
				hearder: "组合数量",
				content: "@item.groupCount"
			}
		]
	}
};

