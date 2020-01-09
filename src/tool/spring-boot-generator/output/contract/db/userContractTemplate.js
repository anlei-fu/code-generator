let userContractTemplate = {
	name: "userContractTemplate",
	description: "",
	columns: {
		belongId: {
			name: "belongId",
			description: "模板归属编号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		belongType: {
			name: "belongType",
			description: "模板归属类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		contractFile: {
			name: "contractFile",
			description: "合同文件",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		contractName: {
			name: "contractName",
			description: "合同名称",
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
		userId: {
			name: "userId",
			description: "创建人编号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"belongId",
	"belongType",
	"contractFile",
	"contractName",
	"createTime",
	"id",
	"userId"
];

function create() {
  return {};
}

userContractTemplate.columnsArray=columnsArray;
userContractTemplate.create=create;
module.exports=userContractTemplate;