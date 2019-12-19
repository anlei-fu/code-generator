let damageOrder = {
  name: "damageOrder",
  description: "伤损单",
  columns: {
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    orderNo: {
      name: "orderNo",
      description: "伤损单号",
      isPk: true,
      nullable: false,
      type: {
        name: "varchar",
        length: null
      }
    },
    submitStaff: {
      name: "submitStaff",
      description: "提交人",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    submitTime: {
      name: "submitTime",
      description: "提交时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    updateTime: {
      name: "updateTime",
      description: "更新时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    workareaId: {
      name: "workareaId",
      description: "探伤工区",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    }
  }
};

let columnsArray = [
  "createTime",
  "isDelete",
  "orderNo",
  "submitStaff",
  "submitTime",
  "updateTime",
  "workareaId"
];

function create() {
  return {
  createTime: "2019-12-19 1:4:50",
  isDelete: 839,
  orderNo: "伤损单号216",
  submitStaff: 868,
  submitTime: "2019-12-19 1:4:50",
  updateTime: "2020-1-19 1:4:50",
  workareaId: 459
};
}

damageOrder.columnsArray=columnsArray;
damageOrder.create=create;
module.exports=damageOrder;