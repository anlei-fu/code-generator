let userAccountInfo = {
  name: "userAccountInfo",
  columns: {
    id: {
      name: "id",
      description: "用户编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    accountType: {
      name: "accountType",
      description: "账号类: 1-手机 2-邮箱 3-支付宝小程序",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    userName: {
      name: "userName",
      description: "登录账号",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    loginPwd: {
      name: "loginPwd",
      description: "登录密码",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    verifyState: {
      name: "verifyState",
      description: "实名状态",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    alipayMpid: {
      name: "alipayMpid",
      description: "支付宝小程序UID",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    lastLoginIp: {
      name: "lastLoginIp",
      description: "上次登录IP",
      nullable: true,
      type: {
        name: "varchar",
        length: 16
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
  id: 98,
  accountType: 899,
  userName: "登录账号899",
  loginPwd: "登录密码311",
  verifyState: 220,
  alipayMpid: "支付宝小程序UID715",
  lastLoginIp: "上次登录IP860",
  lastLoginTime: "2019-10-15 1:5:48",
  createTime: "2019-11-15 1:5:48"
};
}

userAccountInfo.columnsArray=columnsArray;
userAccountInfo.create=create;
module.exports=userAccountInfo;