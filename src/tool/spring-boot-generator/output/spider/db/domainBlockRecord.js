let domainBlockRecord = {
	name: "domainBlockRecord",
	description: "屏蔽记录",
	columns: {
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
		domainId: {
			name: "domainId",
			description: "网站id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		workerId: {
			name: "workerId",
			description: "",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		taskId: {
			name: "taskId",
			description: "任务id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		userId: {
			name: "userId",
			description: "用户id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		remark: {
			name: "remark",
			description: "备注",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		blockTime: {
			name: "blockTime",
			description: "屏蔽时间",
			nullable: true,
			type: {
				name: "bigint",
				length: null
			}
		}
	}
};

let columnsArray = [
	"id",
	"domainId",
	"workerId",
	"taskId",
	"userId",
	"remark",
	"blockTime"
];

function create() {
  return {};
}

domainBlockRecord.columnsArray=columnsArray;
domainBlockRecord.create=create;
module.exports=domainBlockRecord;