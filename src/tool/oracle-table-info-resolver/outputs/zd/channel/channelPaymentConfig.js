exports.channelPaymentConfig = {
	name: "channelPaymentConfig",
	rawName: "CHANNEL_PAYMENT_CONFIG",
	columns: {
		downChannelNo: {
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
		paymentType: {
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
		version: {
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

