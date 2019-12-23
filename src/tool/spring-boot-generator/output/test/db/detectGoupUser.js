let detectGoupUser = {
  name: "detectGoupUser",
  description: "探伤班组人员",
  columns: {
    id: {
      name: "id",
      description: "组员编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    groupId: {
      name: "groupId",
      description: "班组编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    memberId: {
      name: "memberId",
      description: "成员编号",
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
  "groupId",
  "memberId",
  "status",
  "isDelete",
  "createTime",
  "updateTime",
  "operator"
];

function create() {
  return {
  id: 900,
  groupId: 605,
  memberId: 442,
  status: 107,
  isDelete: 10,
  createTime: "2020-1-23 1:3:35",
  updateTime: "2019-12-22 1:3:35",
  operator: 34
};
}

detectGoupUser.columnsArray=columnsArray;
detectGoupUser.create=create;
module.exports=detectGoupUser;