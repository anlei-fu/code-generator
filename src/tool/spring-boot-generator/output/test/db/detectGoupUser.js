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
        length: 11
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
    memberId: {
      name: "memberId",
      description: "成员编号",
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
  createTime: "2019-12-17 :3:35",
  groupId: 521,
  id: 216,
  isDelete: 619,
  memberId: 447,
  operator: 644,
  status: 857,
  updateTime: "2020-1-17 :3:35"
};
}

detectGoupUser.columnsArray=columnsArray;
detectGoupUser.create=create;
module.exports=detectGoupUser;