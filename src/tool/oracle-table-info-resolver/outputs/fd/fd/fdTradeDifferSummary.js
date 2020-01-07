exports.fdTradeDifferSummary = {
	name: "fdTradeDifferSummary",
	rawName: "FD_TRADE_DIFFER_SUMMARY",
	columns: {
		adjustId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "adjustId",
			rawName: "ADJUST_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		recordDate: {
			nullable: false,
			isPk: false,
			description: "记录时间",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		accountId: {
			nullable: false,
			isPk: false,
			description: "下游支付账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		downFirstFace: {
			nullable: false,
			isPk: false,
			description: "下游与上游扣款的时间差造成的差异面值(上下游扣款有时间差异时造成，下扣、下退、上扣、上退)",
			name: "downFirstFace",
			rawName: "DOWN_FIRST_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downFirstAmount: {
			nullable: false,
			isPk: false,
			description: "下游与上游扣款的时间差造成的差异金额",
			name: "downFirstAmount",
			rawName: "DOWN_FIRST_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

