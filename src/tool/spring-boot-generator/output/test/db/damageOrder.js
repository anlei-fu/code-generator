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
  createTime: "2020-1-17 2:3:19",
  isDelete: 938,
  orderNo: "伤损单号444",
  submitStaff: 21,
  submitTime: "2019-11-17 2:3:19",
  updateTime: "2019-12-17 2:3:19",
  workareaId: 263
};
}

damageOrder.columnsArray=columnsArray;
damageOrder.create=create;
module.exports=damageOrder;