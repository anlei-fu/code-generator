exports.userMessageConfig = {
	name: "userMessageConfig",
	rawName: "USER_MESSAGE_CONFIG",
	columns: {
		CONFIG_ID: {
			nullable: false,
			isPk: true,
			description: "配置编号",
			name: "configId",
			rawName: "CONFIG_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		MSG_TYPE: {
			nullable: false,
			isPk: false,
			description: "业务类: 3-短信 6-微信",
			name: "msgType",
			rawName: "MSG_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		MSG_TITLE: {
			nullable: false,
			isPk: false,
			description: "消息标题",
			name: "msgTitle",
			rawName: "MSG_TITLE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		MSG_LEVEL: {
			nullable: false,
			isPk: false,
			description: "消息级别",
			name: "msgLevel",
			rawName: "MSG_LEVEL",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		TEMPLATE: {
			nullable: false,
			isPk: false,
			description: "消息模板",
			name: "template",
			rawName: "TEMPLATE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		MSG_HEADER: {
			nullable: true,
			isPk: false,
			description: "消息头",
			name: "msgHeader",
			rawName: "MSG_HEADER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		}
	},
	description: "用户消息配置表"
};

