let mealConfig = {
	name: "mealConfig",
	description: "",
	columns: {
		contracts: {
			name: "contracts",
			description: "合同份数",
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
		discount: {
			name: "discount",
			description: "套餐折扣",
			nullable: true,
			type: {
				name: "float"
			}
		},
		id: {
			name: "id",
			description: "套餐编号",
			isPk: true,
			autoIncrement: true,
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		mealName: {
			name: "mealName",
			description: "套餐名称",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		mealType: {
			name: "mealType",
			description: "套餐类型",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		},
		price: {
			name: "price",
			description: "套餐价格",
			nullable: true,
			type: {
				name: "float"
			}
		},
		remark: {
			name: "remark",
			description: "套餐备注",
			nullable: true,
			type: {
				name: "varchar",
				length: null
			}
		},
		status: {
			name: "status",
			description: "套餐状态",
			nullable: true,
			type: {
				name: "int",
				length: null
			}
		}
	}
};

let columnsArray = [
	"contracts",
	"createTime",
	"discount",
	"id",
	"mealName",
	"mealType",
	"price",
	"remark",
	"status"
];

function create() {
  return {};
}

mealConfig.columnsArray=columnsArray;
mealConfig.create=create;
module.exports=mealConfig;