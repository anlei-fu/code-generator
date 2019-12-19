let divisionUser = {
  name: "divisionUser",
  description: "工务段用户关系表",
  columns: {
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    divisionId: {
      name: "divisionId",
      description: "工务段id",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    id: {
      name: "id",
      description: "编号",
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
    updateTime: {
      name: "updateTime",
      description: "更新时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    userId: {
      name: "userId",
      description: "用户id",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    }
  }
};

let columnsArray = [
  "createTime",
  "divisionId",
  "id",
  "isDelete",
  "operator",
  "updateTime",
  "userId"
];

function create() {
  return {
  createTime: "2019-12-19 1:4:50",
  divisionId: 335,
  id: 632,
  isDelete: 47,
  operator: 549,
  updateTime: "2019-11-19 1:4:50",
  userId: 15
};
}

divisionUser.columnsArray=columnsArray;
divisionUser.create=create;
module.exports=divisionUser;