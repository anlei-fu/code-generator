exports.fdB2eUpWhiteList = {
	name: "fdB2eUpWhiteList",
	rawName: "FD_B2E_UP_WHITE_LIST",
	columns: {
		id: {
			nullable: false,
			isPk: true,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		channelNo: {
			nullable: false,
			isPk: false,
			description: "上游渠道",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		channelAccountId: {
			nullable: false,
			isPk: false,
			description: "渠道账户编号",
			name: "channelAccountId",
			rawName: "CHANNEL_ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		bankHolderName: {
			nullable: false,
			isPk: false,
			description: "持卡人姓名",
			name: "bankHolderName",
			rawName: "BANK_HOLDER_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		holderCardNo: {
			nullable: false,
			isPk: false,
			description: "银行账户(卡号)",
			name: "holderCardNo",
			rawName: "HOLDER_CARD_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		mainBankCode: {
			nullable: false,
			isPk: false,
			description: "开户行主行行号（网银互联用）",
			name: "mainBankCode",
			rawName: "MAIN_BANK_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		branchBankCode: {
			nullable: false,
			isPk: false,
			description: "开户行支行行号（大小额用）",
			name: "branchBankCode",
			rawName: "BRANCH_BANK_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		bankType: {
			nullable: false,
			isPk: false,
			description: "银行类型(民生银行，中信银行)",
			name: "bankType",
			rawName: "BANK_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		rcvCardType: {
			nullable: false,
			isPk: false,
			description: "收款账户类型：:对公；:对私",
			name: "rcvCardType",
			rawName: "RCV_CARD_TYPE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		accountBankName: {
			nullable: false,
			isPk: false,
			description: "开户行名称(xxxx支行)",
			name: "accountBankName",
			rawName: "ACCOUNT_BANK_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		provinceNo: {
			nullable: false,
			isPk: false,
			description: "账户省份编号",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		cityNo: {
			nullable: false,
			isPk: false,
			description: "城市编号",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		areaCode: {
			nullable: true,
			isPk: false,
			description: "收款行地区编号(?)",
			name: "areaCode",
			rawName: "AREA_CODE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		auditStatus: {
			nullable: true,
			isPk: false,
			description: "审核状态",
			name: "auditStatus",
			rawName: "AUDIT_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		auditTime: {
			nullable: true,
			isPk: false,
			description: "审核时间",
			name: "auditTime",
			rawName: "AUDIT_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		sortId: {
			nullable: false,
			isPk: false,
			description: "白名单优先等级，越大越优先",
			name: "sortId",
			rawName: "SORT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		companyBank: {
			nullable: true,
			isPk: false,
			description: "白名单支持的银行（建行/中信/民生）",
			name: "companyBank",
			rawName: "COMPANY_BANK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

