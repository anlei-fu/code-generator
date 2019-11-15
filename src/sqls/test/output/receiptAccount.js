let receiptAccount = {
  name: "receiptAccount",
  columns: {
    id: {
      name: "id",
      description: "编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    accountType: {
      name: "accountType",
      description: "账号类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    accountName: {
      name: "accountName",
      description: "账号名称",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    platAppId: {
      name: "platAppId",
      description: "支付平台ID",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    platAppSecret: {
      name: "platAppSecret",
      description: "支付平台Secret",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    merchantNo: {
      name: "merchantNo",
      description: "商户编号",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    signKey: {
      name: "signKey",
      description: "签名KEY",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    certPath: {
      name: "certPath",
      description: "证书路径",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    certPwd: {
      name: "certPwd",
      description: "证书密码",
      nullable: true,
      type: {
        name: "varchar",
        length: 32
      }
    },
    publicKey: {
      name: "publicKey",
      description: "加密公钥",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    privateKey: {
      name: "privateKey",
      description: "解密验签私钥",
      nullable: true,
      type: {
        name: "varchar",
        length: 64
      }
    },
    balance: {
      name: "balance",
      description: "账户余额",
      nullable: true,
      type: {
        name: "float"
      }
    },
    authRedirectUrl: {
      name: "authRedirectUrl",
      description: "API授权跳转URL",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    payRedirectUrl: {
      name: "payRedirectUrl",
      description: "支付完跳转URL",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    payCallbackUrl: {
      name: "payCallbackUrl",
      description: "支付结果回调URL",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    refundCallbackUrl: {
      name: "refundCallbackUrl",
      description: "退款结果回调URL",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    status: {
      name: "status",
      description: "状态",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
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
  "accountName",
  "platAppId",
  "platAppSecret",
  "merchantNo",
  "signKey",
  "certPath",
  "certPwd",
  "publicKey",
  "privateKey",
  "balance",
  "authRedirectUrl",
  "payRedirectUrl",
  "payCallbackUrl",
  "refundCallbackUrl",
  "status",
  "remark",
  "createTime"
];

function create() {
  return {
  id: 574,
  accountType: 835,
  accountName: "账号名称135",
  platAppId: "支付平台ID76",
  platAppSecret: "支付平台Secret294",
  merchantNo: "商户编号659",
  signKey: "签名KEY640",
  certPath: "证书路径158",
  certPwd: "证书密码553",
  publicKey: "加密公钥809",
  privateKey: "解密验签私钥914",
  balance: 955,
  authRedirectUrl: "API授权跳转URL950",
  payRedirectUrl: "支付完跳转URL846",
  payCallbackUrl: "支付结果回调URL397",
  refundCallbackUrl: "退款结果回调URL55",
  status: 474,
  remark: "备注173",
  createTime: "2019-10-15 1:5:48"
};
}

receiptAccount.columnsArray=columnsArray;
receiptAccount.create=create;
module.exports=receiptAccount;