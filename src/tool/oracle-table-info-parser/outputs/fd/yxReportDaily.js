exports.yxReportDaily = {
	name: "yxReportDaily",
	rawName: "YX_REPORT_DAILY",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		reportTime: {
			nullable: false,
			isPk: false,
			description: "报表时间",
			name: "reportTime",
			rawName: "REPORT_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		upChannelNo: {
			nullable: false,
			isPk: false,
			description: "上游渠道编号（商家）",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号（营销渠道）",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		agentId: {
			nullable: false,
			isPk: false,
			description: "代理人编号",
			name: "agentId",
			rawName: "AGENT_ID",
			type: {
				name: "varchar2",
				length: null
			}
		},
		upDrawFace: {
			nullable: false,
			isPk: false,
			description: "上游扣款面值",
			name: "upDrawFace",
			rawName: "UP_DRAW_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		upDrawAmount: {
			nullable: false,
			isPk: false,
			description: "上游扣款金额",
			name: "upDrawAmount",
			rawName: "UP_DRAW_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		orderCount: {
			nullable: false,
			isPk: false,
			description: "订单数量",
			name: "orderCount",
			rawName: "ORDER_COUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		servieFee: {
			nullable: false,
			isPk: false,
			description: "应结算商家服务费",
			name: "servieFee",
			rawName: "SERVIE_FEE",
			type: {
				name: "number",
				length: 20
			}
		},
		agencyFee: {
			nullable: false,
			isPk: false,
			description: "代理人酬金（代理费）",
			name: "agencyFee",
			rawName: "AGENCY_FEE",
			type: {
				name: "number",
				length: 20
			}
		},
		handlingFee: {
			nullable: false,
			isPk: false,
			description: "三方平台手续费",
			name: "handlingFee",
			rawName: "HANDLING_FEE",
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
		downDrawFace: {
			nullable: false,
			isPk: false,
			description: "下游扣款面值",
			name: "downDrawFace",
			rawName: "DOWN_DRAW_FACE",
			type: {
				name: "number",
				length: 20
			}
		},
		downDrawAmount: {
			nullable: false,
			isPk: false,
			description: "下游扣款金额",
			name: "downDrawAmount",
			rawName: "DOWN_DRAW_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		incomeAmount: {
			nullable: false,
			isPk: false,
			description: "收益金额",
			name: "incomeAmount",
			rawName: "INCOME_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		downRealAmount: {
			nullable: false,
			isPk: false,
			description: "下游实际金额",
			name: "downRealAmount",
			rawName: "DOWN_REAL_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		upRealAmount: {
			nullable: false,
			isPk: false,
			description: "上游实际金额",
			name: "upRealAmount",
			rawName: "UP_REAL_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		downCouponAmount: {
			nullable: false,
			isPk: false,
			description: "优惠券金额",
			name: "downCouponAmount",
			rawName: "DOWN_COUPON_AMOUNT",
			type: {
				name: "number",
				length: 20
			}
		},
		issue: {
			nullable: false,
			isPk: false,
			description: "发行扣款标志：0：普通扣款，1：发行扣款",
			name: "issue",
			rawName: "ISSUE",
			type: {
				name: "number",
				length: 3
			}
		}
	}
};

