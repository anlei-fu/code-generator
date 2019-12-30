exports.yxReportDaily = {
	name: "yxReportDaily",
	rawName: "YX_REPORT_DAILY",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		REPORT_TIME: {
			nullable: "N",
			isPk: false,
			description: "报表时间",
			name: "reportTime",
			rawName: "REPORT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		UP_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "上游渠道编号（商家）",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DOWN_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "下游渠道编号（营销渠道）",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		AGENT_ID: {
			nullable: "N",
			isPk: false,
			description: "代理人编号",
			name: "agentId",
			rawName: "AGENT_ID",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UP_DRAW_FACE: {
			nullable: "N",
			isPk: false,
			description: "上游扣款面值",
			name: "upDrawFace",
			rawName: "UP_DRAW_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_DRAW_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "上游扣款金额",
			name: "upDrawAmount",
			rawName: "UP_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ORDER_COUNT: {
			nullable: "N",
			isPk: false,
			description: "订单数量",
			name: "orderCount",
			rawName: "ORDER_COUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SERVIE_FEE: {
			nullable: "N",
			isPk: false,
			description: "应结算商家服务费",
			name: "servieFee",
			rawName: "SERVIE_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		AGENCY_FEE: {
			nullable: "N",
			isPk: false,
			description: "代理人酬金（代理费）",
			name: "agencyFee",
			rawName: "AGENCY_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		HANDLING_FEE: {
			nullable: "N",
			isPk: false,
			description: "三方平台手续费",
			name: "handlingFee",
			rawName: "HANDLING_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BUSINESS_TYPE: {
			nullable: "N",
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		DOWN_DRAW_FACE: {
			nullable: "N",
			isPk: false,
			description: "下游扣款面值",
			name: "downDrawFace",
			rawName: "DOWN_DRAW_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_DRAW_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "下游扣款金额",
			name: "downDrawAmount",
			rawName: "DOWN_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		INCOME_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "收益金额",
			name: "incomeAmount",
			rawName: "INCOME_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_REAL_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "下游实际金额",
			name: "downRealAmount",
			rawName: "DOWN_REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_REAL_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "上游实际金额",
			name: "upRealAmount",
			rawName: "UP_REAL_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_COUPON_AMOUNT: {
			nullable: "Y",
			isPk: false,
			description: "优惠券金额",
			name: "downCouponAmount",
			rawName: "DOWN_COUPON_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ISSUE: {
			nullable: "Y",
			isPk: false,
			description: "发行扣款标志：0：普通扣款，1：发行扣款",
			name: "issue",
			rawName: "ISSUE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		}
	}
};

