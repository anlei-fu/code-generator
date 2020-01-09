let workareaInfo = {
	name: "workareaInfo",
	description: "线路工区",
	columns: {
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
			description: "工区名称",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
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
			description: "工区简称",
			nullable: false,
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
		},
		workshopId: {
			name: "workshopId",
			description: "线路车间编号",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"createTime",
	"fullName",
	"id",
	"inputCode",
	"isDelete",
	"operator",
	"shortName",
	"updateTime",
	"workshopId"
];

function create() {
  return {};
}

workareaInfo.columnsArray=columnsArray;
workareaInfo.create=create;
module.exports=workareaInfo;