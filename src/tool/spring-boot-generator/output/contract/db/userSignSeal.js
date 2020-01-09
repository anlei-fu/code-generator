let userSignSeal = {
	name: "userSignSeal",
	description: "",
	columns: {
		belongId: {
			name: "belongId",
			description: "签章归属编号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		belongType: {
			name: "belongType",
			description: "签章归属类型",
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
		signName: {
			name: "signName",
			description: "签章名称",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		signPic: {
			name: "signPic",
			description: "签章图片",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		userId: {
			name: "userId",
			description: "创建人编号",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"belongId",
	"belongType",
	"createTime",
	"id",
	"signName",
	"signPic",
	"userId"
];

function create() {
  return {};
}

userSignSeal.columnsArray=columnsArray;
userSignSeal.create=create;
module.exports=userSignSeal;