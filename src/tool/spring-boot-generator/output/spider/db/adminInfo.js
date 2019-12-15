let adminInfo = {
  name: "adminInfo",
  description: "管理员",
  columns: {
    account: {
      name: "account",
      description: "账号",
      nullable: false,
      type: {
        name: "varchar",
        length: 30
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
    level: {
      name: "level",
      description: "权限等级",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    password: {
      name: "password",
      description: "密码",
      nullable: false,
      type: {
        name: "varchar",
        length: 45
      }
    }
  }
};

let columnsArray = [
  "account",
  "id",
  "level",
  "password"
];

function create() {
  return {
  account: "账号263",
  id: 965,
  level: 49,
  password: "密码600"
};
}

adminInfo.columnsArray=columnsArray;
adminInfo.create=create;
module.exports=adminInfo;