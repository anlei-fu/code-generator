let tunnelInfo = {
	name: "tunnelInfo",
	description: "隧道信息",
	columns: {
		createTime: {
			name: "createTime",
			description: "创建时间",
			nullable: true,
			type: {
				name: "datetime"
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
			description: "终点里程",
			nullable: true,
			type: {
				name: "float"
			}
		},
		id: {
			name: "id",
			description: "隧道编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		inputCode: {
			name: "inputCode",
			description: "输入码",
			nullable: true,
			type: {
				name: "varchar",
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
		length: {
			name: "length",
			description: "全长",
			nullable: true,
			type: {
				name: "float"
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
		middleMiles: {
			name: "middleMiles",
			description: "中心里程",
			nullable: true,
			type: {
				name: "float"
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
		startMiles: {
			name: "startMiles",
			description: "起点里程",
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
		trackDistance: {
			name: "trackDistance",
			description: "轨距",
			nullable: true,
			type: {
				name: "float"
			}
		},
		trackDivisionId: {
			name: "trackDivisionId",
			description: "工务段编号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		tunneName: {
			name: "tunneName",
			description: "隧道名",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		tunneNo: {
			name: "tunneNo",
			description: "隧道号",
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
		}
	}
};

let columnsArray = [
	"createTime",
	"direction",
	"endMiles",
	"id",
	"inputCode",
	"isDelete",
	"length",
	"lineId",
	"longChain",
	"middleMiles",
	"operator",
	"remark",
	"side",
	"startMiles",
	"status",
	"trackDistance",
	"trackDivisionId",
	"tunneName",
	"tunneNo",
	"updateTime"
];

function create() {
  return {};
}

tunnelInfo.columnsArray=columnsArray;
tunnelInfo.create=create;
module.exports=tunnelInfo;