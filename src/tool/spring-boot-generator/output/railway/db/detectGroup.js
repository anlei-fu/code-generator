let detectGroup = {
	name: "detectGroup",
	description: "探伤班组信息",
	columns: {
		id: {
			name: "id",
			description: "班组编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		groupName: {
			name: "groupName",
			description: "班组名称",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		leaderId: {
			name: "leaderId",
			description: "班组组长",
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
	"groupName",
	"leaderId",
	"status",
	"isDelete",
	"createTime",
	"updateTime",
	"operator"
];

function create() {
  return {};
}

detectGroup.columnsArray=columnsArray;
detectGroup.create=create;
module.exports=detectGroup;