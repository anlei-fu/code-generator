let userRealInfo = {
	name: "userRealInfo",
	description: "",
	columns: {
		idCardNo: {
			name: "idCardNo",
			description: "身份证号",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		idCardPicBack: {
			name: "idCardPicBack",
			description: "身份证人像照",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		idCardPicFront: {
			name: "idCardPicFront",
			description: "身份证国徽照",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		idCardPicHand: {
			name: "idCardPicHand",
			description: "身份证手持照",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		realName: {
			name: "realName",
			description: "用户姓名",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		userId: {
			name: "userId",
			description: "用户编号",
			isPk: true,
			nullable: false,
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
		}
	}
};

let columnsArray = [
	"idCardNo",
	"idCardPicBack",
	"idCardPicFront",
	"idCardPicHand",
	"realName",
	"userId",
	"verifyEndTime",
	"verifyStartTime"
];

function create() {
  return {};
}

userRealInfo.columnsArray=columnsArray;
userRealInfo.create=create;
module.exports=userRealInfo;