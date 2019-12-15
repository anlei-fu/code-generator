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
        length: 30
      }
    },
    chargeTime: {
      name: "chargeTime",
      description: "充值时间",
      nullable: true,
      type: {
        name: "bigint",
        length: 64
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
        length: 11
      }
    },
    orderId: {
      name: "orderId",
      description: "订单id",
      nullable: false,
      type: {
        name: "varchar",
        length: 45
      }
    },
    status: {
      name: "status",
      description: "支付状态",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    userId: {
      name: "userId",
      description: "用户id",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    way: {
      name: "way",
      description: "支付方式",
      nullable: false,
      type: {
        name: "int",
        length: 11
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
  amount: 15,
  chargeAccount: "支付账号330",
  chargeTime: 776,
  id: 315,
  orderId: "订单id622",
  status: 824,
  userId: 632,
  way: 613
};
}

userChargeRecord.columnsArray=columnsArray;
userChargeRecord.create=create;
module.exports=userChargeRecord;