exports.upChannelStatDiffDetail = {
	name: "upChannelStatDiffDetail",
	rawName: "UP_CHANNEL_STAT_DIFF_DETAIL",
	columns: {
		statId: {
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
		orderNo: {
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
		channelNo: {
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
		diffType: {
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
		price: {
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
		realFee: {
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
		diffMsg: {
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
		createTime: {
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
		sysPrice: {
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
		sysRealFace: {
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
		orderTime: {
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
		payType: {
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
		statisDate: {
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

