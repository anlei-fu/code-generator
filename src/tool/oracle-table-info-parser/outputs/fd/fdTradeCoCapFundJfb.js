exports.fdTradeCoCapFundJfb = {
	name: "fdTradeCoCapFundJfb",
	rawName: "FD_TRADE_CO_CAP_FUND_JFB",
	columns: {
		changeId: {
			nullable: false,
			isPk: false,
			description: "变动编号，和fd_trade_co_cap_fund对应",
			name: "changeId",
			rawName: "CHANGE_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		tradeMonth: {
			nullable: false,
			isPk: false,
			description: "积分交易月份",
			name: "tradeMonth",
			rawName: "TRADE_MONTH",
			type: {
				name: "date",
				length: null
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "交易下游渠道",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		downAccountId: {
			nullable: false,
			isPk: false,
			description: "交易下游渠道账户",
			name: "downAccountId",
			rawName: "DOWN_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		settleStatus: {
			nullable: false,
			isPk: false,
			description: "开票结算状态 0.已结算，1等待结算，9无需结算",
			name: "settleStatus",
			rawName: "SETTLE_STATUS",
			type: {
				name: "number",
				length: 3
			}
		}
	}
};

