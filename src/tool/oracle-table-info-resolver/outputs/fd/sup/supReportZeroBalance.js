exports.supReportZeroBalance = {
	name: "supReportZeroBalance",
	rawName: "SUP_REPORT_ZERO_BALANCE",
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
		ZERO_DATE: {
			nullable: "N",
			isPk: false,
			description: "零点日期",
			name: "zeroDate",
			rawName: "ZERO_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CREATE_DATE: {
			nullable: "N",
			isPk: false,
			description: "收集时间",
			name: "createDate",
			rawName: "CREATE_DATE",
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
			description: "渠道类型",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		ON_WAY_COUNT: {
			nullable: "N",
			isPk: false,
			description: "在途张数",
			name: "onWayCount",
			rawName: "ON_WAY_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ON_WAY_FACE: {
			nullable: "N",
			isPk: false,
			description: "在途面值",
			name: "onWayFace",
			rawName: "ON_WAY_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ON_WAY_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "在途余额",
			name: "onWayBalance",
			rawName: "ON_WAY_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CARD_COUNT: {
			nullable: "N",
			isPk: false,
			description: "实体卡张数",
			name: "physicalCardCount",
			rawName: "PHYSICAL_CARD_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CARD_FACE: {
			nullable: "N",
			isPk: false,
			description: "实体卡面值",
			name: "physicalCardFace",
			rawName: "PHYSICAL_CARD_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PHYSICAL_CARD_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "实体卡余额",
			name: "physicalCardBalance",
			rawName: "PHYSICAL_CARD_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_CARD_COUNT: {
			nullable: "N",
			isPk: false,
			description: "电子卡密张数",
			name: "electronicCardCount",
			rawName: "ELECTRONIC_CARD_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_CARD_FACE: {
			nullable: "N",
			isPk: false,
			description: "电子卡密面值",
			name: "electronicCardFace",
			rawName: "ELECTRONIC_CARD_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ELECTRONIC_CARD_BALANCE: {
			nullable: "N",
			isPk: false,
			description: "电子卡密余额",
			name: "electronicCardBalance",
			rawName: "ELECTRONIC_CARD_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

