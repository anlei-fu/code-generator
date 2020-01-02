exports.upChannelStatDiffDetail = {
	name: "upChannelStatDiffDetail",
	rawName: "UP_CHANNEL_STAT_DIFF_DETAIL",
	columns: {
		STAT_ID: {
			nullable: false,
			isPk: false,
			description: "直接对账统计主键",
			name: "statId",
			rawName: "STAT_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ORDER_NO: {
			nullable: true,
			isPk: false,
			description: "订单号",
			name: "orderNo",
			rawName: "ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CHANNEL_NO: {
			nullable: true,
			isPk: false,
			description: "渠道",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DIFF_TYPE: {
			nullable: true,
			isPk: false,
			description: "差异类型 ",
			name: "diffType",
			rawName: "DIFF_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		PRICE: {
			nullable: true,
			isPk: false,
			description: "18订单金额",
			name: "price",
			rawName: "PRICE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		REAL_FEE: {
			nullable: true,
			isPk: false,
			description: "18实际金额",
			name: "realFee",
			rawName: "REAL_FEE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DIFF_MSG: {
			nullable: true,
			isPk: false,
			description: "差异信息",
			name: "diffMsg",
			rawName: "DIFF_MSG",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CREATE_TIME: {
			nullable: true,
			isPk: false,
			description: "生成时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		SYS_PRICE: {
			nullable: true,
			isPk: false,
			description: "收银台金额",
			name: "sysPrice",
			rawName: "SYS_PRICE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		SYS_REAL_FACE: {
			nullable: true,
			isPk: false,
			description: "收银台实际金额",
			name: "sysRealFace",
			rawName: "SYS_REAL_FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		ORDER_TIME: {
			nullable: true,
			isPk: false,
			description: "订单时间",
			name: "orderTime",
			rawName: "ORDER_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		PAY_TYPE: {
			nullable: true,
			isPk: false,
			description: "支付类型",
			name: "payType",
			rawName: "PAY_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		STATIS_DATE: {
			nullable: true,
			isPk: false,
			description: "统计日期",
			name: "statisDate",
			rawName: "STATIS_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		}
	},
	description: "18对账差异明细"
};

