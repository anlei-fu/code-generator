let userInfo = {
  name: "userInfo",
  description: "用户信息",
  columns: {
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "bigint",
        length: 64
      }
    },
    email: {
      name: "email",
      description: "邮箱",
      nullable: true,
      type: {
        name: "varchar",
        length: 25
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
        length: 11
      }
    },
    lastLoginIp: {
      name: "lastLoginIp",
      description: "最后登录ip",
      nullable: true,
      type: {
        name: "varchar",
        length: 20
      }
    },
    lastLoginTime: {
      name: "lastLoginTime",
      description: "最后登陆时间",
      nullable: true,
      type: {
        name: "bigint",
        length: 64
      }
    },
    password: {
      name: "password",
      description: "密码",
      nullable: true,
      type: {
        name: "varchar",
        length: 16
      }
    },
    phoneNo: {
      name: "phoneNo",
      description: "电话",
      nullable: true,
      type: {
        name: "varchar",
        length: 15
      }
    }
  }
};

let columnsArray = [
  "createTime",
  "email",
  "id",
  "lastLoginIp",
  "lastLoginTime",
  "password",
  "phoneNo"
];

function create() {
  return {
  createTime: 3,
  email: "邮箱168",
  id: 45,
  lastLoginIp: "最后登录ip247",
  lastLoginTime: 896,
  password: "密码3",
  phoneNo: "电话336"
};
}

userInfo.columnsArray=columnsArray;
userInfo.create=create;
module.exports=userInfo;