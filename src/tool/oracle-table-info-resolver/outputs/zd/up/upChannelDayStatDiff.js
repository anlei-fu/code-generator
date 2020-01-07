exports.upChannelDayStatDiff = {
	name: "upChannelDayStatDiff",
	rawName: "UP_CHANNEL_DAY_STAT_DIFF",
	columns: {
		upChannelNo: {
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
		statId: {
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
		statisDay: {
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
		countTotal: {
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
		countSucc: {
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
		countFail: {
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
		countDealing: {
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
		faceTotal: {
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
		faceSucc: {
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
		faceFail: {
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
		faceDealing: {
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
		esCountTotal: {
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
		esCountSucc: {
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
		esCountFail: {
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
		esCountDealing: {
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
		esFaceTotal: {
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
		esFaceSucc: {
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
		esFaceFail: {
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
		esFaceDealing: {
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
		diffCountSucc: {
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
		diffFaceSucc: {
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
		createTime: {
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
		businessType: {
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
		downChannelNo: {
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

