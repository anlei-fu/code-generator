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
      description: "名字",
      nullable: true,
      type: {
        name: "varchar",
        length: 225
      }
    },
    password: {
      name: "password",
      description: "密码3",
      nullable: true,
      type: {
        name: "varchar",
        length: 26
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
  createTime: "2019-11-17 :3:35",
  id: 315,
  name: "名字546",
  password: "密码3450",
  state: "76",
  type: "563",
  updateTime: "2019-11-17 :3:35"
};
}

loginUser.columnsArray=columnsArray;
loginUser.create=create;
module.exports=loginUser;