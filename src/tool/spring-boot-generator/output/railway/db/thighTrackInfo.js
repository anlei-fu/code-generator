let thighTrackInfo = {
	name: "thighTrackInfo",
	description: "股道信息",
	columns: {
		id: {
			name: "id",
			description: "股道编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		stationId: {
			name: "stationId",
			description: "车站编号",
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
		workshopId: {
			name: "workshopId",
			description: "工区编号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		thighTrackNo: {
			name: "thighTrackNo",
			description: "股道号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		thignTrackType: {
			name: "thignTrackType",
			description: "股道类型",
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
		tieCategory: {
			name: "tieCategory",
			description: "轨枕类别",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		maxGradient: {
			name: "maxGradient",
			description: "最大坡度",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		curveRadius: {
			name: "curveRadius",
			description: "曲线半径",
			nullable: true,
			type: {
				name: "float"
			}
		},
		gradeSectionLength: {
			name: "gradeSectionLength",
			description: "坡段长度",
			nullable: true,
			type: {
				name: "float"
			}
		},
		thignTrackLength: {
			name: "thignTrackLength",
			description: "股道长度",
			nullable: true,
			type: {
				name: "float"
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
	"stationId",
	"lineId",
	"workshopId",
	"thighTrackNo",
	"thignTrackType",
	"direction",
	"tieCategory",
	"maxGradient",
	"curveRadius",
	"gradeSectionLength",
	"thignTrackLength",
	"sortNum",
	"status",
	"isDelete",
	"createTime",
	"updateTime",
	"operator"
];

function create() {
  return {};
}

thighTrackInfo.columnsArray=columnsArray;
thighTrackInfo.create=create;
module.exports=thighTrackInfo;