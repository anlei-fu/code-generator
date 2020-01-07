exports.downSpecifiedUp = {
	name: "downSpecifiedUp",
	rawName: "DOWN_SPECIFIED_UP",
	columns: {
		recordId: {
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
		downChannelNo: {
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
		upChannelId: {
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
		businessType: {
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
		carrierNo: {
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
		provinceNo: {
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
		cityNo: {
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
		face: {
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
		priority: {
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
		status: {
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
		remark: {
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
		createdUser: {
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
		createdTime: {
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
		updateUser: {
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
		updateTime: {
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

