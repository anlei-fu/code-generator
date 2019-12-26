exports.fdBaseCompanySettleConfig = {
	name: "fdBaseCompanySettleConfig",
	rawName: "FD_BASE_COMPANY_SETTLE_CONFIG",
	columns: {
		configId: {
			nullable: false,
			isPk: true,
			description: "配置编号",
			name: "configId",
			rawName: "CONFIG_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		oweCompany: {
			nullable: false,
			isPk: false,
			description: "欠款公司",
			name: "oweCompany",
			rawName: "OWE_COMPANY",
			type: {
				name: "number",
				length: 20
			}
		},
		recvCompany: {
			nullable: false,
			isPk: false,
			description: "收款公司",
			name: "recvCompany",
			rawName: "RECV_COMPANY",
			type: {
				name: "number",
				length: 20
			}
		},
		upChannelNo: {
			nullable: false,
			isPk: false,
			description: "上游渠道编号",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		businessType: {
			nullable: false,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		carrierNo: {
			nullable: false,
			isPk: false,
			description: "运营商",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		provinceNo: {
			nullable: false,
			isPk: false,
			description: "省份",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		cityNo: {
			nullable: false,
			isPk: false,
			description: "地市",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		settleCost: {
			nullable: false,
			isPk: false,
			description: "结算折扣",
			name: "settleCost",
			rawName: "SETTLE_COST",
			type: {
				name: "number",
				length: 20
			}
		},
		status: {
			nullable: false,
			isPk: false,
			description: "状态",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "number",
				length: 1
			}
		},
		lastUpdateTime: {
			nullable: false,
			isPk: false,
			description: "最后更新时间",
			name: "lastUpdateTime",
			rawName: "LAST_UPDATE_TIME",
			type: {
				name: "date",
				length: null
			}
		},
		lastUpdateUser: {
			nullable: false,
			isPk: false,
			description: "最后更新人",
			name: "lastUpdateUser",
			rawName: "LAST_UPDATE_USER",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

