let bureauLineOrder = {
  name: "bureauLineOrder",
  description: "铁路局线路",
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
    bureauId: {
      name: "bureauId",
      description: "铁路局编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    lineId: {
      name: "lineId",
      description: "线路编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    sortNum: {
      name: "sortNum",
      description: "排序编号",
      nullable: true,
      type: {
        name: "varchar",
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
    },
    operator: {
      name: "operator",
      description: "操作人",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    }
  }
};

let columnsArray = [
  "id",
  "bureauId",
  "lineId",
  "sortNum",
  "createTime",
  "updateTime",
  "operator"
];

function create() {
  return {
  id: 208,
  bureauId: 405,
  lineId: 258,
  sortNum: "排序编号506",
  createTime: "2019-12-30 1:3:35",
  updateTime: "2019-12-30 1:3:35",
  operator: 556
};
}

bureauLineOrder.columnsArray=columnsArray;
bureauLineOrder.create=create;
module.exports=bureauLineOrder;