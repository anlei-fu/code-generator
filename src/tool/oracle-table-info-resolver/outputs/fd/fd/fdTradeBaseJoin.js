exports.fdTradeBaseJoin = {
	name: "fdTradeBaseJoin",
	rawName: "FD_TRADE_BASE_JOIN",
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
		JOIN_CODE1: {
			nullable: "N",
			isPk: false,
			description: "关联字段1",
			name: "joinCode1",
			rawName: "JOIN_CODE1",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		JOIN_CODE2: {
			nullable: "N",
			isPk: false,
			description: "关联字段2",
			name: "joinCode2",
			rawName: "JOIN_CODE2",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		JOIN_MEMO: {
			nullable: "Y",
			isPk: false,
			description: "关联备注信息",
			name: "joinMemo",
			rawName: "JOIN_MEMO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		JOIN_TYPE: {
			nullable: "N",
			isPk: false,
			description: "关联类型 1.上游佣金关联，2下游佣金关联",
			name: "joinType",
			rawName: "JOIN_TYPE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

