exports.incomeDownGroupMap = {
	name: "incomeDownGroupMap",
	rawName: "INCOME_DOWN_GROUP_MAP",
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
			description: "渠道编号",
			name: "channelNo",
			rawName: "CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		downGroupId: {
			nullable: false,
			isPk: false,
			description: "所属下游收入分组",
			name: "downGroupId",
			rawName: "DOWN_GROUP_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		syncStatus: {
			nullable: false,
			isPk: false,
			description: "同步状态，0已同步，1未同步",
			name: "syncStatus",
			rawName: "SYNC_STATUS",
			type: {
				name: "NUMBER",
				length: "3"
			}
		},
		channelName: {
			nullable: false,
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

