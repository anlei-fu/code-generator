let damageRepositoryDevice = {
	name: "damageRepositoryDevice",
	description: "伤损归档-设备扩展",
	columns: {
		createTime: {
			name: "createTime",
			description: "创建时间",
			nullable: true,
			type: {
				name: "datetime"
			}
		},
		deviceCode: {
			name: "deviceCode",
			description: "位置唯一钢轨号/焊缝号/岔道号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		deviceName: {
			name: "deviceName",
			description: "设备名称",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		deviceType: {
			name: "deviceType",
			description: "设备类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		deviceTypeCode: {
			name: "deviceTypeCode",
			description: "道岔配轨/焊缝(类型)号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		factory: {
			name: "factory",
			description: "生产厂",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		nature: {
			name: "nature",
			description: "材质",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		orderDetailId: {
			name: "orderDetailId",
			description: "记录编号",
			isPk: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		radius: {
			name: "radius",
			description: "曲线半径",
			nullable: true,
			type: {
				name: "float"
			}
		},
		railType: {
			name: "railType",
			description: "铁轨类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		sealNumber: {
			name: "sealNumber",
			description: "钢轨热印号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		sleeper: {
			name: "sleeper",
			description: "轨枕",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		totalWeight: {
			name: "totalWeight",
			description: "累计通过总重",
			nullable: true,
			type: {
				name: "float"
			}
		},
		trackNo: {
			name: "trackNo",
			description: "钢轨号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		turnoutNo: {
			name: "turnoutNo",
			description: "道岔号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		updateTime: {
			name: "updateTime",
			description: "更新时间",
			nullable: true,
			type: {
				name: "datetime"
			}
		},
		userDate: {
			name: "userDate",
			description: "出厂年月",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		}
	}
};

let columnsArray = [
	"createTime",
	"deviceCode",
	"deviceName",
	"deviceType",
	"deviceTypeCode",
	"factory",
	"nature",
	"orderDetailId",
	"radius",
	"railType",
	"sealNumber",
	"sleeper",
	"totalWeight",
	"trackNo",
	"turnoutNo",
	"updateTime",
	"userDate"
];

function create() {
  return {};
}

damageRepositoryDevice.columnsArray=columnsArray;
damageRepositoryDevice.create=create;
module.exports=damageRepositoryDevice;