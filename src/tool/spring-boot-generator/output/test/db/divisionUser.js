let divisionUser = {
  name: "divisionUser",
  description: "工务段用户关系表",
  columns: {
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
    userId: {
      name: "userId",
      description: "用户id",
      nullable: true,
      type: {
        name: "int",
        length: null
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
    isDelete: {
      name: "isDelete",
      description: "删除标记",
      nullable: true,
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
  "userId",
  "divisionId",
  "isDelete",
  "createTime",
  "updateTime",
  "operator"
];

function create() {
  return {
  id: 930,
  userId: 884,
  divisionId: 869,
  isDelete: 747,
  createTime: "2020-1-23 1:3:35",
  updateTime: "2019-12-22 1:3:35",
  operator: 846
};
}

divisionUser.columnsArray=columnsArray;
divisionUser.create=create;
module.exports=divisionUser;