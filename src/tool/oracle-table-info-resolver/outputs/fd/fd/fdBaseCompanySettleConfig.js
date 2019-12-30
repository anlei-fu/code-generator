exports.fdBaseCompanySettleConfig = {
	name: "fdBaseCompanySettleConfig",
	rawName: "FD_BASE_COMPANY_SETTLE_CONFIG",
	columns: {
		CONFIG_ID: {
			nullable: "N",
			isPk: true,
			description: "配置编号",
			name: "configId",
			rawName: "CONFIG_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		OWE_COMPANY: {
			nullable: "N",
			isPk: false,
			description: "欠款公司",
			name: "oweCompany",
			rawName: "OWE_COMPANY",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		RECV_COMPANY: {
			nullable: "N",
			isPk: false,
			description: "收款公司",
			name: "recvCompany",
			rawName: "RECV_COMPANY",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		UP_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		DOWN_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
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
		CARRIER_NO: {
			nullable: "N",
			isPk: false,
			description: "运营商",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROVINCE_NO: {
			nullable: "N",
			isPk: false,
			description: "省份",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CITY_NO: {
			nullable: "N",
			isPk: false,
			description: "地市",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SETTLE_COST: {
			nullable: "N",
			isPk: false,
			description: "结算折扣",
			name: "settleCost",
			rawName: "SETTLE_COST",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		STATUS: {
			nullable: "N",
			isPk: false,
			description: "状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		LAST_UPDATE_TIME: {
			nullable: "N",
			isPk: false,
			description: "最后更新时间",
			name: "lastUpdateTime",
			rawName: "LAST_UPDATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		LAST_UPDATE_USER: {
			nullable: "Y",
			isPk: false,
			description: "最后更新人",
			name: "lastUpdateUser",
			rawName: "LAST_UPDATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

