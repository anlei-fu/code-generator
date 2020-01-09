let curveInfo = {
	name: "curveInfo",
	description: "曲线信息",
	columns: {
		averageSpeed: {
			name: "averageSpeed",
			description: "平均速度",
			nullable: true,
			type: {
				name: "float"
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
		curveDirection: {
			name: "curveDirection",
			description: "鏇茬嚎鏂瑰悜",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		curveId: {
			name: "curveId",
			description: "曲线编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		curveLength: {
			name: "curveLength",
			description: "鏇茬嚎闀?",
			nullable: true,
			type: {
				name: "float"
			}
		},
		curveReadius: {
			name: "curveReadius",
			description: "鏇茬嚎鍗婂緞",
			nullable: true,
			type: {
				name: "float"
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
		endMiles: {
			name: "endMiles",
			description: "缁堢偣閲岀▼",
			nullable: true,
			type: {
				name: "float",
				length: null
			}
		},
		endSlowLength: {
			name: "endSlowLength",
			description: "终缓和线长",
			nullable: true,
			type: {
				name: "float"
			}
		},
		endTangentLength: {
			name: "endTangentLength",
			description: "终点切线长",
			nullable: true,
			type: {
				name: "float"
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
		lineId: {
			name: "lineId",
			description: "线路编号",
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
		operator: {
			name: "operator",
			description: "操作人",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		overHeight: {
			name: "overHeight",
			description: "超高",
			nullable: true,
			type: {
				name: "float"
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
		side: {
			name: "side",
			description: "线别",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		slopeRate: {
			name: "slopeRate",
			description: "顺坡率",
			nullable: true,
			type: {
				name: "float"
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
		startSlowLength: {
			name: "startSlowLength",
			description: "起缓和线长",
			nullable: true,
			type: {
				name: "float"
			}
		},
		startTangentLength: {
			name: "startTangentLength",
			description: "起点切线长",
			nullable: true,
			type: {
				name: "float"
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
		steeringAngle: {
			name: "steeringAngle",
			description: "转向角",
			nullable: true,
			type: {
				name: "float"
			}
		},
		trackDisType: {
			name: "trackDisType",
			description: "轨距类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		trackDisWide: {
			name: "trackDisWide",
			description: "轨距加宽",
			nullable: true,
			type: {
				name: "float"
			}
		},
		trackDivisionId: {
			name: "trackDivisionId",
			description: "宸ュ姟娈电紪鍙?",
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
	"averageSpeed",
	"createTime",
	"curveDirection",
	"curveId",
	"curveLength",
	"curveReadius",
	"direction",
	"endMiles",
	"endSlowLength",
	"endTangentLength",
	"isDelete",
	"lineId",
	"longChain",
	"operator",
	"overHeight",
	"remark",
	"side",
	"slopeRate",
	"startMiles",
	"startSlowLength",
	"startTangentLength",
	"status",
	"steeringAngle",
	"trackDisType",
	"trackDisWide",
	"trackDivisionId",
	"updateTime"
];

function create() {
  return {};
}

curveInfo.columnsArray=columnsArray;
curveInfo.create=create;
module.exports=curveInfo;