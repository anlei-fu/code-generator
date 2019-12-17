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
        length: 11
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
        length: 11
      }
    },
    isDelete: {
      name: "isDelete",
      description: "删除标记",
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
        length: 11
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
  createTime: "2019-12-17 :3:35",
  divisionId: 62,
  id: 964,
  isDelete: 951,
  operator: 886,
  updateTime: "2020-1-17 :3:35",
  userId: 889
};
}

divisionUser.columnsArray=columnsArray;
divisionUser.create=create;
module.exports=divisionUser;