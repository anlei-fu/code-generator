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
        length: 32
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
    leaderId: {
      name: "leaderId",
      description: "班组组长",
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
  createTime: "2019-12-17 1::37",
  groupName: "班组名称774",
  id: 139,
  isDelete: 236,
  leaderId: 282,
  operator: 970,
  status: 385,
  updateTime: "2019-12-25 1::37"
};
}

detectGroup.columnsArray=columnsArray;
detectGroup.create=create;
module.exports=detectGroup;