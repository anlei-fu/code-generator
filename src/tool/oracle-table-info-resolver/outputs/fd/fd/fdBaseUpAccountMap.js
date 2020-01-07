exports.fdBaseUpAccountMap = {
	name: "fdBaseUpAccountMap",
	rawName: "FD_BASE_UP_ACCOUNT_MAP",
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
		accountId: {
			nullable: false,
			isPk: false,
			description: "支付账号编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		isMainChannel: {
			nullable: false,
			isPk: false,
			description: "是否主关系",
			name: "isMainChannel",
			rawName: "IS_MAIN_CHANNEL",
			type: {
				name: "NUMBER",
				length: "1"
			}
		}
	}
};

