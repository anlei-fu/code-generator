let contractMain = {
  name: "contractMain",
  description: "",
  columns: {
    id: {
      name: "id",
      description: "合同编号",
      isPk: true,
      autoIncrement: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    userId: {
      name: "userId",
      description: "合同发起人",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    contractType: {
      name: "contractType",
      description: "合同类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    contractTitle: {
      name: "contractTitle",
      description: "合同标题",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    rawContractFile: {
      name: "rawContractFile",
      description: "原始合同文件",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    rawContractHash: {
      name: "rawContractHash",
      description: "原始合同Hash",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    signExpireTime: {
      name: "signExpireTime",
      description: "签约截止日期",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    contractState: {
      name: "contractState",
      description: "合同状态",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    signContractFile: {
      name: "signContractFile",
      description: "签约合同文件",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    signContractHash: {
      name: "signContractHash",
      description: "签约合同Hash",
      nullable: true,
      type: {
        name: "varchar",
        length: null
      }
    },
    effectTime: {
      name: "effectTime",
      description: "合同生效时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    expireTime: {
      name: "expireTime",
      description: "合同失效时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    validPeriod: {
      name: "validPeriod",
      description: "合同有效期",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    contractPrice: {
      name: "contractPrice",
      description: "合同价格",
      nullable: true,
      type: {
        name: "int",
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
  "userId",
  "contractType",
  "contractTitle",
  "rawContractFile",
  "rawContractHash",
  "signExpireTime",
  "contractState",
  "signContractFile",
  "signContractHash",
  "effectTime",
  "expireTime",
  "validPeriod",
  "contractPrice",
  "createTime"
];

function create() {
  return {
  id: 718,
  userId: 470,
  contractType: 783,
  contractTitle: "合同标题64",
  rawContractFile: "原始合同文件709",
  rawContractHash: "原始合同Hash128",
  signExpireTime: "2019-12-22 1:2:20",
  contractState: 675,
  signContractFile: "签约合同文件928",
  signContractHash: "签约合同Hash258",
  effectTime: "2019-12-23 1:2:20",
  expireTime: "2019-11-23 1:2:20",
  validPeriod: 348,
  contractPrice: 524,
  createTime: "2019-11-23 1:2:20"
};
}

contractMain.columnsArray=columnsArray;
contractMain.create=create;
module.exports=contractMain;