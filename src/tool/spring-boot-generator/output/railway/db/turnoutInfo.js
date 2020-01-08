let turnoutInfo = {
	name: "turnoutInfo",
	description: "道岔信息",
	columns: {
		id: {
			name: "id",
			description: "道岔编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		turnoutNo: {
			name: "turnoutNo",
			description: "岔道号",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		stationId: {
			name: "stationId",
			description: "车站编号",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		lineId: {
			name: "lineId",
			description: "线路编号",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		workshopId: {
			name: "workshopId",
			description: "工区编号",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		thighTrackId: {
			name: "thighTrackId",
			description: "股道号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		position: {
			name: "position",
			description: "岔道位置",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		frogNo: {
			name: "frogNo",
			description: "辙叉号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		frogStructure: {
			name: "frogStructure",
			description: "辙叉构造",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		direction: {
			name: "direction",
			description: "行别",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		turnoutKind: {
			name: "turnoutKind",
			description: "道岔种类",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		turnoutType: {
			name: "turnoutType",
			description: "道岔类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		trackType: {
			name: "trackType",
			description: "轨型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		switchRailType: {
			name: "switchRailType",
			description: "尖轨类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		hasSwitchRail: {
			name: "hasSwitchRail",
			description: "是否包含道岔尖轨",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		hasMovablePointFrog: {
			name: "hasMovablePointFrog",
			description: "是否包含可动心轨",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		miles: {
			name: "miles",
			description: "里程",
			nullable: true,
			type: {
				name: "float"
			}
		},
		turnoutLength: {
			name: "turnoutLength",
			description: "道岔全长",
			nullable: true,
			type: {
				name: "float"
			}
		},
		commissioningDate: {
			name: "commissioningDate",
			description: "投产日期",
			nullable: true,
			type: {
				name: "date"
			}
		},
		sortNum: {
			name: "sortNum",
			description: "排序编号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		status: {
			name: "status",
			description: "状态",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		remark: {
			name: "remark",
			description: "备注",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		isDelete: {
			name: "isDelete",
			description: "删除标记",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		createTime: {
			name: "createTime",
			description: "创建时间",
			nullable: true,
			type: {
				name: "datetime"
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
		operator: {
			name: "operator",
			description: "操作人",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"id",
	"turnoutNo",
	"stationId",
	"lineId",
	"workshopId",
	"thighTrackId",
	"position",
	"frogNo",
	"frogStructure",
	"direction",
	"turnoutKind",
	"turnoutType",
	"trackType",
	"switchRailType",
	"hasSwitchRail",
	"hasMovablePointFrog",
	"miles",
	"turnoutLength",
	"commissioningDate",
	"sortNum",
	"status",
	"remark",
	"isDelete",
	"createTime",
	"updateTime",
	"operator"
];

function create() {
  return {};
}

turnoutInfo.columnsArray=columnsArray;
turnoutInfo.create=create;
module.exports=turnoutInfo;