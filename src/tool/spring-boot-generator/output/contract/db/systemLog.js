let systemLog = {
	name: "systemLog",
	description: "",
	columns: {
		content: {
			name: "content",
			description: "日志内容",
			nullable: true,
			type: {
				name: "varchar",
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
		module: {
			name: "module",
			description: "模块名称",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		summary: {
			name: "summary",
			description: "日志摘要",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		}
	}
};

let columnsArray = [
	"content",
	"createTime",
	"id",
	"module",
	"summary"
];

function create() {
  return {};
}

systemLog.columnsArray=columnsArray;
systemLog.create=create;
module.exports=systemLog;