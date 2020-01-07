exports.qyReportDaily = {
	name: "qyReportDaily",
	rawName: "QY_REPORT_DAILY",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		reportTime: {
			nullable: false,
			isPk: false,
			description: "报表时间",
			name: "reportTime",
			rawName: "REPORT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		upChannelNo: {
			nullable: false,
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		orderFace: {
			nullable: false,
			isPk: false,
			description: "成交面值(权益包价值)",
			name: "orderFace",
			rawName: "ORDER_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		orderAmount: {
			nullable: false,
			isPk: false,
			description: "代收金额(权益包销售额)",
			name: "orderAmount",
			rawName: "ORDER_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		extOrderNo: {
			nullable: false,
			isPk: false,
			description: "权益卡号",
			name: "extOrderNo",
			rawName: "EXT_ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		productName: {
			nullable: false,
			isPk: false,
			description: "权益包名称",
			name: "productName",
			rawName: "PRODUCT_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		downDrawFace: {
			nullable: false,
			isPk: false,
			description: "下游扣款没面值(领取权益)",
			name: "downDrawFace",
			rawName: "DOWN_DRAW_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		downDrawAmount: {
			nullable: false,
			isPk: false,
			description: "下游扣款金额(领取权益)",
			name: "downDrawAmount",
			rawName: "DOWN_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upDrawFace: {
			nullable: false,
			isPk: false,
			description: "上游扣款没面值(领取权益)",
			name: "upDrawFace",
			rawName: "UP_DRAW_FACE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		upDrawAmount: {
			nullable: false,
			isPk: false,
			description: "上游扣款金额(领取权益)",
			name: "upDrawAmount",
			rawName: "UP_DRAW_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		outPutTax: {
			nullable: false,
			isPk: false,
			description: "销项税",
			name: "outPutTax",
			rawName: "OUT_PUT_TAX",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		inPutTax: {
			nullable: false,
			isPk: false,
			description: "进项税",
			name: "inPutTax",
			rawName: "IN_PUT_TAX",
			type: {
				name: "NUMBER",
				length: "20"
			}
		}
	}
};

