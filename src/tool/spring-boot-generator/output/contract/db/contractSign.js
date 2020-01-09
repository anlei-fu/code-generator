let contractSign = {
	name: "contractSign",
	description: "",
	columns: {
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
			description: "签约编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		needPay: {
			name: "needPay",
			description: "需要付费",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		notifyCount: {
			name: "notifyCount",
			description: "通知次数",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		notifyEmail: {
			name: "notifyEmail",
			description: "通知邮箱",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		notifyPhone: {
			name: "notifyPhone",
			description: "通知号码",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		shortMsg: {
			name: "shortMsg",
			description: "私信内容",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		signIp: {
			name: "signIp",
			description: "签署IP",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		signPerson: {
			name: "signPerson",
			description: "签署人",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		signSort: {
			name: "signSort",
			description: "签署顺序",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		signStatus: {
			name: "signStatus",
			description: "签署状态",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		signSubject: {
			name: "signSubject",
			description: "签署主体",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		signTime: {
			name: "signTime",
			description: "签署时间",
			nullable: true,
			type: {
				name: "datetime"
			}
		},
		signUrl: {
			name: "signUrl",
			description: "签署URL",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		subjectType: {
			name: "subjectType",
			description: "主体类型",
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
	"createTime",
	"id",
	"needPay",
	"notifyCount",
	"notifyEmail",
	"notifyPhone",
	"shortMsg",
	"signIp",
	"signPerson",
	"signSort",
	"signStatus",
	"signSubject",
	"signTime",
	"signUrl",
	"subjectType",
	"userId"
];

function create() {
  return {};
}

contractSign.columnsArray=columnsArray;
contractSign.create=create;
module.exports=contractSign;