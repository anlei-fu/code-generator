let contractNotaryRecord = {
	name: "contractNotaryRecord",
	description: "",
	columns: {
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
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		notaryChannel: {
			name: "notaryChannel",
			description: "公证渠道",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		notaryEndTime: {
			name: "notaryEndTime",
			description: "公证完成时间",
			nullable: true,
			type: {
				name: "datetime"
			}
		},
		notaryStartTime: {
			name: "notaryStartTime",
			description: "公证发起时间",
			nullable: true,
			type: {
				name: "datetime"
			}
		},
		notaryStatus: {
			name: "notaryStatus",
			description: "公证状态",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		proposer: {
			name: "proposer",
			description: "公证申请人",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"contractId",
	"createTime",
	"id",
	"notaryChannel",
	"notaryEndTime",
	"notaryStartTime",
	"notaryStatus",
	"proposer"
];

function create() {
  return {};
}

contractNotaryRecord.columnsArray=columnsArray;
contractNotaryRecord.create=create;
module.exports=contractNotaryRecord;