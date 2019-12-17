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
        length: 128
      }
    },
    damageNo: {
      name: "damageNo",
      description: "伤损类型编码",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    damageType: {
      name: "damageType",
      description: "伤损类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
        length: 11
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
    status: {
      name: "status",
      description: "状态",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
  createTime: "2019-11-17 2:3:19",
  damageDesc: "伤损类型描述513",
  damageNo: "伤损类型编码644",
  damageType: 801,
  id: 953,
  isDelete: 248,
  operator: 968,
  sortNum: "排序编号990",
  status: 325,
  updateTime: "2019-12-24 2:3:19"
};
}

damageType.columnsArray=columnsArray;
damageType.create=create;
module.exports=damageType;