exports.fdBaseUpSystemMap = {
	name: "fdBaseUpSystemMap",
	rawName: "FD_BASE_UP_SYSTEM_MAP",
	columns: {
		MAP_ID: {
			nullable: "N",
			isPk: true,
			description: "主键",
			name: "mapId",
			rawName: "MAP_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SOURCE_SYSTEM_ID: {
			nullable: "N",
			isPk: false,
			description: "系统编号",
			name: "sourceSystemId",
			rawName: "SOURCE_SYSTEM_ID",
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
		}
	}
};

