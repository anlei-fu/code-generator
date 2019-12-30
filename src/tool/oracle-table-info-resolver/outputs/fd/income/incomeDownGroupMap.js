exports.incomeDownGroupMap = {
	name: "incomeDownGroupMap",
	rawName: "INCOME_DOWN_GROUP_MAP",
	columns: {
		ID: {
			nullable: "N",
			isPk: true,
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
		DOWN_GROUP_ID: {
			nullable: "N",
			isPk: false,
			description: "所属下游收入分组",
			name: "downGroupId",
			rawName: "DOWN_GROUP_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SYNC_STATUS: {
			nullable: "N",
			isPk: false,
			description: "同步状态，0已同步，1未同步",
			name: "syncStatus",
			rawName: "SYNC_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
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
		}
	}
};

