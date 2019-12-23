let loginUser = {
  name: "loginUser",
  description: "",
  columns: {
    id: {
      name: "id",
      description: "",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    name: {
      name: "name",
      description: "名字",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    password: {
      name: "password",
      description: "密码3",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    type: {
      name: "type",
      description: "",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    state: {
      name: "state",
      description: "",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    createTime: {
      name: "createTime",
      description: "",
      nullable: true,
      type: {
        name: "datetime"
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
  "id",
  "name",
  "password",
  "type",
  "state",
  "createTime",
  "updateTime"
];

function create() {
  return {
  id: 648,
  name: "名字444",
  password: "密码3125",
  type: "430",
  state: "587",
  createTime: "2019-11-23 1:3:35",
  updateTime: "2019-12-23 1:3:35"
};
}

loginUser.columnsArray=columnsArray;
loginUser.create=create;
module.exports=loginUser;