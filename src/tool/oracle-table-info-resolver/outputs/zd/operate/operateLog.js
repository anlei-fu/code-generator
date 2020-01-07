exports.operateLog = {
	name: "operateLog",
	rawName: "OPERATE_LOG",
	columns: {
		logId: {
			nullable: false,
			isPk: true,
			description: "编号",
			name: "logId",
			rawName: "LOG_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		orderNo: {
			nullable: false,
			isPk: false,
			description: "订单号",
			name: "orderNo",
			rawName: "ORDER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		content: {
			nullable: false,
			isPk: false,
			description: "备注",
			name: "content",
			rawName: "CONTENT",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		operator: {
			nullable: false,
			isPk: false,
			description: "操作人",
			name: "operator",
			rawName: "OPERATOR",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	},
	description: "操作日志"
};
