exports.yxTradeAgencyAssigned = {
	name: "yxTradeAgencyAssigned",
	rawName: "YX_TRADE_AGENCY_ASSIGNED",
	columns: {
		recordId: {
			nullable: false,
			isPk: false,
			description: "编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		yxOrderId: {
			nullable: false,
			isPk: false,
			description: "记账系统订单号",
			name: "yxOrderId",
			rawName: "YX_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		agentId: {
			nullable: false,
			isPk: false,
			description: "单代理人编号",
			name: "agentId",
			rawName: "AGENT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		orderSource: {
			nullable: false,
			isPk: false,
			description: "订单来源（系统编号）",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		agentFee: {
			nullable: false,
			isPk: false,
			description: "单代理人代理费",
			name: "agentFee",
			rawName: "AGENT_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		changeType: {
			nullable: false,
			isPk: false,
			description: "2：扣款，3：退款",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		changeTime: {
			nullable: false,
			isPk: false,
			description: "变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		settleStatus: {
			nullable: false,
			isPk: false,
			description: "结算状态",
			name: "settleStatus",
			rawName: "SETTLE_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
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

