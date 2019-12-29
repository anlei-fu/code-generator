let contractMain = {
  name: "contractMain",
  columns: {
    id: {
      name: "id",
      description: "合同编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: 11
      }
    },
    userId: {
      name: "userId",
      description: "合同发起人",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    contractType: {
      name: "contractType",
      description: "合同类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    contractTitle: {
      name: "contractTitle",
      description: "合同标题",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    rawContractFile: {
      name: "rawContractFile",
      description: "原始合同文件",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    rawContractHash: {
      name: "rawContractHash",
      description: "原始合同Hash",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
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
        length: 11
      }
    },
    signContractFile: {
      name: "signContractFile",
      description: "签约合同文件",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
      }
    },
    signContractHash: {
      name: "signContractHash",
      description: "签约合同Hash",
      nullable: true,
      type: {
        name: "varchar",
        length: 128
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
        length: 11
      }
    },
    contractPrice: {
      name: "contractPrice",
      description: "合同价格",
      nullable: true,
      type: {
        name: "int",
        length: 11
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
  id: 371,
  userId: 745,
  contractType: 956,
  contractTitle: "合同标题256",
  rawContractFile: "原始合同文件344",
  rawContractHash: "原始合同Hash109",
  signExpireTime: "2019-12-15 1:5:48",
  contractState: 430,
  signContractFile: "签约合同文件619",
  signContractHash: "签约合同Hash899",
  effectTime: "2019-11-15 1:5:48",
  expireTime: "2019-11-14 1:5:48",
  validPeriod: 860,
  contractPrice: 209,
  createTime: "2019-11-15 1:5:48"
};
}

contractMain.columnsArray=columnsArray;
contractMain.create=create;
module.exports=contractMain;