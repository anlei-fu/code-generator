let userContactInfo = {
	name: "userContactInfo",
	description: "",
	columns: {
		contractEmail: {
			name: "contractEmail",
			description: "联系邮箱",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		contractName: {
			name: "contractName",
			description: "联系人",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		contractPhone: {
			name: "contractPhone",
			description: "联系电话",
			nullable: true,
			type: {
				name: "varchar",
				length: null
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
		userId: {
			name: "userId",
			description: "用户编号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"contractEmail",
	"contractName",
	"contractPhone",
	"id",
	"userId"
];

function create() {
  return {};
}

userContactInfo.columnsArray=columnsArray;
userContactInfo.create=create;
module.exports=userContactInfo;