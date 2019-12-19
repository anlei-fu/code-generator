let detectGroup = {
  name: "detectGroup",
  description: "探伤班组信息",
  columns: {
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    groupName: {
      name: "groupName",
      description: "班组名称",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    id: {
      name: "id",
      description: "班组编号",
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
    leaderId: {
      name: "leaderId",
      description: "班组组长",
      nullable: true,
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
  "groupName",
  "id",
  "isDelete",
  "leaderId",
  "operator",
  "status",
  "updateTime"
];

function create() {
  return {
  createTime: "2019-12-18 1:4:50",
  groupName: "班组名称488",
  id: 428,
  isDelete: 1,
  leaderId: 534,
  operator: 442,
  status: 422,
  updateTime: "2019-12-18 1:4:50"
};
}

detectGroup.columnsArray=columnsArray;
detectGroup.create=create;
module.exports=detectGroup;