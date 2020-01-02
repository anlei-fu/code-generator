exports.warningMessage = {
	name: "warningMessage",
	rawName: "WARNING_MESSAGE",
	columns: {
		MESSAGE_ID: {
			nullable: false,
			isPk: false,
			description: "消息编号",
			name: "messageId",
			rawName: "MESSAGE_ID",
			type: {
				name: "NUMBER",
				length: "20"
			}
		},
		TITILE: {
			nullable: false,
			isPk: false,
			description: "标题",
			name: "titile",
			rawName: "TITILE",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		KEY_WORDS: {
			nullable: false,
			isPk: false,
			description: "关键字",
			name: "keyWords",
			rawName: "KEY_WORDS",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		WARNING_LEVEL: {
			nullable: false,
			isPk: false,
			description: "告警级别",
			name: "warningLevel",
			rawName: "WARNING_LEVEL",
			type: {
				name: "NUMBER",
				length: "5"
			}
		},
		CREATED_TIME: {
			nullable: false,
			isPk: false,
			description: "创建时间",
			name: "createdTime",
			rawName: "CREATED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		IS_SYNC: {
			nullable: true,
			isPk: false,
			description: "是否被同:1-未同步,0-被同步",
			name: "isSync",
			rawName: "IS_SYNC",
			type: {
				name: "NUMBER",
				length: "2"
			}
		},
		CONTENT: {
			nullable: true,
			isPk: false,
			description: "内容",
			name: "content",
			rawName: "CONTENT",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		SYNC_STATUS: {
			nullable: false,
			isPk: false,
			description: "同步状:2:等待同步,3:同步中,:同步完成",
			name: "syncStatus",
			rawName: "SYNC_STATUS",
			type: {
				name: "NUMBER",
				length: ""
			}
		}
	},
	description: "警告消息"
};

