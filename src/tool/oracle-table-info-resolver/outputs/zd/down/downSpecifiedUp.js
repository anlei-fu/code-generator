exports.downSpecifiedUp = {
	name: "downSpecifiedUp",
	rawName: "DOWN_SPECIFIED_UP",
	columns: {
		RECORD_ID: {
			nullable: false,
			isPk: true,
			description: "编号",
			name: "recordId",
			rawName: "RECORD_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		DOWN_CHANNEL_NO: {
			nullable: true,
			isPk: false,
			description: "下游渠道",
			name: "downChannelNo",
			rawName: "DOWN_CHANNEL_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UP_CHANNEL_ID: {
			nullable: true,
			isPk: false,
			description: "上游渠道",
			name: "upChannelId",
			rawName: "UP_CHANNEL_ID",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		BUSINESS_TYPE: {
			nullable: true,
			isPk: false,
			description: "业务类型",
			name: "businessType",
			rawName: "BUSINESS_TYPE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		CARRIER_NO: {
			nullable: true,
			isPk: false,
			description: "运营商(*所有)",
			name: "carrierNo",
			rawName: "CARRIER_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		PROVINCE_NO: {
			nullable: true,
			isPk: false,
			description: "省份(QG所有)",
			name: "provinceNo",
			rawName: "PROVINCE_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CITY_NO: {
			nullable: true,
			isPk: false,
			description: "地市(*所有)",
			name: "cityNo",
			rawName: "CITY_NO",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		FACE: {
			nullable: true,
			isPk: false,
			description: "面值(0表示所有)",
			name: "face",
			rawName: "FACE",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		PRIORITY: {
			nullable: true,
			isPk: false,
			description: "优先级",
			name: "priority",
			rawName: "PRIORITY",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		STATUS: {
			nullable: true,
			isPk: false,
			description: "状:0-启用,1-禁用",
			name: "status",
			rawName: "STATUS",
			type: {
				name: "NUMBER",
				length: ""
			}
		},
		REMARK: {
			nullable: true,
			isPk: false,
			description: "备注",
			name: "remark",
			rawName: "REMARK",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CREATED_USER: {
			nullable: true,
			isPk: false,
			description: "创建人",
			name: "createdUser",
			rawName: "CREATED_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		CREATED_TIME: {
			nullable: true,
			isPk: false,
			description: "创建时间",
			name: "createdTime",
			rawName: "CREATED_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		},
		UPDATE_USER: {
			nullable: true,
			isPk: false,
			description: "更新人",
			name: "updateUser",
			rawName: "UPDATE_USER",
			type: {
				name: "VARCHAR2",
				length: ""
			}
		},
		UPDATE_TIME: {
			nullable: true,
			isPk: false,
			description: "更新时间",
			name: "updateTime",
			rawName: "UPDATE_TIME",
			type: {
				name: "DATE",
				length: ""
			}
		}
	},
	description: "下游指定上游渠道配置"
};

