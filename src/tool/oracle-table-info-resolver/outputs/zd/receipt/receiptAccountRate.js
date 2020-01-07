exports.receiptAccountRate = {
	name: "receiptAccountRate",
	rawName: "RECEIPT_ACCOUNT_RATE",
	columns: {
		recordId: {
			nullable: false,
			isPk: true,
			description: "记录编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		accountType: {
			nullable: false,
			isPk: false,
			description: "帐户类: :支付宝 :微信 :优惠券 11-京东",
			name: "accountType",
			rawName: "ACCOUNT_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		subType: {
			nullable: true,
			isPk: false,
			description: "子类型(京: 01-借记卡 02-信用卡 1-白条 2-余额 5-小金库 8-白条分期)",
			name: "subType",
			rawName: "SUB_TYPE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		serviceRate: {
			nullable: false,
			isPk: false,
			description: "手续费率",
			name: "serviceRate",
			rawName: "SERVICE_RATE",
			type: {
				name: "NUMBER",
				length: "15"
			}
		},
		payName: {
			nullable: false,
			isPk: false,
			description: "支付名称",
			name: "payName",
			rawName: "PAY_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: "状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		truncType: {
			nullable: true,
			isPk: false,
			description: "小数位保留方:1-trunc,2-round",
			name: "truncType",
			rawName: "TRUNC_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	},
	description: "收款帐户手续费率"
};

