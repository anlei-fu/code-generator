exports.fdB2eDownWhiteList = {
	name: "fdB2eDownWhiteList",
	rawName: "FD_B2E_DOWN_WHITE_LIST",
	columns: {
		id: {
			nullable: false,
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "number",
				length: 20
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		channelAccountId: {
			nullable: false,
			isPk: false,
			description: "渠道账户编号",
			name: "channelAccountId",
			rawName: "CHANNEL_ACCOUNT_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		bankHolderName: {
			nullable: false,
			isPk: false,
			description: "持卡人姓名",
			name: "bankHolderName",
			rawName: "BANK_HOLDER_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		downHolderCardNo: {
			nullable: false,
			isPk: false,
			description: "银行卡卡号",
			name: "downHolderCardNo",
			rawName: "DOWN_HOLDER_CARD_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		accountBankName: {
			nullable: false,
			isPk: false,
			description: "开户行名称",
			name: "accountBankName",
			rawName: "ACCOUNT_BANK_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		accountBankAddress: {
			nullable: false,
			isPk: false,
			description: "开户行地址",
			name: "accountBankAddress",
			rawName: "ACCOUNT_BANK_ADDRESS",
			type: {
				name: "varchar2",
				length: null
			}
		},
		createTime: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createTime",
			rawName: "CREATE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		auditStatus: {
			nullable: false,
			isPk: false,
			description: "审核状态",
			name: "auditStatus",
			rawName: "AUDIT_STATUS",
			type: {
				name: "number",
				length: 3
			}
		},
		auditTime: {
			nullable: false,
			isPk: false,
			description: "审核时间",
			name: "auditTime",
			rawName: "AUDIT_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		bankType: {
			nullable: false,
			isPk: false,
			description: "银行类型",
			name: "bankType",
			rawName: "BANK_TYPE",
			type: {
				name: "number",
				length: 10
			}
		}
	}
};

