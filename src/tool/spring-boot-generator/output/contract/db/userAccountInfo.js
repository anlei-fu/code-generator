let userAccountInfo = {
	name: "userAccountInfo",
	description: "",
	columns: {
		accountType: {
			name: "accountType",
			description: "账号类: 1-手机 2-邮箱 3-支付宝小程序",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		alipayMpid: {
			name: "alipayMpid",
			description: "支付宝小程序UID",
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
			description: "用户编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		lastLoginIp: {
			name: "lastLoginIp",
			description: "上次登录IP",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		lastLoginTime: {
			name: "lastLoginTime",
			description: "上次登录时间",
			nullable: true,
			type: {
				name: "datetime"
			}
		},
		loginPwd: {
			name: "loginPwd",
			description: "登录密码",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		userName: {
			name: "userName",
			description: "登录账号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		verifyState: {
			name: "verifyState",
			description: "实名状态",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"accountType",
	"alipayMpid",
	"createTime",
	"id",
	"lastLoginIp",
	"lastLoginTime",
	"loginPwd",
	"userName",
	"verifyState"
];

function create() {
  return {};
}

userAccountInfo.columnsArray=columnsArray;
userAccountInfo.create=create;
module.exports=userAccountInfo;