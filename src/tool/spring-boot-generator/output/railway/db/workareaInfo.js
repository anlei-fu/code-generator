let workareaInfo = {
	name: "workareaInfo",
	description: "线路工区",
	columns: {
		id: {
			name: "id",
			description: "工区编号",
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
			description: "工区名称",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		shortName: {
			name: "shortName",
			description: "工区简称",
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
		workshopId: {
			name: "workshopId",
			description: "线路车间编号",
			nullable: false,
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
	"workshopId",
	"isDelete",
	"createTime",
	"updateTime",
	"operator"
];

function create() {
  return {};
}

workareaInfo.columnsArray=columnsArray;
workareaInfo.create=create;
module.exports=workareaInfo;