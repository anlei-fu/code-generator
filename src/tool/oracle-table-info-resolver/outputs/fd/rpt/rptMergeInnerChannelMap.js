exports.rptMergeInnerChannelMap = {
	name: "rptMergeInnerChannelMap",
	rawName: "RPT_MERGE_INNER_CHANNEL_MAP",
	columns: {
		id: {
			nullable: false,
			isPk: false,
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
		},
		channelType: {
			nullable: false,
			isPk: false,
			description: "渠道类型",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		companyId: {
			nullable: false,
			isPk: false,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		addUser: {
			nullable: false,
			isPk: false,
			description: "添加人",
			name: "addUser",
			rawName: "ADD_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		addTime: {
			nullable: false,
			isPk: false,
			description: "添加时间",
			name: "addTime",
			rawName: "ADD_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	}
};

