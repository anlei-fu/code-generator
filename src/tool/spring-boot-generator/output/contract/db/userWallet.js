let userWallet = {
	name: "userWallet",
	description: "",
	columns: {
		companyBalance: {
			name: "companyBalance",
			description: "企业余额(份数)",
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
		personBalance: {
			name: "personBalance",
			description: "个人余额(份数)",
			nullable: true,
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
	"companyBalance",
	"createTime",
	"id",
	"personBalance",
	"userId"
];

function create() {
  return {};
}

userWallet.columnsArray=columnsArray;
userWallet.create=create;
module.exports=userWallet;