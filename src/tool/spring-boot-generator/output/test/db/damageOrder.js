let damageOrder = {
  name: "damageOrder",
  description: "伤损单",
  columns: {
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
    workareaId: {
      name: "workareaId",
      description: "探伤工区",
      nullable: true,
      type: {
        name: "int",
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
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: false,
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
    },
    updateTime: {
      name: "updateTime",
      description: "更新时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    }
  }
};

let columnsArray = [
  "orderNo",
  "workareaId",
  "submitStaff",
  "submitTime",
  "isDelete",
  "createTime",
  "updateTime"
];

function create() {
  return {
  orderNo: "伤损单号527",
  workareaId: 993,
  submitStaff: 195,
  submitTime: "2019-11-23 1:3:35",
  isDelete: 459,
  createTime: "2019-12-23 1:3:35",
  updateTime: "2019-12-23 1:3:35"
};
}

damageOrder.columnsArray=columnsArray;
damageOrder.create=create;
module.exports=damageOrder;