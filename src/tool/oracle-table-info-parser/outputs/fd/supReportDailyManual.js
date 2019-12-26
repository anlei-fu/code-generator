exports.supReportDailyManual = {
	name: "supReportDailyManual",
	rawName: "SUP_REPORT_DAILY_MANUAL",
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
		reportDate: {
			nullable: false,
			isPk: false,
			description: "数据日期",
			name: "reportDate",
			rawName: "REPORT_DATE",
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
		wayChangeCount: {
			nullable: false,
			isPk: false,
			description: "在途张数增加数",
			name: "wayChangeCount",
			rawName: "WAY_CHANGE_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		wayChangeFace: {
			nullable: false,
			isPk: false,
			description: "在途面值增加数",
			name: "wayChangeFace",
			rawName: "WAY_CHANGE_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		wayChangeAmount: {
			nullable: false,
			isPk: false,
			description: "在途金额增加数",
			name: "wayChangeAmount",
			rawName: "WAY_CHANGE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalChangeCount: {
			nullable: false,
			isPk: false,
			description: "实体卡张数增加数",
			name: "physicalChangeCount",
			rawName: "PHYSICAL_CHANGE_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalChangeFace: {
			nullable: false,
			isPk: false,
			description: "实体卡面值增加数",
			name: "physicalChangeFace",
			rawName: "PHYSICAL_CHANGE_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		physicalChangeAmount: {
			nullable: false,
			isPk: false,
			description: "实体卡金额增加数",
			name: "physicalChangeAmount",
			rawName: "PHYSICAL_CHANGE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicChangeCount: {
			nullable: false,
			isPk: false,
			description: "电子卡张数增加数",
			name: "electronicChangeCount",
			rawName: "ELECTRONIC_CHANGE_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicChangeFace: {
			nullable: false,
			isPk: false,
			description: "电子卡面值增加数",
			name: "electronicChangeFace",
			rawName: "ELECTRONIC_CHANGE_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		electronicChangeAmount: {
			nullable: false,
			isPk: false,
			description: "电子卡金额增加数",
			name: "electronicChangeAmount",
			rawName: "ELECTRONIC_CHANGE_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		}
	}
};

