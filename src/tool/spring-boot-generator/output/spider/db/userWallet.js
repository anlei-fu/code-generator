let userWallet = {
	name: "userWallet",
	description: "用户钱包",
	columns: {
		createTime: {
			name: "createTime",
			description: "创建时间",
			nullable: true,
			type: {
				name: "bigint",
				length: null
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
		total: {
			name: "total",
			description: "余额",
			nullable: false,
			type: {
				name: "float"
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
		}
	}
};

let columnsArray = [
	"createTime",
	"id",
	"total",
	"userId"
];

function create() {
  return {
	createTime: 259,
	id: 72,
	total: 690,
	userId: "用户id834"
};
}

userWallet.columnsArray=columnsArray;
userWallet.create=create;
module.exports=userWallet;