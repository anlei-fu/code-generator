exports.fdB2eUpForecast = {
	name: "fdB2eUpForecast",
	rawName: "FD_B2E_UP_FORECAST",
	columns: {
		startTime: {
			nullable: false,
			isPk: false,
			description: "预测开始时间",
			name: "startTime",
			rawName: "START_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		endTime: {
			nullable: false,
			isPk: false,
			description: "预测结束时间",
			name: "endTime",
			rawName: "END_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		upChannelNo: {
			nullable: false,
			isPk: false,
			description: "上游渠道",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		forecastAmount: {
			nullable: false,
			isPk: false,
			description: "预测交易量",
			name: "forecastAmount",
			rawName: "FORECAST_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		realAmount: {
			nullable: false,
			isPk: false,
			description: "实际交易量",
			name: "realAmount",
			rawName: "REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		memo: {
			nullable: false,
			isPk: false,
			description: "备注",
			name: "memo",
			rawName: "MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

