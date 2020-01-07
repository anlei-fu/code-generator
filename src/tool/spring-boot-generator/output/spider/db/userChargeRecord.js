let userChargeRecord = {
	name: "userChargeRecord",
	description: "用户充值记录",
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
		userId: {
			name: "userId",
			description: "用户id",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		way: {
			name: "way",
			description: "支付方式",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		chargeAccount: {
			name: "chargeAccount",
			description: "支付账号",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		orderId: {
			name: "orderId",
			description: "订单id",
			nullable: false,
			type: {
				name: "varchar",
				length: null
			}
		},
		amount: {
			name: "amount",
			description: "数量",
			nullable: false,
			type: {
				name: "float"
			}
		},
		status: {
			name: "status",
			description: "支付状态",
			nullable: false,
			type: {
				name: "int",
				length: null
			}
		},
		chargeTime: {
			name: "chargeTime",
			description: "充值时间",
			nullable: true,
			type: {
				name: "bigint",
				length: null
			}
		}
	}
};

let columnsArray = [
	"id",
	"userId",
	"way",
	"chargeAccount",
	"orderId",
	"amount",
	"status",
	"chargeTime"
];

function create() {
  return {};
}

userChargeRecord.columnsArray=columnsArray;
userChargeRecord.create=create;
module.exports=userChargeRecord;