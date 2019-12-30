exports.fdBaseDownUpMap = {
	name: "fdBaseDownUpMap",
	rawName: "FD_BASE_DOWN_UP_MAP",
	columns: {
		MAP_ID: {
			nullable: "N",
			isPk: false,
			description: "主键",
			name: "mapId",
			rawName: "MAP_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		DOWN_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "下游渠道",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UP_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "上游渠道",
			name: "upChannelNo",
			rawName: "UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

