exports.fdBaseDownAccountMap = {
	name: "fdBaseDownAccountMap",
	rawName: "FD_BASE_DOWN_ACCOUNT_MAP",
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
		ACCOUNT_ID: {
			nullable: "N",
			isPk: false,
			description: "账号编号",
			name: "accountId",
			rawName: "ACCOUNT_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		IS_MAIN_CHANNEL: {
			nullable: "N",
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

