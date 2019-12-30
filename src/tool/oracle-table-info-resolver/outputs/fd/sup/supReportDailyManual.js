exports.supReportDailyManual = {
	name: "supReportDailyManual",
	rawName: "SUP_REPORT_DAILY_MANUAL",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REPORT_DATE: {
			nullable: "N",
			isPk: false,
			description: "数据日期",
			name: "reportDate",
			rawName: "REPORT_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SYSTEM_ID: {
			nullable: "N",
			isPk: false,
			description: "系统编号",
			name: "systemId",
			rawName: "SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "渠道类型,1：上游渠道，2：下游渠道",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		WAY_CHANGE_COUNT: {
			nullable: "N",
			isPk: false,
			description: "在途张数增加数",
			name: "wayChangeCount",
			rawName: "WAY_CHANGE_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WAY_CHANGE_FACE: {
			nullable: "N",
			isPk: false,
			description: "在途面值增加数",
			name: "wayChangeFace",
			rawName: "WAY_CHANGE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WAY_CHANGE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "在途金额增加数",
			name: "wayChangeAmount",
			rawName: "WAY_CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CHANGE_COUNT: {
			nullable: "N",
			isPk: false,
			description: "实体卡张数增加数",
			name: "physicalChangeCount",
			rawName: "PHYSICAL_CHANGE_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CHANGE_FACE: {
			nullable: "N",
			isPk: false,
			description: "实体卡面值增加数",
			name: "physicalChangeFace",
			rawName: "PHYSICAL_CHANGE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CHANGE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "实体卡金额增加数",
			name: "physicalChangeAmount",
			rawName: "PHYSICAL_CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_CHANGE_COUNT: {
			nullable: "N",
			isPk: false,
			description: "电子卡张数增加数",
			name: "electronicChangeCount",
			rawName: "ELECTRONIC_CHANGE_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_CHANGE_FACE: {
			nullable: "N",
			isPk: false,
			description: "电子卡面值增加数",
			name: "electronicChangeFace",
			rawName: "ELECTRONIC_CHANGE_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_CHANGE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "电子卡金额增加数",
			name: "electronicChangeAmount",
			rawName: "ELECTRONIC_CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

