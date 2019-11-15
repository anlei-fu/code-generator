let userPurchaseRecord = {
  name: "userPurchaseRecord",
  columns: {
    id: {
      name: "id",
      description: "编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    userId: {
      name: "userId",
      description: "用户编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    contractType: {
      name: "contractType",
      description: "合同类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    mealId: {
      name: "mealId",
      description: "套餐编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
        length: 11
      }
    },
    purchaseBefore: {
      name: "purchaseBefore",
      description: "合同份数(购买前)",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    purchaseAfter: {
      name: "purchaseAfter",
      description: "合同份数(购买后)",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
  id: 54,
  userId: 46,
  contractType: 997,
  mealId: 455,
  mealPrice: 846,
  contractCount: 9,
  purchaseBefore: 938,
  purchaseAfter: 599,
  createTime: "2019-12-15 1:5:48"
};
}

userPurchaseRecord.columnsArray=columnsArray;
userPurchaseRecord.create=create;
module.exports=userPurchaseRecord;