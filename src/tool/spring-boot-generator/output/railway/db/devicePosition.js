let devicePosition = {
	name: "devicePosition",
	description: "设备-位置映射",
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
			description: "设备位置唯一编号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		deviceNo: {
			name: "deviceNo",
			description: "设备编号(对应导入标号)",
			nullable: true,
			type: {
				name: "varchar",
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
		id: {
			name: "id",
			description: "主键",
			isPk: true,
			autoIncrement: true,
			nullable: false,
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
		trackId: {
			name: "trackId",
			description: "钢轨id",
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
	"createTime",
	"deviceCode",
	"deviceNo",
	"direction",
	"id",
	"lineCategory",
	"lineId",
	"lineName",
	"miles",
	"stationId",
	"stockExchange",
	"thighTrackId",
	"trackId",
	"updateTime"
];

function create() {
  return {};
}

devicePosition.columnsArray=columnsArray;
devicePosition.create=create;
module.exports=devicePosition;