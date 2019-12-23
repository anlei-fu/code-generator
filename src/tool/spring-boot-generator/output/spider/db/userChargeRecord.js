let userChargeRecord = {
  name: "userChargeRecord",
  description: "用户充值记录",
  columns: {
    amount: {
      name: "amount",
      description: "数量",
      nullable: false,
      type: {
        name: "float"
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
    chargeTime: {
      name: "chargeTime",
      description: "充值时间",
      nullable: true,
      type: {
        name: "bigint",
        length: null
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
    orderId: {
      name: "orderId",
      description: "订单id",
      nullable: false,
      type: {
        name: "varchar",
        length: null
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
    }
  }
};

let columnsArray = [
  "amount",
  "chargeAccount",
  "chargeTime",
  "id",
  "orderId",
  "status",
  "userId",
  "way"
];

function create() {
  return {
  amount: 610,
  chargeAccount: "支付账号361",
  chargeTime: 32,
  id: 13,
  orderId: "订单id346",
  status: 673,
  userId: 271,
  way: 529
};
}

userChargeRecord.columnsArray=columnsArray;
userChargeRecord.create=create;
module.exports=userChargeRecord;