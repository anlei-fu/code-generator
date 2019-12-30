exports.supBaseRelateAddMap = {
	name: "supBaseRelateAddMap",
	rawName: "SUP_BASE_RELATE_ADD_MAP",
	columns: {
		MAP_ID: {
			nullable: "N",
			isPk: false,
			description: "关联编号",
			name: "mapId",
			rawName: "MAP_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		SUP_UP_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "sup上游渠道",
			name: "supUpChannelNo",
			rawName: "SUP_UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SUP_DOWN_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "sup下游渠道",
			name: "supDownChannelNo",
			rawName: "SUP_DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PRO_UP_CHANNEL_NO: {
			nullable: "N",
			isPk: false,
			description: "生产系统上游渠道（需为千行）",
			name: "proUpChannelNo",
			rawName: "PRO_UP_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	}
};

