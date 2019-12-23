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
    level: {
      name: "level",
      description: "权限等级",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    password: {
      name: "password",
      description: "密码",
      nullable: false,
      type: {
        name: "varchar",
        length: null
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
  account: "账号20",
  id: 103,
  level: 991,
  password: "密码186"
};
}

adminInfo.columnsArray=columnsArray;
adminInfo.create=create;
module.exports=adminInfo;