let trackDivisionInfo = {
	name: "trackDivisionInfo",
	description: "工务段信息",
	columns: {
		bureauId: {
			name: "bureauId",
			description: "铁路局编号",
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
		fullName: {
			name: "fullName",
			description: "工务段名称",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		id: {
			name: "id",
			description: "编号",
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
			description: "工务段简称",
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
	"bureauId",
	"createTime",
	"fullName",
	"id",
	"inputCode",
	"isDelete",
	"operator",
	"shortName",
	"updateTime"
];

function create() {
  return {};
}

trackDivisionInfo.columnsArray=columnsArray;
trackDivisionInfo.create=create;
module.exports=trackDivisionInfo;