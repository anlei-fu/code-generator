let systemContractTemplate = {
	name: "systemContractTemplate",
	description: "",
	columns: {
		contractFile: {
			name: "contractFile",
			description: "合同内容",
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
		contractType: {
			name: "contractType",
			description: "合同分类",
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
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"contractFile",
	"contractName",
	"contractType",
	"createTime",
	"id"
];

function create() {
  return {};
}

systemContractTemplate.columnsArray=columnsArray;
systemContractTemplate.create=create;
module.exports=systemContractTemplate;