exports.fdBaseChannelBusinessMap = {
	name: "fdBaseChannelBusinessMap",
	rawName: "FD_BASE_CHANNEL_BUSINESS_MAP",
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
		BUSINESS_ID: {
			nullable: "N",
			isPk: false,
			description: "业务线",
			name: "businessId",
			rawName: "BUSINESS_ID",
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

