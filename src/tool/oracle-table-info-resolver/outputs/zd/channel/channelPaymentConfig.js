exports.channelPaymentConfig = {
	name: "channelPaymentConfig",
	rawName: "CHANNEL_PAYMENT_CONFIG",
	columns: {
		DOWN_CHANNEL_NO: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		PAYMENT_TYPE: {
			nullable: false,
			isPk: false,
			description: "支付方式",
			name: "paymentType",
			rawName: "PAYMENT_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		STATUS: {
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
		VERSION: {
			nullable: false,
			isPk: false,
			description: "",
			name: "version",
			rawName: "VERSION",
			type: {
				name: "NUMBER",
				length: "1"
			}
		}
	},
	description: ""
};

