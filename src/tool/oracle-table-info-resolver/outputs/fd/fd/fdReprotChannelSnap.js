exports.fdReprotChannelSnap = {
	name: "fdReprotChannelSnap",
	rawName: "FD_REPROT_CHANNEL_SNAP",
	columns: {
		SNAP_ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "snapId",
			rawName: "SNAP_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "渠道类型",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		BILL_TYPE: {
			nullable: "Y",
			isPk: false,
			description: "利润类:1-前向2-后向",
			name: "billType",
			rawName: "BILL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
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
		REAL_COST_FEE: {
			nullable: "N",
			isPk: false,
			description: "实际账户扣款",
			name: "realCostFee",
			rawName: "REAL_COST_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ORDER_COST_FEE: {
			nullable: "N",
			isPk: false,
			description: "下单扣款",
			name: "orderCostFee",
			rawName: "ORDER_COST_FEE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ADD_AMOUNT: {
			nullable: "N",
			isPk: false,
			description: "加款金额",
			name: "addAmount",
			rawName: "ADD_AMOUNT",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		BALANCE: {
			nullable: "N",
			isPk: false,
			description: "渠道余额",
			name: "balance",
			rawName: "BALANCE",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SNAP_DATE: {
			nullable: "N",
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

