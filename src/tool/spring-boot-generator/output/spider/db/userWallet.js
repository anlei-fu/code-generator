let userWallet = {
	name: "userWallet",
	description: "用户钱包",
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
		userId: {
			name: "userId",
			description: "用户id",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		total: {
			name: "total",
			description: "余额",
			nullable: false,
			type: {
				name: "float"
			}
		},
		createTime: {
			name: "createTime",
			description: "创建时间",
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
	"userId",
	"total",
	"createTime"
];

function create() {
  return {};
}

userWallet.columnsArray=columnsArray;
userWallet.create=create;
module.exports=userWallet;