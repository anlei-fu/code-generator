exports.fdB2eBankWorkDate = {
	name: "fdB2eBankWorkDate",
	rawName: "FD_B2E_BANK_WORK_DATE",
	columns: {
		CONFIG_ID: {
			nullable: "N",
			isPk: false,
			description: "配置编号",
			name: "configId",
			rawName: "CONFIG_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		WORK_DAY_TYPE: {
			nullable: "N",
			isPk: false,
			description: "时间类型",
			name: "workDayType",
			rawName: "WORK_DAY_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		CONFIG_DATE: {
			nullable: "N",
			isPk: false,
			description: "配置日期",
			name: "configDate",
			rawName: "CONFIG_DATE",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

