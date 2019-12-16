let bureauLineOrder = {
  name: "bureauLineOrder",
  description: "铁路局线路",
  columns: {
    bureauId: {
      name: "bureauId",
      description: "铁路局编号",
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
    lineId: {
      name: "lineId",
      description: "线路编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    operator: {
      name: "operator",
      description: "操作人",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    sortNum: {
      name: "sortNum",
      description: "排序编号",
      nullable: true,
      type: {
        name: "varchar",
        length: 16
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
  "bureauId",
  "createTime",
  "id",
  "lineId",
  "operator",
  "sortNum",
  "updateTime"
];

function create() {
  return {
  bureauId: 238,
  createTime: "2020-1-16 2:3:41",
  id: 619,
  lineId: 769,
  operator: 777,
  sortNum: "排序编号346",
  updateTime: "2019-12-23 2:3:41"
};
}

bureauLineOrder.columnsArray=columnsArray;
bureauLineOrder.create=create;
module.exports=bureauLineOrder;