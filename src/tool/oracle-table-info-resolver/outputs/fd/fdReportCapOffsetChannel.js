exports.fdReportCapOffsetChannel = {
	name: "fdReportCapOffsetChannel",
	rawName: "FD_REPORT_CAP_OFFSET_CHANNEL",
	columns: {
		id: {
			nullable: false,
			isPk: false,
			description: "配置编号",
			name: "id",
			rawName: "ID",
			type: {
				name: "number",
				length: 20
			}
		},
		channelSystemId: {
			nullable: false,
			isPk: false,
			description: "渠道系统编号",
			name: "channelSystemId",
			rawName: "CHANNEL_SYSTEM_ID",
			type: {
				name: "number",
				length: 20
			}
		},
		channelType: {
			nullable: false,
			isPk: false,
			description: "渠道类型，1上游渠道，2下游渠道",
			name: "channelType",
			rawName: "CHANNEL_TYPE",
			type: {
				name: "number",
				length: 3
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

