exports.fdReprotChannelSnap = {
	name: "fdReprotChannelSnap",
	rawName: "FD_REPROT_CHANNEL_SNAP",
	columns: {
		snapId: {
			nullable: false,
			isPk: false,
			description: "主键",
			name: "snapId",
			rawName: "SNAP_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		channelType: {
			nullable: false,
			isPk: false,
			description: "渠道类型",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		billType: {
			nullable: true,
			isPk: false,
			description: "利润类:1-前向2-后向",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		realCostFee: {
			nullable: false,
			isPk: false,
			description: "实际账户扣款",
			name: "realCostFee",
			rawName: "REAL_COST_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		orderCostFee: {
			nullable: false,
			isPk: false,
			description: "下单扣款",
			name: "orderCostFee",
			rawName: "ORDER_COST_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		addAmount: {
			nullable: false,
			isPk: false,
			description: "加款金额",
			name: "addAmount",
			rawName: "ADD_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		balance: {
			nullable: false,
			isPk: false,
			description: "渠道余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		snapDate: {
			nullable: false,
			isPk: false,
			description: "快照日期",
			name: "snapDate",
			rawName: "SNAP_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

