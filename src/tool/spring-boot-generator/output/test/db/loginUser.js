let loginUser = {
  name: "loginUser",
  description: "",
  columns: {
    createTime: {
      name: "createTime",
      description: "",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    id: {
      name: "id",
      description: "",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: 32
      }
    },
    name: {
      name: "name",
      description: "用户名",
      nullable: true,
      type: {
        name: "varchar",
        length: 225
      }
    },
    password: {
      name: "password",
      description: "密码",
      nullable: true,
      type: {
        name: "varchar",
        length: 225
      }
    },
    state: {
      name: "state",
      description: "",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    type: {
      name: "type",
      description: "",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    updateTime: {
      name: "updateTime",
      description: "",
      nullable: true,
      type: {
        name: "datetime"
      }
    }
  }
};

let columnsArray = [
  "createTime",
  "id",
  "name",
  "password",
  "state",
  "type",
  "updateTime"
];

function create() {
  return {
  createTime: "2019-12-15 2:3:41",
  id: 320,
  name: "用户名786",
  password: "密码193",
  state: "835",
  type: "3",
  updateTime: "2020-1-16 2:3:41"
};
}

loginUser.columnsArray=columnsArray;
loginUser.create=create;
module.exports=loginUser;