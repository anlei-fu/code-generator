exports.fdTradeDifferSummary = {
	name: "fdTradeDifferSummary",
	rawName: "FD_TRADE_DIFFER_SUMMARY",
	columns: {
		ADJUST_ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "adjustId",
			rawName: "ADJUST_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECORD_DATE: {
			nullable: "N",
			isPk: false,
			description: "记录时间",
			name: "recordDate",
			rawName: "RECORD_DATE",
			type: {
				name: "DATE",
				length: ""
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
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "下游渠道编号",
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
			description: "下游支付账户编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BUSINESS_TYPE: {
			nullable: "N",
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		DOWN_FIRST_FACE: {
			nullable: "N",
			isPk: false,
			description: "下游与上游扣款的时间差造成的差异面值(上下游扣款有时间差异时造成，下扣、下退、上扣、上退)",
			name: "downFirstFace",
			rawName: "DOWN_FIRST_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_FIRST_AMOUNT: {
			nullable: "N",
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

