let userConsumeRecord = {
	name: "userConsumeRecord",
	description: "",
	columns: {
		accountId: {
			name: "accountId",
			description: "账户编号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		consumeAfter: {
			name: "consumeAfter",
			description: "消费后剩余",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		consumeAmount: {
			name: "consumeAmount",
			description: "消费份数",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		consumeBefore: {
			name: "consumeBefore",
			description: "消费前剩余",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		consumeType: {
			name: "consumeType",
			description: "消费类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		contractId: {
			name: "contractId",
			description: "合同编号",
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
		}
	}
};

let columnsArray = [
	"accountId",
	"consumeAfter",
	"consumeAmount",
	"consumeBefore",
	"consumeType",
	"contractId",
	"createTime",
	"id",
	"remark"
];

function create() {
  return {};
}

userConsumeRecord.columnsArray=columnsArray;
userConsumeRecord.create=create;
module.exports=userConsumeRecord;