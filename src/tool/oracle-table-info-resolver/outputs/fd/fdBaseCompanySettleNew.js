exports.fdBaseCompanySettleNew = {
	name: "fdBaseCompanySettleNew",
	rawName: "FD_BASE_COMPANY_SETTLE_NEW",
	columns: {
		configId: {
			nullable: false,
			isPk: false,
			description: "配置编号",
			name: "configId",
			rawName: "CONFIG_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		profitCompanyId: {
			nullable: false,
			isPk: false,
			description: "获取利润公司编号",
			name: "profitCompanyId",
			rawName: "PROFIT_COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		relatedCompanyId: {
			nullable: false,
			isPk: false,
			description: "对应公司编号",
			name: "relatedCompanyId",
			rawName: "RELATED_COMPANY_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		statisticsType: {
			nullable: false,
			isPk: false,
			description: "统计类型，1.流量数据包，2前向流量充值，3话费、固话，4.加油卡充值，5.Q币、游戏币",
			name: "statisticsType",
			rawName: "STATISTICS_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		profitCost: {
			nullable: false,
			isPk: false,
			description: "利润折扣",
			name: "profitCost",
			rawName: "PROFIT_COST",
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

