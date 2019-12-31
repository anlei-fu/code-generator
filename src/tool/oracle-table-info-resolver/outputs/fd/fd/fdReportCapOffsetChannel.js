exports.fdReportCapOffsetChannel = {
	name: "fdReportCapOffsetChannel",
	rawName: "FD_REPORT_CAP_OFFSET_CHANNEL",
	columns: {
		ID: {
			nullable: "N",
			isPk: false,
			description: "配置编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_SYSTEM_ID: {
			nullable: "N",
			isPk: false,
			description: "渠道系统编号",
			name: "channelSystemId",
			rawName: "CHANNEL_SYSTEM_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		CHANNEL_TYPE: {
			nullable: "N",
			isPk: false,
			description: "渠道类型，1上游渠道，2下游渠道",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "NUMBER",
				length: "3"
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
