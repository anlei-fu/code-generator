let notaryChannel = {
	name: "notaryChannel",
	description: "",
	columns: {
		apiKey: {
			name: "apiKey",
			description: "接口key",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		apiUrl: {
			name: "apiUrl",
			description: "接口地址",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		channelName: {
			name: "channelName",
			description: "渠道名称",
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
			description: "渠道编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		remark: {
			name: "remark",
			description: "渠道备注",
			nullable: true,
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
		}
	}
};

let columnsArray = [
	"apiKey",
	"apiUrl",
	"channelName",
	"createTime",
	"id",
	"remark",
	"status"
];

function create() {
  return {};
}

notaryChannel.columnsArray=columnsArray;
notaryChannel.create=create;
module.exports=notaryChannel;