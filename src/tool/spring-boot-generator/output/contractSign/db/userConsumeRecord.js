let userConsumeRecord = {
  name: "userConsumeRecord",
  description: "",
  columns: {
    id: {
      name: "id",
      description: "编号",
      isPk: true,
      nullable: false,
      type: {
        name: "int",
        length: null
      }
    },
    accountId: {
      name: "accountId",
      description: "账户编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    contractId: {
      name: "contractId",
      description: "合同编号",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    consumeType: {
      name: "consumeType",
      description: "消费类型",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    consumeAmount: {
      name: "consumeAmount",
      description: "消费份数",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    consumeBefore: {
      name: "consumeBefore",
      description: "消费前剩余",
      nullable: true,
      type: {
        name: "int",
        length: null
      }
    },
    consumeAfter: {
      name: "consumeAfter",
      description: "消费后剩余",
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
  "accountId",
  "contractId",
  "consumeType",
  "consumeAmount",
  "consumeBefore",
  "consumeAfter",
  "remark",
  "createTime"
];

function create() {
  return {
  id: 793,
  accountId: 916,
  contractId: 264,
  consumeType: 736,
  consumeAmount: 160,
  consumeBefore: 316,
  consumeAfter: 336,
  remark: "备注552",
  createTime: "2019-12-30 1:2:20"
};
}

userConsumeRecord.columnsArray=columnsArray;
userConsumeRecord.create=create;
module.exports=userConsumeRecord;