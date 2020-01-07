exports.fdBaseDownSystemMap = {
	name: "fdBaseDownSystemMap",
	rawName: "FD_BASE_DOWN_SYSTEM_MAP",
	columns: {
		mapId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "mapId",
			rawName: "MAP_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		sourceSystemId: {
			nullable: false,
			isPk: false,
			description: "系统编号",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
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
		}
	}
};

