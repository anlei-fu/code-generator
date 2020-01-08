let bureauLineOrder = {
	name: "bureauLineOrder",
	description: "铁路局线路",
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
		lineId: {
			name: "lineId",
			description: "线路编号",
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
		sortNum: {
			name: "sortNum",
			description: "排序编号",
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
	"id",
	"lineId",
	"operator",
	"sortNum",
	"updateTime"
];

function create() {
  return {};
}

bureauLineOrder.columnsArray=columnsArray;
bureauLineOrder.create=create;
module.exports=bureauLineOrder;