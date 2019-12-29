exports.rptUnitChannelMap = {
	name: "rptUnitChannelMap",
	rawName: "RPT_UNIT_CHANNEL_MAP",
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
		channelNo: {
			nullable: false,
			isPk: false,
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "varchar2",
				length: null
			}
		},
		channelName: {
			nullable: false,
			isPk: false,
			description: "渠道名称",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "varchar2",
				length: null
			}
		},
		channelType: {
			nullable: false,
			isPk: false,
			description: "渠道类型，1、上游渠道，2下游渠道",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "number",
				length: 1
			}
		},
		incomeUnit: {
			nullable: false,
			isPk: false,
			description: "收入单元",
			name: "incomeUnit",
			rawName: "INCOME_UNIT",
			type: {
				name: "number",
				length: 3
			}
		},
		billSplitType: {
			nullable: false,
			isPk: false,
			description: "分账方式，1、不分账，2、比例分账，3、双计分账",
			name: "billSplitType",
			rawName: "BILL_SPLIT_TYPE",
			type: {
				name: "number",
				length: 3
			}
		},
		billSplitRatio: {
			nullable: false,
			isPk: false,
			description: "分账比例",
			name: "billSplitRatio",
			rawName: "BILL_SPLIT_RATIO",
			type: {
				name: "number",
				length: 20
			}
		},
		sysNo: {
			nullable: false,
			isPk: false,
			description: "渠道分类：fd直充，dk代扣",
			name: "sysNo",
			rawName: "SYS_NO",
			type: {
				name: "varchar2",
				length: null
			}
		}
	}
};

