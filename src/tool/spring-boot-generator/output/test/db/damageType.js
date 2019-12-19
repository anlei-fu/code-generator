let damageType = {
  name: "damageType",
  description: "伤损类型",
  columns: {
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "datetime"
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
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: false,
      type: {
        name: "int",
        length: null
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
  "createTime",
  "damageDesc",
  "damageNo",
  "damageType",
  "id",
  "isDelete",
  "operator",
  "sortNum",
  "status",
  "updateTime"
];

function create() {
  return {
  createTime: "2019-12-18 1:4:50",
  damageDesc: "伤损类型描述647",
  damageNo: "伤损类型编码378",
  damageType: 574,
  id: 285,
  isDelete: 740,
  operator: 836,
  sortNum: "排序编号862",
  status: 339,
  updateTime: "2019-11-19 1:4:50"
};
}

damageType.columnsArray=columnsArray;
damageType.create=create;
module.exports=damageType;