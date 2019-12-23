let userPurchaseRecord = {
  name: "userPurchaseRecord",
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
    userId: {
      name: "userId",
      description: "用户编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    contractType: {
      name: "contractType",
      description: "合同类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    mealId: {
      name: "mealId",
      description: "套餐编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    mealPrice: {
      name: "mealPrice",
      description: "套餐价格",
      nullable: true,
      type: {
        name: "float"
      }
    },
    contractCount: {
      name: "contractCount",
      description: "套餐合同份数",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    purchaseBefore: {
      name: "purchaseBefore",
      description: "合同份数(购买前)",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    purchaseAfter: {
      name: "purchaseAfter",
      description: "合同份数(购买后)",
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
    }
  }
};

let columnsArray = [
  "id",
  "userId",
  "contractType",
  "mealId",
  "mealPrice",
  "contractCount",
  "purchaseBefore",
  "purchaseAfter",
  "createTime"
];

function create() {
  return {
  id: 311,
  userId: 952,
  contractType: 516,
  mealId: 360,
  mealPrice: 85,
  contractCount: 687,
  purchaseBefore: 87,
  purchaseAfter: 576,
  createTime: "2019-12-30 1:2:20"
};
}

userPurchaseRecord.columnsArray=columnsArray;
userPurchaseRecord.create=create;
module.exports=userPurchaseRecord;