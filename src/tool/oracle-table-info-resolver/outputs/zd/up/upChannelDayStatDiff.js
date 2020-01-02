exports.upChannelDayStatDiff = {
	name: "upChannelDayStatDiff",
	rawName: "UP_CHANNEL_DAY_STAT_DIFF",
	columns: {
		UP_CHANNEL_NO: {
			nullable: true,
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		STAT_ID: {
			nullable: true,
			isPk: false,
			description: "统计编号",
			name: "statId",
			rawName: "STAT_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		STATIS_DAY: {
			nullable: true,
			isPk: false,
			description: "统计日期",
			name: "statisDay",
			rawName: "STATIS_DAY",
			type: {
				name: "DATE",
				length: ""
			}
		},
		COUNT_TOTAL: {
			nullable: true,
			isPk: false,
			description: "总笔数",
			name: "countTotal",
			rawName: "COUNT_TOTAL",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		COUNT_SUCC: {
			nullable: true,
			isPk: false,
			description: "成功笔数",
			name: "countSucc",
			rawName: "COUNT_SUCC",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		COUNT_FAIL: {
			nullable: true,
			isPk: false,
			description: "失败笔数",
			name: "countFail",
			rawName: "COUNT_FAIL",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		COUNT_DEALING: {
			nullable: true,
			isPk: false,
			description: "处理中笔数",
			name: "countDealing",
			rawName: "COUNT_DEALING",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		FACE_TOTAL: {
			nullable: true,
			isPk: false,
			description: "总面值",
			name: "faceTotal",
			rawName: "FACE_TOTAL",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		FACE_SUCC: {
			nullable: true,
			isPk: false,
			description: "成功面值",
			name: "faceSucc",
			rawName: "FACE_SUCC",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		FACE_FAIL: {
			nullable: true,
			isPk: false,
			description: "失败面值",
			name: "faceFail",
			rawName: "FACE_FAIL",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		FACE_DEALING: {
			nullable: true,
			isPk: false,
			description: "处理中面值",
			name: "faceDealing",
			rawName: "FACE_DEALING",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ES_COUNT_TOTAL: {
			nullable: true,
			isPk: false,
			description: "18总笔数",
			name: "esCountTotal",
			rawName: "ES_COUNT_TOTAL",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ES_COUNT_SUCC: {
			nullable: true,
			isPk: false,
			description: "18成功笔数",
			name: "esCountSucc",
			rawName: "ES_COUNT_SUCC",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ES_COUNT_FAIL: {
			nullable: true,
			isPk: false,
			description: "18失败笔数",
			name: "esCountFail",
			rawName: "ES_COUNT_FAIL",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ES_COUNT_DEALING: {
			nullable: true,
			isPk: false,
			description: "18处理中笔数",
			name: "esCountDealing",
			rawName: "ES_COUNT_DEALING",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ES_FACE_TOTAL: {
			nullable: true,
			isPk: false,
			description: "18总面值",
			name: "esFaceTotal",
			rawName: "ES_FACE_TOTAL",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ES_FACE_SUCC: {
			nullable: true,
			isPk: false,
			description: "18成功面值",
			name: "esFaceSucc",
			rawName: "ES_FACE_SUCC",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ES_FACE_FAIL: {
			nullable: true,
			isPk: false,
			description: "18失败面值",
			name: "esFaceFail",
			rawName: "ES_FACE_FAIL",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ES_FACE_DEALING: {
			nullable: true,
			isPk: false,
			description: "18处理中面值",
			name: "esFaceDealing",
			rawName: "ES_FACE_DEALING",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DIFF_COUNT_SUCC: {
			nullable: true,
			isPk: false,
			description: "差异成功笔数",
			name: "diffCountSucc",
			rawName: "DIFF_COUNT_SUCC",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DIFF_FACE_SUCC: {
			nullable: true,
			isPk: false,
			description: "差异成功面值",
			name: "diffFaceSucc",
			rawName: "DIFF_FACE_SUCC",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CREATE_TIME: {
			nullable: true,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		BUSINESS_TYPE: {
			nullable: true,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DOWN_CHANNEL_NO: {
			nullable: true,
			isPk: false,
			description: "下游渠道",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "上游每日交易差异统计"
};

