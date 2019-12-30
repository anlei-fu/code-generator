exports.yxTradeAgencyAssigned = {
	name: "yxTradeAgencyAssigned",
	rawName: "YX_TRADE_AGENCY_ASSIGNED",
	columns: {
		RECORD_ID: {
			nullable: "N",
			isPk: false,
			description: "编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		YX_ORDER_ID: {
			nullable: "N",
			isPk: false,
			description: "记账系统订单号",
			name: "yxOrderId",
			rawName: "YX_ORDER_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		AGENT_ID: {
			nullable: "N",
			isPk: false,
			description: "单代理人编号",
			name: "agentId",
			rawName: "AGENT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ORDER_SOURCE: {
			nullable: "N",
			isPk: false,
			description: "订单来源（系统编号）",
			name: "orderSource",
			rawName: "ORDER_SOURCE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		AGENT_FEE: {
			nullable: "N",
			isPk: false,
			description: "单代理人代理费",
			name: "agentFee",
			rawName: "AGENT_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANGE_TYPE: {
			nullable: "N",
			isPk: false,
			description: "2：扣款，3：退款",
			name: "changeType",
			rawName: "CHANGE_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		CHANGE_TIME: {
			nullable: "N",
			isPk: false,
			description: "变动时间",
			name: "changeTime",
			rawName: "CHANGE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		SETTLE_STATUS: {
			nullable: "N",
			isPk: false,
			description: "结算状态",
			name: "settleStatus",
			rawName: "SETTLE_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		MEMO: {
			nullable: "N",
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

