let damageRepositoryPosition = {
	name: "damageRepositoryPosition",
	description: "伤损归档-受伤位置扩展",
	columns: {
		bridgeTunnel: {
			name: "bridgeTunnel",
			description: "桥隧道口",
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
		damagePosition: {
			name: "damagePosition",
			description: "损伤位置",
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
		holePosition: {
			name: "holePosition",
			description: "孔裂位置",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		lineCategory: {
			name: "lineCategory",
			description: "线别",
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
		lineName: {
			name: "lineName",
			description: "线名",
			nullable: true,
			type: {
				name: "varchar",
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
		stationId: {
			name: "stationId",
			description: "车站编号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		stockExchange: {
			name: "stockExchange",
			description: "股别",
			nullable: true,
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
		updateTime: {
			name: "updateTime",
			description: "更新时间",
			nullable: true,
			type: {
				name: "datetime"
			}
		}
	}
};

let columnsArray = [
	"bridgeTunnel",
	"createTime",
	"damagePosition",
	"direction",
	"holePosition",
	"lineCategory",
	"lineId",
	"lineName",
	"miles",
	"orderDetailId",
	"stationId",
	"stockExchange",
	"thighTrackId",
	"updateTime"
];

function create() {
  return {};
}

damageRepositoryPosition.columnsArray=columnsArray;
damageRepositoryPosition.create=create;
module.exports=damageRepositoryPosition;