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
        length: 16
      }
    },
    bureauName: {
      name: "bureauName",
      description: "铁路局名称",
      nullable: false,
      type: {
        name: "varchar",
        length: 64
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
        length: 11
      }
    },
    inputCode: {
      name: "inputCode",
      description: "输入代码",
      nullable: true,
      type: {
        name: "varchar",
        length: 16
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
  bureauCode: "铁路局编码889",
  bureauName: "铁路局名称914",
  createTime: "2019-11-16 2:3:41",
  id: 929,
  inputCode: "输入代码692",
  isDelete: 859,
  operator: 323,
  updateTime: "2019-12-16 2:3:41"
};
}

bureauInfo.columnsArray=columnsArray;
bureauInfo.create=create;
module.exports=bureauInfo;