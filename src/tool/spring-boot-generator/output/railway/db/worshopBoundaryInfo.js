let worshopBoundaryInfo = {
	name: "worshopBoundaryInfo",
	description: "线路车间管界",
	columns: {
		id: {
			name: "id",
			description: "车间管界编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		workshopId: {
			name: "workshopId",
			description: "工区编号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		lineId: {
			name: "lineId",
			description: "线路编号",
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
		startMiles: {
			name: "startMiles",
			description: "起点里程",
			nullable: true,
			type: {
				name: "float"
			}
		},
		endMiles: {
			name: "endMiles",
			description: "终点里程",
			nullable: true,
			type: {
				name: "float"
			}
		},
		trackCategory: {
			name: "trackCategory",
			description: "轨道类别",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		trackType: {
			name: "trackType",
			description: "轨道类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		operateStatus: {
			name: "operateStatus",
			description: "运营状态",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		longChain: {
			name: "longChain",
			description: "长链标记",
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
		status: {
			name: "status",
			description: "状态",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		isDelete: {
			name: "isDelete",
			description: "删除标记",
			nullable: false,
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
	"workshopId",
	"lineId",
	"direction",
	"startMiles",
	"endMiles",
	"trackCategory",
	"trackType",
	"operateStatus",
	"longChain",
	"remark",
	"status",
	"isDelete",
	"createTime",
	"updateTime",
	"operator"
];

function create() {
  return {};
}

worshopBoundaryInfo.columnsArray=columnsArray;
worshopBoundaryInfo.create=create;
module.exports=worshopBoundaryInfo;