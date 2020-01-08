let weldingInfo = {
	name: "weldingInfo",
	description: "焊缝信息",
	columns: {
		id: {
			name: "id",
			description: "焊缝编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		weldingNo: {
			name: "weldingNo",
			description: "焊缝标识",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		workareaId: {
			name: "workareaId",
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
		miles: {
			name: "miles",
			description: "里程",
			nullable: true,
			type: {
				name: "float"
			}
		},
		side: {
			name: "side",
			description: "线别",
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
		turnoutId: {
			name: "turnoutId",
			description: "道岔号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		weldingType: {
			name: "weldingType",
			description: "焊缝类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		weldingWay: {
			name: "weldingWay",
			description: "焊缝方式",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		positionCategory: {
			name: "positionCategory",
			description: "焊缝位置类别",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		trackId: {
			name: "trackId",
			description: "轨道编号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		thignTrackCategory: {
			name: "thignTrackCategory",
			description: "股别",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		turnoutThignCategory: {
			name: "turnoutThignCategory",
			description: "道岔股别",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		position: {
			name: "position",
			description: "道岔位置",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		holeNum: {
			name: "holeNum",
			description: "带孔数量",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		trackGlancingFlatness: {
			name: "trackGlancingFlatness",
			description: "轨面平直度",
			nullable: true,
			type: {
				name: "float"
			}
		},
		innerGlancingFlatness: {
			name: "innerGlancingFlatness",
			description: "内测平直度",
			nullable: true,
			type: {
				name: "float"
			}
		},
		weldTrackTemperature: {
			name: "weldTrackTemperature",
			description: "焊接时轨温",
			nullable: true,
			type: {
				name: "float"
			}
		},
		weldDate: {
			name: "weldDate",
			description: "焊接日期",
			nullable: true,
			type: {
				name: "date"
			}
		},
		weldUserId: {
			name: "weldUserId",
			description: "焊接人",
			nullable: true,
			type: {
				name: "int",
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
		remark: {
			name: "remark",
			description: "备注",
			nullable: true,
			type: {
				name: "varchar",
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
	"weldingNo",
	"workareaId",
	"lineId",
	"miles",
	"side",
	"direction",
	"turnoutId",
	"weldingType",
	"weldingWay",
	"positionCategory",
	"trackId",
	"thignTrackCategory",
	"turnoutThignCategory",
	"position",
	"holeNum",
	"trackGlancingFlatness",
	"innerGlancingFlatness",
	"weldTrackTemperature",
	"weldDate",
	"weldUserId",
	"status",
	"isDelete",
	"remark",
	"createTime",
	"updateTime",
	"operator"
];

function create() {
  return {};
}

weldingInfo.columnsArray=columnsArray;
weldingInfo.create=create;
module.exports=weldingInfo;