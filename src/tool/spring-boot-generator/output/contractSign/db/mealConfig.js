let mealConfig = {
  name: "mealConfig",
  description: "",
  columns: {
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
    remark: {
      name: "remark",
      description: "套餐备注",
      nullable: true,
      type: {
        name: "varchar",
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
  id: 25,
  mealName: "套餐名称244",
  mealType: 155,
  remark: "套餐备注726",
  price: 151,
  discount: 604,
  contracts: 648,
  status: 151,
  createTime: "2019-11-23 1:2:20"
};
}

mealConfig.columnsArray=columnsArray;
mealConfig.create=create;
module.exports=mealConfig;