let userCompanyInfo = {
	name: "userCompanyInfo",
	description: "",
	columns: {
		authFile: {
			name: "authFile",
			description: "授权文件",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		authIdNo: {
			name: "authIdNo",
			description: "授权人身份证号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		authorizer: {
			name: "authorizer",
			description: "授权签署人",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		companyName: {
			name: "companyName",
			description: "企业名称",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		contactAddress: {
			name: "contactAddress",
			description: "企业地址",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		contactPhone: {
			name: "contactPhone",
			description: "法人联系电话",
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
			description: "企业编号",
			isPk: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		idCardNo: {
			name: "idCardNo",
			description: "法人身份证号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		idCardPicBack: {
			name: "idCardPicBack",
			description: "法人身份证人像照",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		idCardPicFront: {
			name: "idCardPicFront",
			description: "法人身份证国徽照",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		legalPerson: {
			name: "legalPerson",
			description: "企业法人",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		licenseNo: {
			name: "licenseNo",
			description: "营业执照号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		licensePicFront: {
			name: "licensePicFront",
			description: "企业营业执照",
			nullable: true,
			type: {
				name: "varchar",
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
		},
		verifyEndTime: {
			name: "verifyEndTime",
			description: "认证完成时间",
			nullable: true,
			type: {
				name: "datetime"
			}
		},
		verifyStartTime: {
			name: "verifyStartTime",
			description: "认证开始时间",
			nullable: true,
			type: {
				name: "datetime"
			}
		},
		verifyState: {
			name: "verifyState",
			description: "认证状态",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"authFile",
	"authIdNo",
	"authorizer",
	"companyName",
	"contactAddress",
	"contactPhone",
	"createTime",
	"id",
	"idCardNo",
	"idCardPicBack",
	"idCardPicFront",
	"legalPerson",
	"licenseNo",
	"licensePicFront",
	"userId",
	"verifyEndTime",
	"verifyStartTime",
	"verifyState"
];

function create() {
  return {};
}

userCompanyInfo.columnsArray=columnsArray;
userCompanyInfo.create=create;
module.exports=userCompanyInfo;