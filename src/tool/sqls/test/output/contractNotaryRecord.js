let contractNotaryRecord = {
  name: "contractNotaryRecord",
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
    contractId: {
      name: "contractId",
      description: "合同编号",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    proposer: {
      name: "proposer",
      description: "公证申请人",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    notaryChannel: {
      name: "notaryChannel",
      description: "公证渠道",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    notaryStatus: {
      name: "notaryStatus",
      description: "公证状态",
      nullable: true,
      type: {
        name: "int",
        length: 11
      }
    },
    notaryStartTime: {
      name: "notaryStartTime",
      description: "公证发起时间",
      nullable: true,
      type: {
        name: "datetime"
      }
    },
    notaryEndTime: {
      name: "notaryEndTime",
      description: "公证完成时间",
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
  "contractId",
  "proposer",
  "notaryChannel",
  "notaryStatus",
  "notaryStartTime",
  "notaryEndTime",
  "createTime"
];

function create() {
  return {
  id: 936,
  contractId: 114,
  proposer: 437,
  notaryChannel: 905,
  notaryStatus: 561,
  notaryStartTime: "2019-10-15 1:5:48",
  notaryEndTime: "2019-11-22 1:5:48",
  createTime: "2019-10-15 1:5:48"
};
}

contractNotaryRecord.columnsArray=columnsArray;
contractNotaryRecord.create=create;
module.exports=contractNotaryRecord;