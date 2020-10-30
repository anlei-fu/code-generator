let siteAccount = {
	name: "siteAccount",
	description: "site account info",
	columns: {
		id: {
			name: "id",
			description: "",
			isPk: true,
			autoIncrement: true,
			rawName: "id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		nickName: {
			name: "nickName",
			description: "",
			rawName: "nick_name",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		description: {
			name: "description",
			description: "description  of account",
			rawName: "description",
			nullable: true,
			type: {
				name: "varchar",
				length: 300
			}
		},
		loginType: {
			name: "loginType",
			description: "",
			defaultValue: "",
			rawName: "login_type",
			nullable: false,
			type: {
				name: "smallint",
				length: 6
			}
		},
		siteId: {
			name: "siteId",
			description: "the site that account belong",
			rawName: "site_id",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		phone: {
			name: "phone",
			description: "the phone of account",
			rawName: "phone",
			nullable: true,
			type: {
				name: "varchar",
				length: 11
			}
		},
		email: {
			name: "email",
			description: "the email of account",
			rawName: "email",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		password: {
			name: "password",
			description: "the password of account",
			rawName: "password",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		lastLoginTime: {
			name: "lastLoginTime",
			description: "the time that account last login",
			rawName: "last_login_time",
			nullable: true,
			type: {
				name: "timestamp"
			}
		},
		lastLoginIp: {
			name: "lastLoginIp",
			description: "the ip that the account last login",
			rawName: "last_login_ip",
			nullable: true,
			type: {
				name: "varchar",
				length: 45
			}
		},
		currentUseCount: {
			name: "currentUseCount",
			description: "the current use count of the account ",
			rawName: "current_use_count",
			nullable: true,
			type: {
				name: "int",
				length: 11
			}
		},
		blockCurrentCount: {
			name: "blockCurrentCount",
			description: "",
			defaultValue: "",
			rawName: "block_current_count",
			nullable: false,
			type: {
				name: "int",
				length: 11
			}
		},
		blockTimeoutTime: {
			name: "blockTimeoutTime",
			description: "",
			rawName: "block_timeout_time",
			nullable: true,
			type: {
				name: "timestamp"
			}
		},
		enableStatus: {
			name: "enableStatus",
			description: "enable status",
			defaultValue: "enable status",
			rawName: "enable_status",
			nullable: true,
			type: {
				name: "smallint",
				length: 6
			}
		},
		createTime: {
			name: "createTime",
			description: "create time",
			defaultValue: "create time",
			rawName: "create_time",
			nullable: false,
			type: {
				name: "timestamp"
			}
		}
	},
	rawName: "site_account",
	primaryColumn: "id",
	nameColumn: {
		name: "nickName",
		score: 2.235155156413287,
		content: "nick_name",
		weight: 1,
		totalTokenCount: 2
	}
};

let columnsArray = [
	"id",
	"nickName",
	"description",
	"loginType",
	"siteId",
	"phone",
	"email",
	"password",
	"lastLoginTime",
	"lastLoginIp",
	"currentUseCount",
	"blockCurrentCount",
	"blockTimeoutTime",
	"enableStatus",
	"createTime"
];

function create() {
  return {};
}

siteAccount.columnsArray=columnsArray;
siteAccount.create=create;
module.exports.siteAccount=siteAccount;