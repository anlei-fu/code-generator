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
        length: null
      }
    },
    deductTime: {
      name: "deductTime",
      description: "扣除时间",
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
        length: null
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
  amount: 273,
  deductTime: 170,
  id: 306,
  price: 541,
  taskId: 776
};
}

userDeductRecord.columnsArray=columnsArray;
userDeductRecord.create=create;
module.exports=userDeductRecord;