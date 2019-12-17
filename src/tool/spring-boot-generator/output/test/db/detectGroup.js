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
  createTime: "2020-1-17 :3:35",
  groupName: "班组名称461",
  id: 409,
  isDelete: 948,
  leaderId: 107,
  operator: 508,
  status: 175,
  updateTime: "2019-11-17 :3:35"
};
}

detectGroup.columnsArray=columnsArray;
detectGroup.create=create;
module.exports=detectGroup;