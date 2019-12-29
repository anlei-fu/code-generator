exports.supReportZeroBalance = {
	name: "supReportZeroBalance",
	rawName: "SUP_REPORT_ZERO_BALANCE",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		zeroDate: {
			nullable: false,
			isPk: false,
			description: "零点日期",
			name: "zeroDate",
			rawName: "ZERO_DATE",
			type: {
				name: "date",
				length: null
			}
		},
		createDate: {
			nullable: false,
			isPk: false,
			description: "收集时间",
			name: "createDate",
			rawName: "CREATE_DATE",
			type: {
				name: "date",
				length: null
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		systemId: {
			nullable: false,
			isPk: false,
			description: "系统编号",
			name: "systemId",
			rawName: "SYSTEM_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		channelType: {
			nullable: false,
			isPk: false,
			description: "渠道类型",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		onWayCount: {
			nullable: false,
			isPk: false,
			description: "在途张数",
			name: "onWayCount",
			rawName: "ON_WAY_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		onWayFace: {
			nullable: false,
			isPk: false,
			description: "在途面值",
			name: "onWayFace",
			rawName: "ON_WAY_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		onWayBalance: {
			nullable: false,
			isPk: false,
			description: "在途余额",
			name: "onWayBalance",
			rawName: "ON_WAY_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalCardCount: {
			nullable: false,
			isPk: false,
			description: "实体卡张数",
			name: "physicalCardCount",
			rawName: "PHYSICAL_CARD_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalCardFace: {
			nullable: false,
			isPk: false,
			description: "实体卡面值",
			name: "physicalCardFace",
			rawName: "PHYSICAL_CARD_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalCardBalance: {
			nullable: false,
			isPk: false,
			description: "实体卡余额",
			name: "physicalCardBalance",
			rawName: "PHYSICAL_CARD_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicCardCount: {
			nullable: false,
			isPk: false,
			description: "电子卡密张数",
			name: "electronicCardCount",
			rawName: "ELECTRONIC_CARD_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicCardFace: {
			nullable: false,
			isPk: false,
			description: "电子卡密面值",
			name: "electronicCardFace",
			rawName: "ELECTRONIC_CARD_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicCardBalance: {
			nullable: false,
			isPk: false,
			description: "电子卡密余额",
			name: "electronicCardBalance",
			rawName: "ELECTRONIC_CARD_BALANCE",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

