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
        length: null
      }
    },
    email: {
      name: "email",
      description: "邮箱",
      nullable: true,
      type: {
        name: "varchar",
        length: null
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
        length: null
      }
    },
    lastLoginIp: {
      name: "lastLoginIp",
      description: "最后登录ip",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    lastLoginTime: {
      name: "lastLoginTime",
      description: "最后登陆时间",
      nullable: true,
      type: {
        name: "bigint",
        length: null
      }
    },
    password: {
      name: "password",
      description: "密码",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    phoneNo: {
      name: "phoneNo",
      description: "电话",
      nullable: true,
      type: {
        name: "varchar",
        length: null
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
  createTime: 617,
  email: "邮箱519",
  id: 261,
  lastLoginIp: "最后登录ip303",
  lastLoginTime: 162,
  password: "密码22",
  phoneNo: "电话772"
};
}

userInfo.columnsArray=columnsArray;
userInfo.create=create;
module.exports=userInfo;