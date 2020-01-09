let contractSignRecord = {
	name: "contractSignRecord",
	description: "",
	columns: {
		contractId: {
			name: "contractId",
			description: "合同编号",
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
		signAfterFile: {
			name: "signAfterFile",
			description: "签署后合同",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		signAfterHash: {
			name: "signAfterHash",
			description: "签署后Hash",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		signBeforeFile: {
			name: "signBeforeFile",
			description: "签署前合同",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		signBeforeHash: {
			name: "signBeforeHash",
			description: "签署前Hash",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		signId: {
			name: "signId",
			description: "签约编号",
			nullable: true,
			type: {
				name: "int",
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
		}
	}
};

let columnsArray = [
	"contractId",
	"createTime",
	"id",
	"signAfterFile",
	"signAfterHash",
	"signBeforeFile",
	"signBeforeHash",
	"signId",
	"signPerson"
];

function create() {
  return {};
}

contractSignRecord.columnsArray=columnsArray;
contractSignRecord.create=create;
module.exports=contractSignRecord;