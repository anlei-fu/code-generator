let receiptAccount = {
	name: "receiptAccount",
	description: "",
	columns: {
		accountName: {
			name: "accountName",
			description: "账号名称",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		accountType: {
			name: "accountType",
			description: "账号类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		authRedirectUrl: {
			name: "authRedirectUrl",
			description: "API授权跳转URL",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		balance: {
			name: "balance",
			description: "账户余额",
			nullable: true,
			type: {
				name: "float"
			}
		},
		certPath: {
			name: "certPath",
			description: "证书路径",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		certPwd: {
			name: "certPwd",
			description: "证书密码",
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
		merchantNo: {
			name: "merchantNo",
			description: "商户编号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		payCallbackUrl: {
			name: "payCallbackUrl",
			description: "支付结果回调URL",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		payRedirectUrl: {
			name: "payRedirectUrl",
			description: "支付完跳转URL",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		platAppId: {
			name: "platAppId",
			description: "支付平台ID",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		platAppSecret: {
			name: "platAppSecret",
			description: "支付平台Secret",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		privateKey: {
			name: "privateKey",
			description: "解密验签私钥",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		publicKey: {
			name: "publicKey",
			description: "加密公钥",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		refundCallbackUrl: {
			name: "refundCallbackUrl",
			description: "退款结果回调URL",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		remark: {
			name: "remark",
			description: "备注",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		signKey: {
			name: "signKey",
			description: "签名KEY",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		status: {
			name: "status",
			description: "状态",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"accountName",
	"accountType",
	"authRedirectUrl",
	"balance",
	"certPath",
	"certPwd",
	"createTime",
	"id",
	"merchantNo",
	"payCallbackUrl",
	"payRedirectUrl",
	"platAppId",
	"platAppSecret",
	"privateKey",
	"publicKey",
	"refundCallbackUrl",
	"remark",
	"signKey",
	"status"
];

function create() {
  return {};
}

receiptAccount.columnsArray=columnsArray;
receiptAccount.create=create;
module.exports=receiptAccount;