let stationInfo = {
	name: "stationInfo",
	description: "车站信息",
	columns: {
		id: {
			name: "id",
			description: "车站编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		trackDivisionId: {
			name: "trackDivisionId",
			description: "公务段编号",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		fullName: {
			name: "fullName",
			description: "车站全称",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		shortName: {
			name: "shortName",
			description: "车站简称",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		stationCode: {
			name: "stationCode",
			description: "车站编码",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		inputCode: {
			name: "inputCode",
			description: "输入代码",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		stationType: {
			name: "stationType",
			description: "车站类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		stationGrade: {
			name: "stationGrade",
			description: "车站等级",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		jobType: {
			name: "jobType",
			description: "技术作业别",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		thighTrackNum: {
			name: "thighTrackNum",
			description: "股道数量",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		ternoutNum: {
			name: "ternoutNum",
			description: "岔道数量",
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
	"trackDivisionId",
	"fullName",
	"shortName",
	"stationCode",
	"inputCode",
	"stationType",
	"stationGrade",
	"jobType",
	"thighTrackNum",
	"ternoutNum",
	"status",
	"isDelete",
	"createTime",
	"updateTime",
	"operator"
];

function create() {
  return {};
}

stationInfo.columnsArray=columnsArray;
stationInfo.create=create;
module.exports=stationInfo;