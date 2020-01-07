let adminInfo = {
	name: "adminInfo",
	description: "管理员",
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
		account: {
			name: "account",
			description: "账号",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		password: {
			name: "password",
			description: "密码",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		level: {
			name: "level",
			description: "权限等级",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"id",
	"account",
	"password",
	"level"
];

function create() {
  return {};
}

adminInfo.columnsArray=columnsArray;
adminInfo.create=create;
module.exports=adminInfo;