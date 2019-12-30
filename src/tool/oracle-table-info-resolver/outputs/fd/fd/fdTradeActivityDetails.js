exports.fdTradeActivityDetails = {
	name: "fdTradeActivityDetails",
	rawName: "FD_TRADE_ACTIVITY_DETAILS",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ACTIVITY_ID: {
			nullable: "N",
			isPk: false,
			description: "活动编号",
			name: "activityId",
			rawName: "ACTIVITY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TRADE_RECORD_NO: {
			nullable: "N",
			isPk: false,
			description: "交易系统记录编号",
			name: "tradeRecordNo",
			rawName: "TRADE_RECORD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BUSINESS_TYPE: {
			nullable: "N",
			isPk: false,
			description: "记账系统业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BILL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "交易类型，1前向，2后向",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "活动变动类型，1预付款，2增加后返利润，3减少后返利润",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		CHANGE_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "变动金额",
			name: "changeAmount",
			rawName: "CHANGE_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_TIME: {
			nullable: "N",
			isPk: false,
			description: "变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		CHANGE_USER: {
			nullable: "N",
			isPk: false,
			description: "变动人",
			name: "changeUser",
			rawName: "CHANGE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		MEMO: {
			nullable: "Y",
			isPk: false,
			description: "备注信息",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

