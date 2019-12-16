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
        length: 11
      }
    },
    orderNo: {
      name: "orderNo",
      description: "伤损单号",
      isPk: true,
      nullable: false,
      type: {
        name: "varchar",
        length: 32
      }
    },
    submitStaff: {
      name: "submitStaff",
      description: "提交人",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
        length: 11
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
  createTime: "2019-12-16 2:3:41",
  isDelete: 81,
  orderNo: "伤损单号758",
  submitStaff: 45,
  submitTime: "2019-12-23 2:3:41",
  updateTime: "2020-1-16 2:3:41",
  workareaId: 553
};
}

damageOrder.columnsArray=columnsArray;
damageOrder.create=create;
module.exports=damageOrder;