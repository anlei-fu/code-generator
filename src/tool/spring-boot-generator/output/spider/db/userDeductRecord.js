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
  amount: 16,
  deductTime: 392,
  id: 648,
  price: 96,
  taskId: 675
};
}

userDeductRecord.columnsArray=columnsArray;
userDeductRecord.create=create;
module.exports=userDeductRecord;