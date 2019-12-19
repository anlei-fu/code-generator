let detectGoupUser = {
  name: "detectGoupUser",
  description: "探伤班组人员",
  columns: {
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "datetime"
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
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: false,
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
  "groupId",
  "id",
  "isDelete",
  "memberId",
  "operator",
  "status",
  "updateTime"
];

function create() {
  return {
  createTime: "2020-1-19 1:4:50",
  groupId: 258,
  id: 836,
  isDelete: 889,
  memberId: 414,
  operator: 101,
  status: 780,
  updateTime: "2019-12-26 1:4:50"
};
}

detectGoupUser.columnsArray=columnsArray;
detectGoupUser.create=create;
module.exports=detectGoupUser;