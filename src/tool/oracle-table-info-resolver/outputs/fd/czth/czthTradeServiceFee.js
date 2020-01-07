exports.czthTradeServiceFee = {
	name: "czthTradeServiceFee",
	rawName: "CZTH_TRADE_SERVICE_FEE",
	columns: {
		id: {
			nullable: false,
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		monthDate: {
			nullable: false,
			isPk: false,
			description: "月份时间",
			name: "monthDate",
			rawName: "MONTH_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		},
		serviceFee: {
			nullable: false,
			isPk: false,
			description: "手续费",
			name: "serviceFee",
			rawName: "SERVICE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

