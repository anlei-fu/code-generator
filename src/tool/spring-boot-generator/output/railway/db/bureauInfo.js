let bureauInfo = {
	name: "bureauInfo",
	description: "铁路局信息",
	columns: {
		id: {
			name: "id",
			description: "铁路局编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		bureauName: {
			name: "bureauName",
			description: "铁路局名称",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		bureauCode: {
			name: "bureauCode",
			description: "铁路局编码",
			nullable: false,
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
	"bureauName",
	"bureauCode",
	"inputCode",
	"isDelete",
	"createTime",
	"updateTime",
	"operator"
];

function create() {
  return {};
}

bureauInfo.columnsArray=columnsArray;
bureauInfo.create=create;
module.exports=bureauInfo;