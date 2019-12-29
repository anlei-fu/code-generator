let mealConfig = {
  name: "mealConfig",
  columns: {
    id: {
      name: "id",
      description: "套餐编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    mealName: {
      name: "mealName",
      description: "套餐名称",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    mealType: {
      name: "mealType",
      description: "套餐类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    remark: {
      name: "remark",
      description: "套餐备注",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
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
    discount: {
      name: "discount",
      description: "套餐折扣",
      nullable: true,
      type: {
        name: "float"
      }
    },
    contracts: {
      name: "contracts",
      description: "合同份数",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    status: {
      name: "status",
      description: "套餐状态",
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
  "mealName",
  "mealType",
  "remark",
  "price",
  "discount",
  "contracts",
  "status",
  "createTime"
];

function create() {
  return {
  id: 182,
  mealName: "套餐名称161",
  mealType: 49,
  remark: "套餐备注700",
  price: 829,
  discount: 861,
  contracts: 584,
  status: 216,
  createTime: "2019-11-22 1:5:48"
};
}

mealConfig.columnsArray=columnsArray;
mealConfig.create=create;
module.exports=mealConfig;