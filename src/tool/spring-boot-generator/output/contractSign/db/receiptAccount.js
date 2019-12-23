let receiptAccount = {
  name: "receiptAccount",
  description: "",
  columns: {
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
    accountType: {
      name: "accountType",
      description: "账号类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    accountName: {
      name: "accountName",
      description: "账号名称",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    platAppId: {
      name: "platAppId",
      description: "支付平台ID",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    platAppSecret: {
      name: "platAppSecret",
      description: "支付平台Secret",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    merchantNo: {
      name: "merchantNo",
      description: "商户编号",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    signKey: {
      name: "signKey",
      description: "签名KEY",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    certPath: {
      name: "certPath",
      description: "证书路径",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    certPwd: {
      name: "certPwd",
      description: "证书密码",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    publicKey: {
      name: "publicKey",
      description: "加密公钥",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    privateKey: {
      name: "privateKey",
      description: "解密验签私钥",
      nullable: true,
      type: {
        name: "varchar",
        length: null
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
        length: null
      }
    },
    payRedirectUrl: {
      name: "payRedirectUrl",
      description: "支付完跳转URL",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    payCallbackUrl: {
      name: "payCallbackUrl",
      description: "支付结果回调URL",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    refundCallbackUrl: {
      name: "refundCallbackUrl",
      description: "退款结果回调URL",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    status: {
      name: "status",
      description: "状态",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    remark: {
      name: "remark",
      description: "备注",
      nullable: true,
      type: {
        name: "varchar",
        length: null
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
  id: 86,
  accountType: 81,
  accountName: "账号名称204",
  platAppId: "支付平台ID465",
  platAppSecret: "支付平台Secret802",
  merchantNo: "商户编号188",
  signKey: "签名KEY936",
  certPath: "证书路径75",
  certPwd: "证书密码507",
  publicKey: "加密公钥602",
  privateKey: "解密验签私钥449",
  balance: 866,
  authRedirectUrl: "API授权跳转URL240",
  payRedirectUrl: "支付完跳转URL344",
  payCallbackUrl: "支付结果回调URL725",
  refundCallbackUrl: "退款结果回调URL87",
  status: 664,
  remark: "备注855",
  createTime: "2019-12-23 1:2:20"
};
}

receiptAccount.columnsArray=columnsArray;
receiptAccount.create=create;
module.exports=receiptAccount;