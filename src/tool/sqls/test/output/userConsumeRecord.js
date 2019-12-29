let userConsumeRecord = {
  name: "userConsumeRecord",
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
    accountId: {
      name: "accountId",
      description: "账户编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    contractId: {
      name: "contractId",
      description: "合同编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    consumeType: {
      name: "consumeType",
      description: "消费类型",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    consumeAmount: {
      name: "consumeAmount",
      description: "消费份数",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    consumeBefore: {
      name: "consumeBefore",
      description: "消费前剩余",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    consumeAfter: {
      name: "consumeAfter",
      description: "消费后剩余",
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
  id: 534,
  accountId: 387,
  contractId: 943,
  consumeType: 287,
  consumeAmount: 821,
  consumeBefore: 33,
  consumeAfter: 148,
  remark: "备注404",
  createTime: "2019-11-15 1:5:48"
};
}

userConsumeRecord.columnsArray=columnsArray;
userConsumeRecord.create=create;
module.exports=userConsumeRecord;