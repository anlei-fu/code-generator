let lineInfo = {
	name: "lineInfo",
	description: "线路信息",
	columns: {
		ballastType: {
			name: "ballastType",
			description: "道床类别",
			nullable: true,
			type: {
				name: "int",
				length: null
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
		createTime: {
			name: "createTime",
			description: "创建时间",
			nullable: true,
			type: {
				name: "datetime"
			}
		},
		distance: {
			name: "distance",
			description: "线路里程",
			nullable: true,
			type: {
				name: "float"
			}
		},
		fullName: {
			name: "fullName",
			description: "线路全称",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		gaugeType: {
			name: "gaugeType",
			description: "轨距类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		grade: {
			name: "grade",
			description: "线路等级",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		id: {
			name: "id",
			description: "线路编号",
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
			description: "输入代码",
			nullable: false,
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
		limitGrad: {
			name: "limitGrad",
			description: "限制坡度",
			nullable: true,
			type: {
				name: "float"
			}
		},
		lineBranches: {
			name: "lineBranches",
			description: "线路干支",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		lineCode: {
			name: "lineCode",
			description: "线路编码",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		lineNum: {
			name: "lineNum",
			description: "正线数目",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		minRadiusCurve: {
			name: "minRadiusCurve",
			description: "最小曲线半径",
			nullable: true,
			type: {
				name: "float"
			}
		},
		nature: {
			name: "nature",
			description: "线路性质",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		operateType: {
			name: "operateType",
			description: "运营类型",
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
		shortName: {
			name: "shortName",
			description: "线路简称",
			nullable: false,
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
		trackType: {
			name: "trackType",
			description: "轨道类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		tractionType: {
			name: "tractionType",
			description: "牵引类型",
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
		},
		yearVolume: {
			name: "yearVolume",
			description: "年运量(万吨)",
			nullable: true,
			type: {
				name: "float"
			}
		}
	}
};

let columnsArray = [
	"ballastType",
	"commissioningDate",
	"createTime",
	"distance",
	"fullName",
	"gaugeType",
	"grade",
	"id",
	"inputCode",
	"isDelete",
	"limitGrad",
	"lineBranches",
	"lineCode",
	"lineNum",
	"minRadiusCurve",
	"nature",
	"operateType",
	"operator",
	"shortName",
	"status",
	"trackType",
	"tractionType",
	"updateTime",
	"yearVolume"
];

function create() {
  return {};
}

lineInfo.columnsArray=columnsArray;
lineInfo.create=create;
module.exports=lineInfo;