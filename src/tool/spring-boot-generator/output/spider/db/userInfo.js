let userInfo = {
	name: "userInfo",
	description: "用户信息",
	columns: {
		id: {
			name: "id",
			description: "",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		phoneNo: {
			name: "phoneNo",
			description: "电话",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		email: {
			name: "email",
			description: "邮箱",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		password: {
			name: "password",
			description: "密码",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		lastLoginIp: {
			name: "lastLoginIp",
			description: "最后登录ip",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		lastLoginTime: {
			name: "lastLoginTime",
			description: "最后登陆时间",
			nullable: true,
			type: {
				name: "bigint",
				length: null
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
	"phoneNo",
	"email",
	"password",
	"lastLoginIp",
	"lastLoginTime",
	"createTime"
];

function create() {
  return {};
}

userInfo.columnsArray=columnsArray;
userInfo.create=create;
module.exports=userInfo;