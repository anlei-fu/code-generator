exports.rptMergeInnerChannelMap = {
	name: "rptMergeInnerChannelMap",
	rawName: "RPT_MERGE_INNER_CHANNEL_MAP",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "编号",
			name: "id",
			rawName: "ID",
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
		CHANNEL_NAME: {
			nullable: "N",
			isPk: false,
			description: "渠道名称",
			name: "channelName",
			rawName: "CHANNEL_NAME",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CHANNEL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "渠道类型",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "1"
			}
		},
		COMPANY_ID: {
			nullable: "N",
			isPk: false,
			description: "公司编号",
			name: "companyId",
			rawName: "COMPANY_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		ADD_USER: {
			nullable: "N",
			isPk: false,
			description: "添加人",
			name: "addUser",
			rawName: "ADD_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		ADD_TIME: {
			nullable: "N",
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

