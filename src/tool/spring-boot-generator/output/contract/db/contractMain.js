let contractMain = {
	name: "contractMain",
	description: "",
	columns: {
		contractPrice: {
			name: "contractPrice",
			description: "合同价格",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		contractState: {
			name: "contractState",
			description: "合同状态",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		contractTitle: {
			name: "contractTitle",
			description: "合同标题",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		contractType: {
			name: "contractType",
			description: "合同类型",
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
		effectTime: {
			name: "effectTime",
			description: "合同生效时间",
			nullable: true,
			type: {
				name: "datetime"
			}
		},
		expireTime: {
			name: "expireTime",
			description: "合同失效时间",
			nullable: true,
			type: {
				name: "datetime"
			}
		},
		id: {
			name: "id",
			description: "合同编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		rawContractFile: {
			name: "rawContractFile",
			description: "原始合同文件",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		rawContractHash: {
			name: "rawContractHash",
			description: "原始合同Hash",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		signContractFile: {
			name: "signContractFile",
			description: "签约合同文件",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		signContractHash: {
			name: "signContractHash",
			description: "签约合同Hash",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		signExpireTime: {
			name: "signExpireTime",
			description: "签约截止日期",
			nullable: true,
			type: {
				name: "datetime"
			}
		},
		userId: {
			name: "userId",
			description: "合同发起人",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		validPeriod: {
			name: "validPeriod",
			description: "合同有效期",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"contractPrice",
	"contractState",
	"contractTitle",
	"contractType",
	"createTime",
	"effectTime",
	"expireTime",
	"id",
	"rawContractFile",
	"rawContractHash",
	"signContractFile",
	"signContractHash",
	"signExpireTime",
	"userId",
	"validPeriod"
];

function create() {
  return {};
}

contractMain.columnsArray=columnsArray;
contractMain.create=create;
module.exports=contractMain;