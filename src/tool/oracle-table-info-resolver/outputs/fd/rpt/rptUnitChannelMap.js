exports.rptUnitChannelMap = {
	name: "rptUnitChannelMap",
	rawName: "RPT_UNIT_CHANNEL_MAP",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
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
		CHANNEL_NAME: {
			nullable: "N",
			isPk: false,
			description: "渠道名称",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CHANNEL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "渠道类型，1、上游渠道，2下游渠道",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		INCOME_UNIT: {
			nullable: "N",
			isPk: false,
			description: "收入单元,1.天猫，2.腾讯，3.运营商资源，4.四川，5.陕西，6.云南，7.运营商（非冲），8.自有平台，9代收费业务",
			name: "incomeUnit",
			rawName: "INCOME_UNIT",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		BILL_SPLIT_TYPE: {
			nullable: "N",
			isPk: false,
			description: "分账方式，1、不分账，2、比例分账，3、双计分账",
			name: "billSplitType",
			rawName: "BILL_SPLIT_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		BILL_SPLIT_RATIO: {
			nullable: "N",
			isPk: false,
			description: "分账比例",
			name: "billSplitRatio",
			rawName: "BILL_SPLIT_RATIO",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SYS_NO: {
			nullable: "Y",
			isPk: false,
			description: "渠道分类：fd直充，dk代扣",
			name: "sysNo",
			rawName: "SYS_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

