exports.adviceAmountWorkEnd = {
	name: "adviceAmountWorkEnd",
	rawName: "ADVICE_AMOUNT_WORK_END",
	columns: {
		halfAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "halfAmount",
			rawName: "HALF_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		channelName: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		twoDiff: {
			nullable: true,
			isPk: false,
			description: "",
			name: "twoDiff",
			rawName: "TWO_DIFF",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		twoAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "twoAmount",
			rawName: "TWO_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		twelveDiff: {
			nullable: true,
			isPk: false,
			description: "",
			name: "twelveDiff",
			rawName: "TWELVE_DIFF",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		twelveAmount: {
			nullable: true,
			isPk: false,
			description: "",
			name: "twelveAmount",
			rawName: "TWELVE_AMOUNT",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		adviceTwelve: {
			nullable: true,
			isPk: false,
			description: "",
			name: "adviceTwelve",
			rawName: "ADVICE_TWELVE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		innerBalance: {
			nullable: false,
			isPk: false,
			description: "",
			name: "innerBalance",
			rawName: "INNER_BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		adviceTwo: {
			nullable: true,
			isPk: false,
			description: "",
			name: "adviceTwo",
			rawName: "ADVICE_TWO",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	}
};

