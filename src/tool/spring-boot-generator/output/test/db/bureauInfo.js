let bureauInfo = {
  name: "bureauInfo",
  description: "铁路局信息",
  columns: {
    bureauCode: {
      name: "bureauCode",
      description: "铁路局编码",
      nullable: false,
      type: {
        name: "varchar",
        length: null
      }
    },
    bureauName: {
      name: "bureauName",
      description: "铁路局名称",
      nullable: false,
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
    id: {
      name: "id",
      description: "铁路局编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    inputCode: {
      name: "inputCode",
      description: "输入代码",
      nullable: true,
      type: {
        name: "varchar",
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
  "bureauCode",
  "bureauName",
  "createTime",
  "id",
  "inputCode",
  "isDelete",
  "operator",
  "updateTime"
];

function create() {
  return {
  bureauCode: "铁路局编码1",
  bureauName: "铁路局名称504",
  createTime: "2019-12-18 1:4:50",
  id: 216,
  inputCode: "输入代码328",
  isDelete: 882,
  operator: 999,
  updateTime: "2019-12-26 1:4:50"
};
}

bureauInfo.columnsArray=columnsArray;
bureauInfo.create=create;
module.exports=bureauInfo;