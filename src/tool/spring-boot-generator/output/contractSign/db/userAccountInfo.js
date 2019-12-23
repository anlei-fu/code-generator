let userAccountInfo = {
  name: "userAccountInfo",
  description: "",
  columns: {
    id: {
      name: "id",
      description: "用户编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    accountType: {
      name: "accountType",
      description: "账号类: 1-手机 2-邮箱 3-支付宝小程序",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    userName: {
      name: "userName",
      description: "登录账号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    loginPwd: {
      name: "loginPwd",
      description: "登录密码",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    verifyState: {
      name: "verifyState",
      description: "实名状态",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    alipayMpid: {
      name: "alipayMpid",
      description: "支付宝小程序UID",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    lastLoginIp: {
      name: "lastLoginIp",
      description: "上次登录IP",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    lastLoginTime: {
      name: "lastLoginTime",
      description: "上次登录时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    createTime: {
      name: "createTime",
      description: "创建时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    }
  }
};

let columnsArray = [
  "id",
  "accountType",
  "userName",
  "loginPwd",
  "verifyState",
  "alipayMpid",
  "lastLoginIp",
  "lastLoginTime",
  "createTime"
];

function create() {
  return {
  id: 5,
  accountType: 180,
  userName: "登录账号149",
  loginPwd: "登录密码774",
  verifyState: 416,
  alipayMpid: "支付宝小程序UID497",
  lastLoginIp: "上次登录IP788",
  lastLoginTime: "2019-12-22 1:2:20",
  createTime: "2019-12-22 1:2:20"
};
}

userAccountInfo.columnsArray=columnsArray;
userAccountInfo.create=create;
module.exports=userAccountInfo;