exports.terminalDownMap = {
	name: "terminalDownMap",
	rawName: "TERMINAL_DOWN_MAP",
	columns: {
		mapId: {
			nullable: false,
			isPk: false,
			description: "编号",
			name: "mapId",
			rawName: "MAP_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		terminalId: {
			nullable: false,
			isPk: false,
			description: "终端编号",
			name: "terminalId",
			rawName: "TERMINAL_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		downChannelNo: {
			nullable: false,
			isPk: false,
			description: "下游渠道编号",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "终端下游关系表"
};

