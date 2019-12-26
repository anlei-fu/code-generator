exports.fdBaseChannelBusinessMap = {
	name: "fdBaseChannelBusinessMap",
	rawName: "FD_BASE_CHANNEL_BUSINESS_MAP",
	columns: {
		mapId: {
			nullable: false,
			isPk: true,
			description: "主键",
			name: "mapId",
			rawName: "MAP_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		businessId: {
			nullable: false,
			isPk: false,
			description: "业务线",
			name: "businessId",
			rawName: "BUSINESS_ID",
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
		}
	}
};

