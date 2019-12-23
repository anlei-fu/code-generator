let damageType = {
  name: "damageType",
  description: "伤损类型",
  columns: {
    id: {
      name: "id",
      description: "伤损类型编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    damageNo: {
      name: "damageNo",
      description: "伤损类型编码",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    damageType: {
      name: "damageType",
      description: "伤损类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    damageDesc: {
      name: "damageDesc",
      description: "伤损类型描述",
      nullable: true,
      type: {
        name: "varchar",
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
    status: {
      name: "status",
      description: "状态",
      nullable: true,
      type: {
        name: "int",
        length: null
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
  "damageNo",
  "damageType",
  "damageDesc",
  "sortNum",
  "status",
  "isDelete",
  "createTime",
  "updateTime",
  "operator"
];

function create() {
  return {
  id: 360,
  damageNo: "伤损类型编码18",
  damageType: 485,
  damageDesc: "伤损类型描述602",
  sortNum: "排序编号593",
  status: 468,
  isDelete: 673,
  createTime: "2019-12-22 1:3:35",
  updateTime: "2019-11-23 1:3:35",
  operator: 425
};
}

damageType.columnsArray=columnsArray;
damageType.create=create;
module.exports=damageType;