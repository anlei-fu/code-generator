let systemDictionary = {
	name: "systemDictionary",
	description: "",
	columns: {
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
		remark: {
			name: "remark",
			description: "字典备注",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		sortNum: {
			name: "sortNum",
			description: "字典排序",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		type: {
			name: "type",
			description: "字典类型",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		value: {
			name: "value",
			description: "字典值",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		}
	}
};

let columnsArray = [
	"id",
	"remark",
	"sortNum",
	"type",
	"value"
];

function create() {
  return {};
}

systemDictionary.columnsArray=columnsArray;
systemDictionary.create=create;
module.exports=systemDictionary;