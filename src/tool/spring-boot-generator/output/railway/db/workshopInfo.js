let workshopInfo = {
	name: "workshopInfo",
	description: "线路车间信息",
	columns: {
		id: {
			name: "id",
			description: "车间编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		fullName: {
			name: "fullName",
			description: "车间名称",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		shortName: {
			name: "shortName",
			description: "车间简称",
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
		workshopType: {
			name: "workshopType",
			description: "车间类型",
			nullable: true,
			type: {
				name: "int",
				length: null
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
		lineId: {
			name: "lineId",
			description: "线路编号",
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
	"fullName",
	"shortName",
	"inputCode",
	"workshopType",
	"trackDivisionId",
	"lineId",
	"isDelete",
	"createTime",
	"updateTime",
	"operator"
];

function create() {
  return {};
}

workshopInfo.columnsArray=columnsArray;
workshopInfo.create=create;
module.exports=workshopInfo;