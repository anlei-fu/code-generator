let userDeductRecord = {
  name: "userDeductRecord",
  description: "用户消费记录",
  columns: {
    amount: {
      name: "amount",
      description: "数量",
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    deductTime: {
      name: "deductTime",
      description: "扣除时间",
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
    price: {
      name: "price",
      description: "单价",
      nullable: false,
      type: {
        name: "float"
      }
    },
    taskId: {
      name: "taskId",
      description: "任务id",
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
  "deductTime",
  "id",
  "price",
  "taskId"
];

function create() {
  return {
  amount: 26,
  deductTime: 135,
  id: 970,
  price: 553,
  taskId: 161
};
}

userDeductRecord.columnsArray=columnsArray;
userDeductRecord.create=create;
module.exports=userDeductRecord;